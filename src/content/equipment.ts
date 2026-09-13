import type { Bi } from "@/i18n/config";

/**
 * The machinery catalogue. Each entry is drawn as bespoke SVG line-art by
 * <Machine glyph={...}/> — see components/graphics/Machine.tsx.
 */
export type EquipmentCategory = "surface" | "water" | "climate" | "power" | "build";

export type Equipment = {
  id: string;
  /** Which line-art glyph renders for this machine. */
  glyph:
    | "grinder"
    | "polisher"
    | "vacuum"
    | "meter"
    | "camera"
    | "jetter"
    | "gauge"
    | "locator"
    | "thermal"
    | "sprayer"
    | "saw"
    | "welder"
    | "level"
    | "extractor";
  category: EquipmentCategory;
  name: Bi;
  role: Bi;
  detail: Bi;
  specs: { label: Bi; value: Bi }[];
};

export const equipment: Equipment[] = [
  {
    id: "planetary-grinder",
    glyph: "grinder",
    category: "surface",
    name: { en: "Planetary Floor Grinder", ar: "جلاخة أرضيات كوكبية" },
    role: {
      en: "Cuts the damaged top layer off stone and concrete",
      ar: "تزيل الطبقة العليا التالفة من الحجر والخرسانة",
    },
    detail: {
      en: "Three counter-rotating heads on a rotating plate. The opposing motion stops the machine from tracking in one direction, which is what leaves swirl marks on cheaper single-disc units.",
      ar: "ثلاثة رؤوس تدور عكسيًا فوق قرص دوّار. الحركة المتعاكسة تمنع انحراف المعدة في اتجاه واحد، وهو ما يترك دوائر واضحة في الأجهزة أحادية القرص الأرخص.",
    },
    specs: [
      { label: { en: "Working width", ar: "عرض العمل" }, value: { en: "630 mm", ar: "٦٣٠ مم" } },
      { label: { en: "Head speed", ar: "سرعة الرؤوس" }, value: { en: "200–1200 rpm", ar: "٢٠٠–١٢٠٠ لفة/د" } },
      { label: { en: "Tooling", ar: "الأقراص" }, value: { en: "50–3000 grit diamond", ar: "ألماس ٥٠–٣٠٠٠ حبيبة" } },
      { label: { en: "Dust capture", ar: "سحب الغبار" }, value: { en: "Shroud to HEPA", ar: "غطاء موصول بـHEPA" } },
    ],
  },
  {
    id: "rotary-polisher",
    glyph: "polisher",
    category: "surface",
    name: { en: "High-Speed Rotary Polisher", ar: "ملمّعة دوّارة عالية السرعة" },
    role: {
      en: "Brings marble and terrazzo to mirror gloss",
      ar: "ترفع لمعان الرخام والترازو إلى مستوى المرآة",
    },
    detail: {
      en: "Weighted single disc that generates the heat and pressure crystallisation needs. Speed is controlled by a variable trigger — too fast burns the stone, too slow never forms the crystal layer.",
      ar: "قرص مفرد مثقّل يولّد الحرارة والضغط اللازمين للتبلور. تُضبط السرعة بزناد متغير — فالسرعة الزائدة تحرق الحجر والبطيئة لا تُكوّن الطبقة البلورية.",
    },
    specs: [
      { label: { en: "Disc", ar: "القرص" }, value: { en: "430 mm weighted", ar: "٤٣٠ مم مثقّل" } },
      { label: { en: "Speed", ar: "السرعة" }, value: { en: "175–400 rpm", ar: "١٧٥–٤٠٠ لفة/د" } },
      { label: { en: "Pads", ar: "الوسادات" }, value: { en: "Steel wool / diamond", ar: "صوف فولاذي / ألماس" } },
    ],
  },
  {
    id: "hepa-extractor",
    glyph: "vacuum",
    category: "surface",
    name: { en: "HEPA Dust Extractor", ar: "شافط غبار بفلتر HEPA" },
    role: {
      en: "Captures silica dust at the point it is created",
      ar: "يسحب غبار السيليكا من لحظة تكوّنه",
    },
    detail: {
      en: "Coupled directly to the grinder shroud. Grinding stone releases respirable crystalline silica; an H-class filter traps it rather than redistributing it through the property.",
      ar: "موصول مباشرة بغطاء الجلاخة. فجلي الحجر يطلق سيليكا بلورية قابلة للاستنشاق، وفلتر الفئة H يحتجزها بدل إعادة نشرها في أرجاء العقار.",
    },
    specs: [
      { label: { en: "Filtration", ar: "الفلترة" }, value: { en: "H14 — 99.995%", ar: "H14 — ٩٩٫٩٩٥٪" } },
      { label: { en: "Airflow", ar: "تدفق الهواء" }, value: { en: "560 m³/h", ar: "٥٦٠ م³/س" } },
      { label: { en: "Cleaning", ar: "التنظيف" }, value: { en: "Auto pulse filter", ar: "نفض تلقائي للفلتر" } },
    ],
  },
  {
    id: "gloss-meter",
    glyph: "meter",
    category: "surface",
    name: { en: "Digital Gloss Meter", ar: "مقياس لمعان رقمي" },
    role: {
      en: "Turns 'shiny' into a number you can hold us to",
      ar: "يحوّل «اللمعان» إلى رقم يمكنك محاسبتنا عليه",
    },
    detail: {
      en: "Measures reflected light at 60°. We log readings at four points per room before and after, so the improvement is documented rather than argued about.",
      ar: "يقيس الضوء المنعكس بزاوية ٦٠ درجة. نسجّل القراءات في أربع نقاط بكل غرفة قبل وبعد، فيكون التحسّن موثّقًا لا محل جدال.",
    },
    specs: [
      { label: { en: "Angle", ar: "الزاوية" }, value: { en: "60° standard", ar: "٦٠° قياسي" } },
      { label: { en: "Range", ar: "المدى" }, value: { en: "0–120 GU", ar: "٠–١٢٠ وحدة لمعان" } },
    ],
  },
  {
    id: "steam-cleaner",
    glyph: "extractor",
    category: "surface",
    name: { en: "Dry Steam Generator", ar: "مولّد بخار جاف" },
    role: {
      en: "Lifts grout soil and sanitises without chemicals",
      ar: "يزيل أوساخ الفواصل ويعقّم دون مواد كيميائية",
    },
    detail: {
      en: "Superheated low-moisture steam softens grease and kills bacteria on contact, leaving surfaces dry in minutes.",
      ar: "بخار محمّص منخفض الرطوبة يذيب الدهون ويقتل البكتيريا فور الملامسة، ويترك الأسطح جافة خلال دقائق.",
    },
    specs: [
      { label: { en: "Temperature", ar: "الحرارة" }, value: { en: "175 °C", ar: "١٧٥ °م" } },
      { label: { en: "Pressure", ar: "الضغط" }, value: { en: "10 bar", ar: "١٠ بار" } },
    ],
  },
  {
    id: "drain-camera",
    glyph: "camera",
    category: "water",
    name: { en: "CCTV Drain Camera", ar: "كاميرا فحص المصارف" },
    role: {
      en: "Sees the blockage instead of guessing at it",
      ar: "ترى الانسداد بدل التخمين بموضعه",
    },
    detail: {
      en: "A self-levelling camera head on a push rod with a sonde transmitter, so we can locate the fault from above ground to within centimetres.",
      ar: "رأس كاميرا ذاتي الاستواء على قضيب دفع مزوّد بمرسل تحديد موقع، فنحدد العطل من فوق الأرض بدقة سنتيمترات.",
    },
    specs: [
      { label: { en: "Reach", ar: "المدى" }, value: { en: "60 m", ar: "٦٠ م" } },
      { label: { en: "Head", ar: "الرأس" }, value: { en: "23 mm self-levelling", ar: "٢٣ مم ذاتي الاستواء" } },
      { label: { en: "Sonde", ar: "المرسل" }, value: { en: "512 Hz", ar: "٥١٢ هرتز" } },
    ],
  },
  {
    id: "hydro-jetter",
    glyph: "jetter",
    category: "water",
    name: { en: "High-Pressure Hydro Jetter", ar: "جهاز تسليك بالضغط العالي" },
    role: {
      en: "Scours pipe walls back to full bore",
      ar: "يجرف جدران المواسير حتى قطرها الكامل",
    },
    detail: {
      en: "Reverse-facing nozzles pull the hose along the pipe while cutting scale and grease off the wall. Unlike an auger, it clears the whole diameter rather than punching a hole through the blockage.",
      ar: "فوهات موجهة للخلف تسحب الخرطوم داخل الماسورة بينما تقطع الترسبات والدهون عن الجدار. وخلافًا للسلك الحلزوني، فإنه ينظف القطر بالكامل بدل ثقب الانسداد فقط.",
    },
    specs: [
      { label: { en: "Pressure", ar: "الضغط" }, value: { en: "200 bar", ar: "٢٠٠ بار" } },
      { label: { en: "Flow", ar: "التدفق" }, value: { en: "21 L/min", ar: "٢١ لتر/د" } },
      { label: { en: "Hose", ar: "الخرطوم" }, value: { en: "80 m", ar: "٨٠ م" } },
    ],
  },
  {
    id: "pressure-tester",
    glyph: "gauge",
    category: "water",
    name: { en: "Hydrostatic Pressure Tester", ar: "جهاز اختبار الضغط الهيدروستاتيكي" },
    role: {
      en: "Proves a repair holds before the wall closes",
      ar: "يثبت نجاح الإصلاح قبل إغلاق الجدار",
    },
    detail: {
      en: "Pressurises the line above working pressure and holds it. A pressure drop over 30 minutes means a leak remains — no guesswork, no callback.",
      ar: "يضغط الخط فوق ضغط التشغيل ويثبّته. وأي انخفاض خلال ٣٠ دقيقة يعني بقاء تسرب — دون تخمين ودون زيارة إعادة.",
    },
    specs: [
      { label: { en: "Test range", ar: "مدى الاختبار" }, value: { en: "0–40 bar", ar: "٠–٤٠ بار" } },
      { label: { en: "Hold time", ar: "مدة التثبيت" }, value: { en: "30 min minimum", ar: "٣٠ دقيقة كحد أدنى" } },
    ],
  },
  {
    id: "pipe-locator",
    glyph: "locator",
    category: "water",
    name: { en: "Pipe & Cable Locator", ar: "جهاز تتبّع المواسير والكابلات" },
    role: {
      en: "Maps buried services before anyone cuts",
      ar: "يرسم مسار الخدمات المدفونة قبل أي قطع",
    },
    detail: {
      en: "Traces metallic pipe and live cable runs through screed and masonry, so drilling and chasing never hits a service.",
      ar: "يتتبع مسارات المواسير المعدنية والكابلات الحية عبر الصبّة والبناء، فلا يصيب الثقب أو الحفر أي خدمة.",
    },
    specs: [
      { label: { en: "Depth", ar: "العمق" }, value: { en: "up to 3 m", ar: "حتى ٣ م" } },
      { label: { en: "Modes", ar: "الأوضاع" }, value: { en: "Active / passive", ar: "نشط / خامل" } },
    ],
  },
  {
    id: "acoustic-detector",
    glyph: "locator",
    category: "water",
    name: { en: "Acoustic Leak Correlator", ar: "مُرابط تسريب صوتي" },
    role: {
      en: "Hears a pressurised leak through concrete",
      ar: "يسمع التسرب المضغوط عبر الخرسانة",
    },
    detail: {
      en: "Two sensors placed either side of a suspect run; the correlator compares arrival times of the leak's acoustic signature to triangulate the source.",
      ar: "حساسان يوضعان على طرفي المسار المشتبه به، ويقارن الجهاز زمن وصول البصمة الصوتية للتسرب لتحديد مصدره بالتثليث.",
    },
    specs: [
      { label: { en: "Accuracy", ar: "الدقة" }, value: { en: "± 20 cm", ar: "± ٢٠ سم" } },
      { label: { en: "Filters", ar: "المرشحات" }, value: { en: "Digital band-pass", ar: "رقمي نطاقي" } },
    ],
  },
  {
    id: "moisture-meter",
    glyph: "meter",
    category: "water",
    name: { en: "Moisture & Humidity Meter", ar: "مقياس الرطوبة" },
    role: {
      en: "Distinguishes an active leak from old damage",
      ar: "يميّز التسرب النشط عن الضرر القديم",
    },
    detail: {
      en: "Pin and pinless readings mapped across a wall show whether moisture is still rising — which decides whether you need a repair or just a repaint.",
      ar: "قراءات بالمسبار وبدونه تُرسم على الجدار لتبيّن إن كانت الرطوبة ما تزال ترتفع — وهو ما يحدد إن كنت تحتاج إصلاحًا أم مجرد إعادة دهان.",
    },
    specs: [
      { label: { en: "Modes", ar: "الأوضاع" }, value: { en: "Pin / pinless / RH", ar: "مسبار / بدون / رطوبة نسبية" } },
      { label: { en: "Depth", ar: "العمق" }, value: { en: "up to 40 mm", ar: "حتى ٤٠ مم" } },
    ],
  },
  {
    id: "thermal-camera",
    glyph: "thermal",
    category: "climate",
    name: { en: "Thermal Imaging Camera", ar: "كاميرا التصوير الحراري" },
    role: {
      en: "Reveals hidden leaks, hot terminals and missing insulation",
      ar: "تكشف التسربات الخفية والأطراف الساخنة ونقص العزل",
    },
    detail: {
      en: "The single most useful diagnostic tool we own. Water cools a floor, a loose terminal heats a board, and a failing capacitor runs hot — all invisible until you image them.",
      ar: "أكثر أداة تشخيصية فائدة نمتلكها. فالماء يبرّد الأرضية، والطرف المرتخي يسخّن اللوحة، والمكثف التالف يرتفع حرارةً — وكلها غير مرئية حتى تُصوَّر حراريًا.",
    },
    specs: [
      { label: { en: "Resolution", ar: "الدقة" }, value: { en: "384 × 288", ar: "٣٨٤ × ٢٨٨" } },
      { label: { en: "Sensitivity", ar: "الحساسية" }, value: { en: "< 40 mK", ar: "< ٤٠ ملي كلفن" } },
      { label: { en: "Range", ar: "المدى" }, value: { en: "−20 to 550 °C", ar: "−٢٠ إلى ٥٥٠ °م" } },
    ],
  },
  {
    id: "duct-robot",
    glyph: "camera",
    category: "climate",
    name: { en: "Duct Cleaning Robot", ar: "روبوت تنظيف مجاري الهواء" },
    role: {
      en: "Brushes and films the inside of ductwork",
      ar: "يفرّش ويصوّر داخل مجاري الهواء",
    },
    detail: {
      en: "A tracked brush head with an onboard camera. You see the before and after footage of your own ducts rather than taking a technician's word for it.",
      ar: "رأس فرشاة مجنزر بكاميرا مدمجة. ترى بنفسك لقطات مجاريك قبل وبعد بدل الاكتفاء بكلام الفني.",
    },
    specs: [
      { label: { en: "Duct size", ar: "مقاس المجرى" }, value: { en: "200–1200 mm", ar: "٢٠٠–١٢٠٠ مم" } },
      { label: { en: "Camera", ar: "الكاميرا" }, value: { en: "1080p with LED", ar: "١٠٨٠p مع إضاءة" } },
    ],
  },
  {
    id: "refrigerant-gauge",
    glyph: "gauge",
    category: "climate",
    name: { en: "Digital Manifold Gauge", ar: "مانيفولد قياس رقمي" },
    role: {
      en: "Charges AC by measurement, not by feel",
      ar: "يشحن المكيف بالقياس لا بالتقدير",
    },
    detail: {
      en: "Reads suction and discharge pressure with live superheat and subcooling. Overcharging an AC damages the compressor as surely as undercharging it.",
      ar: "يقرأ ضغط السحب والطرد مع حساب التحميص والتبريد الفائق لحظيًا. فزيادة الشحن تتلف الكمبروسر تمامًا كنقصانه.",
    },
    specs: [
      { label: { en: "Refrigerants", ar: "أنواع الغاز" }, value: { en: "R22 / R410A / R32", ar: "R22 / R410A / R32" } },
      { label: { en: "Accuracy", ar: "الدقة" }, value: { en: "± 0.5%", ar: "± ٠٫٥٪" } },
    ],
  },
  {
    id: "fogger",
    glyph: "sprayer",
    category: "climate",
    name: { en: "ULV Cold Fogger", ar: "مُضبّب بارد فائق الدقة" },
    role: {
      en: "Distributes disinfectant as a dry suspended mist",
      ar: "ينشر المعقّم كضباب جاف معلّق",
    },
    detail: {
      en: "Droplets under 30 microns stay airborne long enough to reach surfaces a cloth never touches — behind units, inside ducts, along skirting.",
      ar: "قطرات أقل من ٣٠ ميكرون تبقى عالقة في الهواء مدة كافية لتصل إلى أسطح لا تلمسها القماشة — خلف الوحدات وداخل المجاري وعلى امتداد الوزرات.",
    },
    specs: [
      { label: { en: "Droplet", ar: "القطرة" }, value: { en: "5–30 µm", ar: "٥–٣٠ ميكرون" } },
      { label: { en: "Tank", ar: "الخزان" }, value: { en: "5 L", ar: "٥ لتر" } },
    ],
  },
  {
    id: "insulation-tester",
    glyph: "meter",
    category: "power",
    name: { en: "Insulation Resistance Tester", ar: "جهاز اختبار مقاومة العزل" },
    role: {
      en: "Proves a circuit is safe before it is energised",
      ar: "يثبت سلامة الدائرة قبل تشغيلها",
    },
    detail: {
      en: "Applies a 500 V test voltage and measures leakage to earth. Readings go on your certificate — a circuit that passes visually can still be failing internally.",
      ar: "يطبق جهد اختبار ٥٠٠ فولت ويقيس التسرب إلى الأرض. وتُدوَّن القراءات في شهادتك — فالدائرة السليمة ظاهريًا قد تكون معطوبة داخليًا.",
    },
    specs: [
      { label: { en: "Test voltage", ar: "جهد الاختبار" }, value: { en: "250 / 500 / 1000 V", ar: "٢٥٠ / ٥٠٠ / ١٠٠٠ فولت" } },
      { label: { en: "Range", ar: "المدى" }, value: { en: "up to 200 GΩ", ar: "حتى ٢٠٠ جيجا أوم" } },
    ],
  },
  {
    id: "cable-tracer",
    glyph: "locator",
    category: "power",
    name: { en: "Live Cable Tracer", ar: "جهاز تتبّع الكابلات الحية" },
    role: {
      en: "Identifies which breaker feeds which socket",
      ar: "يحدد أي قاطع يغذّي أي فيش",
    },
    detail: {
      en: "Injects a signal at the socket and reads it at the board. It removes the guesswork that leads to the wrong circuit being isolated.",
      ar: "يبثّ إشارة عند الفيش ويلتقطها عند اللوحة. فيزيل التخمين الذي يؤدي إلى عزل الدائرة الخاطئة.",
    },
    specs: [
      { label: { en: "Detection", ar: "الكشف" }, value: { en: "Live / dead circuits", ar: "دوائر حية / مفصولة" } },
      { label: { en: "Depth", ar: "العمق" }, value: { en: "up to 100 mm", ar: "حتى ١٠٠ مم" } },
    ],
  },
  {
    id: "airless-sprayer",
    glyph: "sprayer",
    category: "build",
    name: { en: "Airless Paint Sprayer", ar: "رشّاش دهان بدون هواء" },
    role: {
      en: "Lays an even film on large wall areas",
      ar: "يوزّع طبقة متساوية على المساحات الكبيرة",
    },
    detail: {
      en: "Atomises paint by pressure rather than air, so there is far less overspray and the film builds to full thickness in a single pass.",
      ar: "يذرّي الدهان بالضغط لا بالهواء، فيقل الرذاذ المتطاير كثيرًا وتصل الطبقة إلى سماكتها الكاملة بمرور واحد.",
    },
    specs: [
      { label: { en: "Pressure", ar: "الضغط" }, value: { en: "210 bar", ar: "٢١٠ بار" } },
      { label: { en: "Output", ar: "الإنتاجية" }, value: { en: "3.0 L/min", ar: "٣٫٠ لتر/د" } },
    ],
  },
  {
    id: "drywall-sander",
    glyph: "polisher",
    category: "build",
    name: { en: "Long-Reach Drywall Sander", ar: "صنفرة جبس بذراع طويل" },
    role: {
      en: "Flattens filler on ceilings and high walls",
      ar: "تسوّي المعجون على الأسقف والجدران العالية",
    },
    detail: {
      en: "A vacuum-coupled sanding head on a telescopic arm with an LED ring — the raking light is what makes ridges visible while you are still sanding them.",
      ar: "رأس صنفرة موصول بشفاط على ذراع تلسكوبي مع حلقة إضاءة — فالضوء المائل هو ما يُظهر النتوءات وأنت ما تزال تصنفرها.",
    },
    specs: [
      { label: { en: "Reach", ar: "المدى" }, value: { en: "3.0 m", ar: "٣٫٠ م" } },
      { label: { en: "Extraction", ar: "الشفط" }, value: { en: "Integrated HEPA", ar: "HEPA مدمج" } },
    ],
  },
  {
    id: "track-saw",
    glyph: "saw",
    category: "build",
    name: { en: "Plunge Track Saw", ar: "منشار غاطس بمسار" },
    role: {
      en: "Cuts board dead straight and splinter-free",
      ar: "يقطع الألواح بخط مستقيم دون تشظٍّ",
    },
    detail: {
      en: "Runs on a guide rail with a splinter guard, giving a finished edge straight off the saw — no trimming pass needed.",
      ar: "يعمل على سكة توجيه مع واقي تشظٍّ، فيعطي حافة نهائية مباشرة من المنشار دون الحاجة لمرور تشذيب.",
    },
    specs: [
      { label: { en: "Cut depth", ar: "عمق القص" }, value: { en: "55 mm", ar: "٥٥ مم" } },
      { label: { en: "Rail", ar: "السكة" }, value: { en: "1.4 / 2.7 m", ar: "١٫٤ / ٢٫٧ م" } },
    ],
  },
  {
    id: "edge-bander",
    glyph: "saw",
    category: "build",
    name: { en: "Portable Edge Bander", ar: "آلة تغليف حواف محمولة" },
    role: {
      en: "Seals cut board edges against moisture",
      ar: "تغلق حواف الألواح المقطوعة ضد الرطوبة",
    },
    detail: {
      en: "Hot-melt applied on site so panels cut to fit a wall still get a factory-quality sealed edge.",
      ar: "لاصق حراري يُطبَّق في الموقع، فتحصل الألواح المقطوعة على مقاس الجدار على حافة مغلقة بجودة المصنع.",
    },
    specs: [
      { label: { en: "Tape width", ar: "عرض الشريط" }, value: { en: "up to 50 mm", ar: "حتى ٥٠ مم" } },
      { label: { en: "Adhesive", ar: "اللاصق" }, value: { en: "EVA hot-melt", ar: "EVA حراري" } },
    ],
  },
  {
    id: "laser-level",
    glyph: "level",
    category: "build",
    name: { en: "Rotary & Cross-Line Laser", ar: "ليزر دوّار وخطوط متقاطعة" },
    role: {
      en: "Sets a true datum for ceilings, tiling and joinery",
      ar: "يحدد منسوبًا صحيحًا للأسقف والتبليط والنجارة",
    },
    detail: {
      en: "Self-levelling to ±1.5 mm at 10 m. Nothing we hang, tile or build starts before a datum line goes round the room.",
      ar: "استواء ذاتي بدقة ±١٫٥ مم على مسافة ١٠ م. فلا نعلّق أو نبلّط أو نبني شيئًا قبل تحديد خط المنسوب حول الغرفة.",
    },
    specs: [
      { label: { en: "Accuracy", ar: "الدقة" }, value: { en: "± 1.5 mm / 10 m", ar: "± ١٫٥ مم / ١٠ م" } },
      { label: { en: "Range", ar: "المدى" }, value: { en: "30 m with detector", ar: "٣٠ م مع الكاشف" } },
    ],
  },
  {
    id: "mig-welder",
    glyph: "welder",
    category: "build",
    name: { en: "Inverter MIG/TIG Welder", ar: "ماكينة لحام إنفرتر MIG/TIG" },
    role: {
      en: "Joins gates, railings and structural steel",
      ar: "تلحم البوابات والدرابزينات والهياكل الحديدية",
    },
    detail: {
      en: "Synergic control matches wire speed to current automatically, which keeps penetration consistent on site where conditions are never ideal.",
      ar: "التحكم التآزري يطابق سرعة السلك مع التيار تلقائيًا، فيحافظ على ثبات الاختراق في الموقع حيث الظروف ليست مثالية أبدًا.",
    },
    specs: [
      { label: { en: "Output", ar: "الخرج" }, value: { en: "250 A @ 60%", ar: "٢٥٠ أمبير عند ٦٠٪" } },
      { label: { en: "Modes", ar: "الأوضاع" }, value: { en: "MIG / TIG / MMA", ar: "MIG / TIG / MMA" } },
    ],
  },
  {
    id: "plasma-cutter",
    glyph: "welder",
    category: "build",
    name: { en: "Plasma Cutter", ar: "قاطع بلازما" },
    role: {
      en: "Cuts steel plate cleanly without heat distortion",
      ar: "يقطع ألواح الحديد بنظافة دون تشوّه حراري",
    },
    detail: {
      en: "A narrow kerf and a small heat-affected zone mean less grinding afterwards and less warping on thin sections.",
      ar: "شقّ قطع ضيق ومنطقة تأثر حراري صغيرة يعنيان جلخًا أقل بعد القطع وتشوّهًا أقل في المقاطع الرفيعة.",
    },
    specs: [
      { label: { en: "Cut capacity", ar: "سعة القطع" }, value: { en: "25 mm steel", ar: "٢٥ مم حديد" } },
      { label: { en: "Duty cycle", ar: "دورة التشغيل" }, value: { en: "60% @ 60 A", ar: "٦٠٪ عند ٦٠ أمبير" } },
    ],
  },
  {
    id: "angle-grinder",
    glyph: "grinder",
    category: "build",
    name: { en: "Angle Grinder & Flap Set", ar: "جلاخة زاوية وأقراص تشطيب" },
    role: {
      en: "Dresses welds back flat before coating",
      ar: "تسوّي اللحامات قبل الدهان",
    },
    detail: {
      en: "The step most fabricators skip. A weld that is not ground back holds moisture in its undercut and rusts from inside the joint.",
      ar: "الخطوة التي يتجاوزها معظم المصنّعين. فاللحام غير المجلوخ يحبس الرطوبة في تجويفه ويصدأ من داخل الوصلة.",
    },
    specs: [
      { label: { en: "Disc", ar: "القرص" }, value: { en: "125 mm", ar: "١٢٥ مم" } },
      { label: { en: "Speed", ar: "السرعة" }, value: { en: "11 000 rpm", ar: "١١٠٠٠ لفة/د" } },
    ],
  },
  {
    id: "hot-water-extractor",
    glyph: "extractor",
    category: "surface",
    name: { en: "Hot-Water Extraction Unit", ar: "وحدة حقن وشفط بالماء الساخن" },
    role: {
      en: "Pulls soil out of carpet and upholstery",
      ar: "تسحب الأوساخ من السجاد والمفروشات",
    },
    detail: {
      en: "Injects heated solution under pressure and vacuums it straight back out. Spray-and-wipe cleaning drives soil deeper; extraction removes it from the property.",
      ar: "تحقن محلولًا ساخنًا تحت الضغط وتشفطه فورًا. فالرش والمسح يدفعان الأوساخ إلى العمق، أما الشفط فيخرجها من العقار.",
    },
    specs: [
      { label: { en: "Heat", ar: "الحرارة" }, value: { en: "80 °C", ar: "٨٠ °م" } },
      { label: { en: "Vacuum", ar: "الشفط" }, value: { en: "Dual 3-stage", ar: "مزدوج ثلاثي المراحل" } },
    ],
  },
];

export function getEquipment(id: string) {
  return equipment.find((e) => e.id === id);
}

export const equipmentCategories: { id: EquipmentCategory; label: Bi }[] = [
  { id: "surface", label: { en: "Surface & Polishing", ar: "الأسطح والتلميع" } },
  { id: "water", label: { en: "Water & Drainage", ar: "المياه والصرف" } },
  { id: "climate", label: { en: "Climate & Air", ar: "التكييف والهواء" } },
  { id: "power", label: { en: "Power & Testing", ar: "الكهرباء والاختبار" } },
  { id: "build", label: { en: "Build & Fabrication", ar: "البناء والتصنيع" } },
];
