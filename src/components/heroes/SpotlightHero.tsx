import { type Locale } from "@/i18n/config";
import type { MediaSlot } from "@/lib/media";
import { Crumbs, type Crumb } from "@/components/ui/Section";
import { Figure } from "@/components/graphics/Figure";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollMarquee } from "@/components/motion/ScrollMarquee";

/**
 * Spotlight hero — a charcoal stage with one machine lit on it, and a huge
 * hollow word sliding across the back wall as you scroll. Used on the
 * equipment page.
 */
export function SpotlightHero({
  locale,
  media,
  title,
  lead,
  eyebrow,
  words,
  crumbs = [],
}: {
  locale: Locale;
  media: MediaSlot;
  title: string;
  lead?: string;
  eyebrow?: string;
  words: string[];
  crumbs?: Crumb[];
}) {
  return (
    <section data-hero-dark className="relative overflow-hidden bg-chalk text-white">
      {/* Back-wall word band */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
        <ScrollMarquee words={words} rtl={locale === "ar"} tone="light" />
      </div>
      {/* Soft spotlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_70%_55%,rgba(184,134,43,0.28),transparent_70%)] rtl:bg-[radial-gradient(60%_70%_at_30%_55%,rgba(184,134,43,0.28),transparent_70%)]" />

      <div className="container-x relative pt-28 pb-12 md:pt-32 md:pb-16">
        <Reveal variant="fade" duration={0.5}>
          <Crumbs locale={locale} crumbs={crumbs} light />
        </Reveal>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            {eyebrow && (
              <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.22em] text-gold-3 uppercase">
                <span className="h-px w-8 bg-gold-3/70" />
                {eyebrow}
              </span>
            )}
            <SplitText
              as="h1"
              text={title}
              className="mt-4 font-display text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1] font-bold tracking-tight"
            />
            {lead && (
              <Reveal variant="up" delay={0.16}>
                <p className="mt-6 max-w-[42ch] text-[1.05rem] leading-relaxed text-white/75">{lead}</p>
              </Reveal>
            )}
          </div>

          <Reveal variant="scale" duration={1} className="lg:col-span-7">
            <Figure
              slot={media}
              locale={locale}
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="aspect-[16/10] rounded-card-lg shadow-[0_40px_90px_-30px_rgba(0,0,0,0.7)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
