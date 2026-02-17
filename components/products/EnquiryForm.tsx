"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

export function EnquiryForm({ productName }: { productName?: string }) {
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    showToast("Enquiry received! We'll respond within 4 hours.", "success");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-[#1A1A2E] border border-white/10 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-white mb-2">Request a Quote</h3>
      <p className="text-white/50 text-sm mb-8">Our team responds within 4 business hours.</p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { name: "name", label: "Full Name *", type: "text", required: true },
            { name: "email", label: "Email *", type: "email", required: true },
            { name: "phone", label: "Phone *", type: "tel", required: true },
            { name: "company", label: "Company", type: "text", required: false },
          ].map((f) => (
            <div key={f.name}>
              <label className="block text-white/70 text-sm font-medium mb-2">{f.label}</label>
              <input type={f.type} name={f.name} required={f.required} placeholder={f.label.replace(" *", "")} className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors" />
            </div>
          ))}
        </div>
        {productName && (
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">Product Interest</label>
            <input type="text" name="product" defaultValue={productName} readOnly className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-[#C9A84C] text-sm" />
          </div>
        )}
        <div>
          <label className="block text-white/70 text-sm font-medium mb-2">Message</label>
          <textarea name="message" rows={4} placeholder="Describe your requirement, quantity, project type..." className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors resize-none" />
        </div>
        <Button type="submit" variant="primary" size="lg" className="w-full justify-center" loading={loading}>
          {loading ? "Submitting..." : "Send Enquiry"}
        </Button>
      </form>
    </div>
  );
}
