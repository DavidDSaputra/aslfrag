import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });
    
    // Convert features string back to array for frontend compatibility
    const formattedProducts = products.map(product => ({
      ...product,
      features: product.features.split(",").map(f => f.trim()).filter(Boolean)
    }));

    return NextResponse.json(formattedProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.image || !body.price) {
      return NextResponse.json({ error: "Name, image, and price are required" }, { status: 400 });
    }

    const newProduct = await prisma.product.create({
      data: {
        name: body.name,
        image: body.image,
        features: Array.isArray(body.features) ? body.features.join(",") : body.features || "",
        description: body.description || "",
        price: parseFloat(body.price),
        category: body.category || "JDM",
        scale: body.scale || "1:64",
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}
