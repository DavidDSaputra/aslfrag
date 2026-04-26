import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      return NextResponse.json({ error: "No file received." }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = file.name.replace(/\.[^/.]+$/, "") + "-" + uniqueSuffix + path.extname(file.name);

    // Ensure directory exists
    const uploadDir = path.join(process.cwd(), "public", "images", "uploads");
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (e) {
      // Ignore if exists
    }

    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    // Return the public URL path
    return NextResponse.json({ url: `/images/uploads/${filename}` }, { status: 201 });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({ error: "Failed to upload file." }, { status: 500 });
  }
}
