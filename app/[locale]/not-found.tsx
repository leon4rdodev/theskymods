"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Cloud, Home } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import es from "@/messages/es.json";
import en from "@/messages/en.json";
import ja from "@/messages/ja.json";
import id from "@/messages/id.json";
import type { Locale } from "@/i18n.config";

const dictionaries: Record<string, typeof en> = { es, en, ja, id };

export default function NotFound() {
  const params = useParams();
  const locale = (params.locale as Locale) || "en";
  const t = dictionaries[locale] || en;

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-1/4 w-80 h-80 bg-[#87CEEB]/15 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-8 w-96 h-96 bg-[#FFB6C1]/12 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-8 w-56 h-56 bg-[#98D8C8]/12 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "5s" }}
        />
      </div>
      <Header locale={locale as Locale} t={t} />
      <main className="flex-1 flex flex-col items-center px-4 pt-8 md:pt-16 pb-48">
        <div className="max-w-2xl w-full text-center">
          {/* Animated Cloud Icon */}
          <div className="relative mb-8 inline-block">
            <div className="relative z-10">
              <Cloud className="h-32 w-32 text-[#87CEEB] animate-float" />
            </div>
            <div className="absolute inset-0 bg-[#F4D03F] blur-3xl opacity-30 animate-pulse" />
          </div>

          {/* 404 Title with gradient */}
          <h1 className="text-8xl md:text-9xl font-bold mb-6 bg-linear-to-r from-[#87CEEB] via-[#2C3E50] to-[#87CEEB] bg-clip-text text-transparent">
            404
          </h1>

          {/* Message */}
          <div className="glass-card p-8 rounded-3xl mb-8 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50]">
              {t.notFound.title}
            </h2>
            <p className="text-lg text-[#5a6a7a] max-w-md mx-auto">
              {t.notFound.description}
            </p>
          </div>

          {/* Back to Home Button */}
          <Link href={`/${locale}`}>
            <Button
              size="lg"
              className="bg-linear-to-r from-[#87CEEB] to-[#98D8C8] text-[#1a2332] font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 glow cursor-pointer"
            >
              <Home className="mr-2 h-5 w-5" />
              {t.notFound.backHome}
            </Button>
          </Link>

          {/* Decorative clouds */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <Cloud className="absolute top-20 left-10 h-16 w-16 text-[#87CEEB] animate-float" />
            <Cloud className="absolute bottom-32 right-20 h-24 w-24 text-[#87CEEB] animate-float delay-100" />
            <Cloud className="absolute top-1/3 right-10 h-12 w-12 text-[#87CEEB] animate-float delay-200" />
          </div>
        </div>
      </main>
      <Footer t={t} />
    </div>
  );
}
