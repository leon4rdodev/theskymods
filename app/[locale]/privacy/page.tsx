import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getTranslations, type Locale } from "@/lib/translations";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { Key } from "react";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations(locale);

  return (
    <div className="min-h-screen flex flex-col pt-9 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 right-1/4 w-80 h-80 bg-[#87CEEB]/15 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-24 left-12 w-72 h-72 bg-[#98D8C8]/12 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-2/3 right-8 w-56 h-56 bg-[#FFB6C1]/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "5.5s" }}
        />
      </div>
      <Header locale={locale} t={t} />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <article className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-2xl">
            <AnimateIn>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#87CEEB] hover:text-[#2C3E50] transition-colors mb-8 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                {t.privacy.backButton}
              </Link>
            </AnimateIn>
            <AnimateIn delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
                {t.privacy.title}
              </h1>
            </AnimateIn>
            <AnimateIn delay={200}>
              <p className="text-[#5a6a7a] mb-8">{t.privacy.lastUpdated}</p>
            </AnimateIn>
            <div className="space-y-8">
              {t.privacy.sections.map(
                (section: { title: string; content: string }, index: Key | null | undefined) => (
                  <AnimateIn key={index} delay={300 + (Number(index) || 0) * 100}>
                    <section>
                      <h2 className="text-2xl font-bold text-[#2C3E50] mb-3">
                        {section.title}
                      </h2>
                      <p className="text-[#5a6a7a] leading-relaxed">
                        {section.content}
                      </p>
                    </section>
                  </AnimateIn>
                )
              )}
            </div>
          </article>
        </div>
      </main>
      <Footer t={t} />
    </div>
  );
}
