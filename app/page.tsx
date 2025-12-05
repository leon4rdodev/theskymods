"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ModsSection } from "@/components/mods-section";
import { CreditsSection } from "@/components/credits-section";

export default function Home() {
  // Schema.org structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Sky Mods - Canvas Modloader",
    description:
      "Descarga Canvas y LibTSM para personalizar Sky: Children of the Light. Modloader ligero sin root, 100% gratis y de código abierto.",
    url: "https://theskymods.com",
    applicationCategory: "GameApplication",
    operatingSystem: "Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1250",
    },
    author: {
      "@type": "Organization",
      name: "Sky Mods",
      url: "https://theskymods.com",
    },
    softwareVersion: "1.6.7b",
    fileSize: "15MB",
    downloadUrl:
      "https://raw.githubusercontent.com/thatskymod/Sky-CotL-Scripts/main/Canvas/Canvas.apk",
    genre: "Mod Manager",
    keywords:
      "Sky Children of the Light mods, Canvas modloader, LibTSM, Sky mods Android, Sky CotL mods",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <FeaturesSection />
          <ModsSection />
          <CreditsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
