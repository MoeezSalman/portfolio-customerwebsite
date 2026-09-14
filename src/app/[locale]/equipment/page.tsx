import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { equipment } from "@/content/equipment";
import { photo } from "@/lib/media";
import { SpotlightHero } from "@/components/heroes/SpotlightHero";
import { EquipmentSection } from "@/components/sections/EquipmentSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { WordBand } from "@/components/motion/WordBand";

const heroMachine = photo("machine-rideon-side", {
  en: "Our ride-on floor machine, seen from the side",
  ar: "ماكينة الأرضيات الراكبة لدينا من الجانب",
}, "metal");

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/equipment">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const l = locale as Locale;
  return {
    title: l === "ar" ? "معداتنا" : "Our machines",
    description:
      l === "ar"
        ? "ماكينات الجلي والتلميع التي نستخدمها في كل أرضية."
        : "The grinding and polishing machines we bring to every floor.",
    alternates: { canonical: `/${locale}/equipment` },
  };
}

export default async function EquipmentPage({ params }: PageProps<"/[locale]/equipment">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  return (
    <>
      <SpotlightHero
        locale={l}
        media={heroMachine}
        eyebrow={t("sectionEquipment")}
        title={t("sectionEquipmentTitle")}
        lead={
          l === "ar"
            ? "لا يوجد سر. الأرضية اللامعة تحتاج معدات قوية ومهارة في استخدامها. هذه معداتنا."
            : "There is no secret. A shiny floor needs strong machines and people who know how to use them. These are ours."
        }
        words={l === "ar" ? ["معداتنا", "جلي", "تلميع"] : ["Machines", "Grind", "Polish"]}
        crumbs={[{ label: t("sectionEquipment") }]}
      />
      <EquipmentSection locale={l} heading={false} />
      <WordBand locale={l} set="promise" />
      <ProcessSection locale={l} />
      <CtaSection locale={l} media={equipment[2].media} />
    </>
  );
}
