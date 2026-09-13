import type { Bi } from "@/i18n/config";

export type Plan = {
  id: string;
  name: Bi;
  tagline: Bi;
  monthly: number;
  yearly: number;
  featured?: boolean;
  bestFor: Bi;
  includes: Bi<string[]>;
  excludes: Bi<string[]>;
};

/** Fixed-cost preventive maintenance, in the mould of the UAE AMC model. */
export const plans: Plan[] = [
  {
    id: "bronze",
    name: { en: "Bronze", ar: "برونزي" },
    tagline: { en: "Cover the essentials", ar: "تغطية الأساسيات" },
    monthly: 390,
    yearly: 4200,
    bestFor: {
      en: "Apartments and smaller villas with a single AC system",
      ar: "الشقق والفلل الصغيرة ذات نظام تكييف واحد",
    },
    includes: {
      en: [
        "2 scheduled visits per year",
        "Full AC service, up to 4 units",
        "Plumbing and electrical inspection",
        "Water tank clean, once yearly",
        "10% off all additional work",
        "Priority booking within 48 hours",
      ],
      ar: [
        "زيارتان مجدولتان سنويًا",
        "صيانة تكييف كاملة حتى ٤ وحدات",
        "فحص السباكة والكهرباء",
        "تنظيف خزان المياه مرة سنويًا",
        "خصم ١٠٪ على أي أعمال إضافية",
        "أولوية حجز خلال ٤٨ ساعة",
      ],
    },
    excludes: {
      en: ["Spare parts", "Emergency callout fee", "Floor polishing"],
      ar: ["قطع الغيار", "رسوم الاستدعاء الطارئ", "جلي الأرضيات"],
    },
  },
  {
    id: "silver",
    name: { en: "Silver", ar: "فضي" },
    tagline: { en: "The one most villas need", ar: "الأنسب لمعظم الفلل" },
    monthly: 690,
    yearly: 7400,
    featured: true,
    bestFor: {
      en: "Family villas wanting predictable costs and no emergency surprises",
      ar: "الفلل العائلية التي تريد تكاليف متوقعة دون مفاجآت طارئة",
    },
    includes: {
      en: [
        "4 scheduled visits per year",
        "Full AC service, up to 10 units",
        "Unlimited plumbing & electrical callouts",
        "Water tank clean, twice yearly",
        "Annual pest control treatment",
        "15% off all additional work",
        "4-hour emergency response, no callout fee",
      ],
      ar: [
        "٤ زيارات مجدولة سنويًا",
        "صيانة تكييف كاملة حتى ١٠ وحدات",
        "استدعاءات سباكة وكهرباء غير محدودة",
        "تنظيف خزان المياه مرتين سنويًا",
        "مكافحة حشرات سنوية",
        "خصم ١٥٪ على أي أعمال إضافية",
        "استجابة طارئة خلال ٤ ساعات بدون رسوم",
      ],
    },
    excludes: {
      en: ["Major spare parts (quoted at cost + 10%)", "Full renovation works"],
      ar: ["قطع الغيار الكبرى (تُسعَّر بالتكلفة + ١٠٪)", "أعمال الترميم الكاملة"],
    },
  },
  {
    id: "gold",
    name: { en: "Gold", ar: "ذهبي" },
    tagline: { en: "Everything, including the shine", ar: "كل شيء، بما في ذلك اللمعان" },
    monthly: 1290,
    yearly: 13900,
    bestFor: {
      en: "Large villas, compounds and landlords managing multiple properties",
      ar: "الفلل الكبيرة والمجمعات والملّاك الذين يديرون عقارات متعددة",
    },
    includes: {
      en: [
        "Monthly scheduled visits",
        "Unlimited AC, plumbing & electrical",
        "Annual floor polishing, up to 200 m²",
        "Quarterly deep clean of wet areas",
        "Water tank clean, quarterly",
        "Pest control, twice yearly",
        "25% off all additional work",
        "2-hour emergency response, 24/7",
        "Named account manager",
      ],
      ar: [
        "زيارات شهرية مجدولة",
        "تكييف وسباكة وكهرباء بلا حدود",
        "جلي أرضيات سنوي حتى ٢٠٠ م²",
        "تنظيف عميق ربع سنوي للمناطق الرطبة",
        "تنظيف خزان المياه كل ثلاثة أشهر",
        "مكافحة حشرات مرتين سنويًا",
        "خصم ٢٥٪ على أي أعمال إضافية",
        "استجابة طارئة خلال ساعتين على مدار الساعة",
        "مدير حساب مخصص",
      ],
    },
    excludes: {
      en: ["Structural works", "Full renovation projects"],
      ar: ["الأعمال الإنشائية", "مشاريع الترميم الكاملة"],
    },
  },
];

export const planNotes: Bi<string[]> = {
  en: [
    "All prices are in Saudi Riyals and include VAT.",
    "Yearly plans are billed once and save roughly two months against monthly billing.",
    "Contracts run for twelve months and can be transferred if you sell the property.",
    "Additional AC units beyond the plan limit are charged at SAR 70 per unit per service.",
  ],
  ar: [
    "جميع الأسعار بالريال السعودي وشاملة ضريبة القيمة المضافة.",
    "الباقات السنوية تُدفع مرة واحدة وتوفّر ما يعادل شهرين مقارنة بالدفع الشهري.",
    "مدة العقد اثنا عشر شهرًا وقابل للنقل في حال بيع العقار.",
    "الوحدات الإضافية التي تتجاوز حد الباقة تُحتسب بـ٧٠ ر.س لكل وحدة في كل صيانة.",
  ],
};
