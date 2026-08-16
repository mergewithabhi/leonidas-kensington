import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { PageIntro, PageShell } from "@/components/site/PageShell";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Reveal } from "@/components/site/Reveal";
import { stores } from "@/data/catalog";
import boutique from "@/assets/boutique-interior.jpg";

export const Route = createFileRoute("/store-locator")({
  head: () => ({
    meta: [
      { title: "Find a Leonidas Boutique | Store Locator | Leonidas UK" },
      {
        name: "description",
        content:
          "Find your nearest Leonidas boutique in the UK. Search by city or postcode for opening hours, directions and contact details.",
      },
      { property: "og:title", content: "Find a Leonidas Boutique | Leonidas UK" },
      { property: "og:description", content: "Boutiques across London, Manchester, Edinburgh and beyond." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StoreLocator,
});

function StoreLocator() {
  const [query, setQuery] = useState("");
  const results = useMemo(
    () =>
      stores.filter((s) =>
        `${s.city} ${s.address}`.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [query],
  );

  return (
    <PageShell>
      <PageIntro
        eyebrow="Boutiques"
        title="Find your nearest counter"
        copy="Chocolate is best chosen in person. Our boutiques pack ballotins to order, piece by piece, while you wait."
      />

      <section className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
        <div>
          <label htmlFor="postcode" className="eyebrow text-muted-foreground">Search by city or postcode</label>
          <input
            id="postcode"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. Manchester or W1J"
            className="mt-3 w-full border-b border-border bg-transparent py-4 text-sm focus:border-navy focus:outline-none"
          />
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {results.map((s) => (
              <li key={s.city} className="group py-7 transition-colors">
                <h2 className="font-display text-3xl group-hover:text-navy">{s.city}</h2>
                <p className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-gold" strokeWidth={1.25} /> {s.address}
                </p>
                <p className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="size-4 text-gold" strokeWidth={1.25} /> {s.hours}
                </p>
                <p className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="size-4 text-gold" strokeWidth={1.25} /> {s.phone}
                </p>
                <a
                  href={`https://maps.google.com/?q=Leonidas ${s.city}`}
                  className="eyebrow link-underline mt-4 inline-block text-navy"
                >
                  Directions
                </a>
              </li>
            ))}
            {results.length === 0 && (
              <li className="py-10 text-sm text-muted-foreground">
                No boutique found there yet — our full range ships nationwide.
              </li>
            )}
          </ul>
        </div>

        <Reveal>
          <div className="sticky top-32 aspect-[4/5] overflow-hidden bg-cream">
            <img src={boutique} alt="Interior of a Leonidas boutique with navy shelving" width={1280} height={960} loading="lazy" className="size-full object-cover" />
          </div>
        </Reveal>
      </section>

      <TrustStrip />
    </PageShell>
  );
}