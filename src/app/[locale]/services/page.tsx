import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { services } from "@/content/services";
import { PageHero, Section } from "@/components/ui/PageHero";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaSection } from "@/components/sections/CtaSection";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services">): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "خدماتنا" : "Services",
    description: ar
      ? "أربع عشرة خدمة صيانة متخصصة في الرياض: جلي وتلميع الأرضيات والرخام، السباكة، الكهرباء، التكييف، الدهانات، النجارة، الحدادة، كشف التسربات والمزيد."
      : "Fourteen specialist maintenance services across Riyadh: floor and marble polishing, plumbing, electrical, AC, painting, carpentry, iron works, leak detection and more.",
    alternates: { canonical: `/${locale}/services` },
  };
}

export default async function ServicesPage({
  params,
}: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  return (
    <>
      <PageHero
        locale={l}
        eyebrow={t("sectionServices")}
        title={t("sectionServicesTitle")}
        crumbs={[{ label: l === "ar" ? "خدماتنا" : "Services" }]}
        media={services[1].media}
        caption={services[1].title[l]}
        lead={
          l === "ar"
            ? "كل خدمة أدناه ينفّذها فنيونا مباشرة — لا وساطة ولا مقاولون من الباطن. اختر ما تحتاجه وسترى بالضبط ما يشمله السعر والمعدات التي سنستخدمها."
            : "Every service below is delivered by our own technicians — no brokering, no subcontracting. Open any one and you will see exactly what the price covers and which machines turn up."
        }
      />

      <Section>
        <div className="container-x">
          <ServicesShowcase services={services} locale={l} />
        </div>
      </Section>

      <ProcessSection locale={l} />
      <CtaSection locale={l} media={services[2].media} />
    </>
  );
}
