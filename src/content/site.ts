import type { Bi } from "@/i18n/config";

/**
 * Brand + contact details, sourced from the client's live site (shinepro.work).
 * Everything identity-related lives here so a rebrand is a one-file change.
 */
export const site = {
  name: { en: "ShinePro", ar: "شاين برو" } satisfies Bi,
  legalName: {
    en: "ShinePro Maintenance & Surface Care",
    ar: "شاين برو للصيانة والعناية بالأسطح",
  } satisfies Bi,
  tagline: {
    en: "Riyadh's surface & maintenance specialists",
    ar: "متخصصو العناية بالأسطح والصيانة في الرياض",
  } satisfies Bi,
  description: {
    en: "Professional tile, marble and floor polishing plus full home and facility maintenance across Riyadh — delivered with industrial-grade machinery and a workmanship guarantee.",
    ar: "خدمات احترافية لجلي وتلميع البلاط والرخام والأرضيات، بالإضافة إلى الصيانة الشاملة للمنازل والمنشآت في الرياض — بأحدث المعدات الصناعية وضمان على جودة التنفيذ.",
  } satisfies Bi,

  phone: "0504501138",
  phoneIntl: "+966504501138",
  whatsapp: "966504501138",
  email: "shinepro313@gmail.com",

  address: {
    en: "Al Yasmin District, Riyadh, Saudi Arabia",
    ar: "حي الياسمين، الرياض، المملكة العربية السعودية",
  } satisfies Bi,
  hours: {
    en: "Sat – Thu, 8:00 AM – 11:00 PM · Emergency line 24/7",
    ar: "السبت – الخميس، ٨:٠٠ ص – ١١:٠٠ م · خط الطوارئ ٢٤ ساعة",
  } satisfies Bi,

  social: [
    { label: "WhatsApp", href: "https://wa.me/966504501138", icon: "whatsapp" },
    { label: "Instagram", href: "https://instagram.com/", icon: "instagram" },
    { label: "X", href: "https://x.com/", icon: "x" },
    { label: "TikTok", href: "https://tiktok.com/", icon: "tiktok" },
  ],
} as const;

export const waLink = (message?: Bi, locale: "en" | "ar" = "ar") =>
  `https://wa.me/${site.whatsapp}${
    message ? `?text=${encodeURIComponent(message[locale])}` : ""
  }`;

/** Primary navigation. `children` renders as a mega-menu column. */
export const nav: {
  href: string;
  label: Bi;
  children?: { href: string; label: Bi }[];
}[] = [
  { href: "/", label: { en: "Home", ar: "الرئيسية" } },
  { href: "/about", label: { en: "About", ar: "من نحن" } },
  { href: "/services", label: { en: "Services", ar: "خدماتنا" } },
  { href: "/projects", label: { en: "Projects", ar: "أعمالنا" } },
  { href: "/equipment", label: { en: "Equipment", ar: "معداتنا" } },
  { href: "/packages", label: { en: "Packages", ar: "الباقات" } },
  { href: "/areas", label: { en: "Coverage", ar: "نطاق الخدمة" } },
  { href: "/blog", label: { en: "Journal", ar: "المدونة" } },
  { href: "/contact", label: { en: "Contact", ar: "تواصل معنا" } },
];

export const stats: { value: number; suffix: Bi; label: Bi }[] = [
  {
    value: 18,
    suffix: { en: "+", ar: "+" },
    label: { en: "Years on Riyadh floors", ar: "عامًا في أرضيات الرياض" },
  },
  {
    value: 6400,
    suffix: { en: "+", ar: "+" },
    label: { en: "Projects completed", ar: "مشروعًا منجزًا" },
  },
  {
    value: 100,
    suffix: { en: "+", ar: "+" },
    label: { en: "Certified technicians", ar: "فنيًا معتمدًا" },
  },
  {
    value: 4,
    suffix: { en: "h", ar: " س" },
    label: { en: "Average response time", ar: "متوسط زمن الاستجابة" },
  },
];

export const guarantees: { title: Bi; body: Bi; icon: string }[] = [
  {
    icon: "shield",
    title: { en: "90-day workmanship warranty", ar: "ضمان ٩٠ يومًا على التنفيذ" },
    body: {
      en: "If a finish dulls or a repair fails inside 90 days, we return and redo it at no charge.",
      ar: "إذا بهت اللمعان أو تعطّل الإصلاح خلال ٩٠ يومًا، نعود وننفّذه من جديد دون أي تكلفة.",
    },
  },
  {
    icon: "clock",
    title: { en: "Same-day emergency callout", ar: "استجابة طارئة في نفس اليوم" },
    body: {
      en: "Burst pipes, power faults and AC failures get a technician dispatched within four hours.",
      ar: "تسرّب المواسير وأعطال الكهرباء والتكييف — نرسل الفني خلال أربع ساعات.",
    },
  },
  {
    icon: "tag",
    title: { en: "Fixed quote before we start", ar: "عرض سعر ثابت قبل البدء" },
    body: {
      en: "You approve a written scope and price. No variations invented mid-job.",
      ar: "توافق على نطاق العمل والسعر كتابيًا. بدون أي زيادات مفاجئة أثناء التنفيذ.",
    },
  },
  {
    icon: "leaf",
    title: { en: "Low-odour, family-safe materials", ar: "مواد آمنة وقليلة الروائح" },
    body: {
      en: "Water-based sealers and certified compounds — the space is usable the same evening.",
      ar: "مواد عزل مائية ومركبات معتمدة — المكان جاهز للاستخدام في نفس المساء.",
    },
  },
];

export const processSteps: { title: Bi; body: Bi }[] = [
  {
    title: { en: "Share the job", ar: "أخبرنا بالمطلوب" },
    body: {
      en: "Send photos on WhatsApp or book a survey. We read the surface, the substrate and the damage.",
      ar: "أرسل الصور عبر واتساب أو احجز معاينة. نقرأ نوع السطح والأرضية تحته وحجم الضرر.",
    },
  },
  {
    title: { en: "Fixed written quote", ar: "عرض سعر مكتوب وثابت" },
    body: {
      en: "Scope, machinery, materials, duration and price — approved by you before a single tool moves.",
      ar: "نطاق العمل والمعدات والمواد والمدة والسعر — بموافقتك قبل تشغيل أي معدة.",
    },
  },
  {
    title: { en: "Protected execution", ar: "تنفيذ مع حماية كاملة" },
    body: {
      en: "Furniture wrapped, edges masked, dust captured at source by HEPA extraction.",
      ar: "تغليف الأثاث وحماية الحواف وسحب الغبار من مصدره بفلاتر HEPA.",
    },
  },
  {
    title: { en: "Handover & warranty", ar: "التسليم والضمان" },
    body: {
      en: "We walk the finish with you, log gloss readings, and register your 90-day warranty.",
      ar: "نستعرض النتيجة معك، ونسجّل قياسات اللمعان، ونفعّل ضمان الـ٩٠ يومًا.",
    },
  },
];
