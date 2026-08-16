import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Play, Star, ArrowRight, Leaf, Truck, Award, HeartHandshake, Sparkles, Globe2 } from "lucide-react";
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
import { collections, faqs, journal, occasions, products, reviews } from "@/data/catalog";
import hero from "@/assets/hero-chocolates.jpg";
import heritage from "@/assets/heritage-1913.jpg";
import corporate from "@/assets/corporate-gifting.jpg";
import videoPoster from "@/assets/craft-video-poster.jpg";
import signature from "@/assets/signature-praline.jpg";
import boutique from "@/assets/boutique-interior.jpg";
import occasionImg from "@/assets/occasion-gifting.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leonidas UK | Luxury Belgian Chocolates & Gifts Since 1913" },
      {
        name: "description",
        content:
          "Discover Leonidas Belgian chocolates in the UK. Fresh pralines, truffles, ballotins and luxury gift hampers made with 100% pure cocoa butter and no palm oil.",
      },
      { property: "og:title", content: "Leonidas UK | Luxury Belgian Chocolates Since 1913" },
      {
        property: "og:description",
        content: "Fresh Belgian pralines, truffles and luxury gift boxes, delivered across the UK.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Leonidas UK",
              description: "Official UK Master Franchisee of Leonidas Belgian Chocolates.",
              foundingDate: "1913",
              sameAs: ["https://instagram.com", "https://facebook.com"],
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const whyLeonidas = [
  { icon: Award, title: "Belgian Since 1913", copy: "A recipe book written over a century, still followed by hand." },
  { icon: Truck, title: "Fresh Weekly Deliveries", copy: "Chocolate arrives from Belgium each week. Nothing sits." },
  { icon: Globe2, title: "Made in Belgium", copy: "Every piece produced in our own Brussels workshops." },
  { icon: Leaf, title: "Sustainable Cocoa", copy: "Certified beans, traceable growers, long relationships." },
  { icon: Sparkles, title: "Luxury Ingredients", copy: "100% pure cocoa butter, fresh cream, real vanilla." },
  { icon: HeartHandshake, title: "Trusted Worldwide", copy: "Over 1,300 boutiques across more than forty countries." },
];

const quickShop = [
  {
    title: "Build a Ballotin",
    copy: "Choose the size, then fill it with pralines, truffles, manons and gianduja.",
    image: hero,
    href: "/shop",
  },
  {
    title: "Gift Boxes",
    copy: "Ribboned boxes for birthdays, thank-yous, weddings and last-minute arrivals.",
    image: occasionImg,
    href: "/occasions",
  },
  {
    title: "Visit Kingston",
    copy: "Find fresh weekly arrivals, local advice and hand-packed selections in store.",
    image: boutique,
    href: "/store-locator",
  },
];

const timeline = [
  { year: "1913", title: "A confectioner arrives in Belgium", copy: "Leonidas Kestekides, a Greek-American confectioner, settles in Brussels and begins making pralines." },
  { year: "1935", title: "The window opens", copy: "The now-famous marble window counter appears — chocolate sold directly to the street, always fresh." },
  { year: "1970s", title: "Belgium exports its craft", copy: "Boutiques open across Europe, each one supplied weekly from Brussels." },
  { year: "2000s", title: "Pure cocoa butter, always", copy: "The house formally commits to 100% pure cocoa butter and refuses palm oil." },
  { year: "Today", title: "The UK Master Franchise", copy: "Leonidas UK brings the full Belgian repertoire to British homes, boutiques and boardrooms." },
];

const quality = [
  { title: "100% Pure Cocoa Butter", copy: "No vegetable fat substitutes. It is the reason our chocolate snaps, shines and melts at body temperature." },
  { title: "No Palm Oil", copy: "Never used, in any recipe. Better for the forests, and better on the palate." },
  { title: "Fresh Ingredients", copy: "Real Belgian cream and butter, whole roasted nuts, natural vanilla." },
  { title: "Belgian Craftsmanship", copy: "Filled, enrobed and finished by hand in our Brussels workshops." },
  { title: "Sustainable Cocoa", copy: "Certified sustainable beans with traceability back to the cooperative." },
  { title: "Quality Promise", copy: "If a box arrives less than perfect, we replace it. No questions, no forms." },
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroFade = useTransform(scrollYProgress, [0, 1], [1, 0.35]);

  return (
    <PageShell>
      {/* HERO */}
      <section ref={heroRef} className="relative -mt-[104px] h-[88svh] min-h-[560px] overflow-hidden bg-navy">
        <motion.div style={{ y: heroY, opacity: heroFade, zIndex: 0 }} className="absolute inset-0">
          <img
            src={hero}
            alt="Assortment of Leonidas Belgian pralines on deep navy"
            width={1920}
            height={1200}
            fetchPriority="high"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/64 to-navy/10" />
        </motion.div>

        <div className="absolute inset-0 flex items-end" style={{ zIndex: 2 }}>
          <div className="mx-auto w-full max-w-[1400px] px-5 pb-14 pt-36 lg:px-10 lg:pb-20">
            <p className="eyebrow text-gold">
              Leonidas Kingston
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1] text-navy-foreground sm:text-6xl lg:text-7xl">
              Belgian chocolates, freshly packed for every occasion
            </h1>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-navy-foreground/78">
              Pralines, truffles, ballotins and gifts from the Belgian house founded in 1913. Packed by hand,
              made with pure cocoa butter, and delivered fresh from Belgium each week.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="group inline-flex w-full items-center justify-center gap-3 bg-navy-foreground px-8 py-4 text-navy transition-colors duration-500 hover:bg-gold sm:w-auto"
              >
                <span className="eyebrow">Shop Chocolates</span>
                <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.25} />
              </Link>
              <Link
                to="/heritage"
                className="eyebrow flex-1 border border-navy-foreground/35 px-5 py-4 text-center text-navy-foreground transition-colors duration-500 hover:border-gold hover:text-gold sm:flex-none sm:px-8"
              >
                Build a Ballotin
              </Link>
              <Link to="/store-locator" className="eyebrow link-underline flex-1 px-2 text-center text-navy-foreground/70 sm:flex-none">
                Find a boutique
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* QUICK SHOP */}
      <section className="bg-background">
        <div className="container-lux grid gap-px border-x border-border bg-border py-0 md:grid-cols-3">
          {quickShop.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <Link to={item.href} className="group grid min-h-64 grid-cols-[0.9fr_1.1fr] bg-card">
                <div className="img-zoom min-h-full bg-cream">
                  <img src={item.image} alt={item.title} width={640} height={720} loading="lazy" className="size-full object-cover" />
                </div>
                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <p className="eyebrow text-cocoa-light">Start here</p>
                  <h2 className="mt-3 font-display text-3xl leading-tight">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                  <span className="eyebrow mt-6 inline-flex items-center gap-2 text-navy">
                    Explore
                    <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-cocoa-light">Shop by Chocolate</p>
            <h2 className="mt-5 max-w-2xl font-display text-5xl leading-[1.05] lg:text-6xl">
              The Leonidas favourites, ready to gift
            </h2>
          </div>
          <Link to="/shop" className="eyebrow link-underline text-navy">
            View all collections
          </Link>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <Link to="/shop" className="group block">
                <div className="img-zoom aspect-[3/4] border border-border bg-cream">
                  <img src={c.image} alt={c.name} width={1024} height={1280} loading="lazy" className="size-full object-cover" />
                </div>
                <h3 className="mt-6 font-display text-3xl">{c.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.copy}</p>
                <span className="eyebrow mt-4 inline-flex items-center gap-2 text-navy">
                  Explore
                  <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.5} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SIGNATURE EDITORIAL */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-5 py-24 lg:grid-cols-2 lg:px-10 lg:py-36">
          <Reveal>
            <div className="img-zoom aspect-[4/5]">
              <img src={signature} alt="A single dark praline finished with gold leaf" width={1024} height={1280} loading="lazy" className="size-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.12} className="lg:pl-10">
            <p className="eyebrow text-cocoa-light">Build Your Own Box</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] lg:text-6xl">
              A ballotin filled exactly the way they like it
            </h2>
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Start with a classic Leonidas ballotin and choose from milk, dark, white and assorted pieces.
              Keep it simple with the house selection, or build a box around hazelnut pralines, fresh cream
              ganaches, truffles and seasonal specials.
            </p>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Each order can include a gift message and arrives without prices enclosed.
            </p>
            <Link to="/shop" className="button-primary eyebrow mt-10">
              Build a Ballotin
              <ArrowRight className="size-4" strokeWidth={1.25} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SHOP BY OCCASION */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-cocoa-light">Shop by Occasion</p>
          <h2 className="mt-5 font-display text-5xl leading-[1.05] lg:text-6xl">
            Gifts for the moments people remember
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            Choose the moment and we will help you choose the box, ribbon and message.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {occasions.map((o, i) => (
            <Link
              key={o.name}
              to="/occasions"
              className="group relative bg-card p-8 transition-colors duration-500 hover:bg-navy lg:p-10"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <h3 className="font-display text-3xl transition-colors duration-500 group-hover:text-navy-foreground">
                {o.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-navy-foreground/70">
                {o.copy}
              </p>
              <ArrowRight
                className="mt-8 size-4 text-gold opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100"
                strokeWidth={1.25}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-cocoa-light">Best Sellers & New Arrivals</p>
              <h2 className="mt-5 font-display text-5xl leading-[1.05] lg:text-6xl">Popular in store and online</h2>
            </div>
            <Link to="/shop" className="eyebrow link-underline text-navy">Shop everything</Link>
          </Reveal>
          <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HERITAGE TIMELINE */}
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <p className="eyebrow text-gold">Since 1913</p>
              <h2 className="mt-6 font-display text-5xl leading-[1.05] lg:text-6xl">
                A Belgian house, told in five moments
              </h2>
              <div className="img-zoom mt-12 aspect-[4/3]">
                <img src={heritage} alt="Archival photograph of a chocolatier hand-dipping pralines" width={1280} height={960} loading="lazy" className="size-full object-cover sepia" />
              </div>
            </Reveal>

            <Reveal delay={0.15} className="lg:pt-24">
              <ol className="relative border-l border-navy-foreground/20 pl-10">
                {timeline.map((t) => (
                  <li key={t.year} className="group relative pb-14 last:pb-0">
                    <span className="absolute -left-[45px] top-2 size-2 rounded-full bg-gold transition-transform duration-500 group-hover:scale-150" />
                    <p className="eyebrow text-gold">{t.year}</p>
                    <h3 className="mt-3 font-display text-3xl">{t.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-foreground/70">{t.copy}</p>
                  </li>
                ))}
              </ol>
              <Link to="/heritage" className="eyebrow mt-4 inline-flex items-center gap-3 border-b border-gold pb-2 text-gold">
                Read the full story
                <ArrowRight className="size-4" strokeWidth={1.25} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <TrustStrip tone="navy" />

      {/* QUALITY */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-cocoa-light">Our Quality</p>
          <h2 className="mt-5 font-display text-5xl leading-[1.05] lg:text-6xl">
            What we put in, and what we leave out
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {quality.map((q, i) => (
            <Reveal key={q.title} delay={(i % 3) * 0.08}>
              <div className="h-full border border-border bg-card p-10 shadow-soft transition-all duration-700 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="rule-gold block h-px w-12" />
                <h3 className="mt-7 font-display text-3xl leading-snug">{q.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{q.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="relative">
        <div className="relative h-[70vh] min-h-[460px] overflow-hidden bg-navy">
          <img src={videoPoster} alt="A master chocolatier pouring tempered chocolate onto marble" width={1920} height={1080} loading="lazy" className="size-full object-cover opacity-70" />
          <div className="absolute inset-0 grid place-items-center bg-navy/35">
            <Reveal className="text-center">
              <button
                aria-label="Play the craftsmanship film"
                className="group mx-auto grid size-20 place-items-center rounded-full border border-navy-foreground/50 text-navy-foreground transition-all duration-700 hover:scale-110 hover:border-gold hover:text-gold"
              >
                <Play className="ml-1 size-6" strokeWidth={1} />
              </button>
              <p className="eyebrow mt-8 text-navy-foreground/80">The Film</p>
              <h2 className="mt-4 font-display text-5xl text-navy-foreground lg:text-6xl">
                Three minutes in Brussels
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CORPORATE */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-5 py-24 lg:grid-cols-2 lg:px-10 lg:py-36">
          <Reveal>
            <p className="eyebrow text-cocoa-light">Corporate Gifting</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] lg:text-6xl">
              Two hundred gifts that each feel like one
            </h2>
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Branded ribbon, printed or handwritten cards, bulk pricing and dispatch to as many addresses
              as you need. Our corporate team handles Christmas lists, client thank-yous, conference gifts
              and long-service awards — with one point of contact throughout.
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {["Bulk pricing from 25 boxes", "Custom ribbon & branding", "Multi-address dispatch", "Luxury hampers", "Christmas scheduling", "Dedicated account manager"].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="size-1 rounded-full bg-gold" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/corporate" className="group mt-10 inline-flex items-center gap-3 bg-navy px-9 py-4 text-navy-foreground transition-colors duration-500 hover:bg-cocoa">
              <span className="eyebrow">Request a Quote</span>
              <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.25} />
            </Link>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="img-zoom aspect-[4/3]">
              <img src={corporate} alt="Stacked luxury chocolate gift boxes on a boardroom table" width={1280} height={960} loading="lazy" className="size-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY LEONIDAS */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <p className="eyebrow text-cocoa-light">Why Leonidas</p>
          <h2 className="mt-5 max-w-2xl font-display text-5xl leading-[1.05] lg:text-6xl">
            Six reasons the box is worth opening
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {whyLeonidas.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.08}>
              <w.icon className="size-6 text-gold" strokeWidth={1} />
              <h3 className="mt-6 font-display text-2xl">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-cocoa-light">Verified Reviews</p>
              <h2 className="mt-5 font-display text-5xl leading-[1.05] lg:text-6xl">4.9 from 1,400 customers</h2>
            </div>
            <div className="flex gap-1" aria-label="Rated 4.9 out of 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-gold text-gold" strokeWidth={1} />
              ))}
            </div>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={(i % 4) * 0.07}>
                <figure className="flex h-full flex-col border border-border bg-card p-9 shadow-soft">
                  <div className="flex gap-1">
                    {Array.from({ length: r.stars }).map((_, s) => (
                      <Star key={s} className="size-3.5 fill-gold text-gold" strokeWidth={1} />
                    ))}
                  </div>
                  <blockquote className="mt-6 flex-1 font-display text-xl leading-relaxed">“{r.text}”</blockquote>
                  <figcaption className="eyebrow mt-7 text-muted-foreground">
                    {r.name} · {r.location}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-32">
        <Reveal className="text-center">
          <p className="eyebrow text-cocoa-light">@leonidas.uk</p>
          <h2 className="mt-5 font-display text-5xl leading-[1.05] lg:text-6xl">From our table to yours</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {[signature, occasionImg, boutique, corporate, videoPoster, heritage].map((img, i) => (
            <a key={i} href="https://instagram.com" className="img-zoom group relative aspect-square bg-cream" aria-label="View on Instagram">
              <img src={img} alt="Leonidas moment shared on Instagram" width={800} height={800} loading="lazy" className="size-full object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/30" />
            </a>
          ))}
        </div>
      </section>

      {/* JOURNAL */}
      <section className="border-t border-border bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-cocoa-light">The Journal</p>
              <h2 className="mt-5 font-display text-5xl leading-[1.05] lg:text-6xl">Reading, between pieces</h2>
            </div>
            <Link to="/journal" className="eyebrow link-underline text-navy">All articles</Link>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {journal.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 4) * 0.07}>
                <Link to="/journal" className="group block">
                  <p className="eyebrow text-gold">{a.category}</p>
                  <h3 className="mt-4 font-display text-2xl leading-snug group-hover:text-navy">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                  <p className="eyebrow mt-5 text-muted-foreground">{a.read} read</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow text-cocoa-light">Questions</p>
            <h2 className="mt-5 font-display text-5xl leading-[1.05] lg:text-6xl">Good to know</h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              Anything else, our team in the UK answers within one working day.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border">
                  <AccordionTrigger className="py-6 text-left font-display text-2xl hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-2xl pb-7 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-2xl px-5 py-24 text-center lg:py-32">
          <Reveal>
            <p className="eyebrow text-gold">The Correspondence</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] lg:text-6xl">
              Seasonal collections, quietly announced
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-navy-foreground/70">
              A short letter each month. New arrivals, recipes and boutique news. Never more than that.
            </p>
            <form
              className="mt-10 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter" className="sr-only">Email address</label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 border-b border-navy-foreground/30 bg-transparent px-1 py-4 text-sm text-navy-foreground placeholder:text-navy-foreground/45 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="eyebrow bg-navy-foreground px-9 py-4 text-navy transition-colors duration-500 hover:bg-gold"
              >
                Subscribe
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
