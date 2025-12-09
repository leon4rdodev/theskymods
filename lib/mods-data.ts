export interface Mod {
  id: string;
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  category: string;
  version: string;
  downloads: number;
  updatedAt: string;
  image: string;
  author: string;
  authorGithub: string | string[];
  size: string;
  downloadUrl?: string;
}

export const modsData: Mod[] = [
  {
    id: "1",
    name: {
      es: "Canvas Modloader",
      en: "Canvas Modloader",
    },
    description: {
      es: "Sky Modloader. Wrapper modular que actúa como puente para plugins sin permisos elevados",
      en: "Sky Modloader. Modular wrapper acting as a bridge for plugins without elevated privileges",
    },
    category: "gameplay",
    version: "v1.6.7b",
    downloads: 0,
    updatedAt: "2024-12-02",
    image: "/canvas.webp",
    author: "artdeell & lukas0x1",
    authorGithub: [
      "https://github.com/artdeell",
      "https://github.com/lukas0x1",
    ],
    size: "15 MB",
    downloadUrl:
      "https://raw.githubusercontent.com/thatskymod/Sky-CotL-Scripts/main/Canvas/Canvas.apk",
  },
  {
    id: "2",
    name: {
      es: "LibTSM",
      en: "LibTSM",
    },
    description: {
      es: "Port de Android de That Sky Mod. Menú de mods unificado para Sky, diseñado para Canvas",
      en: "Android port of That Sky Mod. Unified mod menu for Sky, designed for Canvas",
    },
    category: "gameplay",
    version: "v0.18.0",
    downloads: 0,
    updatedAt: "2024-12-09",
    image: "/libtsm.webp",
    author: "XeTrinityz",
    authorGithub: "https://github.com/XeTrinityz",
    size: "4.27 MB",
    downloadUrl:
      "https://github.com/XeTrinityz/ThatSkyMod-Android/releases/download/0.18.0/libTSM.so",
  },
];

export const categories = [
  "ui",
  "gameplay",
  "cosmetics",
  "audio",
  "performance",
] as const;
export type Category = (typeof categories)[number];
