import type { NextConfig } from "next";

/**
 * Two build targets from one config:
 *
 * - `npm run build`        → Node/Vercel build: image optimizer, redirects,
 *                             the feedback API route.
 * - `npm run build:static` → plain HTML in `out/` for any static host:
 *                             pre-sized images via a custom loader, trailing
 *                             slashes so `/ar/services/` maps to a folder,
 *                             and a hand-written `index.html` redirect.
 */
const isStatic = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  // Pin the workspace root — a stray package-lock.json above this folder
  // otherwise makes Turbopack guess wrong and warn on every boot.
  turbopack: { root: import.meta.dirname },

  ...(isStatic
    ? {
        output: "export",
        trailingSlash: true,
        images: { loader: "custom", loaderFile: "./src/lib/image-loader.ts" },
      }
    : {
        images: {
          // All photography is served from public/images — no remote hosts needed.
          formats: ["image/avif", "image/webp"],
        },
        async redirects() {
          return [
            // Arabic is the default experience; /en is the opt-in.
            { source: "/", destination: "/ar", permanent: false },
          ];
        },
      }),
};

export default nextConfig;
