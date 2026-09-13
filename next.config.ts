import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root — a stray package-lock.json above this folder
  // otherwise makes Turbopack guess wrong and warn on every boot.
  turbopack: { root: import.meta.dirname },
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
};

export default nextConfig;
