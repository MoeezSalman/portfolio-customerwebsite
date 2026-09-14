import { type Locale } from "@/i18n/config";
import type { MediaSlot } from "@/lib/media";
import { Crumbs, type Crumb } from "@/components/ui/Section";
import { Figure } from "@/components/graphics/Figure";
import { Parallax } from "@/components/motion/Parallax";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Cover hero — one wide landscape photograph with the title card overlapping
 * its lower edge, like a magazine cover. Used on the journal index.
 */
export function CoverHero({
  locale,
  media,
  title,
  lead,
  eyebrow,
  crumbs = [],
  children,
}: {
  locale: Locale;
  media: MediaSlot;
  title: string;
  lead?: string;
  eyebrow?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative pt-24 md:pt-28">
      <div className="container-x">
        <Reveal variant="fade" duration={0.5}>
          <Crumbs locale={locale} crumbs={crumbs} className="mb-4" />
        </Reveal>

        <Reveal variant="scale" duration={0.9}>
          <Parallax className="aspect-[4/3] rounded-card sm:aspect-[16/9] lg:aspect-[21/9]" strength={6}>
            <Figure slot={media} locale={locale} priority sizes="100vw" className="absolute inset-0" />
          </Parallax>
        </Reveal>

        <div className="relative z-10 -mt-12 px-3 sm:-mt-16 sm:px-8 lg:-mt-20 lg:px-14">
          <Reveal variant="up" delay={0.2}>
            <div className="rounded-card bg-white p-6 shadow-[0_30px_60px_-30px_rgba(23,24,29,0.35)] md:p-9">
              {eyebrow && (
                <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
                  <span className="h-px w-8 bg-gold/60" />
                  {eyebrow}
                </span>
              )}
              <SplitText
                as="h1"
                text={title}
                className="mt-3 max-w-[18ch] font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.04] font-bold tracking-tight text-chalk"
              />
              {lead && <p className="mt-4 max-w-[52ch] leading-relaxed text-fog">{lead}</p>}
              {children}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
