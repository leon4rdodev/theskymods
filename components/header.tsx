"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cloud, Home, Gamepad2, BookOpen, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale, Translations } from "@/lib/translations";

interface HeaderProps {
  locale: Locale;
  t: Translations;
}

export function Header({ locale, t }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Prevent touch scroll on mobile when menu is open
  useEffect(() => {
    const preventTouch = (e: TouchEvent) => {
      if (mobileMenuOpen) e.preventDefault();
    };
    if (mobileMenuOpen) {
      document.addEventListener("touchmove", preventTouch, { passive: false });
    }
    return () => {
      document.removeEventListener("touchmove", preventTouch);
    };
  }, [mobileMenuOpen]);

  // Scroll progress tracking and active section detection
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx =
        document.documentElement.scrollTop || document.body.scrollTop;
      const winHeightPx =
        (document.documentElement.scrollHeight || document.body.scrollHeight) -
        (document.documentElement.clientHeight || window.innerHeight);

      setIsScrolled(scrollPx > 10);

      if (winHeightPx <= 0) {
        setScrollProgress(0);
      } else {
        let scrolled = (scrollPx / winHeightPx) * 100;
        if (winHeightPx - scrollPx <= 5) {
          scrolled = 100;
        }
        const progress = Math.min(Math.max(scrolled, 0), 100);
        setScrollProgress(progress);
      }

      // Active section detection
      const sections = ["installation", "mods"]; // Reverse order for priority
      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If top of section is within reasonable view (e.g. top half of screen)
          if (rect.top <= 150) {
            current = section;
            break; // Found the lowest section that is active
          }
        }
      }
      setActiveSection(current);
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
    { href: `/${locale}`, label: t.nav.home, icon: Home },
    { href: `/${locale}#mods`, label: t.nav.mods, icon: Gamepad2 },
    { href: `/${locale}#installation`, label: t.nav.tutorial, icon: BookOpen },
    { href: `/${locale}/contact`, label: t.nav.contact, icon: Mail },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (pathname === path) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${hash}`);
        }
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-white/80 backdrop-blur-md border-b border-gray-100"
            : "bg-transparent border-b border-transparent"
        }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between max-w-6xl mx-auto w-full">
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
            {/* Language Selector */}
            <LanguageSwitcher currentLocale={locale} />

            {navLinks.map((link) => {
              let isActive = false;
              if (link.href.includes("#")) {
                const hash = link.href.split("#")[1];
                isActive = activeSection === hash;
              } else if (link.href === `/${locale}`) {
                isActive =
                  activeSection === "home" && pathname === `/${locale}`;
              } else {
                isActive = pathname === link.href;
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-[#87CEEB] cursor-pointer flex items-center gap-1.5 ${
                    isActive ? "text-[#87CEEB]" : "text-[#2C3E50]"
                  }`}
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher currentLocale={locale} />
            <button
              className="p-2 text-[#2C3E50] cursor-pointer relative flex flex-col items-center justify-center w-10 h-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen
                    ? "rotate-45 translate-y-[6px]"
                    : "rotate-0 translate-y-0"
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out my-[4px] ${
                  mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen
                    ? "-rotate-45 -translate-y-[6px]"
                    : "rotate-0 translate-y-0"
                }`}
              />
            </button>
          </div>
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

    {/* Mobile Navigation */}
    <div
      className={`md:hidden fixed left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ top: "64px", height: "calc(100dvh - 64px)" }}
    >
      <nav
        className={`flex flex-col items-center justify-center h-full gap-8 px-4 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "translate-y-4"
        }`}
      >
        {navLinks.map((link, index) => {
          let isActive = false;
          if (link.href.includes("#")) {
            const hash = link.href.split("#")[1];
            isActive = activeSection === hash;
          } else if (link.href === `/${locale}`) {
            isActive =
              activeSection === "home" && pathname === `/${locale}`;
          } else {
            isActive = pathname === link.href;
          }

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              style={{ animationDelay: `${index * 100}ms` }}
              className={`text-2xl font-semibold transition-colors hover:text-[#87CEEB] cursor-pointer flex items-center gap-4 ${
                isActive ? "text-[#87CEEB]" : "text-[#2C3E50]"
              } ${mobileMenuOpen ? "animate-mobile-link-in" : ""}`}
            >
              <link.icon className="h-8 w-8" />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
    </>
  );
}
