import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { PageIntro, PageShell } from "@/components/site/PageShell";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Reveal } from "@/components/site/Reveal";
import corporate from "@/assets/corporate-gifting.jpg";
import hamper from "@/assets/collection-hamper.jpg";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate Chocolate Gifting & Bulk Orders | Leonidas UK" },
      {
        name: "description",
        content:
          "Luxury Belgian chocolate gifts for clients and colleagues. Branded ribbon, bulk pricing from 25 boxes, multi-address dispatch and Christmas scheduling.",
      },
      { property: "og:title", content: "Corporate Chocolate Gifting | Leonidas UK" },
      { property: "og:description", content: "Business gifts, hampers and bulk orders, handled end to end." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Corporate,
});

const services = [
  { title: "Client Gifting", copy: "Considered boxes that carry your name without shouting it." },
  { title: "Christmas Programmes", copy: "Planned from September, delivered on the dates you nominate." },
  { title: "Branded Presentation", copy: "Custom ribbon, printed sleeves and cards in your house colours." },
  { title: "Luxury Hampers", copy: "Chocolate, biscuits and wine, presented in hand-woven baskets." },
  { title: "Events & Conferences", copy: "Table gifts and delegate boxes at any volume." },
  { title: "Long Service Awards", copy: "A gift that recognises time with something made over time." },
];

function Corporate() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Corporate Gifting"
        title="Business gifts that feel personal"
        copy="From twenty-five boxes to several thousand, handled by one team with one point of contact — and delivered on the day you choose."
      />

      <section className="mx-auto grid max-w-[1400px] items-center gap-16 px-5 py-24 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="img-zoom aspect-[4/3]">
            <img src={corporate} alt="Luxury chocolate gift boxes on a boardroom table" width={1280} height={960} loading="lazy" className="size-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl leading-[1.05]">One list, one contact, one standard</h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Send us your list and we will handle the rest: wrapping, cards, addresses and timing. Every box
            leaves our UK premises hand-packed from stock delivered fresh from Belgium that week.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-8 border-t border-border pt-8">
            {[
              ["25+", "Minimum order"],
              ["48h", "Quote turnaround"],
              ["1,300+", "Boutiques worldwide"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-4xl text-navy">{n}</dt>
                <dd className="eyebrow mt-2 text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
          <Reveal><h2 className="max-w-xl font-display text-5xl leading-[1.05]">What we can arrange</h2></Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.07}>
                <div className="h-full border border-border bg-card p-10 shadow-soft transition-all duration-700 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="rule-gold block h-px w-12" />
                  <h3 className="mt-7 font-display text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-16 px-5 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
        <Reveal>
          <p className="eyebrow text-cocoa-light">Request a Quote</p>
          <h2 className="mt-5 font-display text-5xl leading-[1.05]">Tell us the occasion</h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            We will come back within one working day with options, pricing and timings.
          </p>
          <div className="img-zoom mt-12 hidden aspect-[4/3] lg:block">
            <img src={hamper} alt="Luxury Leonidas chocolate hamper" width={1024} height={1280} loading="lazy" className="size-full object-cover" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Thank you — our corporate team will reply within one working day.");
              (e.target as HTMLFormElement).reset();
            }}
          >
            {[
              { id: "name", label: "Your name", type: "text" },
              { id: "company", label: "Company", type: "text" },
              { id: "email", label: "Email address", type: "email" },
              { id: "quantity", label: "Approximate number of gifts", type: "number" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="eyebrow text-muted-foreground">{f.label}</label>
                <input
                  id={f.id}
                  type={f.type}
                  required
                  className="mt-3 w-full border-b border-border bg-transparent py-3 text-sm focus:border-navy focus:outline-none"
                />
              </div>
            ))}
            <div>
              <label htmlFor="brief" className="eyebrow text-muted-foreground">Tell us more</label>
              <textarea
                id="brief"
                rows={4}
                className="mt-3 w-full border-b border-border bg-transparent py-3 text-sm focus:border-navy focus:outline-none"
              />
            </div>
            <button type="submit" className="eyebrow bg-navy px-9 py-4 text-navy-foreground transition-colors duration-500 hover:bg-cocoa">
              Request a Quote
            </button>
          </form>
        </Reveal>
      </section>

      <TrustStrip />
    </PageShell>
  );
}