import { useCartStore } from "@/store/cartStore";
import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";

export function CartIcon() {
  const totalItems = useCartStore((s) => s.totalItems());

  return (
    <Link
      to="/cart"
      className="relative flex items-center justify-center w-10 h-10 transition-smooth hover:text-primary"
      aria-label={`Cart, ${totalItems} items`}
      data-ocid="nav.cart_link"
    >
      <ShoppingBag size={20} strokeWidth={1.5} />
      {totalItems > 0 && (
        <span
          className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-display font-semibold leading-none px-1"
          data-ocid="nav.cart_badge"
        >
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </Link>
  );
}
