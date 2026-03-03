import type React from "react";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CookieBanner } from "@/components/cookie-banner";
import { Toaster } from "@/components/ui/toaster";
import { locales, defaultLocale, type Locale } from "@/i18n.config";
import { getTranslations } from "@/lib/translations";
import {
  languageConfig,
  getAlternateLocales,
  getLanguageAlternatives,
} from "@/lib/language-config";
import { siteConfig } from "@/lib/site-config";
import "../globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations(locale);
  const langConfig = languageConfig[locale];

  if (!langConfig) {
    // Fallback to avoid crash on invalid locales (e.g. static files hitting this route)
    return {
      title: "Error",
      description: "Configuration error",
    };
  }

  return {
    metadataBase: new URL(siteConfig.domain),
    title: {
      default: t.metadata.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: t.metadata.description,
    keywords: [...siteConfig.seo.keywords],
    authors: [{ name: siteConfig.seo.author }],
    creator: siteConfig.seo.creator,
    publisher: siteConfig.seo.publisher,
    alternates: {
      canonical: `${siteConfig.domain}/${locale}`,
      languages: {
        ...getLanguageAlternatives(),
        "x-default": `${siteConfig.domain}/${defaultLocale}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: langConfig.ogLocale,
      alternateLocale: getAlternateLocales(locale),
      url: `${siteConfig.domain}/${locale}`,
      siteName: siteConfig.name,
      title: t.metadata.title,
      description: t.metadata.description,
      images: [
        {
          url: siteConfig.images.ogImage,
          width: siteConfig.images.ogImageWidth,
          height: siteConfig.images.ogImageHeight,
          alt: t.metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metadata.title,
      description: t.metadata.description,
      images: [siteConfig.images.ogImage],
    },
    icons: {
      icon: [
        { url: siteConfig.images.favicon, sizes: "any" },
        { url: siteConfig.images.icon, type: "image/svg+xml" },
      ],
      apple: [
        {
          url: siteConfig.images.appleIcon,
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
    manifest: "/manifest.json",
    verification: {
      google: siteConfig.seo.googleVerification,
      other: {
        monetag: [siteConfig.seo.monetagVerification],
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations(locale);

  return (
    <html lang={locale}>
      <head>
        <link rel="canonical" href={`${siteConfig.domain}/${locale}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: siteConfig.structuredData.applicationName,
              applicationCategory:
                siteConfig.structuredData.applicationCategory,
              operatingSystem: siteConfig.structuredData.operatingSystem,
              offers: {
                "@type": "Offer",
                price: siteConfig.structuredData.price,
                priceCurrency: siteConfig.structuredData.priceCurrency,
              },
              description: t.metadata.description,
              keywords: siteConfig.structuredData.keywords,
              inLanguage: [locale],
              isAccessibleForFree: true,
              publisher: {
                "@type": "Organization",
                name: siteConfig.structuredData.publisher,
              },
            }),
          }}
        />
        <script src="https://quge5.com/88/tag.min.js" data-zone="215954" async data-cfasync="false"></script>
      </head>
      <body className={`${nunito.className} font-sans antialiased`}>
        {children}
        <Toaster />
        <CookieBanner locale={locale} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
