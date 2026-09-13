import type { Bi } from "@/i18n/config";

export type Faq = { q: Bi; a: Bi; group: Bi };

export const faqs: Faq[] = [
  {
    group: { en: "Booking & pricing", ar: "الحجز والأسعار" },
    q: { en: "How do I get a price?", ar: "كيف أحصل على سعر؟" },
    a: {
      en: "Send photos on WhatsApp and we can usually give an indicative range the same day. For anything over 100 m² or involving multiple trades, we survey on site first — that visit is free and there is no obligation.",
      ar: "أرسل الصور عبر واتساب ويمكننا عادةً إعطاء نطاق سعري تقريبي في نفس اليوم. أما ما يتجاوز ١٠٠ م² أو يشمل عدة مهن فنعاينه في الموقع أولًا — وهذه الزيارة مجانية ودون أي التزام.",
    },
  },
  {
    group: { en: "Booking & pricing", ar: "الحجز والأسعار" },
    q: { en: "Is the quote fixed?", ar: "هل العرض سعر ثابت؟" },
    a: {
      en: "Yes. Once you approve a written scope, that is the price. The only time it changes is if you add work, or if we open a wall and find something genuinely hidden — and in that case we stop and re-quote before continuing rather than billing you afterwards.",
      ar: "نعم. بمجرد موافقتك على نطاق عمل مكتوب، يصبح هذا هو السعر. ولا يتغير إلا إذا أضفت أعمالًا، أو إذا فتحنا جدارًا ووجدنا أمرًا خفيًا فعلًا — وعندها نتوقف ونقدّم عرضًا جديدًا قبل المتابعة بدل محاسبتك لاحقًا.",
    },
  },
  {
    group: { en: "Booking & pricing", ar: "الحجز والأسعار" },
    q: { en: "What payment methods do you accept?", ar: "ما طرق الدفع المقبولة؟" },
    a: {
      en: "Bank transfer, mada and cash. For projects over SAR 10,000 we work on staged payments tied to milestones, not upfront in full.",
      ar: "تحويل بنكي ومدى ونقدًا. وللمشاريع التي تتجاوز ١٠٬٠٠٠ ر.س نعمل بدفعات مرحلية مرتبطة بإنجاز مراحل محددة، لا دفعة كاملة مقدمًا.",
    },
  },
  {
    group: { en: "On the day", ar: "يوم التنفيذ" },
    q: { en: "Do I need to be home?", ar: "هل يجب أن أكون في المنزل؟" },
    a: {
      en: "For the initial survey and the final handover walk, yes. In between, many clients give us access and go to work. We send progress photos at the end of each day either way.",
      ar: "للمعاينة الأولية وجولة التسليم النهائية، نعم. أما بينهما فكثير من العملاء يمنحوننا الدخول ويذهبون لأعمالهم. ونرسل صور التقدم في نهاية كل يوم في الحالتين.",
    },
  },
  {
    group: { en: "On the day", ar: "يوم التنفيذ" },
    q: { en: "How much mess will there be?", ar: "كم سيكون حجم الفوضى؟" },
    a: {
      en: "Less than you expect. Every grinder and sander runs into HEPA extraction at source, floors are sheeted, and doorways are sealed. We clean the work area at the end of every day, not just at the end of the job.",
      ar: "أقل مما تتوقع. فكل جلاخة وصنفرة موصولة بشفط HEPA من المصدر، والأرضيات مغطاة، والمداخل مغلقة. وننظف منطقة العمل في نهاية كل يوم لا في نهاية المشروع فقط.",
    },
  },
  {
    group: { en: "On the day", ar: "يوم التنفيذ" },
    q: { en: "Do your technicians speak English?", ar: "هل يتحدث الفنيون الإنجليزية؟" },
    a: {
      en: "Team leads speak Arabic and English. If you would prefer one over the other, tell us when booking and we will assign accordingly.",
      ar: "قادة الفرق يتحدثون العربية والإنجليزية. وإن كنت تفضّل إحداهما، أخبرنا عند الحجز وسنخصص الفريق المناسب.",
    },
  },
  {
    group: { en: "Guarantees", ar: "الضمانات" },
    q: { en: "What does the 90-day warranty cover?", ar: "ماذا يغطي ضمان الـ٩٠ يومًا؟" },
    a: {
      en: "Workmanship. If a repair fails, a finish dulls prematurely, or something we installed comes loose within 90 days, we return and redo it at no charge. It does not cover new damage or fair wear — and we will be straight with you about which one it is.",
      ar: "جودة التنفيذ. فإذا فشل إصلاح أو بهت تشطيب قبل أوانه أو ارتخى شيء ركّبناه خلال ٩٠ يومًا، نعود وننفّذه من جديد دون تكلفة. ولا يغطي الأضرار الجديدة أو التآكل الطبيعي — وسنكون صريحين معك بشأن أيهما.",
    },
  },
  {
    group: { en: "Guarantees", ar: "الضمانات" },
    q: { en: "Are you licensed and insured?", ar: "هل أنتم مرخّصون ومؤمّنون؟" },
    a: {
      en: "Yes — commercial registration and public liability cover. We can send both documents before any work starts, and we would encourage you to ask any contractor for them.",
      ar: "نعم — سجل تجاري وتأمين مسؤولية عامة. ويمكننا إرسال الوثيقتين قبل بدء أي عمل، وننصحك بطلبهما من أي مقاول.",
    },
  },
  {
    group: { en: "Coverage", ar: "نطاق الخدمة" },
    q: { en: "Which areas do you serve?", ar: "ما المناطق التي تخدمونها؟" },
    a: {
      en: "All of Riyadh. Core northern districts get a four-hour emergency response; extended districts are scheduled next morning. Outside Riyadh we take project work only.",
      ar: "الرياض بالكامل. الأحياء الشمالية الأساسية تحظى باستجابة طارئة خلال أربع ساعات، والأحياء الموسّعة تُجدول لصباح اليوم التالي. وخارج الرياض نستقبل أعمال المشاريع فقط.",
    },
  },
  {
    group: { en: "Coverage", ar: "نطاق الخدمة" },
    q: { en: "Do you really operate 24/7?", ar: "هل تعملون فعلًا على مدار الساعة؟" },
    a: {
      en: "The emergency line is answered 24/7 for genuine emergencies — flooding, no power, sewage backup, total AC failure in summer. Routine work is scheduled during normal hours at standard rates.",
      ar: "خط الطوارئ يُرد عليه على مدار الساعة للحالات الطارئة الحقيقية — الغرق، انقطاع الكهرباء، ارتداد الصرف، توقف التكييف تمامًا في الصيف. أما الأعمال الاعتيادية فتُجدول في الأوقات المعتادة بالأسعار العادية.",
    },
  },
];

export const faqGroups = Array.from(
  new Map(faqs.map((f) => [f.group.en, f.group])).values(),
);
