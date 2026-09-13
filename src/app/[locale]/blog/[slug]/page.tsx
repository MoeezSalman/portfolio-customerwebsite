import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getPost, posts, postSlugs } from "@/content/posts";
import { getService } from "@/content/services";
import { formatDate } from "@/lib/utils";
import { PageHero, Section } from "@/components/ui/PageHero";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { PostRow } from "@/components/ui/Rows";
import { Button } from "@/components/ui/Button";
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
      title: post.title[l],
      description: post.excerpt[l],
      publishedTime: post.date,
      images: post.media.src ? [{ url: post.media.src }] : undefined,
    },
  };
}

export default async function PostPage({
  params,
}: PageProps<"/[locale]/blog/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const post = getPost(slug);
  if (!post) notFound();

  const l = locale as Locale;
  const t = getDictionary(l);
  const related = getService(post.service ?? "");
  const more = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        locale={l}
        eyebrow={post.category[l]}
        title={post.title[l]}
        crumbs={[
          { label: l === "ar" ? "المدونة" : "Journal", href: localePath(l, "/blog") },
          { label: post.category[l] },
        ]}
        media={post.media}
        caption={`${post.readingMinutes} ${t("minRead")}`}
        lead={post.excerpt[l]}
      >
        <Reveal variant="fade" delay={0.26}>
          <p className="mt-8 flex flex-wrap items-center gap-3 text-[0.82rem] text-fog">
            <span>{formatDate(post.date, l)}</span>
            {related && (
              <>
                <span className="size-1 rounded-full bg-line-2" />
                <Link
                  href={localePath(l, `/services/${related.slug}`)}
                  className="text-gold transition-colors hover:text-chalk"
                >
                  {related.title[l]}
                </Link>
              </>
            )}
          </p>
        </Reveal>
      </PageHero>

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12">
          {/* Sticky contents rail */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-32">
              <Eyebrow>{l === "ar" ? "في هذا المقال" : "In this article"}</Eyebrow>
              <ol className="mt-5 flex flex-col">
                {post.sections.map((s, i) => (
                  <li key={s.heading.en}>
                    <a
                      href={`#s-${i}`}
                      className="block border-t border-line py-3 text-[0.85rem] leading-snug text-fog transition-colors hover:text-chalk"
                    >
                      {s.heading[l]}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <article className="lg:col-span-7">
            {post.sections.map((section, i) => (
              <Reveal key={section.heading.en} variant="up" delay={i * 0.04}>
                <section id={`s-${i}`} className="mb-14 scroll-mt-32">
                  <h2 className="font-display text-[clamp(1.35rem,2.6vw,1.85rem)] leading-snug font-bold text-chalk">
                    {section.heading[l]}
                  </h2>
                  {section.body[l].map((para, j) => (
                    <p key={j} className="mt-5 text-[1.02rem] leading-[1.95] text-mist">
                      {para}
                    </p>
                  ))}
                </section>
              </Reveal>
            ))}

            {related && (
              <Reveal variant="up">
                <aside className="border-t border-chalk/80 pt-6">
                  <Eyebrow>{t("relatedServices")}</Eyebrow>
                  <h2 className="mt-4 font-display text-[1.2rem] font-bold text-chalk">
                    {related.title[l]}
                  </h2>
                  <p className="mt-3 leading-relaxed text-fog">{related.short[l]}</p>
                  <Button
                    href={localePath(l, `/services/${related.slug}`)}
                    variant="outline"
                    className="mt-7"
                    arrow
                  >
                    {t("viewService")}
                  </Button>
                </aside>
              </Reveal>
            )}
          </article>
        </div>
      </Section>

      <Section className="border-t border-line bg-ink-2/50">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-4"
            eyebrow={t("sectionBlog")}
            title={l === "ar" ? "اقرأ أيضًا" : "Read next"}
          />
          <div className="lg:col-span-8">
            {more.map((p) => (
              <PostRow key={p.slug} post={p} locale={l} />
            ))}
            <div className="border-t border-line" />
          </div>
        </div>
      </Section>

      <CtaSection locale={l} media={related?.media ?? more[0].media} />
    </>
  );
}
