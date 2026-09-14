import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { services } from "@/content/services";
import { MosaicHero } from "@/components/heroes/MosaicHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PlacesSection } from "@/components/sections/PlacesSection";
import { ShineSection } from "@/components/sections/ShineSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { WordBand } from "@/components/motion/WordBand";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const l = locale as Locale;
  return {
    title: l === "ar" ? "خدماتنا" : "Services",
    description:
      l === "ar"
        ? "جلي وتلميع الرخام والبلاط والجرانيت والترازو في الرياض."
        : "Marble, tile, granite and terrazzo polishing in Riyadh.",
    alternates: { canonical: `/${locale}/services` },
  };
}

export default async function ServicesPage({ params }: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  return (
    <>
      <MosaicHero
        locale={l}
        photos={[services[0].gallery[2], services[1].media, services[7].media]}
        eyebrow={t("sectionServices")}
        title={l === "ar" ? "كل ما نلمّعه" : "Everything we polish"}
        lead={
          l === "ar"
            ? "رخام، بلاط، جرانيت، ترازو. اختر أرضيتك وشاهد كيف نعيد لمعانها."
            : "Marble, tiles, granite, terrazzo. Pick your floor and see how we bring the shine back."
        }
        crumbs={[{ label: t("sectionServices") }]}
      />
      <ServicesSection locale={l} heading={false} className="pt-4 md:pt-6" />
      <WordBand locale={l} set="materials" tone="gold" />
      <ShineSection locale={l} />
      <PlacesSection locale={l} />
      <ProcessSection locale={l} />
      <CtaSection locale={l} media={services[4].gallery[0]} />
    </>
  );
}
