import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

export default function About() {
    return (
        <main className="bg-brand-light min-h-screen text-brand-dark selection:bg-brand-accent selection:text-brand-light overflow-x-hidden">
            <Navbar />

            {/* Hero */}
            <section className="pt-48 pb-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto text-center">
                    <AnimatedSection delay={0.1}>
                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif mb-8 tracking-widest leading-none">
                            DI BALIK <br /> BOTOL.
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection delay={0.3}>
                        <p className="font-sans text-brand-dark/80 text-lg md:text-xl font-light uppercase tracking-[0.2em]">
                            Kisah ASLFRAG
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Parallax Image */}
            <section className="py-24">
                <div className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
                    <AnimatedSection className="w-full h-full">
                        <Image
                            src="/images/section1.jpeg"
                            alt="Cerita Brand"
                            fill
                            className="object-cover mix-blend-luminosity opacity-80"
                        />
                    </AnimatedSection>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-brand-white text-brand-dark">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
                    <div className="w-full md:w-1/3">
                        <AnimatedSection>
                            <h2 className="text-4xl md:text-6xl font-serif tracking-tight leading-tight sticky top-32">
                                Filosofi Kami
                            </h2>
                        </AnimatedSection>
                    </div>
                    <div className="w-full md:w-2/3 space-y-12 font-sans text-xl md:text-2xl font-light leading-relaxed text-brand-dark/70">
                        <AnimatedSection>
                            <p>
                                Di ASLFRAG, kami tidak sekadar mencampur bahan; kami menyusun lanskap emosional. Didirikan berdasarkan prinsip minimalisme dan keberanian tanpa kompromi, wewangian kami dirancang sebagai perpanjangan dari identitas Anda.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection>
                            <p>
                                Kami menyingkirkan yang tidak perlu. Di industri yang terobsesi dengan kebisingan, kami menemukan kekuatan dalam keheningan. Setiap nada dalam parfum kami memiliki tujuan yang jelas, menciptakan struktur arsitektur brutalis dari aroma.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Craftsmanship */}
            <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-brand-dark/20 bg-brand-dark text-brand-light">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection>
                        <h2 className="text-5xl md:text-7xl font-serif text-center mb-32 tracking-wider">
                            Keahlian Tangan
                        </h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">
                        <AnimatedSection className="order-2 md:order-1 font-sans text-lg md:text-xl text-brand-muted leading-relaxed font-light space-y-12">
                            <p>
                                Bahan-bahan kami bersumber dari lokasi paling terpencil dan murni. Dari hutan gaharu di Asia Tenggara hingga ladang mawar di Grasse, kami tidak menerima apa pun selain puncak kualitas tertinggi.
                            </p>
                            <p>
                                Setiap botol dituang dengan tangan, disegel dengan niat, dan dibiarkan bercampur hingga formula mencapai keseimbangan sempurna. Hasilnya bukan produksi massal, melainkan buatan tangan yang teliti.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection className="order-1 md:order-2 relative aspect-[3/4] w-full max-w-md mx-auto">
                            <Image
                                src="/images/model4.jpeg"
                                alt="Keahlian Tangan"
                                fill
                                className="object-cover"
                            />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
