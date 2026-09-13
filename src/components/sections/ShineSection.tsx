import { type Locale } from "@/i18n/config";
import { services } from "@/content/services";
import { slot } from "@/lib/media";
import { Figure } from "@/components/graphics/Figure";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Section } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/graphics/Icon";

/** The "before": an unfinished industrial floor, matte and dust-grey. */
const beforeMedia = slot(
  "floor-polishing-before",
  "marble",
  {
    en: "Empty industrial hall with a dull, unfinished concrete floor",
    ar: "صالة صناعية فارغة بأرضية خرسانية باهتة غير مشطّبة",
  },
  "/images/floor-polishing-before.jpg",
);

/**
 * The drag-to-compare proof section. For a polishing company this is the
 * clearest possible demonstration of the product.
 */
export function ShineSection({ locale }: { locale: Locale }) {
  const flagship = services[0];

  const copy = {
    eyebrow: { en: "The difference", ar: "الفرق" },
    title: {
      en: "Drag to see what a real polish does",
      ar: "اسحب لترى ما يفعله التلميع الحقيقي",
    },
    lead: {
      en: "On the left, a floor the way we typically find it — matte, dusty, swallowing the light. On the right, the same kind of space after seven diamond passes and crystallisation.",
      ar: "على اليسار أرضية كما نجدها عادةً — باهتة ومغبرة تبتلع الضوء. وعلى اليمين المساحة نفسها بعد سبع مراحل ألماسية وتلميع بالكريستال.",
    },
    before: { en: "Before", ar: "قبل" },
    after: { en: "After", ar: "بعد" },
    points: [
      {
        en: "Scratches and trolley marks ground out, not filled in",
        ar: "خدوش وآثار عربات مُزالة بالجلي لا مملوءة",
      },
      {
        en: "Gloss measured and logged at four points per room",
        ar: "لمعان مقاس ومسجل في أربع نقاط بكل غرفة",
      },
      {
        en: "No topical coating to peel in eighteen months",
        ar: "بدون طبقة سطحية تتقشر خلال ثمانية عشر شهرًا",
      },
    ],
  };

  return (
    <Section className="overflow-hidden border-t border-line">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={copy.eyebrow[locale]}
              title={copy.title[locale]}
              lead={copy.lead[locale]}
            />

            <ul className="mt-10 flex flex-col gap-4">
              {copy.points.map((p, i) => (
                <Reveal key={i} variant="up" delay={0.1 + i * 0.08} as="li">
                  <span className="flex items-start gap-3.5">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                      <Icon name="check" className="size-3.5" strokeWidth={2.6} />
                    </span>
                    <span className="leading-relaxed text-mist">{p[locale]}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal variant="scale" duration={0.9}>
            <BeforeAfter
              className="aspect-[4/3] w-full border border-line"
              beforeLabel={copy.before[locale]}
              afterLabel={copy.after[locale]}
              before={
                <Figure
                  slot={beforeMedia}
                  locale={locale}
                  className="absolute inset-0"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              }
              after={
                <Figure
                  slot={flagship.media}
                  locale={locale}
                  className="absolute inset-0"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              }
            />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
