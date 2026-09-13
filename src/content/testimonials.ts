import type { Bi } from "@/i18n/config";

export type Testimonial = {
  id: string;
  quote: Bi;
  name: Bi;
  role: Bi;
  service: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: {
      en: "Two companies before them sold me a coating that peeled. ShinePro ground the marble back properly and showed me the gloss readings before and after. Eighteen months on it still looks the same.",
      ar: "شركتان قبلهم باعوني طبقة تقشرت. شاين برو جلوا الرخام بشكل صحيح وأروني قياسات اللمعان قبل وبعد. وبعد ثمانية عشر شهرًا ما زال كما هو.",
    },
    name: { en: "Abdulaziz A.", ar: "عبدالعزيز أ." },
    role: { en: "Villa owner, Al Malqa", ar: "مالك فيلا، الملقا" },
    service: "marble-restoration",
    rating: 5,
  },
  {
    id: "t2",
    quote: {
      en: "They found a leak two previous contractors had missed, and opened forty centimetres of floor instead of tearing up the terrace. The report was detailed enough that my insurer accepted it without question.",
      ar: "وجدوا تسربًا فات على مقاولَين سابقَين، وفتحوا أربعين سنتيمترًا من الأرضية بدل تكسير التراس بالكامل. وكان التقرير مفصلًا لدرجة أن شركة التأمين قبلته دون نقاش.",
    },
    name: { en: "Mohammed R.", ar: "محمد ر." },
    role: { en: "Homeowner, Hittin", ar: "مالك منزل، حطين" },
    service: "leak-detection",
    rating: 5,
  },
  {
    id: "t3",
    quote: {
      en: "We manage fourteen floors. Before the contract we were firefighting; now I get a quarterly report telling me what will need budget next quarter. That alone changed how I plan the year.",
      ar: "ندير أربعة عشر طابقًا. قبل العقد كنا نطفئ الحرائق، والآن أحصل على تقرير ربع سنوي يخبرني بما سيحتاج ميزانية في الربع القادم. وهذا وحده غيّر طريقة تخطيطي للسنة.",
    },
    name: { en: "Faisal K.", ar: "فيصل ك." },
    role: { en: "Facilities manager, Olaya", ar: "مدير مرافق، العليا" },
    service: "annual-contracts",
    rating: 5,
  },
  {
    id: "t4",
    quote: {
      en: "What I appreciated most was being told a partial polish would look patchy. They talked me out of the cheaper option and explained why. That is not something you often hear.",
      ar: "أكثر ما قدّرته أنهم أخبروني بأن الجلي الجزئي سيبدو غير متجانس. أقنعوني بالعدول عن الخيار الأرخص وشرحوا السبب. وهذا أمر لا تسمعه كثيرًا.",
    },
    name: { en: "Nouf S.", ar: "نوف س." },
    role: { en: "Homeowner, Al Yasmin", ar: "مالكة منزل، الياسمين" },
    service: "floor-polishing",
    rating: 5,
  },
  {
    id: "t5",
    quote: {
      en: "Forty-six villas serviced in three weeks and not one family left without cooling overnight. We had nineteen emergency callouts the summer before and none the summer after.",
      ar: "ست وأربعون فيلا خلال ثلاثة أسابيع ولم تبقَ أسرة واحدة بلا تبريد ليلًا. كان لدينا تسعة عشر استدعاء طارئ في الصيف السابق ولا شيء في الصيف التالي.",
    },
    name: { en: "Turki M.", ar: "تركي م." },
    role: { en: "Compound board, Al Narjis", ar: "مجلس ملاك مجمّع، النرجس" },
    service: "ac-maintenance",
    rating: 5,
  },
  {
    id: "t6",
    quote: {
      en: "Five weeks from shell to opening, and they handed over two days early. The site manager answered every message the same day. For a fit-out, that is rare.",
      ar: "خمسة أسابيع من الهيكل إلى الافتتاح، وسلّموا قبل الموعد بيومين. ومدير الموقع كان يرد على كل رسالة في نفس اليوم. وهذا نادر في أعمال التشطيب.",
    },
    name: { en: "Layla H.", ar: "ليلى هـ." },
    role: { en: "Operations lead, Diriyah", ar: "مديرة عمليات، الدرعية" },
    service: "renovation",
    rating: 5,
  },
];
