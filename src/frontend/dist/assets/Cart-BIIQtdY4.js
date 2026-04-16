import { a as useCartStore, j as jsxRuntimeExports, A as AnimatedSection, S as ShoppingBag, L as Link, f as AnimatePresence, m as motion } from "./index-CbYhoYbs.js";
import { M as Minus } from "./minus-k3tjQf0r.js";
import { P as Plus } from "./plus-mLWrClp1.js";
import { T as Trash2 } from "./trash-2-CQQam7mV.js";
const WHATSAPP_NUMBER = "923001234567";
function buildWhatsAppMessage(items, total) {
  const lines = items.map(
    (item) => `• ${item.name} | Size: ${item.selectedSize} | Color: ${item.selectedColor} | Qty: ${item.quantity} | PKR ${Number(item.price).toLocaleString()}`
  );
  const orderText = [
    "Hello True Fit! I'd like to place an order:",
    "",
    ...lines,
    "",
    `Total: PKR ${Number(total).toLocaleString()}`,
    "",
    "Please confirm availability."
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderText)}`;
}
function CartPage() {
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const clearCart = useCartStore((s) => s.clearCart);
  const totalPrice = useCartStore((s) => s.totalPrice());
  const whatsappUrl = buildWhatsAppMessage(items, totalPrice);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "cart.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 border-b border-border py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold uppercase tracking-tight text-foreground", children: "Your Cart" }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-6 py-12", children: items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-24 flex flex-col items-center gap-6",
        "data-ocid": "cart.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ShoppingBag,
            {
              size: 32,
              strokeWidth: 1,
              className: "text-muted-foreground"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl uppercase tracking-widest text-foreground mb-2", children: "Your cart is empty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground", children: "Discover our collection and add pieces you love." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/shop",
              className: "inline-flex items-center gap-2 bg-foreground text-background font-display text-[11px] tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-primary transition-smooth",
              "data-ocid": "cart.shop_now_button",
              children: "Shop Now"
            }
          )
        ]
      }
    ) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "lg:col-span-2 space-y-0",
          "data-ocid": "cart.items_list",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border pb-4 mb-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-[11px] tracking-widest uppercase text-muted-foreground", children: [
                items.length,
                " ",
                items.length === 1 ? "Item" : "Items"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: clearCart,
                  className: "font-display text-[11px] tracking-widest uppercase text-muted-foreground hover:text-destructive transition-colors duration-200",
                  "data-ocid": "cart.clear_button",
                  children: "Clear All"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                transition: { duration: 0.25 },
                className: "border-b border-border overflow-hidden",
                "data-ocid": `cart.item.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5 py-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/product/$id",
                      params: { id: item.productId.toString() },
                      className: "flex-shrink-0 w-24 h-32 bg-muted rounded-sm overflow-hidden",
                      children: item.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: item.imageUrl,
                          alt: item.name,
                          className: "w-full h-full object-cover"
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-secondary" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/product/$id",
                        params: { id: item.productId.toString() },
                        className: "font-display text-[11px] tracking-widest uppercase text-foreground hover:text-primary transition-colors duration-200 truncate block",
                        children: item.name
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-xs font-body text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "Size: ",
                        item.selectedSize
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "Color: ",
                        item.selectedColor
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => updateQuantity(
                              item.productId,
                              item.selectedSize,
                              item.selectedColor,
                              item.quantity - 1
                            ),
                            className: "w-7 h-7 flex items-center justify-center border border-border rounded-sm hover:border-foreground transition-colors duration-200",
                            "data-ocid": `cart.qty_minus.${i + 1}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 12 })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm w-5 text-center", children: item.quantity }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => updateQuantity(
                              item.productId,
                              item.selectedSize,
                              item.selectedColor,
                              item.quantity + 1
                            ),
                            className: "w-7 h-7 flex items-center justify-center border border-border rounded-sm hover:border-foreground transition-colors duration-200",
                            "data-ocid": `cart.qty_plus.${i + 1}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-sm font-semibold text-foreground", children: [
                          "PKR",
                          " ",
                          Number(
                            item.price * BigInt(item.quantity)
                          ).toLocaleString()
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => removeItem(
                              item.productId,
                              item.selectedSize,
                              item.selectedColor
                            ),
                            className: "text-muted-foreground hover:text-destructive transition-colors duration-200",
                            "aria-label": "Remove item",
                            "data-ocid": `cart.remove_button.${i + 1}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 15 })
                          }
                        )
                      ] })
                    ] })
                  ] })
                ] })
              },
              `${item.productId}-${item.selectedSize}-${item.selectedColor}`
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", "data-ocid": "cart.summary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-6 space-y-4 sticky top-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-[11px] tracking-widest uppercase text-foreground border-b border-border pb-4", children: "Order Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex justify-between text-xs font-body text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate mr-2", children: [
                item.name,
                " × ",
                item.quantity
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-shrink-0", children: [
                "PKR",
                " ",
                Number(
                  item.price * BigInt(item.quantity)
                ).toLocaleString()
              ] })
            ]
          },
          `${item.productId}-${item.selectedSize}-${item.selectedColor}`
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4 flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[11px] tracking-widest uppercase text-foreground", children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-bold text-foreground", children: [
            "PKR ",
            Number(totalPrice).toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: whatsappUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "block w-full text-center bg-whatsapp font-display text-[11px] tracking-widest uppercase py-4 rounded-sm hover:opacity-90 transition-smooth",
            "data-ocid": "cart.whatsapp_checkout_button",
            children: "Checkout via WhatsApp"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/shop",
            className: "block text-center font-display text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200",
            "data-ocid": "cart.continue_shopping_link",
            children: "Continue Shopping"
          }
        )
      ] }) })
    ] }) })
  ] });
}
export {
  CartPage as default
};
