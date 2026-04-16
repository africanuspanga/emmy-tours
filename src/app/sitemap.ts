import type { MetadataRoute } from "next";

export const dynamic = "force-static";

import { safariPackages } from "@/data/safariPackages";
import { kilimanjaroRoutes } from "@/data/kilimanjaroRoutes";

const baseUrl = "https://emmysafaris.com";
const locales = ["en", "it", "fr", "de"];

const staticPaths = [
  "",
  "about",
  "packages",
  "accommodation",
  "kilimanjaro",
  "zanzibar",
  "gallery",
  "contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${baseUrl}/${locale}${path ? `/${path}` : ""}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1.0 : 0.8,
      });
    }

    for (const pkg of safariPackages) {
      entries.push({
        url: `${baseUrl}/${locale}/packages/${pkg.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const route of kilimanjaroRoutes) {
      entries.push({
        url: `${baseUrl}/${locale}/kilimanjaro/${route.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
