"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SLIDE_IN_LEFT, SLIDE_IN_RIGHT } from "@/lib/animations";

const BRANDS = [
  {
    id: "pavcon",
    name: "PAVCON",
    tagline: "Engineering the Ground Beneath Progress.",
    description:
      "Premier's flagship concrete products brand. From vibro-compacted pavers to EPS sustainable blocks — PAVCON defines the standard for modern concrete construction in India.",
    href: "/brands/pavcon",
    gradient: "from-[#2C2C2C] to-[#1A1A2E]",
    icon: "⬡",
    features: ["Vibro-Compact Technology", "M40–M50 Grade", "AMIL-Certified", "Custom Colours"],
    variants: SLIDE_IN_LEFT,
  },
  {
    id: "polmax",
    name: "POLMAX",
    tagline: "Precision, Elevated.",
    description:
      "Premier's engineering brand for poles, towers, and structural steel. CNC-precision, hot-dip galvanized, and built to last 20+ years in India's toughest urban environments.",
    href: "/brands/polmax",
    gradient: "from-[#0D1B2A] to-[#16325B]",
    icon: "▲",
    features: ["CNC Plasma Cutting", "SAW Welding", "Hot-Dip Galvanized", "Smart City Ready"],
    variants: SLIDE_IN_RIGHT,
  },
] as const;

export function SubBrandsFeature() {
  return (
    <section className="py-24 bg-[#F5F3F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.2em]">Our Brands</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-[#1A1A2E] tracking-tight">Meet the Sub-Brands</h2>
          <div className="w-16 h-1 bg-[#C9A84C] rounded-full mx-auto mt-4" />
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {BRANDS.map((brand) => (
            <motion.div
              key={brand.id}
              variants={brand.variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${brand.gradient} p-10 text-white group`}
            >
              <div className="absolute inset-0 steel-mesh-bg opacity-10" />
              <div className="relative z-10">
                <div className="text-5xl opacity-30 mb-4 font-mono">{brand.icon}</div>
                <div className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] mb-2">Premier Brand</div>
                <h3 className="text-4xl font-extrabold tracking-tighter mb-3">{brand.name}</h3>
                <p className="text-[#C9A84C] italic text-lg font-medium mb-5">{brand.tagline}</p>
                <p className="text-white/60 leading-relaxed mb-8 max-w-sm">{brand.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {brand.features.map((f) => (
                    <span key={f} className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full font-medium">{f}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <Link href={brand.href} className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1A1A2E] font-bold px-6 py-3 rounded-xl hover:bg-[#E8D48B] transition-colors text-sm">
                    Discover {brand.name} →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
