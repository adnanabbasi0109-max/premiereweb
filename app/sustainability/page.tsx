import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Sustainability | Premier Bars Limited",
  description: "GreenPro certified, greenhouse emission reduction, energy efficiency — Premier Bars' sustainability commitments.",
};

export default function SustainabilityPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "Sustainability" }]} />
        <SectionHeading label="Sustainability" title="Building Green. Building Right." light className="mt-8" />
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>Premier Bars Limited is India&apos;s first TMT bar manufacturer to receive the GreenPro Ecolabel certification across all bar sizes and grades. This is not simply a milestone — it is a statement of our operating philosophy: that industrial excellence and environmental responsibility are not in conflict.</p>
            <p>Our Fe550D TMT bars offer up to 25% steel savings over conventional rebars — meaning every tonne of Premier TMT bar used reduces the total steel demand, carbon embedded in a structure, and transport-related emissions.</p>
            <p>We have been reducing greenhouse gas emissions since 2013, receiving formal certification from the Ministry of Environment, Forest and Climate Change for our verified emission reduction efforts.</p>
          </div>
          <div className="space-y-4">
            {[
              { title: "GreenPro Ecolabel", desc: "First in India for TMT bars — all sizes, all grades. Certified by CII.", icon: "🌱" },
              { title: "Greenhouse Emission Reduction", desc: "Certified since 2013. Verified reductions documented and reported annually.", icon: "♻" },
              { title: "Energy Efficiency", desc: "Bureau of Energy Efficiency certified processes at both manufacturing units.", icon: "⚡" },
              { title: "25% Steel Savings", desc: "Fe550D grade reduces steel consumption vs Fe415 — less material, same strength.", icon: "◎" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all">
                <span className="text-3xl">{item.icon}</span>
                <div><h4 className="text-white font-bold mb-1">{item.title}</h4><p className="text-white/50 text-sm leading-relaxed">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
