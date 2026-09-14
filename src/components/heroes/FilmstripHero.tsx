import Link from "next/link";
import { type Locale } from "@/i18n/config";
import type { MediaSlot } from "@/lib/media";
import { Crumbs, type Crumb } from "@/components/ui/Section";
import { Figure } from "@/components/graphics/Figure";
import { Marquee } from "@/components/motion/Marquee";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";

export type Frame = { media: MediaSlot; label: string; href: string };

/**
 * Filmstrip hero — a title, then a strip of photographs that glides past on
 * its own, like a slideshow that never stops. Pure CSS animation on one
 * track; it pauses while the pointer is over it so a frame can be clicked.
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

      {/* The strip — edge to edge, always moving, slows to a stop on hover. */}
      <Reveal variant="fade" delay={0.2} className="mt-8 md:mt-10">
        <Marquee speed={55}>
          {frames.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group relative me-3 block aspect-[4/3] w-[70vw] shrink-0 overflow-hidden rounded-card bg-ink-2 sm:w-[44vw] md:me-4 lg:w-[30vw]"
            >
              <Figure
                slot={f.media}
                locale={locale}
                // Eager: the strip is already moving when the page opens, and a
                // frame that pops in blank mid-glide is worse than the extra bytes.
                priority
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
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
