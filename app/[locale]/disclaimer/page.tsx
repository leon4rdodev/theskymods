import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { getTranslations, type Locale } from "@/lib/translations";

export default async function DisclaimerPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations(locale);

  return (
    <div className="min-h-screen flex flex-col pt-9 bg-linear-to-b from-[#E8F4F8] via-white to-[#87CEEB]/10">
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
                {t.disclaimer.backButton}
              </Link>
            </AnimateIn>
            <AnimateIn delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
                {t.disclaimer.title}
              </h1>
            </AnimateIn>
            <AnimateIn delay={200}>
              <p className="text-[#5a6a7a] mb-6">{t.disclaimer.lastUpdated}</p>
            </AnimateIn>
            <AnimateIn delay={300}>
              <div className="bg-yellow-50 border-l-4 border-[#F4D03F] p-4 mb-8 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-[#F4D03F] shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-[#2C3E50]">
                    {t.disclaimer.warning}
                  </p>
                </div>
              </div>
            </AnimateIn>
            <div className="space-y-8">
              {t.disclaimer.sections.map((section, index) => (
                <AnimateIn key={index} delay={400 + index * 100}>
                  <section>
                    <h2 className="text-2xl font-bold text-[#2C3E50] mb-3">
                      {section.title}
                    </h2>
                    <p className="text-[#5a6a7a] leading-relaxed">
                      {section.content}
                    </p>
                  </section>
                </AnimateIn>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer t={t} />
    </div>
  );
}
