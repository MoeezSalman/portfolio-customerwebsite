"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn, localizeNumber } from "@/lib/utils";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { plans } from "@/content/packages";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/graphics/Icon";

/**
 * Three plans as a comparison table: columns divided by rules, the featured
 * plan marked with a gold bar rather than a raised box.
 */
export function PricingTable({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [yearly, setYearly] = useState(false);

  return (
    <>
      {/* Billing toggle */}
      <div className="flex flex-col items-center gap-4">
        <div className="inline-flex rounded-full border border-line-2 p-1">
          {(["monthly", "yearly"] as const).map((mode) => {
            const on = (mode === "yearly") === yearly;
            return (
              <button
                key={mode}
                type="button"
                onClick={() => setYearly(mode === "yearly")}
                aria-pressed={on}
                className={cn(
                  "relative rounded-full px-6 py-2.5 text-[0.85rem] font-semibold transition-colors duration-300",
                  on ? "text-ink" : "text-fog hover:text-chalk",
                )}
              >
                {on && (
                  <motion.span
                    layoutId="billing-pill"
                    className="absolute inset-0 rounded-full bg-chalk"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{t(mode)}</span>
              </button>
            );
          })}
        </div>
        <p className="text-[0.8rem] text-aqua">{t("saveWithYearly")}</p>
      </div>

      <div className="mt-14 grid border-y border-line lg:grid-cols-3 lg:divide-x lg:divide-line lg:rtl:divide-x-reverse">
        {plans.map((plan) => {
          const price = yearly ? plan.yearly : plan.monthly;
          const unit = yearly ? t("perYear") : t("perMonth");

          return (
            <article
              key={plan.id}
              className={cn(
                "relative flex flex-col px-0 py-10 max-lg:border-b max-lg:border-line max-lg:last:border-b-0 lg:px-9",
                plan.featured && "bg-ink-2/60",
              )}
            >
              {/* Featured marker: a bar along the top edge */}
              {plan.featured && (
                <span className="absolute inset-x-0 top-0 h-1 bg-gold" aria-hidden />
              )}

              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-[1.35rem] font-bold text-chalk">
                  {plan.name[locale]}
                </h3>
                {plan.featured && (
                  <span className="rounded-full bg-gold px-3 py-1 text-[0.66rem] font-bold tracking-wide text-white uppercase">
                    {t("mostPopular")}
                  </span>
                )}
              </div>
              <p className="mt-1 text-[0.88rem] text-gold">{plan.tagline[locale]}</p>

              <p className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-[2.8rem] leading-none font-bold text-chalk">
                  {localizeNumber(price.toLocaleString("en-US"), locale)}
                </span>
                <span className="text-[0.95rem] text-fog">
                  {locale === "ar" ? "ر.س" : "SAR"}
                  {unit}
                </span>
              </p>

              <p className="mt-6 border-t border-line pt-5 text-[0.86rem] leading-relaxed text-fog">
                <span className="font-semibold text-mist">{t("bestFor")}: </span>
                {plan.bestFor[locale]}
              </p>

              <ul className="mt-7 flex flex-col gap-3">
                {plan.includes[locale].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icon
                      name="check"
                      className="mt-1 size-3.5 shrink-0 text-aqua"
                      strokeWidth={3}
                    />
                    <span className="text-[0.9rem] leading-relaxed text-mist">{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-col gap-2.5 border-t border-line pt-6">
                {plan.excludes[locale].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-fog">
                    <Icon name="close" className="mt-1 size-3 shrink-0" strokeWidth={3} />
                    <span className="text-[0.84rem] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-9">
                <Button
                  href={localePath(locale, `/quote?plan=${plan.id}`)}
                  variant={plan.featured ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                  arrow
                >
                  {t("choosePlan")}
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
