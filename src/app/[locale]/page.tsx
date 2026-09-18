import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PlacesSection } from "@/components/sections/PlacesSection";
import { ShineSection } from "@/components/sections/ShineSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { EquipmentSection } from "@/components/sections/EquipmentSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { GuaranteesSection } from "@/components/sections/GuaranteesSection";
import { FeedbackSection } from "@/components/sections/FeedbackSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { WordBand } from "@/components/motion/WordBand";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  return (
    <>
      <Hero locale={l} />
      <WordBand locale={l} set="materials" />
      <ServicesSection locale={l} limit={5} />
      <ShineSection locale={l} />
      <WordBand locale={l} set="places" reverse tone="gold" />
      <PlacesSection locale={l} />
      <ProcessSection locale={l} />
      <EquipmentSection locale={l} limit={3} />
      <WordBand locale={l} set="promise" />
      <GuaranteesSection locale={l} />
      <ProjectsSection locale={l} limit={3} />
      <FeedbackSection locale={l} />
      <FaqSection locale={l} limit={4} />
      <CtaSection locale={l} />
    </>
  );
}
