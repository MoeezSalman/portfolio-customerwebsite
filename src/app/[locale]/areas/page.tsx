import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { coverageNote } from "@/content/areas";
import { getProject } from "@/content/projects";
import { PageHero, Section } from "@/components/ui/PageHero";
import { CoverageMap } from "@/components/sections/CoverageMap";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/graphics/Icon";
import { CtaSection } from "@/components/sections/CtaSection";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/areas">): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "نطاق الخدمة" : "Coverage",
    description: ar
      ? "نغطي جميع أحياء الرياض — الياسمين، النرجس، حطين، الملقا، الصحافة، العليا، النخيل، الدرعية وأكثر، مع استجابة طارئة خلال أربع ساعات."
      : "We cover every Riyadh district — Al Yasmin, Al Narjis, Hittin, Al Malqa, Al Sahafa, Olaya, An Nakheel, Diriyah and more, with four-hour emergency response.",
    alternates: { canonical: `/${locale}/areas` },
  };
}

export default async function AreasPage({ params }: PageProps<"/[locale]/areas">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  return (
    <>
      <PageHero
        locale={l}
        accent="aqua"
        eyebrow={t("sectionCoverage")}
        title={t("sectionCoverageTitle")}
        crumbs={[{ label: l === "ar" ? "نطاق الخدمة" : "Coverage" }]}
        media={getProject("olaya-office-tower-amc")!.media}
        caption={l === "ar" ? "الرياض" : "Riyadh"}
        lead={coverageNote[l]}
      />

      <Section>
        <div className="container-x">
          <CoverageMap locale={l} />

          <Reveal variant="up" className="mt-14">
            <div className="flex flex-col gap-4 border-t border-chalk/80 pt-6 sm:flex-row sm:items-start sm:gap-8">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-aqua/40 text-aqua">
                <Icon name="pin" className="size-5" />
              </span>
              <p className="max-w-2xl leading-relaxed text-fog">
                {l === "ar"
                  ? "لا ترى حيّك في القائمة؟ اتصل بنا على أي حال — نغطي الرياض بالكامل، والقائمة أعلاه تعرض الأحياء التي نعمل فيها يوميًا فقط."
                  : "Not seeing your district? Call anyway — we cover all of Riyadh, and the list above only shows the areas we are in daily."}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaSection locale={l} media={getProject("hittin-pool-leak")!.media} />
    </>
  );
}
