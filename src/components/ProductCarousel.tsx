"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ProductCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (!containerRef.current || !scrollRef.current) return;

        const slider = scrollRef.current;

        const getScrollAmount = () => {
            return slider.scrollWidth - window.innerWidth;
        };

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
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="overflow-hidden bg-brand-dark w-full h-screen flex flex-col justify-center relative border-y border-brand-dark">
            <div className="px-6 md:px-12 lg:px-24 mb-16 absolute top-32 w-full z-10 pointer-events-none">
                <h2 className="text-5xl md:text-7xl font-serif text-brand-light uppercase tracking-wider">Produk Terlaris</h2>
                <p className="mt-4 text-brand-muted font-sans tracking-widest uppercase text-sm">Sangat diidamkan</p>
            </div>

            <div ref={scrollRef} className="flex gap-16 md:gap-24 px-6 md:px-12 lg:px-24 pt-[30vh] w-fit">
                {products.slice(0, 5).map((product) => (
                    <div key={product.id} className="w-[80vw] md:w-[40vw] lg:w-[25vw] shrink-0">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}
