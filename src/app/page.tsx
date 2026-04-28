import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ProductCarousel from "@/components/ProductCarousel";
import DiecastDetails from "@/components/DiecastDetails";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { prisma } from "@/lib/prisma";

const categories = [
  {
    label: "JDM Icons",
    description: "Skyline, Supra, RX-7, dan legenda jalanan Jepang.",
    image: "/images/cat_jdm.png",
  },
  {
    label: "Muscle Era",
    description: "Raw power klasik Amerika untuk display bold.",
    image: "/images/cat_muscle.png",
  },
  {
    label: "Exotic Vault",
    description: "Hypercar dan supercar presisi kelas kolektor.",
    image: "/images/cat_exotic.png",
  },
];

export const dynamic = "force-dynamic";

export default async function Home() {
  const dbProducts = await prisma.product.findMany({
    take: 6,
    orderBy: { createdAt: "desc" },
  });

  const featured = dbProducts.map((product) => ({
    ...product,
    features: product.features.split(",").map((f) => f.trim()).filter(Boolean),
  }));

  return (
    <main className="min-h-screen">
      <div className="bg-brand-signal text-brand-dark text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-center py-2 px-3">
        Free shipping Indonesia untuk order di atas Rp 1.500.000
      </div>

      <Navbar />
      <Hero />

      <section className="px-5 md:px-10 py-8 md:py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4">
          {categories.map((item, index) => (
            <AnimatedSection key={item.label} delay={index * 0.08} className="relative rounded-2xl overflow-hidden border border-brand-line aspect-[5/4]">
              <Image src={item.image} alt={item.label} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/35 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-serif text-4xl text-brand-paper leading-none">{item.label}</p>
                <p className="mt-2 text-xs text-brand-ink/75">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="px-5 md:px-10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-accent">Curated Selection</p>
              <h2 className="mt-2 font-serif text-brand-paper text-[clamp(2.2rem,6vw,5rem)] leading-none">Featured Drops</h2>
            </div>
            <Link
              href="/catalog"
              className="rounded-full border border-brand-line px-6 py-2 text-xs uppercase tracking-[0.2em] text-brand-ink/80 hover:border-brand-signal hover:text-brand-signal transition-colors"
            >
              Browse All
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5 border-y border-white/5">
            {featured.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.04} className="bg-brand-light">
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ProductCarousel products={featured} />

      <section className="px-5 md:px-10 py-14 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-3 md:gap-4">
          {[
            { label: "Autenticity Check", value: "100%" },
            { label: "Collectors Served", value: "11,240" },
            { label: "Avg Dispatch", value: "< 24h" },
            { label: "Exclusive Releases", value: "2x / Week" },
          ].map((metric, index) => (
            <AnimatedSection
              key={metric.label}
              delay={index * 0.05}
              className="rounded-2xl border border-brand-line bg-brand-card/80 p-5"
            >
              <p className="font-serif text-5xl text-brand-paper leading-none">{metric.value}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-brand-ink/65">{metric.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <DiecastDetails />
      <Testimonials />

      <section className="px-5 md:px-10 pb-20">
        <AnimatedSection className="max-w-7xl mx-auto rounded-[2rem] border border-brand-line bg-gradient-to-r from-brand-card via-brand-dark to-brand-card p-8 md:p-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand-accent">Join The Collector List</p>
          <h2 className="mt-4 font-serif text-[clamp(2.5rem,6vw,5.8rem)] leading-[0.92] text-brand-paper">
            GET ALERTS FOR
            <br />
            LIMITED RELEASES
          </h2>
          <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
            <input
              type="email"
              placeholder="email@collector.com"
              className="w-full sm:w-80 rounded-full border border-brand-line bg-brand-dark px-5 py-3 text-sm text-brand-paper placeholder:text-brand-ink/45 focus:outline-none focus:border-brand-accent"
            />
            <button
              type="button"
              className="rounded-full bg-brand-signal text-brand-dark px-7 py-3 text-xs uppercase font-semibold tracking-[0.2em] hover:bg-orange-400 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
}