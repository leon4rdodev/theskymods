"use client";

import Link from "next/link";
import { Cloud, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-linear-to-b from-transparent to-[#2C3E50]/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 mb-4 cursor-pointer"
            >
              <Cloud className="h-8 w-8 text-[#87CEEB]" />
              <span className="text-xl font-bold bg-linear-to-r from-[#2C3E50] to-[#87CEEB] bg-clip-text text-transparent">
                Sky Mods
              </span>
            </Link>
            <p className="text-[#5a6a7a] text-sm leading-relaxed max-w-md">
              {t.footer.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-[#2C3E50] mb-4">
              {t.footer.links.title}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-[#5a6a7a] hover:text-[#87CEEB] transition-colors"
                >
                  {t.footer.links.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/#mods"
                  className="text-sm text-[#5a6a7a] hover:text-[#87CEEB] transition-colors"
                >
                  {t.footer.links.mods}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[#5a6a7a] hover:text-[#87CEEB] transition-colors"
                >
                  {t.footer.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[#2C3E50] mb-4">
              {t.footer.legal.title}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-[#5a6a7a] hover:text-[#87CEEB] transition-colors"
                >
                  {t.footer.legal.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-[#5a6a7a] hover:text-[#87CEEB] transition-colors"
                >
                  {t.footer.legal.terms}
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-sm text-[#5a6a7a] hover:text-[#87CEEB] transition-colors"
                >
                  {t.footer.legal.disclaimer}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#87CEEB]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#5a6a7a] flex items-center gap-1">
              © 2025 Sky Mods. {t.footer.copyright}
            </p>
            <p className="text-xs text-[#5a6a7a] flex items-center gap-1">
              Made with{" "}
              <Heart className="h-3 w-3 text-[#FFB6C1] fill-[#FFB6C1]" /> •{" "}
              {t.footer.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
