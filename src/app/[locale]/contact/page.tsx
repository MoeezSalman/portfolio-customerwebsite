import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site, waLink } from "@/content/site";
import { coverageNote } from "@/content/areas";
import { getService } from "@/content/services";
import { PageHero, Section } from "@/components/ui/PageHero";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Icon, type IconName } from "@/components/graphics/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { FaqSection } from "@/components/sections/FaqSection";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    title: ar ? "تواصل معنا" : "Contact",
    description: ar
      ? `تواصل مع ${site.name.ar} في الرياض — هاتف ${site.phone}، واتساب، وبريد إلكتروني. خط طوارئ على مدار الساعة.`
      : `Get in touch with ${site.name.en} in Riyadh — phone ${site.phone}, WhatsApp and email. Emergency line answered 24/7.`,
    alternates: { canonical: `/${locale}/contact` },
  };
}

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  const channels: {
    icon: IconName;
    label: string;
    value: string;
    href: string;
    external?: boolean;
    dir?: "ltr";
  }[] = [
    { icon: "phone", label: t("callUs"), value: site.phone, href: `tel:${site.phoneIntl}`, dir: "ltr" },
    { icon: "whatsapp", label: "WhatsApp", value: site.phone, href: waLink(undefined, l), external: true, dir: "ltr" },
    { icon: "mail", label: t("emailUs"), value: site.email, href: `mailto:${site.email}` },
  ];

  const facts = [
    { icon: "pin" as const, label: t("visitUs"), value: site.address[l] },
    { icon: "clock" as const, label: t("openingHours"), value: site.hours[l] },
    { icon: "radar" as const, label: t("sectionCoverage"), value: coverageNote[l] },
  ];

  return (
    <>
      <PageHero
        locale={l}
        eyebrow={t("footerContact")}
        title={l === "ar" ? "تحدّث إلى إنسان" : "Talk to a human"}
        crumbs={[{ label: l === "ar" ? "تواصل معنا" : "Contact" }]}
        media={getService("annual-contracts")!.media}
        caption={t("emergencyLine")}
        lead={
          l === "ar"
            ? "لا مركز اتصال ولا قوائم انتظار. تصلك الرسالة إلى الفريق الذي سينفّذ العمل فعليًا."
            : "No call centre, no hold queue. Your message reaches the team that will actually do the work."
        }
      />

      {/* Channels — one ruled row, three columns */}
      <Section className="py-0 md:py-0">
        <div className="container-x grid divide-y divide-line border-b border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:rtl:divide-x-reverse">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-5 py-7 transition-colors hover:bg-black/[0.025] sm:px-6 sm:first:ps-0"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line-2 text-chalk transition-all group-hover:border-chalk group-hover:bg-chalk group-hover:text-ink">
                <Icon name={c.icon} className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.7rem] tracking-[0.14em] text-fog uppercase">
                  {c.label}
                </span>
                <span
                  dir={c.dir}
                  className="mt-1 block truncate font-display text-[1.05rem] font-semibold text-chalk"
                >
                  {c.value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Suspense
              fallback={<div className="h-[36rem] animate-pulse rounded-2xl bg-ink-2" />}
            >
              <QuoteForm locale={l} />
            </Suspense>
          </div>

          <aside className="lg:col-span-5">
            <dl>
              {facts.map((f, i) => (
                <Reveal key={f.label} variant="up" delay={i * 0.08} as="div">
                  <div className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-6">
                    <Icon name={f.icon} className="mt-0.5 size-5 text-gold" />
                    <div>
                      <dt className="text-[0.7rem] tracking-[0.14em] text-fog uppercase">
                        {f.label}
                      </dt>
                      <dd className="mt-2 leading-relaxed text-mist">{f.value}</dd>
                    </div>
                  </div>
                </Reveal>
              ))}
            </dl>

            <Reveal variant="up" delay={0.3}>
              <div className="flex gap-2.5 border-t border-line pt-6">
                {site.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid size-11 place-items-center rounded-full border border-line-2 text-fog transition-all duration-300 hover:border-chalk hover:bg-chalk hover:text-ink"
                  >
                    <Icon name={s.icon as IconName} className="size-[1.15rem]" />
                  </a>
                ))}
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <FaqSection locale={l} limit={6} />
    </>
  );
}
