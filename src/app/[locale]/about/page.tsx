import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site, stats } from "@/content/site";
import { getProject } from "@/content/projects";
import { slot } from "@/lib/media";
import { PageHero, Section } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureColumns } from "@/components/ui/Rows";
import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";
import { Figure } from "@/components/graphics/Figure";
import { GuaranteesSection } from "@/components/sections/GuaranteesSection";
import { CtaSection } from "@/components/sections/CtaSection";

const aboutMedia = slot(
  "about-story",
  "marble",
  {
    en: "Soft white marble, the surface the company was built on",
    ar: "رخام أبيض ناعم — السطح الذي بُنيت عليه الشركة",
  },
  "/images/about-story.jpg",
);

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "من نحن" : "About",
    description: ar
      ? `${site.name.ar} — فريق صيانة وعناية بالأسطح في الرياض منذ أكثر من ١٨ عامًا، بمعدات صناعية وضمان مكتوب على كل عمل.`
      : `${site.name.en} — a Riyadh surface care and maintenance team of eighteen years, running industrial equipment with a written guarantee on every job.`,
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
      "ShinePro started with one floor grinder and a simple observation: almost every 'polished' floor in Riyadh had been coated rather than polished. The coating looked spectacular for a season and then wore through in the walking lanes, and the owner paid again.",
      "We built the business on doing the slower, harder version of the job — grinding the stone itself, measuring the result, and putting the gloss readings in writing. That turned out to attract the kind of client who asks what is actually happening to their property, which is the kind of client we wanted.",
      "Over eighteen years the work expanded outward from floors. Owners who trusted us with marble asked us about a leak, then an AC unit, then a full villa refurbishment. Rather than referring them elsewhere, we hired the trades. Today every service on this site is delivered by our own technicians.",
    ],
    ar: [
      "بدأت شاين برو بجلاخة أرضيات واحدة وملاحظة بسيطة: معظم الأرضيات «الملمّعة» في الرياض كانت مطلية لا ملمّعة. فالطلاء يبدو رائعًا لموسم واحد ثم يتآكل في ممرات الحركة، ويدفع المالك مرة أخرى.",
      "بنينا العمل على تنفيذ النسخة الأبطأ والأصعب من المهمة — جلي الحجر نفسه، وقياس النتيجة، وتوثيق قراءات اللمعان كتابيًا. وقد استقطب ذلك نوع العملاء الذين يسألون عمّا يحدث فعليًا لعقارهم، وهم بالضبط من أردناهم.",
      "وعلى مدى ثمانية عشر عامًا توسّع العمل انطلاقًا من الأرضيات. فالملّاك الذين ائتمنونا على الرخام سألونا عن تسرب، ثم عن مكيف، ثم عن ترميم فيلا كاملة. وبدل إحالتهم إلى غيرنا، وظّفنا أصحاب تلك المهن. واليوم كل خدمة على هذا الموقع ينفّذها فنيونا.",
    ],
  };

  const principles = [
    {
      icon: "check" as const,
      title: { en: "Measure, do not claim", ar: "نقيس ولا ندّعي" },
      body: {
        en: "Gloss meters, thermal cameras, pressure tests. If we say it improved, there is a number behind it.",
        ar: "مقاييس لمعان وكاميرات حرارية واختبارات ضغط. فإن قلنا إن الحالة تحسّنت، فخلف ذلك رقم.",
      },
    },
    {
      icon: "shield" as const,
      title: { en: "Quote the real scope", ar: "نسعّر النطاق الحقيقي" },
      body: {
        en: "We would rather lose a job on price than win it by leaving out the preparation that makes it last.",
        ar: "نفضّل خسارة عمل بسبب السعر على كسبه بحذف أعمال التحضير التي تجعله يدوم.",
      },
    },
    {
      icon: "leaf" as const,
      title: { en: "Say no when it fits", ar: "نقول لا عند اللزوم" },
      body: {
        en: "Some properties do not need a contract, and some repairs are not worth doing. We will tell you.",
        ar: "بعض العقارات لا تحتاج عقدًا، وبعض الإصلاحات لا تستحق التنفيذ. وسنخبرك بذلك.",
      },
    },
  ];

  return (
    <>
      <PageHero
        locale={l}
        eyebrow={t("footerCompany")}
        title={
          l === "ar"
            ? "ثمانية عشر عامًا من العمل على أرضيات الرياض"
            : "Eighteen years on Riyadh floors"
        }
        crumbs={[{ label: l === "ar" ? "من نحن" : "About" }]}
        media={getProject("al-yasmin-villa-restoration")!.media}
        caption={l === "ar" ? "منذ ٢٠٠٨" : "Since 2008"}
        lead={site.description[l]}
      />

      {/* Story: portrait photo, text alongside, big pull-quote under */}
      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal variant="scale" duration={0.9} className="lg:col-span-5">
            <Figure
              slot={aboutMedia}
              locale={l}
              className="aspect-[4/5] rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>

          <Reveal variant="up" className="flex flex-col justify-center lg:col-span-7">
            {story[l].map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-display text-[clamp(1.25rem,2vw,1.6rem)] leading-[1.6] font-medium text-chalk"
                    : "mt-6 leading-[1.9] text-fog"
                }
              >
                {para}
              </p>
            ))}
            <p className="mt-10 border-t border-chalk/80 pt-6 font-display text-[1.15rem] leading-snug font-bold text-gold">
              {l === "ar"
                ? "«الأرضيات لا تتلف — الطبقة العليا منها فقط هي التي تتلف.»"
                : "“Floors do not wear out — their top 200 microns do.”"}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Stats — ruled strip */}
      <Section className="border-t border-line bg-ink-2/50 py-14 md:py-16">
        <div className="container-x">
          <dl className="grid grid-cols-2 divide-x divide-line rtl:divide-x-reverse lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label.en}
                className={`px-6 py-4 first:ps-0 ${i < 2 ? "max-lg:border-b max-lg:border-line max-lg:pb-8" : "max-lg:pt-8"}`}
              >
                <dd className="font-display text-[2.4rem] leading-none font-bold text-chalk">
                  <Counter to={s.value} locale={l} suffix={s.suffix[l]} />
                </dd>
                <dt className="mt-3 text-[0.85rem] text-fog">{s.label[l]}</dt>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-4"
            eyebrow={l === "ar" ? "مبادئنا" : "How we work"}
            title={
              l === "ar"
                ? "ثلاثة مبادئ نخسر بها أعمالًا أحيانًا"
                : "Three principles that sometimes cost us the job"
            }
          />
          <div className="lg:col-span-8">
            <FeatureColumns
              columns={3}
              items={principles.map((p) => ({
                icon: p.icon,
                title: p.title[l],
                body: p.body[l],
              }))}
            />
          </div>
        </div>
      </Section>

      <GuaranteesSection locale={l} />
      <CtaSection locale={l} />
    </>
  );
}
