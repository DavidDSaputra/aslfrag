"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProductCard from "./ProductCard";
import { Product } from "@/data/products";

export default function ProductCarousel({ products }: { products: Product[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current || !scrollRef.current) return;

    const slider = scrollRef.current;

    const getScrollAmount = () => Math.max(0, slider.scrollWidth - window.innerWidth);

    const ctx = gsap.context(() => {
      gsap.to(slider, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="overflow-hidden w-full h-screen flex flex-col justify-center relative border-y border-brand-line bg-brand-dark"
    >
      <div className="px-5 md:px-10 absolute top-24 md:top-20 w-full z-10 pointer-events-none">
        <p className="text-[11px] uppercase tracking-[0.2em] text-brand-accent">Horizontal Showcase</p>
        <h2 className="mt-3 font-serif text-brand-paper text-[clamp(2.2rem,6vw,5rem)] leading-none tracking-wide">
          Fast-Moving Collectibles
        </h2>
      </div>

      <div ref={scrollRef} className="flex gap-8 md:gap-14 px-5 md:px-10 pt-[28vh] md:pt-[34vh] w-fit">
        {products.slice(0, 6).map((product) => (
          <div key={product.id} className="w-[78vw] md:w-[38vw] lg:w-[28vw] shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}