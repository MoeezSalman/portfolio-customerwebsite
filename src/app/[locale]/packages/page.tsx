import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { planNotes } from "@/content/packages";
import { getProject } from "@/content/projects";
import { getService } from "@/content/services";
import { PageHero, Section } from "@/components/ui/PageHero";
import { PricingTable } from "@/components/sections/PricingTable";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/packages">): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "باقات الصيانة" : "Maintenance Packages",
    description: ar
      ? "عقود صيانة سنوية بتكلفة شهرية ثابتة للفلل والمجمعات والمكاتب في الرياض — باقات برونزية وفضية وذهبية."
      : "Annual maintenance contracts with a fixed monthly cost for villas, compounds and offices in Riyadh — Bronze, Silver and Gold plans.",
    alternates: { canonical: `/${locale}/packages` },
  };
}

export default async function PackagesPage({
  params,
}: PageProps<"/[locale]/packages">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  return (
    <>
      <PageHero
        locale={l}
        eyebrow={t("sectionPackages")}
        title={t("sectionPackagesTitle")}
        crumbs={[{ label: l === "ar" ? "الباقات" : "Packages" }]}
        media={getProject("narjis-compound-ac")!.media}
        caption={l === "ar" ? "عقود سنوية" : "Annual contracts"}
        lead={
          l === "ar"
            ? "الصيانة عند العطل هي أغلى طريقة لامتلاك عقار. هذه الباقات تحوّل فواتير الطوارئ غير المتوقعة إلى رقم شهري واحد ثابت."
            : "Reactive maintenance is the most expensive way to own a property. These plans turn unpredictable emergency bills into one fixed monthly figure."
        }
      />

      <Section>
        <div className="container-x">
          <PricingTable locale={l} />

          <Reveal variant="up" className="mt-16 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Eyebrow>{t("goodToKnow")}</Eyebrow>
            </div>
            <ul className="grid gap-x-10 gap-y-4 lg:col-span-9 sm:grid-cols-2">
              {planNotes[l].map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-3 border-t border-line pt-4"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-[0.9rem] leading-relaxed text-fog">{note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <FaqSection locale={l} limit={4} />
      <CtaSection locale={l} media={getService("annual-contracts")!.media} />
    </>
  );
}
