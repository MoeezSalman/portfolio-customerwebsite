import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { equipment } from "@/content/equipment";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/PageHero";
import { Machine } from "@/components/graphics/Machine";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";

const FEATURED = [
  "planetary-grinder",
  "thermal-camera",
  "drain-camera",
  "hydro-jetter",
  "rotary-polisher",
  "duct-robot",
  "acoustic-detector",
  "mig-welder",
];

/**
 * The fleet as a moving technical strip: line-art, name, one headline spec,
 * divided by hairlines. It reads like a manifest, not a product grid.
 */
export function EquipmentSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const list = FEATURED.map((id) => equipment.find((e) => e.id === id)!).filter(Boolean);

  return (
    <Section id="equipment" className="border-y border-line bg-ink-2/50">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            className="lg:col-span-7"
            eyebrow={t("sectionEquipment")}
            title={t("sectionEquipmentTitle")}
            accent="aqua"
            lead={
              locale === "ar"
                ? "لا يمكن لأي حرفي مهما بلغت مهارته أن يعوّض معدة خاطئة. هذه هي الآلات التي تدخل عقارك، ولماذا تحديدًا هذه."
                : "No amount of skill compensates for the wrong machine. This is the kit that actually turns up at your property, and why each piece is on the truck."
            }
          />
          <Reveal variant="fade" className="lg:col-span-5 lg:justify-self-end">
            <Button href={localePath(locale, "/equipment")} variant="outline" arrow>
              {t("viewAll")}
            </Button>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 border-y border-line-2/60 py-2">
        <Marquee speed={70}>
          {list.map((item, i) => (
            <div
              key={item.id}
              className="flex w-[19rem] shrink-0 items-center gap-5 border-e border-line-2/60 px-7 py-5 sm:w-[22rem]"
            >
              <div className="size-24 shrink-0 text-mist">
                <Machine glyph={item.glyph} accent={i % 2 === 0 ? "gold" : "aqua"} />
              </div>
              <div className="min-w-0">
                <p className="line-clamp-2 font-display text-[0.98rem] leading-snug font-bold text-chalk">
                  {item.name[locale]}
                </p>
                <p className="mt-1 line-clamp-2 text-[0.8rem] leading-snug text-fog">
                  {item.role[locale]}
                </p>
                <p className="mt-2 text-[0.72rem] font-semibold tracking-wide text-gold uppercase">
                  {item.specs[0].label[locale]} · {item.specs[0].value[locale]}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </Section>
  );
}
