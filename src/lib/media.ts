import type { Bi } from "@/i18n/config";

/**
 * Image slots.
 *
 * Every photograph on the site is a slot: a stable id (also the filename in
 * public/images/), bilingual alt text, and the file path. To swap a photo
 * for the client's own, overwrite the file and keep the name — nothing in
 * the code changes. See public/images/README.md.
 */
export type PlateKind = "marble" | "metal" | "schematic" | "water" | "spark";

export type MediaSlot = {
  /** Stable id — also the filename in public/images/. */
  id: string;
  kind: PlateKind;
  alt: Bi;
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

/** Shorthand for a real photograph in public/images/<id>.jpg. */
export function photo(id: string, alt: Bi, kind: PlateKind = "marble"): MediaSlot {
  return { id, kind, alt, src: `/images/${id}.jpg` };
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
