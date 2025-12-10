"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cloud, Home } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import es from "@/messages/es.json";
import en from "@/messages/en.json";
import ja from "@/messages/ja.json";

const dictionaries = { es, en, ja };

export default function NotFound() {
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] || "es") as "es" | "en" | "ja";
  const t = dictionaries[locale] || dictionaries.es;

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale as "es" | "en"} t={t} />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
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
