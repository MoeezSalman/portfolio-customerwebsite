import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { planNotes, plans } from "@/content/packages";
import { services } from "@/content/services";
import { FanHero } from "@/components/heroes/FanHero";
import { Section } from "@/components/ui/Section";
import { PricingTable } from "@/components/sections/PricingTable";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/graphics/Icon";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { WordBand } from "@/components/motion/WordBand";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/packages">): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "الباقات" : "Packages",
    description: ar
      ? "تلميع لمرة واحدة، أو خطة عناية بالمنزل، أو خطة أعمال — اختر ما يناسبك."
      : "A one-time shine, a home care plan, or a business plan — pick what fits.",
    alternates: { canonical: `/${locale}/packages` },
  };
}

export default async function PackagesPage({ params }: PageProps<"/[locale]/packages">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  return (
    <>
      <FanHero
        locale={l}
        eyebrow={t("sectionPackages")}
        title={t("sectionPackagesTitle")}
        lead={
          l === "ar"
            ? "ثلاث طرق بسيطة. مرة واحدة، أو أربع مرات في السنة، أو كل شهر."
            : "Three simple ways. Once, four times a year, or every month."
        }
        crumbs={[{ label: t("sectionPackages") }]}
        cards={plans.map((p) => ({ media: p.media, label: p.name[l] }))}
      />

      <Section>
        <div className="container-x">
          <PricingTable locale={l} />

          <Reveal variant="up" className="mt-8 rounded-card bg-ink-2/70 p-6 md:mt-10 md:p-8">
            <Eyebrow>{t("goodToKnow")}</Eyebrow>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {planNotes[l].map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <Icon name="check" className="mt-1 size-4 shrink-0 text-gold" strokeWidth={2.4} />
                  <span className="text-[0.92rem] leading-relaxed text-mist">{note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <WordBand locale={l} set="promise" tone="gold" />
      <FaqSection locale={l} limit={4} />
      <CtaSection locale={l} media={services[8].media} />
    </>
  );
}
