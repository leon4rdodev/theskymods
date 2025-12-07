import { NextRequest, NextResponse } from "next/server";

// In-memory storage for download counts
// This persists while the server is running, resets on restart
const downloadCounts: Record<string, number> = {
  "1": 0, // Canvas Modloader - initial count
  "2": 0, // LibTSM - initial count
};

export async function GET() {
  return NextResponse.json({
    downloads: downloadCounts,
    source: "memory",
  });
}
