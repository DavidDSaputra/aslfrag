import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "Packing aman, pengiriman cepat, dan model yang datang persis seperti preview. Detail casting-nya rapih banget.",
    author: "Rizky M.",
    role: "Collector - Bandung",
  },
  {
    quote:
      "Aku cari edisi JDM sulit, dan akhirnya nemu di sini. Kurasi produknya terasa dibuat oleh sesama kolektor.",
    author: "Nadira F.",
    role: "Hobbyist - Jakarta",
  },
  {
    quote:
      "Halaman katalog jelas, filter skala membantu, dan kondisi barang sesuai deskripsi. Recommended untuk display serious.",
    author: "Andre S.",
    role: "Model Builder - Surabaya",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="font-serif text-center text-brand-paper text-[clamp(2.4rem,6vw,5rem)] leading-none">
            COLLECTOR NOTES
          </h2>
        </AnimatedSection>

        <div className="mt-10 grid md:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((item, index) => (
            <AnimatedSection
              key={item.author}
              delay={index * 0.08}
              className="rounded-2xl border border-brand-line bg-brand-card/80 p-6"
            >
              <p className="text-sm md:text-base text-brand-ink/85 leading-relaxed">&quot;{item.quote}&quot;</p>
              <div className="mt-8">
                <p className="font-semibold text-brand-paper">{item.author}</p>
                <p className="text-[11px] uppercase tracking-[0.15em] text-brand-ink/55 mt-1">{item.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}