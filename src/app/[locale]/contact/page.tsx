import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site, waLink } from "@/content/site";
import { photo } from "@/lib/media";
import { Crumbs } from "@/components/ui/Section";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Figure } from "@/components/graphics/Figure";
import { Parallax } from "@/components/motion/Parallax";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";
import { Icon, type IconName } from "@/components/graphics/Icon";
import { FaqSection } from "@/components/sections/FaqSection";
import { PlacesSection } from "@/components/sections/PlacesSection";

const backdrop = photo("hallway-warm", {
  en: "A warm hallway with a glossy marble floor",
  ar: "ممر دافئ بأرضية رخام لامعة",
});

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "تواصل معنا" : "Contact",
    description: ar
      ? `تواصل مع ${site.name.ar} في الرياض — هاتف ${site.phone}، واتساب، وبريد إلكتروني.`
      : `Get in touch with ${site.name.en} in Riyadh — phone ${site.phone}, WhatsApp and email.`,
    alternates: { canonical: `/${locale}/contact` },
  };
}

/**
 * Photo-form hero — the whole contact page is one photograph with the form
 * sitting on it in a frosted panel. Title and channels on the start side.
 */
export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  const channels: { icon: IconName; label: string; value: string; href: string; external?: boolean }[] = [
    { icon: "phone", label: t("callUs"), value: site.phone, href: `tel:${site.phoneIntl}` },
    { icon: "whatsapp", label: "WhatsApp", value: site.phone, href: waLink(undefined, l), external: true },
    { icon: "mail", label: t("emailUs"), value: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <>
      <section data-hero-dark className="relative overflow-hidden bg-chalk">
        <Parallax className="absolute inset-0" strength={4}>
          <Figure slot={backdrop} locale={l} priority sizes="100vw" className="absolute inset-0" />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-[#14110c]/85 via-[#14110c]/55 to-[#14110c]/35 rtl:bg-gradient-to-l" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#14110c]/70 to-transparent" />

        <div className="container-x relative pt-28 pb-10 md:pt-32 md:pb-14">
          <Reveal variant="fade" duration={0.5}>
            <Crumbs locale={l} crumbs={[{ label: l === "ar" ? "تواصل معنا" : "Contact" }]} light />
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="text-white lg:col-span-5">
              <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.22em] text-gold-3 uppercase">
                <span className="h-px w-8 bg-gold-3/70" />
                {t("footerContact")}
              </span>
              <SplitText
                as="h1"
                text={l === "ar" ? "تحدّث إلينا مباشرة" : "Talk to us directly"}
                className="mt-4 max-w-[14ch] font-display text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1] font-bold tracking-tight"
              />
              <Reveal variant="up" delay={0.16}>
                <p className="mt-6 max-w-[42ch] text-[1.05rem] leading-relaxed text-white/80">
                  {l === "ar"
                    ? "لا مركز اتصال. رسالتك تصل إلى الفريق الذي سيلمّع أرضيتك."
                    : "No call centre. Your message goes to the team that will polish your floor."}
                </p>
              </Reveal>

              <ul className="mt-8 flex flex-col gap-2.5">
                {channels.map((c, i) => (
                  <Reveal key={c.label} as="li" variant="up" delay={0.24 + i * 0.07}>
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-card border border-white/15 bg-white/10 p-3 pe-5 backdrop-blur transition-colors hover:bg-white/20"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gold text-chalk">
                        <Icon name={c.icon} className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.68rem] tracking-[0.14em] text-white/65 uppercase">{c.label}</span>
                        <span dir="ltr" className="mt-0.5 block truncate font-display text-[1.05rem] font-semibold">
                          {c.value}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                ))}
              </ul>

              <Reveal variant="fade" delay={0.5}>
                <dl className="mt-8 grid gap-4 text-[0.9rem] text-white/80 sm:grid-cols-2">
                  <div className="flex items-start gap-2.5">
                    <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-gold-3" />
                    <dd>{site.address[l]}</dd>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Icon name="clock" className="mt-0.5 size-4 shrink-0 text-gold-3" />
                    <dd>{site.hours[l]}</dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Suspense fallback={<div className="h-[36rem] animate-pulse rounded-card bg-white/20" />}>
                <QuoteForm locale={l} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <PlacesSection locale={l} />
      <FaqSection locale={l} limit={6} showAll={false} />
    </>
  );
}
