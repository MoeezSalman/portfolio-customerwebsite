import type { Bi, Locale } from "./config";

/** Every UI string that is not part of the content layer. Kept plain. */
const d = {
  // --- global chrome ---
  skipToContent: { en: "Skip to content", ar: "تخطَّ إلى المحتوى" },
  menu: { en: "Menu", ar: "القائمة" },
  close: { en: "Close", ar: "إغلاق" },
  switchLang: { en: "العربية", ar: "English" },
  switchLangAria: { en: "Switch to Arabic", ar: "التبديل إلى الإنجليزية" },
  loading: { en: "Loading", ar: "جارٍ التحميل" },

  // --- calls to action ---
  getQuote: { en: "Get a free price", ar: "اطلب سعرًا مجانيًا" },
  getQuoteShort: { en: "Free price", ar: "سعر مجاني" },
  callNow: { en: "Call now", ar: "اتصل الآن" },
  whatsapp: { en: "WhatsApp us", ar: "راسلنا على واتساب" },
  bookVisit: { en: "Book a visit", ar: "احجز زيارة" },
  viewAll: { en: "See all", ar: "عرض الكل" },
  viewService: { en: "See service", ar: "عرض الخدمة" },
  viewProject: { en: "See project", ar: "عرض المشروع" },
  readMore: { en: "Read", ar: "اقرأ" },
  backTo: { en: "Back to", ar: "العودة إلى" },
  exploreServices: { en: "See our services", ar: "شاهد خدماتنا" },
  seeOurWork: { en: "See our work", ar: "شاهد أعمالنا" },
  sendPhoto: { en: "Send a photo on WhatsApp", ar: "أرسل صورة على واتساب" },

  // --- hero ---
  heroBadge: { en: "Riyadh · Floor polishing", ar: "الرياض · جلي وتلميع الأرضيات" },
  heroLine1: { en: "We make", ar: "نجعل" },
  heroLine2: { en: "floors shine.", ar: "أرضيتك تلمع." },
  scrollHint: { en: "Scroll", ar: "مرّر" },
  before: { en: "Before", ar: "قبل" },
  after: { en: "After", ar: "بعد" },
  dragToCompare: { en: "Drag to compare", ar: "اسحب للمقارنة" },

  // --- section headings ---
  sectionServices: { en: "What we polish", ar: "ماذا نلمّع" },
  sectionServicesTitle: { en: "Every hard floor. One team.", ar: "كل أرضية صلبة. فريق واحد." },
  sectionPlaces: { en: "Where we work", ar: "أين نعمل" },
  sectionPlacesTitle: { en: "Homes, mosques, offices and more", ar: "منازل ومساجد ومكاتب وأكثر" },
  sectionShine: { en: "Before and after", ar: "قبل وبعد" },
  sectionShineTitle: { en: "See the difference", ar: "شاهد الفرق" },
  sectionProcess: { en: "How it works", ar: "كيف نعمل" },
  sectionProcessTitle: { en: "Four easy steps", ar: "أربع خطوات سهلة" },
  sectionEquipment: { en: "Our machines", ar: "معداتنا" },
  sectionEquipmentTitle: { en: "Big machines. Real shine.", ar: "معدات قوية. لمعان حقيقي." },
  sectionProjects: { en: "Our work", ar: "أعمالنا" },
  sectionProjectsTitle: { en: "Floors we are proud of", ar: "أرضيات نفخر بها" },
  sectionGuarantees: { en: "Our promise", ar: "وعدنا" },
  sectionTestimonials: { en: "Happy clients", ar: "عملاء سعداء" },
  sectionTestimonialsTitle: { en: "What people say", ar: "ماذا يقول الناس" },
  sectionFaq: { en: "Questions", ar: "أسئلة" },
  sectionFaqTitle: { en: "Quick answers", ar: "إجابات سريعة" },
  sectionCoverage: { en: "Coverage", ar: "نطاق الخدمة" },
  sectionCoverageTitle: { en: "All of Riyadh", ar: "الرياض كلها" },
  sectionBlog: { en: "Tips", ar: "نصائح" },
  sectionBlogTitle: { en: "Simple tips for a shiny floor", ar: "نصائح بسيطة لأرضية لامعة" },
  sectionPackages: { en: "Packages", ar: "الباقات" },
  sectionPackagesTitle: { en: "Pick what fits you", ar: "اختر ما يناسبك" },
  sectionGallery: { en: "Gallery", ar: "المعرض" },

  // --- service / project detail ---
  startingFrom: { en: "From", ar: "من" },
  whatsIncluded: { en: "What you get", ar: "ماذا تحصل عليه" },
  howWeDeliver: { en: "How we do it", ar: "كيف ننفذه" },
  equipmentUsed: { en: "Machines we use", ar: "المعدات المستخدمة" },
  relatedServices: { en: "More services", ar: "خدمات أخرى" },
  moreProjects: { en: "More work", ar: "أعمال أخرى" },
  searchTerms: { en: "Also called", ar: "يُعرف أيضًا بـ" },
  theStory: { en: "The story", ar: "القصة" },
  place: { en: "Place", ar: "المكان" },
  year: { en: "Year", ar: "السنة" },
  district: { en: "District", ar: "الحي" },
  servicesUsed: { en: "Services", ar: "الخدمات" },
  whatItDoes: { en: "What it does", ar: "ماذا تفعل" },
  minRead: { en: "min read", ar: "دقائق قراءة" },
  published: { en: "Published", ar: "نُشر في" },

  // --- packages ---
  mostPopular: { en: "Most chosen", ar: "الأكثر اختيارًا" },
  bestFor: { en: "Best for", ar: "الأنسب لـ" },
  choosePlan: { en: "Choose this", ar: "اختر هذه" },
  goodToKnow: { en: "Good to know", ar: "معلومات مهمة" },

  // --- coverage ---
  responseTime: { en: "We reach you in", ar: "نصل إليك خلال" },
  minutes: { en: "min", ar: "دقيقة" },
  coreDistricts: { en: "Core districts", ar: "أحياء أساسية" },
  extendedDistricts: { en: "Extended coverage", ar: "تغطية موسّعة" },

  // --- contact form ---
  contactTitle: { en: "Tell us about your floor", ar: "أخبرنا عن أرضيتك" },
  contactLead: {
    en: "Send the details and we reply with a price, usually the same day. A photo helps most.",
    ar: "أرسل التفاصيل ونرد عليك بالسعر، عادةً في نفس اليوم. الصورة تساعد أكثر.",
  },
  fieldName: { en: "Your name", ar: "الاسم" },
  fieldPhone: { en: "Phone number", ar: "رقم الجوال" },
  fieldEmail: { en: "Email (optional)", ar: "البريد الإلكتروني (اختياري)" },
  fieldService: { en: "Which service?", ar: "أي خدمة؟" },
  fieldDistrict: { en: "District", ar: "الحي" },
  fieldMessage: { en: "About the floor", ar: "عن الأرضية" },
  fieldMessagePlaceholder: {
    en: "e.g. 180 m² marble in the majlis, dull with a few marks.",
    ar: "مثال: ١٨٠ م² رخام في المجلس، باهت مع بعض الآثار.",
  },
  selectPlaceholder: { en: "Select…", ar: "اختر…" },
  submit: { en: "Send", ar: "إرسال" },
  submitting: { en: "Sending…", ar: "جارٍ الإرسال…" },
  orWhatsapp: { en: "or send it on WhatsApp", ar: "أو أرسله على واتساب" },
  required: { en: "Required", ar: "مطلوب" },
  invalidPhone: { en: "Enter a valid Saudi mobile number", ar: "أدخل رقم جوال سعودي صحيح" },
  sentTitle: { en: "Got it!", ar: "وصلنا طلبك!" },
  sentBody: {
    en: "We will be in touch soon. For anything urgent, call or WhatsApp us.",
    ar: "سنتواصل معك قريبًا. ولأي أمر عاجل، اتصل أو راسلنا على واتساب.",
  },
  sendAnother: { en: "Send another", ar: "إرسال طلب آخر" },

  // --- contact page ---
  callUs: { en: "Call us", ar: "اتصل بنا" },
  emailUs: { en: "Email", ar: "البريد الإلكتروني" },
  visitUs: { en: "Office", ar: "المكتب" },
  openingHours: { en: "Hours", ar: "ساعات العمل" },

  // --- footer ---
  footerBlurb: {
    en: "Marble, tile, granite and terrazzo polishing across Riyadh. Fixed price. 90-day shine guarantee.",
    ar: "جلي وتلميع الرخام والبلاط والجرانيت والترازو في الرياض. سعر ثابت. ضمان لمعان ٩٠ يومًا.",
  },
  footerServices: { en: "Services", ar: "الخدمات" },
  footerCompany: { en: "Company", ar: "الشركة" },
  footerContact: { en: "Get in touch", ar: "تواصل معنا" },
  rights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  builtBy: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },

  // --- 404 ---
  notFoundTitle: { en: "That page is not here", ar: "هذه الصفحة غير موجودة" },
  notFoundBody: {
    en: "The link may be old. Try our services or get in touch.",
    ar: "قد يكون الرابط قديمًا. جرّب خدماتنا أو تواصل معنا.",
  },
  goHome: { en: "Back to home", ar: "العودة للرئيسية" },

  // --- misc ---
  trustedBy: { en: "Trusted across Riyadh since 2014", ar: "موثوقون في الرياض منذ ٢٠١٤" },
} satisfies Record<string, Bi>;

export type DictKey = keyof typeof d;

/** Returns a translator bound to one locale: t("getQuote"). */
export function getDictionary(locale: Locale) {
  return function t(key: DictKey): string {
    return d[key][locale];
  };
}

export type T = ReturnType<typeof getDictionary>;
