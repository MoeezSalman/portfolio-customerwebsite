import type { Bi } from "@/i18n/config";
import { photo, type MediaSlot } from "@/lib/media";

/**
 * Short, picture-led tips. Every section has a photo and two or three plain
 * sentences — nothing longer.
 */
export type PostSection = { heading: Bi; body: Bi; media: MediaSlot };

export type Post = {
  slug: string;
  title: Bi;
  excerpt: Bi;
  date: string;
  readingMinutes: number;
  service?: string;
  media: MediaSlot;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "how-marble-polishing-works",
    title: { en: "How marble polishing works, in pictures", ar: "كيف يتم جلي الرخام، بالصور" },
    excerpt: {
      en: "Three steps take a dull floor to a mirror. Here is what each one looks like.",
      ar: "ثلاث خطوات تحوّل أرضية باهتة إلى مرآة. هكذا تبدو كل خطوة.",
    },
    date: "2026-08-20",
    readingMinutes: 2,
    service: "marble-polishing",
    media: photo("marble-star", {
      en: "A polished marble floor with a star pattern",
      ar: "أرضية رخام مصقولة بنقش نجمة",
    }),
    sections: [
      {
        heading: { en: "1. The floor before", ar: "١. الأرضية قبل" },
        body: {
          en: "Marble goes dull because the top layer gets tiny scratches. Light no longer bounces straight back, so it looks grey.",
          ar: "الرخام يبهت لأن الطبقة العليا تُصاب بخدوش دقيقة. فلا ينعكس الضوء بشكل مستقيم ويبدو رماديًا.",
        },
        media: photo("marble-stained", { en: "Dull, stained marble", ar: "رخام باهت ومبقّع" }),
      },
      {
        heading: { en: "2. Grinding", ar: "٢. الجلي" },
        body: {
          en: "A heavy machine with diamond discs cuts that layer away. We use water, so there is no dust.",
          ar: "معدة ثقيلة بأقراص ألماس تزيل تلك الطبقة. نستخدم الماء فلا يكون هناك غبار.",
        },
        media: photo("machine-grinder", { en: "A floor grinder at work", ar: "ماكينة جلي أثناء العمل" }),
      },
      {
        heading: { en: "3. Polishing", ar: "٣. التلميع" },
        body: {
          en: "Finer and finer discs make the stone smooth. A final polish with powder gives the deep shine.",
          ar: "أقراص أنعم فأنعم تجعل الحجر ناعمًا. وتلميع أخير بالبودرة يعطي اللمعان العميق.",
        },
        media: photo("salon-marble", { en: "The mirror-shine result", ar: "النتيجة بلمعان المرآة" }),
      },
    ],
  },
  {
    slug: "polish-or-coating",
    title: { en: "Polish or coating? The simple answer", ar: "جلي أم طلاء؟ الجواب البسيط" },
    excerpt: {
      en: "Some companies paint a shiny layer on top. It peels. Here is why real polishing is better.",
      ar: "بعض الشركات تطلي طبقة لامعة فوق الأرضية. وتتقشر. إليك لماذا الجلي الحقيقي أفضل.",
    },
    date: "2026-07-10",
    readingMinutes: 2,
    service: "crystallisation",
    media: photo("marble-black-white", {
      en: "Dark polished marble with a wet-look shine",
      ar: "رخام داكن مصقول بلمعان كالمبلول",
    }),
    sections: [
      {
        heading: { en: "A coating sits on top", ar: "الطلاء يجلس فوق السطح" },
        body: {
          en: "It looks good for a few months. Then shoes scratch it, water gets under it, and it peels in patches.",
          ar: "يبدو جيدًا لبضعة أشهر. ثم تخدشه الأحذية ويتسرب الماء تحته ويتقشر على شكل بقع.",
        },
        media: photo("tiles-worn", { en: "A worn floor with peeling patches", ar: "أرضية متآكلة ببقع متقشرة" }),
      },
      {
        heading: { en: "Polishing is the stone itself", ar: "الجلي هو الحجر نفسه" },
        body: {
          en: "We do not add anything. We make the real stone flat and smooth again. It cannot peel because there is nothing to peel.",
          ar: "لا نضيف شيئًا. نعيد الحجر الحقيقي مستويًا وناعمًا. لا يمكن أن يتقشر لأنه لا يوجد ما يتقشر.",
        },
        media: photo("marble-sunlight", { en: "Real polished marble in sunlight", ar: "رخام مصقول حقيقي تحت ضوء الشمس" }),
      },
      {
        heading: { en: "Crystallisation is the top-up", ar: "الكريستال هو التجديد" },
        body: {
          en: "Once the floor is polished, a quick crystallisation every year keeps it bright. Fast and cheap.",
          ar: "بعد جلي الأرضية، كريستال سريع كل سنة يبقيها لامعة. سريع ورخيص.",
        },
        media: photo("lobby-columns", { en: "A crystallised lobby floor", ar: "أرضية بهو مكرستلة" }),
      },
    ],
  },
  {
    slug: "keep-your-floor-shiny",
    title: { en: "5 easy ways to keep your floor shiny", ar: "٥ طرق سهلة للحفاظ على لمعان أرضيتك" },
    excerpt: {
      en: "After we polish, a few small habits keep the shine for years.",
      ar: "بعد الجلي، بضع عادات صغيرة تحافظ على اللمعان لسنوات.",
    },
    date: "2026-06-02",
    readingMinutes: 2,
    service: "shine-maintenance",
    media: photo("villa-living", {
      en: "A bright living room with a glossy marble floor",
      ar: "غرفة معيشة مشرقة بأرضية رخام لامعة",
    }),
    sections: [
      {
        heading: { en: "Use a soft mop and plain water", ar: "استخدم ممسحة ناعمة وماءً فقط" },
        body: {
          en: "Strong cleaners and bleach eat the shine. Warm water is enough for daily cleaning.",
          ar: "المنظفات القوية والكلور تأكل اللمعان. الماء الدافئ يكفي للتنظيف اليومي.",
        },
        media: photo("marble-white-texture", { en: "Clean white marble", ar: "رخام أبيض نظيف" }),
      },
      {
        heading: { en: "Wipe spills quickly", ar: "امسح الانسكابات بسرعة" },
        body: {
          en: "Juice, coffee and lemon leave dull marks if they sit. Wipe them the same hour.",
          ar: "العصير والقهوة والليمون تترك آثارًا باهتة إذا بقيت. امسحها في نفس الساعة.",
        },
        media: photo("kitchen-marble", { en: "A marble kitchen island", ar: "جزيرة مطبخ رخامية" }),
      },
      {
        heading: { en: "Put felt under furniture", ar: "ضع لبّادًا تحت الأثاث" },
        body: {
          en: "Chairs and tables scratch when they are dragged. Small felt pads stop it completely.",
          ar: "الكراسي والطاولات تخدش عند سحبها. قطع لبّاد صغيرة تمنع ذلك تمامًا.",
        },
        media: photo("villa-lounge", { en: "A lounge with furniture on a polished floor", ar: "صالة بأثاث على أرضية مصقولة" }),
      },
      {
        heading: { en: "Mats at the doors", ar: "سجاد عند الأبواب" },
        body: {
          en: "Sand from outside is the number one cause of scratches in Riyadh. A mat at every door catches it.",
          ar: "رمل الخارج هو السبب الأول للخدوش في الرياض. سجادة عند كل باب تحجزه.",
        },
        media: photo("villa-entrance", { en: "A villa entrance hall", ar: "مدخل فيلا" }),
      },
      {
        heading: { en: "A quick buff once a year", ar: "تلميع سريع مرة في السنة" },
        body: {
          en: "One short visit a year keeps the floor at full shine. Ask about our shine maintenance plan.",
          ar: "زيارة قصيرة واحدة في السنة تبقي الأرضية بكامل لمعانها. اسأل عن خطة صيانة اللمعان.",
        },
        media: photo("machine-rideon", { en: "Our floor machine", ar: "ماكينة الأرضيات لدينا" }),
      },
    ],
  },
  {
    slug: "before-you-hire",
    title: { en: "4 things to check before you hire a polishing company", ar: "٤ أمور تحقق منها قبل التعاقد مع شركة جلي" },
    excerpt: {
      en: "A shiny floor for one week is not the same as a shiny floor for five years.",
      ar: "أرضية لامعة لأسبوع ليست كأرضية لامعة لخمس سنوات.",
    },
    date: "2026-05-14",
    readingMinutes: 2,
    media: photo("team-at-work", {
      en: "A polishing team working on a large shiny floor",
      ar: "فريق جلي يعمل على أرضية كبيرة لامعة",
    }),
    sections: [
      {
        heading: { en: "Do they have real machines?", ar: "هل لديهم معدات حقيقية؟" },
        body: {
          en: "Ask to see the grinder. A small hand polisher cannot fix a dull floor — it only hides it for a while.",
          ar: "اطلب رؤية ماكينة الجلي. المِلمّع اليدوي الصغير لا يصلح أرضية باهتة — بل يخفيها لفترة فقط.",
        },
        media: photo("machine-grinder", { en: "A real floor grinding machine", ar: "ماكينة جلي أرضيات حقيقية" }),
      },
      {
        heading: { en: "Do they use water?", ar: "هل يستخدمون الماء؟" },
        body: {
          en: "Wet grinding means no dust in your house. Dry grinding fills every room with fine powder.",
          ar: "الجلي الرطب يعني لا غبار في منزلك. الجلي الجاف يملأ كل غرفة ببودرة دقيقة.",
        },
        media: photo("machine-vacuum", { en: "A wet and dry vacuum", ar: "شفاط ماء وغبار" }),
      },
      {
        heading: { en: "Is the price fixed?", ar: "هل السعر ثابت؟" },
        body: {
          en: "Get the price in writing before work starts. It should not change on the day.",
          ar: "احصل على السعر كتابيًا قبل بدء العمل. ولا ينبغي أن يتغير يوم التنفيذ.",
        },
        media: photo("man-thobe", { en: "A client on a polished courtyard", ar: "عميل على فناء مصقول" }),
      },
      {
        heading: { en: "Is there a guarantee?", ar: "هل هناك ضمان؟" },
        body: {
          en: "A company that trusts its work gives a guarantee. Ours is 90 days on the shine.",
          ar: "الشركة الواثقة من عملها تقدم ضمانًا. ضماننا ٩٠ يومًا على اللمعان.",
        },
        media: photo("lobby-grand", { en: "A grand lobby with shining marble", ar: "بهو فخم برخام لامع" }),
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const postSlugs = posts.map((p) => p.slug);
