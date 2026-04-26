import CatalogClient from "./CatalogClient";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function CatalogPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  const formattedProducts = products.map((product) => ({
    ...product,
    features: product.features.split(",").map((f) => f.trim()).filter(Boolean),
  }));

  return <CatalogClient initialProducts={formattedProducts} />;
}
