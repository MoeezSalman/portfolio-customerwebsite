import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site, waLink } from "@/content/site";
import { services } from "@/content/services";
import type { MediaSlot } from "@/lib/media";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/graphics/Figure";
import { Parallax } from "@/components/motion/Parallax";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/graphics/Icon";

/**
 * Closing call to action: a full-bleed photograph with a dark scrim on the
 * copy side. The one deliberately dark moment on an otherwise light page.
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
  const photo = media ?? services[0].gallery[1];

  const copy = {
    title: { en: "Send a photo. Get a price.", ar: "أرسل صورة. واحصل على سعر." },
    lead: {
      en: "One photo on WhatsApp is enough. We reply the same day.",
      ar: "صورة واحدة على واتساب تكفي. نرد في نفس اليوم.",
    },
  };

  return (
    <section className="relative min-h-[32rem] overflow-hidden md:min-h-[36rem]">
      <Parallax className="absolute inset-0" strength={5}>
        <Figure slot={photo} locale={locale} className="absolute inset-0" sizes="100vw" />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-r from-[#14110c]/90 via-[#14110c]/60 to-[#14110c]/20 rtl:bg-gradient-to-l" />

      <div className="container-x relative flex min-h-[32rem] items-center py-16 md:min-h-[36rem]">
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
            className="mt-5 font-display text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[1.05] font-bold tracking-tight text-white"
          />

          <Reveal variant="up" delay={0.14}>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-white/80">{copy.lead[locale]}</p>
          </Reveal>

          <Reveal variant="up" delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={waLink(
                  {
                    en: `Hello ${site.name.en}, I'd like a price for my floor:`,
                    ar: `السلام عليكم ${site.name.ar}، أرغب في سعر لأرضيتي:`,
                  },
                  locale,
                )}
                variant="aqua"
                size="lg"
                icon="whatsapp"
                external
              >
                {t("sendPhoto")}
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
              className="mt-8 inline-flex items-center gap-3 text-white/70 transition-colors hover:text-white"
            >
              <Icon name="phone" className="size-4 text-gold-3" />
              <span className="text-[0.78rem] tracking-[0.14em] uppercase">{t("callNow")}</span>
              <span dir="ltr" className="font-display font-semibold text-white">
                {site.phone}
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
