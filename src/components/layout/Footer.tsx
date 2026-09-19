import Link from "next/link";
import { nav, site, waLink } from "@/content/site";
import { services } from "@/content/services";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Logo } from "./Logo";
import { Icon, type IconName } from "@/components/graphics/Icon";
import { Marquee } from "@/components/motion/Marquee";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const year = new Date().getFullYear();
  const companyLinks = nav.filter((n) =>
    ["/about", "/projects", "/equipment", "/areas", "/blog", "/faq"].includes(
      n.href,
    ),
  );

  return (
    <footer className="relative bg-ink-2">
      {/* Oversized wordmark ribbon. */}
      <div className="py-8">
        <Marquee speed={44}>
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-8 px-8 font-display text-[clamp(2rem,5vw,3.6rem)] font-bold tracking-tight text-line-2 select-none"
            >
              {site.name[locale]}
              <span className="text-gold/40">◆</span>
              <span className="text-line-2">{site.tagline[locale]}</span>
              <span className="text-aqua/30">◆</span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container-x grid gap-10 py-12 md:grid-cols-2 md:py-14 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Logo size="lg" />
          <p className="mt-6 max-w-sm leading-relaxed text-fog">{t("footerBlurb")}</p>
          <div className="mt-7 flex gap-2.5">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-full bg-ink-3 text-mist transition-colors duration-300 hover:bg-gold hover:text-chalk"
              >
                <Icon name={s.icon as IconName} className="size-[1.1rem]" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4">
          <FooterHeading>{t("footerServices")}</FooterHeading>
          <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <FooterLink href={localePath(locale, `/services/${s.slug}`)}>
                  {s.title[locale]}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <FooterHeading>{t("footerCompany")}</FooterHeading>
          <ul className="mt-5 flex flex-col gap-2.5">
            {companyLinks.map((n) => (
              <li key={n.href}>
                <FooterLink href={localePath(locale, n.href)}>{n.label[locale]}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <FooterHeading>{t("footerContact")}</FooterHeading>
          <ul className="mt-5 flex flex-col gap-4 text-sm [&_li]:break-normal">
            <li>
              <a
                href={`tel:${site.phoneIntl}`}
                className="flex items-center gap-2.5 text-chalk transition-colors hover:text-gold"
                dir="ltr"
              >
                <Icon name="phone" className="size-4 text-gold" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={waLink(undefined, locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-chalk transition-colors hover:text-aqua"
              >
                <Icon name="whatsapp" className="size-4 text-aqua" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-2.5 text-fog transition-colors hover:text-chalk"
              >
                <Icon name="mail" className="mt-0.5 size-4 shrink-0 text-gold" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-fog">
              <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-gold" />
              {site.address[locale]}
            </li>
            <li className="flex items-start gap-2.5 text-fog">
              <Icon name="clock" className="mt-0.5 size-4 shrink-0 text-gold" />
              {site.hours[locale]}
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x flex flex-col gap-3 py-6 text-[0.8rem] text-fog sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.legalName[locale]}. {t("rights")}
        </p>
        <p>{t("builtBy")}</p>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[0.7rem] font-semibold tracking-[0.2em] text-gold uppercase">
      {children}
    </h2>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-fog transition-colors duration-300 hover:text-chalk"
    >
      {children}
    </Link>
  );
}
