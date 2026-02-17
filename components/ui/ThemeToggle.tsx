"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark";
    setDark(isDark);
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
    >
      <motion.span
        key={dark ? "moon" : "sun"}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="text-xl"
      >
        {dark ? "☀️" : "🌙"}
      </motion.span>
    </button>
  );
}
