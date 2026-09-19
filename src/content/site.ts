import type { Bi } from "@/i18n/config";
import { photo, type MediaSlot } from "@/lib/media";

/**
 * Brand + contact details, as supplied by the client (2026-09-19).
 * Jalibalat (جلي البلاط) does one thing: it makes hard floors shine — marble,
 * tiles, granite, terrazzo. Nothing else is offered anywhere on the site.
 */
export const site = {
  name: { en: "Jalibalat", ar: "جلي البلاط" } satisfies Bi,
  legalName: {
    en: "Jalibalat Floor Polishing, Riyadh",
    ar: "مؤسسة جلي البلاط للجلي والتلميع — الرياض",
  } satisfies Bi,
  tagline: {
    en: "Riyadh's floor shining experts",
    ar: "خبراء جلي وتلميع الأرضيات في الرياض",
  } satisfies Bi,
  description: {
    en: "We polish marble, tiles, granite and terrazzo floors in Riyadh. Big machines, real shine, fair prices.",
    ar: "نجلي ونلمّع أرضيات الرخام والبلاط والجرانيت والترازو في الرياض. معدات قوية، لمعان حقيقي، وأسعار عادلة.",
  } satisfies Bi,

  /** Display form. Digits-only variants below feed tel: and wa.me links. */
  phone: "+966 57 840 6039",
  phoneIntl: "+966578406039",
  whatsapp: "966578406039",
  email: "jalibalatriyadh057@gmail.com",

  address: {
    en: "Street 13, Olaya, Riyadh, Saudi Arabia",
    ar: "شارع ١٣، العليا، الرياض، المملكة العربية السعودية",
  } satisfies Bi,
  /** Head office, for the coverage map and structured data. */
  geo: { lat: 24.694, lng: 46.685 },
  hours: {
    en: "Sat – Thu, 8:00 AM – 11:00 PM",
    ar: "السبت – الخميس، ٨:٠٠ ص – ١١:٠٠ م",
  } satisfies Bi,

  social: [
    { label: "WhatsApp", href: "https://wa.me/966578406039", icon: "whatsapp" },
    { label: "Email", href: "mailto:jalibalatriyadh057@gmail.com", icon: "mail" },
  ],
} as const;

export const waLink = (message?: Bi, locale: "en" | "ar" = "ar") =>
  `https://wa.me/${site.whatsapp}${
    message ? `?text=${encodeURIComponent(message[locale])}` : ""
  }`;

/** Primary navigation. */
export const nav: { href: string; label: Bi }[] = [
  { href: "/", label: { en: "Home", ar: "الرئيسية" } },
  { href: "/services", label: { en: "Services", ar: "خدماتنا" } },
  { href: "/projects", label: { en: "Our work", ar: "أعمالنا" } },
  { href: "/equipment", label: { en: "Machines", ar: "معداتنا" } },
  { href: "/areas", label: { en: "Coverage", ar: "نطاق الخدمة" } },
  { href: "/blog", label: { en: "Tips", ar: "نصائح" } },
  { href: "/about", label: { en: "About", ar: "من نحن" } },
  { href: "/contact", label: { en: "Contact", ar: "تواصل معنا" } },
];

export const stats: { value: number; suffix: Bi; label: Bi }[] = [
  {
    value: 12,
    suffix: { en: "+", ar: "+" },
    label: { en: "Years polishing floors", ar: "سنة في جلي الأرضيات" },
  },
  {
    value: 5000,
    suffix: { en: "+", ar: "+" },
    label: { en: "Floors made shiny", ar: "أرضية أعدنا لمعانها" },
  },
  {
    value: 30,
    suffix: { en: "", ar: "" },
    label: { en: "Trained technicians", ar: "فنيًا مدرّبًا" },
  },
  {
    value: 90,
    suffix: { en: "", ar: "" },
    label: { en: "Days shine guarantee", ar: "يومًا ضمان اللمعان" },
  },
];

/** Four simple promises. */
export const guarantees: { title: Bi; body: Bi; icon: string }[] = [
  {
    icon: "shield",
    title: { en: "Shine guaranteed", ar: "لمعان مضمون" },
    body: {
      en: "If the shine fades in 90 days, we come back and polish again for free.",
      ar: "إذا بهت اللمعان خلال ٩٠ يومًا، نعود ونلمّع من جديد مجانًا.",
    },
  },
  {
    icon: "leaf",
    title: { en: "No dust, no mess", ar: "بدون غبار أو فوضى" },
    body: {
      en: "Our machines catch the dust. Your home stays clean while we work.",
      ar: "معداتنا تشفط الغبار. يبقى منزلك نظيفًا أثناء العمل.",
    },
  },
  {
    icon: "tag",
    title: { en: "Fixed price first", ar: "سعر ثابت قبل البدء" },
    body: {
      en: "You get the price before we start. It does not change.",
      ar: "تعرف السعر قبل أن نبدأ. ولا يتغير.",
    },
  },
  {
    icon: "clock",
    title: { en: "Fast and on time", ar: "سريع وفي الموعد" },
    body: {
      en: "Most homes are done in one day. We arrive when we say we will.",
      ar: "معظم المنازل تنتهي في يوم واحد. ونصل في الموعد الذي حددناه.",
    },
  },
];

