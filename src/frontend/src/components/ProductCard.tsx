import { useCartStore } from "@/store/cartStore";
import type { Product } from "@/types";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const shouldReduceMotion = useReducedMotion();
  const priceDisplay = `PKR ${Number(product.price).toLocaleString()}`;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      selectedSize: product.sizes[0] ?? "One Size",
      selectedColor: product.colors[0] ?? "Default",
      quantity: 1,
      imageUrl: product.imageUrls[0] ?? "",
    });
    toast.success(`${product.name} added to cart`, {
      description: `Size: ${product.sizes[0] ?? "One Size"}`,
    });
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.08 }
      }
      className="relative group"
      data-ocid={`product.item.${index + 1}`}
    >
      {/* Card-level navigation link covers the whole card */}
      <Link
        to="/product/$id"
        params={{ id: product.id.toString() }}
        className="block"
        data-ocid={`product.link.${index + 1}`}
      >
        {/* Image */}
        <div className="relative overflow-hidden bg-muted aspect-[3/4] rounded-sm mb-3">
          {product.imageUrls[0] ? (
            <img
              src={product.imageUrls[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary">
              <span className="text-muted-foreground font-display text-xs tracking-widest uppercase">
                No Image
              </span>
            </div>
          )}
          {/* Category badge */}
          {product.category && (
            <span className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm text-foreground text-[10px] font-display tracking-widest uppercase px-2 py-1 rounded-sm">
              {product.category}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="space-y-1">
          <h3 className="font-display text-[11px] tracking-widest uppercase text-foreground group-hover:text-primary transition-colors duration-200 truncate">
            {product.name}
          </h3>
          <p className="font-body text-sm text-muted-foreground line-clamp-1">
            {product.description}
          </p>
          <div className="flex items-center justify-between pt-1">
            <span className="font-display text-sm font-semibold text-foreground">
              {priceDisplay}
            </span>
          </div>
        </div>
      </Link>

      {/* Add to cart — sibling to Link, not nested inside it */}
      <button
        type="button"
        onClick={handleAddToCart}
        className="mt-3 w-full bg-foreground text-background font-display text-[11px] tracking-widest uppercase py-2.5 px-4 rounded-sm hover:bg-primary transition-smooth"
        data-ocid={`product.add_button.${index + 1}`}
      >
        Add to Cart
      </button>
    </motion.div>
  );
}
