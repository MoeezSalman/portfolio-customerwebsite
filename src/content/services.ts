import type { Bi } from "@/i18n/config";
import { photo, type MediaSlot } from "@/lib/media";

/**
 * Everything Jalibalat does is here — and it is all floor shining. Copy is
 * kept short and plain on purpose: the pictures do the explaining.
 */
export type Service = {
  slug: string;
  accent: "gold" | "aqua";
  flagship?: boolean;
  title: Bi;
  /** One plain sentence. */
  short: Bi;
  /** Two plain sentences at most. */
  hero: Bi;
  keywords: Bi<string[]>;
  /** Four short benefits. */
  features: Bi<string[]>;
  /** Three steps, one line each. */
  steps: { title: Bi; body: Bi }[];
  /** ids into content/equipment.ts */
  equipment: string[];
  faqs: { q: Bi; a: Bi }[];
  /** The main picture. */
  media: MediaSlot;
  /** A "before" picture for the slider. */
  before: MediaSlot;
  /** More pictures for the detail page. */
  gallery: MediaSlot[];
  startingFrom: Bi;
};

export const services: Service[] = [
  {
    slug: "marble-polishing",
    accent: "gold",
    flagship: true,
    title: { en: "Marble polishing", ar: "جلي وتلميع الرخام" },
    short: {
      en: "We grind and polish marble floors until they shine like a mirror.",
      ar: "نجلي أرضيات الرخام ونلمّعها حتى تلمع كالمرآة.",
    },
    hero: {
      en: "Old, dull marble becomes bright and smooth again. We remove the worn top layer and polish the real stone — no paint, no coating.",
      ar: "الرخام القديم الباهت يعود لامعًا وناعمًا. نزيل الطبقة التالفة ونلمّع الحجر نفسه — بدون طلاء أو طبقات.",
    },
    keywords: {
      en: ["marble polishing Riyadh", "marble floor shine", "marble grinding", "جلي رخام"],
      ar: ["جلي رخام الرياض", "تلميع رخام", "جلي وتلميع الرخام", "شركة جلي رخام"],
    },
    features: {
      en: ["Mirror shine", "Scratches removed", "Same-day use", "90-day guarantee"],
      ar: ["لمعان كالمرآة", "إزالة الخدوش", "استخدام في نفس اليوم", "ضمان ٩٠ يومًا"],
    },
    steps: [
      {
        title: { en: "Grind", ar: "الجلي" },
        body: { en: "Diamond discs cut away the dull, scratched layer.", ar: "أقراص الألماس تزيل الطبقة الباهتة والمخدوشة." },
      },
      {
        title: { en: "Smooth", ar: "التنعيم" },
        body: { en: "Finer and finer discs make the floor flat and smooth.", ar: "أقراص أنعم فأنعم تجعل الأرضية مستوية وناعمة." },
      },
      {
        title: { en: "Shine", ar: "التلميع" },
        body: { en: "Polishing powder brings out the deep mirror shine.", ar: "بودرة التلميع تُظهر اللمعان العميق كالمرآة." },
      },
    ],
    equipment: ["floor-grinder", "polisher", "vacuum", "gloss-meter"],
    faqs: [
      {
        q: { en: "Will there be dust?", ar: "هل سيكون هناك غبار؟" },
        a: { en: "No. We polish with water and the machines suck it all up.", ar: "لا. نجلي بالماء والمعدات تشفط كل شيء." },
      },
      {
        q: { en: "How long does it take?", ar: "كم يستغرق العمل؟" },
        a: { en: "A normal villa floor takes one day.", ar: "أرضية الفيلا العادية تستغرق يومًا واحدًا." },
      },
    ],
    media: photo("salon-marble", {
      en: "A white marble floor polished to a mirror shine",
      ar: "أرضية رخام بيضاء مصقولة حتى لمعان المرآة",
    }),
    before: photo("marble-stained", {
      en: "The same kind of marble before polishing: dull and stained",
      ar: "رخام مشابه قبل الجلي: باهت ومبقّع",
    }),
    gallery: [
      photo("marble-star", { en: "A polished marble floor with a star pattern", ar: "أرضية رخام مصقولة بنقش نجمة" }),
      photo("marble-sunlight", { en: "Sunlight on a smooth beige marble floor", ar: "ضوء الشمس على أرضية رخام بيج ناعمة" }),
      photo("lobby-grand", { en: "A grand lobby with shining marble", ar: "بهو فخم برخام لامع" }),
    ],
    startingFrom: { en: "SAR 25 / m²", ar: "٢٥ ر.س / م²" },
  },
  {
    slug: "tile-polishing",
    accent: "gold",
    title: { en: "Tile polishing", ar: "جلي وتلميع البلاط" },
    short: {
      en: "Ceramic and porcelain tiles come back bright, clean and even.",
      ar: "بلاط السيراميك والبورسلان يعود لامعًا ونظيفًا ومستويًا.",
    },
    hero: {
      en: "Tiles lose their shine and collect marks over the years. We polish the tiles and level the small edges between them, so the floor looks new.",
      ar: "البلاط يفقد لمعانه ويتجمع عليه الآثار مع السنين. نلمّع البلاط ونسوّي الفروق الصغيرة بين القطع، فتبدو الأرضية جديدة.",
    },
    keywords: {
      en: ["tile polishing Riyadh", "ceramic floor polishing", "porcelain shine", "جلي بلاط"],
      ar: ["جلي بلاط الرياض", "تلميع بلاط", "جلي سيراميك", "شركة جلي بلاط"],
    },
    features: {
      en: ["Bright, even shine", "Edges levelled", "Old marks gone", "No smell"],
      ar: ["لمعان متساوٍ", "تسوية الحواف", "إزالة الآثار القديمة", "بدون رائحة"],
    },
    steps: [
      { title: { en: "Clean", ar: "التنظيف" }, body: { en: "We deep-clean the tiles and the lines between them.", ar: "ننظف البلاط والخطوط بينه تنظيفًا عميقًا." } },
      { title: { en: "Level", ar: "التسوية" }, body: { en: "High edges are ground down so the floor is flat.", ar: "نجلي الحواف المرتفعة لتصبح الأرضية مستوية." } },
      { title: { en: "Polish", ar: "التلميع" }, body: { en: "Soft pads bring back the shine.", ar: "الوسائد الناعمة تعيد اللمعان." } },
    ],
    equipment: ["floor-grinder", "polisher", "vacuum"],
    faqs: [
      {
        q: { en: "Can you polish any tile?", ar: "هل تلمّعون أي نوع بلاط؟" },
        a: { en: "Most ceramic, porcelain and stone tiles, yes. Send a photo and we will tell you.", ar: "معظم أنواع السيراميك والبورسلان والحجر، نعم. أرسل صورة وسنخبرك." },
      },
      {
        q: { en: "Do I need to move furniture?", ar: "هل أحتاج لنقل الأثاث؟" },
        a: { en: "We move light furniture for you. Heavy items we plan together.", ar: "ننقل الأثاث الخفيف عنك. أما الثقيل فنخطط له معًا." },
      },
    ],
    media: photo("corridor-geometric", {
      en: "A tiled corridor polished to a reflective shine",
      ar: "ممر مبلّط مصقول حتى صار عاكسًا",
    }),
    before: photo("tiles-worn", {
      en: "Old worn tiles with dirty grout lines before work",
      ar: "بلاط قديم متآكل بفواصل متسخة قبل العمل",
    }),
    gallery: [
      photo("tiles-geometric", { en: "Geometric stone tiles after polishing", ar: "بلاط حجري هندسي بعد التلميع" }),
      photo("marble-checker", { en: "A black and white tiled floor reflecting the lights", ar: "أرضية بلاط أبيض وأسود تعكس الأضواء" }),
      photo("hallway-warm", { en: "A warm hallway with a glossy tiled floor", ar: "ممر دافئ بأرضية بلاط لامعة" }),
    ],
    startingFrom: { en: "SAR 15 / m²", ar: "١٥ ر.س / م²" },
  },
  {
    slug: "granite-polishing",
    accent: "aqua",
    title: { en: "Granite polishing", ar: "جلي وتلميع الجرانيت" },
    short: {
      en: "Hard granite floors and steps polished to a deep, glassy shine.",
      ar: "أرضيات ودرجات الجرانيت الصلبة تُصقل حتى لمعان زجاجي عميق.",
    },
    hero: {
      en: "Granite is the hardest floor stone, so it needs the strongest machines. We have them. The result is a deep shine that lasts for years.",
      ar: "الجرانيت أقسى أحجار الأرضيات ويحتاج أقوى المعدات. وهي عندنا. النتيجة لمعان عميق يدوم سنوات.",
    },
    keywords: {
      en: ["granite polishing Riyadh", "granite floor shine", "جلي جرانيت"],
      ar: ["جلي جرانيت الرياض", "تلميع جرانيت", "جلي وتلميع الجرانيت"],
    },
    features: {
      en: ["Deep glassy shine", "Steps and floors", "Lasts for years", "Anti-slip option"],
      ar: ["لمعان زجاجي عميق", "الدرج والأرضيات", "يدوم سنوات", "خيار مانع للانزلاق"],
    },
    steps: [
      { title: { en: "Cut", ar: "القطع" }, body: { en: "Heavy diamond discs flatten the surface.", ar: "أقراص ألماس ثقيلة تسوّي السطح." } },
      { title: { en: "Hone", ar: "التنعيم" }, body: { en: "Seven grades of discs make it smooth.", ar: "سبع درجات من الأقراص تجعله ناعمًا." } },
      { title: { en: "Shine", ar: "التلميع" }, body: { en: "A final high-speed polish gives the glassy look.", ar: "تلميع أخير بسرعة عالية يعطي المظهر الزجاجي." } },
    ],
    equipment: ["floor-grinder", "hand-grinder", "polisher", "vacuum"],
    faqs: [
      {
        q: { en: "Can you make granite less slippery?", ar: "هل يمكن جعل الجرانيت أقل انزلاقًا؟" },
        a: { en: "Yes. We can finish it with a safe, anti-slip surface for wet areas.", ar: "نعم. يمكننا إنهاؤه بسطح آمن مانع للانزلاق للمناطق الرطبة." },
      },
      {
        q: { en: "Do you polish outdoor granite?", ar: "هل تلمّعون الجرانيت الخارجي؟" },
        a: { en: "Yes — entrances, steps and courtyards.", ar: "نعم — المداخل والدرج والأفنية." },
      },
    ],
    media: photo("granite", {
      en: "A close view of polished granite with a deep shine",
      ar: "لقطة قريبة لجرانيت مصقول بلمعان عميق",
    }),
    before: photo("granite-tiles", {
      en: "Rough granite tiles before polishing",
      ar: "بلاط جرانيت خشن قبل التلميع",
    }),
    gallery: [
      photo("kitchen-granite", { en: "A kitchen with polished granite counters", ar: "مطبخ برخام جرانيت مصقول" }),
      photo("lobby-office", { en: "An office lobby with a polished stone floor", ar: "بهو مكتب بأرضية حجرية مصقولة" }),
      photo("marble-black-white", { en: "Dark polished stone reflecting the ceiling", ar: "حجر داكن مصقول يعكس السقف" }),
    ],
    startingFrom: { en: "SAR 30 / m²", ar: "٣٠ ر.س / م²" },
  },
  {
    slug: "terrazzo-polishing",
    accent: "aqua",
    title: { en: "Terrazzo & mosaic", ar: "جلي الترازو والموزاييك" },
    short: {
      en: "Classic terrazzo floors restored to a smooth, glossy finish.",
      ar: "أرضيات الترازو الكلاسيكية تعود ناعمة ولامعة.",
    },
    hero: {
      en: "Many older villas in Riyadh have beautiful terrazzo hidden under years of wear. We grind it flat and polish it until the colours shine again.",
      ar: "كثير من الفلل القديمة في الرياض فيها ترازو جميل مختبئ تحت سنوات من الاستخدام. نجليه ونلمّعه حتى تعود ألوانه للمعان.",
    },
    keywords: {
      en: ["terrazzo polishing Riyadh", "mosaic floor restoration", "جلي ترازو"],
      ar: ["جلي ترازو الرياض", "تلميع موزاييك", "ترميم أرضيات ترازو"],
    },
    features: {
      en: ["Colours come back", "Holes filled", "Flat and smooth", "Sealed against stains"],
      ar: ["عودة الألوان", "تعبئة الفجوات", "مستوٍ وناعم", "عزل ضد البقع"],
    },
    steps: [
      { title: { en: "Grind", ar: "الجلي" }, body: { en: "We cut through the old surface to fresh stone.", ar: "نقطع السطح القديم حتى الحجر النقي." } },
      { title: { en: "Fill", ar: "التعبئة" }, body: { en: "Small holes and cracks are filled to match.", ar: "الفجوات والشقوق الصغيرة تُعبّأ بلون مطابق." } },
      { title: { en: "Polish & seal", ar: "التلميع والعزل" }, body: { en: "We polish to a shine and seal it.", ar: "نلمّع حتى اللمعان ثم نعزل." } },
    ],
    equipment: ["floor-grinder", "polisher", "vacuum", "gloss-meter"],
    faqs: [
      {
        q: { en: "My terrazzo has holes. Can you fix them?", ar: "الترازو فيه فجوات. هل يمكن إصلاحها؟" },
        a: { en: "Yes. We fill them with matching colour before polishing.", ar: "نعم. نعبّئها بلون مطابق قبل التلميع." },
      },
      {
        q: { en: "Is terrazzo worth restoring?", ar: "هل يستحق الترازو الترميم؟" },
        a: { en: "Almost always. It is cheaper than a new floor and looks better.", ar: "غالبًا نعم. أرخص من أرضية جديدة وأجمل شكلًا." },
      },
    ],
    media: photo("terrazzo", {
      en: "A restored terrazzo floor with a soft shine",
      ar: "أرضية ترازو مرمّمة بلمعان ناعم",
    }),
    before: photo("before-hall", {
      en: "A dull hall floor before grinding",
      ar: "أرضية قاعة باهتة قبل الجلي",
    }),
    gallery: [
      photo("terrazzo-black", { en: "Black terrazzo with white chips after polishing", ar: "ترازو أسود بحبيبات بيضاء بعد التلميع" }),
      photo("showroom-white", { en: "A white showroom floor with reflections", ar: "أرضية معرض بيضاء بانعكاسات" }),
      photo("warehouse-shine", { en: "A big polished floor reflecting the lights", ar: "أرضية كبيرة مصقولة تعكس الأضواء" }),
    ],
    startingFrom: { en: "SAR 20 / m²", ar: "٢٠ ر.س / م²" },
  },
  {
    slug: "crystallisation",
    accent: "gold",
    title: { en: "Marble crystallisation", ar: "تلميع الرخام بالكريستال" },
    short: {
      en: "A hard, shiny top layer that keeps marble bright for longer.",
      ar: "طبقة علوية صلبة لامعة تحافظ على بريق الرخام مدة أطول.",
    },
    hero: {
      en: "Crystallisation hardens the marble surface and gives it a wet-look shine. It is the fast way to refresh a floor that is already in good shape.",
      ar: "الكريستال يقسّي سطح الرخام ويعطيه لمعانًا كالمبلول. وهو الطريقة السريعة لتجديد أرضية حالتها جيدة أصلًا.",
    },
    keywords: {
      en: ["marble crystallisation Riyadh", "marble crystallization", "كريستال رخام"],
      ar: ["كريستال رخام الرياض", "تلميع رخام بالكريستال", "تكريستل الرخام"],
    },
    features: {
      en: ["Wet-look shine", "Harder surface", "Done in hours", "Great for lobbies"],
      ar: ["لمعان كالمبلول", "سطح أقسى", "ينجز في ساعات", "مثالي للمداخل"],
    },
    steps: [
      { title: { en: "Clean", ar: "التنظيف" }, body: { en: "The floor is washed and dried.", ar: "تُغسل الأرضية وتُجفف." } },
      { title: { en: "Crystallise", ar: "الكريستال" }, body: { en: "A special liquid reacts with the marble under a steel pad.", ar: "سائل خاص يتفاعل مع الرخام تحت وسادة فولاذية." } },
      { title: { en: "Buff", ar: "التلميع" }, body: { en: "A final buff brings the mirror shine.", ar: "تلميع أخير يمنح لمعان المرآة." } },
    ],
    equipment: ["polisher", "vacuum", "gloss-meter"],
    faqs: [
      {
        q: { en: "Is this the same as polishing?", ar: "هل هذا نفس الجلي؟" },
        a: { en: "No. Polishing grinds the stone. Crystallisation hardens the top. Dull floors need polishing first.", ar: "لا. الجلي يقطع الحجر، والكريستال يقسّي السطح. الأرضيات الباهتة تحتاج جليًا أولًا." },
      },
      {
        q: { en: "How often should I do it?", ar: "كم مرة أحتاجه؟" },
        a: { en: "Every 6 to 12 months for busy floors.", ar: "كل ٦ إلى ١٢ شهرًا للأرضيات كثيرة الاستخدام." },
      },
    ],
    media: photo("marble-black-white", {
      en: "Crystallised dark marble with a wet-look shine",
      ar: "رخام داكن مكرستل بلمعان كالمبلول",
    }),
    before: photo("marble-stained", {
      en: "Dull marble before crystallisation",
      ar: "رخام باهت قبل الكريستال",
    }),
    gallery: [
      photo("mosque-gold-hall", { en: "A mosque hall with a mirror-shine floor", ar: "قاعة مسجد بأرضية لامعة كالمرآة" }),
      photo("lobby-columns", { en: "A lobby with columns reflected in the floor", ar: "بهو بأعمدة تنعكس في الأرضية" }),
      photo("marble-checker", { en: "Checkered marble with a deep shine", ar: "رخام شطرنجي بلمعان عميق" }),
    ],
    startingFrom: { en: "SAR 12 / m²", ar: "١٢ ر.س / م²" },
  },
  {
    slug: "scratch-stain-removal",
    accent: "aqua",
    title: { en: "Scratch & stain removal", ar: "إزالة الخدوش والبقع" },
    short: {
      en: "Deep scratches, dull spots and stains taken out of the stone.",
      ar: "إزالة الخدوش العميقة والبقع والمناطق الباهتة من الحجر.",
    },
    hero: {
      en: "Dragged furniture, spilled juice, water rings — we grind the damage out and polish the spot to match the rest of the floor.",
      ar: "أثاث مسحوب، عصير مسكوب، آثار ماء — نجلي الضرر ونلمّع المكان ليطابق باقي الأرضية.",
    },
    keywords: {
      en: ["marble scratch removal", "stain removal marble Riyadh", "إزالة خدوش الرخام"],
      ar: ["إزالة خدوش الرخام", "إزالة بقع الرخام الرياض", "معالجة خدوش البلاط"],
    },
    features: {
      en: ["Scratches gone", "Stains lifted", "Spot repairs", "Matches the rest"],
      ar: ["زوال الخدوش", "رفع البقع", "إصلاح موضعي", "مطابق لباقي الأرضية"],
    },
    steps: [
      { title: { en: "Check", ar: "الفحص" }, body: { en: "We see how deep the mark goes.", ar: "نتحقق من عمق الأثر." } },
      { title: { en: "Grind", ar: "الجلي" }, body: { en: "The damaged layer is ground away.", ar: "نزيل الطبقة المتضررة بالجلي." } },
      { title: { en: "Blend", ar: "المطابقة" }, body: { en: "We polish so you cannot see where the repair was.", ar: "نلمّع حتى لا يظهر مكان الإصلاح." } },
    ],
    equipment: ["hand-grinder", "polisher", "vacuum"],
    faqs: [
      {
        q: { en: "Can every stain be removed?", ar: "هل تزول كل البقع؟" },
        a: { en: "Most, yes. Very deep rust or oil may leave a light shadow. We tell you before we start.", ar: "معظمها نعم. الصدأ أو الزيت العميق جدًا قد يترك ظلًا خفيفًا. نخبرك قبل أن نبدأ." },
      },
      {
        q: { en: "Do you fix only one area?", ar: "هل تصلحون منطقة واحدة فقط؟" },
        a: { en: "Yes. Spot repairs are common and quick.", ar: "نعم. الإصلاح الموضعي شائع وسريع." },
      },
    ],
    media: photo("machine-hand-grinder", {
      en: "A technician grinding scratches out of a stone floor",
      ar: "فني يجلي الخدوش من أرضية حجرية",
    }),
    before: photo("marble-cracked", {
      en: "Dark marble with marks and cracks before repair",
      ar: "رخام داكن بآثار وشقوق قبل الإصلاح",
    }),
    gallery: [
      photo("marble-stained", { en: "A stained marble floor waiting for repair", ar: "أرضية رخام مبقّعة تنتظر الإصلاح" }),
      photo("tiles-worn", { en: "Worn tiles with marks before treatment", ar: "بلاط متآكل بآثار قبل المعالجة" }),
      photo("salon-marble", { en: "The same kind of floor after our work", ar: "أرضية مشابهة بعد عملنا" }),
    ],
    startingFrom: { en: "SAR 150 / visit", ar: "١٥٠ ر.س / زيارة" },
  },
  {
    slug: "grout-cleaning",
    accent: "aqua",
    title: { en: "Grout cleaning & sealing", ar: "تنظيف وعزل الفواصل" },
    short: {
      en: "The lines between your tiles cleaned and protected from dirt.",
      ar: "الخطوط بين البلاط تُنظف وتُحمى من الأوساخ.",
    },
    hero: {
      en: "Dirty grout lines make a clean floor look old. We machine-clean the lines and seal them, so dirt cannot get in again.",
      ar: "الفواصل المتسخة تجعل الأرضية النظيفة تبدو قديمة. ننظف الفواصل بالمعدات ونعزلها فلا تدخلها الأوساخ مجددًا.",
    },
    keywords: {
      en: ["grout cleaning Riyadh", "tile grout sealing", "تنظيف فواصل البلاط"],
      ar: ["تنظيف فواصل البلاط الرياض", "عزل فواصل السيراميك", "تنظيف فواصل"],
    },
    features: {
      en: ["Lines look new", "Sealed for years", "Kitchens & bathrooms", "Safe products"],
      ar: ["فواصل كالجديدة", "عزل لسنوات", "المطابخ والحمامات", "مواد آمنة"],
    },
    steps: [
      { title: { en: "Scrub", ar: "الفرك" }, body: { en: "Machine brushes lift the dirt out of the lines.", ar: "فرش المعدات ترفع الأوساخ من الفواصل." } },
      { title: { en: "Rinse", ar: "الشطف" }, body: { en: "Everything is rinsed and vacuumed dry.", ar: "يُشطف كل شيء ويُجفف بالشفط." } },
      { title: { en: "Seal", ar: "العزل" }, body: { en: "A clear sealer keeps the lines clean.", ar: "عازل شفاف يحافظ على نظافة الفواصل." } },
    ],
    equipment: ["polisher", "vacuum"],
    faqs: [
      {
        q: { en: "Can you change the grout colour?", ar: "هل يمكن تغيير لون الفواصل؟" },
        a: { en: "Yes, we can re-colour grout lines in most colours.", ar: "نعم، يمكننا إعادة تلوين الفواصل بمعظم الألوان." },
      },
      {
        q: { en: "How long does the seal last?", ar: "كم يدوم العزل؟" },
        a: { en: "Two to three years in a normal home.", ar: "من سنتين إلى ثلاث في المنزل العادي." },
      },
    ],
    media: photo("tiles-white", {
      en: "White tiles with clean, bright grout lines",
      ar: "بلاط أبيض بفواصل نظيفة ومشرقة",
    }),
    before: photo("tiles-worn", {
      en: "Old tiles with dark, dirty grout lines",
      ar: "بلاط قديم بفواصل داكنة متسخة",
    }),
    gallery: [
      photo("bathroom-marble", { en: "A marble bathroom with clean tile lines", ar: "حمام رخامي بفواصل بلاط نظيفة" }),
      photo("tiles-geometric", { en: "Patterned tiles with fresh grout", ar: "بلاط منقوش بفواصل جديدة" }),
      photo("kitchen-marble", { en: "A marble kitchen island and floor", ar: "جزيرة مطبخ وأرضية من الرخام" }),
    ],
    startingFrom: { en: "SAR 8 / m²", ar: "٨ ر.س / م²" },
  },
  {
    slug: "stairs-countertops",
    accent: "gold",
    title: { en: "Stairs & countertops", ar: "الدرج والأسطح" },
    short: {
      en: "Marble stairs, kitchen tops and bathroom counters polished by hand.",
      ar: "درج الرخام وأسطح المطابخ والحمامات تُصقل يدويًا.",
    },
    hero: {
      en: "Small surfaces need small tools and a steady hand. We polish stairs, counters and window sills so they match your floor.",
      ar: "الأسطح الصغيرة تحتاج أدوات صغيرة ويدًا ثابتة. نلمّع الدرج والأسطح وعتبات النوافذ لتطابق أرضيتك.",
    },
    keywords: {
      en: ["marble stairs polishing", "countertop polishing Riyadh", "جلي درج رخام"],
      ar: ["جلي درج رخام", "تلميع رخام المطبخ الرياض", "تلميع أسطح رخام"],
    },
    features: {
      en: ["Stairs and edges", "Kitchen tops", "Bathroom counters", "Hand finished"],
      ar: ["الدرج والحواف", "أسطح المطابخ", "أسطح الحمامات", "تشطيب يدوي"],
    },
    steps: [
      { title: { en: "Protect", ar: "الحماية" }, body: { en: "We cover walls and cabinets.", ar: "نغطي الجدران والخزائن." } },
      { title: { en: "Hand polish", ar: "التلميع اليدوي" }, body: { en: "Small machines polish every step and edge.", ar: "معدات صغيرة تلمّع كل درجة وحافة." } },
      { title: { en: "Seal", ar: "العزل" }, body: { en: "Kitchen tops get a food-safe sealer.", ar: "أسطح المطبخ تُعزل بمادة آمنة غذائيًا." } },
    ],
    equipment: ["hand-grinder", "vacuum"],
    faqs: [
      {
        q: { en: "Can you remove a burn mark on the kitchen top?", ar: "هل يمكن إزالة أثر حرق من سطح المطبخ؟" },
        a: { en: "Usually yes, if it is on the surface.", ar: "عادةً نعم، إذا كان على السطح." },
      },
      {
        q: { en: "Do you polish outdoor stairs?", ar: "هل تلمّعون الدرج الخارجي؟" },
        a: { en: "Yes, with an anti-slip finish if you want.", ar: "نعم، مع تشطيب مانع للانزلاق إن رغبت." },
      },
    ],
    media: photo("stairs-marble", {
      en: "A curved marble staircase with a soft polished shine",
      ar: "درج رخامي منحنٍ بلمعان مصقول ناعم",
    }),
    before: photo("granite-tiles", {
      en: "Rough stone before hand polishing",
      ar: "حجر خشن قبل التلميع اليدوي",
    }),
    gallery: [
      photo("kitchen-granite", { en: "Polished granite kitchen counters", ar: "أسطح مطبخ جرانيت مصقولة" }),
      photo("kitchen-marble", { en: "A polished marble kitchen island", ar: "جزيرة مطبخ رخامية مصقولة" }),
      photo("bathroom-dark", { en: "A dark marble bathroom counter", ar: "سطح حمام من الرخام الداكن" }),
    ],
    startingFrom: { en: "SAR 35 / m²", ar: "٣٥ ر.س / م²" },
  },
  {
    slug: "shine-maintenance",
    accent: "gold",
    title: { en: "Shine maintenance plan", ar: "خطة صيانة اللمعان" },
    short: {
      en: "We come back every month so your floor never goes dull again.",
      ar: "نعود كل شهر حتى لا تبهت أرضيتك مرة أخرى.",
    },
    hero: {
      en: "For offices, mosques, hotels and busy homes. A quick buff on a schedule keeps the shine up and costs far less than a full polish later.",
      ar: "للمكاتب والمساجد والفنادق والمنازل كثيرة الحركة. تلميع سريع بجدول ثابت يحافظ على اللمعان ويكلّف أقل بكثير من جلي كامل لاحقًا.",
    },
    keywords: {
      en: ["floor maintenance contract Riyadh", "marble maintenance plan", "صيانة أرضيات"],
      ar: ["عقد صيانة أرضيات الرياض", "صيانة رخام دورية", "عقد تلميع أرضيات"],
    },
    features: {
      en: ["Monthly or weekly", "Always shiny", "One fixed fee", "Priority service"],
      ar: ["شهري أو أسبوعي", "لمعان دائم", "رسوم ثابتة", "أولوية في الخدمة"],
    },
    steps: [
      { title: { en: "Plan", ar: "الخطة" }, body: { en: "We agree how often to visit.", ar: "نتفق على عدد الزيارات." } },
      { title: { en: "Visit", ar: "الزيارة" }, body: { en: "We buff the floor outside your busy hours.", ar: "نلمّع الأرضية خارج أوقات الذروة." } },
      { title: { en: "Report", ar: "التقرير" }, body: { en: "You get a photo report after every visit.", ar: "تصلك صور بعد كل زيارة." } },
    ],
    equipment: ["ride-on-scrubber", "polisher", "gloss-meter"],
    faqs: [
      {
        q: { en: "Is there a contract?", ar: "هل هناك عقد؟" },
        a: { en: "Yes, but you can stop with one month's notice.", ar: "نعم، لكن يمكنك الإيقاف بإشعار قبل شهر." },
      },
      {
        q: { en: "Do you work at night?", ar: "هل تعملون ليلًا؟" },
        a: { en: "Yes, for offices and shops we often work after closing.", ar: "نعم، للمكاتب والمحلات نعمل غالبًا بعد الإغلاق." },
      },
    ],
    media: photo("machine-in-hall", {
      en: "A technician buffing a large hall floor with a ride-on machine",
      ar: "فني يلمّع أرضية قاعة كبيرة بمعدة ركوب",
    }),
    before: photo("before-hall", {
      en: "A big floor before its regular buff",
      ar: "أرضية كبيرة قبل تلميعها الدوري",
    }),
    gallery: [
      photo("machine-rideon", { en: "Our ride-on floor machine", ar: "معدة الأرضيات الراكبة لدينا" }),
      photo("team-at-work", { en: "Our team working on a large shiny floor", ar: "فريقنا يعمل على أرضية كبيرة لامعة" }),
      photo("lobby-office", { en: "An office lobby kept shiny all year", ar: "بهو مكتب يبقى لامعًا طوال العام" }),
    ],
    startingFrom: { en: "SAR 6 / m² / month", ar: "٦ ر.س / م² / شهريًا" },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
