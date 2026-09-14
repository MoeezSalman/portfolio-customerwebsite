"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export type AccordionItem = { q: string; a: string };

export function Accordion({
  items,
  className,
  defaultOpen = null,
}: {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={cn(
              "rounded-card px-5 transition-colors duration-300 md:px-6",
              isOpen ? "bg-white/80" : "bg-ink-2/70 hover:bg-ink-2",
            )}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-start gap-4 py-5 text-start"
              >
                <span
                  className={cn(
                    "mt-1 grid size-6 shrink-0 place-items-center rounded-full border transition-colors duration-300",
                    isOpen
                      ? "border-gold bg-gold text-ink"
                      : "border-line-2 text-fog group-hover:border-gold/60 group-hover:text-gold",
                  )}
                >
                  <motion.svg
                    viewBox="0 0 24 24"
                    className="size-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </motion.svg>
                </span>
                <span
                  className={cn(
                    "font-display text-[1.02rem] font-semibold leading-snug transition-colors duration-300",
                    isOpen ? "text-gold" : "text-chalk group-hover:text-mist",
                  )}
                >
                  {item.q}
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 ps-10 pe-2 leading-relaxed text-fog">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
