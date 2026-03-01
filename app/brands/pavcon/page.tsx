import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "PAVCON — Concrete Products by Premier Bars",
  description: "PAVCON: Vibro-Compact concrete pavers, blocks, kerb stones and EPS blocks. M40-M50 grade, IS certified.",
};

const PAVCON_PRODUCTS = [
  { name: "Solid Concrete Blocks", desc: "Load-bearing structural blocks, M40 grade, IS:2185 certified" },
  { name: "Hollow Concrete Blocks", desc: "Lightweight hollow units for partition walls and infill construction" },
  { name: "Concrete Pavers", desc: "60mm/80mm/100mm interlocking pavers in multiple patterns and colours" },
  { name: "Kerb Stones", desc: "Road-edge kerbs for highways, footpaths, and urban streetscaping" },
  { name: "Saucer Drains", desc: "Drainage channel units for roads, parks, and urban landscapes" },
  { name: "EPS Blocks", desc: "Expanded polystyrene blocks for lightweight sustainable construction" },
];

export default function PavconPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "Brands" }, { label: "PAVCON" }]} />
        <div className="mt-8 mb-16 bg-gradient-to-br from-[#2C2C2C] to-[#1A1A2E] border border-[#C9A84C]/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 steel-mesh-bg opacity-10" />
          <div className="relative">
            <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] block mb-3">Premier Brand</span>
            <h1 className="text-7xl font-extrabold text-white tracking-tighter mb-4">PAVCON</h1>
            <p className="text-[#C9A84C] text-2xl italic font-medium mb-6">Engineering the Ground Beneath Progress.</p>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-8">PAVCON is Premier Bars Limited&apos;s flagship concrete products brand — delivering precision-manufactured blocks, pavers, kerb stones, and EPS units using Vibro-Compact technology.</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/products/concrete-blocks-pavers" className="bg-[#C9A84C] text-[#1A1A2E] font-bold px-7 py-3 rounded-xl hover:bg-[#E8D48B] transition-colors">View Products →</Link>
            </div>
          </div>
        </div>
        <SectionHeading label="PAVCON Products" title="The Complete Concrete Range" light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PAVCON_PRODUCTS.map((p) => (
            <div key={p.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] text-xl mb-4">⬡</div>
              <h3 className="text-white font-bold mb-2">{p.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Vibro-Compact Technology", desc: "Fully automated manufacturing eliminates human variability. Every unit identical to spec." },
            { title: "M40–M50 Grade Concrete", desc: "High-strength concrete as per IS:15658:2006. Tested in AMIL-certified on-site lab." },
            { title: "Custom Colours & Patterns", desc: "Architectural-grade products for smart city, landscaping, and premium commercial applications." },
          ].map((f) => (
            <div key={f.title} className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-2xl p-6">
              <h4 className="text-[#C9A84C] font-bold mb-2">{f.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
