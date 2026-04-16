import { Link } from "@tanstack/react-router";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { AnimatedSection } from "./AnimatedSection";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="bg-card border-t border-border mt-auto"
      data-ocid="footer"
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <AnimatedSection direction="up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand column */}
            <div className="space-y-4">
              <h2 className="font-display text-lg tracking-[0.2em] uppercase font-semibold text-foreground">
                True Fit
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
                Essential pieces for the modern wardrobe. Premium quality,
                timeless minimalism.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="Instagram"
                  data-ocid="footer.instagram_link"
                >
                  <SiInstagram size={18} />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="TikTok"
                  data-ocid="footer.tiktok_link"
                >
                  <SiTiktok size={18} />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="font-display text-[11px] tracking-widest uppercase text-foreground font-semibold">
                Explore
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "Shop", to: "/shop" },
                  { label: "New Arrivals", to: "/shop" },
                  { label: "Contact", to: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer */}
            <div className="space-y-4">
              <h3 className="font-display text-[11px] tracking-widest uppercase text-foreground font-semibold">
                Customer Care
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/contact"
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <span className="font-body text-sm text-muted-foreground">
                    WhatsApp Orders Welcome
                  </span>
                </li>
                <li>
                  <span className="font-body text-sm text-muted-foreground">
                    Free shipping on orders over PKR 5,000
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-muted-foreground">
              © {year} True Fit. All rights reserved.
            </p>
            <p className="font-body text-xs text-muted-foreground">
              Built with love using{" "}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200 underline underline-offset-2"
              >
                caffeine.ai
              </a>
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              to="/admin"
              className="font-body text-[11px] text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-200"
              data-ocid="footer.admin_link"
            >
              Admin
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
