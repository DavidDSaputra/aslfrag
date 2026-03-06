"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductDetail({ params }: { params: { id: string } }) {
    const product = products.find(p => p.id === params.id);

    if (!product) {
        notFound();
    }

    const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);
    if (relatedProducts.length < 3) {
        relatedProducts.push(...products.filter(p => p.id !== product.id && !relatedProducts.includes(p)).slice(0, 3 - relatedProducts.length));
    }

    return (
        <main className="bg-brand-light min-h-screen text-brand-dark selection:bg-brand-accent selection:text-brand-light overflow-x-hidden">
            <Navbar />

            {/* Product Content */}
            <section className="pt-32 lg:pt-48 pb-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                    {/* Image Left */}
                    <div className="w-full lg:w-1/2">
                        <AnimatedSection className="relative aspect-[3/4] w-full bg-brand-white overflow-hidden group">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                priority
                                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                            />
                        </AnimatedSection>
                    </div>

                    {/* Info Right */}
                    <div className="w-full lg:w-1/2 lg:sticky lg:top-48 h-fit flex flex-col justify-center">
                        <AnimatedSection delay={0.2}>
                            <div className="mb-6 flex items-center justify-between">
                                <span className="font-sans text-brand-dark/60 uppercase tracking-widest text-xs">
                                    {product.category} • {product.gender}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight tracking-wide">
                                {product.name}
                            </h1>

                            <p className="text-2xl font-sans text-brand-accent mb-10 tracking-wider">
                                ${product.price}
                            </p>

                            <div className="mb-12 font-sans text-lg md:text-xl font-light leading-relaxed text-brand-dark/80">
                                <p>{product.description}</p>
                            </div>

                            <div className="mb-12 border-y border-brand-accent/20 py-8">
                                <h3 className="font-sans text-sm uppercase tracking-widest text-brand-dark mb-6">
                                    Komposisi Aroma
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {product.notes.map(note => (
                                        <span key={note} className="px-5 py-2 border border-brand-accent/20 text-brand-dark/80 font-sans text-xs uppercase tracking-widest rounded-full">
                                            {note}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full bg-brand-dark text-brand-light py-5 font-sans uppercase tracking-[0.2em] text-sm hover:bg-brand-accent hover:text-brand-light transition-all duration-500">
                                Masukkan ke Keranjang
                            </button>

                            <div className="mt-8 text-center text-xs font-sans text-brand-dark/50 tracking-widest uppercase">
                                Gratis ongkir untuk semua pesanan di atas $200
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-brand-dark border-t border-brand-dark/50">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-light mb-16 tracking-wider">
                            Anda Mungkin Juga Suka
                        </h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                        {relatedProducts.map((product, index) => (
                            <AnimatedSection key={product.id} delay={index * 0.2}>
                                <ProductCard product={product} />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
