import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { projects } from "@/content/projects";
import { FilmstripHero } from "@/components/heroes/FilmstripHero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ShineSection } from "@/components/sections/ShineSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { WordBand } from "@/components/motion/WordBand";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const l = locale as Locale;
  return {
    title: l === "ar" ? "أعمالنا" : "Our work",
    description:
      l === "ar"
        ? "أرضيات جليناها ولمّعناها في الرياض — فلل ومساجد ومكاتب وفنادق."
        : "Floors we have polished across Riyadh — villas, mosques, offices and hotels.",
    alternates: { canonical: `/${locale}/projects` },
  };
}

export default async function ProjectsPage({ params }: PageProps<"/[locale]/projects">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  return (
    <>
      <FilmstripHero
        locale={l}
        eyebrow={t("sectionProjects")}
        title={t("sectionProjectsTitle")}
        lead={
          l === "ar"
            ? "ست أرضيات حقيقية في الرياض. اسحب كل مشروع لترى قبل وبعد."
            : "Six real floors in Riyadh. Open any project to drag the before and after."
        }
        crumbs={[{ label: t("sectionProjects") }]}
        frames={projects.map((p) => ({
          media: p.media,
          label: `${p.title[l]} · ${p.district[l]}`,
          href: localePath(l, `/projects/${p.slug}`),
        }))}
      />
      <WordBand locale={l} set="work" />
      <ShineSection
        locale={l}
        before={projects[0].before}
        after={projects[0].media}
        heading={false}
        className="pt-0 md:pt-0"
      />
      <ProjectsSection locale={l} heading={false} />
      <CtaSection locale={l} media={projects[3].gallery[0]} />
    </>
  );
}
