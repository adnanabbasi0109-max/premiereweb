import type { Metadata } from "next";
import { CERTIFICATIONS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Quality Assurance | Premier Bars Limited",
  description: "ISO 9001, 14001, 45001 certified. GreenPro Ecolabel. AMIL-certified testing lab.",
};

export default function QualityPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "Manufacturing", href: "/manufacturing/our-plants" }, { label: "Quality Assurance" }]} />
        <SectionHeading label="Quality" title="Where Quality is Quantified" light className="mt-8" />
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>At Premier Bars Limited, quality is not an inspection step — it is embedded in every stage of our manufacturing process. From raw material procurement to final product dispatch, we maintain a documented, audited quality chain that meets international standards.</p>
            <p>Our quality management system is ISO 9001 certified. Our environmental management is ISO 14001 certified. Our occupational health and safety system is ISO 45001 certified. These aren&apos;t just plaques on our wall — they are the operating framework that governs our facilities daily.</p>
            <p>For TMT bars, every batch is tested for yield strength, tensile strength, elongation, and bend/rebend performance before dispatch. Our AMIL-certified testing lab at the Bagru unit provides on-site verification.</p>
          </div>
          <div className="space-y-4">
            {CERTIFICATIONS.map((c) => (
              <div key={c.name} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-4">
                <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] font-bold text-sm flex-shrink-0">{c.name.slice(0,3)}</div>
                <div><p className="text-white font-semibold">{c.name} — {c.label}</p><p className="text-[#C9A84C] text-xs">{c.year}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
