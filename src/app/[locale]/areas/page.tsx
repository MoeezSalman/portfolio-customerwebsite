import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { coverageNote } from "@/content/areas";
import { places, site } from "@/content/site";
import { Section, Crumbs } from "@/components/ui/Section";
import { CoverageMap } from "@/components/sections/CoverageMap";
import { PlacesSection } from "@/components/sections/PlacesSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { WordBand } from "@/components/motion/WordBand";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { Icon } from "@/components/graphics/Icon";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/areas">): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "نطاق الخدمة" : "Coverage",
    description: ar
      ? "نلمّع الأرضيات في جميع أحياء الرياض — الياسمين، النرجس، حطين، الملقا، الصحافة، العليا، الدرعية وأكثر."
      : "We polish floors in every Riyadh district — Al Yasmin, Al Narjis, Hittin, Al Malqa, Al Sahafa, Olaya, Diriyah and more.",
    alternates: { canonical: `/${locale}/areas` },
  };
}

/**
 * Map hero — the map IS the masthead. The title floats on a card over its
 * corner; the district list sits beside it.
 */
export default async function AreasPage({ params }: PageProps<"/[locale]/areas">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  return (
    <>
      <section className="relative pt-24 md:pt-28">
        <div className="container-x">
          <Reveal variant="fade" duration={0.5}>
            <Crumbs locale={l} crumbs={[{ label: t("sectionCoverage") }]} className="mb-4" />
          </Reveal>
          <CoverageMap
            locale={l}
            overlay={
              <div className="glass rounded-card p-5 md:p-6">
                <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.22em] text-aqua uppercase">
                  <span className="h-px w-8 bg-aqua/60" />
                  {t("sectionCoverage")}
                </span>
                <SplitText
                  as="h1"
                  text={t("sectionCoverageTitle")}
                  className="mt-2 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.04] font-bold tracking-tight text-chalk"
                />
                <p className="mt-3 text-[0.9rem] leading-relaxed text-mist">{coverageNote[l]}</p>
                <a
                  href={`tel:${site.phoneIntl}`}
                  className="mt-4 inline-flex items-center gap-2 font-display text-[0.9rem] font-semibold text-chalk"
                >
                  <Icon name="phone" className="size-4 text-gold" />
                  <span dir="ltr">{site.phone}</span>
                </a>
              </div>
            }
          />
        </div>
      </section>

      <WordBand locale={l} set="places" tone="gold" />
      <PlacesSection locale={l} />
      <Section tight className="container-x pb-4">
        <Reveal variant="up">
          <div className="flex flex-col gap-4 rounded-card bg-ink-2/70 p-6 sm:flex-row sm:items-center sm:gap-6">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-aqua text-white">
              <Icon name="pin" className="size-5" />
            </span>
            <p className="leading-relaxed text-mist">
              {l === "ar"
                ? "لا ترى حيّك؟ اتصل بنا على أي حال — نغطي الرياض كلها."
                : "Not seeing your district? Call anyway — we cover all of Riyadh."}
            </p>
          </div>
        </Reveal>
      </Section>
      <CtaSection locale={l} media={places[1].media} />
    </>
  );
}
