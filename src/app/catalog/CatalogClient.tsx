"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";
// Import interface but not the data
import { Product } from "@/data/products";

const filters = ["All", "JDM", "Muscle", "Exotic", "Classic", "1:64", "1:43", "1:18"];

export default function CatalogClient({ initialProducts }: { initialProducts: Product[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      if (activeFilter === "All") return true;
      if (["JDM", "Muscle", "Exotic", "Classic"].includes(activeFilter)) {
        return product.category === activeFilter;
      }
      return product.scale === activeFilter;
    });
  }, [activeFilter, initialProducts]);

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-36 md:pt-44 pb-10 px-5 md:px-10 border-b border-brand-line">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-[11px] uppercase tracking-[0.2em] text-brand-accent">Live Inventory</p>
            <h1 className="mt-3 font-serif text-brand-paper text-[clamp(2.7rem,8vw,7rem)] leading-[0.9]">
              DIECAST
              <br />
              CATALOG
            </h1>
            <p className="mt-4 text-sm text-brand-ink/70 max-w-lg">
              Filter berdasarkan kategori atau skala untuk menemukan model yang pas dengan display setup kamu.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-8 overflow-x-auto pb-3">
            <div className="flex gap-3 w-max">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.18em] border transition-colors ${
                    activeFilter === filter
                      ? "border-brand-signal bg-brand-signal text-brand-dark"
                      : "border-brand-line text-brand-ink/75 hover:border-brand-accent"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-5 md:px-10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 border-y border-white/5">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.24 }}
                  className="bg-brand-light"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <p className="text-center py-20 text-sm uppercase tracking-[0.2em] text-brand-ink/60">
              No products found for this filter.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}