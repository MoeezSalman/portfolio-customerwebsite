import type { Bi } from "@/i18n/config";
import { slot, type MediaSlot } from "@/lib/media";

export type Project = {
  slug: string;
  title: Bi;
  client: Bi;
  sector: Bi;
  year: string;
  district: Bi;
  services: string[];
  area: Bi;
  duration: Bi;
  summary: Bi;
  challenge: Bi;
  approach: Bi;
  outcome: Bi;
  metrics: { value: Bi; label: Bi }[];
  media: MediaSlot;
  accent: "gold" | "aqua";
};

export const projects: Project[] = [
  {
    slug: "al-yasmin-villa-restoration",
    title: {
      en: "Villa Floor Restoration, Al Yasmin",
      ar: "ترميم أرضيات فيلا، حي الياسمين",
    },
    client: { en: "Private residence", ar: "مسكن خاص" },
    sector: { en: "Residential", ar: "سكني" },
    year: "2025",
    district: { en: "Al Yasmin", ar: "الياسمين" },
    services: ["floor-polishing", "marble-restoration"],
    area: { en: "820 m²", ar: "٨٢٠ م²" },
    duration: { en: "6 days", ar: "٦ أيام" },
    summary: {
      en: "Eleven-year-old Crema Marfil throughout the ground floor, dulled by abrasive cleaning and etched around the majlis serving area.",
      ar: "رخام كريما مارفيل عمره أحد عشر عامًا في الطابق الأرضي بالكامل، بهت بسبب التنظيف الكاشط وتآكل حول منطقة الضيافة في المجلس.",
    },
    challenge: {
      en: "The owner had been sold a topical 'polish' twice before. Both coatings had worn unevenly, leaving a patchwork of gloss levels and a plastic-looking film in the traffic lanes.",
      ar: "سبق أن بيع للمالك «تلميع» سطحي مرتين. وقد تآكلت الطبقتان بشكل غير متساوٍ، فتركتا تفاوتًا واضحًا في اللمعان وطبقة تبدو بلاستيكية في ممرات الحركة.",
    },
    approach: {
      en: "We stripped both coatings chemically, then re-cut the stone with metal-bond diamonds to get below the etching. Seven honing passes took it to 3000 grit before crystallisation. Lippage between slabs at the majlis threshold was ground flat rather than disguised.",
      ar: "أزلنا الطبقتين كيميائيًا، ثم أعدنا قصّ الحجر بأقراص ألماسية معدنية للنزول تحت مستوى التآكل. سبع مراحل تنعيم وصلت به إلى ٣٠٠٠ حبيبة قبل التبلور. أما فروق الارتفاع بين الألواح عند مدخل المجلس فقد جُلِيَت حتى الاستواء بدل إخفائها.",
    },
    outcome: {
      en: "Uniform 88 GU across all ground-floor rooms, verified at 32 measurement points. The owner moved back in the same evening the sealer cured.",
      ar: "لمعان موحّد بقيمة ٨٨ وحدة في جميع غرف الطابق الأرضي، موثّق عند ٣٢ نقطة قياس. وعاد المالك للسكن في المساء نفسه بعد جفاف العازل.",
    },
    metrics: [
      { value: { en: "32 → 88 GU", ar: "٣٢ ← ٨٨ وحدة" }, label: { en: "Gloss level", ar: "درجة اللمعان" } },
      { value: { en: "820 m²", ar: "٨٢٠ م²" }, label: { en: "Area restored", ar: "المساحة المعالجة" } },
      { value: { en: "0", ar: "٠" }, label: { en: "Tiles replaced", ar: "بلاطة مستبدلة" } },
    ],
    media: slot("project-yasmin", "marble", {
      en: "Villa lounge with a full-height marble feature wall and fireplace",
      ar: "صالة فيلا بجدار رخامي بكامل الارتفاع ومدفأة",
    }, "/images/project-yasmin.jpg"),
    accent: "gold",
  },
  {
    slug: "olaya-office-tower-amc",
    title: {
      en: "Office Tower Maintenance Contract, Olaya",
      ar: "عقد صيانة برج مكاتب، العليا",
    },
    client: { en: "Commercial landlord", ar: "مالك عقار تجاري" },
    sector: { en: "Commercial", ar: "تجاري" },
    year: "2024 — ongoing",
    district: { en: "Olaya", ar: "العليا" },
    services: ["annual-contracts", "ac-maintenance", "electrical", "plumbing"],
    area: { en: "14 floors", ar: "١٤ طابقًا" },
    duration: { en: "Rolling contract", ar: "عقد مستمر" },
    summary: {
      en: "A fourteen-floor tower running fully reactive maintenance, with tenant complaints averaging forty a month and no asset records at all.",
      ar: "برج من أربعة عشر طابقًا يعمل بصيانة رد الفعل فقط، بمعدل أربعين شكوى مستأجر شهريًا ودون أي سجلات للأصول.",
    },
    challenge: {
      en: "Nobody knew how old the AC plant was, which riser fed which floor, or why the sixth floor lost power every Thursday. Every callout started from zero.",
      ar: "لا أحد يعرف عمر وحدات التكييف، ولا أي خط تغذية يخدم أي طابق، ولا سبب انقطاع الكهرباء عن الطابق السادس كل خميس.",
    },
    approach: {
      en: "We built an asset register floor by floor over three weeks, thermally imaged every distribution board, and put the whole building on a quarterly service calendar with priority dispatch for the landlord.",
      ar: "بنينا سجل أصول طابقًا بطابق على مدى ثلاثة أسابيع، وصوّرنا كل لوحة توزيع حراريًا، ووضعنا المبنى بأكمله على تقويم صيانة ربع سنوي مع أولوية استجابة للمالك.",
    },
    outcome: {
      en: "Tenant complaints fell to under nine a month within two quarters. The Thursday outage turned out to be an overloaded riser shared with a tenant's server room.",
      ar: "انخفضت شكاوى المستأجرين إلى أقل من تسع شهريًا خلال ربعين. وتبيّن أن انقطاع الخميس سببه خط تغذية محمّل زيادة يشترك فيه مع غرفة خوادم أحد المستأجرين.",
    },
    metrics: [
      { value: { en: "−78%", ar: "−٧٨٪" }, label: { en: "Tenant complaints", ar: "شكاوى المستأجرين" } },
      { value: { en: "412", ar: "٤١٢" }, label: { en: "Assets registered", ar: "أصلًا مسجلًا" } },
      { value: { en: "14", ar: "١٤" }, label: { en: "Floors covered", ar: "طابقًا مشمولًا" } },
    ],
    media: slot("project-olaya", "schematic", {
      en: "Curved glass façade of a multi-storey office tower",
      ar: "واجهة زجاجية منحنية لبرج مكاتب متعدد الطوابق",
    }, "/images/project-olaya.jpg"),
    accent: "aqua",
  },
  {
    slug: "hittin-pool-leak",
    title: {
      en: "Pool & Slab Leak Investigation, Hittin",
      ar: "تحقيق تسرب مسبح وصبّة، حطين",
    },
    client: { en: "Private residence", ar: "مسكن خاص" },
    sector: { en: "Residential", ar: "سكني" },
    year: "2025",
    district: { en: "Hittin", ar: "حطين" },
    services: ["leak-detection", "plumbing"],
    area: { en: "Villa + 60 m³ pool", ar: "فيلا + مسبح ٦٠ م³" },
    duration: { en: "2 visits", ar: "زيارتان" },
    summary: {
      en: "Water bill had tripled over four months. Two previous contractors had broken up eleven square metres of terrace and found nothing.",
      ar: "تضاعفت فاتورة المياه ثلاث مرات خلال أربعة أشهر. وسبق أن كسر مقاولان سابقان أحد عشر مترًا مربعًا من التراس دون العثور على شيء.",
    },
    challenge: {
      en: "The visible damp patch was on the terrace, eight metres from the actual fault. Both previous attempts had excavated exactly where the symptom appeared.",
      ar: "بقعة الرطوبة الظاهرة كانت على التراس، على بعد ثمانية أمتار من العطل الفعلي. وقد حفر المحاولتان السابقتان في موضع ظهور العَرَض تمامًا.",
    },
    approach: {
      en: "Static pool test overnight isolated the pool as sound. Acoustic correlation on the pressurised feed, cross-checked with thermal and tracer gas, put the fault under the driveway edge — where a settlement crack had sheared a PPR joint.",
      ar: "اختبار ثابت للمسبح طوال الليل أثبت سلامته. والربط الصوتي على خط التغذية المضغوط، بالتحقق المتقاطع مع التصوير الحراري والغاز الكاشف، حدد العطل تحت حافة الممر — حيث قطع شقّ هبوط وصلة بولي بروبلين.",
    },
    outcome: {
      en: "One 40 × 40 cm opening, joint replaced, pressure-tested and reinstated in a single day. Consumption returned to baseline within one billing cycle.",
      ar: "فتحة واحدة ٤٠ × ٤٠ سم، استُبدلت الوصلة واختُبرت بالضغط وأُعيد التشطيب في يوم واحد. وعاد الاستهلاك إلى معدله الطبيعي خلال دورة فوترة واحدة.",
    },
    metrics: [
      { value: { en: "0.16 m²", ar: "٠٫١٦ م²" }, label: { en: "Floor opened", ar: "مساحة الفتح" } },
      { value: { en: "2 visits", ar: "زيارتان" }, label: { en: "To resolution", ar: "حتى الحل" } },
      { value: { en: "−68%", ar: "−٦٨٪" }, label: { en: "Water consumption", ar: "استهلاك المياه" } },
    ],
    media: slot("project-hittin", "water", {
      en: "Private villa swimming pool with a timber-clad terrace",
      ar: "مسبح فيلا خاصة مع تراس مكسو بالخشب",
    }, "/images/project-hittin.jpg"),
    accent: "aqua",
  },
  {
    slug: "diriyah-retail-fitout",
    title: {
      en: "Retail Fit-Out & Terrazzo, Diriyah",
      ar: "تشطيب محل تجاري وترازو، الدرعية",
    },
    client: { en: "Hospitality group", ar: "مجموعة ضيافة" },
    sector: { en: "Retail", ar: "تجزئة" },
    year: "2025",
    district: { en: "Diriyah", ar: "الدرعية" },
    services: ["renovation", "floor-polishing", "electrical", "ceilings-gypsum"],
    area: { en: "310 m²", ar: "٣١٠ م²" },
    duration: { en: "5 weeks", ar: "٥ أسابيع" },
    summary: {
      en: "A shell unit turned into a café with poured terrazzo floors, a shadow-gap ceiling and a fixed opening date that could not move.",
      ar: "وحدة على الهيكل حُوّلت إلى مقهى بأرضيات ترازو مصبوبة وسقف بفجوات ظل وتاريخ افتتاح ثابت لا يقبل التأجيل.",
    },
    challenge: {
      en: "Five weeks from shell to trading, with terrazzo needing to cure before grinding and the ceiling needing to be finished before the floor could be protected.",
      ar: "خمسة أسابيع من الهيكل إلى التشغيل، مع حاجة الترازو للتصلب قبل الجلي، وحاجة السقف للاكتمال قبل إمكانية حماية الأرضية.",
    },
    approach: {
      en: "We sequenced backwards from the opening date. Ceiling and electrical first fix ran while terrazzo cured under sheeting; grinding started the morning the ceiling was signed off, with the whole shop on negative-pressure dust control.",
      ar: "رتّبنا التسلسل عكسيًا من تاريخ الافتتاح. فنُفّذ السقف والتمديد الكهربائي الأولي بينما كان الترازو يتصلب تحت الأغطية، وبدأ الجلي صباح اعتماد السقف، مع تشغيل المحل بالكامل على نظام ضغط سالب للتحكم بالغبار.",
    },
    outcome: {
      en: "Handed over two days ahead of the opening date, with the terrazzo at 92 GU and a snag list of four items, all closed before trading.",
      ar: "تم التسليم قبل موعد الافتتاح بيومين، بلمعان ترازو ٩٢ وحدة وقائمة ملاحظات من أربعة بنود أُغلقت جميعها قبل بدء التشغيل.",
    },
    metrics: [
      { value: { en: "−2 days", ar: "−يومان" }, label: { en: "Against programme", ar: "مقابل البرنامج" } },
      { value: { en: "92 GU", ar: "٩٢ وحدة" }, label: { en: "Terrazzo gloss", ar: "لمعان الترازو" } },
      { value: { en: "4", ar: "٤" }, label: { en: "Snag items", ar: "بنود المعالجة" } },
    ],
    media: slot("project-diriyah", "marble", {
      en: "Café interior with a terrazzo floor, timber counter and arched windows",
      ar: "داخل مقهى بأرضية ترازو وكاونتر خشبي ونوافذ مقوسة",
    }, "/images/project-diriyah.jpg"),
    accent: "gold",
  },
  {
    slug: "narjis-compound-ac",
    title: {
      en: "Compound AC Overhaul, Al Narjis",
      ar: "إصلاح شامل لتكييف مجمّع، النرجس",
    },
    client: { en: "Residential compound", ar: "مجمّع سكني" },
    sector: { en: "Facilities", ar: "مرافق" },
    year: "2024",
    district: { en: "Al Narjis", ar: "النرجس" },
    services: ["ac-maintenance", "electrical", "annual-contracts"],
    area: { en: "46 units", ar: "٤٦ وحدة" },
    duration: { en: "3 weeks", ar: "٣ أسابيع" },
    summary: {
      en: "Forty-six villas, none serviced since handover four years earlier, going into a Riyadh summer with rising failure rates.",
      ar: "ست وأربعون فيلا لم تخضع لأي صيانة منذ التسليم قبل أربع سنوات، تدخل صيف الرياض مع ارتفاع معدلات الأعطال.",
    },
    challenge: {
      en: "Service all units before peak season without leaving any family without cooling overnight, and identify which compressors were near end of life before they failed in August.",
      ar: "صيانة جميع الوحدات قبل ذروة الموسم دون ترك أي أسرة بلا تبريد ليلًا، وتحديد الكمبروسرات القريبة من نهاية عمرها قبل أن تتعطل في أغسطس.",
    },
    approach: {
      en: "Four villas a day, coil wash and full service, with running amps logged per unit. Any compressor drawing above nameplate was flagged amber and quoted for planned replacement rather than left to fail.",
      ar: "أربع فلل يوميًا، غسيل ملفات وصيانة كاملة، مع تسجيل شدة التيار لكل وحدة. وأي كمبروسر يسحب تيارًا أعلى من لوحة البيانات وُضع في القائمة البرتقالية وسُعّر لاستبدال مخطط بدل تركه حتى العطل.",
    },
    outcome: {
      en: "Nine compressors replaced on a planned schedule in spring. Zero emergency AC callouts across the compound that summer, against nineteen the year before.",
      ar: "استُبدل تسعة كمبروسرات وفق جدول مخطط في الربيع. وصفر استدعاء طارئ للتكييف في المجمّع ذلك الصيف، مقابل تسعة عشر في العام السابق.",
    },
    metrics: [
      { value: { en: "19 → 0", ar: "١٩ ← ٠" }, label: { en: "Emergency callouts", ar: "استدعاءات الطوارئ" } },
      { value: { en: "46", ar: "٤٦" }, label: { en: "Villas serviced", ar: "فيلا مُصانة" } },
      { value: { en: "−31%", ar: "−٣١٪" }, label: { en: "Cooling power draw", ar: "استهلاك التبريد" } },
    ],
    media: slot("project-narjis", "spark", {
      en: "Bank of outdoor condenser units mounted on a building wall",
      ar: "مجموعة وحدات تكثيف خارجية مثبتة على جدار مبنى",
    }, "/images/project-narjis.jpg"),
    accent: "aqua",
  },
  {
    slug: "sahafa-majlis-refurb",
    title: {
      en: "Majlis Refurbishment, Al Sahafa",
      ar: "تجديد مجلس، حي الصحافة",
    },
    client: { en: "Private residence", ar: "مسكن خاص" },
    sector: { en: "Residential", ar: "سكني" },
    year: "2025",
    district: { en: "Al Sahafa", ar: "الصحافة" },
    services: ["renovation", "ceilings-gypsum", "painting", "carpentry"],
    area: { en: "95 m²", ar: "٩٥ م²" },
    duration: { en: "18 days", ar: "١٨ يومًا" },
    summary: {
      en: "A dated majlis rebuilt around a new light cove, full-height joinery and a micro-cement feature wall.",
      ar: "مجلس قديم أُعيد بناؤه حول حفرة إنارة جديدة وأعمال خشبية بكامل الارتفاع وجدار مميز بالمايكروسمنت.",
    },
    challenge: {
      en: "The ceiling had cracked along every board joint, and the room was out of square by 60 mm across its length — which would have shown in any full-height joinery run.",
      ar: "كان السقف متشققًا عند كل وصلة لوح، وكانت الغرفة منحرفة عن الزاوية القائمة بمقدار ٦٠ مم على امتداد طولها — وهو ما كان سيظهر في أي عمل خشبي بكامل الارتفاع.",
    },
    approach: {
      en: "Ceiling stripped and re-framed at correct centres rather than patched. Joinery scribed to the wall with a tapered filler panel at the shadow gap, so the eye reads a straight line even though the wall is not.",
      ar: "أُزيل السقف وأُعيد تقفيصه بمسافات صحيحة بدل الترقيع. وفُصّلت الأعمال الخشبية على الجدار مع لوح حشو متدرج عند فجوة الظل، فترى العين خطًا مستقيمًا رغم أن الجدار ليس كذلك.",
    },
    outcome: {
      en: "No visible taper, no cracking at twelve-month review, and a light cove that hides its fixtures completely at seated eye level.",
      ar: "لا تدرّج ظاهر، ولا تشقق عند المراجعة بعد اثني عشر شهرًا، وحفرة إنارة تخفي وحداتها تمامًا عند مستوى نظر الجالس.",
    },
    metrics: [
      { value: { en: "60 mm", ar: "٦٠ مم" }, label: { en: "Wall deviation absorbed", ar: "انحراف جدار مُستوعب" } },
      { value: { en: "18 days", ar: "١٨ يومًا" }, label: { en: "Shell to handover", ar: "من التجريد للتسليم" } },
      { value: { en: "0", ar: "٠" }, label: { en: "Cracks at 12 months", ar: "شقوق بعد ١٢ شهرًا" } },
    ],
    media: slot("project-sahafa", "schematic", {
      en: "Majlis with a black marble fireplace column, coffered ceiling and built-in joinery",
      ar: "مجلس بعمود مدفأة من الرخام الأسود وسقف مقسّم ونجارة مدمجة",
    }, "/images/project-sahafa.jpg"),
    accent: "gold",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const projectSlugs = projects.map((p) => p.slug);
