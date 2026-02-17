"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function ProductsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Products" }]} />
        <SectionHeading
          label="Our Products"
          title="Six Verticals. One Partner."
          subtitle="From flagship TMT Bars to smart city poles — every product engineered to Premier's uncompromising standards."
          light
          className="mt-8"
        />
        <div className="flex flex-wrap gap-2 mb-12">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? "bg-[#C9A84C] text-[#1A1A2E]"
                  : "bg-white/5 border border-white/20 text-white/60 hover:text-white hover:border-white/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20"
        >
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </motion.div>
      </div>
    </main>
  );
}
