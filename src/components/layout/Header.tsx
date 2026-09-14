"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";
import { nav, site } from "@/content/site";
import { localePath, otherLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/graphics/Icon";

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // Pages whose masthead is a dark photograph mark it with data-hero-dark;
  // the bar then draws in white until the user scrolls off the hero.
  const [onDark, setOnDark] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 28));

  // Close the drawer whenever the route changes, and re-check the hero.
  useEffect(() => {
    setOpen(false);
    setOnDark(!!document.querySelector("[data-hero-dark]"));
  }, [pathname]);

  // Lock body scroll behind the drawer.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /** Same page, other language: swap only the leading locale segment. */
  const swapLocale = () => {
    const rest = pathname.split("/").slice(2).join("/");
    return localePath(otherLocale(locale), rest ? `/${rest}` : "/");
  };

  const isActive = (href: string) => {
    const full = localePath(locale, href);
    return href === "/" ? pathname === full : pathname.startsWith(full);
  };

  // Contact lives in the CTA button; About in the drawer and footer.
  const desktopNav = nav.filter((n) => n.href !== "/contact" && n.href !== "/about");
  const light = onDark && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-500 ease-[var(--ease-expo)]",
          scrolled ? "bg-ink/85 py-2.5 backdrop-blur-xl" : "py-5",
          light && "text-white",
        )}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Link
            href={localePath(locale, "/")}
            aria-label={site.name[locale]}
            className="shrink-0"
          >
            <Logo name={site.name[locale]} tagline={locale === "ar" ? "الرياض" : "Riyadh"} light={light} />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1">
            {desktopNav.map((item) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                className={cn(
                  "relative rounded-full px-2.5 py-2 text-[0.84rem] font-medium whitespace-nowrap transition-colors duration-300 xl:px-3.5 xl:text-[0.86rem]",
                  isActive(item.href)
                    ? light ? "text-gold-3" : "text-gold"
                    : light ? "text-white/80 hover:text-white" : "text-fog hover:text-chalk",
                )}
              >
                {item.label[locale]}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className={cn("absolute inset-0 -z-10 rounded-full", light ? "bg-white/12" : "bg-gold/10 ring-1 ring-gold/25")}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              href={swapLocale()}
              aria-label={t("switchLangAria")}
              className={cn(
                "hidden h-10 items-center gap-2 rounded-full border px-4 text-[0.82rem] font-semibold transition-colors duration-300 sm:inline-flex",
                light
                  ? "border-white/30 text-white hover:bg-white/15"
                  : "border-line-2 text-mist hover:border-gold/60 hover:text-gold",
              )}
            >
              <span className="size-1.5 rounded-full bg-aqua" />
              {t("switchLang")}
            </Link>

            <Button
              href={localePath(locale, "/quote")}
              size="sm"
              className={cn("hidden md:inline-flex", light && "bg-gold text-chalk hover:bg-white")}
              arrow
            >
              {t("getQuoteShort")}
            </Button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t("menu")}
              className={cn(
                "grid size-10 place-items-center rounded-full border transition-colors lg:hidden",
                light ? "border-white/30 text-white" : "border-line-2 text-chalk hover:border-gold/60 hover:text-gold",
              )}
            >
              <Icon name="menu" className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <MobileDrawer
            locale={locale}
            onClose={() => setOpen(false)}
            swapHref={swapLocale()}
            isActive={isActive}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function MobileDrawer({
  locale,
  onClose,
  swapHref,
  isActive,
}: {
  locale: Locale;
  onClose: () => void;
  swapHref: string;
  isActive: (href: string) => boolean;
}) {
  const t = getDictionary(locale);

  return (
    <motion.div
      className="fixed inset-0 z-[110] lg:hidden"
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <motion.div
        className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />

      <motion.div
        className="absolute inset-y-0 end-0 flex w-full max-w-sm flex-col bg-ink-2"
        variants={{
          hidden: { x: "100%" },
          show: { x: 0 },
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <Logo name={site.name[locale]} />
          <button
            type="button"
            onClick={onClose}
            aria-label={t("close")}
            className="grid size-10 place-items-center rounded-full border border-line-2 text-chalk"
          >
            <Icon name="close" className="size-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="flex flex-col">
            {nav.map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.14 + i * 0.045,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={localePath(locale, item.href)}
                  className={cn(
                    "flex items-center justify-between rounded-card px-4 py-3.5 font-display text-xl font-semibold transition-colors",
                    isActive(item.href) ? "bg-gold/15 text-gold" : "text-chalk hover:bg-black/[0.04]",
                  )}
                >
                  {item.label[locale]}
                  <Icon name="chevron" className="flip-rtl size-4 text-fog" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 px-6 py-6">
          <Button href={localePath(locale, "/quote")} size="md" arrow>
            {t("getQuote")}
          </Button>
          <div className="flex gap-3">
            <Button
              href={`tel:${site.phoneIntl}`}
              variant="outline"
              size="md"
              icon="phone"
              className="flex-1"
              external
            >
              {site.phone}
            </Button>
            <Button href={swapHref} variant="outline" size="md" className="shrink-0">
              {t("switchLang")}
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
