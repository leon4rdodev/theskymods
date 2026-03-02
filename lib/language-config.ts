import { locales, type Locale } from "@/i18n.config";

export interface LanguageMetadata {
  code: Locale;
  name: string;
  flag: string;
  ogLocale: string;
}

export const languageConfig: Record<Locale, LanguageMetadata> = {
  es: {
    code: "es",
    name: "Español",
    flag: "🇪🇸",
    ogLocale: "es_ES",
  },
  en: {
    code: "en",
    name: "English",
    flag: "🇺🇸",
    ogLocale: "en_US",
  },
  ja: {
    code: "ja",
    name: "日本語",
    flag: "🇯🇵",
    ogLocale: "ja_JP",
  },
  id: {
    code: "id",
    name: "Bahasa Indonesia",
    flag: "🇮🇩",
    ogLocale: "id_ID",
  },
};

// Get all languages as array
export const getLanguages = (): LanguageMetadata[] => {
  return locales.map((locale) => languageConfig[locale]);
};

// Get alternate locales for OpenGraph (all except current)
export const getAlternateLocales = (currentLocale: Locale): string[] => {
  return locales
    .filter((locale) => locale !== currentLocale)
    .map((locale) => languageConfig[locale].ogLocale);
};

// Get language alternatives for <link> tags
export const getLanguageAlternatives = (): Record<string, string> => {
  const alternatives: Record<string, string> = {};

  locales.forEach((locale) => {
    alternatives[locale] = `${
      process.env.NEXT_PUBLIC_DOMAIN || "https://skymods.vercel.app"
    }/${locale}`;
  });

  return alternatives;
};
