import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/**
 * Services as a wall of photographs. The flagship gets a double-width tile;
 * the rest are equal. A name and a starting price is all the text there is.
 */
export function ServicesSection({
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
  const list = limit ? services.slice(0, limit) : services;
  // Let the flagship span two columns only when that still fills every row.
  const bigFirst = (list.length + 1) % 3 === 0;

  return (
    <Section className={className}>
      <div className="container-x">
        {heading && (
          <div className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow={t("sectionServices")} title={t("sectionServicesTitle")} />
            {limit && (
              <Button href={localePath(locale, "/services")} variant="outline" arrow>
                {t("viewAll")}
              </Button>
            )}
          </div>
        )}

        <RevealGroup as="ul" className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4" stagger={0.06}>
          {list.map((s, i) => (
            <RevealItem
              key={s.slug}
              as="li"
              className={cn(i === 0 && bigFirst && "sm:col-span-2")}
            >
              <PhotoTile
                slot={s.media}
                locale={locale}
                title={s.title[locale]}
                sub={s.short[locale]}
                badge={`${t("startingFrom")} ${s.startingFrom[locale]}`}
                href={localePath(locale, `/services/${s.slug}`)}
                aspect={i === 0 && bigFirst ? "aspect-[4/3] sm:aspect-[2/1]" : "aspect-[4/3]"}
                sizes={i === 0 && bigFirst ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
                titleSize={i === 0 && bigFirst ? "lg" : "md"}
                priority={i === 0}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
