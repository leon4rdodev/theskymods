import { MetadataRoute } from "next";
import { locales } from "../i18n.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://theskymods.eu";
  const now = new Date();

  // Define pages that exist for all locales
  const routes = ["", "/contact", "/terms", "/privacy", "/disclaimer"];

  // Generate sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Add the root URL (homepage)
  sitemapEntries.push({
    url: baseUrl,
    lastModified: now,
    changeFrequency: "daily",
    priority: 1,
  });

  // 2. Add locale-specific URLs
  locales.forEach((locale) => {
    routes.forEach((route) => {
      // Skip adding the root path again if it's just the locale (e.g. /en)
      // actually, /en is a valid page, distinct from / (which might redirect)
      // But usually / is the main entry.
      // Let's follow the pattern: /locale/page

      const url = `${baseUrl}/${locale}${route}`;

      sitemapEntries.push({
        url: url,
        lastModified: now,
        changeFrequency:
          route === "" ? "daily" : route === "/contact" ? "monthly" : "yearly",
        priority: route === "" ? 1.0 : route === "/contact" ? 0.8 : 0.5,
      });
    });
  });

  return sitemapEntries;
}
