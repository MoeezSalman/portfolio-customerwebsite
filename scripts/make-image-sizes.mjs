// Pre-renders every photo in public/images at 640 and 1200 px wide into
// public/images/sized/, for hosts without an image optimizer (static export).
// Skips files that are already up to date, so re-runs are instant.
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const src = path.resolve("public/images");
const dst = path.join(src, "sized");
const widths = [640, 1200];

fs.mkdirSync(dst, { recursive: true });
const photos = fs.readdirSync(src).filter((f) => f.endsWith(".jpg"));
let made = 0;

for (const file of photos) {
  const id = file.replace(/\.jpg$/, "");
  const input = path.join(src, file);
  const stamp = fs.statSync(input).mtimeMs;
  for (const w of widths) {
    const output = path.join(dst, `${id}-${w}.jpg`);
    if (fs.existsSync(output) && fs.statSync(output).mtimeMs >= stamp) continue;
    await sharp(input)
      .resize({ width: w, withoutEnlargement: true })
      .jpeg({ quality: 74, mozjpeg: true })
      .toFile(output);
    made++;
  }
}

console.log(`image sizes: ${photos.length} photos, ${made} variant(s) rendered into public/images/sized/`);
