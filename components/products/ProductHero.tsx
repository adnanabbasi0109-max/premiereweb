import type { Product } from "@/lib/products";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export function ProductHero({ product }: { product: Product }) {
  return (
    <section className="relative min-h-[50vh] flex flex-col justify-end pb-16 pt-40 overflow-hidden" style={{ background: `linear-gradient(135deg, ${product.gradientFrom} 0%, ${product.gradientTo} 100%)` }}>
      <div className="absolute inset-0 steel-mesh-bg opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <Breadcrumbs items={[{ label: "Products", href: "/products" }, { label: product.name }]} />
        <div className="flex flex-wrap items-end justify-between gap-4 mt-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="gold">{product.category}</Badge>
              {product.brand && <Badge variant="steel">{product.brand}</Badge>}
              {product.arEnabled && <Badge variant="success">AR Ready</Badge>}
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-3">{product.name}</h1>
            <p className="text-[#C9A84C] text-xl font-medium italic">{product.tagline}</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            {product.arEnabled && (
              <a href={product.id === "concrete-blocks-pavers" ? "/ar/pavcon" : "/ar/polmax"} className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1A1A2E] font-bold px-6 py-3 rounded-xl hover:bg-[#E8D48B] transition-colors">
                ◈ View in AR
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
