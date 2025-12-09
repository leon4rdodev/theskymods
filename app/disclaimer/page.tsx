"use client";

import { useLanguage } from "@/contexts/language-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function DisclaimerPage() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Descargo de Responsabilidad",
      lastUpdated: "Última actualización: 5 de diciembre de 2024",
      warning: "IMPORTANTE: Lee cuidadosamente antes de usar cualquier mod",
      sections: [
        {
          title: "1. No Afiliación Oficial",
          content:
            "The Sky Mods NO está afiliado, asociado, autorizado, respaldado por, o de ninguna manera conectado oficialmente con thatgamecompany, Inc., o cualquiera de sus subsidiarias o afiliadas. Sky: Children of the Light es una marca registrada de thatgamecompany, Inc.",
        },
        {
          title: "2. Uso Bajo Tu Propio Riesgo",
          content:
            "Todos los mods disponibles en esta plataforma se proporcionan 'tal cual' sin garantías de ningún tipo. El uso de mods puede resultar en la suspensión o prohibición de tu cuenta de Sky: Children of the Light. The Sky Mods no se hace responsable de ninguna consecuencia derivada del uso de estos mods.",
        },
        {
          title: "3. Violación de Términos de Servicio",
          content:
            "El uso de mods puede violar los Términos de Servicio de Sky: Children of the Light. Al descargar y usar estos mods, reconoces que asumes todos los riesgos asociados, incluyendo pero no limitado a la suspensión o eliminación de tu cuenta.",
        },
        {
          title: "4. Sin Garantías",
          content:
            "No garantizamos que los mods funcionen correctamente, sean compatibles con tu dispositivo, o no causen problemas técnicos. No nos hacemos responsables de ningún daño a tu dispositivo, pérdida de datos, o corrupción de archivos del juego.",
        },
        {
          title: "5. Contenido de Terceros",
          content:
            "Los mods son creados por desarrolladores de terceros. The Sky Mods actúa únicamente como plataforma de distribución y no controla ni garantiza la calidad, seguridad o funcionalidad de los mods publicados.",
        },
        {
          title: "6. Verificación de Seguridad",
          content:
            "Aunque realizamos verificaciones básicas de seguridad, no podemos garantizar al 100% que los mods estén libres de malware o código malicioso. Te recomendamos usar software antivirus actualizado y precaución al descargar archivos.",
        },
        {
          title: "7. Propiedad Intelectual",
          content:
            "Todos los nombres, marcas, logotipos y materiales relacionados con Sky: Children of the Light son propiedad de thatgamecompany, Inc. The Sky Mods no reclama ningún derecho sobre estos materiales.",
        },
        {
          title: "8. Cambios en el Juego",
          content:
            "Los mods pueden dejar de funcionar después de actualizaciones del juego. No garantizamos el mantenimiento o actualización de los mods para que sean compatibles con versiones futuras del juego.",
        },
        {
          title: "9. Responsabilidad Legal",
          content:
            "The Sky Mods y sus operadores no asumen ninguna responsabilidad legal por cualquier daño directo, indirecto, incidental, especial o consecuente que surja del uso o la incapacidad de usar nuestro servicio o los mods descargados.",
        },
      ],
      backButton: "Volver al inicio",
    },
    en: {
      title: "Disclaimer",
      lastUpdated: "Last updated: December 5, 2024",
      warning: "IMPORTANT: Read carefully before using any mod",
      sections: [
        {
          title: "1. No Official Affiliation",
          content:
            "The Sky Mods is NOT affiliated, associated, authorized, endorsed by, or in any way officially connected with thatgamecompany, Inc., or any of its subsidiaries or affiliates. Sky: Children of the Light is a registered trademark of thatgamecompany, Inc.",
        },
        {
          title: "2. Use at Your Own Risk",
          content:
            "All mods available on this platform are provided 'as is' without warranties of any kind. Using mods may result in the suspension or ban of your Sky: Children of the Light account. The Sky Mods is not responsible for any consequences arising from the use of these mods.",
        },
        {
          title: "3. Terms of Service Violation",
          content:
            "Using mods may violate the Terms of Service of Sky: Children of the Light. By downloading and using these mods, you acknowledge that you assume all associated risks, including but not limited to account suspension or deletion.",
        },
        {
          title: "4. No Warranties",
          content:
            "We do not guarantee that mods will work correctly, be compatible with your device, or not cause technical issues. We are not responsible for any damage to your device, data loss, or corruption of game files.",
        },
        {
          title: "5. Third-Party Content",
          content:
            "Mods are created by third-party developers. The Sky Mods acts solely as a distribution platform and does not control or guarantee the quality, security, or functionality of published mods.",
        },
        {
          title: "6. Security Verification",
          content:
            "While we perform basic security checks, we cannot guarantee 100% that mods are free from malware or malicious code. We recommend using updated antivirus software and caution when downloading files.",
        },
        {
          title: "7. Intellectual Property",
          content:
            "All names, trademarks, logos, and materials related to Sky: Children of the Light are property of thatgamecompany, Inc. The Sky Mods does not claim any rights to these materials.",
        },
        {
          title: "8. Game Changes",
          content:
            "Mods may stop working after game updates. We do not guarantee the maintenance or update of mods to be compatible with future game versions.",
        },
        {
          title: "9. Legal Liability",
          content:
            "The Sky Mods and its operators assume no legal liability for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use our service or downloaded mods.",
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
            <p className="text-[#5a6a7a] mb-6">{currentContent.lastUpdated}</p>

            <div className="bg-yellow-50 border-l-4 border-[#F4D03F] p-4 mb-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-[#F4D03F] shrink-0 mt-0.5" />
                <p className="text-sm font-semibold text-[#2C3E50]">
                  {currentContent.warning}
                </p>
              </div>
            </div>

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
