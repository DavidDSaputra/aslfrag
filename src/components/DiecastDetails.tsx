"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

type FeatureType = "exterior" | "interior" | "engineering";

const detailsData = {
  exterior: {
    title: "Eksterior Akurat",
    description:
      "Proporsi bodi, sudut panel, dan detail lampu disusun untuk meniru versi asli mobilnya. Finishing cat dibuat multi-layer agar tampil realistis di display rack.",
    image: "/images/detail_exterior.png",
  },
  interior: {
    title: "Interior Mini Premium",
    description:
      "Dashboard, setir, jok, hingga cluster instrumen ditata presisi. Pada beberapa model, pintu dan kap dapat dibuka untuk menampilkan detail kabin secara utuh.",
    image: "/images/detail_interior.png",
  },
  engineering: {
    title: "Sasis Dan Mesin",
    description:
      "Chassis detail, underbody line, dan mesin mini ditampilkan dengan toleransi rapat. Kelas high-end kami menghadirkan part bergerak untuk pengalaman koleksi lebih hidup.",
    image: "/images/detail_engine.png",
  },
};

export default function DiecastDetails() {
  const [active, setActive] = useState<FeatureType>("interior");

  return (
    <section className="py-20 md:py-28 px-5 md:px-10">
      <div className="max-w-7xl mx-auto rounded-[2rem] border border-brand-line bg-brand-card/75 p-6 md:p-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <AnimatedSection>
            <p className="text-[11px] uppercase tracking-[0.2em] text-brand-accent">Collector Focused Build</p>
            <h2 className="mt-3 font-serif text-[clamp(2.3rem,6vw,5.5rem)] leading-[0.92] text-brand-paper">
              WHY OUR
              <br />
              DIECAST FEELS
              <br />
              DIFFERENT
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-3">
              {(["exterior", "interior", "engineering"] as const).map((feature) => (
                <button
                  key={feature}
                  onClick={() => setActive(feature)}
                  className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.17em] border transition-colors ${
                    active === feature
                      ? "bg-brand-signal text-brand-dark border-brand-signal"
                      : "border-brand-line text-brand-ink/80 hover:border-brand-accent"
                  }`}
                >
                  {feature}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="mt-8 min-h-[170px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="font-serif text-4xl text-brand-paper leading-none">{detailsData[active].title}</h3>
                <p className="mt-4 text-sm md:text-base text-brand-ink/75 leading-relaxed max-w-xl">
                  {detailsData[active].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <AnimatedSection className="relative aspect-square rounded-3xl overflow-hidden border border-brand-line">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={detailsData[active].image}
              alt={`${active} detail`}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </AnimatedSection>
      </div>
    </section>
  );
}