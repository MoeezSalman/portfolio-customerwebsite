import { type Locale } from "@/i18n/config";
import type { MediaSlot } from "@/lib/media";
import { cn } from "@/lib/utils";
import { Crumbs, type Crumb } from "@/components/ui/Section";
import { Figure } from "@/components/graphics/Figure";
import { Parallax } from "@/components/motion/Parallax";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Cinema hero — the photograph fills the screen edge to edge; the title sits
 * in the bottom corner over a dark scrim. Used for service detail pages and
 * journal posts, where one picture should dominate.
 */
export function CinemaHero({
  locale,
  media,
  title,
  lead,
  eyebrow,
  crumbs = [],
  aside,
  children,
  height = "tall",
}: {
  locale: Locale;
  media: MediaSlot;
  title: string;
  lead?: string;
  eyebrow?: string;
  crumbs?: Crumb[];
  /** Something to float in the end corner — e.g. a "before" thumbnail. */
  aside?: React.ReactNode;
  children?: React.ReactNode;
  height?: "tall" | "medium";
}) {
  return (
    <section
      data-hero-dark
      className={cn(
        "relative flex flex-col overflow-hidden bg-chalk",
        height === "tall" ? "min-h-[88svh]" : "min-h-[64svh]",
      )}
    >
      <Parallax className="absolute inset-0" strength={5}>
        <Figure slot={media} locale={locale} priority sizes="100vw" className="absolute inset-0" />
      </Parallax>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#14110c]/88 via-[#14110c]/30 to-[#14110c]/25" />
      {/* Extra darkening under the fixed header so the nav stays readable. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#14110c]/70 to-transparent" />

      <div className="container-x relative flex flex-1 flex-col justify-between pt-28 pb-8 md:pt-32 md:pb-10">
        <Reveal variant="fade" duration={0.5}>
          <Crumbs locale={locale} crumbs={crumbs} light />
        </Reveal>

        <div className="mt-16 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {eyebrow && (
              <Reveal variant="fade" duration={0.5}>
                <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.22em] text-gold-3 uppercase">
                  <span className="h-px w-8 bg-gold-3/70" />
                  {eyebrow}
                </span>
              </Reveal>
            )}
            <SplitText
              as="h1"
              text={title}
              className="mt-4 max-w-[14ch] font-display text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.98] font-bold tracking-tight text-white"
            />
            {lead && (
              <Reveal variant="up" delay={0.16}>
                <p className="mt-6 max-w-[48ch] text-[1.05rem] leading-relaxed text-white/85 md:text-[1.15rem]">
                  {lead}
                </p>
              </Reveal>
            )}
            {children}
          </div>
          {aside && (
            <Reveal variant="scale" delay={0.3} className="lg:col-span-4 lg:justify-self-end">
              {aside}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
