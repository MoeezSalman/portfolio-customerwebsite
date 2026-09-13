"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { processSteps } from "@/content/site";
import { localizeNumber } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/PageHero";

/**
 * Scroll-driven process timeline. A rail fills as you scroll and each step
 * lights up when the rail reaches it.
 */
export function ProcessSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 72%", "end 62%"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <Section className="border-y border-line bg-ink-2/45">
      <div className="container-x">
        <SectionHeading
          eyebrow={t("sectionProcess")}
          title={t("sectionProcessTitle")}
          align="center"
          accent="aqua"
        />

        <div ref={ref} className="relative mx-auto mt-20 max-w-3xl">
          {/* Rail */}
          <div className="absolute inset-y-0 start-[27px] w-px bg-line md:start-1/2 md:-translate-x-1/2">
            <motion.div
              style={{ scaleY: fill }}
              className="h-full w-full origin-top bg-gradient-to-b from-gold via-aqua to-gold"
            />
          </div>

          <ol className="flex flex-col gap-14">
            {processSteps.map((step, i) => (
              <Step
                key={step.title.en}
                index={i}
                total={processSteps.length}
                progress={fill}
                number={localizeNumber(String(i + 1).padStart(2, "0"), locale)}
                title={step.title[locale]}
                body={step.body[locale]}
              />
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

function Step({
  index,
  total,
  progress,
  number,
  title,
  body,
}: {
  index: number;
  total: number;
  progress: ReturnType<typeof useSpring>;
  number: string;
  title: string;
  body: string;
}) {
  // The dot activates as the rail fill passes its position. The explicit
  // return type keeps this a MotionValue<number>, not MotionValue<0 | 1>.
  const threshold = index / Math.max(total - 1, 1);
  const active = useTransform(progress, (v): number =>
    v >= threshold - 0.04 ? 1 : 0,
  );
  const dotScale = useTransform(active, [0, 1], [0.72, 1]);
  const bodyOpacity = useTransform(active, [0, 1], [0.42, 1]);

  const alignEnd = index % 2 === 1;

  return (
    <motion.li
      style={{ opacity: bodyOpacity }}
      className={`relative flex gap-6 md:w-1/2 ${
        alignEnd ? "md:ms-auto md:ps-12" : "md:pe-12 md:text-end"
      }`}
    >
      <motion.span
        style={{ scale: dotScale }}
        className={`absolute top-1 z-10 grid size-14 shrink-0 place-items-center rounded-full border border-line-2 bg-ink font-display text-[0.85rem] font-bold text-gold ${
          alignEnd
            ? "start-0 md:-start-7"
            : "start-0 md:start-auto md:-end-7"
        }`}
      >
        {number}
      </motion.span>

      <div className={`ps-20 md:ps-0 ${alignEnd ? "md:ps-8" : "md:pe-8"}`}>
        <h3 className="font-display text-[1.15rem] font-bold text-chalk">{title}</h3>
        <p className="mt-3 leading-relaxed text-fog">{body}</p>
      </div>
    </motion.li>
  );
}
