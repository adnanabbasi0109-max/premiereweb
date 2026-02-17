"use client";
import { motion } from "framer-motion";
import { CLIENTS } from "@/lib/constants";

interface LogoMarqueeProps {
  reverse?: boolean;
}

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-3">
      <motion.div
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap"
      >
        {doubled.map((client, i) => (
          <div
            key={`${client}-${i}`}
            className="flex-shrink-0 px-8 py-3 bg-white/5 border border-white/10 rounded-xl
                       text-white/40 font-semibold text-sm uppercase tracking-widest
                       hover:text-[#C9A84C] hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/5
                       transition-all duration-300 cursor-default min-w-[160px] text-center"
          >
            {client}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function LogoMarquee() {
  const half = Math.ceil(CLIENTS.length / 2);
  const row1 = CLIENTS.slice(0, half);
  const row2 = CLIENTS.slice(half);

  return (
    <div className="space-y-2">
      <MarqueeRow items={row1} />
      <MarqueeRow items={row2} reverse />
    </div>
  );
}
