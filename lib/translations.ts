import "server-only";
import type { Locale } from "@/i18n.config";

const dictionaries = {
  es: () => import("@/messages/es.json").then((module) => module.default),
  en: () => import("@/messages/en.json").then((module) => module.default),
  ja: () => import("@/messages/ja.json").then((module) => module.default),
  id: () => import("@/messages/id.json").then((module) => module.default),
};

export const getTranslations = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.es();
};

// Infer the type from the Spanish translation file (default)
// We use Awaited<ReturnType<...>> to get the resolved type of the promise
export type Translations = Awaited<ReturnType<typeof dictionaries.es>>;

export type { Locale };
export type Language = Locale;
