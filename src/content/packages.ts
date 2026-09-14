import type { Bi } from "@/i18n/config";
import { photo, type MediaSlot } from "@/lib/media";

/** Three simple ways to buy. Prices are indicative and confirmed on site. */
export type Plan = {
  id: string;
  name: Bi;
  tagline: Bi;
  /** Displayed price line, e.g. "From SAR 1,200". */
  price: Bi;
  per: Bi;
  featured?: boolean;
  bestFor: Bi;
  includes: Bi<string[]>;
  media: MediaSlot;
};

export const plans: Plan[] = [
  {
    id: "one-time",
    name: { en: "One-time shine", ar: "تلميع لمرة واحدة" },
    tagline: { en: "Polish it once, enjoy it for years.", ar: "لمّعها مرة، واستمتع بها سنوات." },
    price: { en: "From SAR 1,500", ar: "من ١٬٥٠٠ ر.س" },
    per: { en: "per visit", ar: "للزيارة" },
    bestFor: { en: "Villas and apartments", ar: "الفلل والشقق" },
    includes: {
      en: ["Full grind and polish", "Scratches and stains removed", "Sealed against spills", "90-day shine guarantee"],
      ar: ["جلي وتلميع كامل", "إزالة الخدوش والبقع", "عزل ضد الانسكابات", "ضمان لمعان ٩٠ يومًا"],
    },
    media: photo("villa-entrance", {
      en: "A villa entrance hall with a white marble floor and stairs",
      ar: "مدخل فيلا بأرضية رخام أبيض ودرج",
    }),
  },
  {
    id: "home-care",
    name: { en: "Home care plan", ar: "خطة العناية بالمنزل" },
    tagline: { en: "A quick buff every three months.", ar: "تلميع سريع كل ثلاثة أشهر." },
    price: { en: "From SAR 450", ar: "من ٤٥٠ ر.س" },
    per: { en: "per visit, 4 visits a year", ar: "للزيارة، ٤ زيارات سنويًا" },
    featured: true,
    bestFor: { en: "Busy family homes", ar: "المنازل العائلية النشطة" },
    includes: {
      en: ["4 buff-and-shine visits a year", "Spot repairs included", "Priority booking", "Photo report each visit"],
      ar: ["٤ زيارات تلميع سنويًا", "الإصلاحات الموضعية مشمولة", "أولوية في الحجز", "تقرير مصوّر بعد كل زيارة"],
    },
    media: photo("villa-living", {
      en: "A family living room with a glossy marble floor",
      ar: "غرفة معيشة عائلية بأرضية رخام لامعة",
    }),
  },
  {
    id: "business",
    name: { en: "Business plan", ar: "خطة الأعمال" },
    tagline: { en: "Shiny every day, all year.", ar: "لامعة كل يوم، طوال العام." },
    price: { en: "From SAR 6 / m²", ar: "من ٦ ر.س / م²" },
    per: { en: "per month", ar: "شهريًا" },
    bestFor: { en: "Mosques, offices, hotels, shops", ar: "المساجد والمكاتب والفنادق والمحلات" },
    includes: {
      en: ["Weekly or monthly visits", "Night work after closing", "Full polish once a year", "One fixed monthly fee"],
      ar: ["زيارات أسبوعية أو شهرية", "عمل ليلي بعد الإغلاق", "جلي كامل مرة سنويًا", "رسوم شهرية ثابتة"],
    },
    media: photo("lobby-reception", {
      en: "A modern office lobby with a polished floor",
      ar: "بهو مكتب حديث بأرضية مصقولة",
    }),
  },
];

export const planNotes: Bi<string[]> = {
  en: [
    "Prices depend on the size and condition of the floor. We confirm on site.",
    "All plans include our 90-day shine guarantee.",
    "You can stop a plan with one month's notice.",
  ],
  ar: [
    "الأسعار تعتمد على مساحة الأرضية وحالتها. نؤكدها في الموقع.",
    "كل الخطط تشمل ضمان اللمعان ٩٠ يومًا.",
    "يمكنك إيقاف الخطة بإشعار قبل شهر.",
  ],
};
