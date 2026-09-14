import { type Locale } from "@/i18n/config";
import type { MediaSlot } from "@/lib/media";
import { Crumbs, type Crumb } from "@/components/ui/Section";
import { Figure } from "@/components/graphics/Figure";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Arch hero — a tall photograph cut into an arch (a nod to the doorways of
 * Najdi houses) beside the title, with a small strip of textures below.
 * Used on the about page.
 */
export function ArchHero({
  locale,
  media,
  textures,
  title,
  lead,
  eyebrow,
  crumbs = [],
}: {
  locale: Locale;
  media: MediaSlot;
  textures: MediaSlot[];
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

        <div className="mt-8 grid items-center gap-10 md:mt-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            {eyebrow && (
              <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
                <span className="h-px w-8 bg-gold/60" />
                {eyebrow}
              </span>
            )}
            <SplitText
              as="h1"
              text={title}
              className="mt-4 max-w-[14ch] font-display text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1] font-bold tracking-tight text-chalk"
            />
            {lead && (
              <Reveal variant="up" delay={0.16}>
                <p className="mt-6 max-w-[46ch] text-[1.05rem] leading-relaxed text-fog">{lead}</p>
              </Reveal>
            )}

            <Reveal variant="up" delay={0.3}>
              <ul className="mt-8 grid grid-cols-3 gap-3">
                {textures.slice(0, 3).map((tx) => (
                  <li key={tx.id}>
                    <Figure slot={tx} locale={locale} sizes="20vw" className="aspect-square rounded-card" />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal variant="scale" duration={1} className="mx-auto w-full max-w-[24rem] lg:col-span-6 lg:max-w-[28rem] lg:justify-self-end">
            <Figure
              slot={media}
              locale={locale}
              priority
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="aspect-[3/4] rounded-t-[999px] rounded-b-card"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
