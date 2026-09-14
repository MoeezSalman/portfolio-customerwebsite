import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { guarantees } from "@/content/site";
import { photo } from "@/lib/media";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Figure } from "@/components/graphics/Figure";
import { Icon, type IconName } from "@/components/graphics/Icon";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const backdrop = photo("marble-white-texture", {
  en: "Close-up of clean white marble",
  ar: "لقطة قريبة لرخام أبيض نظيف",
});

/**
 * Four promises on a sheet of white marble. Icons and one line each — the
 * marble does the talking.
 */
export function GuaranteesSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <Section tight className="container-x">
      <div className="relative overflow-hidden rounded-card">
        <Figure slot={backdrop} locale={locale} sizes="100vw" className="absolute inset-0" />
        <div className="absolute inset-0 bg-white/55" />

        <div className="relative p-6 md:p-10 lg:p-14">
          <SectionHeading
            eyebrow={t("sectionGuarantees")}
            title={locale === "ar" ? "أربعة وعود. نلتزم بها." : "Four promises. We keep them."}
            className="mb-8 md:mb-10"
          />

          <RevealGroup as="ul" className="grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4" stagger={0.07}>
            {guarantees.map((g) => (
              <RevealItem
                key={g.title.en}
                as="li"
                className="rounded-card border border-white/70 bg-white/80 p-5 backdrop-blur md:p-6"
              >
                <span className="grid size-12 place-items-center rounded-full bg-gold text-chalk">
                  <Icon name={g.icon as IconName} className="size-5" strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 font-display text-[1.15rem] leading-tight font-bold text-chalk">
                  {g.title[locale]}
                </h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-mist">{g.body[locale]}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Section>
  );
}
