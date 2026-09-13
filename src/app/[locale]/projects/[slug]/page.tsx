import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getProject, projects, projectSlugs } from "@/content/projects";
import { getService } from "@/content/services";
import { PageHero, Section } from "@/components/ui/PageHero";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { StatStrip, LinkRow } from "@/components/ui/Rows";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";

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
    title: project.title[l],
    description: project.summary[l],
    alternates: { canonical: `/${locale}/projects/${slug}` },
    openGraph: {
      title: project.title[l],
      description: project.summary[l],
      images: project.media.src ? [{ url: project.media.src }] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/[locale]/projects/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = getProject(slug);
  if (!project) notFound();

  const l = locale as Locale;
  const t = getDictionary(l);
  const idx = projects.findIndex((p) => p.slug === slug);
  const more = [...projects.slice(idx + 1), ...projects.slice(0, idx)].slice(0, 4);

  const facts = [
    { label: t("client"), value: project.client[l] },
    { label: t("sector"), value: project.sector[l] },
    { label: t("district"), value: project.district[l] },
    { label: t("year"), value: project.year },
    { label: t("scale"), value: project.area[l] },
    { label: t("duration"), value: project.duration[l] },
  ];

  const blocks = [
    { title: t("theChallenge"), body: project.challenge[l] },
    { title: t("ourApproach"), body: project.approach[l] },
    { title: t("theOutcome"), body: project.outcome[l] },
  ];

  return (
    <>
      <PageHero
        locale={l}
        accent={project.accent}
        eyebrow={project.sector[l]}
        title={project.title[l]}
        crumbs={[
          { label: l === "ar" ? "أعمالنا" : "Projects", href: localePath(l, "/projects") },
          { label: project.title[l] },
        ]}
        media={project.media}
        caption={`${project.district[l]} · ${project.year}`}
        lead={project.summary[l]}
      />

      {/* Fact sheet — a ruled table row, not tiles */}
      <Section className="py-0 md:py-0">
        <div className="container-x">
          <dl className="grid grid-cols-2 divide-x divide-line border-b border-line rtl:divide-x-reverse md:grid-cols-3 lg:grid-cols-6">
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={`px-5 py-6 first:ps-0 ${i < 3 ? "max-md:border-b max-md:border-line" : ""}`}
              >
                <dt className="text-[0.68rem] tracking-[0.14em] text-fog uppercase">{f.label}</dt>
                <dd className="mt-2 font-display text-[0.95rem] font-semibold text-chalk">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-6">
            <Eyebrow accent="aqua">{t("servicesUsed")}</Eyebrow>
            <ul className="flex flex-wrap gap-2.5">
              {project.services.map((s) => {
                const service = getService(s);
                if (!service) return null;
                return (
                  <li key={s}>
                    <Link
                      href={localePath(l, `/services/${s}`)}
                      className="inline-flex rounded-full border border-line-2 px-4 py-1.5 text-[0.82rem] text-mist transition-colors hover:border-chalk hover:bg-chalk hover:text-ink"
                    >
                      {service.title[l]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>

      {/* Narrative — three text columns */}
      <Section className="border-t border-line bg-ink-2/50">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          {blocks.map((b, i) => (
            <Reveal key={b.title} variant="up" delay={i * 0.09}>
              <article className="border-t border-chalk/80 pt-6">
                <Eyebrow accent={i === 2 ? "gold" : "aqua"}>{b.title}</Eyebrow>
                <p className="mt-6 leading-[1.9] text-mist">{b.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Metrics — large inline stats */}
      <Section className="border-t border-line">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
          <SectionHeading
            className="lg:col-span-5"
            eyebrow={l === "ar" ? "النتائج" : "Results"}
            title={l === "ar" ? "ما الذي تغيّر بالأرقام" : "What changed, in numbers"}
            accent={project.accent}
          />
          <Reveal variant="up" className="lg:col-span-7">
            <StatStrip
              size="lg"
              accent={project.accent}
              items={project.metrics.map((m) => ({
                value: m.value[l],
                label: m.label[l],
              }))}
            />
          </Reveal>
        </div>
      </Section>

      {/* More projects — link list */}
      <Section className="border-t border-line bg-ink-2/50">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-4"
            eyebrow={t("moreProjects")}
            title={l === "ar" ? "أعمال أخرى" : "Other work"}
          />
          <div className="lg:col-span-8">
            {more.map((p) => (
              <LinkRow
                key={p.slug}
                href={localePath(l, `/projects/${p.slug}`)}
                title={p.title[l]}
                meta={`${p.sector[l]} · ${p.district[l]} · ${p.year}`}
              />
            ))}
            <div className="border-t border-line" />
          </div>
        </div>
      </Section>

      <CtaSection locale={l} media={more[0].media} />
    </>
  );
}
