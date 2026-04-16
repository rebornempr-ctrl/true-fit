import { j as jsxRuntimeExports, m as motion, L as Link, A as AnimatedSection } from "./index-CbYhoYbs.js";
import { P as ProductCard } from "./ProductCard-CVvS7W_N.js";
import { S as Skeleton } from "./skeleton-DIU4U5on.js";
import { u as useActiveProducts } from "./useProducts-CG1-0xul.js";
const CATEGORIES = ["All", "Tops", "Bottoms", "Outerwear", "Accessories"];
function HomePage() {
  const { data: products, isLoading } = useActiveProducts();
  const featured = (products == null ? void 0 : products.slice(0, 6)) ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[90vh] flex items-center overflow-hidden bg-secondary",
        "data-ocid": "home.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-accent opacity-20 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-6xl mx-auto px-6 py-24 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[11px] tracking-widest uppercase text-primary mb-4 block", children: "New Collection" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight text-foreground uppercase", children: [
                      "Essential",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Pieces" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "For The",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "Modern",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "Wardrobe"
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  className: "font-body text-lg text-muted-foreground leading-relaxed max-w-sm",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: {
                    duration: 0.7,
                    delay: 0.2,
                    ease: [0.25, 0.1, 0.25, 1]
                  },
                  children: "Inspiring premium minimalist clothing. True Fit curates timeless pieces that transcend seasons — crafted to last, designed to define."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  className: "flex flex-wrap gap-4",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: {
                    duration: 0.6,
                    delay: 0.35,
                    ease: [0.25, 0.1, 0.25, 1]
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/shop",
                        className: "inline-flex items-center gap-2 bg-foreground text-background font-display text-[11px] tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-primary transition-smooth",
                        "data-ocid": "home.shop_now_button",
                        children: "Shop Now"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/contact",
                        className: "inline-flex items-center gap-2 border border-foreground text-foreground font-display text-[11px] tracking-widest uppercase px-8 py-4 rounded-sm hover:border-primary hover:text-primary transition-smooth",
                        "data-ocid": "home.contact_button",
                        children: "Contact Us"
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "relative hidden lg:block",
                initial: { opacity: 0, x: 40 },
                animate: { opacity: 1, x: 0 },
                transition: {
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[3/4] rounded-sm overflow-hidden bg-muted shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: "/assets/generated/hero-editorial.dim_600x800.jpg",
                      alt: "True Fit — Essential Pieces",
                      className: "w-full h-full object-cover"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-sm -z-10" })
                ]
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AnimatedSection,
      {
        className: "bg-card border-y border-border",
        direction: "none",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "max-w-6xl mx-auto px-6 py-5 flex items-center gap-8 overflow-x-auto scrollbar-hide",
            "data-ocid": "home.categories_strip",
            children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/shop",
                search: { category: cat === "All" ? void 0 : cat },
                className: "font-display text-[11px] tracking-widest uppercase whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors duration-200 flex-shrink-0",
                "data-ocid": `home.category.${cat.toLowerCase()}_link`,
                children: cat
              },
              cat
            ))
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-20",
        "data-ocid": "home.featured_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            AnimatedSection,
            {
              className: "mb-12 flex items-end justify-between",
              direction: "up",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[11px] tracking-widest uppercase text-primary block mb-2", children: "Featured" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground", children: "New Arrivals" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/shop",
                    className: "font-display text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200 hidden md:block",
                    "data-ocid": "home.view_all_link",
                    children: "View All →"
                  }
                )
              ]
            }
          ),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-6", children: ["a", "b", "c", "d", "e", "f"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[3/4] w-full rounded-sm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-3/4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2" })
          ] }, k)) }) : featured.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-6", children: featured.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ProductCard,
            {
              product,
              index: i
            },
            product.id.toString()
          )) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center py-20",
              "data-ocid": "home.products_empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mb-4", children: "New arrivals coming soon." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/contact",
                    className: "font-display text-[11px] tracking-widest uppercase text-primary hover:underline",
                    children: "Contact us for updates"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AnimatedSection,
            {
              className: "mt-12 text-center md:hidden",
              direction: "up",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/shop",
                  className: "inline-flex items-center gap-2 border border-foreground text-foreground font-display text-[11px] tracking-widest uppercase px-8 py-3 rounded-sm hover:border-primary hover:text-primary transition-smooth",
                  "data-ocid": "home.view_all_mobile_link",
                  children: "View All"
                }
              )
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/40 py-20 border-t border-border",
        "data-ocid": "home.brand_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-16 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { direction: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded-sm overflow-hidden bg-secondary shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/generated/brand-story.dim_500x500.jpg",
              alt: "True Fit — Our Story",
              className: "w-full h-full object-cover"
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { direction: "right", delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[11px] tracking-widest uppercase text-primary block", children: "Our Story" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground leading-tight", children: "Built on the idea that less is always more" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground leading-relaxed", children: "True Fit was born from a shared love of clean lines and timeless design. We believe your wardrobe should work harder, not be larger — each piece selected with intention, built to last, and styled to transcend trends." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/shop",
                className: "inline-flex items-center gap-2 text-foreground font-display text-[11px] tracking-widest uppercase hover:text-primary transition-colors duration-200",
                "data-ocid": "home.explore_link",
                children: "Explore the Collection →"
              }
            )
          ] }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AnimatedSection,
      {
        className: "bg-foreground text-background py-16",
        direction: "up",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "max-w-6xl mx-auto px-6 text-center",
            "data-ocid": "home.whatsapp_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[11px] tracking-widest uppercase text-primary block mb-4", children: "Easy Ordering" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4", children: "Order Via WhatsApp" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-background/70 mb-8 max-w-md mx-auto", children: "Build your cart, then checkout directly on WhatsApp. Our team handles every order personally." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/cart",
                  className: "inline-flex items-center gap-2 bg-primary text-primary-foreground font-display text-[11px] tracking-widest uppercase px-8 py-4 rounded-sm hover:opacity-90 transition-smooth",
                  "data-ocid": "home.start_shopping_button",
                  children: "Start Shopping"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
export {
  HomePage as default
};
