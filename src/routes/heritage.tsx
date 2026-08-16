import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, PageShell } from "@/components/site/PageShell";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Reveal } from "@/components/site/Reveal";
import heritage from "@/assets/heritage-1913.jpg";
import boutique from "@/assets/boutique-interior.jpg";
import craft from "@/assets/craft-video-poster.jpg";

export const Route = createFileRoute("/heritage")({
  head: () => ({
    meta: [
      { title: "Our Story & Quality | Belgian Chocolate Since 1913 | Leonidas UK" },
      {
        name: "description",
        content:
          "The Leonidas story, from a Brussels shopfront in 1913 to the UK Master Franchise. 100% pure cocoa butter, no palm oil, sustainable cocoa.",
      },
      { property: "og:title", content: "Our Story & Quality | Leonidas UK" },
      { property: "og:description", content: "A Belgian house founded in 1913, now at home in the UK." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Heritage,
});

const chapters = [
  {
    year: "1913",
    title: "Brussels, a confectioner and a copper pot",
    copy: "Leonidas Kestekides came to Belgium for a world fair and stayed for a country. He opened a small salon, made pralines by hand, and sold them the same day they were made. The habit stuck.",
    image: heritage,
  },
  {
    year: "1935",
    title: "The window that changed the trade",
    copy: "A marble counter opening directly onto the street let people buy one piece or twenty, without ceremony. Luxury chocolate stopped being something behind glass.",
    image: boutique,
  },
  {
    year: "Today",
    title: "The UK Master Franchise",
    copy: "Leonidas UK holds the Master Franchise for the United Kingdom, bringing the full Belgian repertoire to British boutiques, homes and boardrooms — with weekly deliveries from Brussels.",
    image: craft,
  },
];

const promises = [
  { title: "100% Pure Cocoa Butter", copy: "The single most expensive decision we make, and the one we will never revisit." },
  { title: "No Palm Oil", copy: "In no recipe, in no season, in no format. Not now and not before." },
  { title: "Fresh Belgian Cream", copy: "Real dairy in the ganaches, which is why they are best eaten soon." },
  { title: "Sustainable Cocoa", copy: "Certified beans, traceable cooperatives, relationships measured in decades." },
  { title: "Hand Finishing", copy: "Filled, enrobed and decorated by chocolatiers, not only by machines." },
  { title: "Weekly Freshness", copy: "Stock arrives from Belgium every week. Nothing waits in a warehouse." },
];

function Heritage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Since 1913"
        title="A Belgian house, at home in Britain"
        copy="One hundred and thirteen years of one idea: make chocolate properly, and sell it while it is still fresh."
      />

      {chapters.map((c, i) => (
        <section key={c.year} className={i % 2 ? "bg-cream" : "bg-background"}>
          <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-5 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
            <Reveal className={i % 2 ? "lg:order-2" : ""}>
              <div className="img-zoom aspect-[4/3]">
                <img src={c.image} alt={c.title} width={1280} height={960} loading="lazy" className="size-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow text-gold">{c.year}</p>
              <h2 className="mt-6 font-display text-5xl leading-[1.05]">{c.title}</h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">{c.copy}</p>
            </Reveal>
          </div>
        </section>
      ))}

      <TrustStrip tone="navy" />

      <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-cocoa-light">The Quality Promise</p>
          <h2 className="mt-5 font-display text-5xl leading-[1.05] lg:text-6xl">Six commitments, kept quietly</h2>
        </Reveal>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {promises.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.07}>
              <div className="h-full border border-border bg-card p-10 shadow-soft transition-all duration-700 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="rule-gold block h-px w-12" />
                <h3 className="mt-7 font-display text-3xl leading-snug">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16">
          <Link to="/shop" className="eyebrow inline-block bg-navy px-9 py-4 text-navy-foreground transition-colors duration-500 hover:bg-cocoa">
            Taste the difference
          </Link>
        </Reveal>
      </section>
    </PageShell>
  );
}