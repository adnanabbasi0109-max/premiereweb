"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C] via-[#E8D48B] to-[#C9A84C]" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 25% 50%, #1A1A2E 0%, transparent 60%), radial-gradient(circle at 75% 50%, #16325B 0%, transparent 60%)" }} />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#1A1A2E]/60 text-sm font-bold uppercase tracking-widest mb-4">Start Your Project</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] tracking-tight mb-6">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-[#1A1A2E]/70 text-lg mb-10 max-w-xl mx-auto">
            Connect with our engineering team for a personalised quote, technical consultation, or site assessment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="secondary" size="lg">Get a Quote</Button>
            <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center gap-2 text-[#1A1A2E] font-semibold text-lg border-b-2 border-[#1A1A2E]/30 hover:border-[#1A1A2E] pb-0.5 transition-colors">
              📞 Call Us Directly
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
