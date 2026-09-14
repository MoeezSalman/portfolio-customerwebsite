"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { type Locale } from "@/i18n/config";
import type { MediaSlot } from "@/lib/media";
import { Crumbs, type Crumb } from "@/components/ui/Section";
import { Figure } from "@/components/graphics/Figure";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";

export type Frame = { media: MediaSlot; label: string; href: string };

/**
 * Filmstrip hero — a title, then a strip of photographs that travels
 * sideways as you scroll, like frames being pulled through a projector.
 * One translateX on one element; nothing else animates.
 */
export function FilmstripHero({
  locale,
  frames,
  title,
  lead,
  eyebrow,
  crumbs = [],
}: {
  locale: Locale;
  frames: Frame[];
  title: string;
  lead?: string;
  eyebrow?: string;
  crumbs?: Crumb[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Driven by page scroll from the top, so the strip is untouched on load and
  // slides as the reader starts moving. One transform on one element.
  const { scrollY } = useScroll();
  const dir = locale === "ar" ? 1 : -1;
  const raw = useTransform(scrollY, [0, 1400], [0, 520 * dir]);
  const x = useSpring(raw, { stiffness: 90, damping: 30, mass: 0.35 });

  return (
    <section className="relative overflow-hidden pt-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora" />
      </div>

      <div className="container-x relative">
        <Reveal variant="fade" duration={0.5}>
          <Crumbs locale={locale} crumbs={crumbs} />
        </Reveal>
        <div className="mt-8 flex flex-col gap-5 md:mt-10 md:flex-row md:items-end md:justify-between">
          <div>
            {eyebrow && (
              <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
                <span className="h-px w-8 bg-gold/60" />
                {eyebrow}
              </span>
            )}
            <SplitText
              as="h1"
              text={title}
              className="mt-4 font-display text-[clamp(2.4rem,6vw,5rem)] leading-[1] font-bold tracking-tight text-chalk"
            />
          </div>
          {lead && (
            <Reveal variant="up" delay={0.16}>
              <p className="max-w-[40ch] leading-relaxed text-fog md:text-end">{lead}</p>
            </Reveal>
          )}
        </div>
      </div>

      {/* The strip — starts inset like the container, then runs off the end edge. */}
      <div ref={ref} className="container-x relative mt-8 md:mt-10">
        <motion.ul style={{ x, willChange: "transform" }} className="flex w-max gap-3 md:gap-4">
          {frames.map((f, i) => (
            <li key={f.href} className="w-[70vw] shrink-0 sm:w-[44vw] lg:w-[30vw]">
              <Link
                href={f.href}
                className="group relative block aspect-[4/3] overflow-hidden rounded-card bg-ink-2"
              >
                <Figure
                  slot={f.media}
                  locale={locale}
                  priority={i < 2}
                  sizes="(max-width: 640px) 70vw, 30vw"
                  className="absolute inset-0"
                  imgClassName="transition-transform duration-[900ms] ease-[var(--ease-expo)] group-hover:scale-[1.06]"
                />
                <div className="scrim absolute inset-x-0 bottom-0 p-5 pt-16">
                  <p className="font-display text-[1.15rem] leading-tight font-bold text-white md:text-[1.35rem]">
                    {f.label}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
