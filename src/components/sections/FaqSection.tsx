import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { faqs } from "@/content/faq";
import { photo } from "@/lib/media";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/graphics/Figure";
import { Reveal } from "@/components/motion/Reveal";

const side = photo("marble-columns-sun", {
  en: "Sunlight on a white marble floor between columns",
  ar: "ضوء الشمس على أرضية رخام بيضاء بين الأعمدة",
});

/** Quick answers beside a tall photograph. */
export function FaqSection({
  locale,
  limit = 6,
  showAll = true,
}: {
  locale: Locale;
  limit?: number;
  showAll?: boolean;
}) {
  const t = getDictionary(locale);
  const items = faqs.slice(0, limit).map((f) => ({ q: f.q[locale], a: f.a[locale] }));

  return (
    <Section>
      <div className="container-x grid gap-6 lg:grid-cols-12 lg:gap-8">
        <Reveal variant="scale" className="lg:col-span-5">
          <Figure
            slot={side}
            locale={locale}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="aspect-[16/10] rounded-card lg:aspect-auto lg:h-full lg:min-h-[32rem]"
          />
        </Reveal>

        <div className="lg:col-span-7">
          <SectionHeading eyebrow={t("sectionFaq")} title={t("sectionFaqTitle")} className="mb-6 md:mb-8" />
          <Accordion items={items} defaultOpen={0} />
          {showAll && (
            <Button href={localePath(locale, "/faq")} variant="outline" className="mt-6" arrow>
              {t("viewAll")}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
