"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

type NoteType = "top" | "middle" | "base";

const notesData = {
    top: {
        title: "Kesan Pertama",
        description: "Citrus berkilau, lada merah muda yang tajam, dan bergamot segar. Aroma atas menguap dengan cepat namun meninggalkan kenangan yang cerah.",
        image: "/images/produk1.jpeg"
    },
    middle: {
        title: "Jantung Aroma",
        description: "Bunga putih yang kaya, kelopak mawar yang lembut, dan kapulaga pedas. Karakter sejati wewangian yang terungkap saat aroma atas memudar.",
        image: "/images/model2.jpeg"
    },
    base: {
        title: "Jiwa Wewangian",
        description: "Gaharu gelap, vanila berasap, dan musk berat. Aroma terakhir dan paling bertahan yang menemani Anda selama berjam-jam.",
        image: "/images/model3.jpeg"
    }
};

export default function FragranceNotes() {
    const [active, setActive] = useState<NoteType>("middle");

    return (
        <section className="py-32 bg-brand-light px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                <div className="w-full lg:w-1/2">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-6xl font-serif text-brand-dark mb-8 leading-tight">
                            Anatomi <br />Sebuah Wewangian.
                        </h2>

                        <div className="flex gap-4 md:gap-8 mb-12 border-b border-brand-muted/40 pb-4 overflow-x-auto">
                            {(["top", "middle", "base"] as const).map((note) => (
                                <button
                                    key={note}
                                    onClick={() => setActive(note)}
                                    className={`font-sans tracking-widest uppercase text-xs md:text-sm transition-colors duration-300 whitespace-nowrap ${active === note ? "text-brand-accent border-b border-brand-accent pb-4 -mb-[17px]" : "text-brand-dark/50 hover:text-brand-dark"
                                        }`}
                                >
                                    {note === "top" ? "Aroma Atas" : note === "middle" ? "Aroma Tengah" : "Aroma Dasar"}
                                </button>
                            ))}
                        </div>

                        <div className="min-h-[150px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-2xl font-serif text-brand-accent mb-4">{notesData[active].title}</h3>
                                    <p className="text-brand-dark/80 font-sans leading-relaxed text-lg">
                                        {notesData[active].description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </AnimatedSection>
                </div>

                <div className="w-full lg:w-1/2">
                    <AnimatedSection className="relative aspect-square w-full max-w-lg mx-auto bg-brand-white overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={active}
                                src={notesData[active].image}
                                alt={`${active} notes`}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
