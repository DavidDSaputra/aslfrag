"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = ["Diecast Collections", "Acrylic Collections", "Diecast Blog"];

const highlights = [
  {
    title: "Tentang arti nomor 23 pada livery mobil modifikasi Liberty Walk",
    date: "06 Maret 2024",
    image: "/images/model1.jpeg",
  },
  {
    title: "Fakta tentang dunia mobil yang diketahui setelah bermain diecast",
    date: "02 Maret 2024",
    image: "/images/model4.jpeg",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20 px-5 md:px-10">
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.01)_0px,rgba(255,255,255,0.01)_92px,transparent_92px,transparent_186px)]" />
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-brand-card/60 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <AnimatedSection className="flex items-center justify-between gap-6">
          <div className="h-16 w-16 rounded-full bg-red-600 flex items-center justify-center font-serif text-brand-paper text-4xl leading-none">
            A
          </div>
          <div className="hidden lg:flex items-center gap-12 text-brand-paper text-[11px] uppercase tracking-[0.16em]">
            {navItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </AnimatedSection>

        <div className="mt-7 h-[5px] bg-brand-paper/95" />
        <div className="mt-4 h-px bg-brand-paper/40" />

        <AnimatedSection delay={0.1}>
          <h1 className="mt-6 font-serif italic text-brand-paper leading-[0.9] text-[clamp(3rem,12vw,13rem)] tracking-[0.02em]">
            MODCAST
          </h1>
        </AnimatedSection>

        <div className="mt-5 h-px bg-brand-paper/25" />

        <div className="mt-10 grid lg:grid-cols-[1.2fr_0.9fr] gap-8 items-start">
          <AnimatedSection className="relative aspect-[4/3] overflow-hidden border border-brand-line">
            <Image src="/images/section.jpeg" alt="MODCAST hero" fill priority className="object-cover" />
          </AnimatedSection>

          <div className="space-y-7">
            {highlights.map((item, index) => (
              <AnimatedSection key={item.title} delay={0.15 + index * 0.08} className="border-b border-brand-line/80 pb-7">
                <div className="grid grid-cols-[148px_1fr] gap-4">
                  <div className="relative aspect-[16/10] overflow-hidden border border-brand-line">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl text-brand-paper leading-tight">{item.title}</h2>
                    <p className="mt-4 text-brand-ink/55 text-sm">{item.date}</p>
                    <Link
                      href="/catalog"
                      className="mt-4 inline-block text-[11px] uppercase tracking-[0.2em] text-brand-accent hover:text-brand-signal transition-colors"
                    >
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.35 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/catalog"
                className="rounded-full bg-brand-signal text-brand-dark px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-orange-400 transition-colors"
              >
                Lihat Katalog
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-brand-line text-brand-paper px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] hover:border-brand-accent hover:text-brand-accent transition-colors"
              >
                Tentang MODCAST
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
