import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { faqs, faqGroups } from "@/content/faq";
import { getService } from "@/content/services";
import { PageHero, Section } from "@/components/ui/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/faq">): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "الأسئلة الشائعة" : "FAQ",
    description: ar
      ? "إجابات مباشرة عن الأسعار والحجز والضمان ونطاق الخدمة وما يحدث فعليًا في يوم التنفيذ."
      : "Straight answers on pricing, booking, warranty, coverage and what actually happens on the day.",
    alternates: { canonical: `/${locale}/faq` },
  };
}

export default async function FaqPage({ params }: PageProps<"/[locale]/faq">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q[l],
      acceptedAnswer: { "@type": "Answer", text: f.a[l] },
    })),
  };

  return (
    <>
      <PageHero
        locale={l}
        eyebrow={t("sectionFaq")}
        title={t("sectionFaqTitle")}
        crumbs={[{ label: l === "ar" ? "الأسئلة الشائعة" : "FAQ" }]}
        media={getService("marble-restoration")!.media}
        caption={`${faqs.length} ${l === "ar" ? "سؤالًا" : "questions"}`}
        lead={
          l === "ar"
            ? "الأسئلة التي تُطرح علينا فعليًا، بإجابات مباشرة — بما فيها تلك التي لا تصبّ في مصلحتنا."
            : "The questions we actually get asked, answered directly — including the ones where the honest answer does not favour us."
        }
      />

      <Section>
        <div className="container-x flex flex-col gap-16">
          {faqGroups.map((group, gi) => {
            const items = faqs
              .filter((f) => f.group.en === group.en)
              .map((f) => ({ q: f.q[l], a: f.a[l] }));

            return (
              <Reveal key={group.en} variant="up" delay={gi * 0.05}>
                <div className="grid gap-8 border-t border-chalk/80 pt-8 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <Eyebrow accent={gi % 2 === 0 ? "gold" : "aqua"}>
                      {String(gi + 1).padStart(2, "0")}
                    </Eyebrow>
                    <h2 className="mt-4 font-display text-[1.5rem] font-bold text-chalk">
                      {group[l]}
                    </h2>
                  </div>
                  <div className="lg:col-span-8">
                    <Accordion items={items} defaultOpen={gi === 0 ? 0 : null} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CtaSection locale={l} media={getService("plumbing")!.media} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
