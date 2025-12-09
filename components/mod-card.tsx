"use client";

import Image from "next/image";
import { Download, Calendar, Tag, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";
import type { Mod } from "@/lib/mods-data";

interface ModCardProps {
  mod: Mod;
  onDownload: (modId: string) => void;
  isLoading?: boolean;
}

export function ModCard({ mod, onDownload, isLoading = false }: ModCardProps) {
  const { language, t } = useLanguage();

  const categoryColors: Record<string, string> = {
    ui: "bg-[#87CEEB]/20 text-[#2C3E50] border-[#87CEEB]/40",
    gameplay: "bg-[#98D8C8]/20 text-[#2C3E50] border-[#98D8C8]/40",
    cosmetics: "bg-[#FFB6C1]/20 text-[#2C3E50] border-[#FFB6C1]/40",
    audio: "bg-[#F4D03F]/20 text-[#2C3E50] border-[#F4D03F]/40",
    performance: "bg-[#FF9A56]/20 text-[#2C3E50] border-[#FF9A56]/40",
  };

  const categoryKey = mod.category as keyof typeof t.mods.categories;

  // Parse author names and GitHub links
  const authorGithubArray = Array.isArray(mod.authorGithub)
    ? mod.authorGithub
    : [mod.authorGithub];
  const authorNames = mod.author.split(" & ");

  return (
    <div className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src={mod.image || "/placeholder.svg"}
          alt={mod.name[language]}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-[#2C3E50] mb-2 line-clamp-1">
          {mod.name[language]}
        </h3>
        <p className="text-sm text-[#5a6a7a] mb-4 line-clamp-2 leading-relaxed">
          {mod.description[language]}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#5a6a7a] mb-4">
          <span className="flex items-center gap-1">
            <Tag className="h-3 w-3" />
            {mod.version}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {mod.updatedAt}
          </span>
          <span className="flex items-center gap-1">
            <Download className="h-3 w-3" />
            {isLoading ? (
              <span className="inline-block h-3 w-12 bg-gray-200 animate-pulse rounded" />
            ) : (
              mod.downloads.toLocaleString()
            )}
          </span>
        </div>

        {/* Author and Download */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs text-[#5a6a7a]">by</span>
            <div className="flex flex-wrap gap-1">
              {authorNames.map((name, index) => (
                <a
                  key={index}
                  href={authorGithubArray[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-2 py-1 rounded-full bg-[#87CEEB]/20 text-[#2C3E50] hover:bg-[#87CEEB]/40 transition-colors cursor-pointer inline-flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  @{name.trim()}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
          <Button
            onClick={() => {
              onDownload(mod.id);
              if (mod.downloadUrl) {
                // Create a temporary anchor element to trigger download
                const link = document.createElement("a");
                link.href = mod.downloadUrl;
                link.download = `${mod.name.en.replace(/\s+/g, "_")}_${
                  mod.version
                }.so`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }
            }}
            size="sm"
            className="bg-linear-to-r from-[#87CEEB] to-[#98D8C8] text-[#1a2332] font-medium hover:opacity-90 transition-opacity"
          >
            <Download className="h-4 w-4 mr-1" />
            {t.mods.download}
          </Button>
        </div>
      </div>
    </div>
  );
}
