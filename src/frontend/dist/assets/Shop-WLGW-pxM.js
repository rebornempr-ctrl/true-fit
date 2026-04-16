import { u as useSearch, r as reactExports, j as jsxRuntimeExports, A as AnimatedSection, L as Link } from "./index-CbYhoYbs.js";
import { P as ProductCard } from "./ProductCard-CVvS7W_N.js";
import { S as Skeleton } from "./skeleton-DIU4U5on.js";
import { u as useActiveProducts, a as useProductsByCategory } from "./useProducts-CG1-0xul.js";
const CATEGORIES = ["All", "Tops", "Bottoms", "Outerwear", "Accessories"];
function ShopPage() {
  const search = useSearch({ strict: false });
  const [activeCategory, setActiveCategory] = reactExports.useState(
    search.category ?? "All"
  );
  const { data: allProducts, isLoading: loadingAll } = useActiveProducts();
  const { data: catProducts, isLoading: loadingCat } = useProductsByCategory(
    activeCategory !== "All" ? activeCategory : ""
  );
  const products = activeCategory === "All" ? allProducts ?? [] : catProducts ?? [];
  const isLoading = activeCategory === "All" ? loadingAll : loadingCat;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "shop.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 border-b border-border py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { direction: "up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[11px] tracking-widest uppercase text-primary block mb-2", children: "Collection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground", children: "Shop All" })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border sticky top-16 z-40",
        "data-ocid": "shop.filters_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6 py-4 flex items-center gap-6 overflow-x-auto", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveCategory(cat),
            className: `font-display text-[11px] tracking-widest uppercase whitespace-nowrap transition-colors duration-200 py-1 border-b-2 flex-shrink-0 ${activeCategory === cat ? "text-foreground border-primary" : "text-muted-foreground border-transparent hover:text-foreground hover:border-border"}`,
            "data-ocid": `shop.filter.${cat.toLowerCase()}_tab`,
            children: cat
          },
          cat
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-16",
        "data-ocid": "shop.products_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: ["a", "b", "c", "d", "e", "f", "g", "h"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[3/4] w-full rounded-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-3/4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-full" })
        ] }, k)) }) : products.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm text-muted-foreground mb-8", children: [
            products.length,
            " ",
            products.length === 1 ? "item" : "items"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: products.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ProductCard,
            {
              product,
              index: i
            },
            product.id.toString()
          )) })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-24",
            "data-ocid": "shop.products_empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg uppercase tracking-widest text-foreground mb-3", children: "No Products Yet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mb-6", children: "We're adding new pieces soon. Check back or contact us." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  className: "font-display text-[11px] tracking-widest uppercase text-primary hover:underline",
                  "data-ocid": "shop.contact_link",
                  children: "Get Notified"
                }
              )
            ]
          }
        ) })
      }
    )
  ] });
}
export {
  ShopPage as default
};
