import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-36 md:pt-44 px-5 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-end">
          <AnimatedSection>
            <p className="text-[11px] uppercase tracking-[0.2em] text-brand-accent">About MODCAST</p>
            <h1 className="mt-3 font-serif text-brand-paper text-[clamp(3rem,9vw,8rem)] leading-[0.9]">
              BUILT BY
              <br />
              COLLECTORS,
              <br />
              FOR COLLECTORS.
            </h1>
            <p className="mt-6 max-w-xl text-sm md:text-base text-brand-ink/75 leading-relaxed">
              Kami memulai dari komunitas kecil penggemar model car. Sekarang kami berkembang jadi toko kurasi diecast
              dengan fokus pada kualitas casting, autentisitas, dan pengalaman belanja yang jelas.
            </p>
          </AnimatedSection>

          <AnimatedSection className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-brand-line">
            <Image src="/images/collection.png" alt="MODCAST garage" fill className="object-cover" />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Kurasi Ketat",
              body: "Setiap model dipilih berdasarkan reputasi brand, kualitas material, dan nilai koleksi jangka panjang.",
            },
            {
              title: "Deskripsi Transparan",
              body: "Kami menulis detail kondisi, skala, dan fitur agar kolektor tahu persis apa yang dibeli.",
            },
            {
              title: "Packing Aman",
              body: "Pengemasan berlapis dengan perlindungan display box untuk meminimalkan risiko selama pengiriman.",
            },
          ].map((item, index) => (
            <AnimatedSection
              key={item.title}
              delay={index * 0.06}
              className="rounded-2xl border border-brand-line bg-brand-card/75 p-6"
            >
              <h2 className="font-serif text-4xl text-brand-paper leading-none">{item.title}</h2>
              <p className="mt-3 text-sm text-brand-ink/70 leading-relaxed">{item.body}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="pb-20 px-5 md:px-10">
        <AnimatedSection className="max-w-7xl mx-auto rounded-[2rem] border border-brand-line bg-brand-card p-8 md:p-10 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-brand-accent">Roadmap 2026</p>
            <h2 className="mt-3 font-serif text-[clamp(2.3rem,6vw,5rem)] leading-[0.95] text-brand-paper">
              MORE LIMITED
              <br />
              DROPS, MORE
              <br />
              COLLABS.
            </h2>
            <p className="mt-4 text-sm text-brand-ink/70 leading-relaxed max-w-md">
              Kami sedang menambah lini pre-order, fitur wishlist, dan update stok real-time supaya proses berburu model
              favorit jadi makin nyaman.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-brand-line">
            <Image src="/images/detail_exterior.png" alt="Roadmap" fill className="object-cover" />
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
}
