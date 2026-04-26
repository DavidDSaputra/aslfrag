import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/catalog/${product.id}`} className="group block w-full relative bg-brand-dark overflow-hidden">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-light/95 via-brand-light/20 to-transparent" />
      </div>

      {/* Info Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-5 flex justify-between items-end font-sans z-10">
        <div>
          <h3 className="font-bold text-brand-white text-base md:text-lg uppercase tracking-wider mb-1 drop-shadow-md">
            {product.name}
          </h3>
          <p className="text-brand-muted text-[11px] md:text-xs uppercase tracking-[0.15em]">
            SKALA {product.scale} • {product.category}
          </p>
        </div>
        
        <div className="text-right flex flex-col items-end">
          <p className="text-[9px] text-brand-muted uppercase tracking-[0.2em] mb-0.5">BRAND</p>
          <p className="text-brand-white text-[10px] md:text-xs uppercase tracking-widest font-semibold">{product.features[0]}</p>
        </div>
      </div>
    </Link>
  );
}