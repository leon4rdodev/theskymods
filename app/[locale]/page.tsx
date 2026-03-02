import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ModsSection } from "@/components/mods-section";
import { InstallationSteps } from "@/components/installation-steps";
import { CreditsSection } from "@/components/credits-section";
import { getTranslations, type Locale } from "@/lib/translations";
import { getLatestMods } from "@/lib/github";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations(locale);
  const mods = await getLatestMods();

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
      process.env.NEXT_PUBLIC_DOMAIN || "https://skymods.vercel.app"
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
        process.env.NEXT_PUBLIC_DOMAIN || "https://skymods.vercel.app"
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

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: t.tutorial.faq.q1.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.tutorial.faq.q1.answer,
        },
      },
      {
        "@type": "Question",
        name: t.tutorial.faq.q2.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.tutorial.faq.q2.answer,
        },
      },
      {
        "@type": "Question",
        name: t.tutorial.faq.q3.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.tutorial.faq.q3.answer,
        },
      },
      {
        "@type": "Question",
        name: t.tutorial.faq.q4.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.tutorial.faq.q4.answer,
        },
      },
      {
        "@type": "Question",
        name: t.tutorial.faq.q5.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.tutorial.faq.q5.answer,
        },
      },
    ],
  };

  // HowTo Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: t.tutorial.title,
    description: t.tutorial.subtitle,
    step: [
      {
        "@type": "HowToStep",
        name: t.tutorial.steps.step1.title,
        text: t.tutorial.steps.step1.description,
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: t.tutorial.steps.step2.title,
        text: t.tutorial.steps.step2.description,
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: t.tutorial.steps.step3.title,
        text: t.tutorial.steps.step3.description,
        position: 3,
      },
      {
        "@type": "HowToStep",
        name: t.tutorial.steps.step4.title,
        text: t.tutorial.steps.step4.description,
        position: 4,
      },
      {
        "@type": "HowToStep",
        name: t.tutorial.steps.step5.title,
        text: t.tutorial.steps.step5.description,
        position: 5,
      },
      {
        "@type": "HowToStep",
        name: t.tutorial.steps.step6.title,
        text: t.tutorial.steps.step6.description,
        position: 6,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([structuredData, faqSchema, howToSchema]),
        }}
      />
      <div className="min-h-screen flex flex-col">
        <Header locale={locale} t={t} />
        <main className="flex-1">
          <HeroSection t={t} />
          <FeaturesSection t={t} />
          <ModsSection locale={locale} t={t} initialMods={mods} />
          <InstallationSteps t={t} />
          <CreditsSection t={t} />
        </main>
        <Footer t={t} />
      </div>
    </>
  );
}
