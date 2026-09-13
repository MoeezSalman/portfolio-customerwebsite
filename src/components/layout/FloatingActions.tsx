"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { site, waLink } from "@/content/site";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { Icon } from "@/components/graphics/Icon";

/** Reading-progress hairline pinned under the header. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[120] h-0.5 origin-[0%] bg-gradient-to-r from-gold via-aqua to-gold"
    />
  );
}

/** Persistent WhatsApp + call buttons — the primary conversion path here. */
export function FloatingActions({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  const prefill = {
    en: `Hello ${site.name.en}, I'd like a quote for:`,
    ar: `السلام عليكم ${site.name.ar}، أرغب في عرض سعر لـ:`,
  };

  return (
    <div className="fixed bottom-5 end-5 z-[95] flex flex-col gap-3">
      <motion.a
        href={waLink(prefill, locale)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("whatsapp")}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.94 }}
        className="group relative grid size-14 place-items-center rounded-full bg-aqua text-white shadow-[0_12px_36px_-10px_rgba(15,138,123,0.5)]"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full border border-aqua/70" />
        <Icon name="whatsapp" className="size-7" />
      </motion.a>

      <motion.a
        href={`tel:${site.phoneIntl}`}
        aria-label={t("callNow")}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.25, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.94 }}
        className="grid size-14 place-items-center rounded-full border border-line-2 bg-ink/90 text-chalk backdrop-blur-xl md:hidden"
      >
        <Icon name="phone" className="size-6" />
      </motion.a>
    </div>
  );
}
