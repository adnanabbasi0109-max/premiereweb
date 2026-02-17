import type { ProductSpec } from "@/lib/products";

interface SpecTableProps { specs: ProductSpec[]; title?: string; }

export function SpecTable({ specs, title = "Technical Specifications" }: SpecTableProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-white/10">
        <h3 className="text-white font-bold text-lg">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <tbody>
            {specs.map((spec, i) => (
              <tr key={spec.property} className={`border-b border-white/5 ${i % 2 === 0 ? "" : "bg-white/2"}`}>
                <td className="px-6 py-4 text-white/60 text-sm font-medium w-1/2">{spec.property}</td>
                <td className="px-6 py-4 font-mono text-[#C9A84C] text-sm font-semibold">
                  {spec.value}
                  {spec.unit && <span className="text-white/40 ml-1">{spec.unit}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
