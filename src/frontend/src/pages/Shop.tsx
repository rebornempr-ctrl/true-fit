import { AnimatedSection } from "@/components/AnimatedSection";
import { ProductCard } from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useActiveProducts, useProductsByCategory } from "@/hooks/useProducts";
import { Link, useSearch } from "@tanstack/react-router";
import { useState } from "react";

const CATEGORIES = ["All", "Tops", "Bottoms", "Outerwear", "Accessories"];

interface ShopSearch {
  category?: string;
}

export default function ShopPage() {
  const search = useSearch({ strict: false }) as ShopSearch;
  const [activeCategory, setActiveCategory] = useState<string>(
    search.category ?? "All",
  );

  const { data: allProducts, isLoading: loadingAll } = useActiveProducts();
  const { data: catProducts, isLoading: loadingCat } = useProductsByCategory(
    activeCategory !== "All" ? activeCategory : "",
  );

  const products =
    activeCategory === "All" ? (allProducts ?? []) : (catProducts ?? []);
  const isLoading = activeCategory === "All" ? loadingAll : loadingCat;

  return (
    <div data-ocid="shop.page">
      {/* Page header */}
      <section className="bg-muted/30 border-b border-border py-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection direction="up">
            <span className="font-display text-[11px] tracking-widest uppercase text-primary block mb-2">
              Collection
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
              Shop All
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Category filter */}
      <section
        className="bg-card border-b border-border sticky top-16 z-40"
        data-ocid="shop.filters_section"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-6 overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`font-display text-[11px] tracking-widest uppercase whitespace-nowrap transition-colors duration-200 py-1 border-b-2 flex-shrink-0 ${
                activeCategory === cat
                  ? "text-foreground border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground hover:border-border"
              }`}
              data-ocid={`shop.filter.${cat.toLowerCase()}_tab`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products grid */}
      <section
        className="bg-background py-16"
        data-ocid="shop.products_section"
      >
        <div className="max-w-6xl mx-auto px-6">
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {["a", "b", "c", "d", "e", "f", "g", "h"].map((k) => (
                <div key={k} className="space-y-3">
                  <Skeleton className="aspect-[3/4] w-full rounded-sm" />
                  <Skeleton className="h-3 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                  <Skeleton className="h-9 w-full" />
                </div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <>
              <p className="font-body text-sm text-muted-foreground mb-8">
                {products.length} {products.length === 1 ? "item" : "items"}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, i) => (
                  <ProductCard
                    key={product.id.toString()}
                    product={product}
                    index={i}
                  />
                ))}
              </div>
            </>
          ) : (
            <div
              className="text-center py-24"
              data-ocid="shop.products_empty_state"
            >
              <h3 className="font-display text-lg uppercase tracking-widest text-foreground mb-3">
                No Products Yet
              </h3>
              <p className="font-body text-muted-foreground mb-6">
                We're adding new pieces soon. Check back or contact us.
              </p>
              <Link
                to="/contact"
                className="font-display text-[11px] tracking-widest uppercase text-primary hover:underline"
                data-ocid="shop.contact_link"
              >
                Get Notified
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
