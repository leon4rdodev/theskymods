export interface Mod {
  id: string;
  translationKey: string;
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
    translationKey: "canvas",
    category: "gameplay",
    version: "v1.6.8",
    downloads: 0,
    updatedAt: "2024-12-12",
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
    translationKey: "libtsm",
    category: "gameplay",
    version: "v0.20.0",
    downloads: 0,
    updatedAt: "2024-12-12",
    image: "/libtsm.webp",
    author: "XeTrinityz",
    authorGithub: "https://github.com/XeTrinityz",
    size: "4.27 MB",
    downloadUrl:
      "https://github.com/XeTrinityz/ThatSkyMod-Android/releases/download/0.20.0/libTSM.so",
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
