import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { equipment, type Equipment } from "@/content/equipment";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/graphics/Figure";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/graphics/Icon";

/**
 * Machines as big pictures. Each row is a large photograph with a short
 * caption beside it; rows alternate sides so the page zig-zags down.
 */
export function EquipmentSection({
  locale,
  limit,
  heading = true,
  className,
}: {
  locale: Locale;
  limit?: number;
  heading?: boolean;
  className?: string;
}) {
  const t = getDictionary(locale);
  const list = limit ? equipment.slice(0, limit) : equipment;

  return (
    <Section className={className}>
      <div className="container-x">
        {heading && (
          <div className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow={t("sectionEquipment")} title={t("sectionEquipmentTitle")} />
            {limit && (
              <Button href={localePath(locale, "/equipment")} variant="outline" arrow>
                {t("viewAll")}
              </Button>
            )}
          </div>
        )}

        <ul className="flex flex-col gap-3 md:gap-4">
          {list.map((m, i) => (
            <MachineRow key={m.id} machine={m} locale={locale} flip={i % 2 === 1} />
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function MachineRow({
  machine,
  locale,
  flip = false,
}: {
  machine: Equipment;
  locale: Locale;
  flip?: boolean;
}) {
  const t = getDictionary(locale);

  return (
    <Reveal as="li" variant="up" amount={0.2}>
      <div
        className={cn(
          "grid overflow-hidden rounded-card bg-ink-2 md:grid-cols-12",
          flip && "md:[&>*:first-child]:order-2",
        )}
      >
        <div className="relative aspect-[16/10] md:col-span-8 md:aspect-auto md:min-h-[24rem]">
          <Figure
            slot={machine.media}
            locale={locale}
            sizes="(max-width: 768px) 100vw, 66vw"
            className="absolute inset-0"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 p-6 md:col-span-4 md:p-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold/12 px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.14em] text-gold-2 uppercase">
            <Icon name="sparkle" className="size-3.5" />
            {t("whatItDoes")}
          </span>
          <h3 className="font-display text-[1.5rem] leading-tight font-bold text-chalk md:text-[1.8rem]">
            {machine.name[locale]}
          </h3>
          <p className="text-[1rem] leading-relaxed text-mist">{machine.does[locale]}</p>
          <p className="flex items-center gap-2 text-[0.85rem] font-semibold text-aqua">
            <Icon name="check" className="size-4" strokeWidth={2.4} />
            {machine.fact[locale]}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
