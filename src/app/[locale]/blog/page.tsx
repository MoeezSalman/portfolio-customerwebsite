import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { posts } from "@/content/posts";
import { formatDate, localizeNumber } from "@/lib/utils";
import { CoverHero } from "@/components/heroes/CoverHero";
import { Section } from "@/components/ui/Section";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { WordBand } from "@/components/motion/WordBand";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/blog">): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "نصائح" : "Tips",
    description: ar
      ? "نصائح بسيطة بالصور للحفاظ على لمعان أرضيتك."
      : "Simple picture tips for keeping your floor shiny.",
    alternates: { canonical: `/${locale}/blog` },
  };
}

export default async function BlogPage({ params }: PageProps<"/[locale]/blog">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);
  const [lead, ...rest] = posts;

  return (
    <>
      <CoverHero
        locale={l}
        media={lead.media}
        eyebrow={`${t("sectionBlog")} · ${formatDate(lead.date, l)}`}
        title={lead.title[l]}
        lead={lead.excerpt[l]}
        crumbs={[{ label: t("sectionBlog") }]}
      >
        <Button href={localePath(l, `/blog/${lead.slug}`)} className="mt-6" arrow>
          {t("readMore")} · {localizeNumber(lead.readingMinutes, l)} {t("minRead")}
        </Button>
      </CoverHero>

      <Section>
        <div className="container-x">
          <RevealGroup as="ul" className="grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3" stagger={0.08}>
            {rest.map((p) => (
              <RevealItem key={p.slug} as="li">
                <PhotoTile
                  slot={p.media}
                  locale={l}
                  title={p.title[l]}
                  sub={p.excerpt[l]}
                  badge={`${localizeNumber(p.readingMinutes, l)} ${t("minRead")}`}
                  href={localePath(l, `/blog/${p.slug}`)}
                  aspect="aspect-[4/5]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <WordBand locale={l} set="promise" />
      <CtaSection locale={l} media={posts[2].media} />
    </>
  );
}
