import { AnimatedSection } from "@/components/AnimatedSection";
import { useCartStore } from "@/store/cartStore";
import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const WHATSAPP_NUMBER = "923001234567"; // Replace with real number

function buildWhatsAppMessage(
  items: ReturnType<typeof useCartStore.getState>["items"],
  total: bigint,
): string {
  const lines = items.map(
    (item) =>
      `• ${item.name} | Size: ${item.selectedSize} | Color: ${item.selectedColor} | Qty: ${item.quantity} | PKR ${Number(item.price).toLocaleString()}`,
  );
  const orderText = [
    "Hello True Fit! I'd like to place an order:",
    "",
    ...lines,
    "",
    `Total: PKR ${Number(total).toLocaleString()}`,
    "",
    "Please confirm availability.",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderText)}`;
}

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const clearCart = useCartStore((s) => s.clearCart);
  const totalPrice = useCartStore((s) => s.totalPrice());

  const whatsappUrl = buildWhatsAppMessage(items, totalPrice);

  return (
    <div data-ocid="cart.page">
      {/* Page header */}
      <section className="bg-muted/30 border-b border-border py-16">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection direction="up">
            <h1 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground">
              Your Cart
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {items.length === 0 ? (
          <AnimatedSection direction="up">
            <div
              className="text-center py-24 flex flex-col items-center gap-6"
              data-ocid="cart.empty_state"
            >
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                <ShoppingBag
                  size={32}
                  strokeWidth={1}
                  className="text-muted-foreground"
                />
              </div>
              <div>
                <h2 className="font-display text-xl uppercase tracking-widest text-foreground mb-2">
                  Your cart is empty
                </h2>
                <p className="font-body text-muted-foreground">
                  Discover our collection and add pieces you love.
                </p>
              </div>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-foreground text-background font-display text-[11px] tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-primary transition-smooth"
                data-ocid="cart.shop_now_button"
              >
                Shop Now
              </Link>
            </div>
          </AnimatedSection>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Items list */}
            <div
              className="lg:col-span-2 space-y-0"
              data-ocid="cart.items_list"
            >
              <div className="border-b border-border pb-4 mb-4 flex items-center justify-between">
                <span className="font-display text-[11px] tracking-widest uppercase text-muted-foreground">
                  {items.length} {items.length === 1 ? "Item" : "Items"}
                </span>
                <button
                  type="button"
                  onClick={clearCart}
                  className="font-display text-[11px] tracking-widest uppercase text-muted-foreground hover:text-destructive transition-colors duration-200"
                  data-ocid="cart.clear_button"
                >
                  Clear All
                </button>
              </div>

              <AnimatePresence initial={false}>
                {items.map((item, i) => (
                  <motion.div
                    key={`${item.productId}-${item.selectedSize}-${item.selectedColor}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="border-b border-border overflow-hidden"
                    data-ocid={`cart.item.${i + 1}`}
                  >
                    <div className="flex gap-5 py-6">
                      {/* Image */}
                      <Link
                        to="/product/$id"
                        params={{ id: item.productId.toString() }}
                        className="flex-shrink-0 w-24 h-32 bg-muted rounded-sm overflow-hidden"
                      >
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-secondary" />
                        )}
                      </Link>

                      {/* Details */}
                      <div className="flex-1 min-w-0 space-y-2">
                        <Link
                          to="/product/$id"
                          params={{ id: item.productId.toString() }}
                          className="font-display text-[11px] tracking-widest uppercase text-foreground hover:text-primary transition-colors duration-200 truncate block"
                        >
                          {item.name}
                        </Link>
                        <div className="flex gap-3 text-xs font-body text-muted-foreground">
                          <span>Size: {item.selectedSize}</span>
                          <span>·</span>
                          <span>Color: {item.selectedColor}</span>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.productId,
                                  item.selectedSize,
                                  item.selectedColor,
                                  item.quantity - 1,
                                )
                              }
                              className="w-7 h-7 flex items-center justify-center border border-border rounded-sm hover:border-foreground transition-colors duration-200"
                              data-ocid={`cart.qty_minus.${i + 1}`}
                            >
                              <Minus size={12} />
                            </button>
                            <span className="font-display text-sm w-5 text-center">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.productId,
                                  item.selectedSize,
                                  item.selectedColor,
                                  item.quantity + 1,
                                )
                              }
                              className="w-7 h-7 flex items-center justify-center border border-border rounded-sm hover:border-foreground transition-colors duration-200"
                              data-ocid={`cart.qty_plus.${i + 1}`}
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-display text-sm font-semibold text-foreground">
                              PKR{" "}
                              {Number(
                                item.price * BigInt(item.quantity),
                              ).toLocaleString()}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                removeItem(
                                  item.productId,
                                  item.selectedSize,
                                  item.selectedColor,
                                )
                              }
                              className="text-muted-foreground hover:text-destructive transition-colors duration-200"
                              aria-label="Remove item"
                              data-ocid={`cart.remove_button.${i + 1}`}
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1" data-ocid="cart.summary">
              <div className="bg-card border border-border rounded-sm p-6 space-y-4 sticky top-24">
                <h2 className="font-display text-[11px] tracking-widest uppercase text-foreground border-b border-border pb-4">
                  Order Summary
                </h2>

                <div className="space-y-2">
                  {items.map((item) => (
                    <div
                      key={`${item.productId}-${item.selectedSize}-${item.selectedColor}`}
                      className="flex justify-between text-xs font-body text-muted-foreground"
                    >
                      <span className="truncate mr-2">
                        {item.name} × {item.quantity}
                      </span>
                      <span className="flex-shrink-0">
                        PKR{" "}
                        {Number(
                          item.price * BigInt(item.quantity),
                        ).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 flex justify-between items-center">
                  <span className="font-display text-[11px] tracking-widest uppercase text-foreground">
                    Total
                  </span>
                  <span className="font-display text-lg font-bold text-foreground">
                    PKR {Number(totalPrice).toLocaleString()}
                  </span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-whatsapp font-display text-[11px] tracking-widest uppercase py-4 rounded-sm hover:opacity-90 transition-smooth"
                  data-ocid="cart.whatsapp_checkout_button"
                >
                  Checkout via WhatsApp
                </a>

                <Link
                  to="/shop"
                  className="block text-center font-display text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
                  data-ocid="cart.continue_shopping_link"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
