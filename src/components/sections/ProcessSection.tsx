import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { processSteps } from "@/content/site";
import { localizeNumber } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Figure } from "@/components/graphics/Figure";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/** How it works: four photographs, four numbers, one line each. */
export function ProcessSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <Section>
      <div className="container-x">
        <SectionHeading
          eyebrow={t("sectionProcess")}
          title={t("sectionProcessTitle")}
          className="mb-8 md:mb-10"
        />

        <RevealGroup as="ol" className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4" stagger={0.08}>
          {processSteps.map((step, i) => (
            <RevealItem key={step.title.en} as="li" className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-ink-2">
                <Figure
                  slot={step.media}
                  locale={locale}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="absolute inset-0"
                  imgClassName="transition-transform duration-[900ms] ease-[var(--ease-expo)] group-hover:scale-[1.06]"
                />
                <span className="absolute top-4 start-4 grid size-11 place-items-center rounded-full bg-gold font-display text-[1.1rem] font-bold text-chalk shadow-lg">
                  {localizeNumber(i + 1, locale)}
                </span>
                <div className="scrim absolute inset-x-0 bottom-0 p-4 pt-16 md:p-5">
                  <p className="font-display text-[1.1rem] leading-tight font-bold text-white md:text-[1.3rem]">
                    {step.title[locale]}
                  </p>
                  <p className="mt-1.5 text-[0.82rem] leading-snug text-white/80 md:text-[0.9rem]">
                    {step.body[locale]}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
