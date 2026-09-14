"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { places, site, stats } from "@/content/site";
import { services } from "@/content/services";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/motion/Counter";
import { SplitText } from "@/components/motion/SplitText";
import { Parallax } from "@/components/motion/Parallax";
import { Figure } from "@/components/graphics/Figure";
import { Icon } from "@/components/graphics/Icon";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Home masthead: one huge photograph of a shining floor, a two-line
 * headline on top of it, and three small photo links into the places we
 * work. The photo drifts slowly on scroll. Nothing else competes with it.
 */
export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const cover = services[0].gallery[2]; // the grand lobby
  const quick = places.slice(0, 3);

  return (
    <section data-hero-dark className="relative flex min-h-[100svh] flex-col overflow-hidden bg-chalk">
      {/* Photo */}
      <Parallax className="absolute inset-0" strength={5}>
        <Figure
          slot={cover}
          locale={locale}
          priority
          sizes="100vw"
          className="absolute inset-0"
        />
      </Parallax>
      {/* Scrims: dark at the bottom for the headline, light at the top for the nav. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#14110c]/92 via-[#14110c]/40 to-[#14110c]/20" />
      {/* Extra darkening under the fixed header so the nav stays readable. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#14110c]/70 to-transparent" />

      <div className="container-x relative flex flex-1 flex-col justify-end pt-32 pb-24 md:pb-10">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          {/* Headline */}
          <div className="lg:col-span-8">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[0.72rem] font-semibold tracking-[0.16em] text-white uppercase backdrop-blur"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold-3 opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-gold-3" />
              </span>
              {t("heroBadge")}
            </motion.span>

            <h1 className="mt-6 font-display text-[clamp(3rem,9vw,7rem)] leading-[0.95] font-bold tracking-tight text-white">
              <SplitText text={t("heroLine1")} className="block" />
              <SplitText
                text={t("heroLine2")}
                className="block"
                wordClassName="text-gradient-gold"
                delay={0.18}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease }}
              className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-white/85 md:text-[1.15rem]"
            >
              {site.description[locale]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8, ease }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button href={localePath(locale, "/quote")} size="lg" arrow className="bg-gold text-chalk hover:bg-white">
                {t("getQuote")}
              </Button>
              <Button
                href={localePath(locale, "/projects")}
                size="lg"
                className="border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-chalk"
              >
                {t("seeOurWork")}
              </Button>
            </motion.div>
          </div>

          {/* Three quick photo links */}
          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9, ease }}
            className="hidden grid-cols-3 gap-2.5 sm:grid lg:col-span-4 lg:grid-cols-1"
          >
            {quick.map((p) => (
              <li key={p.id}>
                <Link
                  href={localePath(locale, `/services#${p.id}`)}
                  className="group flex items-center gap-3 rounded-card border border-white/15 bg-white/10 p-2 backdrop-blur transition-colors duration-300 hover:bg-white/20"
                >
                  <Figure
                    slot={p.media}
                    locale={locale}
                    sizes="120px"
                    className="size-14 shrink-0 rounded-[0.9rem] md:size-16"
                    imgClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="hidden min-w-0 flex-1 font-display text-[0.95rem] font-semibold text-white sm:block">
                    {p.title[locale]}
                  </span>
                  <Icon name="arrow" className="flip-rtl me-2 hidden size-4 text-white/70 lg:block" />
                </Link>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Stats bar */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.9, ease }}
          className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label.en}
              className="rounded-card border border-white/15 bg-white/10 px-5 py-4 backdrop-blur"
            >
              <dd className="font-display text-[1.7rem] leading-none font-bold whitespace-nowrap text-white">
                <Counter to={s.value} locale={locale} suffix={s.suffix[locale]} />
              </dd>
              <dt className="mt-1.5 text-[0.78rem] leading-tight text-white/75">{s.label[locale]}</dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
