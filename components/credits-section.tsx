"use client";

import { Heart, Github, Code2, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function CreditsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-linear-to-b from-white to-[#E8F4F8]/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
              <Heart className="h-4 w-4 text-[#FFB6C1]" />
              <span className="text-sm font-medium text-[#2C3E50]">
                {t.credits.badge}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
              {t.credits.title}
            </h2>
            <p className="text-[#5a6a7a] max-w-2xl mx-auto leading-relaxed">
              {t.credits.description}
            </p>
          </div>

          {/* Credits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Canvas Creators */}
            <div className="glass-card rounded-2xl p-6 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#87CEEB] to-[#98D8C8] flex items-center justify-center shrink-0">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#2C3E50] mb-2">
                    Canvas Modloader
                  </h3>
                  <p className="text-sm text-[#5a6a7a] mb-2">
                    {t.credits.canvas}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://github.com/artdeell"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-2 py-1 rounded-full bg-[#87CEEB]/20 text-[#2C3E50] hover:bg-[#87CEEB]/40 transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      @artdeell
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href="https://github.com/lukas0x1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-2 py-1 rounded-full bg-[#87CEEB]/20 text-[#2C3E50] hover:bg-[#87CEEB]/40 transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      @lukas0x1
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* LibTSM Creator */}
            <div className="glass-card rounded-2xl p-6 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#98D8C8] to-[#FFB6C1] flex items-center justify-center shrink-0">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#2C3E50] mb-2">
                    LibTSM
                  </h3>
                  <p className="text-sm text-[#5a6a7a] mb-2">
                    {t.credits.libtsm}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://github.com/XeTrinityz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-2 py-1 rounded-full bg-[#98D8C8]/20 text-[#2C3E50] hover:bg-[#98D8C8]/40 transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      @XeTrinityz
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Repository */}
          <a
            href="https://github.com/thatskymod/Sky-CotL-Scripts"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-8 text-center hover:scale-[1.02] transition-all duration-300 block group"
          >
            <Github className="h-12 w-12 text-[#2C3E50] mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3 flex items-center justify-center gap-2">
              {t.credits.repository}
              <ExternalLink className="h-5 w-5 text-[#87CEEB]" />
            </h3>
            <p className="text-[#5a6a7a] leading-relaxed max-w-xl mx-auto mb-4">
              {t.credits.repoDescription}
            </p>
            <p className="text-sm text-[#87CEEB] font-medium">
              github.com/thatskymod/Sky-CotL-Scripts
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
