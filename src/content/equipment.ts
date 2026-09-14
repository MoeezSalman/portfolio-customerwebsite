import type { Bi } from "@/i18n/config";
import { photo, type MediaSlot } from "@/lib/media";

/**
 * The machines that do the shining. One big photo each, one line that says
 * what it does in plain words, and one fact worth knowing.
 */
export type Equipment = {
  id: string;
  name: Bi;
  /** What it does, in one plain sentence. */
  does: Bi;
  /** One short fact. */
  fact: Bi;
  media: MediaSlot;
};

export const equipment: Equipment[] = [
  {
    id: "floor-grinder",
    name: { en: "Floor grinder", ar: "ماكينة الجلي" },
    does: {
      en: "Cuts away the old, scratched layer so the fresh stone can shine.",
      ar: "تزيل الطبقة القديمة المخدوشة ليلمع الحجر النقي تحتها.",
    },
    fact: { en: "Diamond discs from 50 to 3000 grit", ar: "أقراص ألماس من ٥٠ إلى ٣٠٠٠ حبيبة" },
    media: photo("machine-grinder", {
      en: "A floor grinding machine working on a stone floor",
      ar: "ماكينة جلي أرضيات تعمل على أرضية حجرية",
    }, "metal"),
  },
  {
    id: "polisher",
    name: { en: "Floor polisher", ar: "ماكينة التلميع" },
    does: {
      en: "Spins soft pads at high speed to bring out the mirror shine.",
      ar: "تدير وسائد ناعمة بسرعة عالية لإظهار لمعان المرآة.",
    },
    fact: { en: "Up to 1,500 turns per minute", ar: "حتى ١٥٠٠ دورة في الدقيقة" },
    media: photo("machine-operator", {
      en: "A technician guiding a floor polisher by its handles",
      ar: "فني يوجّه ماكينة تلميع من مقابضها",
    }, "metal"),
  },
  {
    id: "ride-on-scrubber",
    name: { en: "Ride-on floor machine", ar: "ماكينة الأرضيات الراكبة" },
    does: {
      en: "For big floors — mosques, malls, warehouses. Washes, buffs and dries in one pass.",
      ar: "للأرضيات الكبيرة — المساجد والمولات والمستودعات. تغسل وتلمّع وتجفف في مرور واحد.",
    },
    fact: { en: "Up to 3,000 m² in one hour", ar: "حتى ٣٠٠٠ م² في ساعة واحدة" },
    media: photo("machine-rideon", {
      en: "A ride-on floor machine with front brushes",
      ar: "ماكينة أرضيات راكبة بفرش أمامية",
    }, "metal"),
  },
  {
    id: "hand-grinder",
    name: { en: "Hand grinder", ar: "الجلاخة اليدوية" },
    does: {
      en: "Reaches where big machines cannot: stairs, corners, edges and counters.",
      ar: "تصل حيث لا تصل المعدات الكبيرة: الدرج والزوايا والحواف والأسطح.",
    },
    fact: { en: "Wet grinding, so no dust", ar: "جلي رطب، فلا غبار" },
    media: photo("machine-hand-grinder", {
      en: "A technician using a hand grinder on a stone floor",
      ar: "فني يستخدم جلاخة يدوية على أرضية حجرية",
    }, "metal"),
  },
  {
    id: "vacuum",
    name: { en: "Wet & dry vacuum", ar: "شفاط الماء والغبار" },
    does: {
      en: "Sucks up all the water and dust while we work. Your home stays clean.",
      ar: "يشفط كل الماء والغبار أثناء العمل. يبقى منزلك نظيفًا.",
    },
    fact: { en: "HEPA filter catches fine dust", ar: "فلتر HEPA يحجز الغبار الدقيق" },
    media: photo("machine-vacuum", {
      en: "A yellow industrial wet and dry vacuum on a tiled floor",
      ar: "شفاط صناعي أصفر للماء والغبار على أرضية مبلطة",
    }, "metal"),
  },
  {
    id: "gloss-meter",
    name: { en: "Gloss meter", ar: "جهاز قياس اللمعان" },
    does: {
      en: "A small device that measures how shiny the floor is — so we can prove it.",
      ar: "جهاز صغير يقيس درجة لمعان الأرضية — لنثبت النتيجة لك.",
    },
    fact: { en: "We aim for 80+ gloss on marble", ar: "نستهدف لمعان ٨٠+ على الرخام" },
    media: photo("marble-checker", {
      en: "A polished checkered marble floor reflecting the ceiling lights",
      ar: "أرضية رخام شطرنجي مصقولة تعكس أضواء السقف",
    }),
  },
];

export function getEquipment(id: string) {
  return equipment.find((e) => e.id === id);
}
