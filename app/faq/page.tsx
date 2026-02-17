import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "FAQ | Premier Bars Limited",
  description: "Frequently asked questions about Premier TMT Bars, PAVCON pavers, POLMAX poles, certifications, and ordering.",
};

const FAQS = [
  {
    question: "What grades of TMT bars does Premier Bars manufacture?",
    answer: "We manufacture Fe415, Fe500, Fe500D, and Fe550D grades of TMT bars. Our Fe550D bars are our flagship product — offering the highest yield strength with superior ductility, enabling up to 25% steel savings in structural projects versus Fe415.",
  },
  {
    question: "Are Premier TMT bars IS 1786 certified?",
    answer: "Yes. All Premier TMT bars are BIS-certified under IS 1786:2008. Our certification covers all grades and sizes from 8mm to 32mm. BIS licence numbers are available on request for procurement documentation.",
  },
  {
    question: "What is GreenPro Ecolabel and does Premier Bars hold it?",
    answer: "GreenPro Ecolabel is a product-level sustainability certification issued by the Confederation of Indian Industry (CII). Premier Bars Limited is India's first TMT bar manufacturer to receive GreenPro certification — across all bar sizes and all grades. This validates the reduced lifecycle environmental impact of our products.",
  },
  {
    question: "What are the minimum order quantities for TMT bars?",
    answer: "For direct plant purchases, the minimum order is typically one lorry load — approximately 15-20 MT. For smaller requirements, we work through our authorised dealer network across Rajasthan, Gujarat, Haryana, and Madhya Pradesh. Contact our sales team for region-specific dealer details.",
  },
  {
    question: "Do you supply pre-engineered buildings for pan-India projects?",
    answer: "Yes. Our Pre-Engineered Buildings division designs, fabricates, and delivers PEB structures across India. We handle design-to-delivery with our in-house engineering team, and our logistics network covers all major industrial corridors.",
  },
  {
    question: "What is PAVCON and what products does it offer?",
    answer: "PAVCON is Premier Bars Limited's concrete products brand. PAVCON produces interlocking paving blocks, concrete hollow blocks, solid blocks, kerbstones, and drainage channels using Vibro-Compact automation technology. Products are available in standard and custom profiles.",
  },
  {
    question: "What are POLMAX poles used for?",
    answer: "POLMAX poles and towers are engineered for street lighting (octagonal, conical, tubular, decorative), high-mast lighting for stadiums and airports, telecom lattice towers (4G/5G), and power transmission towers. All POLMAX products are hot-dip galvanised with 85 micron minimum zinc coating.",
  },
  {
    question: "Can I visit the manufacturing plants?",
    answer: "Yes, we welcome trade visits to our manufacturing facilities in Bagru Extension and Mahindra World City, Jaipur. Please write to us at info@premierbars.com or call us to schedule a plant visit with at least 3 days advance notice.",
  },
];

export default function FAQPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "FAQ" }]} />
        <SectionHeading label="Support" title="Frequently Asked Questions" light className="mt-8" />
        <Accordion
          items={FAQS.map((faq, i) => ({
            id: String(i),
            question: faq.question,
            answer: faq.answer,
          }))}
        />
        <div className="mt-16 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-2xl p-8 text-center">
          <p className="text-white/70 mb-4">Still have questions? Our team is happy to help.</p>
          <a href="/contact" className="inline-block bg-[#C9A84C] text-[#1A1A2E] font-bold px-8 py-3 rounded-xl hover:bg-[#E8D48B] transition-colors">
            Contact Us →
          </a>
        </div>
      </div>
    </main>
  );
}
