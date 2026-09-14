import type { Bi } from "@/i18n/config";

export type Faq = { q: Bi; a: Bi; group: Bi };

/** Short questions, short answers. */
export const faqs: Faq[] = [
  {
    group: { en: "Price", ar: "السعر" },
    q: { en: "How do I get a price?", ar: "كيف أحصل على سعر؟" },
    a: {
      en: "Send a photo of the floor on WhatsApp. We reply the same day with a price.",
      ar: "أرسل صورة الأرضية على واتساب. نرد في نفس اليوم بالسعر.",
    },
  },
  {
    group: { en: "Price", ar: "السعر" },
    q: { en: "Does the price change later?", ar: "هل يتغير السعر لاحقًا؟" },
    a: {
      en: "No. The price we agree before we start is the price you pay.",
      ar: "لا. السعر الذي نتفق عليه قبل البدء هو ما تدفعه.",
    },
  },
  {
    group: { en: "The work", ar: "العمل" },
    q: { en: "Will there be dust in my house?", ar: "هل سيكون هناك غبار في منزلي؟" },
    a: {
      en: "No. We grind with water and our vacuums catch everything.",
      ar: "لا. نجلي بالماء وشفاطاتنا تلتقط كل شيء.",
    },
  },
  {
    group: { en: "The work", ar: "العمل" },
    q: { en: "How long does a villa take?", ar: "كم تستغرق الفيلا؟" },
    a: {
      en: "Usually one day. Big villas take two.",
      ar: "عادةً يوم واحد. الفلل الكبيرة يومان.",
    },
  },
  {
    group: { en: "The work", ar: "العمل" },
    q: { en: "When can I walk on the floor?", ar: "متى أستطيع المشي على الأرضية؟" },
    a: {
      en: "Right away. Heavy furniture can go back the next day.",
      ar: "فورًا. الأثاث الثقيل يعود في اليوم التالي.",
    },
  },
  {
    group: { en: "Guarantee", ar: "الضمان" },
    q: { en: "What if the shine fades?", ar: "ماذا لو بهت اللمعان؟" },
    a: {
      en: "If it fades within 90 days, we come back and polish again for free.",
      ar: "إذا بهت خلال ٩٠ يومًا، نعود ونلمّع من جديد مجانًا.",
    },
  },
  {
    group: { en: "Guarantee", ar: "الضمان" },
    q: { en: "Which areas do you cover?", ar: "ما المناطق التي تغطونها؟" },
    a: {
      en: "All of Riyadh. See the coverage map for how fast we reach your district.",
      ar: "الرياض كلها. انظر خريطة التغطية لمعرفة سرعة وصولنا إلى حيّك.",
    },
  },
];

export const faqGroups = Array.from(
  new Map(faqs.map((f) => [f.group.en, f.group])).values(),
);
