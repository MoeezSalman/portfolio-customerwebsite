"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site, stats } from "@/content/site";
import { services } from "@/content/services";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/motion/Counter";
import { SplitText } from "@/components/motion/SplitText";
import { Figure } from "@/components/graphics/Figure";
import { Icon } from "@/components/graphics/Icon";

// WebGL is heavy and purely decorative — never block first paint on it.
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

/**
 * Home masthead: copy on the start side, a tall photograph on the end side
 * that drifts on scroll, and the reflective-floor WebGL scene behind both.
 * The scene only renders while the hero is on screen.
 */
export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [reduced, setReduced] = useState(false);
  const [show3d, setShow3d] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const onScreen = useInView(ref, { amount: 0.05 });
  const flagship = services[0];
  const secondary = services[1];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    // Hold the canvas back until the browser is idle so LCP lands on the text.
    // `typeof` rather than `in` — the latter narrows `window` itself to never.
    const hasIdle = typeof window.requestIdleCallback === "function";
    const start = () => setShow3d(true);
    const handle: number = hasIdle
      ? window.requestIdleCallback(start, { timeout: 1800 })
      : window.setTimeout(start, 900);

    return () => {
      if (hasIdle) window.cancelIdleCallback(handle);
      else window.clearTimeout(handle);
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const yText = useTransform(scrollYProgress, [0, 0.25], [0, -60]);
  const yPhoto = useTransform(scrollYProgress, [0, 0.3], [0, 90]);
  const yPhotoSmall = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const fade = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Layer 1 — WebGL reflective floor */}
      <div className="absolute inset-0 -z-10">
        {show3d && <HeroScene reduced={reduced} active={onScreen} />}
      </div>

      {/* Layer 2 — ambient wash + grid; also the fallback if WebGL never loads */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora" />
        <div className="grid-lines mask-fade-y absolute inset-0 opacity-50" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Copy */}
        <motion.div style={{ y: yText }} className="lg:col-span-6">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[0.72rem] font-semibold tracking-[0.16em] text-mist uppercase"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-aqua opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-aqua" />
            </span>
            {t("heroBadge")}
          </motion.span>

          <h1 className="mt-7 font-display text-[clamp(2.6rem,7vw,5.4rem)] leading-[0.98] font-bold tracking-tight">
            <SplitText text={t("heroLine1")} className="block text-chalk" />
            <SplitText
              text={t("heroLine2")}
              className="block"
              wordClassName="text-chrome"
              delay={0.16}
            />
            <SplitText text={t("heroLine3")} className="block text-chalk" delay={0.3} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-fog"
          >
            {site.description[locale]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-3.5"
          >
            <Button href={localePath(locale, "/quote")} size="lg" arrow>
              {t("getQuote")}
            </Button>
            <Button href={localePath(locale, "/services")} variant="outline" size="lg">
              {t("exploreServices")}
            </Button>
          </motion.div>

          {/* Stat strip — a fixed 4-column grid so nothing wraps out of line */}
          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 grid grid-cols-2 gap-y-6 border-t border-line-2/70 pt-7 sm:grid-cols-4"
          >
            {stats.map((s, i) => (
              <div
                key={s.label.en}
                className={
                  i === 0
                    ? ""
                    : "border-s border-line-2/70 ps-5 sm:ps-6 max-sm:[&:nth-child(3)]:border-s-0 max-sm:[&:nth-child(3)]:ps-0"
                }
              >
                <dd className="font-display text-[1.6rem] leading-none font-bold whitespace-nowrap text-chalk">
                  <Counter to={s.value} locale={locale} suffix={s.suffix[locale]} />
                </dd>
                <dt className="mt-2 text-[0.76rem] leading-tight text-fog">{s.label[locale]}</dt>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Photo pair */}
        <div className="relative lg:col-span-6">
          <motion.div
            style={{ y: yPhoto }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative ms-auto aspect-[4/5] w-full max-w-[34rem] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(23,24,29,0.35)]"
          >
            <Figure
              slot={flagship.media}
              locale={locale}
              priority
              className="absolute inset-0"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="scrim pointer-events-none absolute inset-x-0 bottom-0 p-7 pt-24 text-end">
              <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-white/70 uppercase">
                {locale === "ar" ? "الخدمة الأساسية" : "Flagship service"}
              </p>
              <p className="mt-1.5 font-display text-[1.25rem] leading-snug font-bold text-white">
                {flagship.title[locale]}
              </p>
            </div>
          </motion.div>

          {/* Smaller offset photo — overlaps the corner, moves the other way */}
          <motion.div
            style={{ y: yPhotoSmall }}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-8 -start-4 hidden aspect-[4/3] w-[42%] overflow-hidden rounded-2xl border-4 border-ink shadow-[0_28px_60px_-24px_rgba(23,24,29,0.4)] md:block"
          >
            <Figure
              slot={secondary.media}
              locale={locale}
              className="absolute inset-0"
              sizes="20vw"
            />
          </motion.div>

          {/* Floating emergency badge */}
          <motion.a
            href={`tel:${site.phoneIntl}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass absolute -top-4 -end-2 hidden items-center gap-3 rounded-full py-2.5 pe-5 ps-3 md:flex"
          >
            <span className="grid size-9 place-items-center rounded-full bg-chalk text-ink">
              <Icon name="phone" className="size-4" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[0.62rem] tracking-[0.14em] text-fog uppercase">
                {t("emergencyLine")}
              </span>
              <span dir="ltr" className="font-display text-[0.92rem] font-semibold text-chalk">
                {site.phone}
              </span>
            </span>
          </motion.a>
        </div>
      </div>

      <motion.div
        style={{ opacity: fade }}
        className="pointer-events-none absolute inset-x-0 bottom-5 hidden justify-center lg:flex"
      >
        <span className="flex flex-col items-center gap-2 text-[0.62rem] tracking-[0.3em] text-fog uppercase">
          {t("scrollHint")}
          <span className="h-10 w-px overflow-hidden bg-line-2">
            <motion.span
              className="block h-1/2 w-full bg-gold"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </span>
      </motion.div>
    </section>
  );
}
