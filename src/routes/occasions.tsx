import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, PageShell } from "@/components/site/PageShell";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Reveal } from "@/components/site/Reveal";
import { occasions } from "@/data/catalog";
import occasionImg from "@/assets/occasion-gifting.jpg";

export const Route = createFileRoute("/occasions")({
  head: () => ({
    meta: [
      { title: "Chocolate Gifts by Occasion | Leonidas UK" },
      {
        name: "description",
        content:
          "Belgian chocolate gifts for birthdays, weddings, anniversaries, Christmas, Valentine's and corporate thank-yous. Handwritten cards and gift wrapping included.",
      },
      { property: "og:title", content: "Chocolate Gifts by Occasion | Leonidas UK" },
      { property: "og:description", content: "Belgian chocolate gifts for every moment worth marking." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Occasions,
});

function Occasions() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Gifting"
        title="Every moment worth marking"
        copy="A gift should say something the card cannot. Choose the occasion and we will suggest the box, the ribbon and the words."
      />

      <section className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {occasions.map((o) => (
            <Link key={o.name} to="/shop" className="group bg-background p-10 transition-colors duration-500 hover:bg-navy lg:p-12">
              <h2 className="font-display text-4xl transition-colors duration-500 group-hover:text-navy-foreground">{o.name}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-navy-foreground/70">
                {o.copy}
              </p>
              <span className="eyebrow mt-8 inline-block text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Shop the edit
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-5 py-24 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <div className="img-zoom aspect-[4/5]">
              <img src={occasionImg} alt="Hands offering a navy chocolate gift box" width={1024} height={1280} loading="lazy" className="size-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-cocoa-light">The Gifting Service</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05]">Wrapped, written and sent for you</h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Choose navy or cream ribbon, add a handwritten message and send directly to the recipient with
              no prices enclosed. Nominate the delivery date at checkout — we will hold the box until the
              morning it should arrive.
            </p>
            <Link to="/shop" className="eyebrow mt-9 inline-block border-b border-navy pb-2 text-navy">
              Begin a gift
            </Link>
          </Reveal>
        </div>
      </section>

      <TrustStrip />
    </PageShell>
  );
}