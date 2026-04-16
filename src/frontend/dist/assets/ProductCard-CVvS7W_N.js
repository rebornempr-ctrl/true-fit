import { a as useCartStore, b as useReducedMotion, j as jsxRuntimeExports, m as motion, L as Link, c as ue } from "./index-CbYhoYbs.js";
function ProductCard({ product, index = 0 }) {
  const addItem = useCartStore((s) => s.addItem);
  const shouldReduceMotion = useReducedMotion();
  const priceDisplay = `PKR ${Number(product.price).toLocaleString()}`;
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      selectedSize: product.sizes[0] ?? "One Size",
      selectedColor: product.colors[0] ?? "Default",
      quantity: 1,
      imageUrl: product.imageUrls[0] ?? ""
    });
    ue.success(`${product.name} added to cart`, {
      description: `Size: ${product.sizes[0] ?? "One Size"}`
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-40px" },
      transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.08 },
      className: "relative group",
      "data-ocid": `product.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/product/$id",
            params: { id: product.id.toString() },
            className: "block",
            "data-ocid": `product.link.${index + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-muted aspect-[3/4] rounded-sm mb-3", children: [
                product.imageUrls[0] ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: product.imageUrls[0],
                    alt: product.name,
                    className: "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-display text-xs tracking-widest uppercase", children: "No Image" }) }),
                product.category && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 bg-card/90 backdrop-blur-sm text-foreground text-[10px] font-display tracking-widest uppercase px-2 py-1 rounded-sm", children: product.category })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[11px] tracking-widest uppercase text-foreground group-hover:text-primary transition-colors duration-200 truncate", children: product.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground line-clamp-1", children: product.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-semibold text-foreground", children: priceDisplay }) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleAddToCart,
            className: "mt-3 w-full bg-foreground text-background font-display text-[11px] tracking-widest uppercase py-2.5 px-4 rounded-sm hover:bg-primary transition-smooth",
            "data-ocid": `product.add_button.${index + 1}`,
            children: "Add to Cart"
          }
        )
      ]
    }
  );
}
export {
  ProductCard as P
};
