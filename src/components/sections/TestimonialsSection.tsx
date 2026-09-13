"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn, localizeNumber } from "@/lib/utils";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { testimonials } from "@/content/testimonials";
import { getService } from "@/content/services";
import { Section } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/graphics/Icon";

/**
 * One testimonial at a time, set large like a pull-quote. Auto-advances,
 * pauses on hover, and the name list doubles as navigation.
 */
export function TestimonialsSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const item = testimonials[i];
  const service = getService(item.service);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setI((n) => (n + 1) % testimonials.length),
      6500,
    );
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <Section className="border-t border-line bg-ink-2/50">
      <div className="container-x">
        <SectionHeading
          eyebrow={t("sectionTestimonials")}
          title={t("sectionTestimonialsTitle")}
          accent="aqua"
        />

        <div
          className="mt-14 grid gap-12 lg:grid-cols-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* The quote */}
          <figure className="relative min-h-[16rem] lg:col-span-8">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-10 -start-3 font-display text-[9rem] leading-none font-bold text-gold/20 select-none"
            >
              “
            </span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <blockquote className="font-display text-[clamp(1.35rem,2.6vw,2rem)] leading-[1.35] font-semibold text-chalk">
                  {item.quote[locale]}
                </blockquote>
                <figcaption className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="flex items-center gap-1" aria-label={`${item.rating}/5`}>
                    {Array.from({ length: item.rating }).map((_, k) => (
                      <Icon key={k} name="star" className="size-3.5 text-gold" filled />
                    ))}
                  </span>
                  <span className="font-display text-[0.95rem] font-semibold text-chalk">
                    {item.name[locale]}
                  </span>
                  <span className="text-[0.85rem] text-fog">{item.role[locale]}</span>
                  {service && (
                    <span className="rounded-full border border-line-2 px-3 py-1 text-[0.7rem] text-fog">
                      {service.title[locale]}
                    </span>
                  )}
                </figcaption>
              </motion.div>
            </AnimatePresence>
          </figure>

          {/* Name list = navigation */}
          <ol className="border-t border-line lg:col-span-4 lg:border-t-0 lg:border-s lg:ps-10">
            {testimonials.map((tm, k) => {
              const on = k === i;
              return (
                <li key={tm.id}>
                  <button
                    type="button"
                    onClick={() => setI(k)}
                    aria-current={on ? "true" : undefined}
                    className={cn(
                      "flex w-full items-center gap-4 border-b border-line py-3.5 text-start transition-colors",
                      on ? "text-chalk" : "text-fog hover:text-mist",
                    )}
                  >
                    <span
                      className={cn(
                        "font-display text-[0.75rem] font-semibold tabular-nums",
                        on ? "text-gold" : "text-line-2",
                      )}
                    >
                      {localizeNumber(String(k + 1).padStart(2, "0"), locale)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-display text-[0.92rem] font-semibold">
                        {tm.name[locale]}
                      </span>
                      <span className="block truncate text-[0.75rem] opacity-80">
                        {tm.role[locale]}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "h-px w-6 transition-all duration-300",
                        on ? "bg-gold" : "bg-transparent",
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Section>
  );
}
