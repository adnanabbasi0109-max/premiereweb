import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Premier Bars Limited",
  description: "Reach Premier Bars Limited — sales enquiries, partnership discussions, plant visits. Offices in Jaipur.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "Contact" }]} />
        <SectionHeading label="Get In Touch" title="We're Ready to Talk Business." light className="mt-8" />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-white font-bold text-xl mb-6">Send us a message</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-white/60 text-sm block mb-2">Full Name *</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors" placeholder="Rajesh Kumar" />
                </div>
                <div>
                  <label className="text-white/60 text-sm block mb-2">Company Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors" placeholder="ABC Constructions" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-white/60 text-sm block mb-2">Email Address *</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors" placeholder="rajesh@company.com" />
                </div>
                <div>
                  <label className="text-white/60 text-sm block mb-2">Phone Number *</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label className="text-white/60 text-sm block mb-2">Subject</label>
                <select className="w-full bg-[#1A1A2E] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C]/50 transition-colors">
                  <option value="">Select a topic</option>
                  <option>Product Enquiry — TMT Bars</option>
                  <option>Product Enquiry — Pre-Engineered Buildings</option>
                  <option>Product Enquiry — PAVCON / POLMAX</option>
                  <option>Partnership / Dealership</option>
                  <option>Investor Relations</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-white/60 text-sm block mb-2">Message *</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors resize-none" placeholder="Tell us about your requirements..." />
              </div>
              <button type="submit" className="w-full bg-[#C9A84C] text-[#1A1A2E] font-bold py-4 rounded-xl hover:bg-[#E8D48B] transition-colors">
                Send Message →
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-4">Corporate Office</h4>
              <address className="not-italic text-white/70 leading-relaxed text-sm">
                {COMPANY.addresses.corporate.line1}<br />
                {COMPANY.addresses.corporate.line2}<br />
                {COMPANY.addresses.corporate.state}
              </address>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-4">Manufacturing — Unit 1 (Bagru)</h4>
              <address className="not-italic text-white/70 leading-relaxed text-sm">
                {COMPANY.addresses.unit1.line1}<br />
                {COMPANY.addresses.unit1.line2}<br />
                {COMPANY.addresses.unit1.state}
              </address>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-4">Manufacturing — Unit 2 (MWC)</h4>
              <address className="not-italic text-white/70 leading-relaxed text-sm">
                {COMPANY.addresses.unit2.line1}<br />
                {COMPANY.addresses.unit2.line2}<br />
                {COMPANY.addresses.unit2.state}
              </address>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-[#C9A84C]">✉</span>
                <a href={`mailto:${COMPANY.email}`} className="text-white/70 text-sm hover:text-[#C9A84C] transition-colors">{COMPANY.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#C9A84C]">☎</span>
                <a href={`tel:${COMPANY.phone}`} className="text-white/70 text-sm hover:text-[#C9A84C] transition-colors">{COMPANY.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
