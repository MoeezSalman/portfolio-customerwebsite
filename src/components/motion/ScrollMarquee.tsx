"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * A band of oversized words that slides sideways as the page scrolls.
 *
 * Purely transform-driven: one scroll listener (shared by Motion), one
 * spring, one translateX on a single element. No layout, no paint — the
 * compositor moves a pre-rasterised layer, so it costs nothing on scroll.
 * It replaces the hairline dividers between sections.
 */
export function ScrollMarquee({
  words,
  rtl = false,
  reverse = false,
  tone = "outline",
  className,
}: {
  words: string[];
  /** Flip travel direction so the band always enters from the reading edge. */
  rtl?: boolean;
  reverse?: boolean;
  tone?: "outline" | "gold" | "solid" | "light";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Travel ~640px across the band's time on screen. Sign follows script
  // direction so the words always move "forward" for the reader.
  const dir = (rtl ? 1 : -1) * (reverse ? -1 : 1);
  const raw = useTransform(scrollYProgress, [0, 1], [0, 640 * dir]);
  const x = useSpring(raw, { stiffness: 90, damping: 30, mass: 0.35 });

  const row = words.map((w) => `${w}  ·  `).join("");

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn("overflow-hidden py-4 select-none md:py-6", className)}
    >
      <motion.div
        style={{ x, willChange: "transform" }}
        className={cn(
          "flex w-max whitespace-nowrap font-display text-[clamp(2.6rem,8vw,7rem)] leading-none font-bold tracking-tight uppercase",
          tone === "outline" && "text-outline",
          tone === "gold" && "text-outline-gold",
          tone === "solid" && "text-chalk/[0.08]",
          tone === "light" && "text-white/20",
        )}
      >
        {[0, 1, 2].map((i) => (
          <span key={i} className="shrink-0 pe-6">
            {row}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
