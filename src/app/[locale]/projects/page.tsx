import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { projects } from "@/content/projects";
import { PageHero, Section } from "@/components/ui/PageHero";
import { ProjectRow } from "@/components/ui/Rows";
import { CtaSection } from "@/components/sections/CtaSection";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects">): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "أعمالنا" : "Projects",
    description: ar
      ? "دراسات حالة من مشاريع صيانة وترميم وجلي أرضيات في الرياض، بأرقام ونتائج موثقة."
      : "Case studies from maintenance, renovation and floor restoration projects across Riyadh — with documented numbers and outcomes.",
    alternates: { canonical: `/${locale}/projects` },
  };
}

export default async function ProjectsPage({
  params,
}: PageProps<"/[locale]/projects">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  return (
    <>
      <PageHero
        locale={l}
        eyebrow={t("sectionProjects")}
        title={t("sectionProjectsTitle")}
        crumbs={[{ label: l === "ar" ? "أعمالنا" : "Projects" }]}
        media={projects[3].media}
        caption={projects[3].district[l]}
        lead={
          l === "ar"
            ? "لا نعرض صورًا بلا سياق. كل مشروع أدناه يوضح ما كانت عليه الحالة، وما فعلناه، وما الذي تغيّر بالأرقام."
            : "We do not post pictures without context. Every project below states what the condition was, what we did, and what changed — in numbers."
        }
      />

      <Section className="pt-4 md:pt-8">
        <div className="container-x">
          {projects.map((p, i) => (
            <ProjectRow
              key={p.slug}
              project={p}
              locale={l}
              flip={i % 2 === 1}
              priority={i === 0}
            />
          ))}
          <div className="border-t border-line" />
        </div>
      </Section>
      <CtaSection locale={l} media={projects[0].media} />
    </>
  );
}
