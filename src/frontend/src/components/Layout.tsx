import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { CartIcon } from "./CartIcon";
import { Footer } from "./Footer";

const NAV_LINKS = [
  { label: "Shop", to: "/shop" },
  { label: "Contact", to: "/contact" },
];

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (prevPath.current !== location.pathname) {
      prevPath.current = location.pathname;
      setMobileOpen(false);
    }
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Sticky header */}
      <header
        className={`sticky top-0 z-50 bg-card border-b border-border transition-all duration-300 ${
          scrolled ? "shadow-card" : "shadow-none"
        }`}
        data-ocid="header"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-xl tracking-[0.2em] uppercase font-semibold text-foreground hover:text-primary transition-colors duration-200"
            data-ocid="nav.logo_link"
          >
            True Fit
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            data-ocid="nav.links"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-display text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                activeProps={{ className: "text-foreground" }}
                data-ocid={`nav.${link.label.toLowerCase()}_link`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <CartIcon />
            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-10 h-10 text-foreground hover:text-primary transition-colors duration-200"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              data-ocid="nav.mobile_menu_toggle"
            >
              {mobileOpen ? (
                <X size={20} strokeWidth={1.5} />
              ) : (
                <Menu size={20} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:hidden border-t border-border bg-card overflow-hidden"
              data-ocid="nav.mobile_menu"
            >
              <nav className="px-6 py-4 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="font-display text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors py-2"
                    activeProps={{ className: "text-foreground" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main content */}
      <main className="flex-1" data-ocid="main_content">
        {children}
      </main>

      <Footer />
    </div>
  );
}
