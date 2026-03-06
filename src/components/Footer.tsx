import Link from "next/link";
import { Instagram, Music2, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-dark border-t border-brand-dark pt-24 pb-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="max-w-sm">
                    <Link href="/" className="font-serif text-4xl md:text-5xl font-bold tracking-widest text-brand-light block mb-6 outline-none">
                        ASLFRAG.
                    </Link>
                    <p className="text-brand-muted font-sans text-sm md:text-base leading-relaxed">
                        Wewangian mewah dirancang untuk mengekspresikan identitas, keanggunan, dan rasa percaya diri. Brutalis namun minimalis.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                    <div className="font-sans">
                        <h4 className="text-brand-light font-bold tracking-wider uppercase mb-6 text-sm">Navigasi</h4>
                        <ul className="space-y-4 text-sm tracking-wider text-brand-muted">
                            <li><Link href="/" className="hover:text-brand-light transition-colors block">Beranda</Link></li>
                            <li><Link href="/about" className="hover:text-brand-light transition-colors block">Tentang Kami</Link></li>
                            <li><Link href="/catalog" className="hover:text-brand-light transition-colors block">Katalog</Link></li>
                            <li><Link href="/contact" className="hover:text-brand-light transition-colors block">Kontak</Link></li>
                        </ul>
                    </div>

                    <div className="font-sans">
                        <h4 className="text-brand-light font-bold tracking-wider uppercase mb-6 text-sm">Sosial</h4>
                        <ul className="space-y-4 text-sm tracking-wider text-brand-muted">
                            <li>
                                <a href="#" className="flex items-center gap-3 hover:text-brand-light transition-colors">
                                    <Instagram className="w-4 h-4" /> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 hover:text-brand-light transition-colors">
                                    <Music2 className="w-4 h-4" /> TikTok
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 hover:text-brand-light transition-colors">
                                    <MessageCircle className="w-4 h-4" /> WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-brand-muted/20 flex flex-col md:flex-row justify-between items-center text-xs font-sans text-brand-muted/60 tracking-widest uppercase">
                <p>&copy; {new Date().getFullYear()} ASLFRAG. Semua hak dilindungi undang-undang.</p>
                <p className="mt-4 md:mt-0">Pengalaman Premium.</p>
            </div>
        </footer>
    );
}
