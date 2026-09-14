import type { Bi } from "@/i18n/config";
import { photo, type MediaSlot } from "@/lib/media";

export type Testimonial = {
  id: string;
  quote: Bi;
  name: Bi;
  role: Bi;
  service: string;
  rating: number;
  /** The floor they are talking about. */
  media: MediaSlot;
};

export const testimonials: Testimonial[] = [
  {
    id: "abu-fahad",
    quote: {
      en: "The floor looks like the day we moved in. No dust, done in one day.",
      ar: "الأرضية صارت مثل يوم سكنّا. بدون غبار، وانتهوا في يوم واحد.",
    },
    name: { en: "Abu Fahad", ar: "أبو فهد" },
    role: { en: "Villa owner, Al Yasmin", ar: "صاحب فيلا، الياسمين" },
    service: "marble-polishing",
    rating: 5,
    media: photo("villa-lounge", {
      en: "The polished lounge floor in a family villa",
      ar: "أرضية الصالة المصقولة في فيلا عائلية",
    }),
  },
  {
    id: "imam-diriyah",
    quote: {
      en: "They work at night and the hall shines every morning. Very respectful team.",
      ar: "يعملون ليلًا وتلمع القاعة كل صباح. فريق محترم جدًا.",
    },
    name: { en: "Sheikh Abdullah", ar: "الشيخ عبدالله" },
    role: { en: "Mosque committee, Diriyah", ar: "لجنة المسجد، الدرعية" },
    service: "shine-maintenance",
    rating: 5,
    media: photo("mosque-prayer-hall", {
      en: "The mosque prayer hall with a white marble floor",
      ar: "قاعة صلاة المسجد بأرضية رخام أبيض",
    }),
  },
  {
    id: "sara-office",
    quote: {
      en: "Fixed price, on time, and the lobby finally looks like a real head office.",
      ar: "سعر ثابت، في الموعد، والبهو أخيرًا يبدو كمقر رئيسي حقيقي.",
    },
    name: { en: "Sara M.", ar: "سارة م." },
    role: { en: "Facilities manager, Al Olaya", ar: "مديرة مرافق، العليا" },
    service: "granite-polishing",
    rating: 5,
    media: photo("lobby-reception", {
      en: "The polished office reception floor",
      ar: "أرضية استقبال المكتب المصقولة",
    }),
  },
];
