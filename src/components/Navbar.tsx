"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={clsx(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-brand-light/90 backdrop-blur-md border-brand-accent/20 py-4"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link href="/" className="font-serif text-2xl font-bold tracking-widest text-brand-dark">
                    ASLFRAG
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-sans font-medium">
                    <Link href="/" className="hover:text-brand-accent transition-colors duration-300">
                        Beranda
                    </Link>
                    <Link href="/about" className="hover:text-brand-accent transition-colors duration-300">
                        Tentang
                    </Link>
                    <Link href="/catalog" className="hover:text-brand-accent transition-colors duration-300">
                        Katalog
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    <button className="text-brand-dark hover:text-brand-accent transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                    </button>
                </div>

                {/* Mobile menu toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-brand-dark focus:outline-none"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-brand-light border-base border-brand-accent/20 px-6 py-4 flex flex-col space-y-4 text-center mt-4"
                >
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-brand-accent text-sm tracking-widest font-sans uppercase">Beranda</Link>
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-brand-accent text-sm tracking-widest font-sans uppercase">Tentang</Link>
                    <Link href="/catalog" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-brand-accent text-sm tracking-widest font-sans uppercase">Katalog</Link>
                    <div className="py-2 flex justify-center">
                        <button className="flex items-center space-x-2 text-brand-dark hover:text-brand-accent transition-colors">
                            <ShoppingBag className="w-5 h-5" />
                            <span className="text-sm tracking-widest uppercase">Keranjang (0)</span>
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
