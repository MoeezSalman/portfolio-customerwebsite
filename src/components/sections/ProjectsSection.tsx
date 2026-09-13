import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/PageHero";
import { ProjectRow, LinkRow } from "@/components/ui/Rows";

/**
 * One featured case study in full, then the rest as a plain link list —
 * the reader gets the depth of one project without a wall of thumbnails.
 */
export function ProjectsSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [featured, ...rest] = projects;

  return (
    <Section id="projects">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={t("sectionProjects")}
            title={t("sectionProjectsTitle")}
            lead={
              locale === "ar"
                ? "أرقام حقيقية من مشاريع حقيقية — بما في ذلك ما لم يسر كما خُطط له وكيف عالجناه."
                : "Real numbers from real jobs — including what did not go to plan and how we handled it."
            }
          />
          <Button
            href={localePath(locale, "/projects")}
            variant="outline"
            className="shrink-0"
            arrow
          >
            {t("viewAll")}
          </Button>
        </div>

        <div className="mt-12">
          <ProjectRow project={featured} locale={locale} priority />
        </div>

        <div className="grid gap-x-12 border-t border-line md:grid-cols-2">
          {rest.slice(0, 4).map((p) => (
            <LinkRow
              key={p.slug}
              href={localePath(locale, `/projects/${p.slug}`)}
              title={p.title[locale]}
              meta={`${p.sector[locale]} · ${p.district[locale]} · ${p.year}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
