import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { faqs, faqGroups } from "@/content/faq";
import { services } from "@/content/services";
import { Section, Crumbs } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Figure } from "@/components/graphics/Figure";
import { Marquee } from "@/components/motion/Marquee";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/faq">): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "الأسئلة الشائعة" : "FAQ",
    description: ar
      ? "إجابات سريعة عن السعر والعمل والضمان."
      : "Quick answers about price, the work and the guarantee.",
    alternates: { canonical: `/${locale}/faq` },
  };
}

/**
 * Photo-ribbon hero — a centred title over a slow, endless strip of floor
 * photographs. Used on the FAQ page.
 */
export default async function FaqPage({ params }: PageProps<"/[locale]/faq">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);
  const ribbon = services.map((s) => s.media);

  return (
    <>
      <section className="relative overflow-hidden pt-24 md:pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="aurora" />
        </div>
        <div className="container-x relative">
          <Reveal variant="fade" duration={0.5}>
            <Crumbs locale={l} crumbs={[{ label: t("sectionFaq") }]} className="justify-center" />
          </Reveal>
          <div className="mx-auto mt-8 max-w-2xl text-center md:mt-10">
            <Eyebrow className="justify-center">{t("sectionFaq")}</Eyebrow>
            <SplitText
              as="h1"
              text={t("sectionFaqTitle")}
              className="mt-4 font-display text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1] font-bold tracking-tight text-chalk"
            />
          </div>
        </div>

        <Reveal variant="fade" delay={0.2} className="mt-8 md:mt-10">
          <Marquee speed={60} pauseOnHover={false}>
            {ribbon.map((m) => (
              <Figure
                key={m.id}
                slot={m}
                locale={l}
                sizes="20vw"
                className="me-3 aspect-[4/3] w-[42vw] rounded-card sm:w-[28vw] md:me-4 lg:w-[18vw]"
              />
            ))}
          </Marquee>
        </Reveal>
      </section>

      <Section>
        <div className="container-x mx-auto max-w-4xl flex flex-col gap-10">
          {faqGroups.map((g) => (
            <Reveal key={g.en} variant="up">
              <Eyebrow className="mb-4">{g[l]}</Eyebrow>
              <Accordion
                items={faqs.filter((f) => f.group.en === g.en).map((f) => ({ q: f.q[l], a: f.a[l] }))}
                defaultOpen={0}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection locale={l} media={services[2].gallery[1]} />
    </>
  );
}
