import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Syne, Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css";

import { dirOf, isLocale, locales, type Locale } from "@/i18n/config";
import { site } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  FloatingActions,
  ScrollProgress,
} from "@/components/layout/FloatingActions";
import { getDictionary } from "@/i18n/dictionaries";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const title = `${site.name[locale]} — ${site.tagline[locale]}`;

  return {
    metadataBase: new URL("https://shinepro.work"),
    title: {
      default: title,
      template: `%s · ${site.name[locale]}`,
    },
    description: site.description[locale],
    alternates: {
      canonical: `/${locale}`,
      languages: { ar: "/ar", en: "/en", "x-default": "/ar" },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_SA",
      siteName: site.name[locale],
      title,
      description: site.description[locale],
    },
    twitter: { card: "summary_large_image", title, description: site.description[locale] },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const l = locale as Locale;
  const t = getDictionary(l);

  return (
    <html
      lang={l}
      dir={dirOf(l)}
      className={`${syne.variable} ${inter.variable} ${arabic.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:font-semibold focus:text-ink"
        >
          {t("skipToContent")}
        </a>

        <ScrollProgress />

        <Header locale={l} />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer locale={l} />
        <FloatingActions locale={l} />

        <OrganizationSchema locale={l} />
      </body>
    </html>
  );
}

/** LocalBusiness structured data — this is a local-search-driven business. */
function OrganizationSchema({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.legalName[locale],
    alternateName: site.name[locale],
    description: site.description[locale],
    telephone: site.phoneIntl,
    email: site.email,
    url: `https://shinepro.work/${locale}`,
    areaServed: { "@type": "City", name: locale === "ar" ? "الرياض" : "Riyadh" },
    address: {
      "@type": "PostalAddress",
      addressLocality: locale === "ar" ? "الرياض" : "Riyadh",
      addressCountry: "SA",
    },
    openingHours: "Sa-Th 08:00-23:00",
  };

  return (
    <script
      type="application/ld+json"
      // Static, author-controlled object — no user input reaches this string.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
