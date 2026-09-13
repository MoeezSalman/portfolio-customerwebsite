import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Arabic-Indic digits, so numerals match the script they sit in. */
const AR_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

export function localizeNumber(value: number | string, locale: string) {
  const text = String(value);
  if (locale !== "ar") return text;
  return text.replace(/\d/g, (d) => AR_DIGITS[Number(d)]);
}

export function formatDate(iso: string, locale: string) {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-SA" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

/** Deterministic pseudo-random in [0,1) — keeps SSR and client markup identical. */
export function seeded(seed: number) {
  const x = Math.sin(seed * 127.1) * 43758.5453;
  return x - Math.floor(x);
}
