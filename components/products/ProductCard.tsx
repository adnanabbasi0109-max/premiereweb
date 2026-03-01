"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { Badge } from "@/components/ui/Badge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
      <Link href={`/products/${product.slug}`} className="group block relative rounded-2xl overflow-hidden h-80 border border-white/10 hover:border-[#C9A84C]/50 transition-all duration-300">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/40 to-transparent" />
        {product.brand && <div className="absolute top-4 right-4"><Badge variant="gold">{product.brand}</Badge></div>}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-2">{product.category}</p>
          <h3 className="text-white text-xl font-bold mb-1">{product.name}</h3>
          <p className="text-white/50 text-sm mb-3 italic">{product.tagline}</p>
          <span className="inline-flex items-center gap-1.5 text-[#C9A84C] text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">Explore Product →</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </Link>
    </motion.div>
  );
}
