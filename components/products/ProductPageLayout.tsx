import type { Product } from "@/lib/products";
import { ProductHero } from "./ProductHero";
import { SpecTable } from "./SpecTable";
import { EnquiryForm } from "./EnquiryForm";
import { CostCalculator } from "./CostCalculator";
import { PRODUCTS } from "@/lib/products";
import Link from "next/link";

export function ProductPageLayout({ product }: { product: Product }) {
  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main>
      <ProductHero product={product} />
      <div className="bg-[#1A1A2E] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
                <p className="text-white/70 text-lg leading-relaxed">{product.description}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Key Highlights</h2>
                <ul className="space-y-3">
                  {product.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <span className="text-[#C9A84C] mt-1 flex-shrink-0">✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Technical Specifications</h2>
                <SpecTable specs={product.specs} />
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Applications</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.applications.map((app) => (
                    <div key={app} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                      <span className="text-[#C9A84C]">◈</span>
                      <span className="text-white/70 text-sm">{app}</span>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Certifications & Standards</h2>
                <div className="flex flex-wrap gap-3">
                  {product.certifications.map((c) => (
                    <span key={c} className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] font-mono text-sm px-4 py-2 rounded-lg">{c}</span>
                  ))}
                </div>
              </section>
            </div>
            <div className="space-y-8">
              <EnquiryForm productName={product.name} />
              {product.id === "tmt-bars" && <CostCalculator />}
            </div>
          </div>
          <div className="mt-24 pt-12 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`} className="group block rounded-2xl overflow-hidden h-52 relative border border-white/10 hover:border-[#C9A84C]/40 transition-all" style={{ background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})` }}>
                  <div className="absolute inset-0 steel-mesh-bg opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 p-5">
                    <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-1">{p.category}</p>
                    <h3 className="text-white font-bold">{p.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
