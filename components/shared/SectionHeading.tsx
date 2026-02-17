"use client";
import { motion } from "framer-motion";
import { FADE_IN_UP, STAGGER_CONTAINER } from "@/lib/animations";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      variants={STAGGER_CONTAINER}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`flex flex-col ${alignClass} gap-3 mb-12 ${className}`}
    >
      {label && (
        <motion.span
          variants={FADE_IN_UP}
          className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.2em]"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={FADE_IN_UP}
        className={`font-heading font-bold text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-tight max-w-3xl ${
          light ? "text-white" : "text-[#1A1A2E]"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={FADE_IN_UP}
          className={`text-lg leading-relaxed max-w-2xl ${light ? "text-white/70" : "text-[#1A1A2E]/60"}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        variants={FADE_IN_UP}
        className={`h-1 w-16 rounded-full bg-[#C9A84C] ${align === "center" ? "mx-auto" : ""} mt-2`}
      />
    </motion.div>
  );
}
