import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageIntro, PageShell } from "@/components/site/PageShell";
import { ProductCard } from "@/components/site/ProductCard";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Reveal } from "@/components/site/Reveal";
import { products } from "@/data/catalog";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Belgian Chocolates & Gift Boxes | Leonidas UK" },
      {
        name: "description",
        content:
          "Browse Leonidas pralines, truffles, ballotins, hampers and gift boxes. Filter by chocolate type, occasion, dietary need and price.",
      },
      { property: "og:title", content: "Shop Belgian Chocolates & Gift Boxes | Leonidas UK" },
      { property: "og:description", content: "Pralines, truffles, ballotins and luxury hampers, fresh from Belgium." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shop,
});

const typeFilters = ["All", "Dark", "Milk", "White", "Assorted"] as const;
const collectionFilters = ["All", "Pralines", "Truffles", "Ballotins", "Manon", "Gift Boxes", "Signature Collection"];
const sorts = ["Featured", "Newest", "Price: Low to High", "Price: High to Low", "Most Loved"];

function Shop() {
  const [type, setType] = useState<string>("All");
  const [collection, setCollection] = useState("All");
  const [sort, setSort] = useState(sorts[0]);

  const list = useMemo(() => {
    let out = products.filter(
      (p) => (type === "All" || p.type === type) && (collection === "All" || p.collection === collection),
    );
    if (sort === "Price: Low to High") out = [...out].sort((a, b) => a.price - b.price);
    if (sort === "Price: High to Low") out = [...out].sort((a, b) => b.price - a.price);
    if (sort === "Most Loved") out = [...out].sort((a, b) => b.reviews - a.reviews);
    return out;
  }, [type, collection, sort]);

  return (
    <PageShell>
      <PageIntro
        eyebrow="The Collections"
        title="Every box, packed by hand in the UK"
        copy="Fresh from Belgium each week. Filter by chocolate, occasion or dietary preference — or simply begin with the best sellers."
      />

      <div className="sticky top-[96px] z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-8 gap-y-4 px-5 py-5 lg:px-10">
          <div className="flex flex-wrap gap-2">
            {typeFilters.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={cn(
                  "eyebrow border px-4 py-2 transition-colors duration-400",
                  type === t ? "border-navy bg-navy text-navy-foreground" : "border-border text-muted-foreground hover:border-navy hover:text-navy",
                )}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-4">
            <label htmlFor="collection" className="eyebrow text-muted-foreground">Collection</label>
            <select
              id="collection"
              value={collection}
              onChange={(e) => setCollection(e.target.value)}
              className="border-b border-border bg-transparent py-2 text-sm focus:border-navy focus:outline-none"
            >
              {collectionFilters.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <label htmlFor="sort" className="eyebrow text-muted-foreground">Sort</label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border-b border-border bg-transparent py-2 text-sm focus:border-navy focus:outline-none"
            >
              {sorts.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <p className="eyebrow text-muted-foreground">{list.length} pieces</p>
        <div className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.07}>
              <ProductCard product={p} priority={i < 3} />
            </Reveal>
          ))}
        </div>
        {list.length === 0 && (
          <p className="py-24 text-center font-display text-3xl text-muted-foreground">
            Nothing matches those filters just yet.
          </p>
        )}
      </section>

      <TrustStrip />
    </PageShell>
  );
}