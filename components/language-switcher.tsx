"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Locale } from "@/i18n.config";
import { useEffect } from "react";
import { getLanguages } from "@/lib/language-config";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Remove current locale from pathname to get the base path
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";

  // Get languages dynamically from config
  const languages = getLanguages();

  // Restore scroll position after language change
  useEffect(() => {
    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
      sessionStorage.removeItem("scrollPosition");
    }
  }, []);

  const handleLanguageChange = (e: React.MouseEvent, langCode: string) => {
    e.preventDefault();
    // Save current scroll position
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    // Navigate to new language
    router.push(`/${langCode}${pathWithoutLocale}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="cursor-pointer rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#2C3E50] px-3 gap-2 transition-all duration-300"
          aria-label="Select language"
        >
          <Globe className="h-4 w-4" />
          <span className="font-medium uppercase">{currentLocale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white border-white/40 min-w-[140px] p-1 shadow-xl"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`rounded-lg cursor-pointer focus:bg-[#87CEEB]/20 focus:text-[#2C3E50] ${
              currentLocale === lang.code ? "bg-[#87CEEB]/10" : ""
            }`}
          >
            <div
              onClick={(e) => handleLanguageChange(e, lang.code)}
              className="flex items-center gap-3 px-3 py-2 w-full"
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium text-[#2C3E50]">{lang.name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
