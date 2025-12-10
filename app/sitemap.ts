import { MetadataRoute } from "next";
import { locales } from "../i18n.config";

export default function sitemap(): MetadataRoute.Sitemap {
  // Use production domain consistently for SEO
  const baseUrl = "https://theskymods.eu";

  const pages = ["", "/contact", "/terms", "/privacy", "/disclaimer"];

  // Generate sitemap entries for all pages in all locales
  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale: string) => {
    pages.forEach((page: string) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency:
          page === "" ? "daily" : page === "/contact" ? "monthly" : "yearly",
        priority: page === "" ? 1.0 : page === "/contact" ? 0.8 : 0.5,
      });
    });
  });

  return sitemapEntries;
}
