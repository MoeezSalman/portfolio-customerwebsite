// Builds the site as plain HTML into out/ for static hosting (cPanel, Nginx,
// GitHub Pages, S3…). Run with `npm run build:static`.
//
// What it does beyond `next build`:
//   1. renders the responsive image variants the static loader expects;
//   2. sets STATIC_EXPORT=1 so next.config.ts switches to output: "export";
//   3. parks the feedback API route for the duration of the build — a static
//      host cannot run it, and Next refuses to export a POST handler. The
//      feedback wall then keeps each visitor's posts in their own browser;
//   4. writes out/index.html, replacing the server redirect / → /ar.
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const api = path.resolve("src/app/api");
const parked = path.resolve(".api-parked");
const out = path.resolve("out");

const run = (cmd) => execSync(cmd, { stdio: "inherit", env: { ...process.env, STATIC_EXPORT: "1", NEXT_PUBLIC_STATIC_EXPORT: "1" } });

// Never leave the API route parked, whatever happens during the build.
const restore = () => {
  if (fs.existsSync(parked)) fs.renameSync(parked, api);
};
process.on("exit", restore);
process.on("SIGINT", () => process.exit(130));

try {
  run("node scripts/make-image-sizes.mjs");
  fs.rmSync(out, { recursive: true, force: true });
  fs.rmSync(path.resolve(".next"), { recursive: true, force: true });
  if (fs.existsSync(api)) fs.renameSync(api, parked);
  run("npx next build --turbopack");
} finally {
  restore();
}

fs.writeFileSync(
  path.join(out, "index.html"),
  `<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=/ar/">
<link rel="canonical" href="/ar/">
<title>جلي البلاط — Jalibalat</title>
<script>location.replace("/ar/" + location.search + location.hash)</script>
</head>
<body><a href="/ar/">جلي البلاط</a></body>
</html>
`,
);

// Windows-only quirk in the Next exporter: the client-router prefetch files
// (__next.<segment>.__PAGE__.txt) come out as nested folders because the
// exporter splits on "/" only. Flatten them back to the dot-joined names the
// browser actually requests.
function flattenSegmentDirs(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("__next.")) {
      const walk = (d, prefix) => {
        for (const e of fs.readdirSync(d, { withFileTypes: true })) {
          const p = path.join(d, e.name);
          if (e.isDirectory()) walk(p, prefix + e.name + ".");
          else fs.renameSync(p, path.join(dir, prefix + e.name));
        }
      };
      walk(full, entry.name + ".");
      fs.rmSync(full, { recursive: true, force: true });
    } else {
      flattenSegmentDirs(full);
    }
  }
}
flattenSegmentDirs(out);

// Some hosts serve 404.html for unknown paths; others want it at the root as well.
if (fs.existsSync(path.join(out, "404.html")) && !fs.existsSync(path.join(out, "404", "index.html"))) {
  fs.mkdirSync(path.join(out, "404"), { recursive: true });
  fs.copyFileSync(path.join(out, "404.html"), path.join(out, "404", "index.html"));
}

const count = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).reduce((n, e) => n + (e.isDirectory() ? count(path.join(dir, e.name)) : 1), 0);
console.log(`\nstatic export ready: out/ (${count(out)} files)`);
