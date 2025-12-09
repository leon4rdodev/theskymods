"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Cloud } from "lucide-react";
import { useState, useEffect } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale, Translations } from "@/lib/translations";

interface HeaderProps {
  locale: Locale;
  t: Translations[Locale];
}

export function Header({ locale, t }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress tracking
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx =
        document.documentElement.scrollTop || document.body.scrollTop;
      const winHeightPx =
        (document.documentElement.scrollHeight || document.body.scrollHeight) -
        (document.documentElement.clientHeight || window.innerHeight);

      if (winHeightPx <= 0) {
        setScrollProgress(0);
        return;
      }

      let scrolled = (scrollPx / winHeightPx) * 100;

      if (winHeightPx - scrollPx <= 5) {
        scrolled = 100;
      }

      const progress = Math.min(Math.max(scrolled, 0), 100);
      setScrollProgress(progress);
    };

    setTimeout(updateScrollProgress, 100);
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress, { passive: true });
    window.addEventListener("orientationchange", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
      window.removeEventListener("orientationchange", updateScrollProgress);
    };
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  return (
    <header className="fixed w-full top-0 z-50 glass border-b border-white/20 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative">
              <Cloud className="h-8 w-8 text-[#87CEEB] transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#F4D03F] blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-[#2C3E50] to-[#87CEEB] bg-clip-text text-transparent">
              The Sky Mods
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
            <LanguageSwitcher currentLocale={locale} />
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
            <div className="pt-2">
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </nav>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-[#87CEEB] via-[#F4D03F] to-[#87CEEB] transition-all duration-150 ease-out shadow-lg"
            style={{
              width: `${
                scrollProgress >= 99 ? 100 : Math.min(scrollProgress * 1.1, 100)
              }%`,
              boxShadow:
                "0 0 10px rgba(135, 206, 235, 0.6), 0 0 20px rgba(244, 208, 63, 0.4)",
            }}
          >
            <div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer"
              style={{
                animation: "shimmer 2s infinite",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
