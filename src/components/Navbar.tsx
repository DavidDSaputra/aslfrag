"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, ShoppingCart, X } from "lucide-react";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Diecast Collections" },
  { href: "/catalog", label: "Acrylic Collections" },
  { href: "/about", label: "Diecast Blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.2, 0.9, 0.2, 1] }}
      className={clsx(
        "fixed top-0 inset-x-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "bg-brand-dark/90 border-brand-line backdrop-blur-md"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-4xl tracking-wide text-brand-paper leading-none">
          MODCAST
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-brand-ink/80">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-signal transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            className="border border-brand-line rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-brand-ink/90 hover:border-brand-signal hover:text-brand-signal transition-colors"
          >
            Login
          </button>
          <button
            type="button"
            className="flex items-center gap-2 border border-brand-line rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-brand-paper hover:border-brand-accent transition-colors"
          >
            <ShoppingCart className="w-4 h-4" /> Cart(0)
          </button>
        </div>

        <button
          type="button"
          className="md:hidden text-brand-paper"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-5 pb-5 border-t border-brand-line bg-brand-card/95 backdrop-blur">
          <div className="flex flex-col gap-3 pt-4 text-sm uppercase tracking-[0.18em] text-brand-ink">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="py-2 hover:text-brand-signal transition-colors">
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              className="mt-2 w-full border border-brand-line rounded-full px-4 py-3 text-xs uppercase tracking-[0.2em] text-brand-paper"
            >
              Cart(0)
            </button>
          </div>
        </div>
      )}
    </motion.header>
  );
}
