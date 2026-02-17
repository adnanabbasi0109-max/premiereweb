"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { PRODUCTS } from "@/lib/products";

export function FloatingQuote() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setOpen(false);
    showToast("Quote request received! Our team will reach out within 4 hours.", "success");
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-6 z-50 bg-[#C9A84C] text-[#1A1A2E] font-bold
                   px-5 py-3 rounded-full shadow-2xl shadow-amber-900/40 flex items-center gap-2
                   text-sm uppercase tracking-wide"
        aria-label="Get a quote"
      >
        <span>📋</span>
        <span className="hidden sm:inline">Get a Quote</span>
      </motion.button>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#1A1A2E] z-50
                         shadow-2xl border-l border-[#C9A84C]/20 overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Quick Quote</h3>
                    <p className="text-white/50 text-sm mt-1">Response within 4 hours</p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center
                               justify-center hover:bg-white/20 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { name: "name", label: "Full Name", type: "text", required: true },
                    { name: "phone", label: "Phone Number", type: "tel", required: true },
                    { name: "company", label: "Company (Optional)", type: "text" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-white/70 text-sm font-medium mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3
                                   text-white placeholder-white/30 focus:outline-none
                                   focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]
                                   transition-colors text-sm"
                        placeholder={field.label}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Product</label>
                    <select
                      name="product"
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3
                                 text-white focus:outline-none focus:border-[#C9A84C]
                                 focus:ring-1 focus:ring-[#C9A84C] transition-colors text-sm"
                    >
                      <option value="">Select product...</option>
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.id} className="bg-[#1A1A2E]">
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {[
                    { name: "quantity", label: "Quantity / Volume", type: "text" },
                    { name: "location", label: "Delivery Location", type: "text" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-white/70 text-sm font-medium mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3
                                   text-white placeholder-white/30 focus:outline-none
                                   focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]
                                   transition-colors text-sm"
                        placeholder={field.label}
                      />
                    </div>
                  ))}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={loading}
                    className="w-full justify-center mt-2"
                  >
                    {loading ? "Sending..." : "Request Quote"}
                  </Button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
