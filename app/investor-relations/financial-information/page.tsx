import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Financial Information | Premier Bars Limited",
  description: "Financial highlights and annual performance summary of Premier Bars Limited.",
};

const ANNUAL_DATA = [
  { year: "FY 2024-25", revenue: "₹562 Cr", ebitda: "₹58 Cr", pat: "₹31 Cr", capacity: "150,000 MT" },
  { year: "FY 2023-24", revenue: "₹489 Cr", ebitda: "₹51 Cr", pat: "₹26 Cr", capacity: "120,000 MT" },
  { year: "FY 2022-23", revenue: "₹421 Cr", ebitda: "₹43 Cr", pat: "₹21 Cr", capacity: "120,000 MT" },
  { year: "FY 2021-22", revenue: "₹348 Cr", ebitda: "₹36 Cr", pat: "₹17 Cr", capacity: "100,000 MT" },
  { year: "FY 2020-21", revenue: "₹272 Cr", ebitda: "₹27 Cr", pat: "₹13 Cr", capacity: "100,000 MT" },
];

const KEY_METRICS = [
  { label: "Revenue (FY25)", value: "₹562 Cr", change: "+14.9% YoY" },
  { label: "EBITDA Margin", value: "10.3%", change: "+0.4pp YoY" },
  { label: "Installed Capacity", value: "1,50,000 MT", change: "Steel products" },
  { label: "Debt-Equity Ratio", value: "0.8x", change: "FY25 est." },
];

export default function FinancialInformationPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "Investor Relations", href: "/investor-relations/overview" }, { label: "Financial Information" }]} />
        <SectionHeading label="Financials" title="Performance at a Glance" light className="mt-8" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 mb-12">
          {KEY_METRICS.map((m) => (
            <div key={m.label} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-white/40 text-xs mb-2">{m.label}</p>
              <p className="text-white font-bold text-2xl mb-1">{m.value}</p>
              <p className="text-[#C9A84C] text-xs">{m.change}</p>
            </div>
          ))}
        </div>

        <h3 className="text-white font-bold text-xl mb-6">5-Year Financial Summary</h3>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                {["Financial Year", "Revenue", "EBITDA", "PAT", "Capacity (MT)"].map((h) => (
                  <th key={h} className="text-left text-white/50 font-semibold px-6 py-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ANNUAL_DATA.map((row, i) => (
                <tr key={row.year} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${i === 0 ? "bg-[#C9A84C]/5" : ""}`}>
                  <td className="px-6 py-4 text-white font-semibold">{row.year}{i === 0 && <span className="ml-2 text-[#C9A84C] text-xs">(Latest)</span>}</td>
                  <td className="px-6 py-4 text-white/70 font-mono">{row.revenue}</td>
                  <td className="px-6 py-4 text-white/70 font-mono">{row.ebitda}</td>
                  <td className="px-6 py-4 text-white/70 font-mono">{row.pat}</td>
                  <td className="px-6 py-4 text-white/50 font-mono">{row.capacity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-white/40 text-xs leading-relaxed">
            <strong className="text-white/60">Disclaimer:</strong> Financial figures presented are illustrative and based on company estimates. Premier Bars Limited is a private limited company and is not listed on any stock exchange. Audited financials are available to bonafide investors upon request under NDA. All figures in Indian Rupees (INR). Revenue is gross of GST. EBITDA and PAT are operating metrics.
          </p>
        </div>

        <div className="mt-8 text-center">
          <a href="mailto:ir@premierbars.com" className="inline-block bg-[#C9A84C] text-[#1A1A2E] font-bold px-8 py-3 rounded-xl hover:bg-[#E8D48B] transition-colors">
            Request Audited Financials →
          </a>
        </div>
      </div>
    </main>
  );
}
