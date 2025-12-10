"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Locale } from "@/i18n.config";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  // Remove current locale from pathname to get the base path
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";

  const languages = [
    { code: "es" as Locale, name: "Español", flag: "🇪🇸" },
    { code: "en" as Locale, name: "English", flag: "🇺🇸" },
  ];

  const currentLang = languages.find((l) => l.code === currentLocale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="cursor-pointer rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#2C3E50] px-3 gap-2 transition-all duration-300 hover:scale-105"
          aria-label="Select language"
        >
          <Globe className="h-4 w-4" />
          <span className="font-medium uppercase">{currentLocale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="glass-card border-white/40 min-w-[140px] p-1"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            asChild
            className={`rounded-lg cursor-pointer focus:bg-[#87CEEB]/20 focus:text-[#2C3E50] ${
              currentLocale === lang.code ? "bg-[#87CEEB]/10" : ""
            }`}
          >
            <Link
              href={`/${lang.code}${pathWithoutLocale}`}
              className="flex items-center gap-3 px-3 py-2 w-full"
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium text-[#2C3E50]">{lang.name}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
