import type { Locale } from "@/i18n/config";
import { ScrollMarquee } from "./ScrollMarquee";

const sets = {
  materials: {
    en: ["Marble", "Tiles", "Granite", "Terrazzo", "Shine"],
    ar: ["رخام", "بلاط", "جرانيت", "ترازو", "لمعان"],
  },
  promise: {
    en: ["No dust", "Fixed price", "Same day", "90-day guarantee"],
    ar: ["بدون غبار", "سعر ثابت", "نفس اليوم", "ضمان ٩٠ يومًا"],
  },
  places: {
    en: ["Villas", "Mosques", "Offices", "Hotels", "Spas", "Showrooms"],
    ar: ["فلل", "مساجد", "مكاتب", "فنادق", "سبا", "معارض"],
  },
  work: {
    en: ["Before", "After", "Before", "After"],
    ar: ["قبل", "بعد", "قبل", "بعد"],
  },
} as const;

/** A scroll-driven word band, pre-wired with the site's vocabulary. */
export function WordBand({
  locale,
  set = "materials",
  reverse = false,
  tone = "outline",
  className,
}: {
  locale: Locale;
  set?: keyof typeof sets;
  reverse?: boolean;
  tone?: "outline" | "gold" | "solid" | "light";
  className?: string;
}) {
  return (
    <ScrollMarquee
      words={[...sets[set][locale]]}
      rtl={locale === "ar"}
      reverse={reverse}
      tone={tone}
      className={className}
    />
  );
}
