import { d as createLucideIcon, e as useParams, a as useCartStore, r as reactExports, j as jsxRuntimeExports, L as Link, m as motion, c as ue } from "./index-CbYhoYbs.js";
import { B as Badge } from "./badge-CJDLyEQy.js";
import { B as Button } from "./button-goVBVp7u.js";
import { S as Skeleton } from "./skeleton-DIU4U5on.js";
import { b as useProductById } from "./useProducts-CG1-0xul.js";
import { M as Minus } from "./minus-k3tjQf0r.js";
import { P as Plus } from "./plus-mLWrClp1.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode);
function ProductPage() {
  const { id } = useParams({ strict: false });
  const productId = BigInt(id ?? "0");
  const { data: product, isLoading } = useProductById(productId);
  const addItem = useCartStore((s) => s.addItem);
  const [selectedSize, setSelectedSize] = reactExports.useState("");
  const [selectedColor, setSelectedColor] = reactExports.useState("");
  const [qty, setQty] = reactExports.useState(1);
  const [imageIdx, setImageIdx] = reactExports.useState(0);
  const handleAddToCart = () => {
    if (!product) return;
    if (product.sizes.length > 0 && !selectedSize) {
      ue.error("Please select a size");
      return;
    }
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      selectedSize: selectedSize || "One Size",
      selectedColor: selectedColor || product.colors[0] || "Default",
      quantity: qty,
      imageUrl: product.imageUrls[0] ?? ""
    });
    ue.success(`${product.name} added to cart`, {
      description: `Size: ${selectedSize || "One Size"} · Qty: ${qty}`
    });
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[3/4] w-full rounded-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-1/3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full" })
      ] })
    ] }) });
  }
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center min-h-[60vh] gap-4",
        "data-ocid": "product.not_found",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl uppercase tracking-widest text-foreground", children: "Product Not Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/shop",
              className: "font-display text-[11px] tracking-widest uppercase text-primary hover:underline",
              children: "Back to Shop"
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "product.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6 pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/shop",
        className: "flex items-center gap-1 font-display text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200",
        "data-ocid": "product.back_link",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 14 }),
          "Back to Shop"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.4 },
            className: "aspect-[3/4] rounded-sm overflow-hidden bg-muted",
            "data-ocid": "product.main_image",
            children: product.imageUrls[imageIdx] ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: product.imageUrls[imageIdx],
                alt: product.name,
                className: "w-full h-full object-cover"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs tracking-widest uppercase text-muted-foreground", children: "No Image" }) })
          },
          imageIdx
        ),
        product.imageUrls.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 overflow-x-auto", children: product.imageUrls.map((url, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setImageIdx(i),
            className: `flex-shrink-0 w-20 h-24 rounded-sm overflow-hidden bg-muted border-2 transition-colors duration-200 ${i === imageIdx ? "border-primary" : "border-transparent"}`,
            "data-ocid": `product.thumbnail.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: url,
                alt: `${product.name} view ${i + 1}`,
                className: "w-full h-full object-cover"
              }
            )
          },
          url || `img-${i}`
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "product.details", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "secondary",
              className: "font-display text-[10px] tracking-widest uppercase rounded-sm mb-3",
              children: product.category
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-foreground mb-2", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xl font-semibold text-foreground", children: [
            "PKR ",
            Number(product.price).toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground leading-relaxed", children: product.description }),
        product.sizes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-[11px] tracking-widest uppercase text-foreground", children: [
            "Size",
            " ",
            selectedSize && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
              "— ",
              selectedSize
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", "data-ocid": "product.sizes", children: product.sizes.map((size) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setSelectedSize(size),
              className: `min-w-[44px] h-11 px-3 rounded-sm border font-display text-xs tracking-widest uppercase transition-smooth ${selectedSize === size ? "bg-foreground text-background border-foreground" : "bg-background text-foreground border-border hover:border-foreground"}`,
              "data-ocid": `product.size.${size.toLowerCase()}_button`,
              children: size
            },
            size
          )) })
        ] }),
        product.colors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-[11px] tracking-widest uppercase text-foreground", children: [
            "Color",
            " ",
            selectedColor && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
              "— ",
              selectedColor
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex flex-wrap gap-2",
              "data-ocid": "product.colors",
              children: product.colors.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setSelectedColor(color),
                  className: `h-10 px-4 rounded-sm border font-display text-xs tracking-widest uppercase transition-smooth ${selectedColor === color ? "bg-foreground text-background border-foreground" : "bg-background text-foreground border-border hover:border-foreground"}`,
                  "data-ocid": `product.color.${color.toLowerCase()}_button`,
                  children: color
                },
                color
              ))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[11px] tracking-widest uppercase text-foreground", children: "Quantity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-4",
              "data-ocid": "product.quantity_control",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setQty((q) => Math.max(1, q - 1)),
                    className: "w-10 h-10 flex items-center justify-center border border-border rounded-sm hover:border-foreground transition-colors duration-200",
                    "data-ocid": "product.qty_minus_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 14 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm w-6 text-center", children: qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setQty((q) => q + 1),
                    className: "w-10 h-10 flex items-center justify-center border border-border rounded-sm hover:border-foreground transition-colors duration-200",
                    "data-ocid": "product.qty_plus_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 })
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: handleAddToCart,
            className: "w-full bg-foreground text-background font-display text-[11px] tracking-widest uppercase py-6 rounded-sm hover:bg-primary transition-smooth h-auto",
            "data-ocid": "product.add_to_cart_button",
            children: "Add to Cart"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/cart",
            className: "block text-center font-display text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200",
            "data-ocid": "product.view_cart_link",
            children: "View Cart"
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  ProductPage as default
};
