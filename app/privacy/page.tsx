"use client";

import { useLanguage } from "@/contexts/language-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: 5 de diciembre de 2024",
      sections: [
        {
          title: "1. Información que Recopilamos",
          content:
            "The Sky Mods no recopila información personal identificable. Nuestro sitio web funciona principalmente como una plataforma de distribución de mods. No almacenamos datos de usuarios, correos electrónicos o información de contacto de manera permanente.",
        },
        {
          title: "2. Cookies y Tecnologías de Seguimiento",
          content:
            "Utilizamos cookies esenciales para el funcionamiento básico del sitio, como la preferencia de idioma. No utilizamos cookies de seguimiento de terceros ni herramientas de análisis que comprometan tu privacidad.",
        },
        {
          title: "3. Descargas de Mods",
          content:
            "Cuando descargas un mod de nuestra plataforma, no registramos tu dirección IP ni información personal. Las estadísticas de descarga son anónimas y se utilizan únicamente para mostrar la popularidad de los mods.",
        },
        {
          title: "4. Formulario de Contacto",
          content:
            "Si utilizas nuestro formulario de contacto, la información proporcionada (nombre, correo electrónico, mensaje) se utiliza únicamente para responder a tu consulta y no se almacena en base de datos permanentes.",
        },
        {
          title: "5. Seguridad",
          content:
            "Todos los mods disponibles en nuestra plataforma son verificados antes de su publicación para garantizar que no contengan malware o código malicioso. Sin embargo, te recomendamos mantener tu dispositivo actualizado y utilizar un antivirus.",
        },
        {
          title: "6. Cambios a esta Política",
          content:
            "Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios serán publicados en esta página con la fecha de actualización correspondiente.",
        },
      ],
      backButton: "Volver al inicio",
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: December 5, 2024",
      sections: [
        {
          title: "1. Information We Collect",
          content:
            "The Sky Mods does not collect personally identifiable information. Our website primarily functions as a mod distribution platform. We do not permanently store user data, emails, or contact information.",
        },
        {
          title: "2. Cookies and Tracking Technologies",
          content:
            "We use essential cookies for basic site functionality, such as language preference. We do not use third-party tracking cookies or analytics tools that compromise your privacy.",
        },
        {
          title: "3. Mod Downloads",
          content:
            "When you download a mod from our platform, we do not log your IP address or personal information. Download statistics are anonymous and used solely to display mod popularity.",
        },
        {
          title: "4. Contact Form",
          content:
            "If you use our contact form, the information provided (name, email, message) is used only to respond to your inquiry and is not stored in permanent databases.",
        },
        {
          title: "5. Security",
          content:
            "All mods available on our platform are verified before publication to ensure they do not contain malware or malicious code. However, we recommend keeping your device updated and using antivirus software.",
        },
        {
          title: "6. Changes to This Policy",
          content:
            "We reserve the right to update this privacy policy at any time. Changes will be posted on this page with the corresponding update date.",
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
