import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ModsSection } from "@/components/mods-section";
import { InstallationSteps } from "@/components/installation-steps";
import { CreditsSection } from "@/components/credits-section";
import { getTranslations, type Locale } from "@/lib/translations";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  // Schema.org structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "The Sky Mods - Canvas Modloader",
    description:
      locale === "es"
        ? "Descarga Canvas y LibTSM para personalizar Sky: Children of the Light. Modloader ligero sin root, 100% gratis y de código abierto."
        : "Download Canvas and LibTSM to customize Sky: Children of the Light. Lightweight modloader without root, 100% free and open source.",
    url: `${
      process.env.NEXT_PUBLIC_DOMAIN || "https://theskymods.eu"
    }/${locale}`,
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
      name: "The Sky Mods",
      url: `${
        process.env.NEXT_PUBLIC_DOMAIN || "https://theskymods.eu"
      }/${locale}`,
    },
    softwareVersion: "1.6.7b",
    fileSize: "15MB",
    downloadUrl:
      "https://raw.githubusercontent.com/thatskymod/Sky-CotL-Scripts/main/Canvas/Canvas.apk",
    genre: "Mod Manager",
    keywords:
      "Sky Children of the Light mods, Canvas modloader, LibTSM, The Sky Mods Android, Sky CotL mods",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen flex flex-col">
        <Header locale={locale} t={t} />
        <main className="flex-1">
          <HeroSection t={t} />
          <FeaturesSection t={t} />
          <ModsSection locale={locale} t={t} />
          <InstallationSteps t={t} />
          <CreditsSection t={t} />
        </main>
        <Footer t={t} />
      </div>
    </>
  );
}
