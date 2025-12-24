"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X, Cookie } from "lucide-react";
import type { Locale } from "@/lib/translations";
import { Button } from "@/components/ui/button";

export function CookieBanner({ locale }: { locale: Locale }) {
  const [showBanner, setShowBanner] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("sky-mods-cookies-accepted");
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("sky-mods-cookies-accepted", "true");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("sky-mods-cookies-accepted", "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  const content = {
    es: {
      title: "Uso de Cookies",
      message:
        "Utilizamos cookies esenciales para mejorar tu experiencia, como guardar tu preferencia de idioma. No utilizamos cookies de seguimiento o análisis.",
      accept: "Aceptar",
      reject: "Rechazar",
      privacy: "Política de Privacidad",
    },
    en: {
      title: "Cookie Usage",
      message:
        "We use essential cookies to improve your experience, such as saving your language preference. We do not use tracking or analytics cookies.",
      accept: "Accept",
      reject: "Reject",
      privacy: "Privacy Policy",
    },
    ja: {
      title: "Cookieの使用について",
      message:
        "言語設定の保存など、体験を向上させるために必須のCookieを使用しています。追跡や分析用のCookieは使用していません。",
      accept: "同意する",
      reject: "拒否する",
      privacy: "プライバシーポリシー",
    },
    id: {
      title: "Penggunaan Cookie",
      message:
        "Kami menggunakan cookie penting untuk meningkatkan pengalaman Anda, seperti menyimpan preferensi bahasa Anda. Kami tidak menggunakan cookie pelacakan atau analitik.",
      accept: "Terima",
      reject: "Tolak",
      privacy: "Kebijakan Privasi",
    },
  };

  const text = content[locale];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white p-6 rounded-2xl border border-[#87CEEB]/20 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <Cookie className="h-6 w-6 text-[#87CEEB]" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">
                {text.title}
              </h3>
              <p className="text-sm text-[#5a6a7a] mb-4">
                {text.message}{" "}
                <a
                  href={`/${locale}/privacy`}
                  className="text-[#87CEEB] hover:underline font-medium"
                >
                  {text.privacy}
                </a>
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={acceptCookies}
                  className="bg-[#87CEEB] text-white hover:bg-[#87CEEB]/90"
                >
                  {text.accept}
                </Button>
                <Button
                  onClick={rejectCookies}
                  variant="outline"
                  className="border-[#87CEEB]/30 text-[#5a6a7a] hover:bg-[#87CEEB]/10"
                >
                  {text.reject}
                </Button>
              </div>
            </div>
            <button
              onClick={rejectCookies}
              className="shrink-0 text-[#5a6a7a] hover:text-[#2C3E50] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
