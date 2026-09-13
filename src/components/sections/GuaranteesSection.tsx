import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { guarantees } from "@/content/site";
import { Section } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureColumns } from "@/components/ui/Rows";
import type { IconName } from "@/components/graphics/Icon";

export function GuaranteesSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <Section className="border-t border-line">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <SectionHeading
          className="lg:col-span-4"
          eyebrow={t("sectionGuarantees")}
          title={
            locale === "ar"
              ? "أربعة التزامات مكتوبة، لا شعارات"
              : "Four commitments in writing, not slogans"
          }
        />
        <div className="lg:col-span-8">
          <FeatureColumns
            columns={2}
            items={guarantees.map((g) => ({
              icon: g.icon as IconName,
              title: g.title[locale],
              body: g.body[locale],
            }))}
          />
        </div>
      </div>
    </Section>
  );
}
