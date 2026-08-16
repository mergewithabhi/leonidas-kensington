import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, PageShell } from "@/components/site/PageShell";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Reveal } from "@/components/site/Reveal";
import { journal } from "@/data/catalog";
import craft from "@/assets/craft-video-poster.jpg";
import pralines from "@/assets/collection-pralines.jpg";
import truffles from "@/assets/collection-truffles.jpg";
import hamper from "@/assets/collection-hamper.jpg";
import heritage from "@/assets/heritage-1913.jpg";

const images = [heritage, truffles, hamper, pralines];

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "The Journal | Chocolate Guides, Recipes & Belgian Heritage | Leonidas UK" },
      {
        name: "description",
        content:
          "Recipes, pairing ideas, gift guides and Belgian heritage stories from the Leonidas UK journal — an online magazine for chocolate lovers.",
      },
      { property: "og:title", content: "The Leonidas Journal" },
      { property: "og:description", content: "Recipes, guides and stories from a Belgian chocolate house." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Journal,
});

const categories = [
  "Recipes",
  "Chocolate Guides",
  "Gift Guides",
  "Belgian Heritage",
  "Behind the Scenes",
  "Pairing Ideas",
  "Seasonal",
  "Store News",
];

function Journal() {
  const [lead, ...rest] = journal;

  return (
    <PageShell>
      <PageIntro
        eyebrow="The Journal"
        title="An online magazine for chocolate"
        copy="Recipes, pairings, guides and the occasional story from Brussels. Written slowly, like everything else here."
      />

      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <span key={c} className="eyebrow border border-border px-4 py-2 text-muted-foreground transition-colors hover:border-navy hover:text-navy">
              {c}
            </span>
          ))}
        </div>

        {lead && (
          <Reveal className="mt-16">
            <Link to="/journal" className="group grid items-center gap-12 lg:grid-cols-2">
              <div className="img-zoom aspect-[4/3]">
                <img src={craft} alt={lead.title} width={1920} height={1080} loading="lazy" className="size-full object-cover" />
              </div>
              <div>
                <p className="eyebrow text-gold">{lead.category}</p>
                <h2 className="mt-5 font-display text-5xl leading-[1.05] group-hover:text-navy">{lead.title}</h2>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">{lead.excerpt}</p>
                <p className="eyebrow mt-8 text-muted-foreground">{lead.read} read</p>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="mt-24 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.07}>
              <Link to="/journal" className="group block">
                <div className="img-zoom aspect-[4/3] bg-cream">
                  <img src={images[i % images.length]} alt={a.title} width={1280} height={960} loading="lazy" className="size-full object-cover" />
                </div>
                <p className="eyebrow mt-6 text-gold">{a.category}</p>
                <h3 className="mt-3 font-display text-3xl leading-snug group-hover:text-navy">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                <p className="eyebrow mt-5 text-muted-foreground">{a.read} read</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <TrustStrip />
    </PageShell>
  );
}