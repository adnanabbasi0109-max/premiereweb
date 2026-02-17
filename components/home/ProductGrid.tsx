"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/animations";

export function ProductGrid() {
  return (
    <section className="py-24 bg-[#1A1A2E]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Our Products"
          title="Built for Every Dimension of Infrastructure"
          subtitle="Six product verticals. One trusted partner. Engineered for India's most demanding projects."
          light
        />
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PRODUCTS.map((product) => (
            <motion.div key={product.id} variants={STAGGER_ITEM} whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
              <Link
                href={`/products/${product.slug}`}
                className="group block relative rounded-2xl overflow-hidden h-72 border border-white/10 hover:border-[#C9A84C]/50 transition-all duration-300"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/40 to-transparent" />
                {product.brand && (
                  <div className="absolute top-4 right-4 bg-[#C9A84C] text-[#1A1A2E] font-bold text-xs px-2 py-1 rounded">
                    {product.brand}
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-2">{product.category}</p>
                  <h3 className="text-white text-xl font-bold mb-2 leading-tight">{product.name}</h3>
                  <p className="text-white/50 text-sm mb-3 italic">{product.tagline}</p>
                  <span className="inline-flex items-center gap-1.5 text-[#C9A84C] text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore Product →
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <Link href="/products" className="inline-flex items-center gap-2 border-2 border-[#C9A84C]/40 text-[#C9A84C] font-semibold px-8 py-3 rounded-xl hover:bg-[#C9A84C] hover:text-[#1A1A2E] transition-all duration-300">
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}
