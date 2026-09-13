import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";

export function Eyebrow({
  children,
  className,
  accent = "gold",
}: {
  children: React.ReactNode;
  className?: string;
  accent?: "gold" | "aqua";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em]",
        accent === "gold" ? "text-gold" : "text-aqua",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-8",
          accent === "gold" ? "bg-gold/60" : "bg-aqua/60",
        )}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "start",
  accent = "gold",
  className,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "start" | "center";
  accent?: "gold" | "aqua";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-5",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal variant="fade" duration={0.5}>
          <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <SplitText
        as={as}
        text={title}
        className="font-display text-[clamp(1.9rem,4.4vw,3.4rem)] font-bold leading-[1.08] tracking-tight text-chalk"
      />
      {lead && (
        <Reveal variant="up" delay={0.14}>
          <p className="max-w-2xl text-[1.02rem] leading-relaxed text-fog">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
