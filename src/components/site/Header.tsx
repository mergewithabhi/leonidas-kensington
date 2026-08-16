import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { cn } from "@/lib/utils";

const logo = "/Leonidas-2_100x@2x.avif";

const menu: { label: string; href: string; groups?: { title: string; items: string[] }[] }[] = [
  {
    label: "Collections",
    href: "/shop",
    groups: [
      { title: "By Chocolate", items: ["Pralines", "Truffles", "Manon", "Gianduja", "Louise"] },
      { title: "By Cocoa", items: ["Dark Chocolate", "Milk Chocolate", "White Chocolate", "Seasonal"] },
      { title: "Boxes", items: ["Ballotins", "Gift Boxes", "Luxury Hampers", "Gift Cards"] },
    ],
  },
  {
    label: "Occasions",
    href: "/occasions",
    groups: [
      { title: "Celebrate", items: ["Birthday", "Anniversary", "Congratulations", "Wedding"] },
      { title: "Seasonal", items: ["Christmas", "Valentine", "Easter", "Mother's Day"] },
      { title: "Everyday", items: ["Thank You", "Invitation Gifts", "Just Because", "Corporate"] },
    ],
  },
  { label: "Corporate", href: "/corporate" },
  { label: "Quality", href: "/heritage" },
  { label: "Our Story", href: "/heritage" },
  { label: "Journal", href: "/journal" },
  { label: "Boutiques", href: "/store-locator" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border bg-background/96 transition-all duration-700",
        scrolled ? "shadow-soft backdrop-blur-md" : "",
      )}
      onMouseLeave={() => setOpen(null)}
    >
      <p className="eyebrow bg-navy py-2 text-center text-navy-foreground/80">
        Complimentary UK delivery on orders over £60 · Fresh from Belgium each week
      </p>

      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-3.5 lg:px-10">
        <button
          className="text-navy lg:hidden"
          aria-label="Open menu"
          onClick={() => setMobile(true)}
        >
          <Menu className="size-5" strokeWidth={1.25} />
        </button>

        <Link to="/" className="shrink-0" aria-label="Leonidas UK home">
          <img src={logo} alt="Leonidas" width={52} height={52} className="size-11 lg:size-12" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {menu.map((item) => (
            <div key={item.label} onMouseEnter={() => setOpen(item.groups ? item.label : null)}>
              <Link
                to={item.href}
                className="eyebrow link-underline text-navy transition-colors hover:text-cocoa"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-navy">
          <button aria-label="Search" className="transition-colors hover:text-cocoa">
            <Search className="size-[18px]" strokeWidth={1.25} />
          </button>
          <button aria-label="Account" className="hidden transition-colors hover:text-cocoa sm:block">
            <User className="size-[18px]" strokeWidth={1.25} />
          </button>
          <button aria-label="Wishlist" className="hidden transition-colors hover:text-cocoa sm:block">
            <Heart className="size-[18px]" strokeWidth={1.25} />
          </button>
          <button aria-label="Cart" className="relative transition-colors hover:text-cocoa">
            <ShoppingBag className="size-[18px]" strokeWidth={1.25} />
            <span className="absolute -right-2 -top-1.5 flex size-4 items-center justify-center rounded-full bg-gold text-[10px] font-medium text-navy">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mega menu */}
      {menu.map(
        (item) =>
          item.groups && (
            <div
              key={item.label}
              className={cn(
                "absolute inset-x-0 top-full hidden overflow-hidden border-t border-navy-foreground/10 bg-background transition-[max-height,opacity] duration-500 lg:block",
                open === item.label ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0",
              )}
              onMouseEnter={() => setOpen(item.label)}
            >
              <div className="mx-auto grid max-w-[1400px] grid-cols-4 gap-12 px-10 py-12">
                {item.groups.map((group) => (
                  <div key={group.title}>
                    <p className="eyebrow mb-5 text-muted-foreground">{group.title}</p>
                    <ul className="space-y-3">
                      {group.items.map((sub) => (
                        <li key={sub}>
                          <Link
                            to={item.href}
                            className="link-underline font-display text-xl text-foreground/85 hover:text-navy"
                          >
                            {sub}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="border-l border-border pl-10">
                  <p className="eyebrow mb-4 text-muted-foreground">Featured</p>
                  <h3 className="font-display text-3xl leading-tight">Summer Collection</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Lighter ganaches, citrus peel and cold-set pralines for the warmer months.
                  </p>
                  <Link to="/shop" className="eyebrow link-underline mt-5 inline-block text-navy">
                    Discover
                  </Link>
                </div>
              </div>
            </div>
          ),
      )}

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-navy transition-opacity duration-500 lg:hidden",
          mobile ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <img src={logo} alt="Leonidas" width={44} height={44} className="size-11" />
          <button aria-label="Close menu" onClick={() => setMobile(false)} className="text-navy-foreground">
            <X className="size-5" strokeWidth={1.25} />
          </button>
        </div>
        <nav className="px-6 pt-6" aria-label="Mobile">
          {menu.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setMobile(false)}
              className="block border-b border-navy-foreground/10 py-5 font-display text-3xl text-navy-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
