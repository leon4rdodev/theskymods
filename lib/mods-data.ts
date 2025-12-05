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
    downloads: 28750,
    updatedAt: "2024-12-02",
    image: "/canvas.png",
    author: "artdeell & lukas0x1",
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
    version: "v0.17.0",
    downloads: 15420,
    updatedAt: "2024-12-01",
    image: "/libtsm.png",
    author: "XeTrinityz",
    size: "2.4 MB",
    downloadUrl:
      "https://raw.githubusercontent.com/thatskymod/Sky-CotL-Scripts/main/Canvas/Libs/libTSM.so",
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
