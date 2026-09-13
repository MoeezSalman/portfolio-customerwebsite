"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Word-by-word mask reveal.
 *
 * Splits on whitespace only — never on characters. Arabic is a cursive script,
 * so splitting a word into letters would break the joining forms and render
 * gibberish. Word-level animation is correct in both scripts.
 *
 * Visibility is observed on the outer wrapper, not the moving word. The words
 * start translated outside an `overflow-hidden` mask, and IntersectionObserver
 * clips against that mask — so observing the word itself would report 0%
 * visible forever and the text would never appear.
 */
export function SplitText({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.055,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn("inline-block", className)}
    >
      {words.map((word, i) => (
        // The space must sit BETWEEN the inline-block masks as a real text
        // node — whitespace inside an inline-block collapses to nothing.
        <span key={`${word}-${i}`}>
          <span className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]">
            <motion.span
              className={cn("inline-block", wordClassName)}
              initial={{ y: "108%", opacity: 0 }}
              animate={inView ? { y: "0%", opacity: 1 } : { y: "108%", opacity: 0 }}
              transition={{
                duration: 0.85,
                delay: delay + i * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}
