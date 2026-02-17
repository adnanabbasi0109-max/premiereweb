"use client";
import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface Tab {
  id: string;
  label: string;
  content?: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  onTabChange?: (id: string) => void;
  defaultTab?: string;
}

export function Tabs({ tabs, onTabChange, defaultTab }: TabsProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);

  const handleSelect = (id: string) => {
    setActive(id);
    onTabChange?.(id);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-white/10 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleSelect(tab.id)}
            className={`
              relative px-5 py-3 text-sm font-semibold uppercase tracking-wider
              transition-colors duration-200
              ${active === tab.id ? "text-[#C9A84C]" : "text-white/50 hover:text-white/80"}
            `}
          >
            {tab.label}
            {active === tab.id && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A84C]"
              />
            )}
          </button>
        ))}
      </div>
      {tabs.find((t) => t.id === active)?.content}
    </div>
  );
}
