import { type Locale } from "@/i18n/config";
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
        {places.map((p) => (
          <RevealItem key={p.id} as="li" className="w-[78vw] shrink-0 snap-start sm:w-[52vw] md:w-auto">
            <PhotoTile
              slot={p.media}
              locale={locale}
              title={p.title[locale]}
              aspect="aspect-[16/11]"
              sizes="(max-width: 768px) 80vw, 33vw"
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
