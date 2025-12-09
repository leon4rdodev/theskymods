import type React from "react";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/contexts/language-context";
import { CookieBanner } from "@/components/cookie-banner";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_DOMAIN || "https://theskymods.com"
  ),
  title: {
    default:
      "The Sky Mods - Canvas Modloader & LibTSM para Sky: Children of the Light",
    template: "%s | The Sky Mods",
  },
  description:
    "Descarga Canvas Modloader y LibTSM para Sky: Children of the Light. Mods, hacks y personalización sin root. 100% gratis, código abierto y seguro. Compatible con Android.",
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
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: process.env.NEXT_PUBLIC_DOMAIN || "https://theskymods.com",
    siteName: "The Sky Mods",
    title:
      "The Sky Mods - Canvas Modloader & LibTSM para Sky: Children of the Light",
    description:
      "Descarga Canvas Modloader y LibTSM para personalizar Sky: Children of the Light. Mods y hacks sin root, 100% gratis y seguro para Android.",
    images: [
      {
        url: "/og-image.png", // You should create this image
        width: 1200,
        height: 630,
        alt: "The Sky Mods - Canvas Modloader & LibTSM para Sky: Children of the Light",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Sky Mods - Canvas & LibTSM para Sky: Children of the Light",
    description:
      "Descarga Canvas Modloader y LibTSM. Mods sin root para Sky: Children of the Light. Gratis y seguro.",
    images: ["/og-image.png"], // Same as OG image
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
    // Add other verification codes when needed:
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="canonical"
          href={process.env.NEXT_PUBLIC_DOMAIN || "https://theskymods.com"}
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
                "Modloader para Sky: Children of the Light. Personaliza el juego con mods sin root, 100% gratis y seguro.",
              keywords:
                "The Sky Mods, sky children mods, canvas modloader, libtsm, sky hacks, sky niños de la luz mods",
              inLanguage: ["es", "en"],
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
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
