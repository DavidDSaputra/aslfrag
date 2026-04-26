import Link from "next/link";
import { Instagram, MessageCircle, Youtube } from "lucide-react";

const menu = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Catalog" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-line px-5 md:px-10 pt-14 pb-10 bg-brand-dark/95">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <Link href="/" className="font-serif text-5xl leading-none text-brand-paper tracking-wide">
            MODCAST
          </Link>
          <p className="mt-4 text-sm text-brand-ink/65 leading-relaxed max-w-xs">
            Marketplace diecast untuk kolektor yang suka detail, keaslian, dan lini mobil ikonik lintas generasi.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand-accent">Navigation</p>
          <div className="mt-4 flex flex-col gap-3 text-sm uppercase tracking-[0.16em] text-brand-ink/80">
            {menu.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-brand-signal transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand-accent">Community</p>
          <div className="mt-4 flex gap-3">
            {[Instagram, Youtube, MessageCircle].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="h-10 w-10 rounded-full border border-brand-line flex items-center justify-center text-brand-ink/80 hover:text-brand-signal hover:border-brand-signal transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-brand-ink/65">support@modcast.com</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-brand-line flex flex-col md:flex-row justify-between gap-2 text-[11px] uppercase tracking-[0.17em] text-brand-ink/50">
        <p>{new Date().getFullYear()} MODCAST. All Rights Reserved.</p>
        <p>Built For Collectors.</p>
      </div>
    </footer>
  );
}
