import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useContactSubmissions } from "@/hooks/useAdmin";
import {
  useAddProduct,
  useAllProducts,
  useDeleteProduct,
  useToggleProductActive,
  useUpdateProduct,
} from "@/hooks/useProducts";
import type { Product } from "@/types";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useQueryClient } from "@tanstack/react-query";
import {
  Edit2,
  Eye,
  EyeOff,
  LogOut,
  Mail,
  Package,
  Plus,
  Trash2,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ProductFormData {
  name: string;
  description: string;
  price: string;
  category: string;
  sizes: string;
  colors: string;
  imageUrls: string;
}

function ProductForm({
  product,
  onClose,
}: {
  product?: Product;
  onClose: () => void;
}) {
  const addProduct = useAddProduct();
  const updateProduct = useUpdateProduct();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    defaultValues: product
      ? {
          name: product.name,
          description: product.description,
          price: Number(product.price).toString(),
          category: product.category,
          sizes: product.sizes.join(", "),
          colors: product.colors.join(", "),
          imageUrls: product.imageUrls.join(", "),
        }
      : undefined,
  });

  const onSubmit = async (data: ProductFormData) => {
    const args = {
      name: data.name,
      description: data.description,
      price: BigInt(Math.round(Number(data.price))),
      category: data.category,
      sizes: data.sizes
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      colors: data.colors
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      imageUrls: data.imageUrls
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };

    try {
      if (product) {
        await updateProduct.mutateAsync({ ...args, id: product.id });
        toast.success("Product updated successfully");
      } else {
        await addProduct.mutateAsync(args);
        toast.success("Product added successfully");
      }
      onClose();
    } catch {
      toast.error("Failed to save product. Please try again.");
    }
  };

  const isPending = addProduct.isPending || updateProduct.isPending;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      data-ocid="admin.product_form"
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 space-y-1">
          <Label className="font-display text-[11px] tracking-widest uppercase">
            Name
          </Label>
          <Input
            {...register("name", { required: "Required" })}
            placeholder="Product name"
            data-ocid="admin.product_name_input"
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <Label className="font-display text-[11px] tracking-widest uppercase">
            Price (PKR)
          </Label>
          <Input
            {...register("price", { required: "Required" })}
            placeholder="3500"
            type="number"
            data-ocid="admin.product_price_input"
          />
          {errors.price && (
            <p className="text-xs text-destructive">{errors.price.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <Label className="font-display text-[11px] tracking-widest uppercase">
            Category
          </Label>
          <Input
            {...register("category", { required: "Required" })}
            placeholder="Tops"
            data-ocid="admin.product_category_input"
          />
          {errors.category && (
            <p className="text-xs text-destructive">
              {errors.category.message}
            </p>
          )}
        </div>

        <div className="col-span-2 space-y-1">
          <Label className="font-display text-[11px] tracking-widest uppercase">
            Description
          </Label>
          <Textarea
            {...register("description")}
            placeholder="Product description..."
            rows={3}
            className="resize-none"
            data-ocid="admin.product_description_textarea"
          />
        </div>

        <div className="space-y-1">
          <Label className="font-display text-[11px] tracking-widest uppercase">
            Sizes (comma separated)
          </Label>
          <Input
            {...register("sizes")}
            placeholder="XS, S, M, L, XL"
            data-ocid="admin.product_sizes_input"
          />
        </div>

        <div className="space-y-1">
          <Label className="font-display text-[11px] tracking-widest uppercase">
            Colors (comma separated)
          </Label>
          <Input
            {...register("colors")}
            placeholder="Black, White, Beige"
            data-ocid="admin.product_colors_input"
          />
        </div>

        <div className="col-span-2 space-y-1">
          <Label className="font-display text-[11px] tracking-widest uppercase">
            Image URLs (comma separated)
          </Label>
          <Input
            {...register("imageUrls")}
            placeholder="https://..."
            data-ocid="admin.product_images_input"
          />
          <p className="text-xs text-muted-foreground">
            Paste image URLs separated by commas
          </p>
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <Button
          type="submit"
          disabled={isPending}
          className="flex-1 bg-foreground text-background font-display text-[11px] tracking-widest uppercase rounded-sm hover:bg-primary transition-smooth h-10"
          data-ocid="admin.product_save_button"
        >
          {isPending ? "Saving..." : product ? "Update Product" : "Add Product"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="font-display text-[11px] tracking-widest uppercase rounded-sm h-10"
          data-ocid="admin.product_cancel_button"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default function AdminPage() {
  const { isAuthenticated, isInitializing, isLoggingIn, login, clear } =
    useInternetIdentity();
  const queryClient = useQueryClient();
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();
  const [showAddForm, setShowAddForm] = useState(false);

  const { data: products, isLoading: loadingProducts } = useAllProducts();
  const { data: contacts, isLoading: loadingContacts } =
    useContactSubmissions();
  const deleteProduct = useDeleteProduct();
  const toggleActive = useToggleProductActive();

  const handleLogout = () => {
    clear();
    queryClient.clear();
  };

  const handleDelete = async (id: bigint) => {
    if (!confirm("Delete this product? This cannot be undone.")) return;
    try {
      await deleteProduct.mutateAsync(id);
      toast.success("Product deleted");
    } catch {
      toast.error("Failed to delete product");
    }
  };

  const handleToggle = async (id: bigint) => {
    try {
      await toggleActive.mutateAsync(id);
      toast.success("Product visibility updated");
    } catch {
      toast.error("Failed to update product");
    }
  };

  if (!isAuthenticated) {
    return (
      <div
        className="min-h-screen bg-background flex items-center justify-center"
        data-ocid="admin.login_page"
      >
        <Toaster position="bottom-right" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-sm w-full mx-4 text-center space-y-8"
        >
          <div>
            <h1 className="font-display text-2xl font-bold uppercase tracking-[0.2em] text-foreground mb-2">
              True Fit
            </h1>
            <p className="font-body text-sm text-muted-foreground">
              Admin Panel
            </p>
          </div>

          <div className="bg-card border border-border rounded-sm p-8 space-y-6">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto">
              <Package size={24} className="text-muted-foreground" />
            </div>
            <div>
              <h2 className="font-display text-sm uppercase tracking-widest text-foreground mb-2">
                Admin Access Required
              </h2>
              <p className="font-body text-xs text-muted-foreground">
                Sign in with Internet Identity to manage your store.
              </p>
            </div>
            <Button
              onClick={login}
              disabled={isInitializing || isLoggingIn}
              className="w-full bg-foreground text-background font-display text-[11px] tracking-widest uppercase rounded-sm hover:bg-primary transition-smooth h-10 disabled:opacity-60"
              data-ocid="admin.login_button"
            >
              {isInitializing
                ? "Loading..."
                : isLoggingIn
                  ? "Signing In..."
                  : "Sign In"}
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" data-ocid="admin.page">
      <Toaster position="bottom-right" />

      {/* Admin header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="font-display text-sm tracking-[0.2em] uppercase font-semibold text-foreground">
              True Fit — Admin
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="font-display text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-ocid="admin.view_site_link"
            >
              View Site
            </a>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="font-display text-[11px] tracking-widest uppercase rounded-sm h-8"
              data-ocid="admin.logout_button"
            >
              <LogOut size={13} className="mr-1.5" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <Tabs defaultValue="products" data-ocid="admin.tabs">
          <TabsList className="mb-8 bg-muted rounded-sm">
            <TabsTrigger
              value="products"
              className="font-display text-[11px] tracking-widest uppercase rounded-sm data-[state=active]:bg-card"
              data-ocid="admin.products_tab"
            >
              <Package size={14} className="mr-2" />
              Products
            </TabsTrigger>
            <TabsTrigger
              value="contacts"
              className="font-display text-[11px] tracking-widest uppercase rounded-sm data-[state=active]:bg-card"
              data-ocid="admin.contacts_tab"
            >
              <Mail size={14} className="mr-2" />
              Messages
              {contacts && contacts.length > 0 && (
                <Badge className="ml-2 text-[10px] h-4 min-w-[16px] px-1 rounded-full bg-primary text-primary-foreground">
                  {contacts.length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          {/* Products tab */}
          <TabsContent value="products" data-ocid="admin.products_panel">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-sm uppercase tracking-widest text-foreground">
                {products?.length ?? 0} Products
              </h2>
              <Button
                type="button"
                onClick={() => setShowAddForm(true)}
                className="bg-foreground text-background font-display text-[11px] tracking-widest uppercase rounded-sm hover:bg-primary transition-smooth h-9"
                data-ocid="admin.add_product_button"
              >
                <Plus size={14} className="mr-1.5" />
                Add Product
              </Button>
            </div>

            {loadingProducts ? (
              <div className="space-y-3">
                {["a", "b", "c", "d"].map((k) => (
                  <Skeleton key={k} className="h-20 w-full rounded-sm" />
                ))}
              </div>
            ) : products && products.length > 0 ? (
              <div className="space-y-2" data-ocid="admin.products_list">
                {products.map((product, i) => (
                  <motion.div
                    key={product.id.toString()}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="bg-card border border-border rounded-sm p-4 flex items-center gap-4"
                    data-ocid={`admin.product.item.${i + 1}`}
                  >
                    {/* Thumbnail */}
                    <div className="w-14 h-[72px] flex-shrink-0 bg-muted rounded-sm overflow-hidden">
                      {product.imageUrls[0] ? (
                        <img
                          src={product.imageUrls[0]}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-secondary" />
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-display text-sm font-semibold uppercase tracking-wider text-foreground truncate">
                          {product.name}
                        </span>
                        <Badge
                          variant={product.isActive ? "default" : "secondary"}
                          className="text-[10px] rounded-sm flex-shrink-0"
                        >
                          {product.isActive ? "Active" : "Hidden"}
                        </Badge>
                      </div>
                      <div className="flex gap-3 text-xs font-body text-muted-foreground">
                        <span>
                          PKR {Number(product.price).toLocaleString()}
                        </span>
                        <span>·</span>
                        <span>{product.category}</span>
                        <span>·</span>
                        <span>{product.sizes.join(", ")}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => handleToggle(product.id)}
                        className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-200"
                        title={
                          product.isActive ? "Hide product" : "Show product"
                        }
                        data-ocid={`admin.toggle_button.${i + 1}`}
                      >
                        {product.isActive ? (
                          <Eye size={15} />
                        ) : (
                          <EyeOff size={15} />
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingProduct(product)}
                        className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-200"
                        title="Edit product"
                        data-ocid={`admin.edit_button.${i + 1}`}
                      >
                        <Edit2 size={15} />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(product.id)}
                        className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-destructive transition-colors duration-200"
                        title="Delete product"
                        data-ocid={`admin.delete_button.${i + 1}`}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div
                className="text-center py-16 border border-dashed border-border rounded-sm"
                data-ocid="admin.products_empty_state"
              >
                <Package
                  size={32}
                  className="text-muted-foreground mx-auto mb-3"
                />
                <p className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  No products yet
                </p>
                <Button
                  type="button"
                  onClick={() => setShowAddForm(true)}
                  className="bg-foreground text-background font-display text-[11px] tracking-widest uppercase rounded-sm hover:bg-primary transition-smooth h-9"
                  data-ocid="admin.add_first_product_button"
                >
                  Add Your First Product
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Contacts tab */}
          <TabsContent value="contacts" data-ocid="admin.contacts_panel">
            <h2 className="font-display text-sm uppercase tracking-widest text-foreground mb-6">
              Customer Messages
            </h2>

            {loadingContacts ? (
              <div className="space-y-3">
                {["a", "b", "c"].map((k) => (
                  <Skeleton key={k} className="h-24 w-full rounded-sm" />
                ))}
              </div>
            ) : contacts && contacts.length > 0 ? (
              <div className="space-y-3" data-ocid="admin.contacts_list">
                {contacts.map((contact, i) => (
                  <motion.div
                    key={contact.id.toString()}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card border border-border rounded-sm p-5"
                    data-ocid={`admin.contact.item.${i + 1}`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <span className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                          {contact.name}
                        </span>
                        <span className="font-body text-xs text-muted-foreground ml-3">
                          {contact.email}
                        </span>
                      </div>
                      <span className="font-body text-xs text-muted-foreground flex-shrink-0">
                        {new Date(
                          Number(contact.createdAt) / 1_000_000,
                        ).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {contact.message}
                    </p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div
                className="text-center py-16 border border-dashed border-border rounded-sm"
                data-ocid="admin.contacts_empty_state"
              >
                <Mail
                  size={32}
                  className="text-muted-foreground mx-auto mb-3"
                />
                <p className="font-display text-sm uppercase tracking-widest text-muted-foreground">
                  No messages yet
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Add product dialog */}
      <Dialog
        open={showAddForm}
        onOpenChange={setShowAddForm}
        data-ocid="admin.add_product_dialog"
      >
        <DialogContent
          className="max-w-2xl rounded-sm"
          data-ocid="admin.add_product_modal"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-sm uppercase tracking-widest">
              Add New Product
            </DialogTitle>
          </DialogHeader>
          <ProductForm onClose={() => setShowAddForm(false)} />
        </DialogContent>
      </Dialog>

      {/* Edit product dialog */}
      <Dialog
        open={!!editingProduct}
        onOpenChange={(open) => !open && setEditingProduct(undefined)}
        data-ocid="admin.edit_product_dialog"
      >
        <DialogContent
          className="max-w-2xl rounded-sm"
          data-ocid="admin.edit_product_modal"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-sm uppercase tracking-widest">
              Edit Product
            </DialogTitle>
          </DialogHeader>
          {editingProduct && (
            <ProductForm
              product={editingProduct}
              onClose={() => setEditingProduct(undefined)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
