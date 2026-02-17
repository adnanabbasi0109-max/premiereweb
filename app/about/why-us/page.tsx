import type { Metadata } from "next";
import { DIFFERENTIATORS } from "@/lib/constants";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Why Choose Premier Bars | Differentiators",
  description: "What makes Premier Bars Limited India's preferred infrastructure materials partner.",
};

export default function WhyUsPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "About", href: "/about/overview" }, { label: "Why Premier" }]} />
        <SectionHeading label="Why Premier" title="Where Quality is Quantified" light className="mt-8" />
        <div className="grid lg:grid-cols-2 gap-8">
          {DIFFERENTIATORS.map((d, i) => (
            <div key={d.icon} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#C9A84C]/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-2xl text-[#C9A84C] mb-6 font-bold group-hover:bg-[#C9A84C]/20 transition-all">0{i + 1}</div>
              <h3 className="text-white text-xl font-bold mb-3">{d.title}</h3>
              <p className="text-white/60 leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
