/**
 * Image loader for the static export.
 *
 * A static host has no image optimizer, so `scripts/make-image-sizes.mjs`
 * pre-renders every photo in public/images at 640 and 1200 px wide into
 * public/images/sized/. This loader points each requested width at the
 * smallest variant that is still sharp; anything wider gets the original.
 * Files outside public/images (the logo, icons) are returned untouched.
 */
export default function imageLoader({ src, width }: { src: string; width: number }) {
  const m = src.match(/^\/images\/([^/]+)\.jpg$/);
  if (!m) return src;
  if (width <= 640) return `/images/sized/${m[1]}-640.jpg`;
  if (width <= 1200) return `/images/sized/${m[1]}-1200.jpg`;
  return src;
}
