import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ShineSection } from "@/components/sections/ShineSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { EquipmentSection } from "@/components/sections/EquipmentSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { GuaranteesSection } from "@/components/sections/GuaranteesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  return (
    <>
      <Hero locale={l} />
      <ServicesSection locale={l} limit={6} />
      <ShineSection locale={l} />
      <ProcessSection locale={l} />
      <EquipmentSection locale={l} />
      <ProjectsSection locale={l} />
      <GuaranteesSection locale={l} />
      <TestimonialsSection locale={l} />
      <FaqSection locale={l} />
      <CtaSection locale={l} />
    </>
  );
}