/** How it works — four steps, each with a picture. */
export const processSteps: { title: Bi; body: Bi; media: MediaSlot }[] = [
  {
    title: { en: "Send a photo", ar: "أرسل صورة" },
    body: {
      en: "Take a photo of your floor and send it on WhatsApp.",
      ar: "صوّر أرضيتك وأرسل الصورة على واتساب.",
    },
    media: photo("marble-stained", {
      en: "A dull, stained marble floor before polishing",
      ar: "أرضية رخام باهتة ومبقّعة قبل الجلي",
    }),
  },
  {
    title: { en: "We visit and quote", ar: "نزورك ونعطيك السعر" },
    body: {
      en: "We come to see the floor and give you one fixed price.",
      ar: "نأتي لمعاينة الأرضية ونعطيك سعرًا واحدًا ثابتًا.",
    },
    media: photo("man-thobe", {
      en: "A client walking across a polished marble courtyard",
      ar: "عميل يمشي على فناء رخامي مصقول",
    }),
  },
  {
    title: { en: "We polish", ar: "نجلي ونلمّع" },
    body: {
      en: "Our machines grind and polish the floor step by step.",
      ar: "معداتنا تجلي الأرضية وتلمّعها خطوة بخطوة.",
    },
    media: photo("machine-in-hall", {
      en: "A technician driving a floor machine across a large shiny hall",
      ar: "فني يقود معدة جلي في قاعة كبيرة لامعة",
    }),
  },
  {
    title: { en: "Enjoy the shine", ar: "استمتع باللمعان" },
    body: {
      en: "You walk on it the same day. The shine is guaranteed for 90 days.",
      ar: "تمشي عليها في نفس اليوم. واللمعان مضمون ٩٠ يومًا.",
    },
    media: photo("salon-marble", {
      en: "A bright white marble floor reflecting the room like a mirror",
      ar: "أرضية رخام بيضاء لامعة تعكس الغرفة كالمرآة",
    }),
  },
];

/** Where we polish — one picture each. */
export const places: { id: string; title: Bi; media: MediaSlot }[] = [
  {
    id: "villas",
    title: { en: "Villas & homes", ar: "الفلل والمنازل" },
    media: photo("villa-living", {
      en: "A bright living room with a glossy marble floor",
      ar: "غرفة معيشة مشرقة بأرضية رخام لامعة",
    }),
  },
  {
    id: "mosques",
    title: { en: "Mosques", ar: "المساجد" },
    media: photo("mosque-gold-hall", {
      en: "A mosque prayer hall with a mirror-shine marble floor",
      ar: "قاعة صلاة في مسجد بأرضية رخام لامعة كالمرآة",
    }),
  },
  {
    id: "offices",
    title: { en: "Offices & lobbies", ar: "المكاتب والمداخل" },
    media: photo("lobby-office", {
      en: "A company lobby with a polished stone floor",
      ar: "بهو شركة بأرضية حجرية مصقولة",
    }),
  },
  {
    id: "hotels",
    title: { en: "Hotels", ar: "الفنادق" },
    media: photo("lobby-grand", {
      en: "A grand hotel lobby with shining marble",
      ar: "بهو فندق فخم برخام لامع",
    }),
  },
  {
    id: "spas",
    title: { en: "Spas & hammams", ar: "السبا والحمّامات" },
    media: photo("spa-hammam", {
      en: "Inside a marble hammam: columns, fountains and a patterned marble floor",
      ar: "داخل حمّام رخامي: أعمدة ونوافير وأرضية رخام منقوشة",
    }),
  },
  {
    id: "showrooms",
    title: { en: "Showrooms & shops", ar: "المعارض والمحلات" },
    media: photo("showroom-white", {
      en: "A white showroom with a reflective floor",
      ar: "معرض أبيض بأرضية عاكسة",
    }),
  },
  {
    id: "warehouses",
    title: { en: "Warehouses", ar: "المستودعات" },
    media: photo("warehouse-shine", {
      en: "A large warehouse floor polished to a shine",
      ar: "أرضية مستودع كبير مصقولة حتى اللمعان",
    }),
  },
];
