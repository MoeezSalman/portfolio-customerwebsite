import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { services } from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/PageHero";
import { ServicesShowcase } from "./ServicesShowcase";

export function ServicesSection({
  locale,
  limit,
}: {
  locale: Locale;
  limit?: number;
}) {
  const t = getDictionary(locale);
  const list = limit ? services.slice(0, limit) : services;

  return (
    <Section id="services">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={t("sectionServices")}
            title={t("sectionServicesTitle")}
            lead={
              locale === "ar"
                ? "من جلي الرخام إلى كشف التسربات — كل مهنة ينفّذها فريقنا الداخلي، فلا تتنقل بين مقاولين ولا تُلام إحدى الجهات على أخطاء الأخرى."
                : "From marble polishing to leak detection, every trade is delivered in-house — so you are not chasing separate contractors or watching them blame each other."
            }
          />
          {limit && (
            <Button
              href={localePath(locale, "/services")}
              variant="outline"
              className="shrink-0"
              arrow
            >
              {t("viewAll")}
            </Button>
          )}
        </div>

        <div className="mt-16">
          <ServicesShowcase services={list} locale={locale} />
        </div>
      </div>
    </Section>
  );
}
