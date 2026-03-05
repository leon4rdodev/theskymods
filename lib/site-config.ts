/**
 * Site-wide configuration constants
 * These are shared across all languages
 */

export const siteConfig = {
  name: "The Sky Mods",
  domain: process.env.NEXT_PUBLIC_DOMAIN || "https://skymods.vercel.app",

  // SEO Configuration
  seo: {
    author: "The Sky Mods Community",
    creator: "The Sky Mods",
    publisher: "The Sky Mods",
    googleVerification: "Ll07y-x3_SSRp6Jb4PTwCRyQdL6kDkdhKvfPZttFuSY",

    // Keywords that apply to all languages
    keywords: [
      // === ESPAÑOL - TÉRMINOS PRINCIPALES ===
      "The Sky Mods",
      "Sky Children of the Light mods",
      "Sky niños de la luz mods",
      "Sky niños de la luz hacks",
      "mods para sky niños de la luz",
      "sky cotl mods español",
      "sky cotl hacks español",

      // === CANVAS MODLOADER ===
      "canvas modloader",
      "canvas modloader sky",
      "canvas modloader android",
      "canvas apk",
      "canvas apk sky",
      "canvas sky download",
      "canvas mod loader",
      "descargar canvas modloader",
      "canvas modloader 2024",
      "canvas modloader 2025",
      "canvas modloader gratis",
      "canvas modloader español",
      "como instalar canvas modloader",
      "canvas modloader tutorial",
      "canvas modloader actualizado",
      "canvas modloader ultima version",

      // === LIBTSM ===
      "LibTSM",
      "LibTSM sky",
      "LibTSM download",
      "LibTSM android",
      "libtsm apk",
      "descargar libtsm",
      "that sky mod",
      "thatskymod",
      "libtsm 2024",
      "libtsm 2025",
      "libtsm español",
      "como usar libtsm",
      "libtsm tutorial",

      // === SKY COTL - VARIACIONES ===
      "sky cotl mods",
      "sky cotl hacks",
      "sky cotl cheats",
      "sky cotl mod menu",
      "sky cotl mods android",
      "sky cotl hack android",
      "sky cotl trucos",
      "sky cotl modificaciones",

      // === BÚSQUEDAS ESPECÍFICAS ESPAÑOL ===
      "como modificar sky children of the light",
      "como hackear sky niños de la luz",
      "The Sky Mods android",
      "The Sky Mods sin root",
      "The Sky Mods no root",
      "descargar mods sky",
      "descargar hacks sky",
      "sky hacks android",
      "sky children hacks",
      "sky children mods android",
      "modificar sky android",
      "personalizar sky children",
      "trucos sky niños de la luz",
      "The Sky Mods gratis",
      "The Sky Mods free",
      "sky modloader",
      "sky mod menu android",

      // === ENGLISH - MAIN TERMS ===
      "sky children of the light mods",
      "sky children of the light hacks",
      "sky children of the light cheats",
      "sky cotl mods android",
      "sky cotl hack",
      "canvas modloader download",
      "libtsm download",
      "sky children hacks",
      "sky cotl cheats android",
      "The Sky Mods no root",
      "sky android mods",
      "that sky mod android",
      "sky mod apk",

      // === TÉRMINOS TÉCNICOS ===
      "sky modloader sin root",
      "sky modloader no root",
      "sky mod menu",
      "sky children mod apk",
      "sky cotl modded apk",
      "sky cotl modified apk",
      "canvas wrapper sky",
      "sky plugin loader",
      "sky children tweaks",
      "sky cotl tweaks",
      "sky injector",
      "sky patcher",

      // === CARACTERÍSTICAS Y FUNCIONES ===
      "sky vuelo infinito",
      "sky infinite flight",
      "sky unlock all",
      "sky all cosmetics",
      "sky free cosmetics",
      "sky unlimited candles",
      "sky unlimited hearts",
      "sky speed hack",
      "sky teleport",
      "sky no clip",
      "sky god mode",
      "sky emotes unlock",
      "sky capes unlock",
      "sky cosmetics hack",

      // === LONG-TAIL KEYWORDS ===
      "como instalar mods en sky",
      "como instalar canvas en sky",
      "como usar mods en sky children",
      "sky children of light modding",
      "sky cotl mod tutorial",
      "descargar canvas sky",
      "descargar libtsm",
      "sky mods 2024",
      "sky mods 2025",
      "mejores mods para sky",
      "mods seguros para sky",
      "safe sky mods",
      "sky mods without ban",
      "sky hacks sin ban",
      "mods sky sin ban",

      // === PROBLEMAS Y SOLUCIONES ===
      "canvas modloader not working",
      "canvas no funciona",
      "libtsm error",
      "como arreglar canvas",
      "canvas crashea",
      "sky crash with mods",
      "actualizar canvas",
      "update canvas modloader",
      "canvas compatibility",
      "canvas sky compatible",

      // === VERSIONES Y ACTUALIZACIONES ===
      "canvas latest version",
      "canvas ultima version",
      "libtsm new version",
      "libtsm nueva version",
      "sky mods updated",
      "sky mods actualizados",
      "canvas update 2024",
      "canvas update 2025",

      // === DISPOSITIVOS ===
      "sky mods android",
      "sky mods samsung",
      "sky mods xiaomi",
      "sky mods huawei",
      "canvas android 13",
      "canvas android 14",
      "canvas android 15",

      // === ALTERNATIVAS Y COMPARACIONES ===
      "mejor que lucky patcher sky",
      "alternativa a game guardian sky",
      "sky mods vs hacks",
      "canvas vs libtsm",
      "modloader para sky",

      // === COMUNIDAD Y REDES ===
      "sky mods discord",
      "sky mods telegram",
      "sky mods community",
      "comunidad sky mods",
      "sky modding discord",

      // === TÉRMINOS GENÉRICOS RELACIONADOS ===
      "mod sky",
      "hack sky",
      "cheat sky",
      "patch sky",
      "inject sky",
      "trainer sky",
      "sky game hack",
      "sky game mod",
      "sky mobile hack",
      "sky mobile mod",

      // === BÚSQUEDAS DE NICHO ===
      "sky rootless mod",
      "sky mod sin root casualizado",
      "sky mod apk español",
      "sky hack apk 2024",
      "sky children mod menu español",
      "sky cotl español mods",
      "modded sky apk",
      "sky patched apk",

      // === JAPANESE TERMS ===
      "sky 星を紡ぐ子どもたち mod",
      "sky 星を紡ぐ子どもたち hack",
      "sky mod 日本語",

      // === BÚSQUEDAS POR PROBLEMA ESPECÍFICO ===
      "como conseguir velas gratis sky",
      "como desbloquear todo en sky",
      "sky free wings",
      "sky all items unlock",
      "how to get free cosmetics sky",
      "sky children unlimited money",

      // === TÉRMINOS DE SEGURIDAD ===
      "sky mods safe",
      "sky hacks safe",
      "mods seguros sky",
      "sky no virus mods",
      "trusted sky mods",
      "verified sky mods",
      "official sky mods",

      // === INSTALACIÓN Y SETUP ===
      "sky mod installation",
      "instalacion mods sky",
      "sky mod setup",
      "configurar mods sky",
      "guia mods sky",
      "tutorial mods sky español",
      "sky mods guide",

      // === TÉRMINOS DE YOUTUBE/TUTORIALES ===
      "sky mods tutorial youtube",
      "como usar canvas sky",
      "install canvas sky",
      "libtsm setup guide",
      "sky hacks tutorial",
    ],
  },

  // Structured Data (JSON-LD)
  structuredData: {
    applicationName: "Canvas Modloader & LibTSM",
    applicationCategory: "GameApplication",
    operatingSystem: "Android",
    price: "0",
    priceCurrency: "USD",
    keywords:
      "The Sky Mods, sky children mods, canvas modloader, libtsm, sky hacks, sky niños de la luz mods",
    publisher: "The Sky Mods Community",
  },

  // Social Media
  social: {
    instagram: "@leon4rdo.dev",
  },

  // Images
  images: {
    ogImage: "/og-image.png",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    favicon: "/favicon.ico",
    icon: "/icon.svg",
    appleIcon: "/apple-icon.png",
  },
};
