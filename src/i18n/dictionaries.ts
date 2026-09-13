import type { Bi, Locale } from "./config";

/** Every UI string that is not part of the content layer. */
const d = {
  // --- global chrome ---
  skipToContent: { en: "Skip to content", ar: "تخطَّ إلى المحتوى" },
  menu: { en: "Menu", ar: "القائمة" },
  close: { en: "Close", ar: "إغلاق" },
  switchLang: { en: "العربية", ar: "English" },
  switchLangAria: {
    en: "Switch to Arabic",
    ar: "التبديل إلى الإنجليزية",
  },
  loading: { en: "Loading", ar: "جارٍ التحميل" },

  // --- calls to action ---
  getQuote: { en: "Get a free quote", ar: "احصل على عرض سعر مجاني" },
  getQuoteShort: { en: "Free quote", ar: "عرض سعر مجاني" },
  callNow: { en: "Call now", ar: "اتصل الآن" },
  whatsapp: { en: "WhatsApp us", ar: "راسلنا على واتساب" },
  bookVisit: { en: "Book a survey", ar: "احجز معاينة" },
  viewAll: { en: "View all", ar: "عرض الكل" },
  viewService: { en: "View service", ar: "عرض الخدمة" },
  viewProject: { en: "View project", ar: "عرض المشروع" },
  readMore: { en: "Read more", ar: "اقرأ المزيد" },
  backTo: { en: "Back to", ar: "العودة إلى" },
  exploreServices: { en: "Explore services", ar: "استكشف الخدمات" },
  seeOurWork: { en: "See our work", ar: "شاهد أعمالنا" },
  emergencyLine: { en: "24/7 emergency line", ar: "خط الطوارئ ٢٤ ساعة" },

  // --- hero ---
  heroBadge: {
    en: "Riyadh · Surfaces & Maintenance",
    ar: "الرياض · الأسطح والصيانة",
  },
  heroLine1: { en: "We bring back", ar: "نُعيد إلى أسطحك" },
  heroLine2: { en: "the shine", ar: "بريقها" },
  heroLine3: { en: "and keep it there.", ar: "ونحافظ عليه." },
  scrollHint: { en: "Scroll", ar: "مرّر" },

  // --- section headings ---
  sectionServices: { en: "What we do", ar: "ما نقوم به" },
  sectionServicesTitle: {
    en: "Fourteen trades. One accountable team.",
    ar: "أربع عشرة مهنة. فريق واحد مسؤول.",
  },
  sectionProcess: { en: "How it works", ar: "كيف نعمل" },
  sectionProcessTitle: {
    en: "From first photo to final handover",
    ar: "من أول صورة إلى التسليم النهائي",
  },
  sectionEquipment: { en: "Our machinery", ar: "معداتنا" },
  sectionEquipmentTitle: {
    en: "The tools decide the result",
    ar: "المعدات هي التي تحدد النتيجة",
  },
  sectionProjects: { en: "Selected work", ar: "أعمال مختارة" },
  sectionProjectsTitle: {
    en: "Jobs we are happy to be measured on",
    ar: "أعمال يسعدنا أن نُقاس بها",
  },
  sectionGuarantees: { en: "Our promise", ar: "التزامنا" },
  sectionTestimonials: { en: "Clients", ar: "عملاؤنا" },
  sectionTestimonialsTitle: {
    en: "What people say afterwards",
    ar: "ما يقوله الناس بعد الإنجاز",
  },
  sectionFaq: { en: "Questions", ar: "أسئلة" },
  sectionFaqTitle: { en: "Answered plainly", ar: "إجابات مباشرة" },
  sectionCoverage: { en: "Coverage", ar: "نطاق الخدمة" },
  sectionCoverageTitle: { en: "Where we work", ar: "أين نعمل" },
  sectionBlog: { en: "Journal", ar: "المدونة" },
  sectionBlogTitle: {
    en: "Things worth knowing before you hire anyone",
    ar: "أمور تستحق المعرفة قبل أن توظّف أحدًا",
  },
  sectionPackages: { en: "Packages", ar: "الباقات" },
  sectionPackagesTitle: {
    en: "Predictable cost, scheduled care",
    ar: "تكلفة متوقعة وصيانة مجدولة",
  },

  // --- service / project detail ---
  startingFrom: { en: "Starting from", ar: "ابتداءً من" },
  whatsIncluded: { en: "What's included", ar: "ما يشمله" },
  howWeDeliver: { en: "How we deliver it", ar: "كيف ننفّذه" },
  equipmentUsed: { en: "Equipment we use", ar: "المعدات المستخدمة" },
  relatedServices: { en: "Related services", ar: "خدمات ذات صلة" },
  moreProjects: { en: "More projects", ar: "مشاريع أخرى" },
  searchTerms: { en: "Also searched as", ar: "يُبحث عنها أيضًا بـ" },
  theChallenge: { en: "The challenge", ar: "التحدي" },
  ourApproach: { en: "Our approach", ar: "منهجنا" },
  theOutcome: { en: "The outcome", ar: "النتيجة" },
  client: { en: "Client", ar: "العميل" },
  sector: { en: "Sector", ar: "القطاع" },
  year: { en: "Year", ar: "السنة" },
  district: { en: "District", ar: "الحي" },
  scale: { en: "Scale", ar: "الحجم" },
  duration: { en: "Duration", ar: "المدة" },
  servicesUsed: { en: "Services", ar: "الخدمات" },
  specifications: { en: "Specifications", ar: "المواصفات" },
  whyItMatters: { en: "Why it matters", ar: "لماذا هي مهمة" },
  minRead: { en: "min read", ar: "دقائق قراءة" },
  published: { en: "Published", ar: "نُشر في" },

  // --- packages ---
  monthly: { en: "Monthly", ar: "شهري" },
  yearly: { en: "Yearly", ar: "سنوي" },
  perMonth: { en: "/ month", ar: "/ شهريًا" },
  perYear: { en: "/ year", ar: "/ سنويًا" },
  mostPopular: { en: "Most chosen", ar: "الأكثر اختيارًا" },
  bestFor: { en: "Best for", ar: "الأنسب لـ" },
  notIncluded: { en: "Not included", ar: "غير مشمول" },
  choosePlan: { en: "Choose this plan", ar: "اختر هذه الباقة" },
  saveWithYearly: { en: "Save with yearly billing", ar: "وفّر مع الدفع السنوي" },
  goodToKnow: { en: "Good to know", ar: "معلومات مهمة" },

  // --- coverage ---
  responseTime: { en: "Response", ar: "الاستجابة" },
  minutes: { en: "min", ar: "دقيقة" },
  coreDistricts: { en: "Core districts", ar: "أحياء أساسية" },
  extendedDistricts: { en: "Extended coverage", ar: "تغطية موسّعة" },

  // --- filters ---
  filterAll: { en: "All", ar: "الكل" },
  noResults: { en: "Nothing matches that filter.", ar: "لا توجد نتائج لهذا التصفية." },

  // --- contact form ---
  contactTitle: { en: "Tell us about the job", ar: "أخبرنا عن العمل المطلوب" },
  contactLead: {
    en: "Send the details and we will come back with an indicative price, usually the same day. Photos help more than descriptions.",
    ar: "أرسل التفاصيل وسنعود إليك بسعر تقريبي، عادةً في نفس اليوم. والصور أفيد من الأوصاف.",
  },
  fieldName: { en: "Your name", ar: "الاسم" },
  fieldPhone: { en: "Phone number", ar: "رقم الجوال" },
  fieldEmail: { en: "Email (optional)", ar: "البريد الإلكتروني (اختياري)" },
  fieldService: { en: "Which service?", ar: "أي خدمة؟" },
  fieldDistrict: { en: "District", ar: "الحي" },
  fieldMessage: { en: "Describe the job", ar: "صف العمل المطلوب" },
  fieldMessagePlaceholder: {
    en: "e.g. 180 m² of marble in the majlis, dull with a few etch marks near the serving area.",
    ar: "مثال: ١٨٠ م² رخام في المجلس، باهت مع بعض آثار الحموضة قرب منطقة الضيافة.",
  },
  selectPlaceholder: { en: "Select…", ar: "اختر…" },
  submit: { en: "Send request", ar: "إرسال الطلب" },
  submitting: { en: "Sending…", ar: "جارٍ الإرسال…" },
  orWhatsapp: { en: "or send it straight to WhatsApp", ar: "أو أرسله مباشرة عبر واتساب" },
  required: { en: "Required", ar: "مطلوب" },
  invalidPhone: {
    en: "Enter a valid Saudi mobile number",
    ar: "أدخل رقم جوال سعودي صحيح",
  },
  sentTitle: { en: "Request received", ar: "تم استلام طلبك" },
  sentBody: {
    en: "We will be in touch shortly. For anything urgent, call or WhatsApp us directly.",
    ar: "سنتواصل معك قريبًا. ولأي أمر عاجل، اتصل أو راسلنا على واتساب مباشرة.",
  },
  sendAnother: { en: "Send another", ar: "إرسال طلب آخر" },

  // --- contact page ---
  callUs: { en: "Call us", ar: "اتصل بنا" },
  emailUs: { en: "Email", ar: "البريد الإلكتروني" },
  visitUs: { en: "Office", ar: "المكتب" },
  openingHours: { en: "Hours", ar: "ساعات العمل" },

  // --- footer ---
  footerBlurb: {
    en: "Tile and marble polishing, plumbing, electrical, AC and full property maintenance across Riyadh — one accountable team, one fixed quote.",
    ar: "جلي وتلميع البلاط والرخام، والسباكة، والكهرباء، والتكييف، والصيانة الشاملة للعقارات في الرياض — فريق واحد مسؤول وعرض سعر ثابت.",
  },
  footerServices: { en: "Services", ar: "الخدمات" },
  footerCompany: { en: "Company", ar: "الشركة" },
  footerContact: { en: "Get in touch", ar: "تواصل معنا" },
  rights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  builtBy: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },

  // --- 404 ---
  notFoundTitle: { en: "That page is not here", ar: "هذه الصفحة غير موجودة" },
  notFoundBody: {
    en: "The link may be old, or the page may have moved. Try the services index or get in touch.",
    ar: "قد يكون الرابط قديمًا أو الصفحة قد نُقلت. جرّب صفحة الخدمات أو تواصل معنا.",
  },
  goHome: { en: "Back to home", ar: "العودة للرئيسية" },

  // --- misc ---
  trustedBy: { en: "Trusted across Riyadh since 2008", ar: "موثوقون في الرياض منذ ٢٠٠٨" },
  ratedBy: { en: "rated by clients", ar: "بتقييم العملاء" },
} satisfies Record<string, Bi>;

export type DictKey = keyof typeof d;

/** Returns a translator bound to one locale: `t("getQuote")`. */
export function getDictionary(locale: Locale) {
  return function t(key: DictKey): string {
    return d[key][locale];
  };
}

export type T = ReturnType<typeof getDictionary>;
