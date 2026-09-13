import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { guarantees, site, processSteps } from "@/content/site";
import { getService } from "@/content/services";
import { PageHero, Section } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Icon, type IconName } from "@/components/graphics/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { localizeNumber } from "@/lib/utils";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/quote">): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "احصل على عرض سعر" : "Get a Quote",
    description: ar
      ? "أرسل تفاصيل العمل واحصل على سعر تقريبي في نفس اليوم — معاينة مجانية وعرض سعر ثابت قبل البدء."
      : "Send the job details and get an indicative price the same day — free survey and a fixed quote before any work starts.",
    alternates: { canonical: `/${locale}/quote` },
  };
}

export default async function QuotePage({ params }: PageProps<"/[locale]/quote">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  return (
    <>
      <PageHero
        locale={l}
        eyebrow={t("getQuoteShort")}
        title={t("contactTitle")}
        crumbs={[{ label: l === "ar" ? "عرض سعر" : "Quote" }]}
        media={getService("deep-cleaning")!.media}
        caption={l === "ar" ? "معاينة مجانية" : "Free survey"}
        lead={t("contactLead")}
      />

      <Section>
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Suspense
              fallback={<div className="h-[36rem] animate-pulse rounded-2xl bg-ink-2" />}
            >
              <QuoteForm locale={l} />
            </Suspense>
          </div>

          <aside className="flex flex-col gap-12 lg:col-span-5">
            <Reveal variant="up">
              <Eyebrow>{t("sectionProcess")}</Eyebrow>
              <ol className="mt-5">
                {processSteps.map((step, i) => (
                  <li
                    key={step.title.en}
                    className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-5"
                  >
                    <span className="font-display text-[0.8rem] font-semibold text-gold tabular-nums">
                      {localizeNumber(String(i + 1).padStart(2, "0"), l)}
                    </span>
                    <span>
                      <span className="block font-display text-[0.98rem] font-semibold text-chalk">
                        {step.title[l]}
                      </span>
                      <span className="mt-1.5 block text-[0.88rem] leading-relaxed text-fog">
                        {step.body[l]}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal variant="up" delay={0.1}>
              <Eyebrow accent="aqua">{t("sectionGuarantees")}</Eyebrow>
              <ul className="mt-5">
                {guarantees.map((g) => (
                  <li
                    key={g.icon}
                    className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-4"
                  >
                    <Icon name={g.icon as IconName} className="mt-0.5 size-5 text-gold" />
                    <span className="text-[0.92rem] leading-relaxed text-mist">
                      {g.title[l]}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="up" delay={0.16}>
              <div className="flex flex-col gap-3 border-t border-line pt-6 text-[0.9rem]">
                <a
                  href={`tel:${site.phoneIntl}`}
                  className="flex items-center gap-3 text-chalk transition-colors hover:text-gold"
                >
                  <Icon name="phone" className="size-4 text-gold" />
                  <span dir="ltr">{site.phone}</span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 break-all text-fog transition-colors hover:text-chalk"
                >
                  <Icon name="mail" className="size-4 shrink-0 text-gold" />
                  {site.email}
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>
    </>
  );
}
