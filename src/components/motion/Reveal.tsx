"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    show: { opacity: 1, scale: 1 },
  },
  /** Horizontal reveals are authored LTR and mirrored for RTL by the caller. */
  side: {
    hidden: { opacity: 0, x: 32 },
    show: { opacity: 1, x: 0 },
  },
};

export function Reveal({
  children,
  className,
  as = "div",
  variant = "up",
  delay = 0,
  duration = 0.7,
  amount = 0.25,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "article" | "header";
  variant?: keyof typeof variants;
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}

/** Staggers its direct <Reveal>-like children. Pair with <RevealItem>. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  amount = 0.2,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
  as?: "div" | "ul" | "ol" | "dl" | "section";
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
  variant = "up",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article" | "span";
  variant?: keyof typeof variants;
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={cn(className)}
      variants={variants[variant]}
      transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
