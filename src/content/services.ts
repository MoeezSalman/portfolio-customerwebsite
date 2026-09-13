import type { Bi } from "@/i18n/config";
import { slot, type MediaSlot } from "@/lib/media";

export type Service = {
  slug: string;
  icon: string;
  accent: "gold" | "aqua";
  flagship?: boolean;
  title: Bi;
  short: Bi;
  hero: Bi;
  keywords: Bi<string[]>;
  features: Bi<string[]>;
  deliverables: { title: Bi; body: Bi }[];
  /** ids into content/equipment.ts */
  equipment: string[];
  faqs: { q: Bi; a: Bi }[];
  media: MediaSlot;
  startingFrom: Bi;
};

export const services: Service[] = [
  {
    slug: "floor-polishing",
    icon: "sparkle",
    accent: "gold",
    flagship: true,
    title: {
      en: "Tile & Floor Polishing",
      ar: "جلي وتلميع البلاط والأرضيات",
    },
    short: {
      en: "Diamond grinding and multi-stage polishing that pulls scratches, stains and dullness out of tile, terrazzo and stone.",
      ar: "جلي بالألماس وتلميع متعدد المراحل يزيل الخدوش والبقع والبهتان من البلاط والترازو والأرضيات الحجرية.",
    },
    hero: {
      en: "Floors do not wear out — their top 200 microns do. We grind that damaged layer away with progressively finer diamond tooling, then refine the surface back to a mirror through honing, polishing and densification. The result is not a coating that peels in a year; it is the stone itself, made flat and reflective again.",
      ar: "الأرضيات لا تتلف — الطبقة العليا منها فقط بسماكة ٢٠٠ ميكرون هي التي تتلف. نزيل هذه الطبقة التالفة بأقراص ألماسية متدرجة النعومة، ثم نعيد صقل السطح حتى يعود كالمرآة عبر التنعيم والتلميع والتقسية. النتيجة ليست طبقة طلاء تتقشر بعد عام — بل الحجر نفسه وقد عاد مستويًا وعاكسًا للضوء.",
    },
    keywords: {
      en: [
        "tile polishing Riyadh",
        "floor polishing company",
        "terrazzo restoration",
        "scratch removal flooring",
        "diamond floor grinding",
        "commercial floor polishing Saudi Arabia",
      ],
      ar: [
        "جلي بلاط الرياض",
        "شركة جلي وتلميع الأرضيات",
        "تلميع الترازو",
        "إزالة خدوش الأرضيات",
        "جلي أرضيات بالألماس",
        "جلي وتلميع تجاري في السعودية",
      ],
    },
    features: {
      en: [
        "Scratch, scuff and trolley-mark removal",
        "Grout line levelling and lippage correction",
        "Stain and efflorescence extraction",
        "Gloss levels from satin to full mirror",
        "Anti-slip finish option for wet areas",
        "Residential villas and commercial facilities",
      ],
      ar: [
        "إزالة الخدوش والاحتكاكات وآثار العربات",
        "تسوية خطوط الفواصل ومعالجة فروق الارتفاع",
        "استخراج البقع والأملاح المتزهرة",
        "درجات لمعان من الساتان إلى المرآة الكاملة",
        "خيار تشطيب مانع للانزلاق للمناطق الرطبة",
        "الفلل السكنية والمنشآت التجارية",
      ],
    },
    deliverables: [
      {
        title: { en: "Surface survey", ar: "معاينة السطح" },
        body: {
          en: "We identify the stone, measure lippage and test a one-square-metre patch before quoting.",
          ar: "نحدد نوع الحجر ونقيس فروق الارتفاع ونختبر متر مربع واحد قبل تقديم العرض.",
        },
      },
      {
        title: { en: "Cut, hone, polish", ar: "الجلي والتنعيم والتلميع" },
        body: {
          en: "Three to seven diamond passes from 50 to 3000 grit, wet or dry depending on the substrate.",
          ar: "من ثلاث إلى سبع مراحل ألماسية من ٥٠ إلى ٣٠٠٠ حبيبة، جافة أو رطبة حسب نوع الأرضية.",
        },
      },
      {
        title: { en: "Densify & seal", ar: "التقسية والعزل" },
        body: {
          en: "Lithium silicate hardener plus a breathable impregnating sealer that resists oil and water.",
          ar: "مقوٍّ من سيليكات الليثيوم مع عازل نافذ يسمح بالتنفس ويقاوم الزيوت والماء.",
        },
      },
      {
        title: { en: "Gloss verification", ar: "قياس اللمعان" },
        body: {
          en: "Readings logged at four points per room and handed over with the warranty card.",
          ar: "قياسات مسجلة في أربع نقاط بكل غرفة وتُسلَّم مع بطاقة الضمان.",
        },
      },
    ],
    equipment: [
      "planetary-grinder",
      "rotary-polisher",
      "hepa-extractor",
      "gloss-meter",
    ],
    faqs: [
      {
        q: {
          en: "Will the house be full of dust?",
          ar: "هل سيمتلئ المنزل بالغبار؟",
        },
        a: {
          en: "No. Every grinder runs into a HEPA dust extractor at the shroud, and we seal doorways with zip walls. Most clients stay in the property while we work.",
          ar: "لا. كل معدة جلي موصولة بشافط غبار بفلتر HEPA عند الغطاء، ونغلق المداخل بحواجز محكمة. معظم عملائنا يبقون في المنزل أثناء العمل.",
        },
      },
      {
        q: {
          en: "How long until we can walk on it?",
          ar: "متى يمكننا المشي عليها؟",
        },
        a: {
          en: "Immediately after a dry polish. If we seal, allow four hours for foot traffic and 24 hours before returning heavy furniture.",
          ar: "فورًا بعد التلميع الجاف. أما مع العزل، فيلزم أربع ساعات للمشي و٢٤ ساعة قبل إعادة الأثاث الثقيل.",
        },
      },
      {
        q: {
          en: "Can you fix only the damaged rooms?",
          ar: "هل يمكن معالجة الغرف المتضررة فقط؟",
        },
        a: {
          en: "Yes, though we match gloss levels to the adjoining areas so the transition is invisible. We will tell you honestly if a partial job will look patchy.",
          ar: "نعم، مع مطابقة درجة اللمعان للمناطق المجاورة حتى لا يظهر الفرق. وسنخبرك بصراحة إذا كان العمل الجزئي سيبدو غير متجانس.",
        },
      },
    ],
    media: slot("floor-polishing", "marble", {
      en: "Polished stone floor catching light across its full length",
      ar: "أرضية حجرية ملمّعة تعكس الضوء على امتدادها",
    }, "/images/floor-polishing.jpg"),
    startingFrom: { en: "from SAR 12 / m²", ar: "ابتداءً من ١٢ ر.س / م²" },
  },

  {
    slug: "marble-restoration",
    icon: "gem",
    accent: "gold",
    flagship: true,
    title: {
      en: "Marble Restoration & Crystallisation",
      ar: "ترميم وتلميع الرخام بالكريستال",
    },
    short: {
      en: "Etch repair, chip filling and crystallisation that returns marble, granite and onyx to showroom reflectivity.",
      ar: "معالجة التآكل الحمضي وترميم الكسور والتلميع بالكريستال لإعادة الرخام والجرانيت والأونكس إلى لمعان المعارض.",
    },
    hero: {
      en: "Marble is calcium carbonate — which means anything acidic, from lemon juice to the wrong cleaning product, chemically burns the surface. That dull ring is not dirt and no amount of mopping will lift it. We re-cut the crystal structure mechanically, fill chips with colour-matched resin, then crystallise the surface into a dense reflective skin.",
      ar: "الرخام مكوّن من كربونات الكالسيوم — أي أن أي مادة حمضية، من عصير الليمون إلى منظف خاطئ، تحرق سطحه كيميائيًا. تلك الحلقة الباهتة ليست اتساخًا ولن يزيلها المسح مهما تكرر. نحن نعيد قص البنية البلورية ميكانيكيًا، ونملأ الكسور براتنج مطابق للون، ثم نحوّل السطح إلى طبقة بلورية كثيفة وعاكسة.",
    },
    keywords: {
      en: [
        "marble polishing Riyadh",
        "marble restoration Saudi Arabia",
        "granite polishing service",
        "marble crystallisation",
        "etch mark removal marble",
        "stone honing company",
      ],
      ar: [
        "جلي رخام الرياض",
        "ترميم الرخام في السعودية",
        "تلميع الجرانيت",
        "تلميع الرخام بالكريستال",
        "إزالة بقع الحموضة من الرخام",
        "شركة تنعيم الحجر",
      ],
    },
    features: {
      en: [
        "Acid etch and water ring removal",
        "Chip and crack filling in matched resin",
        "Seam repair on joined slabs",
        "Crystallisation for deep, durable gloss",
        "Staircase, wall cladding and countertop work",
        "Onyx, travertine and limestone specialists",
      ],
      ar: [
        "إزالة آثار الحموضة وحلقات الماء",
        "ترميم الكسور والشقوق براتنج مطابق",
        "معالجة الفواصل بين الألواح",
        "تلميع بالكريستال للمعان عميق ودائم",
        "أعمال الدرج والتكسيات الجدارية والأسطح",
        "متخصصون في الأونكس والترافرتين والحجر الجيري",
      ],
    },
    deliverables: [
      {
        title: { en: "Damage mapping", ar: "توثيق الأضرار" },
        body: {
          en: "Photographed and marked slab by slab so nothing is missed or double-charged.",
          ar: "تصوير وتحديد لكل لوح على حدة حتى لا يُغفل شيء ولا يُحتسب مرتين.",
        },
      },
      {
        title: { en: "Mechanical re-cut", ar: "إعادة القص الميكانيكي" },
        body: {
          en: "Metal-bond then resin-bond diamonds flatten the slab and erase the etched layer.",
          ar: "أقراص ألماسية معدنية ثم راتنجية تسوّي اللوح وتزيل الطبقة المتآكلة.",
        },
      },
      {
        title: { en: "Crystallisation", ar: "التبلور" },
        body: {
          en: "Steel wool and a fluorosilicate compound under heat and pressure form a hardened gloss.",
          ar: "صوف فولاذي ومركب فلوروسيليكات تحت حرارة وضغط لتكوين لمعان صلب.",
        },
      },
      {
        title: { en: "Care handover", ar: "تسليم مع دليل العناية" },
        body: {
          en: "A pH-neutral cleaner and a written do-not-use list, because most damage is self-inflicted.",
          ar: "منظف متعادل الحموضة وقائمة مكتوبة بما يجب تجنبه، فمعظم الأضرار تحدث بالاستخدام الخاطئ.",
        },
      },
    ],
    equipment: [
      "rotary-polisher",
      "planetary-grinder",
      "gloss-meter",
      "steam-cleaner",
    ],
    faqs: [
      {
        q: {
          en: "Is crystallisation the same as polishing?",
          ar: "هل التبلور هو نفسه التلميع؟",
        },
        a: {
          en: "No. Polishing is abrasive — it refines the stone. Crystallisation is chemical — it converts the surface calcium into a harder, glassier compound. The best results use both, in that order.",
          ar: "لا. التلميع عملية كاشطة تنعّم الحجر. أما التبلور فعملية كيميائية تحوّل الكالسيوم السطحي إلى مركب أصلب وأكثر لمعانًا. وأفضل النتائج تجمع بينهما بهذا الترتيب.",
        },
      },
      {
        q: {
          en: "Can a deep crack be made invisible?",
          ar: "هل يمكن إخفاء الشروخ العميقة تمامًا؟",
        },
        a: {
          en: "Structural cracks can be stabilised and filled to roughly 90% invisibility. We show you a test repair before committing — we would rather under-promise than surprise you.",
          ar: "يمكن تثبيت الشروخ الإنشائية وملؤها بنسبة إخفاء تقارب ٩٠٪. ونعرض عليك عينة إصلاح قبل البدء — نفضّل الوعد المتحفظ على المفاجأة.",
        },
      },
    ],
    media: slot("marble-restoration", "marble", {
      en: "Veined marble slab restored to a mirror finish",
      ar: "لوح رخام بعروق طبيعية بعد إعادته إلى لمعان المرآة",
    }, "/images/marble-restoration.jpg"),
    startingFrom: { en: "from SAR 25 / m²", ar: "ابتداءً من ٢٥ ر.س / م²" },
  },

  {
    slug: "plumbing",
    icon: "pipe",
    accent: "aqua",
    flagship: true,
    title: { en: "Plumbing Services", ar: "خدمات السباكة" },
    short: {
      en: "Licensed plumbers for blockages, burst pipes, fixture installation and full re-pipes — emergency callout around the clock.",
      ar: "سباكون مرخّصون لمعالجة الانسدادات وانفجار المواسير وتركيب الأطقم وإعادة التمديد الكامل — مع استجابة طارئة على مدار الساعة.",
    },
    hero: {
      en: "Riyadh's water is hard and its pressure swings. Both quietly destroy plumbing: scale narrows pipes until flow drops, and pressure spikes split joints behind walls. We fix the emergency in front of you, then tell you what caused it, because a drain that blocks twice in a year is a symptom, not an accident.",
      ar: "مياه الرياض عسرة وضغطها متذبذب، وكلاهما يدمّر السباكة بصمت: الترسبات تضيّق المواسير حتى ينخفض التدفق، وارتفاع الضغط المفاجئ يشقّ الوصلات خلف الجدران. نعالج الطارئ أمامك، ثم نخبرك بالسبب — فالمصرف الذي ينسدّ مرتين في العام عَرَض وليس صدفة.",
    },
    keywords: {
      en: [
        "plumber in Riyadh",
        "emergency plumbing Saudi Arabia",
        "drain cleaning Riyadh",
        "pipe installation and replacement",
        "water heater repair",
        "hire plumber Saudi Arabia",
      ],
      ar: [
        "سباك في الرياض",
        "سباكة طوارئ في السعودية",
        "تسليك مجاري الرياض",
        "تمديد واستبدال المواسير",
        "إصلاح سخانات المياه",
        "طلب سباك في السعودية",
      ],
    },
    features: {
      en: [
        "Blocked drain clearing and high-pressure jetting",
        "Burst and leaking pipe repair",
        "Full villa and apartment re-piping",
        "Water heater supply, install and service",
        "Bathroom and kitchen fixture installation",
        "Pump, pressure and booster system work",
      ],
      ar: [
        "تسليك المصارف والتنظيف بالضغط العالي",
        "إصلاح المواسير المنفجرة والمتسربة",
        "إعادة تمديد كامل للفلل والشقق",
        "توريد وتركيب وصيانة السخانات",
        "تركيب أطقم الحمامات والمطابخ",
        "أعمال المضخات وأنظمة الضغط والتقوية",
      ],
    },
    deliverables: [
      {
        title: { en: "Camera diagnosis", ar: "تشخيص بالكاميرا" },
        body: {
          en: "A CCTV push-rod finds the actual blockage point instead of guessing and breaking tiles.",
          ar: "كاميرا فحص تحدد موضع الانسداد الفعلي بدل التخمين وكسر البلاط.",
        },
      },
      {
        title: { en: "Jet or auger", ar: "الضغط أو السلك الحلزوني" },
        body: {
          en: "Hydro-jetting scours the pipe wall; augering punches through. We pick by pipe material.",
          ar: "الضغط المائي يجرف جدار الماسورة، والسلك يخترق الانسداد. نختار حسب مادة الماسورة.",
        },
      },
      {
        title: { en: "Pressure test", ar: "اختبار الضغط" },
        body: {
          en: "Every repaired line is held under test pressure before the wall or floor is closed.",
          ar: "كل خط مُصلَح يُختبر تحت الضغط قبل إغلاق الجدار أو الأرضية.",
        },
      },
      {
        title: { en: "Cause report", ar: "تقرير السبب" },
        body: {
          en: "A short written note on why it failed and what will prevent the next one.",
          ar: "ملاحظة مكتوبة موجزة عن سبب العطل وما يمنع تكراره.",
        },
      },
    ],
    equipment: [
      "drain-camera",
      "hydro-jetter",
      "pressure-tester",
      "pipe-locator",
    ],
    faqs: [
      {
        q: {
          en: "Do you really answer at 3am?",
          ar: "هل تستجيبون فعلًا في الثالثة فجرًا؟",
        },
        a: {
          en: "Yes, for genuine emergencies — active flooding, no water, or sewage backup. Non-urgent work is scheduled for normal hours at standard rates.",
          ar: "نعم، للحالات الطارئة الحقيقية — تسرب نشط أو انقطاع مياه أو ارتداد صرف صحي. أما الأعمال غير العاجلة فتُجدول في الأوقات المعتادة بالأسعار العادية.",
        },
      },
      {
        q: {
          en: "Will you need to break the wall?",
          ar: "هل ستضطرون لكسر الجدار؟",
        },
        a: {
          en: "Usually not. Acoustic and thermal locating narrows a leak to within about 20cm, so if we do open up, it is one small square rather than a trench.",
          ar: "غالبًا لا. التحديد الصوتي والحراري يحصر التسرب في حدود ٢٠ سم تقريبًا، فإن اضطررنا للفتح فهو مربع صغير وليس حفرة ممتدة.",
        },
      },
    ],
    media: slot("plumbing", "water", {
      en: "Flanged steel pipework manifold in a plant room",
      ar: "مجمّع مواسير فولاذية بشفاه في غرفة المعدات",
    }, "/images/plumbing.jpg"),
    startingFrom: { en: "callout from SAR 150", ar: "زيارة من ١٥٠ ر.س" },
  },

  {
    slug: "leak-detection",
    icon: "radar",
    accent: "aqua",
    title: { en: "Water Leak Detection", ar: "كشف تسربات المياه" },
    short: {
      en: "Thermal, acoustic and tracer-gas surveys that pinpoint hidden leaks without demolishing your floor.",
      ar: "مسح حراري وصوتي وبالغاز الكاشف يحدد التسربات الخفية بدقة دون هدم الأرضية.",
    },
    hero: {
      en: "A rising bill, a warm patch of floor, a wall that will not dry — the leak is rarely where the damage shows. Water travels along screed and pipe runs before it surfaces. We survey non-destructively with three independent methods and only open the floor once all three agree on the same spot.",
      ar: "فاتورة مرتفعة، بقعة دافئة في الأرضية، جدار لا يجف — نادرًا ما يكون التسرب حيث يظهر الضرر. فالماء يسري عبر طبقة الصبّة ومسارات المواسير قبل أن يظهر. نجري مسحًا غير هدمي بثلاث طرق مستقلة، ولا نفتح الأرضية إلا بعد أن تتفق الطرق الثلاث على الموضع نفسه.",
    },
    keywords: {
      en: [
        "water leak detection Riyadh",
        "kashf tasarrub",
        "thermal leak survey",
        "swimming pool leak detection",
        "non-destructive leak detection Saudi Arabia",
      ],
      ar: [
        "كشف تسربات المياه بالرياض",
        "كشف تسربات بدون تكسير",
        "مسح حراري للتسربات",
        "كشف تسرب المسابح",
        "شركة كشف تسربات في السعودية",
      ],
    },
    features: {
      en: [
        "Thermal imaging of floors, walls and ceilings",
        "Acoustic correlation on pressurised lines",
        "Tracer gas for tight or empty pipes",
        "Swimming pool and water tank leak testing",
        "Moisture mapping and drying plan",
        "Written report with photos for insurance",
      ],
      ar: [
        "تصوير حراري للأرضيات والجدران والأسقف",
        "الربط الصوتي على الخطوط المضغوطة",
        "الغاز الكاشف للمواسير الضيقة أو الفارغة",
        "اختبار تسرب المسابح وخزانات المياه",
        "رسم خرائط الرطوبة وخطة التجفيف",
        "تقرير مكتوب بالصور صالح للتأمين",
      ],
    },
    deliverables: [
      {
        title: { en: "Isolation test", ar: "اختبار العزل" },
        body: {
          en: "We close zones one at a time to prove which circuit is actually losing water.",
          ar: "نغلق المناطق واحدة تلو الأخرى لتحديد الدائرة التي تفقد الماء فعليًا.",
        },
      },
      {
        title: { en: "Triple-method survey", ar: "مسح بثلاث طرق" },
        body: {
          en: "Thermal, acoustic and gas readings overlaid on a floor plan of your property.",
          ar: "قراءات حرارية وصوتية وغازية مُسقطة على مخطط العقار.",
        },
      },
      {
        title: { en: "Pinpoint marking", ar: "التحديد الدقيق" },
        body: {
          en: "The spot is chalked on the floor with a confidence radius before anyone lifts a tool.",
          ar: "يُعلَّم الموضع على الأرضية مع نطاق الدقة قبل أن يرفع أحد أي أداة.",
        },
      },
      {
        title: { en: "Repair & reinstate", ar: "الإصلاح والإعادة" },
        body: {
          en: "We cut, repair, re-screed and re-lay the same tile where possible.",
          ar: "نقطع ونصلح ونعيد الصبّة ونعيد تركيب البلاط نفسه قدر الإمكان.",
        },
      },
    ],
    equipment: ["thermal-camera", "acoustic-detector", "pipe-locator", "moisture-meter"],
    faqs: [
      {
        q: {
          en: "What if you find nothing?",
          ar: "ماذا لو لم تجدوا شيئًا؟",
        },
        a: {
          en: "Then you pay the survey fee only, and we hand you the report showing what was ruled out. That report is often enough to take back to a developer or insurer.",
          ar: "عندها تدفع رسوم المعاينة فقط، ونسلّمك التقرير الذي يوضح ما تم استبعاده. وغالبًا ما يكفي هذا التقرير لمراجعة المطوّر أو شركة التأمين.",
        },
      },
      {
        q: {
          en: "How long does a survey take?",
          ar: "كم تستغرق المعاينة؟",
        },
        a: {
          en: "A typical villa takes two to four hours. Pools and large facilities can need a second visit after an overnight static test.",
          ar: "الفيلا الاعتيادية تستغرق من ساعتين إلى أربع ساعات. أما المسابح والمنشآت الكبيرة فقد تحتاج زيارة ثانية بعد اختبار ثابت طوال الليل.",
        },
      },
    ],
    media: slot("leak-detection", "water", {
      en: "Water pooling and splashing on a timber floor from a hidden leak",
      ar: "ماء يتجمع ويتناثر على أرضية خشبية من تسرب خفي",
    }, "/images/leak-detection.jpg"),
    startingFrom: { en: "survey from SAR 400", ar: "معاينة من ٤٠٠ ر.س" },
  },

  {
    slug: "electrical",
    icon: "bolt",
    accent: "aqua",
    title: { en: "Electrical Services", ar: "الأعمال الكهربائية" },
    short: {
      en: "Certified electricians for faults, rewiring, distribution boards, lighting design and emergency repair.",
      ar: "كهربائيون معتمدون لمعالجة الأعطال وإعادة التمديد ولوحات التوزيع وتصميم الإنارة والإصلاح الطارئ.",
    },
    hero: {
      en: "Electrical work is the one trade where a tidy-looking job can still be dangerous. We test rather than assume: every circuit we touch gets insulation resistance, earth loop and RCD trip times measured, and the readings go on your certificate. If your board is undersized or your earthing is missing, you will hear it from us plainly.",
      ar: "الكهرباء هي المهنة الوحيدة التي قد يبدو فيها العمل مرتبًا وهو خطر. نحن نختبر ولا نفترض: كل دائرة نلمسها تُقاس لها مقاومة العزل وحلقة التأريض وزمن فصل القاطع التفاضلي، وتُدوَّن القراءات في شهادتك. وإن كانت لوحتك أصغر من اللازم أو التأريض مفقودًا، فستسمع ذلك منا بوضوح.",
    },
    keywords: {
      en: [
        "electrician in Riyadh",
        "electrical maintenance Saudi Arabia",
        "distribution board upgrade",
        "house rewiring Riyadh",
        "emergency electrical repair",
        "lighting installation",
      ],
      ar: [
        "كهربائي في الرياض",
        "صيانة كهربائية في السعودية",
        "تطوير لوحة التوزيع",
        "إعادة تمديد كهرباء المنزل",
        "إصلاح كهربائي طارئ",
        "تركيب الإنارة",
      ],
    },
    features: {
      en: [
        "Fault finding and circuit tracing",
        "Distribution board upgrade and RCD protection",
        "Full and partial rewiring",
        "Interior and façade lighting installation",
        "Socket, switch and data point additions",
        "Generator and UPS changeover wiring",
      ],
      ar: [
        "كشف الأعطال وتتبّع الدوائر",
        "تطوير لوحات التوزيع وحماية القواطع التفاضلية",
        "إعادة تمديد كلي أو جزئي",
        "تركيب إنارة داخلية وواجهات",
        "إضافة أفياش ومفاتيح ونقاط بيانات",
        "توصيل مفاتيح التحويل للمولدات وأنظمة UPS",
      ],
    },
    deliverables: [
      {
        title: { en: "Safe isolation", ar: "العزل الآمن" },
        body: {
          en: "Locked off and proved dead before work starts — never a shortcut, never an exception.",
          ar: "فصل وقفل وإثبات انعدام التيار قبل البدء — دون اختصارات ودون استثناءات.",
        },
      },
      {
        title: { en: "Thermal load scan", ar: "مسح حراري للأحمال" },
        body: {
          en: "We image the board under load; hot terminals are found before they become fires.",
          ar: "نصوّر اللوحة تحت الحمل حراريًا؛ فنكتشف الأطراف الساخنة قبل أن تتحول إلى حريق.",
        },
      },
      {
        title: { en: "Certified testing", ar: "اختبار موثّق" },
        body: {
          en: "Insulation, continuity, polarity and trip time recorded per circuit.",
          ar: "تسجيل العزل والاستمرارية والقطبية وزمن الفصل لكل دائرة.",
        },
      },
      {
        title: { en: "Labelled handover", ar: "تسليم مع ترقيم" },
        body: {
          en: "A printed schedule inside the board door so the next person is not guessing.",
          ar: "جدول مطبوع داخل باب اللوحة حتى لا يخمّن من يأتي بعدنا.",
        },
      },
    ],
    equipment: ["thermal-camera", "insulation-tester", "cable-tracer"],
    faqs: [
      {
        q: {
          en: "My breaker trips randomly — is that dangerous?",
          ar: "القاطع يفصل بشكل عشوائي — هل هذا خطر؟",
        },
        a: {
          en: "A tripping breaker is doing its job, but random tripping usually means moisture ingress or a failing appliance. It is worth diagnosing rather than resetting repeatedly.",
          ar: "القاطع الذي يفصل يؤدي وظيفته، لكن الفصل العشوائي يعني عادةً تسرب رطوبة أو جهازًا متعطلًا. من الأفضل تشخيص السبب بدل إعادة التشغيل مرارًا.",
        },
      },
      {
        q: {
          en: "Can you work with the villa occupied?",
          ar: "هل يمكن العمل والفيلا مسكونة؟",
        },
        a: {
          en: "Yes. We stage rewiring circuit by circuit so you never lose power to the whole property, and critical circuits like fridges stay live overnight.",
          ar: "نعم. ننفّذ إعادة التمديد دائرة بدائرة حتى لا تنقطع الكهرباء عن العقار بالكامل، وتبقى الدوائر الحيوية كالثلاجات تعمل ليلًا.",
        },
      },
    ],
    media: slot("electrical", "spark", {
      en: "Distribution board with labelled circuit breakers and relays",
      ar: "لوحة توزيع بقواطع ومرحّلات مرقّمة",
    }, "/images/electrical.jpg"),
    startingFrom: { en: "callout from SAR 150", ar: "زيارة من ١٥٠ ر.س" },
  },

  {
    slug: "ac-maintenance",
    icon: "wind",
    accent: "aqua",
    title: { en: "AC Maintenance & Duct Cleaning", ar: "صيانة التكييف وتنظيف المجاري" },
    short: {
      en: "Split, ducted and central AC servicing, gas charging, coil cleaning and full duct sanitisation.",
      ar: "صيانة المكيفات السبليت والمخفية والمركزية، وشحن الغاز، وتنظيف الملفات، وتعقيم كامل لمجاري الهواء.",
    },
    hero: {
      en: "In a Riyadh summer your AC is not a comfort system, it is life support — and it fails on the hottest day because that is when it is working hardest. A serviced unit draws less current, cools faster and lasts years longer. Most of what we find is simply a coil no one has washed since installation.",
      ar: "في صيف الرياض، المكيف ليس وسيلة راحة بل ضرورة — ويتعطل في أشدّ الأيام حرارة لأنه حينها يعمل بأقصى طاقته. الوحدة المُصانة تسحب تيارًا أقل وتبرّد أسرع وتدوم سنوات أطول. ومعظم ما نجده هو ببساطة ملف لم يغسله أحد منذ التركيب.",
    },
    keywords: {
      en: [
        "AC maintenance Riyadh",
        "air conditioning repair Saudi Arabia",
        "AC duct cleaning",
        "split unit service",
        "central AC maintenance contract",
        "freon gas charging",
      ],
      ar: [
        "صيانة مكيفات الرياض",
        "إصلاح التكييف في السعودية",
        "تنظيف مجاري التكييف",
        "صيانة مكيفات سبليت",
        "عقد صيانة تكييف مركزي",
        "شحن غاز فريون",
      ],
    },
    features: {
      en: [
        "Full service: coil wash, filter, drain and gas check",
        "Refrigerant leak detection and recharging",
        "Duct cleaning and antibacterial fogging",
        "Compressor, fan motor and PCB replacement",
        "New unit supply and installation",
        "Annual maintenance contracts for facilities",
      ],
      ar: [
        "صيانة شاملة: غسيل الملفات والفلاتر والتصريف وفحص الغاز",
        "كشف تسرب الفريون وإعادة الشحن",
        "تنظيف المجاري والتعقيم بالضباب المضاد للبكتيريا",
        "استبدال الكمبروسر ومحرك المروحة ولوحة التحكم",
        "توريد وتركيب وحدات جديدة",
        "عقود صيانة سنوية للمنشآت",
      ],
    },
    deliverables: [
      {
        title: { en: "Performance baseline", ar: "قياس الأداء المرجعي" },
        body: {
          en: "Delta-T across the coil and running amps measured before and after service.",
          ar: "قياس فرق الحرارة عبر الملف وشدة التيار قبل الصيانة وبعدها.",
        },
      },
      {
        title: { en: "Deep coil wash", ar: "غسيل عميق للملفات" },
        body: {
          en: "Foaming cleaner and low-pressure rinse — bent fins combed straight, not flattened further.",
          ar: "منظف رغوي وشطف بضغط منخفض — مع تمشيط الزعانف المنحنية بدل زيادة انبعاجها.",
        },
      },
      {
        title: { en: "Drain & duct", ar: "التصريف والمجاري" },
        body: {
          en: "Condensate line flushed and ducts brushed, vacuumed and fogged.",
          ar: "تسليك خط التصريف وتفريش المجاري وشفطها وتعقيمها بالضباب.",
        },
      },
      {
        title: { en: "Efficiency report", ar: "تقرير الكفاءة" },
        body: {
          en: "Before/after readings so you can see exactly what the service bought you.",
          ar: "قراءات قبل وبعد لترى بوضوح ما حققته الصيانة.",
        },
      },
    ],
    equipment: ["duct-robot", "refrigerant-gauge", "thermal-camera", "hepa-extractor"],
    faqs: [
      {
        q: {
          en: "How often should AC be serviced here?",
          ar: "كم مرة يجب صيانة المكيف هنا؟",
        },
        a: {
          en: "Twice a year in Riyadh — once before summer and once after. Dust load makes annual servicing insufficient for most properties.",
          ar: "مرتين سنويًا في الرياض — مرة قبل الصيف ومرة بعده. فكثافة الغبار تجعل الصيانة السنوية غير كافية لمعظم العقارات.",
        },
      },
      {
        q: {
          en: "My AC runs but does not cool — is it gas?",
          ar: "المكيف يعمل ولا يبرّد — هل السبب الغاز؟",
        },
        a: {
          en: "Often it is a blocked coil or a failing capacitor, not gas. Refrigerant does not get consumed; if it is low, there is a leak, and topping up without finding it just wastes your money.",
          ar: "غالبًا يكون السبب ملفًا مسدودًا أو مكثفًا تالفًا وليس الغاز. فالفريون لا يُستهلك؛ وإن كان ناقصًا فهناك تسرب، وإعادة الشحن دون كشفه إهدار لمالك.",
        },
      },
    ],
    media: slot("ac-maintenance", "spark", {
      en: "Wall-mounted outdoor condenser unit",
      ar: "وحدة تكثيف خارجية مثبتة على الجدار",
    }, "/images/ac-maintenance.jpg"),
    startingFrom: { en: "service from SAR 120 / unit", ar: "صيانة من ١٢٠ ر.س / وحدة" },
  },

  {
    slug: "painting",
    icon: "roller",
    accent: "gold",
    title: { en: "Painting & Wall Finishes", ar: "الدهانات وتشطيبات الجدران" },
    short: {
      en: "Interior and exterior painting, crack repair, decorative finishes and protective exterior coatings.",
      ar: "دهانات داخلية وخارجية، ومعالجة الشقوق، وتشطيبات ديكورية، وطبقات حماية للواجهات.",
    },
    hero: {
      en: "Ninety percent of a paint job is what happens before the colour goes on. Filling, sanding, stabilising chalky substrate and priming correctly is what separates a finish that lasts eight years from one that flakes in eighteen months. We quote the preparation honestly, even when a competitor's number looks lower.",
      ar: "تسعون بالمئة من عمل الدهان يحدث قبل وضع اللون. فالمعجون والصنفرة وتثبيت الأسطح المتفتتة والتأسيس الصحيح هي ما يفصل بين تشطيب يدوم ثماني سنوات وآخر يتقشر خلال ثمانية عشر شهرًا. نحن نسعّر أعمال التحضير بصدق، حتى لو بدا رقم المنافس أقل.",
    },
    keywords: {
      en: [
        "painting company Riyadh",
        "villa painting Saudi Arabia",
        "exterior wall coating",
        "decorative wall finishes",
        "crack repair and painting",
      ],
      ar: [
        "شركة دهانات الرياض",
        "دهان فلل في السعودية",
        "عزل ودهان الواجهات",
        "تشطيبات ديكورية للجدران",
        "معالجة الشقوق والدهان",
      ],
    },
    features: {
      en: [
        "Interior repaint with full surface preparation",
        "Exterior elastomeric and textured coatings",
        "Structural and hairline crack treatment",
        "Venetian plaster, stucco and micro-cement",
        "Wood and metal protective painting",
        "Colour consultation and sample boards",
      ],
      ar: [
        "إعادة دهان داخلي مع تحضير كامل للأسطح",
        "دهانات خارجية مرنة ومزخرفة",
        "معالجة الشقوق الإنشائية والشعرية",
        "بلاستر فينيسي وستوكو ومايكروسمنت",
        "دهانات حماية للخشب والمعادن",
        "استشارة ألوان ولوحات عينات",
      ],
    },
    deliverables: [
      {
        title: { en: "Substrate test", ar: "اختبار السطح" },
        body: {
          en: "Tape and moisture tests tell us whether the existing coat can be painted over at all.",
          ar: "اختبارات اللاصق والرطوبة تحدد إن كان يمكن الدهان فوق الطبقة الحالية أصلًا.",
        },
      },
      {
        title: { en: "Protect & mask", ar: "الحماية والتغطية" },
        body: {
          en: "Floors sheeted, fittings removed rather than taped around.",
          ar: "تغطية الأرضيات وفكّ التجهيزات بدل اللصق حولها.",
        },
      },
      {
        title: { en: "Prep & prime", ar: "التحضير والتأسيس" },
        body: {
          en: "Fill, sand, dust off, then a primer matched to the substrate — not a universal one.",
          ar: "معجون وصنفرة وإزالة الغبار، ثم أساس مطابق لنوع السطح لا أساس عام.",
        },
      },
      {
        title: { en: "Two-coat finish", ar: "وجهان للتشطيب" },
        body: {
          en: "Full coats, wet-edge maintained, inspected under raking light before sign-off.",
          ar: "وجهان كاملان مع الحفاظ على الحافة الرطبة، وفحص تحت إضاءة مائلة قبل التسليم.",
        },
      },
    ],
    equipment: ["airless-sprayer", "drywall-sander", "moisture-meter"],
    faqs: [
      {
        q: { en: "How long does a villa take?", ar: "كم تستغرق الفيلا؟" },
        a: {
          en: "A 400m² interior is typically five to eight working days including preparation. Exteriors depend on access and weather.",
          ar: "الفيلا الداخلية بمساحة ٤٠٠ م² تستغرق عادةً من خمسة إلى ثمانية أيام عمل شاملة التحضير. أما الواجهات فتعتمد على سهولة الوصول والطقس.",
        },
      },
      {
        q: { en: "Is the smell safe for children?", ar: "هل الرائحة آمنة للأطفال؟" },
        a: {
          en: "We default to low-VOC water-based paints. The room is usable the same evening and fully odour-free within 24 hours.",
          ar: "نستخدم افتراضيًا دهانات مائية منخفضة المركبات المتطايرة. الغرفة صالحة للاستخدام في المساء نفسه وخالية تمامًا من الرائحة خلال ٢٤ ساعة.",
        },
      },
    ],
    media: slot("painting", "marble", {
      en: "Roller laying the first coat of paint onto a prepared wall",
      ar: "رول يضع الوجه الأول من الدهان على جدار مُجهّز",
    }, "/images/painting.jpg"),
    startingFrom: { en: "from SAR 18 / m²", ar: "ابتداءً من ١٨ ر.س / م²" },
  },

  {
    slug: "carpentry",
    icon: "saw",
    accent: "gold",
    title: { en: "Carpentry & Joinery", ar: "النجارة وأعمال الخشب" },
    short: {
      en: "Custom wardrobes, kitchens, doors and built-in furniture, plus repair of what you already own.",
      ar: "دواليب ومطابخ وأبواب وأثاث مدمج حسب الطلب، بالإضافة إلى إصلاح ما لديك.",
    },
    hero: {
      en: "Built-in joinery either fits the room exactly or it announces itself every day with a crooked reveal. We template on site, account for out-of-square walls, and build to the actual dimensions rather than the drawing's. Doors get adjusted after the building settles — that return visit is included, not extra.",
      ar: "الأعمال الخشبية المدمجة إما أن تنطبق على الغرفة تمامًا أو تفضح نفسها يوميًا بفجوة مائلة. نحن نأخذ القوالب في الموقع، ونحسب انحراف الجدران، وننفّذ على المقاسات الفعلية لا على مقاسات المخطط. والأبواب تُضبط بعد استقرار المبنى — وهذه الزيارة مشمولة وليست إضافية.",
    },
    keywords: {
      en: [
        "carpenter Riyadh",
        "custom wardrobe Saudi Arabia",
        "kitchen cabinets Riyadh",
        "door repair and installation",
        "built-in furniture",
      ],
      ar: [
        "نجار في الرياض",
        "دواليب حسب الطلب في السعودية",
        "خزائن مطابخ الرياض",
        "إصلاح وتركيب الأبواب",
        "أثاث مدمج",
      ],
    },
    features: {
      en: [
        "Walk-in wardrobes and storage walls",
        "Kitchen carcasses, fronts and worktops",
        "Interior and main door supply and hanging",
        "Door alignment, lock and hinge repair",
        "Shelving, panelling and feature woodwork",
        "Furniture assembly and modification",
      ],
      ar: [
        "غرف ملابس وجدران تخزين",
        "هياكل وواجهات وأسطح المطابخ",
        "توريد وتركيب الأبواب الداخلية والرئيسية",
        "ضبط الأبواب وإصلاح الأقفال والمفصلات",
        "أرفف وتكسيات وأعمال خشبية مميزة",
        "تركيب وتعديل الأثاث",
      ],
    },
    deliverables: [
      {
        title: { en: "Site template", ar: "قالب الموقع" },
        body: {
          en: "Laser-measured at three heights, because walls are never parallel.",
          ar: "قياس بالليزر على ثلاثة ارتفاعات، لأن الجدران ليست متوازية أبدًا.",
        },
      },
      {
        title: { en: "Material selection", ar: "اختيار المواد" },
        body: {
          en: "Moisture-resistant board where it matters — under sinks, along exterior walls.",
          ar: "ألواح مقاومة للرطوبة حيث يلزم — تحت الأحواض وعلى الجدران الخارجية.",
        },
      },
      {
        title: { en: "Workshop build", ar: "التصنيع في الورشة" },
        body: {
          en: "Cut and edged off site, so your home is not a dust-filled joinery floor for a week.",
          ar: "القص والحواف خارج الموقع، حتى لا يتحول منزلك إلى ورشة مغبرة لأسبوع.",
        },
      },
      {
        title: { en: "Fit & adjust", ar: "التركيب والضبط" },
        body: {
          en: "Scribed to the wall, levelled, then re-adjusted on a follow-up visit at 30 days.",
          ar: "تفصيل على الجدار وضبط استواء، ثم إعادة ضبط في زيارة متابعة بعد ٣٠ يومًا.",
        },
      },
    ],
    equipment: ["track-saw", "laser-level", "edge-bander"],
    faqs: [
      {
        q: { en: "Can you match existing units?", ar: "هل يمكن مطابقة الوحدات الحالية؟" },
        a: {
          en: "Usually yes — we photograph and sample the existing finish, then source the closest board. Perfect matches on older, sun-faded units are not always possible and we will say so upfront.",
          ar: "غالبًا نعم — نصوّر التشطيب الحالي ونأخذ عينة ثم نوفّر أقرب لوح. أما المطابقة التامة للوحدات القديمة التي بهتت بالشمس فليست ممكنة دائمًا، وسنوضح ذلك مسبقًا.",
        },
      },
    ],
    media: slot("carpentry", "schematic", {
      en: "Carpenter hand-planing timber at the workshop bench",
      ar: "نجار يسوّي الخشب بالفارة على طاولة الورشة",
    }, "/images/carpentry.jpg"),
    startingFrom: { en: "quoted per project", ar: "يُسعَّر حسب المشروع" },
  },

  {
    slug: "iron-works",
    icon: "anvil",
    accent: "gold",
    title: { en: "Iron Works & Welding", ar: "الحدادة واللحام" },
    short: {
      en: "Gates, railings, shades, staircases and structural steel — fabricated, galvanised and installed.",
      ar: "بوابات ودرابزينات ومظلات وسلالم وهياكل حديدية — تصنيع وجلفنة وتركيب.",
    },
    hero: {
      en: "Steel in Riyadh fails from the inside out: welds that were never ground back trap moisture, and paint over mill scale lifts within a season. We grind every weld, treat with a zinc-rich primer and finish with a polyurethane topcoat. It costs more on day one and considerably less over ten years.",
      ar: "الحديد في الرياض يتلف من الداخل إلى الخارج: فاللحامات التي لم تُجلَخ تحبس الرطوبة، والدهان فوق قشرة الدرفلة يتقشر خلال موسم واحد. نحن نجلخ كل لحام ونعالجه بأساس غني بالزنك وننهيه بطبقة بولي يوريثان. تكلفته أعلى في اليوم الأول وأقل بكثير على مدى عشر سنوات.",
    },
    keywords: {
      en: [
        "blacksmith Riyadh",
        "iron gates Saudi Arabia",
        "steel fabrication Riyadh",
        "car shade installation",
        "stair railing welding",
      ],
      ar: [
        "حداد في الرياض",
        "بوابات حديد في السعودية",
        "تصنيع معادن الرياض",
        "تركيب مظلات سيارات",
        "لحام درابزين الدرج",
      ],
    },
    features: {
      en: [
        "Swing and sliding gates with automation",
        "Balcony, stair and roof railings",
        "Car park shades and pergolas",
        "Window guards and security grilles",
        "Structural steel and mezzanine platforms",
        "On-site repair welding and re-coating",
      ],
      ar: [
        "بوابات مفصلية ومنزلقة مع أنظمة أتمتة",
        "درابزينات الشرفات والدرج والأسطح",
        "مظلات مواقف وبرجولات",
        "حمايات نوافذ وشبكات أمان",
        "هياكل حديدية ومنصات ميزانين",
        "لحام وإصلاح وإعادة دهان في الموقع",
      ],
    },
    deliverables: [
      {
        title: { en: "Site survey", ar: "معاينة الموقع" },
        body: {
          en: "Openings measured and levels checked — gates are the least forgiving item in a build.",
          ar: "قياس الفتحات وفحص المناسيب — فالبوابات أقل العناصر تسامحًا مع الخطأ.",
        },
      },
      {
        title: { en: "Fabrication", ar: "التصنيع" },
        body: {
          en: "Cut, jigged and welded square in the workshop, then trial-assembled before coating.",
          ar: "قص وتثبيت ولحام بزوايا قائمة في الورشة، ثم تجميع تجريبي قبل الدهان.",
        },
      },
      {
        title: { en: "Corrosion system", ar: "نظام مقاومة الصدأ" },
        body: {
          en: "Weld grind, degrease, zinc-rich prime, PU topcoat — four steps, no shortcuts.",
          ar: "جلخ اللحام، إزالة الشحوم، أساس غني بالزنك، وجه بولي يوريثان — أربع خطوات دون اختصار.",
        },
      },
      {
        title: { en: "Install & align", ar: "التركيب والمحاذاة" },
        body: {
          en: "Chemical-anchored, plumbed and swing-tested under its own weight.",
          ar: "تثبيت بمثبتات كيميائية وضبط شاقولي واختبار الحركة تحت الوزن الفعلي.",
        },
      },
    ],
    equipment: ["mig-welder", "plasma-cutter", "angle-grinder"],
    faqs: [
      {
        q: { en: "Do you automate existing gates?", ar: "هل تؤتمتون البوابات الحالية؟" },
        a: {
          en: "Yes, if the gate is straight and the hinges are sound. If it already drags, automating it will only break the motor — we would fix the gate first.",
          ar: "نعم، إذا كانت البوابة مستقيمة والمفصلات سليمة. أما إن كانت تحتكّ بالأرض فالأتمتة ستُتلف المحرك فقط — وسنصلح البوابة أولًا.",
        },
      },
    ],
    media: slot("iron-works", "metal", {
      en: "Welder in a mask striking an arc, sparks flying",
      ar: "لحّام بقناع يشعل القوس والشرر يتطاير",
    }, "/images/iron-works.jpg"),
    startingFrom: { en: "quoted per project", ar: "يُسعَّر حسب المشروع" },
  },

  {
    slug: "ceilings-gypsum",
    icon: "layers",
    accent: "gold",
    title: { en: "Ceilings & Gypsum Works", ar: "الأسقف وأعمال الجبس" },
    short: {
      en: "Suspended ceilings, gypsum board partitions, cornices, light coves and full acoustic treatment.",
      ar: "أسقف معلقة وقواطع جبسية وكرانيش وحُفر إنارة ومعالجة صوتية كاملة.",
    },
    hero: {
      en: "A gypsum ceiling is judged entirely on its edges and its light. Straight shadow gaps, coves that hide the fixture instead of the fixture hiding in shadow, and joints that do not telegraph in two years. That comes from framing at correct centres and taping properly — not from more filler at the end.",
      ar: "السقف الجبسي يُحكم عليه بحوافه وإضاءته فقط. فجوات ظل مستقيمة، وحُفر إنارة تخفي الوحدة بدل أن تختفي الوحدة في الظل، ووصلات لا تظهر بعد عامين. وهذا يأتي من التقفيص بمسافات صحيحة والتثبيت السليم للشرائط — لا من زيادة المعجون في النهاية.",
    },
    keywords: {
      en: [
        "gypsum ceiling Riyadh",
        "false ceiling Saudi Arabia",
        "drywall partition",
        "cornice and light cove",
        "acoustic ceiling treatment",
      ],
      ar: [
        "أسقف جبسية الرياض",
        "أسقف مستعارة في السعودية",
        "قواطع جبس بورد",
        "كرانيش وحُفر إنارة",
        "معالجة صوتية للأسقف",
      ],
    },
    features: {
      en: [
        "Suspended gypsum and mineral tile ceilings",
        "Partitions with insulation and service voids",
        "Cornices, coves and shadow-gap detailing",
        "Acoustic and moisture-resistant board",
        "Access hatches and service integration",
        "Water damage cut-out and reinstatement",
      ],
      ar: [
        "أسقف جبسية وألواح معدنية معلقة",
        "قواطع بعزل وفراغات خدمات",
        "كرانيش وحُفر إنارة وتفاصيل فجوات الظل",
        "ألواح عازلة للصوت ومقاومة للرطوبة",
        "فتحات صيانة ودمج الخدمات",
        "قصّ أضرار المياه وإعادة التنفيذ",
      ],
    },
    deliverables: [
      {
        title: { en: "Set out", ar: "التخطيط" },
        body: {
          en: "Laser-levelled datum around the room before a single hanger goes up.",
          ar: "منسوب مضبوط بالليزر حول الغرفة قبل تثبيت أي معلّق.",
        },
      },
      {
        title: { en: "Framing", ar: "التقفيص" },
        body: {
          en: "Galvanised channel at correct centres — spacing is what stops future cracking.",
          ar: "قنوات مجلفنة بمسافات صحيحة — فالتباعد هو ما يمنع التشقق مستقبلًا.",
        },
      },
      {
        title: { en: "Board & tape", ar: "التلبيس والتثبيت" },
        body: {
          en: "Staggered joints, paper tape and three filler passes sanded between coats.",
          ar: "وصلات متبادلة وشريط ورقي وثلاث طبقات معجون مع صنفرة بينها.",
        },
      },
      {
        title: { en: "Light test", ar: "اختبار الإضاءة" },
        body: {
          en: "Inspected under a raking lamp at night, which is the only honest way to check flatness.",
          ar: "فحص تحت ضوء مائل ليلًا، وهي الطريقة الصادقة الوحيدة للتحقق من الاستواء.",
        },
      },
    ],
    equipment: ["laser-level", "drywall-sander", "track-saw"],
    faqs: [
      {
        q: {
          en: "My ceiling cracked along a joint — why?",
          ar: "تشقق سقفي عند وصلة — لماذا؟",
        },
        a: {
          en: "Almost always framing centres that were too wide, or joints that were filled without tape. We cut out, re-tape and skim rather than just refilling the crack, which would simply return.",
          ar: "السبب دائمًا تقريبًا تباعد التقفيص الزائد أو وصلات مُلئت دون شريط. نحن نقصّ ونعيد الشريط والمعجون بدل ملء الشق فقط — لأنه سيعود حتمًا.",
        },
      },
    ],
    media: slot("ceilings-gypsum", "schematic", {
      en: "Coffered gypsum ceiling with recessed downlights",
      ar: "سقف جبسي مقسّم بإنارة مخفية",
    }, "/images/ceilings-gypsum.jpg"),
    startingFrom: { en: "from SAR 65 / m²", ar: "ابتداءً من ٦٥ ر.س / م²" },
  },

  {
    slug: "deep-cleaning",
    icon: "droplet",
    accent: "aqua",
    title: { en: "Deep Cleaning & Disinfection", ar: "التنظيف العميق والتعقيم" },
    short: {
      en: "Post-construction, move-in, seasonal and sanitisation cleaning with commercial extraction equipment.",
      ar: "تنظيف ما بعد البناء والانتقال والتنظيف الموسمي والتعقيم بمعدات شفط تجارية.",
    },
    hero: {
      en: "Deep cleaning is a different trade from regular cleaning. Construction dust bonds to surfaces and needs mechanical extraction; upholstery needs hot-water injection, not spray-and-wipe; and grout needs a rotary brush under pressure. Domestic tools cannot do this no matter how many hours you throw at it.",
      ar: "التنظيف العميق مهنة مختلفة عن التنظيف الاعتيادي. فغبار البناء يلتصق بالأسطح ويحتاج شفطًا ميكانيكيًا، والمفروشات تحتاج حقن ماء ساخن لا رشًّا ومسحًا، والفواصل تحتاج فرشاة دوارة تحت ضغط. والأدوات المنزلية لا تحقق ذلك مهما بذلت من ساعات.",
    },
    keywords: {
      en: [
        "deep cleaning Riyadh",
        "post construction cleaning Saudi Arabia",
        "sofa and carpet cleaning",
        "move in move out cleaning",
        "disinfection service",
      ],
      ar: [
        "تنظيف عميق الرياض",
        "تنظيف بعد البناء في السعودية",
        "تنظيف كنب وسجاد",
        "تنظيف عند الانتقال",
        "خدمة تعقيم",
      ],
    },
    features: {
      en: [
        "Post-construction and post-renovation cleans",
        "Sofa, carpet and mattress hot-water extraction",
        "Grout scrubbing and tile degreasing",
        "Kitchen degreasing and appliance interiors",
        "Window, façade glass and track cleaning",
        "Antibacterial fogging and disinfection",
      ],
      ar: [
        "تنظيف ما بعد البناء والترميم",
        "تنظيف الكنب والسجاد والمراتب بالحقن والشفط",
        "تجليخ الفواصل وإزالة الدهون من البلاط",
        "إزالة دهون المطبخ وتنظيف الأجهزة من الداخل",
        "تنظيف النوافذ وزجاج الواجهات والمجاري",
        "تعقيم وضباب مضاد للبكتيريا",
      ],
    },
    deliverables: [
      {
        title: { en: "Room-by-room checklist", ar: "قائمة فحص لكل غرفة" },
        body: {
          en: "You get the same sheet we work from, so nothing is subjective at handover.",
          ar: "تحصل على نفس القائمة التي نعمل بها، فلا يبقى شيء خاضعًا للتقدير عند التسليم.",
        },
      },
      {
        title: { en: "Top-down sequence", ar: "التسلسل من الأعلى للأسفل" },
        body: {
          en: "Ceilings, then walls, then floors — cleaning upward just re-soils what you finished.",
          ar: "الأسقف ثم الجدران ثم الأرضيات — فالتنظيف من الأسفل للأعلى يعيد اتساخ ما أنجزته.",
        },
      },
      {
        title: { en: "Extraction, not spreading", ar: "شفط لا نشر" },
        body: {
          en: "Hot-water injection pulls soil out of fabric rather than pushing it deeper.",
          ar: "حقن الماء الساخن يسحب الأوساخ من النسيج بدل دفعها إلى العمق.",
        },
      },
      {
        title: { en: "Final inspection", ar: "الفحص النهائي" },
        body: {
          en: "Walked with you under full lighting before the team leaves the site.",
          ar: "جولة معك تحت إضاءة كاملة قبل مغادرة الفريق للموقع.",
        },
      },
    ],
    equipment: ["hot-water-extractor", "steam-cleaner", "hepa-extractor", "fogger"],
    faqs: [
      {
        q: {
          en: "How long do sofas take to dry?",
          ar: "كم يستغرق جفاف الكنب؟",
        },
        a: {
          en: "Four to six hours with air movers running. In Riyadh's dry air it is usually closer to four.",
          ar: "من أربع إلى ست ساعات مع تشغيل مراوح التجفيف. وفي جو الرياض الجاف تكون غالبًا أقرب إلى أربع.",
        },
      },
    ],
    media: slot("deep-cleaning", "water", {
      en: "Hot-water extraction wand lifting soil from upholstery",
      ar: "رأس الحقن والشفط يسحب الأوساخ من المفروشات",
    }, "/images/deep-cleaning.jpg"),
    startingFrom: { en: "from SAR 450 / visit", ar: "من ٤٥٠ ر.س / زيارة" },
  },

  {
    slug: "tank-cleaning",
    icon: "tank",
    accent: "aqua",
    title: { en: "Water Tank Cleaning", ar: "تنظيف خزانات المياه" },
    short: {
      en: "Drain, scrub, sterilise and leak-test ground and roof tanks — with a lab-ready water sample.",
      ar: "تفريغ وتنظيف وتعقيم واختبار تسرب للخزانات الأرضية والعلوية — مع عينة ماء جاهزة للفحص المخبري.",
    },
    hero: {
      en: "Sediment settles, biofilm grows on the walls, and in a hot roof tank that becomes a bacterial culture feeding every tap in the property. An annual clean is not optional maintenance in this climate. We photograph the inside before and after, because you should not have to take our word for it.",
      ar: "الرواسب تترسب، والغشاء الحيوي ينمو على الجدران، وفي خزان علوي حارّ يتحول ذلك إلى مزرعة بكتيرية تغذي كل صنبور في العقار. التنظيف السنوي ليس صيانة اختيارية في هذا المناخ. ونحن نصوّر الداخل قبل وبعد، لأنك لا ينبغي أن تكتفي بكلامنا.",
    },
    keywords: {
      en: [
        "water tank cleaning Riyadh",
        "tank sterilisation Saudi Arabia",
        "roof tank cleaning service",
        "water tank leak repair",
      ],
      ar: [
        "تنظيف خزانات الرياض",
        "تعقيم خزانات في السعودية",
        "تنظيف خزان علوي",
        "إصلاح تسرب الخزانات",
      ],
    },
    features: {
      en: [
        "Full drain and sediment removal",
        "Wall and floor scrubbing to bare surface",
        "Chlorine sterilisation and rinse",
        "Before/after interior photography",
        "Leak testing and epoxy patching",
        "Cover, vent and overflow inspection",
      ],
      ar: [
        "تفريغ كامل وإزالة الرواسب",
        "تجليخ الجدران والأرضية حتى السطح النظيف",
        "تعقيم بالكلور وشطف",
        "تصوير داخلي قبل وبعد",
        "اختبار التسرب والترقيع بالإيبوكسي",
        "فحص الغطاء وفتحة التهوية والفائض",
      ],
    },
    deliverables: [
      {
        title: { en: "Isolate & drain", ar: "العزل والتفريغ" },
        body: {
          en: "Supply isolated and the tank pumped down without flooding the roof or yard.",
          ar: "عزل التغذية وشفط الخزان دون إغراق السطح أو الفناء.",
        },
      },
      {
        title: { en: "Mechanical scrub", ar: "التنظيف الميكانيكي" },
        body: {
          en: "Brushes and a wet vacuum strip biofilm that rinsing alone leaves behind.",
          ar: "فرش وشفاط رطب يزيلان الغشاء الحيوي الذي لا يزيله الشطف وحده.",
        },
      },
      {
        title: { en: "Sterilise", ar: "التعقيم" },
        body: {
          en: "Chlorine dosed to contact concentration, held, then flushed to safe residual.",
          ar: "جرعة كلور بتركيز التماس تُترك للمدة اللازمة ثم تُشطف حتى المستوى الآمن.",
        },
      },
      {
        title: { en: "Photo record", ar: "سجل مصوّر" },
        body: {
          en: "Interior shots before and after, plus the date for your next service.",
          ar: "صور داخلية قبل وبعد، مع موعد الصيانة القادمة.",
        },
      },
    ],
    equipment: ["hot-water-extractor", "fogger", "moisture-meter"],
    faqs: [
      {
        q: { en: "How often?", ar: "كم مرة؟" },
        a: {
          en: "Once a year for a covered ground tank; twice for an exposed roof tank in direct sun.",
          ar: "مرة سنويًا للخزان الأرضي المغطى، ومرتين للخزان العلوي المعرض لأشعة الشمس.",
        },
      },
    ],
    media: slot("tank-cleaning", "water", {
      en: "Rooftop polyethylene water tank on a concrete plinth",
      ar: "خزان مياه بولي إيثيلين علوي على قاعدة خرسانية",
    }, "/images/tank-cleaning.jpg"),
    startingFrom: { en: "from SAR 350", ar: "من ٣٥٠ ر.س" },
  },

  {
    slug: "pest-control",
    icon: "bug",
    accent: "aqua",
    title: { en: "Pest Control", ar: "مكافحة الحشرات" },
    short: {
      en: "Licensed treatment for cockroaches, ants, rodents, bed bugs and termites — with follow-up included.",
      ar: "مكافحة مرخّصة للصراصير والنمل والقوارض وبق الفراش والنمل الأبيض — مع زيارة متابعة مشمولة.",
    },
    hero: {
      en: "Spraying visible insects treats the symptom. Pests come back because there is a harbourage and an entry point, and unless both are dealt with you will be calling again in six weeks. We inspect first, treat the nest and the route, then seal. The follow-up visit at 14 days is part of the price, not an upsell.",
      ar: "رشّ الحشرات الظاهرة يعالج العَرَض فقط. فالآفات تعود لوجود مأوى ومنفذ دخول، وما لم يُعالج الاثنان فستتصل بنا مجددًا بعد ستة أسابيع. نحن نفحص أولًا، ونعالج العش والمسار، ثم نسدّ المنافذ. وزيارة المتابعة بعد ١٤ يومًا مشمولة في السعر وليست بيعًا إضافيًا.",
    },
    keywords: {
      en: [
        "pest control Riyadh",
        "cockroach treatment Saudi Arabia",
        "termite control",
        "bed bug treatment Riyadh",
        "rodent control service",
      ],
      ar: [
        "مكافحة حشرات الرياض",
        "مكافحة الصراصير في السعودية",
        "مكافحة النمل الأبيض",
        "مكافحة بق الفراش بالرياض",
        "مكافحة القوارض",
      ],
    },
    features: {
      en: [
        "Cockroach gel baiting and crack treatment",
        "Ant and termite barrier and soil treatment",
        "Rodent baiting, trapping and proofing",
        "Bed bug heat and residual treatment",
        "Mosquito and fly fogging for outdoor areas",
        "Entry-point sealing and prevention advice",
      ],
      ar: [
        "جل طُعم للصراصير ومعالجة الشقوق",
        "حواجز ومعالجة تربة للنمل والنمل الأبيض",
        "طُعوم ومصائد وتحصين ضد القوارض",
        "معالجة بق الفراش بالحرارة والمبيدات الباقية",
        "ضباب للبعوض والذباب في المساحات الخارجية",
        "سدّ منافذ الدخول ونصائح الوقاية",
      ],
    },
    deliverables: [
      {
        title: { en: "Inspection first", ar: "الفحص أولًا" },
        body: {
          en: "We find the harbourage before choosing a product. Guessing wastes your money.",
          ar: "نحدد المأوى قبل اختيار المبيد. فالتخمين يهدر مالك.",
        },
      },
      {
        title: { en: "Targeted treatment", ar: "معالجة موجّهة" },
        body: {
          en: "Gel and bait where children cannot reach, rather than blanket spraying living space.",
          ar: "جل وطُعوم في أماكن بعيدة عن متناول الأطفال، بدل الرش الشامل لمساحة المعيشة.",
        },
      },
      {
        title: { en: "Proofing", ar: "التحصين" },
        body: {
          en: "Gaps sealed at pipe penetrations, door sweeps and vents — the actual doorways.",
          ar: "سدّ الفجوات عند اختراقات المواسير وأسفل الأبواب والفتحات — وهي المداخل الفعلية.",
        },
      },
      {
        title: { en: "14-day follow-up", ar: "متابعة بعد ١٤ يومًا" },
        body: {
          en: "Included, to catch the second generation hatching after the first treatment.",
          ar: "مشمولة، للقضاء على الجيل الثاني الذي يفقس بعد المعالجة الأولى.",
        },
      },
    ],
    equipment: ["fogger", "hepa-extractor"],
    faqs: [
      {
        q: {
          en: "Do we need to leave the house?",
          ar: "هل يجب مغادرة المنزل؟",
        },
        a: {
          en: "For gel and bait work, no. For fogging or termite soil treatment, four hours out with windows open afterwards.",
          ar: "لأعمال الجل والطُعوم، لا. أما الضباب أو معالجة تربة النمل الأبيض، فأربع ساعات خارج المنزل مع فتح النوافذ بعدها.",
        },
      },
    ],
    media: slot("pest-control", "schematic", {
      en: "Technician in mask and gloves applying a targeted pest treatment",
      ar: "فني بقناع وقفازات يطبّق معالجة موجّهة للحشرات",
    }, "/images/pest-control.jpg"),
    startingFrom: { en: "from SAR 250", ar: "من ٢٥٠ ر.س" },
  },

  {
    slug: "renovation",
    icon: "blueprint",
    accent: "gold",
    title: { en: "Renovation & Fit-Out", ar: "الترميم والتشطيب الداخلي" },
    short: {
      en: "Single-room refresh to full villa refurbishment — one contract, one site manager, one completion date.",
      ar: "من تجديد غرفة واحدة إلى ترميم فيلا كاملة — عقد واحد ومدير موقع واحد وتاريخ تسليم واحد.",
    },
    hero: {
      en: "Most renovation pain comes from coordination, not craft: the tiler arriving before the plumber finishes, the electrician chasing walls that were just skimmed. Because every trade on this page is ours, the sequence is controlled by one manager. You get one number to call and one date that means something.",
      ar: "معظم معاناة الترميم سببها التنسيق لا الحرفة: مبلّط يصل قبل أن ينهي السباك، وكهربائي يحفر جدرانًا طُليت للتو. ولأن كل مهنة في هذه الصفحة من فريقنا، فإن التسلسل يديره شخص واحد. لديك رقم واحد للاتصال وتاريخ واحد له معنى.",
    },
    keywords: {
      en: [
        "villa renovation Riyadh",
        "home renovation Saudi Arabia",
        "kitchen renovation Riyadh",
        "bathroom renovation",
        "fit out contractor Riyadh",
      ],
      ar: [
        "ترميم فلل الرياض",
        "تجديد منازل في السعودية",
        "تجديد مطابخ الرياض",
        "ترميم حمامات",
        "مقاول تشطيبات الرياض",
      ],
    },
    features: {
      en: [
        "Kitchen and bathroom full renovation",
        "Villa and apartment refurbishment",
        "Majlis and interior decor fit-out",
        "Tiling, flooring and wall cladding",
        "Layout changes and non-structural removal",
        "Single-contract multi-trade coordination",
      ],
      ar: [
        "ترميم كامل للمطابخ والحمامات",
        "تجديد الفلل والشقق",
        "تشطيب المجالس والديكور الداخلي",
        "تبليط وأرضيات وتكسيات جدارية",
        "تعديل التوزيع وإزالة غير إنشائية",
        "تنسيق متعدد المهن بعقد واحد",
      ],
    },
    deliverables: [
      {
        title: { en: "Scope & drawing", ar: "النطاق والمخطط" },
        body: {
          en: "A marked-up plan and a line-by-line scope, so 'finished' is defined before we start.",
          ar: "مخطط موضّح ونطاق عمل مفصّل بندًا بندًا، حتى يكون معنى «منجز» محددًا قبل البدء.",
        },
      },
      {
        title: { en: "Programme", ar: "البرنامج الزمني" },
        body: {
          en: "A dated sequence per trade that you can hold us to, updated weekly.",
          ar: "تسلسل مؤرّخ لكل مهنة يمكنك محاسبتنا عليه، يُحدَّث أسبوعيًا.",
        },
      },
      {
        title: { en: "Single site manager", ar: "مدير موقع واحد" },
        body: {
          en: "One person accountable for sequencing, quality and your questions.",
          ar: "شخص واحد مسؤول عن التسلسل والجودة والإجابة على أسئلتك.",
        },
      },
      {
        title: { en: "Snag & close", ar: "المعالجة والإغلاق" },
        body: {
          en: "A joint snag walk, a fixed date to clear it, and warranty documents on completion.",
          ar: "جولة معالجة مشتركة وتاريخ محدد لإنهائها ووثائق الضمان عند التسليم.",
        },
      },
    ],
    equipment: ["planetary-grinder", "laser-level", "track-saw", "hepa-extractor"],
    faqs: [
      {
        q: {
          en: "Can we live in the villa during works?",
          ar: "هل يمكننا السكن في الفيلا أثناء العمل؟",
        },
        a: {
          en: "For room-by-room work, yes. For a full refurbishment involving plumbing and electrical shutdowns we would recommend moving out — and we will say so rather than let you find out in week two.",
          ar: "للعمل غرفة بغرفة، نعم. أما الترميم الكامل الذي يشمل قطع السباكة والكهرباء فننصح بالانتقال مؤقتًا — وسنقول ذلك بوضوح بدل أن تكتشفه في الأسبوع الثاني.",
        },
      },
    ],
    media: slot("renovation", "schematic", {
      en: "Interior stripped back to brick mid-renovation, with a technician on a ladder",
      ar: "داخل مبنى مجرّد حتى الطوب أثناء الترميم مع فني على سلّم",
    }, "/images/renovation.jpg"),
    startingFrom: { en: "quoted per project", ar: "يُسعَّر حسب المشروع" },
  },

  {
    slug: "annual-contracts",
    icon: "calendar",
    accent: "gold",
    title: { en: "Annual Maintenance Contracts", ar: "عقود الصيانة السنوية" },
    short: {
      en: "Scheduled preventive maintenance for villas, compounds, offices and retail — fixed monthly cost.",
      ar: "صيانة وقائية مجدولة للفلل والمجمعات والمكاتب والمحلات — بتكلفة شهرية ثابتة.",
    },
    hero: {
      en: "Reactive maintenance is the most expensive way to own a building. A contract converts unpredictable emergency bills into one fixed monthly figure, with scheduled visits that catch the failure before it becomes a flood. Landlords and facility managers use these to make a property's running cost actually forecastable.",
      ar: "الصيانة عند العطل هي أغلى طريقة لامتلاك مبنى. والعقد يحوّل فواتير الطوارئ غير المتوقعة إلى رقم شهري ثابت، مع زيارات مجدولة تكتشف العطل قبل أن يتحول إلى غرق. ويستخدمها الملّاك ومديرو المرافق لجعل تكلفة تشغيل العقار قابلة للتنبؤ فعليًا.",
    },
    keywords: {
      en: [
        "annual maintenance contract Riyadh",
        "AMC Saudi Arabia",
        "facility maintenance Riyadh",
        "preventive maintenance contract",
        "landlord maintenance package",
      ],
      ar: [
        "عقد صيانة سنوي الرياض",
        "عقود صيانة في السعودية",
        "صيانة مرافق الرياض",
        "عقد صيانة وقائية",
        "باقة صيانة للملّاك",
      ],
    },
    features: {
      en: [
        "Scheduled quarterly or monthly visits",
        "Priority emergency response for contract holders",
        "Discounted parts and labour rates",
        "Asset register and service history log",
        "Multi-property portfolio management",
        "Fixed monthly invoicing",
      ],
      ar: [
        "زيارات مجدولة ربع سنوية أو شهرية",
        "أولوية في الاستجابة الطارئة لأصحاب العقود",
        "أسعار مخفّضة على القطع والعمالة",
        "سجل أصول وتاريخ صيانة موثّق",
        "إدارة محافظ عقارية متعددة",
        "فوترة شهرية ثابتة",
      ],
    },
    deliverables: [
      {
        title: { en: "Asset survey", ar: "حصر الأصول" },
        body: {
          en: "Every unit, board and pump logged with make, age and condition at day one.",
          ar: "تسجيل كل وحدة ولوحة ومضخة بالنوع والعمر والحالة من اليوم الأول.",
        },
      },
      {
        title: { en: "Service calendar", ar: "تقويم الصيانة" },
        body: {
          en: "Dated visits agreed for the year so nothing depends on someone remembering.",
          ar: "زيارات مؤرخة متفق عليها للعام بأكمله، فلا يعتمد شيء على ذاكرة أحد.",
        },
      },
      {
        title: { en: "Condition reporting", ar: "تقارير الحالة" },
        body: {
          en: "A short report after each visit flagging what will need budget next quarter.",
          ar: "تقرير موجز بعد كل زيارة يحدد ما سيحتاج ميزانية في الربع القادم.",
        },
      },
      {
        title: { en: "Priority dispatch", ar: "أولوية الإرسال" },
        body: {
          en: "Contract holders go to the front of the emergency queue, always.",
          ar: "أصحاب العقود في مقدمة قائمة الطوارئ دائمًا.",
        },
      },
    ],
    equipment: ["thermal-camera", "refrigerant-gauge", "insulation-tester", "gloss-meter"],
    faqs: [
      {
        q: {
          en: "What is not covered?",
          ar: "ما غير المشمول؟",
        },
        a: {
          en: "Major parts like compressors and full re-pipes are quoted separately, at contract-holder rates. Labour, consumables and scheduled servicing are included.",
          ar: "القطع الكبرى كالكمبروسرات وإعادة التمديد الكامل تُسعَّر بشكل منفصل بأسعار أصحاب العقود. أما العمالة والمستهلكات والصيانة المجدولة فمشمولة.",
        },
      },
    ],
    media: slot("annual-contracts", "schematic", {
      en: "Maintenance technician in a hard hat testing a wall-mounted electrical box",
      ar: "فني صيانة بخوذة يفحص صندوقًا كهربائيًا مثبتًا على الجدار",
    }, "/images/annual-contracts.jpg"),
    startingFrom: { en: "from SAR 390 / month", ar: "من ٣٩٠ ر.س / شهريًا" },
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const flagshipServices = services.filter((s) => s.flagship);
