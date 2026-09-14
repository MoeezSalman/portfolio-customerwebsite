import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { MediaSlot } from "@/lib/media";
import { services } from "@/content/services";
import { Figure } from "@/components/graphics/Figure";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The drag-to-compare proof. One big slider, a short heading, nothing else —
 * for a polishing company this single picture says more than any paragraph.
 */
export function ShineSection({
  locale,
  before,
  after,
  heading = true,
  className,
}: {
  locale: Locale;
  before?: MediaSlot;
  after?: MediaSlot;
  heading?: boolean;
  className?: string;
}) {
  const t = getDictionary(locale);
  const flagship = services[0];
  const b = before ?? flagship.before;
  const a = after ?? flagship.media;

  return (
    <Section className={className}>
      <div className="container-x">
        {heading && (
          <SectionHeading
            eyebrow={t("sectionShine")}
            title={t("sectionShineTitle")}
            lead={t("dragToCompare")}
            className="mb-8 md:mb-10"
          />
        )}

        <Reveal variant="scale" duration={0.9}>
          <BeforeAfter
            className="aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[21/10]"
            beforeLabel={t("before")}
            afterLabel={t("after")}
            before={
              <Figure slot={b} locale={locale} className="absolute inset-0" sizes="100vw" />
            }
            after={
              <Figure slot={a} locale={locale} className="absolute inset-0" sizes="100vw" />
            }
          />
        </Reveal>
      </div>
    </Section>
  );
}
