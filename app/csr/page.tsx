import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = { title: "CSR | Premier Bars Limited" };

export default function CSRPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "CSR" }]} />
        <SectionHeading label="Corporate Social Responsibility" title="Beyond Business. Building Communities." light className="mt-8" />
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>Premier Bars Limited believes that a company&apos;s footprint must go beyond its factory walls. Our CSR initiatives focus on education, skill development, and environmental stewardship in the communities around our manufacturing facilities in Jaipur.</p>
            <p>We partner with local schools and vocational training centres to develop trade skills in steel fabrication, welding, and construction — creating a pipeline of skilled workforce for India&apos;s growing infrastructure sector.</p>
          </div>
          <div className="space-y-4">
            {[
              { title: "Education Support", desc: "Scholarships and educational infrastructure support for school students near our manufacturing units in Bagru and Mahindra World City." },
              { title: "Skill Development", desc: "Vocational training programs in welding, CNC operations, and construction management — 200+ youth trained annually." },
              { title: "Environmental Stewardship", desc: "Tree plantation drives, water conservation projects, and e-waste management programs around our plant areas." },
            ].map((c) => (
              <div key={c.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-all">
                <h4 className="text-white font-bold mb-2">{c.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
