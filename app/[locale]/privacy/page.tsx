import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getTranslations, type Locale } from "@/lib/translations";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Key } from "react";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations(locale);

  return (
    <div className="min-h-screen flex flex-col pt-9">
      <Header locale={locale} t={t} />
      <main className="flex-1 bg-linear-to-b from-[#E8F4F8] via-white to-[#F4D03F]/10">
        <div className="container mx-auto px-4 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#87CEEB] hover:text-[#2C3E50] transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.privacy.backButton}
          </Link>

          <article className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
              {t.privacy.title}
            </h1>
            <p className="text-[#5a6a7a] mb-8">{t.privacy.lastUpdated}</p>

            <div className="space-y-8">
              {t.privacy.sections.map(
                (section: { title: string; content: string }, index: Key | null | undefined) => (
                  <section key={index}>
                    <h2 className="text-2xl font-bold text-[#2C3E50] mb-3">
                      {section.title}
                    </h2>
                    <p className="text-[#5a6a7a] leading-relaxed">
                      {section.content}
                    </p>
                  </section>
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
