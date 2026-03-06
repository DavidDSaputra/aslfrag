import AnimatedSection from "./AnimatedSection";

const testimonials = [
    {
        quote: "ASLFRAG tidak hanya membuat parfum; mereka menciptakan pengalaman. Noir Absolute telah menjadi aroma khas saya selama dua tahun.",
        author: "Elena R.",
        role: "Direktur Kreatif"
    },
    {
        quote: "Kompleksitas Lumière tak tertandingi. Berubah sepanjang hari, selalu mengungkapkan sesuatu yang baru.",
        author: "James M.",
        role: "Arsitek"
    },
    {
        quote: "Presentasi yang memukau dan wewangian yang lebih memukau lagi. Pendekatan brutalis pada kemasan sangat cocok dengan aroma yang berani.",
        author: "Sophia K.",
        role: "Editor Mode"
    }
];

export default function Testimonials() {
    return (
        <section className="py-32 px-6 md:px-12 bg-brand-muted/20 border-t border-brand-accent/10">
            <div className="max-w-7xl mx-auto">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-5xl font-serif text-brand-dark text-center mb-24">
                        Kata Mereka Tentang Kami
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {testimonials.map((item, i) => (
                        <AnimatedSection key={i} delay={i * 0.2} className="border-l border-brand-accent/30 pl-8 font-sans">
                            <p className="text-brand-dark text-lg md:text-xl font-light italic mb-8 leading-relaxed">
                                &quot;{item.quote}&quot;
                            </p>
                            <div>
                                <p className="font-bold text-sm tracking-widest uppercase">{item.author}</p>
                                <p className="text-brand-dark/60 text-xs tracking-widest uppercase mt-1">{item.role}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
