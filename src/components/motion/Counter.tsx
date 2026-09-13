"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { localizeNumber } from "@/lib/utils";
import type { Locale } from "@/i18n/config";

/** Counts up once the number scrolls into view. */
export function Counter({
  to,
  locale,
  suffix = "",
  duration = 1900,
  className,
}: {
  to: number;
  locale: Locale;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutExpo — fast start, long settle, reads as "counting up".
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setValue(Math.round(to * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {/* Group in en-US first, then map the digits to Arabic-Indic. */}
      {localizeNumber(value.toLocaleString("en-US"), locale)}
      {suffix}
    </span>
  );
}
