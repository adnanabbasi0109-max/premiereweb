import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "TMT Bar Monthly Prices | Premier Bars Limited",
  description: "Current TMT bar prices for Fe415, Fe500D, and Fe550D grades — 8mm to 32mm sizes. Jaipur ex-plant rates.",
};

const SIZES = ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm", "32mm"];

const PRICES: Record<string, Record<string, number>> = {
  "8mm":  { Fe415: 57200, Fe500D: 58800, Fe550D: 60400 },
  "10mm": { Fe415: 56800, Fe500D: 58400, Fe550D: 60000 },
  "12mm": { Fe415: 56500, Fe500D: 58100, Fe550D: 59700 },
  "16mm": { Fe415: 56200, Fe500D: 57800, Fe550D: 59400 },
  "20mm": { Fe415: 56000, Fe500D: 57600, Fe550D: 59200 },
  "25mm": { Fe415: 55800, Fe500D: 57400, Fe550D: 59000 },
  "32mm": { Fe415: 55600, Fe500D: 57200, Fe550D: 58800 },
};

function fmt(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function MonthlyPricesPage() {
  const currentMonth = new Date().toLocaleString("en-IN", { month: "long", year: "numeric" });

  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "Monthly Prices" }]} />
        <SectionHeading label="Pricing" title="TMT Bar Price List" light className="mt-8" />

        <div className="flex flex-wrap items-center gap-4 mt-6 mb-10">
          <span className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-sm font-semibold px-4 py-2 rounded-xl">
            Effective: {currentMonth}
          </span>
          <span className="text-white/40 text-sm">Ex-plant, Jaipur · Per metric tonne (MT) · Exclusive of GST &amp; freight</span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="text-left text-white/50 font-semibold px-6 py-4">Size</th>
                <th className="text-right text-white/50 font-semibold px-6 py-4">Fe415 (per MT)</th>
                <th className="text-right text-white/50 font-semibold px-6 py-4">Fe500D (per MT)</th>
                <th className="text-right text-[#C9A84C] font-semibold px-6 py-4">Fe550D (per MT)</th>
              </tr>
            </thead>
            <tbody>
              {SIZES.map((size, i) => (
                <tr key={size} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                  <td className="px-6 py-4 text-white font-mono font-bold">{size}</td>
                  <td className="px-6 py-4 text-white/70 text-right font-mono">{fmt(PRICES[size].Fe415)}</td>
                  <td className="px-6 py-4 text-white/70 text-right font-mono">{fmt(PRICES[size]["Fe500D"])}</td>
                  <td className="px-6 py-4 text-[#C9A84C] text-right font-mono font-semibold">{fmt(PRICES[size].Fe550D)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Pricing Notes</h4>
            <ul className="space-y-1.5 text-white/40 text-xs">
              <li>• All prices in Indian Rupees (₹) per metric tonne</li>
              <li>• Prices are ex-plant from Bagru Extension, Jaipur</li>
              <li>• GST @ 18% applicable on all supply</li>
              <li>• Freight to be added based on delivery point</li>
              <li>• Prices subject to change without prior notice</li>
            </ul>
          </div>
          <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-xl p-5">
            <h4 className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-2">Get a Firm Quote</h4>
            <p className="text-white/50 text-xs mb-3">For bulk orders, long-term supply agreements, or project-specific pricing, contact our sales desk.</p>
            <a href="/contact" className="inline-block bg-[#C9A84C] text-[#1A1A2E] font-bold text-xs px-4 py-2 rounded-lg hover:bg-[#E8D48B] transition-colors">
              Request Quote →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
