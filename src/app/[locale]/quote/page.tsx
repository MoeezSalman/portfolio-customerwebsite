import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { guarantees, processSteps } from "@/content/site";
import { localizeNumber } from "@/lib/utils";
import { Section, Crumbs } from "@/components/ui/Section";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Figure } from "@/components/graphics/Figure";
import { Icon, type IconName } from "@/components/graphics/Icon";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ShineSection } from "@/components/sections/ShineSection";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/quote">): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "اطلب سعرًا" : "Get a price",
    description: ar
      ? "أرسل صورة أرضيتك واحصل على سعر في نفس اليوم — زيارة مجانية وسعر ثابت قبل البدء."
      : "Send a photo of your floor and get a price the same day — free visit and a fixed price before we start.",
    alternates: { canonical: `/${locale}/quote` },
  };
}

/**
 * Steps hero — the four "how it works" photographs run across the top as
 * a strip, then the form. It reads as: here is what happens, now start.
 */
export default async function QuotePage({ params }: PageProps<"/[locale]/quote">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  return (
    <>
      <section className="relative overflow-hidden pt-24 md:pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="aurora" />
        </div>
        <div className="container-x relative">
          <Reveal variant="fade" duration={0.5}>
            <Crumbs locale={l} crumbs={[{ label: t("getQuoteShort") }]} />
          </Reveal>

          <div className="mt-8 flex flex-col gap-4 md:mt-10 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
                <span className="h-px w-8 bg-gold/60" />
                {t("getQuoteShort")}
              </span>
              <SplitText
                as="h1"
                text={t("contactTitle")}
                className="mt-4 font-display text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1] font-bold tracking-tight text-chalk"
              />
            </div>
            <Reveal variant="up" delay={0.16}>
              <p className="max-w-[40ch] leading-relaxed text-fog md:text-end">{t("contactLead")}</p>
            </Reveal>
          </div>

          <RevealGroup as="ol" className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:gap-4 lg:grid-cols-4" stagger={0.08}>
            {processSteps.map((step, i) => (
              <RevealItem key={step.title.en} as="li" className="relative aspect-[4/3] overflow-hidden rounded-card bg-ink-2 lg:aspect-[16/11]">
                <Figure slot={step.media} locale={l} priority={i < 2} sizes="(max-width: 1024px) 50vw, 25vw" className="absolute inset-0" />
                <span className="absolute top-3 start-3 grid size-9 place-items-center rounded-full bg-gold font-display text-[0.95rem] font-bold text-chalk">
                  {localizeNumber(i + 1, l)}
                </span>
                <div className="scrim absolute inset-x-0 bottom-0 p-4 pt-12">
                  <p className="font-display text-[1rem] leading-tight font-bold text-white md:text-[1.15rem]">{step.title[l]}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Section>
        <div className="container-x grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <Suspense fallback={<div className="h-[36rem] animate-pulse rounded-card bg-ink-2" />}>
              <QuoteForm locale={l} />
            </Suspense>
          </div>
          <RevealGroup as="ul" className="grid gap-3 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1" stagger={0.08}>
            {guarantees.map((g) => (
              <RevealItem key={g.title.en} as="li" className="flex items-start gap-4 rounded-card bg-ink-2/70 p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gold text-chalk">
                  <Icon name={g.icon as IconName} className="size-5" strokeWidth={1.9} />
                </span>
                <span>
                  <span className="block font-display text-[1.02rem] font-bold text-chalk">{g.title[l]}</span>
                  <span className="mt-1 block text-[0.88rem] leading-relaxed text-fog">{g.body[l]}</span>
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <ShineSection locale={l} className="pt-0 md:pt-0" />
    </>
  );
}
