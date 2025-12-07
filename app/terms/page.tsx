"use client";

import { useLanguage } from "@/contexts/language-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Términos y Condiciones",
      lastUpdated: "Última actualización: 5 de diciembre de 2024",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content:
            "Al acceder y utilizar Sky Mods, aceptas estar sujeto a estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro servicio.",
        },
        {
          title: "2. Uso de los Mods",
          content:
            "Los mods proporcionados en esta plataforma son para uso personal y no comercial. No garantizamos que los mods funcionen perfectamente en todas las versiones del juego Sky: Children of the Light. El uso de mods puede violar los términos de servicio del juego original.",
        },
        {
          title: "3. Responsabilidad del Usuario",
          content:
            "Tú eres responsable del uso que hagas de los mods descargados. Sky Mods no se hace responsable de ningún daño a tu cuenta, dispositivo o experiencia de juego que pueda resultar del uso de los mods.",
        },
        {
          title: "4. Derechos de Autor",
          content:
            "Todos los mods están sujetos a los derechos de autor de sus respectivos creadores. Sky Mods actúa únicamente como plataforma de distribución. Los autores de los mods retienen todos los derechos sobre su trabajo.",
        },
        {
          title: "5. Contenido Prohibido",
          content:
            "Está prohibido subir o distribuir mods que contengan malware, código malicioso, contenido ilegal, o que infrinjan derechos de propiedad intelectual.",
        },
        {
          title: "6. Suspensión del Servicio",
          content:
            "Nos reservamos el derecho de suspender o terminar el acceso a nuestra plataforma en cualquier momento y sin previo aviso, especialmente en caso de violación de estos términos.",
        },
        {
          title: "7. Modificaciones",
          content:
            "Podemos modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en esta página.",
        },
        {
          title: "8. Ley Aplicable",
          content:
            "Estos términos se rigen por las leyes aplicables en tu jurisdicción. Cualquier disputa se resolverá mediante arbitraje o en los tribunales competentes.",
        },
      ],
      backButton: "Volver al inicio",
    },
    en: {
      title: "Terms and Conditions",
      lastUpdated: "Last updated: December 5, 2024",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            "By accessing and using Sky Mods, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you should not use our service.",
        },
        {
          title: "2. Use of Mods",
          content:
            "The mods provided on this platform are for personal, non-commercial use. We do not guarantee that mods will work perfectly with all versions of Sky: Children of the Light. Using mods may violate the original game's terms of service.",
        },
        {
          title: "3. User Responsibility",
          content:
            "You are responsible for your use of downloaded mods. Sky Mods is not liable for any damage to your account, device, or gaming experience that may result from using the mods.",
        },
        {
          title: "4. Copyright",
          content:
            "All mods are subject to the copyright of their respective creators. Sky Mods acts solely as a distribution platform. Mod authors retain all rights to their work.",
        },
        {
          title: "5. Prohibited Content",
          content:
            "It is prohibited to upload or distribute mods containing malware, malicious code, illegal content, or content that infringes intellectual property rights.",
        },
        {
          title: "6. Service Suspension",
          content:
            "We reserve the right to suspend or terminate access to our platform at any time without prior notice, especially in case of violation of these terms.",
        },
        {
          title: "7. Modifications",
          content:
            "We may modify these terms at any time. Modifications will take effect immediately after being posted on this page.",
        },
        {
          title: "8. Applicable Law",
          content:
            "These terms are governed by the laws applicable in your jurisdiction. Any disputes will be resolved through arbitration or in competent courts.",
        },
      ],
      backButton: "Back to home",
    },
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen flex flex-col pt-9">
      <Header />
      <main className="flex-1 bg-linear-to-b from-[#E8F4F8] via-white to-[#F4D03F]/10">
        <div className="container mx-auto px-4 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#87CEEB] hover:text-[#2C3E50] transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            {currentContent.backButton}
          </Link>

          <article className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
              {currentContent.title}
            </h1>
            <p className="text-[#5a6a7a] mb-8">{currentContent.lastUpdated}</p>

            <div className="space-y-8">
              {currentContent.sections.map((section, index) => (
                <section key={index}>
                  <h2 className="text-2xl font-bold text-[#2C3E50] mb-3">
                    {section.title}
                  </h2>
                  <p className="text-[#5a6a7a] leading-relaxed">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
