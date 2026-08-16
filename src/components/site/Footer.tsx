import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";
// import logo from "@/assets/leonidas-logo.avif.asset.json";

const logo = "/Leonidas-2_100x@2x.avif";

const columns = [
  {
    title: "Shop",
    links: ["Collections", "Occasions", "Gift Boxes", "Luxury Hampers", "Gift Cards", "Chocolate of the Month"],
  },
  { title: "The House", links: ["About Leonidas", "Our Quality", "Belgian Heritage", "Sustainability", "Journal", "Boutiques"] },
  { title: "Service", links: ["Delivery", "Returns", "FAQs", "Allergens", "Contact", "Corporate Gifting"] },
];

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div>
            <img src={logo} alt="Leonidas UK" width={72} height={72} className="size-16" loading="lazy" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
              Leonidas UK is the official Master Franchisee of Leonidas Belgian Chocolates. Fresh from
              Belgium, hand-packed here, since 1913.
            </p>
            <div className="mt-7 flex gap-5 text-navy-foreground/70">
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gold">
                <Instagram className="size-[18px]" strokeWidth={1.25} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gold">
                <Facebook className="size-[18px]" strokeWidth={1.25} />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="hover:text-gold">
                <Youtube className="size-[18px]" strokeWidth={1.25} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow mb-6 text-gold">{col.title}</p>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="link-underline text-sm text-navy-foreground/75 hover:text-navy-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-navy-foreground/15 pt-8 text-xs text-navy-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Leonidas UK. Official UK Master Franchisee.</p>
          <div className="flex flex-wrap gap-5">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>American Express</span>
            <span>Apple Pay</span>
            <span>Google Pay</span>
            <span>PayPal</span>
            <span>Klarna</span>
          </div>
          <div className="flex gap-5">
            <Link to="/shop" className="hover:text-navy-foreground">Privacy</Link>
            <Link to="/shop" className="hover:text-navy-foreground">Terms</Link>
            <Link to="/shop" className="hover:text-navy-foreground">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}