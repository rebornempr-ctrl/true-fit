import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useProductById } from "@/hooks/useProducts";
import { useCartStore } from "@/store/cartStore";
import { Link, useParams } from "@tanstack/react-router";
import { ChevronLeft, Minus, Plus } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function ProductPage() {
  const { id } = useParams({ strict: false }) as { id: string };
  const productId = BigInt(id ?? "0");

  const { data: product, isLoading } = useProductById(productId);
  const addItem = useCartStore((s) => s.addItem);

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [qty, setQty] = useState(1);
  const [imageIdx, setImageIdx] = useState(0);

  const handleAddToCart = () => {
    if (!product) return;
    if (product.sizes.length > 0 && !selectedSize) {
      toast.error("Please select a size");
      return;
    }
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      selectedSize: selectedSize || "One Size",
      selectedColor: selectedColor || product.colors[0] || "Default",
      quantity: qty,
      imageUrl: product.imageUrls[0] ?? "",
    });
    toast.success(`${product.name} added to cart`, {
      description: `Size: ${selectedSize || "One Size"} · Qty: ${qty}`,
    });
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <Skeleton className="aspect-[3/4] w-full rounded-sm" />
          <div className="space-y-4 pt-4">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-[60vh] gap-4"
        data-ocid="product.not_found"
      >
        <h2 className="font-display text-2xl uppercase tracking-widest text-foreground">
          Product Not Found
        </h2>
        <Link
          to="/shop"
          className="font-display text-[11px] tracking-widest uppercase text-primary hover:underline"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div data-ocid="product.page">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link
          to="/shop"
          className="flex items-center gap-1 font-display text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
          data-ocid="product.back_link"
        >
          <ChevronLeft size={14} />
          Back to Shop
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Image gallery */}
          <div className="space-y-4">
            <motion.div
              key={imageIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="aspect-[3/4] rounded-sm overflow-hidden bg-muted"
              data-ocid="product.main_image"
            >
              {product.imageUrls[imageIdx] ? (
                <img
                  src={product.imageUrls[imageIdx]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-secondary">
                  <span className="font-display text-xs tracking-widest uppercase text-muted-foreground">
                    No Image
                  </span>
                </div>
              )}
            </motion.div>

            {product.imageUrls.length > 1 && (
              <div className="flex gap-3 overflow-x-auto">
                {product.imageUrls.map((url, i) => (
                  <button
                    key={url || `img-${i}`}
                    type="button"
                    onClick={() => setImageIdx(i)}
                    className={`flex-shrink-0 w-20 h-24 rounded-sm overflow-hidden bg-muted border-2 transition-colors duration-200 ${
                      i === imageIdx ? "border-primary" : "border-transparent"
                    }`}
                    data-ocid={`product.thumbnail.${i + 1}`}
                  >
                    <img
                      src={url}
                      alt={`${product.name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product details */}
          <div className="space-y-6" data-ocid="product.details">
            <div>
              <Badge
                variant="secondary"
                className="font-display text-[10px] tracking-widest uppercase rounded-sm mb-3"
              >
                {product.category}
              </Badge>
              <h1 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-foreground mb-2">
                {product.name}
              </h1>
              <p className="font-display text-xl font-semibold text-foreground">
                PKR {Number(product.price).toLocaleString()}
              </p>
            </div>

            <p className="font-body text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Sizes */}
            {product.sizes.length > 0 && (
              <div className="space-y-3">
                <p className="font-display text-[11px] tracking-widest uppercase text-foreground">
                  Size{" "}
                  {selectedSize && (
                    <span className="text-primary">— {selectedSize}</span>
                  )}
                </p>
                <div className="flex flex-wrap gap-2" data-ocid="product.sizes">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[44px] h-11 px-3 rounded-sm border font-display text-xs tracking-widest uppercase transition-smooth ${
                        selectedSize === size
                          ? "bg-foreground text-background border-foreground"
                          : "bg-background text-foreground border-border hover:border-foreground"
                      }`}
                      data-ocid={`product.size.${size.toLowerCase()}_button`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {product.colors.length > 0 && (
              <div className="space-y-3">
                <p className="font-display text-[11px] tracking-widest uppercase text-foreground">
                  Color{" "}
                  {selectedColor && (
                    <span className="text-primary">— {selectedColor}</span>
                  )}
                </p>
                <div
                  className="flex flex-wrap gap-2"
                  data-ocid="product.colors"
                >
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`h-10 px-4 rounded-sm border font-display text-xs tracking-widest uppercase transition-smooth ${
                        selectedColor === color
                          ? "bg-foreground text-background border-foreground"
                          : "bg-background text-foreground border-border hover:border-foreground"
                      }`}
                      data-ocid={`product.color.${color.toLowerCase()}_button`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-3">
              <p className="font-display text-[11px] tracking-widest uppercase text-foreground">
                Quantity
              </p>
              <div
                className="flex items-center gap-4"
                data-ocid="product.quantity_control"
              >
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-border rounded-sm hover:border-foreground transition-colors duration-200"
                  data-ocid="product.qty_minus_button"
                >
                  <Minus size={14} />
                </button>
                <span className="font-display text-sm w-6 text-center">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-border rounded-sm hover:border-foreground transition-colors duration-200"
                  data-ocid="product.qty_plus_button"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <Button
              onClick={handleAddToCart}
              className="w-full bg-foreground text-background font-display text-[11px] tracking-widest uppercase py-6 rounded-sm hover:bg-primary transition-smooth h-auto"
              data-ocid="product.add_to_cart_button"
            >
              Add to Cart
            </Button>

            <Link
              to="/cart"
              className="block text-center font-display text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-ocid="product.view_cart_link"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
