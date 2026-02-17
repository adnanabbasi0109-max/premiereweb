import type { Metadata } from "next";
import { AWARDS, CERTIFICATIONS } from "@/lib/constants";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Awards & Recognitions | Premier Bars Limited",
  description: "Premier Bars Limited's awards: GreenPro, ISO 9001, ISO 14001, ISO 45001, Steel Excellence Award.",
};

export default function AwardsPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "About", href: "/about/overview" }, { label: "Awards & Recognitions" }]} />
        <SectionHeading label="Recognition" title="Excellence Recognised" light className="mt-8" />
        <div className="mb-16">
          <h3 className="text-[#C9A84C] font-bold uppercase tracking-widest text-xs mb-8">Active Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((c) => (
              <div key={c.name} className="bg-white/5 border border-[#C9A84C]/20 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] font-bold text-sm flex-shrink-0">{c.name.slice(0, 3)}</div>
                <div>
                  <h4 className="text-white font-bold">{c.name}</h4>
                  <p className="text-white/50 text-sm">{c.label}</p>
                  <p className="text-[#C9A84C] text-xs mt-1">{c.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-[#C9A84C] font-bold uppercase tracking-widest text-xs mb-8">Awards Timeline</h3>
          <div className="space-y-4">
            {AWARDS.map((a) => (
              <div key={a.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-6 hover:border-[#C9A84C]/30 transition-all">
                <div className="text-3xl font-bold text-[#C9A84C] font-mono flex-shrink-0">{a.year}</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{a.title}</h4>
                  <p className="text-white/50 text-sm">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
