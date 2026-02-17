import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investor Relations | Premier Bars Limited",
  description: "Investor relations overview for Premier Bars Limited — company profile, key highlights, and IR contact.",
};

const IR_HIGHLIGHTS = [
  { label: "Company Type", value: "Private Limited" },
  { label: "CIN", value: "U27104RJ2004PTC018876" },
  { label: "Incorporation", value: "2004, Jaipur, Rajasthan" },
  { label: "Industry", value: "Iron & Steel Manufacturing" },
  { label: "Auditor", value: "Chartered Accountants, Jaipur" },
  { label: "Registered Office", value: "Plot No. 1-A, Jaipur Road, Bagru Extension" },
];

const IR_SECTIONS = [
  { title: "Financial Information", desc: "Annual reports, audited financials, revenue trends.", href: "/investor-relations/financial-information", icon: "📊" },
  { title: "Corporate Governance", desc: "Board composition, policies, compliance disclosures.", href: "/investor-relations/governance", icon: "⚖" },
];

export default function IROverviewPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "Investor Relations" }, { label: "Overview" }]} />
        <SectionHeading label="Investor Relations" title="Transparency. Performance. Growth." light className="mt-8" />

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-white font-bold text-xl mb-4">Company Overview</h3>
              <p className="text-white/60 leading-relaxed mb-4">Premier Bars Limited is a diversified steel and infrastructure manufacturing company headquartered in Jaipur, Rajasthan. Incorporated in 2004, the Company has grown from a single TMT bar rolling mill to a multi-product manufacturing enterprise with over ₹500 crore in annual revenue.</p>
              <p className="text-white/60 leading-relaxed mb-4">Our product portfolio spans TMT bars (Fe415 to Fe550D), pre-engineered buildings, power and telecom towers, concrete products (PAVCON), light infrastructure poles (POLMAX), and scaffolding and formwork systems.</p>
              <p className="text-white/60 leading-relaxed">We operate two state-of-the-art manufacturing facilities in Jaipur — at Bagru Extension and Mahindra World City — with a combined installed capacity of 150,000 MT per annum for steel products.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {IR_SECTIONS.map((s) => (
                <Link key={s.href} href={s.href} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-all group">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h4 className="text-white font-bold mb-1 group-hover:text-[#C9A84C] transition-colors">{s.title}</h4>
                  <p className="text-white/40 text-sm">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-5">Company Particulars</h4>
              <dl className="space-y-3">
                {IR_HIGHLIGHTS.map((h) => (
                  <div key={h.label} className="flex flex-col gap-0.5">
                    <dt className="text-white/40 text-xs">{h.label}</dt>
                    <dd className="text-white text-sm font-medium">{h.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-2xl p-6">
              <h4 className="text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-3">IR Contact</h4>
              <p className="text-white/60 text-sm mb-1">Corporate Affairs</p>
              <a href="mailto:ir@premierbars.com" className="text-[#C9A84C] text-sm hover:underline">ir@premierbars.com</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
