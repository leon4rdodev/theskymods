"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Menu, X, Cloud } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed w-full top-0 z-50 glass border-b border-white/20 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative">
              <Cloud className="h-8 w-8 text-[#87CEEB] transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#F4D03F] blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-[#2C3E50] to-[#87CEEB] bg-clip-text text-transparent">
              Sky Mods
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#87CEEB] cursor-pointer ${
                  pathname === link.href ? "text-[#87CEEB]" : "text-[#2C3E50]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-[#2C3E50] hover:text-[#87CEEB] hover:bg-white/50"
                >
                  <Globe className="h-4 w-4" />
                  <span className="uppercase">{language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass-card">
                <DropdownMenuItem
                  onClick={() => setLanguage("es")}
                  className={language === "es" ? "bg-[#87CEEB]/20" : ""}
                >
                  🇪🇸 Español
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className={language === "en" ? "bg-[#87CEEB]/20" : ""}
                >
                  🇺🇸 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#2C3E50] cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden border-t border-white/20 overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-[#87CEEB] cursor-pointer ${
                  pathname === link.href ? "text-[#87CEEB]" : "text-[#2C3E50]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Button
                variant={language === "es" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("es")}
                className={
                  language === "es" ? "bg-[#87CEEB] text-[#1a2332]" : ""
                }
              >
                🇪🇸 ES
              </Button>
              <Button
                variant={language === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("en")}
                className={
                  language === "en" ? "bg-[#87CEEB] text-[#1a2332]" : ""
                }
              >
                🇺🇸 EN
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
