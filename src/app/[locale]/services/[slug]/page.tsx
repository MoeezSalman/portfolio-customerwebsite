import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getService, services, serviceSlugs } from "@/content/services";
import { getEquipment } from "@/content/equipment";
import { localizeNumber } from "@/lib/utils";
import { PageHero, Section } from "@/components/ui/PageHero";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { FeatureColumns, LinkRow } from "@/components/ui/Rows";
import { Machine } from "@/components/graphics/Machine";
import { Icon } from "@/components/graphics/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getService(slug);
  if (!service || !isLocale(locale)) return {};
  const l = locale as Locale;

  return {
    title: service.title[l],
    description: service.short[l],
    keywords: service.keywords[l],
    alternates: { canonical: `/${locale}/services/${slug}` },
    openGraph: {
      title: service.title[l],
      description: service.short[l],
      images: service.media.src ? [{ url: service.media.src }] : undefined,
    },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/[locale]/services/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const service = getService(slug);
  if (!service) notFound();

  const l = locale as Locale;
  const t = getDictionary(l);
  const machines = service.equipment.map(getEquipment).filter(Boolean);
  const idx = services.findIndex((s) => s.slug === slug);
  const related = [...services.slice(idx + 1), ...services.slice(0, idx)].slice(0, 4);

  return (
    <>
      <PageHero
        locale={l}
        accent={service.accent}
        eyebrow={t("sectionServices")}
        title={service.title[l]}
        crumbs={[
          { label: l === "ar" ? "خدماتنا" : "Services", href: localePath(l, "/services") },
          { label: service.title[l] },
        ]}
        media={service.media}
        caption={service.startingFrom[l]}
        lead={service.short[l]}
      >
        <Reveal variant="up" delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={localePath(l, "/quote")} size="lg" arrow>
              {t("getQuote")}
            </Button>
            <span className="text-sm text-fog">
              {t("startingFrom")}{" "}
              <strong className="font-display text-chalk">{service.startingFrom[l]}</strong>
            </span>
          </div>
        </Reveal>
      </PageHero>

      {/* Narrative + what's included: two text columns, no visual boxes */}
      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal variant="up" className="lg:col-span-7">
            <p className="font-display text-[clamp(1.25rem,2vw,1.6rem)] leading-[1.6] font-medium text-chalk">
              {service.hero[l]}
            </p>
          </Reveal>

          <Reveal variant="up" delay={0.1} className="lg:col-span-5">
            <Eyebrow accent={service.accent}>{t("whatsIncluded")}</Eyebrow>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {service.features[l].map((f) => (
                <li key={f} className="flex items-start gap-3.5 py-3.5">
                  <span
                    className={`mt-1 size-1.5 shrink-0 rounded-full ${
                      service.accent === "gold" ? "bg-gold" : "bg-aqua"
                    }`}
                  />
                  <span className="text-[0.95rem] leading-relaxed text-mist">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Deliverables — numbered columns with a rule above each */}
      <Section className="border-t border-line bg-ink-2/50">
        <div className="container-x">
          <SectionHeading
            eyebrow={t("howWeDeliver")}
            title={l === "ar" ? "أربع خطوات، كل واحدة موثّقة" : "Four steps, each documented"}
            accent={service.accent}
          />
          <FeatureColumns
            className="mt-14"
            columns={4}
            items={service.deliverables.map((d, i) => ({
              index: localizeNumber(String(i + 1).padStart(2, "0"), l),
              title: d.title[l],
              body: d.body[l],
            }))}
          />
        </div>
      </Section>

      {/* Equipment — a ruled strip of line-art */}
      {machines.length > 0 && (
        <Section className="border-t border-line">
          <div className="container-x">
            <SectionHeading
              eyebrow={t("equipmentUsed")}
              title={l === "ar" ? "ما الذي يصل فعليًا إلى موقعك" : "What actually arrives on site"}
              accent="aqua"
            />
            <div className="mt-14 grid divide-y divide-line border-y border-line sm:grid-cols-2 sm:divide-x sm:rtl:divide-x-reverse lg:grid-cols-4 lg:divide-y-0">
              {machines.map((m, i) => (
                <Reveal key={m!.id} variant="up" delay={i * 0.06} className="p-6 lg:p-7">
                  <div className="size-28 text-mist">
                    <Machine glyph={m!.glyph} accent={i % 2 === 0 ? "gold" : "aqua"} />
                  </div>
                  <h3 className="mt-5 font-display text-[1rem] font-bold text-chalk">
                    {m!.name[l]}
                  </h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-fog">{m!.role[l]}</p>
                  <p className="mt-3 text-[0.7rem] font-semibold tracking-wide text-gold uppercase">
                    {m!.specs[0].label[l]} · {m!.specs[0].value[l]}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* FAQs + keywords */}
      <Section className="border-t border-line bg-ink-2/50">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={t("sectionFaq")} title={t("sectionFaqTitle")} />
            <div className="mt-10">
              <Eyebrow accent="aqua">{t("searchTerms")}</Eyebrow>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.keywords[l].map((k) => (
                  <li
                    key={k}
                    className="rounded-full border border-line-2 px-3.5 py-1.5 text-[0.78rem] text-mist"
                  >
                    {k}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-7">
            <Accordion
              items={service.faqs.map((f) => ({ q: f.q[l], a: f.a[l] }))}
              defaultOpen={0}
            />
          </div>
        </div>
      </Section>

      {/* Related — a plain link list */}
      <Section className="border-t border-line">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-4"
            eyebrow={t("relatedServices")}
            title={l === "ar" ? "قد تحتاج أيضًا" : "You may also need"}
          />
          <div className="lg:col-span-8">
            {related.map((s) => (
              <LinkRow
                key={s.slug}
                href={localePath(l, `/services/${s.slug}`)}
                title={s.title[l]}
                meta={s.startingFrom[l]}
              />
            ))}
            <div className="border-t border-line" />
          </div>
        </div>
      </Section>

      <CtaSection locale={l} media={related[0].media} />

      <FaqSchema
        faqs={service.faqs.map((f) => ({ q: f.q[l], a: f.a[l] }))}
        name={service.title[l]}
      />
    </>
  );
}

/** FAQPage structured data — these pages are the SEO surface of the site. */
function FaqSchema({ faqs, name }: { faqs: { q: string; a: string }[]; name: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
