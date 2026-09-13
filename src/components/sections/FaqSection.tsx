import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { faqs } from "@/content/faq";
import { Section } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

export function FaqSection({
  locale,
  limit = 6,
}: {
  locale: Locale;
  limit?: number;
}) {
  const t = getDictionary(locale);
  const items = faqs.slice(0, limit).map((f) => ({
    q: f.q[locale],
    a: f.a[locale],
  }));

  return (
    <Section className="border-y border-line bg-ink-2/45">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={t("sectionFaq")} title={t("sectionFaqTitle")} />
          <p className="mt-7 leading-relaxed text-fog">
            {locale === "ar"
              ? "لم تجد سؤالك؟ أرسل رسالة على واتساب وسنجيبك بصراحة — حتى لو كانت الإجابة أن خدمتنا ليست ما تحتاجه."
              : "Not answered here? Send a WhatsApp message and we will answer straight — even when the honest answer is that you do not need us."}
          </p>
          <Button
            href={localePath(locale, "/faq")}
            variant="outline"
            className="mt-8"
            arrow
          >
            {t("viewAll")}
          </Button>
        </div>

        <div className="lg:col-span-7">
          <Accordion items={items} defaultOpen={0} />
        </div>
      </div>
    </Section>
  );
}
