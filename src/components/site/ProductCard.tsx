import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag, Star } from "lucide-react";
import type { Product } from "@/data/catalog";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <article className="group relative border border-border bg-card p-3 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="img-zoom relative block aspect-[4/5] overflow-hidden bg-cream"
      >
        <img
          src={product.image}
          alt={product.name}
          width={1024}
          height={1280}
          loading={priority ? "eager" : "lazy"}
          className="size-full object-cover"
        />
        {product.badge && (
          <span className="eyebrow absolute left-4 top-4 bg-background/92 px-3 py-1.5 text-navy shadow-soft">
            {product.badge}
          </span>
        )}
        <span className="eyebrow absolute inset-x-0 bottom-0 translate-y-full bg-navy/92 py-4 text-center text-navy-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          Quick view
        </span>
      </Link>

      <button
        aria-label={`Add ${product.name} to wishlist`}
        className="absolute right-7 top-7 grid size-9 place-items-center rounded-full bg-background/90 text-navy shadow-soft transition-all duration-500 hover:bg-background hover:text-cocoa"
      >
        <Heart className="size-4" strokeWidth={1.25} />
      </button>

      <div className="px-2 pb-3 pt-5">
        <p className="eyebrow text-muted-foreground">{product.collection}</p>
        <h3 className="mt-2 font-display text-2xl leading-snug">
          <Link to="/products/$slug" params={{ slug: product.slug }} className="link-underline">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{product.tagline}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-[15px] font-medium">£{product.price}</span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="size-3 fill-gold text-gold" strokeWidth={1} />
            {product.rating} ({product.reviews})
          </span>
        </div>
        <button
          type="button"
          className="eyebrow mt-5 inline-flex w-full items-center justify-center gap-2 border border-navy px-4 py-3 text-navy transition-colors duration-500 hover:bg-navy hover:text-navy-foreground"
        >
          <ShoppingBag className="size-4" strokeWidth={1.25} />
          Add to Bag
        </button>
      </div>
    </article>
  );
}
