import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const dbProduct = await prisma.product.findUnique({
    where: { id: params.id },
  });

  if (!dbProduct) {
    notFound();
  }

  const product = {
    ...dbProduct,
    features: dbProduct.features.split(",").map((f) => f.trim()).filter(Boolean),
  };

  const dbRelated = await prisma.product.findMany({
    where: {
      category: product.category,
      id: { not: product.id },
    },
    take: 3,
  });

  const relatedProducts = dbRelated.map((p) => ({
    ...p,
    features: p.features.split(",").map((f) => f.trim()).filter(Boolean),
  }));

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-36 md:pt-44 px-5 md:px-10 pb-14 md:pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <AnimatedSection className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-brand-line bg-brand-card">
            <Image src={product.image} alt={product.name} fill priority className="object-cover" />
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="rounded-[2rem] border border-brand-line bg-brand-card/80 p-6 md:p-8 lg:sticky lg:top-32">
            <p className="text-[11px] uppercase tracking-[0.2em] text-brand-accent">
              {product.category} / Scale {product.scale}
            </p>
            <h1 className="mt-3 font-serif text-brand-paper text-[clamp(2.4rem,6vw,5.2rem)] leading-[0.92]">
              {product.name}
            </h1>
            <p className="mt-2 text-brand-signal text-xl md:text-2xl font-semibold">${product.price}</p>

            <p className="mt-5 text-sm md:text-base text-brand-ink/75 leading-relaxed">{product.description}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {product.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-2 rounded-full border border-brand-line text-[11px] uppercase tracking-[0.15em] text-brand-ink/75"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                className="rounded-full bg-brand-signal text-brand-dark px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-orange-400 transition-colors"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="rounded-full border border-brand-line text-brand-paper px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] hover:border-brand-accent hover:text-brand-accent transition-colors"
              >
                Save Wishlist
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-5 md:px-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="font-serif text-brand-paper text-[clamp(2rem,5vw,4.6rem)] leading-none">Related Picks</h2>
          </AnimatedSection>

          <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-[1px] bg-white/5 border-y border-white/5">
            {relatedProducts.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.07} className="bg-brand-light">
                <ProductCard product={item} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}