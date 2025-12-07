import { NextRequest, NextResponse } from "next/server";

// Same in-memory storage as stats route
const downloadCounts: Record<string, number> = {
  "1": 0,
  "2": 0,
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { modId } = body;

    if (!modId) {
      return NextResponse.json({ error: "modId is required" }, { status: 400 });
    }

    // Increment the counter in memory
    if (downloadCounts[modId] !== undefined) {
      downloadCounts[modId]++;

      return NextResponse.json({
        success: true,
        modId,
        downloads: downloadCounts[modId],
        source: "memory",
      });
    } else {
      return NextResponse.json({ error: "Invalid modId" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error tracking download:", error);
    return NextResponse.json(
      { error: "Failed to track download" },
      { status: 500 }
    );
  }
}
