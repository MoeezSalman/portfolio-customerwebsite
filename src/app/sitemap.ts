import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { serviceSlugs } from "@/content/services";
import { projectSlugs } from "@/content/projects";
import { postSlugs } from "@/content/posts";

const BASE = "https://shinepro.work";

const staticPaths = [
  "",
  "/about",
  "/services",
  "/projects",
  "/equipment",
  "/packages",
  "/areas",
  "/blog",
  "/faq",
  "/contact",
  "/quote",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${BASE}/${locale}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE}/${l}${path}`]),
          ),
        },
      });
    }

    for (const slug of serviceSlugs) {
      entries.push({
        url: `${BASE}/${locale}/services/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.9,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE}/${l}/services/${slug}`]),
          ),
        },
      });
    }

    for (const slug of projectSlugs) {
      entries.push({
        url: `${BASE}/${locale}/projects/${slug}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.6,
      });
    }

    for (const slug of postSlugs) {
      entries.push({
        url: `${BASE}/${locale}/blog/${slug}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
