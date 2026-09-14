import { type Locale } from "@/i18n/config";
import type { MediaSlot } from "@/lib/media";
import { cn } from "@/lib/utils";
import { Crumbs, type Crumb } from "@/components/ui/Section";
import { Figure } from "@/components/graphics/Figure";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Fan hero — three photo cards fanned out like a hand of cards, one per
 * package, beside the title. Used on the packages page.
 */
export function FanHero({
  locale,
  cards,
  title,
  lead,
  eyebrow,
  crumbs = [],
}: {
  locale: Locale;
  cards: { media: MediaSlot; label: string }[];
  title: string;
  lead?: string;
  eyebrow?: string;
  crumbs?: Crumb[];
}) {
  // Fan geometry lives on a plain wrapper: Motion writes its own transform on
  // the animated element, so rotation on the same node would be overwritten.
  const tilt = [
    "translate(-50%, -50%) translateX(-42%) translateY(6%) rotate(-9deg)",
    "translate(-50%, -50%)",
    "translate(-50%, -50%) translateX(42%) translateY(6%) rotate(9deg)",
  ];

  return (
    <section className="relative overflow-hidden pt-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora" />
      </div>

      <div className="container-x relative">
        <Reveal variant="fade" duration={0.5}>
          <Crumbs locale={locale} crumbs={crumbs} />
        </Reveal>

        <div className="mt-8 grid items-center gap-12 pb-4 md:mt-10 lg:grid-cols-12 lg:pb-8">
          <div className="lg:col-span-5">
            {eyebrow && (
              <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
                <span className="h-px w-8 bg-gold/60" />
                {eyebrow}
              </span>
            )}
            <SplitText
              as="h1"
              text={title}
              className="mt-4 font-display text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1] font-bold tracking-tight text-chalk"
            />
            {lead && (
              <Reveal variant="up" delay={0.16}>
                <p className="mt-6 max-w-[42ch] text-[1.05rem] leading-relaxed text-fog">{lead}</p>
              </Reveal>
            )}
          </div>

          {/* The fan */}
          <div className="relative mx-auto h-[19rem] w-full max-w-[26rem] sm:h-[24rem] lg:col-span-7 lg:h-[28rem] lg:max-w-none">
            {cards.slice(0, 3).map((c, i) => (
              <div
                key={c.label}
                style={{ transform: tilt[i] }}
                className={cn(
                  "absolute top-1/2 left-1/2 w-[46%] max-w-[15rem] transition-transform duration-500 ease-[var(--ease-expo)] hover:z-20 sm:max-w-[17rem]",
                  i === 1 && "z-10",
                )}
              >
                <Reveal variant="scale" delay={0.15 + i * 0.12} duration={0.9}>
                  <div className="overflow-hidden rounded-card bg-ink-2 shadow-[0_30px_60px_-24px_rgba(23,24,29,0.45)]">
                    <Figure slot={c.media} locale={locale} priority sizes="30vw" className="aspect-[3/4]" />
                    <p className="bg-white px-4 py-3 text-center font-display text-[0.95rem] font-bold text-chalk">
                      {c.label}
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
