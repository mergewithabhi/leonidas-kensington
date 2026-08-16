import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[104px]">{children}</main>
      <Footer />
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="border-b border-border bg-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
        <p className="eyebrow text-cocoa-light">{eyebrow}</p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">{copy}</p>
      </div>
    </section>
  );
}