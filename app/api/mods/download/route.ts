import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Download from "@/lib/models/Download";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { modId } = body;

    if (!modId) {
      return NextResponse.json({ error: "modId is required" }, { status: 400 });
    }

    // Validate modId (only accept "1", "2", or "3")
    if (!["1", "2", "3"].includes(modId)) {
      return NextResponse.json({ error: "Invalid modId" }, { status: 400 });
    }

    // Increment the counter in MongoDB using atomic operation
    // findOneAndUpdate with upsert creates the document if it doesn't exist
    const result = await Download.findOneAndUpdate(
      { modId },
      {
        $inc: { count: 1 },
        $set: { lastUpdated: new Date() },
      },
      {
        new: true, // Return the updated document
        upsert: true, // Create if doesn't exist
        runValidators: true,
      }
    );

    return NextResponse.json({
      success: true,
      modId,
      downloads: result.count,
      source: "mongodb",
    });
  } catch (error) {
    console.error("Error tracking download:", error);
    return NextResponse.json(
      {
        error: "Failed to track download",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
