import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Automatically detect the base URL for sitemap
  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://theskymods.eu");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
