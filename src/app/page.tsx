import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCarousel from "@/components/ProductCarousel";
import Hero from "@/components/Hero";
import FragranceNotes from "@/components/FragranceNotes";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 2);

  return (
    <main className="bg-brand-light min-h-screen selection:bg-brand-accent selection:text-brand-light">
      <Navbar />

      <Hero />

      {/* Brand Philosophy */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-brand-white text-brand-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-32 items-center">
          <div className="w-full md:w-1/2">
            <AnimatedSection>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight tracking-tight">
                The Architecture <br /> of Scent.
              </h2>
              <p className="font-sans text-brand-dark/70 text-base md:text-lg leading-relaxed mb-12">
                We believe that a fragrance is more than a scent—it is an invisible garment. Our creations are bold, deeply rooted in minimalist aesthetics, yet rich in their complexity. Made for those who do not just wear a perfume, but inhabit it.
              </p>
              <Link href="/about" className="font-sans tracking-widest uppercase text-xs border-b border-brand-accent/20 pb-2 hover:text-brand-accent hover:border-brand-accent transition-colors duration-300">
                Read our story
              </Link>
            </AnimatedSection>
          </div>
          <div className="w-full md:w-1/2">
            <AnimatedSection className="relative aspect-[4/5] w-full group overflow-hidden">
              <Image
                src="/images/section1.jpeg"
                alt="Filosofi Brand"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex justify-between items-end mb-16 border-b border-brand-accent/20 pb-8">
              <h2 className="text-4xl md:text-6xl font-serif text-brand-dark">Featured</h2>
              <Link href="/catalog" className="hidden md:block font-sans tracking-[0.2em] uppercase text-xs text-brand-accent hover:text-brand-dark transition-colors duration-300">
                View All Collection
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {featured.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.2}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-16 text-center md:hidden">
            <Link href="/catalog" className="inline-block border border-brand-accent/20 text-brand-dark px-8 py-4 font-sans tracking-widest uppercase text-xs hover:border-brand-accent hover:text-brand-accent transition-colors duration-300">
              View All Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Product Carousel */}
      <ProductCarousel />

      <FragranceNotes />
      <Testimonials />

      {/* Visual Break / CTA Banner */}
      <section className="py-48 px-6 text-center bg-brand-accent border-y border-brand-accent relative overflow-hidden flex items-center justify-center">
        <AnimatedSection className="relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-7xl font-serif text-brand-light mb-10 leading-tight">
            Temukan Aroma Khas Anda
          </h2>
          <Link
            href="/catalog"
            className="inline-block bg-brand-light text-brand-accent px-12 py-5 font-sans tracking-[0.2em] text-xs uppercase hover:bg-brand-dark hover:text-brand-light transition-all duration-500 shadow-xl"
          >
            Beli Sekarang
          </Link>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
}
