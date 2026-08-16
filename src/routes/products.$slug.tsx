import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Minus, Plus, Share2, Star, Truck, ShieldCheck, Gift } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageShell } from "@/components/site/PageShell";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { faqs, products, reviews } from "@/data/catalog";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    return {
      meta: [
        { title: product ? `${product.name} | Leonidas UK` : "Belgian Chocolates | Leonidas UK" },
        {
          name: "description",
          content: product?.description.slice(0, 155) ?? "Luxury Belgian chocolates from Leonidas UK.",
        },
        { property: "og:title", content: product ? `${product.name} | Leonidas UK` : "Leonidas UK" },
        { property: "og:description", content: product?.tagline ?? "Luxury Belgian chocolates." },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      scripts: product
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                name: product.name,
                description: product.description,
                brand: { "@type": "Brand", name: "Leonidas" },
                offers: {
                  "@type": "Offer",
                  price: product.price,
                  priceCurrency: "GBP",
                  availability: "https://schema.org/InStock",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: product.rating,
                  reviewCount: product.reviews,
                },
              }),
            },
          ]
        : [],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const [wrap, setWrap] = useState(true);
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <PageShell>
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[1400px] px-5 pt-10 lg:px-10">
        <ol className="eyebrow flex gap-3 text-muted-foreground">
          <li><Link to="/" className="hover:text-navy">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link to="/shop" className="hover:text-navy">{product.collection}</Link></li>
          <li aria-hidden>/</li>
          <li className="text-navy">{product.name}</li>
        </ol>
      </nav>

      <section className="mx-auto grid max-w-[1400px] gap-14 px-5 py-12 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-16">
        <div className="space-y-4">
          <div className="img-zoom aspect-[4/5] bg-cream">
            <img src={product.image} alt={product.name} width={1024} height={1280} fetchPriority="high" className="size-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {products.slice(0, 4).map((p) => (
              <div key={p.slug} className="aspect-square overflow-hidden bg-cream">
                <img src={p.image} alt={`${product.name} detail`} width={400} height={400} loading="lazy" className="size-full object-cover" />
              </div>
            ))}
          </div>
          <p className="eyebrow text-muted-foreground">360° view · Lifestyle gallery · Tasting film</p>
        </div>

        <div className="lg:sticky lg:top-32 lg:h-fit">
          <p className="eyebrow text-cocoa-light">{product.collection}</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] lg:text-6xl">{product.name}</h1>
          <p className="mt-4 text-[15px] text-muted-foreground">{product.tagline}</p>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-gold text-gold" strokeWidth={1} />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              {product.rating} · {product.reviews} verified reviews
            </span>
          </div>

          <p className="mt-8 font-display text-4xl">£{product.price}</p>
          <p className="mt-2 text-xs text-muted-foreground">{product.pieces} pieces · In stock, dispatched today</p>

          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">{product.description}</p>

          <dl className="mt-9 grid grid-cols-2 gap-6 border-y border-border py-8 text-sm">
            <div>
              <dt className="eyebrow text-muted-foreground">Intensity</dt>
              <dd className="mt-3 flex gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < product.intensity ? "h-1 w-7 bg-cocoa" : "h-1 w-7 bg-border"} />
                ))}
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-muted-foreground">Texture</dt>
              <dd className="mt-2">{product.texture}</dd>
            </div>
            <div>
              <dt className="eyebrow text-muted-foreground">Tasting notes</dt>
              <dd className="mt-2">{product.notes.join(" · ")}</dd>
            </div>
            <div>
              <dt className="eyebrow text-muted-foreground">Origin</dt>
              <dd className="mt-2">{product.origin}</dd>
            </div>
          </dl>

          <label className="mt-8 flex cursor-pointer items-start gap-4 border border-border p-5">
            <input
              type="checkbox"
              checked={wrap}
              onChange={(e) => setWrap(e.target.checked)}
              className="mt-1 accent-[oklch(0.29_0.093_264)]"
            />
            <span>
              <span className="flex items-center gap-2 text-sm">
                <Gift className="size-4 text-gold" strokeWidth={1.25} /> Add gift wrapping & handwritten card
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">
                Navy or cream ribbon, message written by our boutique team. Complimentary.
              </span>
            </span>
          </label>

          <div className="mt-8 flex items-stretch gap-4">
            <div className="flex items-center border border-border">
              <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity" className="px-4 py-4 hover:text-navy">
                <Minus className="size-3.5" strokeWidth={1.5} />
              </button>
              <span className="w-8 text-center text-sm">{qty}</span>
              <button onClick={() => setQty(qty + 1)} aria-label="Increase quantity" className="px-4 py-4 hover:text-navy">
                <Plus className="size-3.5" strokeWidth={1.5} />
              </button>
            </div>
            <button className="eyebrow flex-1 bg-navy px-8 py-4 text-navy-foreground transition-colors duration-500 hover:bg-cocoa">
              Add to Bag — £{product.price * qty}
            </button>
            <button aria-label="Add to wishlist" className="grid place-items-center border border-border px-5 hover:border-navy">
              <Heart className="size-4" strokeWidth={1.25} />
            </button>
            <button aria-label="Share" className="grid place-items-center border border-border px-5 hover:border-navy">
              <Share2 className="size-4" strokeWidth={1.25} />
            </button>
          </div>

          <ul className="mt-8 space-y-3 text-xs text-muted-foreground">
            <li className="flex items-center gap-3"><Truck className="size-4 text-gold" strokeWidth={1.25} /> Free UK delivery over £60 · Next-day tracked</li>
            <li className="flex items-center gap-3"><ShieldCheck className="size-4 text-gold" strokeWidth={1.25} /> 100% pure cocoa butter · No palm oil · Made in Belgium</li>
          </ul>

          <Accordion type="single" collapsible className="mt-10">
            <AccordionItem value="ingredients">
              <AccordionTrigger className="font-display text-xl">Ingredients & allergens</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{product.ingredients}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="delivery">
              <AccordionTrigger className="font-display text-xl">Delivery & freshness</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{faqs[1]?.a}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
              <AccordionTrigger className="font-display text-xl">Returns</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{faqs[7]?.a}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <TrustStrip />

      <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
        <Reveal>
          <p className="eyebrow text-cocoa-light">Reviews</p>
          <h2 className="mt-5 font-display text-4xl lg:text-5xl">What people wrote afterwards</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 4) * 0.07}>
              <figure className="h-full border border-border bg-card p-8 shadow-soft">
                <div className="flex gap-1">
                  {Array.from({ length: r.stars }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-gold text-gold" strokeWidth={1} />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-lg leading-relaxed">“{r.text}”</blockquote>
                <figcaption className="eyebrow mt-6 text-muted-foreground">{r.name} · Verified purchase</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
          <Reveal>
            <p className="eyebrow text-cocoa-light">You may also like</p>
            <h2 className="mt-5 font-display text-4xl lg:text-5xl">Frequently gifted together</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}