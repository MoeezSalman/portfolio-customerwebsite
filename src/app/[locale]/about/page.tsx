import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site, stats } from "@/content/site";
import { photo } from "@/lib/media";
import { ArchHero } from "@/components/heroes/ArchHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/motion/Counter";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Figure } from "@/components/graphics/Figure";
import { GuaranteesSection } from "@/components/sections/GuaranteesSection";
import { EquipmentSection } from "@/components/sections/EquipmentSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { WordBand } from "@/components/motion/WordBand";

const portrait = photo("man-thobe", {
  en: "A client walking across a polished marble courtyard in Riyadh",
  ar: "عميل يمشي على فناء رخامي مصقول في الرياض",
});
const textures = [
  photo("marble-white", { en: "White marble", ar: "رخام أبيض" }),
  photo("granite", { en: "Polished granite", ar: "جرانيت مصقول" }),
  photo("terrazzo-black", { en: "Black terrazzo", ar: "ترازو أسود" }),
];
const team = photo("team-at-work", {
  en: "Our team polishing a large warehouse floor",
  ar: "فريقنا يلمّع أرضية مستودع كبير",
});
const machineShot = photo("machine-in-hall", {
  en: "One of our technicians on a ride-on floor machine",
  ar: "أحد فنيينا على ماكينة أرضيات راكبة",
});

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "من نحن" : "About",
    description: ar
      ? `${site.name.ar} — فريق جلي وتلميع أرضيات في الرياض منذ أكثر من ١٢ عامًا.`
      : `${site.name.en} — a Riyadh floor polishing team for over twelve years.`,
    alternates: { canonical: `/${locale}/about` },
  };
}

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  const story = {
    en: [
      "We started with one floor grinder and one idea: polish the real stone, do not paint over it.",
      "Twelve years later we are thirty technicians, and we still do only one thing — make hard floors shine.",
    ],
    ar: [
      "بدأنا بماكينة جلي واحدة وفكرة واحدة: نلمّع الحجر الحقيقي ولا نطليه.",
      "بعد اثني عشر عامًا صرنا ثلاثين فنيًا، وما زلنا نفعل شيئًا واحدًا فقط — نجعل الأرضيات الصلبة تلمع.",
    ],
  };

  return (
    <>
      <ArchHero
        locale={l}
        media={portrait}
        textures={textures}
        eyebrow={l === "ar" ? "من نحن" : "About"}
        title={l === "ar" ? "شيء واحد نتقنه: اللمعان." : "One thing, done well: shine."}
        lead={story[l][0]}
        crumbs={[{ label: l === "ar" ? "من نحن" : "About" }]}
      />

      {/* Two photos + two sentences + the numbers */}
      <Section>
        <div className="container-x grid gap-3 md:gap-4 lg:grid-cols-12">
          <Reveal variant="scale" className="lg:col-span-7">
            <Figure slot={team} locale={l} sizes="(max-width: 1024px) 100vw, 60vw" className="aspect-[16/10] rounded-card lg:h-full lg:min-h-[26rem]" />
          </Reveal>
          <div className="flex flex-col gap-3 md:gap-4 lg:col-span-5">
            <Reveal variant="up" className="flex flex-1 flex-col justify-center rounded-card bg-chalk p-7 text-white md:p-9">
              <SectionHeading eyebrow={t("theStory")} title={story[l][1]} as="h2" className="[&_h2]:text-white [&_p]:text-white/75" />
            </Reveal>
            <RevealGroup as="dl" className="grid grid-cols-2 gap-3 md:gap-4" stagger={0.08}>
              {stats.map((s) => (
                <RevealItem key={s.label.en} className="rounded-card bg-ink-2 p-5">
                  <dd className="font-display text-[1.9rem] leading-none font-bold text-chalk">
                    <Counter to={s.value} locale={l} suffix={s.suffix[l]} />
                  </dd>
                  <dt className="mt-2 text-[0.8rem] text-fog">{s.label[l]}</dt>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Section>

      <WordBand locale={l} set="materials" tone="gold" />
      <GuaranteesSection locale={l} />

      <Section>
        <div className="container-x">
          <Reveal variant="scale">
            <Figure slot={machineShot} locale={l} sizes="100vw" className="aspect-[4/3] rounded-card sm:aspect-[21/9]" />
          </Reveal>
        </div>
      </Section>

      <EquipmentSection locale={l} limit={3} className="pt-0 md:pt-0" />
      <TestimonialsSection locale={l} />
      <CtaSection locale={l} />
    </>
  );
}
