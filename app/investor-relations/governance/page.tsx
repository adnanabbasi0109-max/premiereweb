import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Corporate Governance | Premier Bars Limited",
  description: "Corporate governance framework, board committees, and compliance disclosures of Premier Bars Limited.",
};

const BOARD = [
  { name: "Sh. Mahendra Kumar Agarwal", role: "Chairman & Managing Director", type: "Executive", since: "2004" },
  { name: "Sh. Rajiv Agarwal", role: "Whole-Time Director", type: "Executive", since: "2007" },
  { name: "Sh. Anand Prakash Sharma", role: "Independent Director", type: "Independent", since: "2018" },
  { name: "Smt. Priya Singhvi", role: "Independent Director", type: "Independent", since: "2021" },
];

const COMMITTEES = [
  { name: "Audit Committee", members: ["Sh. Anand Prakash Sharma (Chairman)", "Smt. Priya Singhvi", "Sh. Mahendra Kumar Agarwal"] },
  { name: "Risk Management Committee", members: ["Sh. Rajiv Agarwal (Chairman)", "Sh. Anand Prakash Sharma", "CFO"] },
  { name: "CSR Committee", members: ["Sh. Mahendra Kumar Agarwal (Chairman)", "Smt. Priya Singhvi", "Head — Corporate Affairs"] },
];

const POLICIES = [
  "Code of Conduct for Directors and Senior Management",
  "Whistleblower & Vigil Mechanism Policy",
  "Related Party Transactions Policy",
  "CSR Policy",
  "Risk Management Policy",
  "Environmental & Sustainability Policy",
  "Prevention of Sexual Harassment (POSH) Policy",
];

export default function GovernancePage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "Investor Relations", href: "/investor-relations/overview" }, { label: "Corporate Governance" }]} />
        <SectionHeading label="Governance" title="The Principles That Guide Us" light className="mt-8" />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Board of Directors</h3>
            <div className="space-y-4">
              {BOARD.map((m) => (
                <div key={m.name} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-4">
                  <div className="w-12 h-12 rounded-xl bg-[#16325B] flex items-center justify-center text-[#C9A84C] font-bold text-sm flex-shrink-0">
                    {m.name.split(" ").filter(w => w.length > 1).slice(0, 2).map(w => w[0]).join("")}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">{m.name}</p>
                    <p className="text-white/50 text-xs">{m.role}</p>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${m.type === "Independent" ? "bg-emerald-500/20 text-emerald-400" : "bg-blue-500/20 text-blue-300"}`}>{m.type}</span>
                </div>
              ))}
            </div>

            <h3 className="text-white font-bold text-xl mt-10 mb-6">Board Committees</h3>
            <div className="space-y-4">
              {COMMITTEES.map((c) => (
                <div key={c.name} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h4 className="text-[#C9A84C] font-bold text-sm mb-3">{c.name}</h4>
                  <ul className="space-y-1">
                    {c.members.map((m) => (
                      <li key={m} className="text-white/50 text-sm">· {m}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl mb-6">Governance Framework</h3>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
              <p className="text-white/60 leading-relaxed mb-4">Premier Bars Limited is committed to transparent, accountable, and ethical corporate governance. Our governance framework is designed to protect stakeholder interests, ensure regulatory compliance, and create long-term value.</p>
              <p className="text-white/60 leading-relaxed">As a private limited company, we voluntarily adopt governance practices aligned with the principles of the Companies Act, 2013 and SEBI LODR norms applicable to listed entities, as a benchmark for best practice.</p>
            </div>

            <h3 className="text-white font-bold text-xl mb-4">Policies</h3>
            <div className="space-y-2">
              {POLICIES.map((p) => (
                <div key={p} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-5 py-3 hover:border-[#C9A84C]/30 transition-all group">
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors">{p}</span>
                  <button className="text-white/30 hover:text-[#C9A84C] transition-colors text-sm ml-3">↓</button>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-2xl p-6">
              <h4 className="text-[#C9A84C] font-bold mb-2">Statutory Compliance</h4>
              <p className="text-white/50 text-sm leading-relaxed">Premier Bars Limited files all statutory returns under the Companies Act, 2013 with the Registrar of Companies, Rajasthan. Annual returns and financial statements are filed within prescribed timelines. All environmental and labour compliance filings are current and audit-ready.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
