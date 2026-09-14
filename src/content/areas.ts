import type { Bi } from "@/i18n/config";

export type Area = {
  id: string;
  name: Bi;
  note: Bi;
  /** Typical dispatch time in minutes, used for the coverage map. */
  eta: number;
  /** WGS-84 position, used by the Leaflet coverage map. */
  lat: number;
  lng: number;
  tier: "core" | "extended";
};

/** Riyadh districts, ordered roughly north to south. */
export const areas: Area[] = [
  { id: "al-yasmin", name: { en: "Al Yasmin", ar: "الياسمين" }, note: { en: "Head office district", ar: "حي المقر الرئيسي" }, eta: 20, lat: 24.828, lng: 46.649, tier: "core" },
  { id: "al-narjis", name: { en: "Al Narjis", ar: "النرجس" }, note: { en: "Villas and compounds", ar: "فلل ومجمعات" }, eta: 25, lat: 24.845, lng: 46.672, tier: "core" },
  { id: "hittin", name: { en: "Hittin", ar: "حطين" }, note: { en: "Villas and hotels", ar: "فلل وفنادق" }, eta: 25, lat: 24.77, lng: 46.585, tier: "core" },
  { id: "al-sahafa", name: { en: "Al Sahafa", ar: "الصحافة" }, note: { en: "Villas and warehouses", ar: "فلل ومستودعات" }, eta: 25, lat: 24.812, lng: 46.641, tier: "core" },
  { id: "al-malqa", name: { en: "Al Malqa", ar: "الملقا" }, note: { en: "Marble villas", ar: "فلل رخامية" }, eta: 25, lat: 24.804, lng: 46.606, tier: "core" },
  { id: "an-nakheel", name: { en: "An Nakheel", ar: "النخيل" }, note: { en: "Homes and mosques", ar: "منازل ومساجد" }, eta: 30, lat: 24.747, lng: 46.642, tier: "core" },
  { id: "king-abdullah", name: { en: "King Abdullah District", ar: "حي الملك عبدالله" }, note: { en: "Offices and lobbies", ar: "مكاتب ومداخل" }, eta: 30, lat: 24.743, lng: 46.712, tier: "core" },
  { id: "olaya", name: { en: "Olaya", ar: "العليا" }, note: { en: "Office towers", ar: "أبراج مكاتب" }, eta: 30, lat: 24.694, lng: 46.685, tier: "core" },
  { id: "al-muruj", name: { en: "Al Muruj", ar: "المروج" }, note: { en: "Homes and mosques", ar: "منازل ومساجد" }, eta: 30, lat: 24.759, lng: 46.662, tier: "core" },
  { id: "al-wurud", name: { en: "Al Wurud", ar: "الورود" }, note: { en: "Apartments", ar: "شقق" }, eta: 35, lat: 24.728, lng: 46.671, tier: "core" },
  { id: "diriyah", name: { en: "Diriyah", ar: "الدرعية" }, note: { en: "Mosques and heritage", ar: "مساجد وتراث" }, eta: 40, lat: 24.734, lng: 46.575, tier: "extended" },
  { id: "al-rabwah", name: { en: "Al Rabwah", ar: "الربوة" }, note: { en: "Homes", ar: "منازل" }, eta: 40, lat: 24.694, lng: 46.752, tier: "extended" },
  { id: "al-naseem", name: { en: "Al Naseem", ar: "النسيم" }, note: { en: "Homes", ar: "منازل" }, eta: 45, lat: 24.708, lng: 46.803, tier: "extended" },
  { id: "al-shifa", name: { en: "Al Shifa", ar: "الشفا" }, note: { en: "Villas", ar: "فلل" }, eta: 50, lat: 24.56, lng: 46.703, tier: "extended" },
  { id: "namar", name: { en: "Namar", ar: "نمار" }, note: { en: "Extended coverage", ar: "تغطية موسّعة" }, eta: 55, lat: 24.573, lng: 46.584, tier: "extended" },
  { id: "al-aziziyah", name: { en: "Al Aziziyah", ar: "العزيزية" }, note: { en: "Extended coverage", ar: "تغطية موسّعة" }, eta: 55, lat: 24.556, lng: 46.75, tier: "extended" },
];

export const coverageNote: Bi = {
  en: "We polish floors all over Riyadh. Core districts get a same-day visit; extended districts the next morning.",
  ar: "نلمّع الأرضيات في كل أنحاء الرياض. الأحياء الأساسية زيارة في نفس اليوم، والأحياء الموسّعة صباح اليوم التالي.",
};
