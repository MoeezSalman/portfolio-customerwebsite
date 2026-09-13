import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://shinepro.work/sitemap.xml",
    host: "https://shinepro.work",
  };
}
