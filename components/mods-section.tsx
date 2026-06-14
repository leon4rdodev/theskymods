"use client";

import { useState, useEffect } from "react";
import { ModCard } from "@/components/mod-card";
import type { Locale, Translations } from "@/lib/translations";
import { type Mod } from "@/lib/mods-data";
import { AnimateIn } from "@/components/animate-in";

interface ModsSectionProps {
  locale: Locale;
  t: Translations;
  initialMods: Mod[];
}

export function ModsSection({ locale, t, initialMods }: ModsSectionProps) {
  const [mods, setMods] = useState<Mod[]>(initialMods);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch real download statistics on mount
  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch("/api/mods/stats");
        if (response.ok) {
          const data = await response.json();

          // Update mods with real download counts
          setMods((prevMods) =>
            prevMods.map((mod) => ({
              ...mod,
              downloads: data.downloads[mod.id] || mod.downloads,
            }))
          );
        }
      } catch (error) {
        console.error("Failed to fetch mod stats:", error);
        // Keep using static data on error
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
  }, []);

  const handleDownload = (modId: string) => {
    // Optimistically update the UI
    setMods((prev) =>
      prev.map((mod) =>
        mod.id === modId ? { ...mod, downloads: mod.downloads + 1 } : mod
      )
    );

    // Call API to track the download
    fetch("/api/mods/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ modId }),
    }).catch((error) => {
      console.error("Failed to track download:", error);
      // Revert the optimistic update on error
      setMods((prev) =>
        prev.map((mod) =>
          mod.id === modId ? { ...mod, downloads: mod.downloads - 1 } : mod
        )
      );
    });
  };

  return (
    <section id="mods" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimateIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
              {t.mods.title}
            </h2>
            <p className="text-[#5a6a7a] max-w-xl mx-auto">{t.mods.subtitle}</p>
          </div>
        </AnimateIn>

        {/* Mods Grid - Side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {mods.map((mod, index) => (
            <AnimateIn key={mod.id} delay={index * 100}>
              <ModCard
                mod={mod}
                onDownload={handleDownload}
                isLoading={isLoading}
                locale={locale}
                t={t}
              />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
