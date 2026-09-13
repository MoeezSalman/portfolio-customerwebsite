import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site, waLink } from "@/content/site";
import { services } from "@/content/services";
import type { MediaSlot } from "@/lib/media";
import { Section } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/graphics/Figure";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/graphics/Icon";

/**
 * Closing call to action: a full-bleed photograph with a dark scrim on the
 * copy side. The one deliberately dark moment on an otherwise light page,
 * so it reads as the end of the story.
 */
export function CtaSection({
  locale,
  media,
}: {
  locale: Locale;
  /** Defaults to the flagship service photo. */
  media?: MediaSlot;
}) {
  const t = getDictionary(locale);
  const photo = media ?? services[0].media;

  const copy = {
    title: {
      en: "Send us a photo. Get a real number back.",
      ar: "أرسل لنا صورة. واحصل على رقم حقيقي.",
    },
    lead: {
      en: "No call centre, no six-step form. A photo on WhatsApp is usually enough for an indicative price the same day.",
      ar: "بدون مركز اتصال وبدون نموذج من ست خطوات. صورة واحدة على واتساب تكفي عادةً لسعر تقريبي في نفس اليوم.",
    },
  };

  return (
    <Section className="pb-0 md:pb-0">
      <div className="relative min-h-[34rem] overflow-hidden md:min-h-[38rem]">
        <Figure
          slot={photo}
          locale={locale}
          className="absolute inset-0"
          sizes="100vw"
        />
        {/* Scrim: solid on the start side, clearing toward the end side. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14110c]/92 via-[#14110c]/70 to-[#14110c]/25 rtl:bg-gradient-to-l" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#14110c]/80 to-transparent" />

        <div className="container-x relative flex min-h-[34rem] items-center py-20 md:min-h-[38rem]">
          <div className="max-w-2xl">
            <Reveal variant="fade" duration={0.5}>
              <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.22em] text-gold-3 uppercase">
                <span className="h-px w-8 bg-gold-3/70" />
                {t("getQuoteShort")}
              </span>
            </Reveal>

            <SplitText
              as="h2"
              text={copy.title[locale]}
              className="mt-5 font-display text-[clamp(2rem,4.8vw,3.6rem)] leading-[1.08] font-bold tracking-tight text-white"
            />

            <Reveal variant="up" delay={0.14}>
              <p className="mt-6 max-w-xl leading-relaxed text-white/75">
                {copy.lead[locale]}
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.24}>
              <div className="mt-10 flex flex-wrap gap-3.5">
                <Button
                  href={waLink(
                    {
                      en: `Hello ${site.name.en}, I'd like a quote for:`,
                      ar: `السلام عليكم ${site.name.ar}، أرغب في عرض سعر لـ:`,
                    },
                    locale,
                  )}
                  variant="aqua"
                  size="lg"
                  icon="whatsapp"
                  external
                >
                  {t("whatsapp")}
                </Button>
                <Button
                  href={localePath(locale, "/quote")}
                  size="lg"
                  arrow
                  className="!bg-white !text-chalk hover:!bg-gold-3"
                >
                  {t("bookVisit")}
                </Button>
              </div>
            </Reveal>

            <Reveal variant="fade" delay={0.34}>
              <a
                href={`tel:${site.phoneIntl}`}
                className="mt-10 inline-flex items-center gap-3 text-white/70 transition-colors hover:text-white"
              >
                <Icon name="phone" className="size-4 text-gold-3" />
                <span className="text-[0.78rem] tracking-[0.14em] uppercase">
                  {t("emergencyLine")}
                </span>
                <span dir="ltr" className="font-display font-semibold text-white">
                  {site.phone}
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
