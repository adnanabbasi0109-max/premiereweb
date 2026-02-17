import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Downloads | Premier Bars Limited",
  description: "Download product brochures, certification documents, and technical datasheets from Premier Bars Limited.",
};

const DOWNLOADS = [
  {
    category: "Product Brochures",
    items: [
      { name: "Premier TMT Bars — Product Range Brochure", size: "3.2 MB", format: "PDF" },
      { name: "PAVCON Concrete Products Catalogue", size: "5.1 MB", format: "PDF" },
      { name: "POLMAX Poles & Towers Catalogue", size: "4.8 MB", format: "PDF" },
      { name: "Pre-Engineered Buildings — Capability Overview", size: "6.3 MB", format: "PDF" },
      { name: "Scaffolding & Formwork Solutions", size: "2.9 MB", format: "PDF" },
    ],
  },
  {
    category: "Certifications",
    items: [
      { name: "BIS Certificate — IS 1786 (Fe415, Fe500, Fe500D, Fe550D)", size: "0.4 MB", format: "PDF" },
      { name: "ISO 9001:2015 Certificate", size: "0.3 MB", format: "PDF" },
      { name: "ISO 14001:2015 Certificate", size: "0.3 MB", format: "PDF" },
      { name: "ISO 45001:2018 Certificate", size: "0.3 MB", format: "PDF" },
      { name: "GreenPro Ecolabel Certificate — All Grades", size: "0.5 MB", format: "PDF" },
      { name: "BEE Energy Efficiency Certificate", size: "0.4 MB", format: "PDF" },
    ],
  },
  {
    category: "Technical Documents",
    items: [
      { name: "Fe550D Technical Datasheet — Mechanical Properties", size: "0.8 MB", format: "PDF" },
      { name: "PAVCON Block Compressive Strength Test Reports", size: "1.2 MB", format: "PDF" },
      { name: "POLMAX Hot-Dip Galvanizing Specification", size: "0.6 MB", format: "PDF" },
      { name: "PEB Design Load Table", size: "1.5 MB", format: "PDF" },
    ],
  },
];

export default function DownloadsPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "Downloads" }]} />
        <SectionHeading label="Resources" title="Technical Documents & Brochures" light className="mt-8" />

        <div className="mt-12 space-y-10">
          {DOWNLOADS.map((section) => (
            <div key={section.category}>
              <h3 className="text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-4">{section.category}</h3>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-6 py-4 hover:border-[#C9A84C]/30 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] text-xs font-bold flex-shrink-0">
                        {item.format}
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm group-hover:text-[#C9A84C] transition-colors">{item.name}</p>
                        <p className="text-white/30 text-xs mt-0.5">{item.size}</p>
                      </div>
                    </div>
                    <button className="shrink-0 text-white/40 hover:text-[#C9A84C] transition-colors text-lg ml-4" title="Download">
                      ↓
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          <p className="text-white/50 text-sm">Need a specific document not listed here? <a href="/contact" className="text-[#C9A84C] hover:underline">Contact our team</a> and we'll provide it within 24 hours.</p>
        </div>
      </div>
    </main>
  );
}
