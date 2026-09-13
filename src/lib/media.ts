import type { Bi } from "@/i18n/config";

/**
 * Image slots.
 *
 * Every visual on the site is a slot. Until the client's photo shoot lands,
 * slots render a generated <Plate/> (marble veining, brushed metal, or
 * technical line-art of the actual machine). To use a real photograph:
 *
 *   1. drop the file in `public/images/` — see public/images/README.md
 *   2. add `src: "/images/<file>.jpg"` to the slot below
 *
 * Nothing else changes; <Figure/> switches to next/image automatically.
 */
export type PlateKind =
  | "marble" // polished stone veining — surfaces, floors, finishes
  | "metal" // brushed steel with a specular sweep — machinery, tools
  | "schematic" // blueprint line-art — equipment detail, process
  | "water" // caustic ripples — plumbing, leak detection, tanks
  | "spark"; // arc/filament field — electrical, AC

export type MediaSlot = {
  /** Stable id — also the expected filename in public/images/. */
  id: string;
  kind: PlateKind;
  alt: Bi;
  /** Set once a real photograph exists. */
  src?: string;
};

export function slot(
  id: string,
  kind: PlateKind,
  alt: Bi,
  src?: string,
): MediaSlot {
  return { id, kind, alt, src };
}

/** Deterministic hash so a slot id always yields the same generated art. */
export function seedOf(id: string) {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h % 10000);
}
