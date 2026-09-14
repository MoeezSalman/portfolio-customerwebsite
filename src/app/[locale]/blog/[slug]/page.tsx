import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getPost, posts, postSlugs } from "@/content/posts";
import { getService } from "@/content/services";
import { formatDate, localizeNumber } from "@/lib/utils";
import { CinemaHero } from "@/components/heroes/CinemaHero";
import { Section } from "@/components/ui/Section";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Figure } from "@/components/graphics/Figure";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/blog/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post || !isLocale(locale)) return {};
  const l = locale as Locale;
  return {
    title: post.title[l],
    description: post.excerpt[l],
    alternates: { canonical: `/${locale}/blog/${slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.date,
      images: post.media.src ? [{ url: post.media.src }] : undefined,
    },
  };
}

export default async function PostPage({ params }: PageProps<"/[locale]/blog/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const post = getPost(slug);
  if (!post) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);
  const service = post.service ? getService(post.service) : undefined;
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <CinemaHero
        locale={l}
        media={post.media}
        height="medium"
        eyebrow={`${formatDate(post.date, l)} · ${localizeNumber(post.readingMinutes, l)} ${t("minRead")}`}
        title={post.title[l]}
        lead={post.excerpt[l]}
        crumbs={[{ label: t("sectionBlog"), href: localePath(l, "/blog") }, { label: post.title[l] }]}
      />

      {/* Each section: a big photo with its heading and two lines beside it, alternating sides */}
      <Section>
        <div className="container-x flex flex-col gap-3 md:gap-4">
          {post.sections.map((s, i) => (
            <Reveal key={s.heading.en} variant="up" amount={0.2}>
              <article
                className={`grid overflow-hidden rounded-card bg-ink-2 md:grid-cols-12 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Figure
                  slot={s.media}
                  locale={l}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="aspect-[16/10] md:col-span-7 md:aspect-auto md:min-h-[22rem]"
                />
                <div className="flex flex-col justify-center gap-3 p-6 md:col-span-5 md:p-9">
                  <h2 className="font-display text-[1.4rem] leading-tight font-bold text-chalk md:text-[1.7rem]">
                    {s.heading[l]}
                  </h2>
                  <p className="text-[1.02rem] leading-relaxed text-mist">{s.body[l]}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {(service || more.length > 0) && (
        <Section className="pt-0 md:pt-0">
          <div className="container-x grid gap-8 lg:grid-cols-12">
            {service && (
              <div className="lg:col-span-4">
                <SectionHeading eyebrow={t("relatedServices")} title={service.title[l]} as="h3" className="mb-4" />
                <PhotoTile
                  slot={service.media}
                  locale={l}
                  title={service.title[l]}
                  badge={`${t("startingFrom")} ${service.startingFrom[l]}`}
                  href={localePath(l, `/services/${service.slug}`)}
                  aspect="aspect-[4/3]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            )}
            <div className={service ? "lg:col-span-8" : "lg:col-span-12"}>
              <SectionHeading eyebrow={t("sectionBlog")} title={t("sectionBlogTitle")} as="h3" className="mb-4" />
              <ul className="grid grid-cols-3 gap-3">
                {more.map((p) => (
                  <li key={p.slug}>
                    <PhotoTile
                      slot={p.media}
                      locale={l}
                      title={p.title[l]}
                      titleSize="sm"
                      href={localePath(l, `/blog/${p.slug}`)}
                      aspect="aspect-[3/4]"
                      sizes="25vw"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      )}

      <CtaSection locale={l} media={post.sections[post.sections.length - 1].media} />
    </>
  );
}
