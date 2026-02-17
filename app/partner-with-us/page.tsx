import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Partner With Us | Premier Bars Limited",
  description: "Become an authorised dealer, channel partner, or project supplier for Premier Bars Limited — Jaipur's leading steel manufacturer.",
};

const PARTNER_TYPES = [
  {
    type: "Authorised Dealer",
    desc: "Stock and sell Premier TMT bars in your territory under our dealership network. Preferred margins, marketing support, and priority allocation.",
    requirements: ["Existing hardware or steel trading business", "Covered warehouse (min. 5,000 sq ft)", "Investment capacity ₹25L+", "Local market presence 3+ years"],
  },
  {
    type: "Project Supplier",
    desc: "Supply Premier products to construction projects in your region. Site delivery, flexible credit terms, and technical support for large orders.",
    requirements: ["Registered construction or supply firm", "GST and PAN documentation", "Experience with project-based procurement", "Annual volume commitment"],
  },
  {
    type: "Institutional Buyer",
    desc: "Long-term supply agreements for government bodies, housing boards, developers, and EPC contractors requiring consistent, certified supply.",
    requirements: ["Registered institutional buyer", "Volume commitments of 500 MT+ annually", "Letter of intent or approved vendor registration", "Technical specification alignment"],
  },
];

export default function PartnerWithUsPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "Partner With Us" }]} />
        <SectionHeading label="Partnerships" title="Grow With Premier Bars." light className="mt-8" />

        <div className="grid lg:grid-cols-3 gap-8 mt-12 mb-16">
          {PARTNER_TYPES.map((p) => (
            <div key={p.type} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#C9A84C]/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] text-2xl mb-5">◈</div>
              <h3 className="text-white font-bold text-xl mb-3">{p.type}</h3>
              <p className="text-white/60 leading-relaxed text-sm mb-5">{p.desc}</p>
              <h4 className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-3">Requirements</h4>
              <ul className="space-y-2">
                {p.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-2 text-white/50 text-sm">
                    <span className="text-[#C9A84C] mt-0.5 shrink-0">✦</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#16325B] to-[#0D1B2A] border border-[#C9A84C]/20 rounded-3xl p-10">
          <h3 className="text-white font-bold text-2xl mb-8 text-center">Register Your Interest</h3>
          <form className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-white/60 text-sm block mb-2">Full Name *</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors" placeholder="Your name" />
            </div>
            <div>
              <label className="text-white/60 text-sm block mb-2">Company Name *</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors" placeholder="Company name" />
            </div>
            <div>
              <label className="text-white/60 text-sm block mb-2">Email *</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors" placeholder="email@company.com" />
            </div>
            <div>
              <label className="text-white/60 text-sm block mb-2">Phone *</label>
              <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors" placeholder="+91 " />
            </div>
            <div>
              <label className="text-white/60 text-sm block mb-2">Partnership Type</label>
              <select className="w-full bg-[#0D1B2A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C]/50 transition-colors">
                <option value="">Select type</option>
                <option>Authorised Dealer</option>
                <option>Project Supplier</option>
                <option>Institutional Buyer</option>
              </select>
            </div>
            <div>
              <label className="text-white/60 text-sm block mb-2">Territory / Region</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors" placeholder="e.g. Jaipur district, Western Rajasthan" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-white/60 text-sm block mb-2">Brief Message</label>
              <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors resize-none" placeholder="Tell us about your business and what you're looking for..." />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="w-full bg-[#C9A84C] text-[#1A1A2E] font-bold py-4 rounded-xl hover:bg-[#E8D48B] transition-colors">
                Submit Partnership Interest →
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
