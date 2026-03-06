import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Link href={`/catalog/${product.id}`} className="group block w-full">
            <div className="relative aspect-[3/4] overflow-hidden bg-brand-white mb-6">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex justify-between items-start font-sans">
                <div>
                    <h3 className="text-xl md:text-2xl font-serif text-brand-dark mb-2 group-hover:text-brand-accent transition-colors">{product.name}</h3>
                    <p className="text-xs md:text-sm text-brand-dark/60 uppercase tracking-widest">{product.notes.join(" • ")}</p>
                </div>
                <p className="text-brand-dark text-lg">${product.price}</p>
            </div>
        </Link>
    );
}
