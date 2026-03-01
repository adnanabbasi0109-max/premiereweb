import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "POLMAX — Poles & Towers by Premier Bars",
  description: "POLMAX: CNC plasma cut poles and towers. Octagonal, conical, tubular, high-mast. Hot-dip galvanized.",
};

const POLMAX_PRODUCTS = [
  { name: "Decorative Urban Poles", desc: "Aesthetic smart city poles with custom profiles for premium streetscaping" },
  { name: "Octagonal Street Light Poles", desc: "High-tensile octagonal poles for highways, urban roads, and campuses" },
  { name: "Conical Poles", desc: "Tapered conical profiles for a sleek, modern aesthetic with structural strength" },
  { name: "High-Mast Poles", desc: "45m+ high-mast systems for stadiums, airports, and industrial areas" },
  { name: "Tubular Poles", desc: "Circular cross-section poles for standard street lighting applications" },
  { name: "Telecom Lattice Towers", desc: "4G/5G ready lattice towers deployed for Indus Towers and Airtel" },
];

export default function PolmaxPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "Brands" }, { label: "POLMAX" }]} />
        <div className="mt-8 mb-16 bg-gradient-to-br from-[#0D1B2A] to-[#16325B] border border-[#C9A84C]/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 steel-mesh-bg opacity-10" />
          <div className="relative">
            <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.3em] block mb-3">Premier Brand</span>
            <h1 className="text-7xl font-extrabold text-white tracking-tighter mb-4">POLMAX</h1>
            <p className="text-[#C9A84C] text-2xl italic font-medium mb-6">Precision, Elevated.</p>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-8">POLMAX is Premier Bars Limited&apos;s engineering brand for high-performance poles and towers. CNC plasma-cut profiles, SAW welding, and hot-dip galvanization ensure 20+ years of service life.</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/products/tubular-decorative-poles" className="bg-[#C9A84C] text-[#1A1A2E] font-bold px-7 py-3 rounded-xl hover:bg-[#E8D48B] transition-colors">View Products →</Link>
            </div>
          </div>
        </div>
        <SectionHeading label="POLMAX Products" title="Engineered for Every Height" light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {POLMAX_PRODUCTS.map((p) => (
            <div key={p.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] text-xl mb-4">▲</div>
              <h3 className="text-white font-bold mb-2">{p.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "CNC Plasma Cutting", desc: "Computer-controlled plasma cutting ensures perfect profile geometry every time." },
            { title: "SAW Welding", desc: "Submerged arc welding delivers full-penetration welds with zero porosity." },
            { title: "Hot-Dip Galvanizing", desc: "85 micron minimum zinc coating provides 20+ years of corrosion protection." },
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
