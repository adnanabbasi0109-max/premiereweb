"use client";
import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  id: string;
  question: string;
  answer: string | ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      if (prev.includes(id)) return prev.filter((i) => i !== id);
      return allowMultiple ? [...prev, id] : [id];
    });
  };

  return (
    <div className="divide-y divide-white/10">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id}>
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between py-5 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-lg pr-8 group-hover:text-[#C9A84C] transition-colors">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-[#C9A84C] text-2xl flex-shrink-0 font-light"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-5 text-white/70 leading-relaxed">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
