import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm, ContactInfo } from "@/components/contact-form";
import {
  getTranslations,
  type Locale,
  type Translations,
} from "@/lib/translations";

function ContactContent({ t }: { t: Translations }) {
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
          <p className="text-[#5a6a7a] max-w-xl mx-auto text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Form and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2">
            <ContactForm t={t} />
          </div>
          <div>
            <ContactInfo t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations(locale);

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} t={t} />
      <main className="flex-1 relative">
        <ContactContent t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
