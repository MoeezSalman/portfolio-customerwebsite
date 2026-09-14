import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getProject, projectSlugs } from "@/content/projects";
import { getService } from "@/content/services";
import { SliderHero } from "@/components/heroes/SliderHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { Figure } from "@/components/graphics/Figure";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { WordBand } from "@/components/motion/WordBand";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project || !isLocale(locale)) return {};
  const l = locale as Locale;
  return {
    title: `${project.title[l]} — ${project.district[l]}`,
    description: project.summary[l],
    alternates: { canonical: `/${locale}/projects/${slug}` },
    openGraph: { images: project.media.src ? [{ url: project.media.src }] : undefined },
  };
}

export default async function ProjectPage({ params }: PageProps<"/[locale]/projects/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = getProject(slug);
  if (!project) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);
  const used = project.services.map(getService).filter((s) => s !== undefined);

  return (
    <>
      <SliderHero
        locale={l}
        before={project.before}
        after={project.media}
        title={project.title[l]}
        sub={`${project.place[l]} · ${project.district[l]} · ${project.year}`}
        crumbs={[
          { label: t("sectionProjects"), href: localePath(l, "/projects") },
          { label: project.title[l] },
        ]}
        facts={project.facts.map((f) => ({ value: f.value[l], label: f.label[l] }))}
      />

      {/* The story: two gallery photos + two sentences + the services used */}
      <Section>
        <div className="container-x grid gap-6 lg:grid-cols-12 lg:gap-8">
          <RevealGroup className="grid grid-cols-2 gap-3 md:gap-4 lg:col-span-7" stagger={0.1}>
            {project.gallery.map((g, i) => (
              <RevealItem key={g.id} className={i === 0 ? "col-span-2" : ""}>
                <Figure
                  slot={g}
                  locale={l}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className={i === 0 ? "aspect-[16/10] rounded-card" : "aspect-[4/3] rounded-card"}
                />
              </RevealItem>
            ))}
            <RevealItem>
              <Figure slot={project.media} locale={l} sizes="30vw" className="aspect-[4/3] rounded-card" />
            </RevealItem>
          </RevealGroup>

          <div className="lg:col-span-5">
            <SectionHeading eyebrow={t("theStory")} title={project.summary[l]} as="h2" />
            <Reveal variant="up" delay={0.2}>
              <p className="mt-8 text-[0.7rem] font-semibold tracking-[0.2em] text-gold uppercase">
                {t("servicesUsed")}
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-3">
                {used.map((s) => (
                  <li key={s.slug}>
                    <PhotoTile
                      slot={s.media}
                      locale={l}
                      title={s.title[l]}
                      titleSize="sm"
                      href={localePath(l, `/services/${s.slug}`)}
                      aspect="aspect-[4/3]"
                      sizes="25vw"
                    />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      <WordBand locale={l} set="places" reverse tone="gold" />
      <ProjectsSection locale={l} limit={3} exclude={project.slug} className="pt-0 md:pt-0" />
      <CtaSection locale={l} media={project.gallery[0]} />
    </>
  );
}
