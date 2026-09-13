import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { posts } from "@/content/posts";
import { PageHero, Section } from "@/components/ui/PageHero";
import { PostLead, PostRow } from "@/components/ui/Rows";
import { CtaSection } from "@/components/sections/CtaSection";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/blog">): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "المدونة" : "Journal",
    description: ar
      ? "مقالات عملية عن صيانة المنازل في الرياض: التلميع مقابل الطلاء، صيانة التكييف، كشف التسربات، والعناية بالرخام."
      : "Practical writing on property maintenance in Riyadh: polishing vs coating, AC servicing, leak detection and marble care.",
    alternates: { canonical: `/${locale}/blog` },
  };
}

export default async function BlogPage({ params }: PageProps<"/[locale]/blog">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  const [lead, ...rest] = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        locale={l}
        eyebrow={t("sectionBlog")}
        title={t("sectionBlogTitle")}
        crumbs={[{ label: l === "ar" ? "المدونة" : "Journal" }]}
        media={rest[1].media}
        caption={rest[1].category[l]}
        lead={
          l === "ar"
            ? "كتابات من الموقع، لا محتوى تسويقي. بعضها سيوفّر عليك المال بألا توظّفنا أصلًا."
            : "Written from site, not from a marketing brief. Some of it will save you money by not hiring us at all."
        }
      />

      <Section>
        <div className="container-x">
          <PostLead post={lead} locale={l} />
          <div className="mt-16">
            {rest.map((p) => (
              <PostRow key={p.slug} post={p} locale={l} />
            ))}
            <div className="border-t border-line" />
          </div>
        </div>
      </Section>

      <CtaSection locale={l} media={lead.media} />
    </>
  );
}
