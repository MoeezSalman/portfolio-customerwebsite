import { type Locale } from "@/i18n/config";
import type { MediaSlot } from "@/lib/media";
import { Crumbs, type Crumb } from "@/components/ui/Section";
import { Figure } from "@/components/graphics/Figure";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

/**
 * Mosaic hero — a wall of photographs with the title living in one of the
 * cells. Used on the services index: the pictures are the menu.
 */
export function MosaicHero({
  locale,
  photos,
  title,
  lead,
  eyebrow,
  crumbs = [],
}: {
  locale: Locale;
  /** Three: one large, two small. */
  photos: MediaSlot[];
  title: string;
  lead?: string;
  eyebrow?: string;
  crumbs?: Crumb[];
}) {
  const [big, ...rest] = photos;

  return (
    <section className="relative overflow-hidden pt-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora" />
      </div>

      <div className="container-x relative">
        <Reveal variant="fade" duration={0.5}>
          <Crumbs locale={locale} crumbs={crumbs} className="mb-5" />
        </Reveal>

        <RevealGroup className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4" stagger={0.07}>
          {/* Title cell */}
          <RevealItem className="col-span-2 flex flex-col justify-end rounded-card bg-chalk p-6 text-white md:col-span-2 md:row-span-1 md:p-8">
            {eyebrow && (
              <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.22em] text-gold-3 uppercase">
                <span className="h-px w-8 bg-gold-3/70" />
                {eyebrow}
              </span>
            )}
            <SplitText
              as="h1"
              text={title}
              className="mt-4 font-display text-[clamp(2.2rem,4.6vw,3.8rem)] leading-[1.02] font-bold tracking-tight"
            />
            {lead && <p className="mt-4 max-w-[46ch] leading-relaxed text-white/75">{lead}</p>}
          </RevealItem>

          {/* Big photo */}
          <RevealItem className="col-span-2 md:col-span-2 md:row-span-2">
            <Figure
              slot={big}
              locale={locale}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="aspect-[16/10] rounded-card md:aspect-auto md:h-full"
            />
          </RevealItem>

          {/* Two small */}
          {rest.slice(0, 2).map((p) => (
            <RevealItem key={p.id}>
              <Figure
                slot={p}
                locale={locale}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="aspect-[4/3] rounded-card md:aspect-auto md:h-full md:min-h-[12rem]"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
