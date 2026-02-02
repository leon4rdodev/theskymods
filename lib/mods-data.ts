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
    version: "v1.7.0",
    downloads: 0,
    updatedAt: "2025-02-02",
    image: "/canvas.webp",
    author: "artdeell & lukas0x1",
    authorGithub: [
      "https://github.com/artdeell",
      "https://github.com/lukas0x1",
    ],
    size: "11 MB",
    downloadUrl:
      "https://github.com/XeTrinityz/ThatSkyMod-Android/releases/download/0.22.1/Canvas.apk",
  },
  {
    id: "2",
    translationKey: "libtsm",
    category: "gameplay",
    version: "v0.22.1",
    downloads: 0,
    updatedAt: "2025-02-02",
    image: "/libtsm.webp",
    author: "XeTrinityz",
    authorGithub: "https://github.com/XeTrinityz",
    size: "4.27 MB",
    downloadUrl:
      "https://github.com/XeTrinityz/ThatSkyMod-Android/releases/download/0.22.1/libTSM.so",
  },
  {
    id: "3",
    translationKey: "canvasEmulator",
    category: "gameplay",
    version: "v1.7.0",
    downloads: 0,
    updatedAt: "2025-02-02",
    image: "/canvas.webp",
    author: "artdeell & lukas0x1",
    authorGithub: [
      "https://github.com/artdeell",
      "https://github.com/lukas0x1",
    ],
    size: "11 MB",
    downloadUrl:
      "https://github.com/XeTrinityz/ThatSkyMod-Android/releases/download/0.22.1/Canvas4Emulator.apk",
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
