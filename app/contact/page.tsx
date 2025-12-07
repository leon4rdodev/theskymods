"use client"

import { LanguageProvider } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm, ContactInfo } from "@/components/contact-form"
import { useLanguage } from "@/contexts/language-context"

function ContactContent() {
  const { t } = useLanguage()

  return (
    <section className="pt-26">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#87CEEB]/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-80 h-80 bg-[#F4D03F]/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-[#2C3E50] via-[#87CEEB] to-[#FF9A56] bg-clip-text text-transparent">
              {t.contact.title}
            </span>
          </h1>
          <p className="text-[#5a6a7a] max-w-xl mx-auto text-lg">{t.contact.subtitle}</p>
        </div>

        {/* Form and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 relative">
          <ContactContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
