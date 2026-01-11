import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Download from "@/lib/models/Download";

export async function GET() {
  try {
    await dbConnect();

    // Get all download stats from MongoDB
    const allDownloads = await Download.find({});

    // Convert to the expected format
    const downloadCounts: Record<string, number> = {};
    allDownloads.forEach((download) => {
      downloadCounts[download.modId] = download.count;
    });

    return NextResponse.json({
      downloads: downloadCounts,
      source: "mongodb",
    });
  } catch (error) {
    console.error("Error fetching download stats:", error);

    // Return zeros if there's an error
    return NextResponse.json({
      downloads: {
        "1": 0,
        "2": 0,
        "3": 0,
      },
      source: "error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
