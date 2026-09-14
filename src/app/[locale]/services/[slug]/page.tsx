import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getService, services, serviceSlugs } from "@/content/services";
import { getEquipment } from "@/content/equipment";
import { localizeNumber } from "@/lib/utils";
import { CinemaHero } from "@/components/heroes/CinemaHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { Figure } from "@/components/graphics/Figure";
import { Icon } from "@/components/graphics/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ShineSection } from "@/components/sections/ShineSection";
import { MachineRow } from "@/components/sections/EquipmentSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { WordBand } from "@/components/motion/WordBand";

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

export default async function ServicePage({ params }: PageProps<"/[locale]/services/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const service = getService(slug);
  if (!service) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  const machines = service.equipment.map(getEquipment).filter((m) => m !== undefined);
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <CinemaHero
        locale={l}
        media={service.media}
        eyebrow={`${t("startingFrom")} ${service.startingFrom[l]}`}
        title={service.title[l]}
        lead={service.hero[l]}
        crumbs={[
          { label: t("sectionServices"), href: localePath(l, "/services") },
          { label: service.title[l] },
        ]}
        aside={
          <a
            href="#before-after"
            className="group flex items-center gap-4 rounded-card border border-white/20 bg-white/10 p-2.5 pe-5 backdrop-blur transition-colors hover:bg-white/20"
          >
            <Figure
              slot={service.before}
              locale={l}
              sizes="140px"
              className="size-20 shrink-0 rounded-[1rem] md:size-24"
              imgClassName="transition-transform duration-700 group-hover:scale-110"
            />
            <span className="text-white">
              <span className="block text-[0.68rem] font-semibold tracking-[0.18em] text-white/70 uppercase">
                {t("before")} → {t("after")}
              </span>
              <span className="mt-1 block font-display text-[1rem] font-bold">{t("dragToCompare")}</span>
            </span>
            <Icon name="arrow" className="flip-rtl size-4 text-white/70 transition-transform group-hover:translate-x-1" />
          </a>
        }
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={localePath(l, "/quote")} size="lg" arrow className="bg-gold text-chalk hover:bg-white">
            {t("getQuote")}
          </Button>
        </div>
      </CinemaHero>

      {/* What you get — four short lines with checks, beside two gallery photos */}
      <Section>
        <div className="container-x grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={t("whatsIncluded")} title={service.short[l]} className="mb-6" />
            <RevealGroup as="ul" className="grid gap-2.5 sm:grid-cols-2" stagger={0.06}>
              {service.features[l].map((f) => (
                <RevealItem key={f} as="li" className="flex items-center gap-3 rounded-card bg-ink-2/70 px-4 py-3.5">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-gold text-chalk">
                    <Icon name="check" className="size-3.5" strokeWidth={2.8} />
                  </span>
                  <span className="font-display text-[0.95rem] font-semibold text-chalk">{f}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
          <RevealGroup className="grid grid-cols-2 gap-3 md:gap-4 lg:col-span-7" stagger={0.1}>
            {service.gallery.slice(0, 2).map((g) => (
              <RevealItem key={g.id}>
                <Figure slot={g} locale={l} sizes="(max-width: 1024px) 50vw, 30vw" className="aspect-[4/5] rounded-card" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <div id="before-after">
        <ShineSection locale={l} before={service.before} after={service.media} />
      </div>

      {/* How we do it — three numbered steps over the third gallery photo */}
      <Section tight className="container-x">
        <div className="relative overflow-hidden rounded-card">
          <Figure slot={service.gallery[2]} locale={l} sizes="100vw" className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#14110c]/80 via-[#14110c]/60 to-[#14110c]/85" />
          <div className="relative p-6 md:p-10 lg:p-14">
            <Reveal variant="fade">
              <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.22em] text-gold-3 uppercase">
                <span className="h-px w-8 bg-gold-3/70" />
                {t("howWeDeliver")}
              </span>
            </Reveal>
            <RevealGroup as="ol" className="mt-6 grid gap-3 md:grid-cols-3 md:gap-4" stagger={0.1}>
              {service.steps.map((s, i) => (
                <RevealItem key={s.title.en} as="li" className="rounded-card border border-white/15 bg-white/10 p-5 text-white backdrop-blur md:p-6">
                  <span className="grid size-11 place-items-center rounded-full bg-gold font-display text-[1.1rem] font-bold text-chalk">
                    {localizeNumber(i + 1, l)}
                  </span>
                  <h3 className="mt-4 font-display text-[1.3rem] leading-tight font-bold">{s.title[l]}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-white/80">{s.body[l]}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Section>

      {/* Machines used */}
      {machines.length > 0 && (
        <Section>
          <div className="container-x">
            <SectionHeading eyebrow={t("equipmentUsed")} title={t("sectionEquipmentTitle")} className="mb-8" />
            <ul className="flex flex-col gap-3 md:gap-4">
              {machines.slice(0, 2).map((m, i) => (
                <MachineRow key={m.id} machine={m} locale={l} flip={i % 2 === 1} />
              ))}
            </ul>
            <Button href={localePath(l, "/equipment")} variant="outline" className="mt-6" arrow>
              {t("viewAll")}
            </Button>
          </div>
        </Section>
      )}

      {/* FAQ + related */}
      <Section>
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={t("sectionFaq")} title={t("sectionFaqTitle")} className="mb-6" />
            <Accordion items={service.faqs.map((f) => ({ q: f.q[l], a: f.a[l] }))} defaultOpen={0} />
          </div>
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={t("relatedServices")} title={t("sectionServicesTitle")} className="mb-6" />
            <ul className="grid grid-cols-3 gap-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <PhotoTile
                    slot={r.media}
                    locale={l}
                    title={r.title[l]}
                    titleSize="sm"
                    href={localePath(l, `/services/${r.slug}`)}
                    aspect="aspect-[3/4]"
                    sizes="20vw"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <WordBand locale={l} set="promise" tone="gold" />
      <CtaSection locale={l} media={service.gallery[0]} />
    </>
  );
}
