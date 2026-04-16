import { AnimatedSection } from "@/components/AnimatedSection";
import { ProductCard } from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useActiveProducts } from "@/hooks/useProducts";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const CATEGORIES = ["All", "Tops", "Bottoms", "Outerwear", "Accessories"];

export default function HomePage() {
  const { data: products, isLoading } = useActiveProducts();

  const featured = products?.slice(0, 6) ?? [];

  return (
    <div data-ocid="home.page">
      {/* Hero section */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden bg-secondary"
        data-ocid="home.hero_section"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 gradient-accent opacity-20 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="font-display text-[11px] tracking-widest uppercase text-primary mb-4 block">
                  New Collection
                </span>
                <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight text-foreground uppercase">
                  Essential
                  <br />
                  <span className="text-primary">Pieces</span>
                  <br />
                  For The
                  <br />
                  Modern
                  <br />
                  Wardrobe
                </h1>
              </motion.div>

              <motion.p
                className="font-body text-lg text-muted-foreground leading-relaxed max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                Inspiring premium minimalist clothing. True Fit curates timeless
                pieces that transcend seasons — crafted to last, designed to
                define.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 bg-foreground text-background font-display text-[11px] tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-primary transition-smooth"
                  data-ocid="home.shop_now_button"
                >
                  Shop Now
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-foreground text-foreground font-display text-[11px] tracking-widest uppercase px-8 py-4 rounded-sm hover:border-primary hover:text-primary transition-smooth"
                  data-ocid="home.contact_button"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>

            {/* Hero image */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div className="aspect-[3/4] rounded-sm overflow-hidden bg-muted shadow-elevated">
                <img
                  src="/assets/generated/hero-editorial.dim_600x800.jpg"
                  alt="True Fit — Essential Pieces"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-sm -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <AnimatedSection
        className="bg-card border-y border-border"
        direction="none"
      >
        <div
          className="max-w-6xl mx-auto px-6 py-5 flex items-center gap-8 overflow-x-auto scrollbar-hide"
          data-ocid="home.categories_strip"
        >
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              to="/shop"
              search={{ category: cat === "All" ? undefined : cat }}
              className="font-display text-[11px] tracking-widest uppercase whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors duration-200 flex-shrink-0"
              data-ocid={`home.category.${cat.toLowerCase()}_link`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </AnimatedSection>

      {/* Featured Products */}
      <section
        className="bg-background py-20"
        data-ocid="home.featured_section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection
            className="mb-12 flex items-end justify-between"
            direction="up"
          >
            <div>
              <span className="font-display text-[11px] tracking-widest uppercase text-primary block mb-2">
                Featured
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground">
                New Arrivals
              </h2>
            </div>
            <Link
              to="/shop"
              className="font-display text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200 hidden md:block"
              data-ocid="home.view_all_link"
            >
              View All →
            </Link>
          </AnimatedSection>

          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {["a", "b", "c", "d", "e", "f"].map((k) => (
                <div key={k} className="space-y-3">
                  <Skeleton className="aspect-[3/4] w-full rounded-sm" />
                  <Skeleton className="h-3 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              ))}
            </div>
          ) : featured.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {featured.map((product, i) => (
                <ProductCard
                  key={product.id.toString()}
                  product={product}
                  index={i}
                />
              ))}
            </div>
          ) : (
            <div
              className="text-center py-20"
              data-ocid="home.products_empty_state"
            >
              <p className="font-body text-muted-foreground mb-4">
                New arrivals coming soon.
              </p>
              <Link
                to="/contact"
                className="font-display text-[11px] tracking-widest uppercase text-primary hover:underline"
              >
                Contact us for updates
              </Link>
            </div>
          )}

          <AnimatedSection
            className="mt-12 text-center md:hidden"
            direction="up"
          >
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 border border-foreground text-foreground font-display text-[11px] tracking-widest uppercase px-8 py-3 rounded-sm hover:border-primary hover:text-primary transition-smooth"
              data-ocid="home.view_all_mobile_link"
            >
              View All
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Brand story strip */}
      <section
        className="bg-muted/40 py-20 border-t border-border"
        data-ocid="home.brand_section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="aspect-square rounded-sm overflow-hidden bg-secondary shadow-card">
                <img
                  src="/assets/generated/brand-story.dim_500x500.jpg"
                  alt="True Fit — Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <div className="space-y-6">
                <span className="font-display text-[11px] tracking-widest uppercase text-primary block">
                  Our Story
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground leading-tight">
                  Built on the idea that less is always more
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  True Fit was born from a shared love of clean lines and
                  timeless design. We believe your wardrobe should work harder,
                  not be larger — each piece selected with intention, built to
                  last, and styled to transcend trends.
                </p>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 text-foreground font-display text-[11px] tracking-widest uppercase hover:text-primary transition-colors duration-200"
                  data-ocid="home.explore_link"
                >
                  Explore the Collection →
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <AnimatedSection
        className="bg-foreground text-background py-16"
        direction="up"
      >
        <div
          className="max-w-6xl mx-auto px-6 text-center"
          data-ocid="home.whatsapp_section"
        >
          <span className="font-display text-[11px] tracking-widest uppercase text-primary block mb-4">
            Easy Ordering
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
            Order Via WhatsApp
          </h2>
          <p className="font-body text-background/70 mb-8 max-w-md mx-auto">
            Build your cart, then checkout directly on WhatsApp. Our team
            handles every order personally.
          </p>
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display text-[11px] tracking-widest uppercase px-8 py-4 rounded-sm hover:opacity-90 transition-smooth"
            data-ocid="home.start_shopping_button"
          >
            Start Shopping
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
