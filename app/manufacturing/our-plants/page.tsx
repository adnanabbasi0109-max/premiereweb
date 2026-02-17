import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Our Manufacturing Plants | Premier Bars Limited",
  description: "Two state-of-the-art manufacturing units in Jaipur, Rajasthan — Bagru Extension and Mahindra World City.",
};

const UNITS = [
  { ...COMPANY.addresses.unit1, desc: "Our flagship manufacturing unit houses the primary induction furnace, billet casting facility, and TMT bar rolling mill. Also home to the PAVCON concrete products plant with Vibro-Compact automation.", capabilities: ["Induction Furnace — Billet Production", "TMT Rolling Mill — Fe550 & Fe550D", "PAVCON Vibro-Compact Plant", "AMIL-Certified Testing Lab", "ISO 9001 & 14001 Certified"] },
  { ...COMPANY.addresses.unit2, desc: "Our advanced fabrication hub for POLMAX poles and tower manufacturing, Pre-Engineered Building components, and scaffolding systems.", capabilities: ["CNC Plasma Cutting Facility", "Submerged Arc Welding Lines", "Hot-Dip Galvanizing Plant", "PEB Component Fabrication", "Scaffolding & Formwork Assembly"] },
];

export default function OurPlantsPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "Manufacturing" }, { label: "Our Plants" }]} />
        <SectionHeading label="Manufacturing" title="Where Precision is Produced" light className="mt-8" />
        <div className="grid lg:grid-cols-2 gap-8">
          {UNITS.map((unit, i) => (
            <div key={unit.label} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
              <div className="h-52 bg-gradient-to-br from-[#16325B] to-[#0D1B2A] relative flex items-center justify-center">
                <div className="absolute inset-0 steel-mesh-bg opacity-20" />
                <div className="relative text-center">
                  <div className="text-6xl text-[#C9A84C]/30 font-mono font-bold">U{i + 1}</div>
                  <p className="text-[#C9A84C] text-sm font-bold uppercase tracking-widest mt-2">{unit.label}</p>
                </div>
              </div>
              <div className="p-8">
                <address className="not-italic text-white/50 text-sm mb-4">{unit.line1}, {unit.line2}<br />{unit.state}</address>
                <p className="text-white/70 leading-relaxed mb-6">{unit.desc}</p>
                <h4 className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-3">Key Capabilities</h4>
                <ul className="space-y-2">
                  {unit.capabilities.map((c) => (
                    <li key={c} className="flex items-center gap-3 text-white/60 text-sm"><span className="text-[#C9A84C]">✦</span> {c}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
