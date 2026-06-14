"use client";

import type { Translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";

export function HeroSection({ t }: { t: Translations }) {
  const scrollToMods = () => {
    document.getElementById("mods")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 md:py-32">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#87CEEB]/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#F4D03F]/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-40 right-1/4 w-64 h-64 bg-[#FFB6C1]/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>


      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <AnimateIn delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              <span className="bg-linear-to-r from-[#2C3E50] via-[#87CEEB] to-[#FF9A56] bg-clip-text text-transparent">
                {t.hero.title}
              </span>
            </h1>
          </AnimateIn>

          {/* Subtitle */}
          <AnimateIn delay={200}>
            <p className="text-lg md:text-xl text-[#5a6a7a] mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
              {t.hero.subtitle}
            </p>
          </AnimateIn>

          {/* CTA Button */}
          <AnimateIn delay={300}>
            <Button
              onClick={scrollToMods}
              size="lg"
              className="bg-linear-to-r from-[#87CEEB] to-[#98D8C8] text-[#1a2332] font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 glow cursor-pointer"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              {t.hero.cta}
            </Button>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
