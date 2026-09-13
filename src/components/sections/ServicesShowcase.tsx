"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { cn, localizeNumber } from "@/lib/utils";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { Service } from "@/content/services";
import { Figure } from "@/components/graphics/Figure";
import { Icon, type IconName } from "@/components/graphics/Icon";

/**
 * Service index as an editorial list: hovering (or focusing) a line swaps the
 * photograph in the sticky pane beside it. On small screens the pane hides and
 * each line carries its own small thumbnail instead.
 */
export function ServicesShowcase({
  services,
  locale,
}: {
  services: Service[];
  locale: Locale;
}) {
  const t = getDictionary(locale);
  const [active, setActive] = useState(0);
  const current = services[active] ?? services[0];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      {/* Sticky preview */}
      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-32">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-3">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={current.slug}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Figure
                  slot={current.media}
                  locale={locale}
                  className="absolute inset-0"
                  sizes="40vw"
                />
              </motion.div>
            </AnimatePresence>

            <div className="scrim pointer-events-none absolute inset-x-0 bottom-0 p-7 pt-28">
              <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-white/70 uppercase">
                {localizeNumber(String(active + 1).padStart(2, "0"), locale)} /{" "}
                {localizeNumber(String(services.length).padStart(2, "0"), locale)}
              </p>
              <p className="mt-2 font-display text-[1.35rem] leading-snug font-bold text-white">
                {current.title[locale]}
              </p>
              <p className="mt-1.5 text-[0.85rem] text-white/75">
                {current.startingFrom[locale]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The list */}
      <ul className="lg:col-span-7">
        {services.map((s, i) => {
          const isActive = i === active;
          return (
            <li key={s.slug}>
              <Link
                href={localePath(locale, `/services/${s.slug}`)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={cn(
                  "group grid grid-cols-[4.5rem_1fr_auto] items-center gap-4 border-t border-line py-5 transition-colors duration-300 md:grid-cols-[3rem_1fr_auto] md:gap-6 md:py-6",
                  isActive ? "bg-black/[0.03]" : "hover:bg-black/[0.02]",
                )}
              >
                {/* Mobile thumbnail / desktop index */}
                <span className="relative aspect-square overflow-hidden rounded-lg md:hidden">
                  <Figure slot={s.media} locale={locale} className="absolute inset-0" sizes="72px" />
                </span>
                <span
                  className={cn(
                    "hidden font-display text-[0.8rem] font-semibold tabular-nums transition-colors md:block",
                    isActive ? "text-gold" : "text-fog",
                  )}
                >
                  {localizeNumber(String(i + 1).padStart(2, "0"), locale)}
                </span>

                <span className="min-w-0">
                  <span className="flex items-center gap-3">
                    <span
                      className={cn(
                        "font-display text-[1.1rem] leading-snug font-bold transition-colors duration-300 md:text-[1.4rem]",
                        isActive ? "text-chalk" : "text-mist group-hover:text-chalk",
                      )}
                    >
                      {s.title[locale]}
                    </span>
                    {s.flagship && (
                      <span className="hidden shrink-0 rounded-full border border-gold/50 px-2 py-0.5 text-[0.62rem] font-semibold tracking-wide text-gold uppercase sm:inline">
                        {locale === "ar" ? "الأساسية" : "Core"}
                      </span>
                    )}
                  </span>
                  <span
                    className={cn(
                      "mt-1.5 line-clamp-2 block text-[0.88rem] leading-relaxed text-fog transition-all duration-300 md:line-clamp-1",
                      isActive ? "md:opacity-100" : "md:opacity-70",
                    )}
                  >
                    {s.short[locale]}
                  </span>
                </span>

                <span
                  className={cn(
                    "grid size-10 shrink-0 place-items-center rounded-full border transition-all duration-300",
                    isActive
                      ? "border-chalk bg-chalk text-ink"
                      : "border-line-2 text-fog",
                  )}
                >
                  <Icon
                    name={(isActive ? "arrow" : s.icon) as IconName}
                    className={cn("size-4", isActive && "flip-rtl")}
                  />
                </span>
              </Link>
            </li>
          );
        })}
        <li className="border-t border-line" />
      </ul>
      <span className="sr-only">{t("viewService")}</span>
    </div>
  );
}
