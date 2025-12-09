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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} asChild>
            <Link
              href={`/${lang.code}${pathWithoutLocale}`}
              className={`cursor-pointer flex items-center gap-2 ${
                currentLocale === lang.code ? "bg-accent" : ""
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
