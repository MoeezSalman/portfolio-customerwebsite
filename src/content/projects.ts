import type { Bi } from "@/i18n/config";
import { photo, type MediaSlot } from "@/lib/media";

/**
 * Six recent jobs. Each one is told in pictures: the finished floor, a
 * before/after pair, and three plain facts.
 */
export type Project = {
  slug: string;
  title: Bi;
  place: Bi;
  district: Bi;
  year: string;
  /** slugs into content/services.ts */
  services: string[];
  /** One or two plain sentences. */
  summary: Bi;
  facts: { value: Bi; label: Bi }[];
  media: MediaSlot;
  before: MediaSlot;
  gallery: MediaSlot[];
  accent: "gold" | "aqua";
};

export const projects: Project[] = [
  {
    slug: "yasmin-villa",
    title: { en: "Family villa", ar: "فيلا عائلية" },
    place: { en: "Private villa", ar: "فيلا خاصة" },
    district: { en: "Al Yasmin", ar: "الياسمين" },
    year: "2026",
    services: ["marble-polishing", "stairs-countertops"],
    summary: {
      en: "The whole ground floor was dull after twelve years. We polished 320 m² of marble and the main staircase in two days.",
      ar: "الدور الأرضي كله كان باهتًا بعد اثني عشر عامًا. جلينا ٣٢٠ م² من الرخام والدرج الرئيسي في يومين.",
    },
    facts: [
      { value: { en: "320 m²", ar: "٣٢٠ م²" }, label: { en: "Marble", ar: "رخام" } },
      { value: { en: "2 days", ar: "يومان" }, label: { en: "Time", ar: "المدة" } },
      { value: { en: "88", ar: "٨٨" }, label: { en: "Gloss reading", ar: "درجة اللمعان" } },
    ],
    media: photo("villa-living", {
      en: "The finished living room with a mirror-shine marble floor",
      ar: "غرفة المعيشة بعد الانتهاء بأرضية رخام لامعة كالمرآة",
    }),
    before: photo("marble-stained", {
      en: "The dull, stained marble before polishing",
      ar: "الرخام الباهت المبقّع قبل الجلي",
    }),
    gallery: [
      photo("villa-entrance", { en: "The entrance hall and stairs after polishing", ar: "مدخل الفيلا والدرج بعد التلميع" }),
      photo("villa-lounge", { en: "The family lounge with its polished floor", ar: "صالة العائلة بأرضيتها المصقولة" }),
    ],
    accent: "gold",
  },
  {
    slug: "diriyah-mosque",
    title: { en: "Neighbourhood mosque", ar: "مسجد الحي" },
    place: { en: "Mosque", ar: "مسجد" },
    district: { en: "Diriyah", ar: "الدرعية" },
    year: "2026",
    services: ["marble-polishing", "crystallisation", "shine-maintenance"],
    summary: {
      en: "A prayer hall used five times a day needs a hard shine. We polished, crystallised, and now buff it every month.",
      ar: "قاعة صلاة تُستخدم خمس مرات يوميًا تحتاج لمعانًا صلبًا. جلينا وكرستلنا، والآن نلمّعها كل شهر.",
    },
    facts: [
      { value: { en: "900 m²", ar: "٩٠٠ م²" }, label: { en: "Marble", ar: "رخام" } },
      { value: { en: "3 nights", ar: "٣ ليالٍ" }, label: { en: "Time", ar: "المدة" } },
      { value: { en: "Monthly", ar: "شهريًا" }, label: { en: "Maintenance", ar: "الصيانة" } },
    ],
    media: photo("mosque-gold-hall", {
      en: "The mosque hall with its floor shining like a mirror",
      ar: "قاعة المسجد وأرضيتها تلمع كالمرآة",
    }),
    before: photo("before-hall", {
      en: "A dull hall floor before the work",
      ar: "أرضية قاعة باهتة قبل العمل",
    }),
    gallery: [
      photo("mosque-prayer-hall", { en: "The white marble prayer hall", ar: "قاعة الصلاة برخامها الأبيض" }),
      photo("mosque-columns", { en: "Columns reflected in the polished floor", ar: "الأعمدة تنعكس في الأرضية المصقولة" }),
    ],
    accent: "gold",
  },
  {
    slug: "olaya-office",
    title: { en: "Company head office", ar: "المقر الرئيسي لشركة" },
    place: { en: "Office tower lobby", ar: "بهو برج مكاتب" },
    district: { en: "Al Olaya", ar: "العليا" },
    year: "2025",
    services: ["granite-polishing", "shine-maintenance"],
    summary: {
      en: "Thousands of shoes a day had worn a grey path through the granite lobby. We polished it over one weekend and keep it shiny on a plan.",
      ar: "آلاف الأحذية يوميًا رسمت ممرًا رماديًا في بهو الجرانيت. جليناه في عطلة نهاية أسبوع ونحافظ على لمعانه بخطة دورية.",
    },
    facts: [
      { value: { en: "540 m²", ar: "٥٤٠ م²" }, label: { en: "Granite", ar: "جرانيت" } },
      { value: { en: "1 weekend", ar: "عطلة واحدة" }, label: { en: "Time", ar: "المدة" } },
      { value: { en: "Weekly", ar: "أسبوعيًا" }, label: { en: "Maintenance", ar: "الصيانة" } },
    ],
    media: photo("lobby-office", {
      en: "The office lobby floor after polishing",
      ar: "أرضية بهو المكتب بعد الجلي",
    }),
    before: photo("granite-tiles", {
      en: "The worn granite before the work",
      ar: "الجرانيت المتآكل قبل العمل",
    }),
    gallery: [
      photo("lobby-reception", { en: "The reception area", ar: "منطقة الاستقبال" }),
      photo("lobby-columns", { en: "Columns mirrored in the floor", ar: "الأعمدة منعكسة في الأرضية" }),
    ],
    accent: "aqua",
  },
  {
    slug: "hittin-hotel",
    title: { en: "Boutique hotel", ar: "فندق بوتيك" },
    place: { en: "Hotel lobby & corridors", ar: "بهو فندق وممراته" },
    district: { en: "Hittin", ar: "حطين" },
    year: "2025",
    services: ["marble-polishing", "crystallisation"],
    summary: {
      en: "The hotel could not close. We worked from midnight to 6 AM for one week and the guests never saw a machine.",
      ar: "الفندق لم يستطع الإغلاق. عملنا من منتصف الليل حتى السادسة صباحًا لأسبوع، ولم يرَ النزلاء أي معدة.",
    },
    facts: [
      { value: { en: "1,200 m²", ar: "١٬٢٠٠ م²" }, label: { en: "Marble", ar: "رخام" } },
      { value: { en: "7 nights", ar: "٧ ليالٍ" }, label: { en: "Time", ar: "المدة" } },
      { value: { en: "0", ar: "٠" }, label: { en: "Days closed", ar: "أيام إغلاق" } },
    ],
    media: photo("lobby-grand", {
      en: "The hotel lobby with its polished marble floor",
      ar: "بهو الفندق بأرضيته الرخامية المصقولة",
    }),
    before: photo("tiles-worn", {
      en: "Worn stone in a corridor before polishing",
      ar: "حجر متآكل في ممر قبل التلميع",
    }),
    gallery: [
      photo("corridor-grand", { en: "A polished corridor and staircase", ar: "ممر ودرج مصقولان" }),
      photo("lobby-steps", { en: "The lobby steps after polishing", ar: "درجات البهو بعد التلميع" }),
    ],
    accent: "gold",
  },
  {
    slug: "narjis-showroom",
    title: { en: "Car showroom", ar: "معرض سيارات" },
    place: { en: "Showroom floor", ar: "أرضية معرض" },
    district: { en: "Al Narjis", ar: "النرجس" },
    year: "2025",
    services: ["terrazzo-polishing", "scratch-stain-removal"],
    summary: {
      en: "Tyre marks and oil spots on a big terrazzo floor. We ground them out and polished the whole floor to a showroom shine.",
      ar: "آثار إطارات وبقع زيت على أرضية ترازو كبيرة. جليناها وأزلناها ولمّعنا الأرضية كلها بلمعان المعارض.",
    },
    facts: [
      { value: { en: "1,800 m²", ar: "١٬٨٠٠ م²" }, label: { en: "Terrazzo", ar: "ترازو" } },
      { value: { en: "4 days", ar: "٤ أيام" }, label: { en: "Time", ar: "المدة" } },
      { value: { en: "All", ar: "كلها" }, label: { en: "Stains removed", ar: "بقع أُزيلت" } },
    ],
    media: photo("showroom-white", {
      en: "The white showroom floor with clear reflections",
      ar: "أرضية المعرض البيضاء بانعكاسات واضحة",
    }),
    before: photo("marble-cracked", {
      en: "Marks and cracks on the floor before the work",
      ar: "آثار وشقوق في الأرضية قبل العمل",
    }),
    gallery: [
      photo("gallery-reflect", { en: "Reflections on the finished floor", ar: "انعكاسات على الأرضية بعد الانتهاء" }),
      photo("terrazzo", { en: "The terrazzo pattern after polishing", ar: "نقش الترازو بعد التلميع" }),
    ],
    accent: "aqua",
  },
  {
    slug: "sahafa-warehouse",
    title: { en: "Logistics warehouse", ar: "مستودع لوجستي" },
    place: { en: "Warehouse", ar: "مستودع" },
    district: { en: "Al Sahafa", ar: "الصحافة" },
    year: "2024",
    services: ["terrazzo-polishing", "shine-maintenance"],
    summary: {
      en: "A 4,000 m² concrete floor polished so hard and smooth that forklifts glide and dust is gone.",
      ar: "أرضية خرسانية بمساحة ٤٬٠٠٠ م² صُقلت حتى صارت صلبة وناعمة، فتنزلق الرافعات ويختفي الغبار.",
    },
    facts: [
      { value: { en: "4,000 m²", ar: "٤٬٠٠٠ م²" }, label: { en: "Concrete", ar: "خرسانة" } },
      { value: { en: "6 days", ar: "٦ أيام" }, label: { en: "Time", ar: "المدة" } },
      { value: { en: "Monthly", ar: "شهريًا" }, label: { en: "Maintenance", ar: "الصيانة" } },
    ],
    media: photo("warehouse-shine", {
      en: "The finished warehouse floor reflecting the roof lights",
      ar: "أرضية المستودع بعد الانتهاء تعكس أضواء السقف",
    }),
    before: photo("before-hall", {
      en: "The matte concrete floor before grinding",
      ar: "الأرضية الخرسانية الباهتة قبل الجلي",
    }),
    gallery: [
      photo("team-at-work", { en: "Our team on the warehouse floor", ar: "فريقنا على أرضية المستودع" }),
      photo("warehouse-epoxy", { en: "Another polished warehouse floor", ar: "أرضية مستودع أخرى مصقولة" }),
    ],
    accent: "aqua",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const projectSlugs = projects.map((p) => p.slug);
