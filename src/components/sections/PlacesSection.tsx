import { type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/i18n/dictionaries";
import { places } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/**
 * "Where we work" — six wide photographs in a snap-scrolling strip. On a
 * phone you swipe; on a desktop it becomes a three-column wall.
 */
export function PlacesSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  // When the count leaves one tile alone on the last row, that tile becomes a
  // full-width banner instead of an orphan.
  const bannerLast = places.length % 3 === 1;

  return (
    <Section>
      <div className="container-x">
        <SectionHeading
          eyebrow={t("sectionPlaces")}
          title={t("sectionPlacesTitle")}
          className="mb-8 md:mb-10"
        />
      </div>

      <RevealGroup
        as="ul"
        className="container-x flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-4 md:overflow-visible [&::-webkit-scrollbar]:hidden"
        stagger={0.06}
      >
        {places.map((p, i) => {
          const banner = bannerLast && i === places.length - 1;
          return (
          <RevealItem
            key={p.id}
            as="li"
            className={cn("w-[78vw] shrink-0 snap-start sm:w-[52vw] md:w-auto", banner && "md:col-span-3")}
          >
            <PhotoTile
              slot={p.media}
              locale={locale}
              title={p.title[locale]}
              aspect={banner ? "aspect-[16/11] md:aspect-[21/8]" : "aspect-[16/11]"}
              sizes={banner ? "(max-width: 768px) 80vw, 100vw" : "(max-width: 768px) 80vw, 33vw"}
              titleSize={banner ? "lg" : "md"}
            />
          </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
