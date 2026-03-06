"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

export default function Catalog() {
    const [activeFilter, setActiveFilter] = useState<string>("Semua");

    const filters = ["Semua", "Segar", "Kayu", "Bunga", "Manis", "Unisex", "Pria", "Wanita"];

    const filterMap: Record<string, string> = {
        "Semua": "All", "Segar": "Fresh", "Kayu": "Woody", "Bunga": "Floral", "Manis": "Sweet",
        "Unisex": "Unisex", "Pria": "Men", "Wanita": "Women"
    };
    const mappedFilter = filterMap[activeFilter] || activeFilter;

    const filteredProducts = products.filter(product => {
        if (mappedFilter === "All") return true;
        if (["Fresh", "Woody", "Floral", "Sweet"].includes(mappedFilter)) {
            return product.category === mappedFilter;
        }
        if (["Unisex", "Men", "Women"].includes(mappedFilter)) {
            return product.gender === mappedFilter;
        }
        return true;
    });

    return (
        <main className="bg-brand-light min-h-screen text-brand-dark selection:bg-brand-accent selection:text-brand-light">
            <Navbar />

            {/* Header and Filters */}
            <section className="pt-48 pb-16 px-6 md:px-12 lg:px-24 border-b border-brand-accent/20">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 tracking-widest leading-none">
                            KOLEKSI KAMI
                        </h1>
                        <p className="font-sans text-brand-dark/60 uppercase tracking-[0.2em] text-sm md:text-base">
                            Temukan aroma khas Anda
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2} className="mt-16 overflow-x-auto pb-4 hide-scrollbar">
                        <div className="flex flex-nowrap md:flex-wrap gap-8 md:gap-12 w-max md:w-auto">
                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`font-sans tracking-widest uppercase text-xs transition-all duration-300 relative ${activeFilter === filter
                                        ? "text-brand-accent"
                                        : "text-brand-dark/50 hover:text-brand-dark"
                                        }`}
                                >
                                    {filter}
                                    {activeFilter === filter && (
                                        <motion.div
                                            layoutId="activeFilter"
                                            className="absolute -bottom-2 left-0 right-0 h-px bg-brand-accent"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-24 px-6 md:px-12 lg:px-24 min-h-[50vh]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12 lg:gap-x-16"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProducts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-32 text-brand-dark/50 font-sans tracking-widest uppercase text-sm"
                        >
                            Tidak ada produk ditemukan untuk koleksi ini.
                        </motion.div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
