import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export function generateStaticParams() {
  return [{ id: "0" }];
}

export async function GET() {
  try {
    const htmlPath = join(process.cwd(), "public", "offline.html");
    const html = readFileSync(htmlPath, "utf8");
    return new NextResponse(html, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (e) {
    return new NextResponse("Error loading offline.html", { status: 500 });
  }
}
