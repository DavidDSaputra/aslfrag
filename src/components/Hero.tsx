"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Parallax Image */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: backgroundY }}
            >
                <Image
                    src="/images/section.jpeg"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-30 mix-blend-luminosity"
                    priority
                />
            </motion.div>

            {/* Floating Bottle Animation */}
            <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: [-20, 20, -20], opacity: 1 }}
                transition={{
                    y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                    opacity: { duration: 1, delay: 0.8 }
                }}
                className="absolute right-10 md:right-32 top-1/2 -translate-y-1/2 w-48 md:w-80 h-96 z-10 hidden lg:block"
            >
                <Image
                    src="/images/produk1.jpeg"
                    alt="Floating Bottle"
                    fill
                    className="object-contain drop-shadow-lg"
                />
            </motion.div>

            {/* Hero Content */}
            <motion.div
                style={{ y: textY }}
                className="relative z-20 text-center px-6 max-w-4xl flex flex-col items-center mt-24 lg:mt-0"
            >
                <AnimatedSection delay={0.2}>
                    <h1 className="text-5xl md:text-8xl font-serif text-brand-accent tracking-widest leading-none mb-6">
                        ASLFRAG.
                    </h1>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                    <p className="text-base md:text-xl font-sans text-brand-dark/80 max-w-xl font-light mb-12 uppercase tracking-widest">
                        Temukan Aroma Khas Anda. Wewangian mewah dirancang untuk mengekspresikan identitas, keanggunan, dan rasa percaya diri.
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.6}>
                    <Link
                        href="/catalog"
                        className="inline-block bg-brand-accent text-brand-light px-12 py-4 font-sans tracking-[0.2em] text-xs uppercase hover:bg-brand-dark hover:text-brand-light transition-all duration-500 shadow-xl"
                    >
                        Jelajahi Koleksi
                    </Link>
                </AnimatedSection>
            </motion.div>
        </section>
    );
}
