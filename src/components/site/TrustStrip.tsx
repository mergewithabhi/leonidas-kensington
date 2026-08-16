import { trustPoints } from "@/data/catalog";
import { cn } from "@/lib/utils";

export function TrustStrip({
  tone = "cream",
  className,
}: {
  tone?: "cream" | "navy";
  className?: string;
}) {
  const items = [...trustPoints, ...trustPoints];
  return (
    <div
      className={cn(
        "overflow-hidden border-y py-3.5",
        tone === "navy"
          ? "border-navy-foreground/15 bg-navy text-navy-foreground"
          : "border-border bg-cream text-foreground",
        className,
      )}
      aria-label="Our promises"
    >
      <div
        className="flex w-max gap-14 whitespace-nowrap"
        style={{ animation: "lux-marquee 46s linear infinite" }}
      >
        {items.map((point, i) => (
        <span key={`${point}-${i}`} className="eyebrow flex items-center gap-14 opacity-85">
            {point}
            <span className="inline-block size-1 rounded-full bg-gold" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
