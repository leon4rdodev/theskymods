import type React from "react";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CookieBanner } from "@/components/cookie-banner";
import { locales, defaultLocale, type Locale } from "@/i18n.config";
import { getTranslations } from "@/lib/translations";
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
  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://skymods.vercel.app";
  const t = getTranslations(locale);

  const titles = {
    es: "The Sky Mods - Canvas Modloader & LibTSM para Sky: Children of the Light",
    en: "The Sky Mods - Canvas Modloader & LibTSM for Sky: Children of the Light",
  };

  const descriptions = {
    es: "Descarga Canvas Modloader y LibTSM para Sky: Children of the Light. Mods, hacks y personalización sin root. 100% gratis, código abierto y seguro. Compatible con Android.",
    en: "Download Canvas Modloader and LibTSM for Sky: Children of the Light. Mods, hacks and customization without root. 100% free, open source and safe. Compatible with Android.",
  };

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: titles[locale],
      template: "%s | The Sky Mods",
    },
    description: descriptions[locale],
    keywords: [
      // Español - Términos principales
      "Sky Children of the Light mods",
      "Sky niños de la luz mods",
      "Sky niños de la luz hacks",
      "mods para sky niños de la luz",
      "canvas modloader",
      "canvas modloader sky",
      "canvas apk",
      "canvas sky download",
      "LibTSM",
      "LibTSM sky",
      "That Sky Mod",
      "sky cotl mods",
      "sky cotl hacks",

      // Español - Búsquedas específicas
      "como modificar sky children of the light",
      "The Sky Mods android",
      "The Sky Mods sin root",
      "descargar mods sky",
      "sky hacks android",
      "sky children hacks",
      "modificar sky android",
      "personalizar sky children",
      "trucos sky niños de la luz",
      "The Sky Mods gratis",
      "sky modloader",

      // English - Main terms
      "sky children of the light mods",
      "sky cotl mods android",
      "canvas modloader download",
      "libtsm download",
      "sky children hacks",
      "sky cotl cheats",
      "The Sky Mods no root",
      "sky android mods",
      "that sky mod android",

      // Términos técnicos
      "sky modloader sin root",
      "sky mod menu",
      "sky children mod apk",
      "sky cotl modded apk",
      "canvas wrapper sky",
      "sky plugin loader",
      "sky children tweaks",

      // Búsquedas relacionadas
      "como instalar mods en sky",
      "sky children of light modding",
      "sky cotl mod tutorial",
      "descargar canvas sky",
      "descargar libtsm",
      "The Sky Mods 2024",
      "The Sky Mods 2025",
      "mejores mods para sky",
    ],
    authors: [{ name: "The Sky Mods Community" }],
    creator: "The Sky Mods",
    publisher: "The Sky Mods",
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        es: `${baseUrl}/es`,
        en: `${baseUrl}/en`,
        "x-default": `${baseUrl}/${defaultLocale}`,
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
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_ES"],
      url: `${baseUrl}/${locale}`,
      siteName: "The Sky Mods",
      title: titles[locale],
      description: descriptions[locale],
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: titles[locale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale],
      description: descriptions[locale],
      images: ["/og-image.png"],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/manifest.json",
    verification: {
      google: "-GLBeiN6eJGBLTtMFeJKw8gSQ5TUbGNn8kkgeP7mUQo",
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

  return (
    <html lang={locale}>
      <head>
        <link
          rel="canonical"
          href={`${
            process.env.NEXT_PUBLIC_DOMAIN || "https://skymods.vercel.app"
          }/${locale}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Canvas Modloader & LibTSM",
              applicationCategory: "GameApplication",
              operatingSystem: "Android",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              description:
                locale === "es"
                  ? "Modloader para Sky: Children of the Light. Personaliza el juego con mods sin root, 100% gratis y seguro."
                  : "Modloader for Sky: Children of the Light. Customize the game with mods without root, 100% free and safe.",
              keywords:
                "The Sky Mods, sky children mods, canvas modloader, libtsm, sky hacks, sky niños de la luz mods",
              inLanguage: [locale],
              isAccessibleForFree: true,
              publisher: {
                "@type": "Organization",
                name: "The Sky Mods Community",
              },
            }),
          }}
        />
      </head>
      <body className={`${nunito.className} font-sans antialiased`}>
        {children}
        <CookieBanner locale={locale} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
