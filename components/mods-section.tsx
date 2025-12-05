"use client";

import { useState } from "react";
import { ModCard } from "@/components/mod-card";
import { useLanguage } from "@/contexts/language-context";
import { modsData, type Mod } from "@/lib/mods-data";

export function ModsSection() {
  const { language, t } = useLanguage();
  const [mods, setMods] = useState<Mod[]>(modsData);

  const handleDownload = (modId: string) => {
    setMods((prev) =>
      prev.map((mod) =>
        mod.id === modId ? { ...mod, downloads: mod.downloads + 1 } : mod
      )
    );
  };

  return (
    <section id="mods" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            {t.mods.title}
          </h2>
          <p className="text-[#5a6a7a] max-w-xl mx-auto">{t.mods.subtitle}</p>
        </div>

        {/* Mods Grid - Side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {mods.map((mod) => (
            <ModCard key={mod.id} mod={mod} onDownload={handleDownload} />
          ))}
        </div>
      </div>
    </section>
  );
}
