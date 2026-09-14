"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Slow-drift parallax for a photo that fills its box. The photo layer is
 * made slightly taller than the box and moved by a few percent as the box
 * crosses the viewport — transform only, so it stays on the compositor.
 */
export function Parallax({
  children,
  className,
  strength = 6,
}: {
  children: React.ReactNode;
  className?: string;
  /** Percent of box height the photo travels in each direction. */
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={{ y, top: `-${strength}%`, bottom: `-${strength}%`, willChange: "transform" }}
        className="absolute inset-x-0"
      >
        {children}
      </motion.div>
    </div>
  );
}
