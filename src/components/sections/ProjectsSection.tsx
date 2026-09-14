import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/**
 * Finished floors as a photo wall. The first project is a wide banner;
 * the rest tile beneath it. Name and district only.
 */
export function ProjectsSection({
  locale,
  limit,
  heading = true,
  exclude,
  className,
}: {
  locale: Locale;
  limit?: number;
  heading?: boolean;
  exclude?: string;
  className?: string;
}) {
  const t = getDictionary(locale);
  let list = exclude ? projects.filter((p) => p.slug !== exclude) : projects;
  if (limit) list = list.slice(0, limit);
  // Let the first project span two columns only when that still fills every row.
  const bigFirst = (list.length + 1) % 3 === 0;

  return (
    <Section className={className}>
      <div className="container-x">
        {heading && (
          <div className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow={t("sectionProjects")} title={t("sectionProjectsTitle")} />
            {limit && (
              <Button href={localePath(locale, "/projects")} variant="outline" arrow>
                {t("viewAll")}
              </Button>
            )}
          </div>
        )}

        <RevealGroup as="ul" className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3" stagger={0.06}>
          {list.map((p, i) => (
            <RevealItem key={p.slug} as="li" className={cn(i === 0 && bigFirst && "sm:col-span-2")}>
              <PhotoTile
                slot={p.media}
                locale={locale}
                title={p.title[locale]}
                sub={`${p.place[locale]} · ${p.district[locale]}`}
                badge={p.facts[0].value[locale]}
                href={localePath(locale, `/projects/${p.slug}`)}
                aspect={i === 0 && bigFirst ? "aspect-[4/3] sm:aspect-[2/1]" : "aspect-[4/3]"}
                sizes={i === 0 && bigFirst ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
                titleSize={i === 0 && bigFirst ? "lg" : "md"}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
