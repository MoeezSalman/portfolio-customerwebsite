import type { Bi } from "@/i18n/config";
import { slot, type MediaSlot } from "@/lib/media";

export type PostSection = { heading: Bi; body: Bi<string[]> };

export type Post = {
  slug: string;
  title: Bi;
  excerpt: Bi;
  date: string;
  readingMinutes: number;
  category: Bi;
  service?: string;
  media: MediaSlot;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "polish-vs-coating",
    title: {
      en: "Polishing vs coating: why your floor lost its shine again",
      ar: "التلميع مقابل الطلاء: لماذا فقدت أرضيتك لمعانها من جديد",
    },
    excerpt: {
      en: "If a contractor finished your floor in a single day with no dust, you did not get a polish. Here is the difference, and how to tell which one you paid for.",
      ar: "إذا أنهى المقاول أرضيتك في يوم واحد دون غبار، فأنت لم تحصل على تلميع. إليك الفرق، وكيف تعرف أيّهما دفعت ثمنه.",
    },
    date: "2026-07-14",
    readingMinutes: 6,
    category: { en: "Surfaces", ar: "الأسطح" },
    service: "floor-polishing",
    media: slot("post-polish-vs-coating", "marble", {
      en: "Crew rolling a topical coating onto a warehouse floor",
      ar: "فريق يفرد طبقة طلاء سطحية على أرضية مستودع",
    }, "/images/post-polish-vs-coating.jpg"),
    sections: [
      {
        heading: { en: "The one-day red flag", ar: "علامة اليوم الواحد المقلقة" },
        body: {
          en: [
            "Grinding stone is slow, loud and dusty. A genuine polish on 200 square metres takes two to three days and requires a machine heavy enough that two people are needed to lift it into the property.",
            "If your floor was finished in an afternoon by one person with a light buffer and a bottle of liquid, what went down was a topical coating — a film sitting on top of the stone rather than the stone itself being refinished.",
          ],
          ar: [
            "جلي الحجر عمل بطيء وصاخب ومغبر. فالتلميع الحقيقي لمساحة ٢٠٠ متر مربع يستغرق يومين إلى ثلاثة ويتطلب معدة ثقيلة يحتاج رفعها إلى شخصين.",
            "أما إذا أُنجزت أرضيتك في فترة بعد الظهر بواسطة شخص واحد بمُلمّعة خفيفة وزجاجة سائل، فما وُضع هو طلاء سطحي — طبقة تستقر فوق الحجر بدل إعادة تشطيب الحجر نفسه.",
          ],
        },
      },
      {
        heading: { en: "Why coatings fail", ar: "لماذا تفشل الطلاءات" },
        body: {
          en: [
            "A coating is softer than the stone under it. Foot traffic wears it through in the walking lanes first, which is why a coated floor looks worst exactly where you look at it most — doorways, around the dining table, the route from the kitchen.",
            "Once it wears unevenly you cannot spot-repair it. The new film sits proud of the old, and you end up with visible patch edges. The only real fix is to strip everything and start again, which is why people end up paying twice.",
          ],
          ar: [
            "الطلاء أطرى من الحجر الذي تحته. وحركة الأقدام تستهلكه في الممرات أولًا، ولهذا تبدو الأرضية المطلية في أسوأ حالاتها تحديدًا حيث تنظر إليها أكثر — عند المداخل وحول طاولة الطعام والطريق من المطبخ.",
            "وبمجرد تآكله بشكل غير متساوٍ لا يمكن ترقيعه موضعيًا. فالطبقة الجديدة ترتفع فوق القديمة، وينتهي بك الأمر بحواف ترقيع ظاهرة. والحل الحقيقي الوحيد هو إزالة كل شيء والبدء من جديد، ولهذا يدفع الناس مرتين.",
          ],
        },
      },
      {
        heading: { en: "What a real polish is", ar: "ما هو التلميع الحقيقي" },
        body: {
          en: [
            "Mechanical refinement of the stone's own surface. Diamond abrasives progressively finer — typically 50, 100, 200, 400, 800, 1500 and 3000 grit — each one removing the scratch pattern the previous one left.",
            "By 3000 grit the surface is flat enough at a microscopic level to reflect light coherently. That reflection is the shine. Nothing has been added; material has been removed until the stone reflects properly again.",
            "Because the shine is structural rather than applied, wear does not expose a different layer underneath. It dulls slowly and evenly, and it can be re-polished in place years later.",
          ],
          ar: [
            "هو تنعيم ميكانيكي لسطح الحجر نفسه. مواد كاشطة ألماسية متدرجة النعومة — عادةً ٥٠ و١٠٠ و٢٠٠ و٤٠٠ و٨٠٠ و١٥٠٠ و٣٠٠٠ حبيبة — كل مرحلة تزيل نمط الخدوش الذي تركته سابقتها.",
            "وعند ٣٠٠٠ حبيبة يصبح السطح مستويًا على المستوى المجهري بما يكفي ليعكس الضوء بانتظام. وهذا الانعكاس هو اللمعان. لم يُضَف شيء؛ بل أُزيلت مادة حتى عاد الحجر يعكس الضوء كما ينبغي.",
            "ولأن اللمعان بنيوي لا مُضاف، فإن التآكل لا يكشف طبقة مختلفة تحته. بل يبهت ببطء وبانتظام، ويمكن إعادة تلميعه في مكانه بعد سنوات.",
          ],
        },
      },
      {
        heading: { en: "How to check what you have", ar: "كيف تتحقق مما لديك" },
        body: {
          en: [
            "Find an out-of-the-way corner and scratch firmly with a coin. On a polished floor you will mark the stone and it will look like stone. On a coated floor you will peel up a translucent flake.",
            "The second test is the traffic lane: stand at a doorway at night with a torch held low. Coatings show a distinct dull path; a polished floor reflects consistently across the whole room.",
          ],
          ar: [
            "اختر زاوية بعيدة عن الأنظار واخدشها بقوة بقطعة نقدية. على الأرضية الملمّعة ستترك أثرًا في الحجر وسيبدو كالحجر. أما على الأرضية المطلية فستقشّر رقاقة شبه شفافة.",
            "والاختبار الثاني هو ممر الحركة: قف عند المدخل ليلًا وأمسك مصباحًا قريبًا من الأرض. الطلاءات تُظهر مسارًا باهتًا واضحًا، أما الأرضية الملمّعة فتعكس الضوء بانتظام في الغرفة كلها.",
          ],
        },
      },
    ],
  },
  {
    slug: "riyadh-ac-summer-checklist",
    title: {
      en: "The Riyadh AC checklist: what to do before May",
      ar: "قائمة تجهيز التكييف في الرياض: ما يجب فعله قبل مايو",
    },
    excerpt: {
      en: "Air conditioners fail on the hottest day of the year because that is when they work hardest. Six checks that prevent most of those failures.",
      ar: "تتعطل المكيفات في أشد أيام السنة حرارة لأنها حينها تعمل بأقصى طاقتها. ست فحوصات تمنع معظم هذه الأعطال.",
    },
    date: "2026-04-02",
    readingMinutes: 5,
    category: { en: "Climate", ar: "التكييف" },
    service: "ac-maintenance",
    media: slot("post-ac-checklist", "spark", {
      en: "Outdoor condenser unit in the rain",
      ar: "وحدة تكثيف خارجية تحت المطر",
    }, "/images/post-ac-checklist.jpg"),
    sections: [
      {
        heading: { en: "Wash the condenser coil", ar: "اغسل ملف التكثيف" },
        body: {
          en: [
            "This is the single highest-value thing you can do. A coil packed with Riyadh dust cannot reject heat, so the compressor runs longer and hotter to achieve the same cooling — drawing more current and ageing faster.",
            "We routinely see a 20 to 30 percent drop in running amps from a coil wash alone. That is a direct reduction in your electricity bill and a measurable extension of the compressor's life.",
          ],
          ar: [
            "هذا أعلى الإجراءات قيمة على الإطلاق. فالملف المحشو بغبار الرياض لا يستطيع طرد الحرارة، فيعمل الكمبروسر لفترة أطول وبحرارة أعلى لتحقيق التبريد نفسه — ساحبًا تيارًا أكبر ومتقادمًا أسرع.",
            "ونلاحظ بشكل متكرر انخفاضًا بنسبة ٢٠ إلى ٣٠ بالمئة في شدة التيار من غسيل الملف وحده. وهذا خفض مباشر لفاتورة الكهرباء وإطالة ملموسة لعمر الكمبروسر.",
          ],
        },
      },
      {
        heading: { en: "Clear the condensate drain", ar: "سلّك خط تصريف التكثيف" },
        body: {
          en: [
            "A blocked drain is the most common cause of water staining a ceiling in June. Algae and dust form a plug over the winter while the system sits idle.",
            "Flush it before the season rather than discovering the blockage via a damp patch above your majlis.",
          ],
          ar: [
            "الخط المسدود هو السبب الأكثر شيوعًا لبقع الماء على السقف في يونيو. فالطحالب والغبار تشكّل سدادة خلال الشتاء بينما النظام متوقف.",
            "اشطفه قبل الموسم بدل اكتشاف الانسداد عبر بقعة رطبة فوق مجلسك.",
          ],
        },
      },
      {
        heading: { en: "Do not just top up the gas", ar: "لا تكتفِ بإضافة الغاز" },
        body: {
          en: [
            "Refrigerant is not consumed. It circulates in a sealed loop. If the charge is low, there is a leak — and adding more without finding it means paying for gas twice a year indefinitely.",
            "Insist on a leak test before any recharge. A technician who tops up without testing is selling you a subscription, not a repair.",
          ],
          ar: [
            "الفريون لا يُستهلك. بل يدور في حلقة مغلقة. فإن كانت الشحنة ناقصة فهناك تسرب — وإضافة المزيد دون كشفه تعني دفع ثمن الغاز مرتين سنويًا إلى ما لا نهاية.",
            "أصرّ على اختبار التسرب قبل أي إعادة شحن. فالفني الذي يضيف الغاز دون اختبار يبيعك اشتراكًا لا إصلاحًا.",
          ],
        },
      },
      {
        heading: { en: "Check the capacitor", ar: "افحص المكثف" },
        body: {
          en: [
            "A weak start capacitor is cheap to replace and catastrophic to ignore. It makes the compressor struggle to start, drawing locked-rotor current for longer than it should on every cycle.",
            "Most mid-season compressor failures we attend trace back to a capacitor that measured out of tolerance months earlier.",
          ],
          ar: [
            "المكثف الضعيف رخيص الاستبدال وكارثي التجاهل. فهو يجعل الكمبروسر يكافح للإقلاع، ساحبًا تيار الدوّار المقفل لفترة أطول مما ينبغي في كل دورة.",
            "ومعظم أعطال الكمبروسرات في منتصف الموسم التي نعالجها تعود إلى مكثف كانت قراءته خارج الحدود المسموحة قبل أشهر.",
          ],
        },
      },
    ],
  },
  {
    slug: "hidden-leak-signs",
    title: {
      en: "Seven signs of a hidden water leak in a Riyadh villa",
      ar: "سبع علامات على تسرب مياه خفي في فيلا بالرياض",
    },
    excerpt: {
      en: "By the time a stain appears, the leak has usually been running for weeks. These are the earlier signals worth acting on.",
      ar: "عند ظهور البقعة يكون التسرب قد استمر عادةً لأسابيع. وهذه هي الإشارات المبكرة التي تستحق التحرك.",
    },
    date: "2026-05-21",
    readingMinutes: 5,
    category: { en: "Water", ar: "المياه" },
    service: "leak-detection",
    media: slot("post-leak-signs", "water", {
      en: "Water spilling from an open hose coupling across wet ground",
      ar: "ماء يتدفق من وصلة خرطوم مفتوحة على أرض مبللة",
    }, "/images/post-leak-signs.jpg"),
    sections: [
      {
        heading: { en: "The meter test", ar: "اختبار العداد" },
        body: {
          en: [
            "Close every tap and appliance, then photograph the water meter. Wait two hours without using water and photograph it again. Any movement at all means water is leaving the system somewhere.",
            "This one test costs nothing and settles the question definitively before you call anyone.",
          ],
          ar: [
            "أغلق كل الصنابير والأجهزة، ثم صوّر عداد المياه. انتظر ساعتين دون استخدام الماء ثم صوّره مجددًا. وأي حركة مهما كانت تعني أن الماء يغادر النظام في مكان ما.",
            "هذا الاختبار لا يكلف شيئًا ويحسم المسألة نهائيًا قبل أن تتصل بأحد.",
          ],
        },
      },
      {
        heading: { en: "A warm patch on the floor", ar: "بقعة دافئة في الأرضية" },
        body: {
          en: [
            "Walk the floor barefoot early in the morning. A localised warm area usually means a hot water line is leaking beneath the screed.",
            "Hot water leaks do far more damage than cold ones because the heat accelerates degradation of the surrounding screed and adhesive.",
          ],
          ar: [
            "امشِ على الأرضية حافي القدمين في الصباح الباكر. فالمنطقة الدافئة الموضعية تعني عادةً تسرب خط ماء ساخن أسفل الصبّة.",
            "وتسربات الماء الساخن تسبب ضررًا أكبر بكثير من الباردة لأن الحرارة تسرّع تدهور الصبّة واللاصق المحيط.",
          ],
        },
      },
      {
        heading: { en: "Pressure that drops when nothing runs", ar: "ضغط ينخفض دون استخدام" },
        body: {
          en: [
            "If your shower pressure is noticeably weaker than it was a year ago and no new fixtures were added, either scale has narrowed the pipe or water is escaping before it reaches the outlet.",
            "Both are worth diagnosing. Scale is progressive and eventually blocks completely.",
          ],
          ar: [
            "إذا كان ضغط الدش أضعف بشكل ملحوظ مما كان قبل عام ولم تُضَف أطقم جديدة، فإما أن الترسبات ضيّقت الماسورة أو أن الماء يتسرب قبل وصوله للمخرج.",
            "وكلاهما يستحق التشخيص. فالترسبات تتفاقم تدريجيًا وتنتهي بانسداد كامل.",
          ],
        },
      },
      {
        heading: { en: "Where the damage shows is not where the leak is", ar: "موضع الضرر ليس موضع التسرب" },
        body: {
          en: [
            "This is the single most expensive misunderstanding in leak repair. Water follows the path of least resistance along screed layers and pipe runs, sometimes for many metres, before it surfaces.",
            "Excavating at the stain is how people end up with eleven square metres of broken terrace and an unresolved leak. Survey first, dig once.",
          ],
          ar: [
            "هذا أغلى سوء فهم في إصلاح التسربات. فالماء يسلك طريق المقاومة الأقل عبر طبقات الصبّة ومسارات المواسير، أحيانًا لعدة أمتار، قبل أن يظهر.",
            "والحفر عند البقعة هو ما ينتهي بالناس إلى أحد عشر مترًا مربعًا من التراس المكسور وتسرب لم يُحَل. امسح أولًا، واحفر مرة واحدة.",
          ],
        },
      },
    ],
  },
  {
    slug: "choosing-maintenance-contract",
    title: {
      en: "Is an annual maintenance contract actually worth it?",
      ar: "هل يستحق عقد الصيانة السنوي تكلفته فعلًا؟",
    },
    excerpt: {
      en: "An honest look at when a contract saves money, when it does not, and the clauses worth reading before you sign anything.",
      ar: "نظرة صادقة على متى يوفّر العقد المال، ومتى لا يفعل، والبنود التي تستحق القراءة قبل التوقيع.",
    },
    date: "2026-02-18",
    readingMinutes: 7,
    category: { en: "Facilities", ar: "المرافق" },
    service: "annual-contracts",
    media: slot("post-amc", "schematic", {
      en: "Maintenance technician in a hard hat beside a wall-mounted meter box",
      ar: "فني صيانة بخوذة بجانب صندوق عداد مثبت على الجدار",
    }, "/images/post-amc.jpg"),
    sections: [
      {
        heading: { en: "When it does not pay", ar: "متى لا يكون مجديًا" },
        body: {
          en: [
            "A small apartment with two split units and modern plumbing probably does not need a contract. Two AC services a year booked as they come due will cost you less than any plan.",
            "We will tell you this if you call us. Selling a contract to someone who does not need one produces a customer who cancels in month seven.",
          ],
          ar: [
            "الشقة الصغيرة ذات وحدتي تكييف وسباكة حديثة على الأرجح لا تحتاج عقدًا. فصيانتان للتكييف سنويًا تُحجزان عند الحاجة ستكلفانك أقل من أي باقة.",
            "وسنقول لك هذا إن اتصلت بنا. فبيع عقد لمن لا يحتاجه ينتج عميلًا يلغي في الشهر السابع.",
          ],
        },
      },
      {
        heading: { en: "When it clearly does", ar: "متى يكون مجديًا بوضوح" },
        body: {
          en: [
            "Large villas, anything with more than six AC units, properties over ten years old, and any portfolio you are renting out. In all four cases the value is not the discount — it is that failures get caught during a scheduled visit rather than at 11pm in August.",
            "For landlords specifically, the asset register and quarterly condition report are usually worth more than the labour included, because they make the property's running cost forecastable.",
          ],
          ar: [
            "الفلل الكبيرة، وأي عقار يضم أكثر من ست وحدات تكييف، والعقارات التي تجاوز عمرها عشر سنوات، وأي محفظة تؤجرها. وفي الحالات الأربع لا تكمن القيمة في الخصم — بل في أن الأعطال تُكتشف خلال زيارة مجدولة لا في الحادية عشرة ليلًا في أغسطس.",
            "وبالنسبة للملّاك تحديدًا، فإن سجل الأصول وتقرير الحالة الربع سنوي يساويان عادةً أكثر من قيمة العمالة المشمولة، لأنهما يجعلان تكلفة تشغيل العقار قابلة للتنبؤ.",
          ],
        },
      },
      {
        heading: { en: "Read the exclusions first", ar: "اقرأ الاستثناءات أولًا" },
        body: {
          en: [
            "Every contract in this market excludes major parts. What varies is the markup charged on them and whether labour to fit them is included.",
            "Ask three questions before signing: what is the response time in writing, what is the markup on parts, and can the contract be transferred if you sell. Vague answers to any of those tell you what you need to know.",
          ],
          ar: [
            "كل عقد في هذا السوق يستثني القطع الكبرى. وما يختلف هو هامش الربح المفروض عليها وما إذا كانت أجرة التركيب مشمولة.",
            "اسأل ثلاثة أسئلة قبل التوقيع: ما زمن الاستجابة كتابيًا، وما هامش الربح على القطع، وهل العقد قابل للنقل عند البيع. والإجابات الغامضة على أي منها تخبرك بما تحتاج معرفته.",
          ],
        },
      },
    ],
  },
  {
    slug: "marble-care-mistakes",
    title: {
      en: "Five cleaning habits that are destroying your marble",
      ar: "خمس عادات تنظيف تدمّر رخامك",
    },
    excerpt: {
      en: "Most marble damage we repair was not caused by accidents. It was caused by regular cleaning with the wrong product.",
      ar: "معظم أضرار الرخام التي نصلحها لم تسببها الحوادث، بل التنظيف المنتظم بمنتج خاطئ.",
    },
    date: "2026-06-09",
    readingMinutes: 4,
    category: { en: "Surfaces", ar: "الأسطح" },
    service: "marble-restoration",
    media: slot("post-marble-care", "marble", {
      en: "Dark stone surface showing white etch marks and hairline cracks",
      ar: "سطح حجري داكن تظهر عليه آثار تآكل بيضاء وشقوق شعرية",
    }, "/images/post-marble-care.jpg"),
    sections: [
      {
        heading: { en: "Anything acidic", ar: "أي شيء حمضي" },
        body: {
          en: [
            "Marble is calcium carbonate. Vinegar, lemon, descaler, and most bathroom cleaners chemically dissolve the surface on contact. The resulting dull mark is not a stain — it is a microscopic crater, and no amount of cleaning will lift it.",
            "If a product says it removes limescale, it will etch marble. Limescale and marble are chemically similar enough that anything targeting one attacks the other.",
          ],
          ar: [
            "الرخام كربونات كالسيوم. والخل والليمون ومزيلات الترسبات ومعظم منظفات الحمامات تذيب السطح كيميائيًا فور الملامسة. والعلامة الباهتة الناتجة ليست بقعة — بل حفرة مجهرية، ولن يزيلها أي قدر من التنظيف.",
            "وإذا كان المنتج يقول إنه يزيل الترسبات الكلسية، فإنه سيتلف الرخام. فالترسبات الكلسية والرخام متشابهان كيميائيًا لدرجة أن ما يستهدف أحدهما يهاجم الآخر.",
          ],
        },
      },
      {
        heading: { en: "Steam on polished stone", ar: "البخار على الحجر الملمّع" },
        body: {
          en: [
            "Steam cleaners are excellent on grout and terrible on polished marble. Repeated thermal shock opens micro-fissures in the surface and gradually hazes the polish.",
            "Use steam on the grout lines if you must, but keep it off the stone faces.",
          ],
          ar: [
            "منظفات البخار ممتازة على الفواصل وسيئة جدًا على الرخام الملمّع. فالصدمة الحرارية المتكررة تفتح شقوقًا دقيقة في السطح وتُضبّب اللمعان تدريجيًا.",
            "استخدم البخار على خطوط الفواصل إن اضطررت، لكن أبقِه بعيدًا عن وجوه الحجر.",
          ],
        },
      },
      {
        heading: { en: "Dry dust and grit underfoot", ar: "الغبار والحصى الجاف تحت الأقدام" },
        body: {
          en: [
            "In Riyadh this is the quiet killer. Fine sand tracked in from outside acts as an abrasive under every footstep, slowly sanding the polish off the traffic lanes.",
            "A doormat at every external door and dry dust-mopping twice a week does more for marble longevity than any sealer.",
          ],
          ar: [
            "في الرياض هذا هو القاتل الصامت. فالرمل الناعم القادم من الخارج يعمل كمادة كاشطة تحت كل خطوة، ويصنفر اللمعان تدريجيًا عن ممرات الحركة.",
            "وسجادة عند كل باب خارجي مع مسح جاف للغبار مرتين أسبوعيًا يفعلان لعمر الرخام أكثر من أي عازل.",
          ],
        },
      },
      {
        heading: { en: "What to use instead", ar: "ما الذي يُستخدم بدلًا منها" },
        body: {
          en: [
            "A pH-neutral stone cleaner and a microfibre mop. That is the entire list. Water alone is fine for most days.",
            "If you want protection, an impregnating sealer applied every two to three years sits inside the stone rather than on it, and does not change the appearance.",
          ],
          ar: [
            "منظف حجر متعادل الحموضة وممسحة ميكروفايبر. هذه هي القائمة كاملة. والماء وحده يكفي في معظم الأيام.",
            "وإن أردت حماية، فالعازل النافذ الذي يُطبَّق كل عامين إلى ثلاثة يستقر داخل الحجر لا فوقه، ولا يغيّر مظهره.",
          ],
        },
      },
    ],
  },
  {
    slug: "renovation-sequencing",
    title: {
      en: "Why renovations run late: it is sequencing, not craft",
      ar: "لماذا تتأخر أعمال الترميم: السبب التسلسل لا الحرفة",
    },
    excerpt: {
      en: "The trades are rarely the problem. The order they arrive in almost always is. How a programme is built and why it slips.",
      ar: "نادرًا ما تكون المهن هي المشكلة. بل ترتيب وصولها هو المشكلة دائمًا تقريبًا. كيف يُبنى البرنامج الزمني ولماذا ينزلق.",
    },
    date: "2026-03-05",
    readingMinutes: 6,
    category: { en: "Renovation", ar: "الترميم" },
    service: "renovation",
    media: slot("post-sequencing", "schematic", {
      en: "Two tradesmen at a mitre saw inside a house mid-renovation",
      ar: "عاملان عند منشار زاوية داخل منزل قيد الترميم",
    }, "/images/post-sequencing.jpg"),
    sections: [
      {
        heading: { en: "The dependency nobody plans for", ar: "الاعتماد الذي لا يخطط له أحد" },
        body: {
          en: [
            "Tiling cannot start until plumbing first fix is done and tested. Painting cannot finish until the electrician has chased and made good. Flooring should be one of the last things in, not one of the first.",
            "Each of those is obvious in isolation. Together, across eight trades, they form a chain where a two-day slip in week one becomes a two-week slip by week five.",
          ],
          ar: [
            "لا يمكن بدء التبليط قبل إنجاز واختبار التمديد الصحي الأولي. ولا يمكن إنهاء الدهان قبل أن يحفر الكهربائي ويعالج. والأرضيات يجب أن تكون من آخر الأعمال لا أولها.",
            "كل بند من هذه بديهي بمفرده. لكنها مجتمعة عبر ثماني مهن تشكّل سلسلة يتحول فيها انزلاق يومين في الأسبوع الأول إلى انزلاق أسبوعين بحلول الأسبوع الخامس.",
          ],
        },
      },
      {
        heading: { en: "Why multiple contractors makes it worse", ar: "لماذا يفاقم تعدد المقاولين المشكلة" },
        body: {
          en: [
            "When each trade is a separate contract, nobody owns the sequence. The tiler is not late by his own reckoning — he arrived when he was booked. The plumber overran because he found a problem. Both are true, and the programme still slipped.",
            "With separate contracts, the coordination burden lands on the homeowner, who is the one person without the scheduling experience to carry it.",
          ],
          ar: [
            "عندما تكون كل مهنة عقدًا منفصلًا، لا أحد يملك التسلسل. فالمبلّط ليس متأخرًا بحسابه — لقد وصل في موعده المحجوز. والسباك تجاوز المدة لأنه واجه مشكلة. وكلاهما صادق، ومع ذلك انزلق البرنامج.",
            "ومع العقود المنفصلة يقع عبء التنسيق على مالك المنزل، وهو الشخص الوحيد الذي لا يملك خبرة الجدولة لتحمّله.",
          ],
        },
      },
      {
        heading: { en: "What a real programme looks like", ar: "كيف يبدو البرنامج الحقيقي" },
        body: {
          en: [
            "Dated, per-trade, built backwards from the handover date, with float allocated to the tasks most likely to overrun rather than spread evenly.",
            "It should be updated weekly and shared. If your contractor cannot show you a programme in writing, there is no programme — there is a rough intention.",
          ],
          ar: [
            "مؤرّخ، ومفصّل لكل مهنة، ومبني عكسيًا من تاريخ التسليم، مع تخصيص وقت احتياطي للمهام الأكثر عرضة للتجاوز بدل توزيعه بالتساوي.",
            "ويجب تحديثه أسبوعيًا ومشاركته. فإن لم يستطع مقاولك أن يريك برنامجًا مكتوبًا، فلا يوجد برنامج — بل نيّة تقريبية.",
          ],
        },
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const postSlugs = posts.map((p) => p.slug);
