import { modsData, type Mod } from "@/lib/mods-data";

// Mapping between our Mod IDs and GitHub Asset names/substrings
const ASSET_MAPPING: Record<string, string> = {
  "1": "Canvas.apk",
  "2": "libTSM.so",
  "3": "Canvas4Emulator.apk",
};

interface GitHubAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

interface GitHubRelease {
  tag_name: string;
  assets: GitHubAsset[];
  published_at: string;
}

export async function getLatestMods(): Promise<Mod[]> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/XeTrinityz/ThatSkyMod-Android/releases/latest",
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch GitHub release:", response.statusText);
      return modsData; // Fallback to static data
    }

    const release: GitHubRelease = await response.json();
    const version = release.tag_name; // e.g., "v0.22.0"

    // Map static data to dynamic data
    const dynamicMods = modsData.map((mod) => {
      const assetName = ASSET_MAPPING[mod.id];
      if (!assetName) return mod;

      const asset = release.assets.find((a) => a.name === assetName);
      
      if (asset) {
        // Only update version for LibTSM (id: "2") as it matches the release tag.
        // Canvas versions (id: "1", "3") are managed manually in mods-data.ts.
        const shouldUpdateVersion = mod.id === "2";

        return {
          ...mod,
          version: shouldUpdateVersion ? version : mod.version,
          downloadUrl: asset.browser_download_url,
          // Convert bytes to MB with 2 decimal places
          size: `${(asset.size / (1024 * 1024)).toFixed(2)} MB`,
          updatedAt: new Date(release.published_at).toISOString().split('T')[0],
        };
      }

      return mod;
    });

    return dynamicMods;
  } catch (error) {
    console.error("Error fetching mods from GitHub:", error);
    return modsData; // Fallback
  }
}
