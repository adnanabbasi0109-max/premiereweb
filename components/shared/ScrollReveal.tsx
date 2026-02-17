"use client";
import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { FADE_IN_UP } from "@/lib/animations";

interface ScrollRevealProps {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function ScrollReveal({
  children,
  variants = FADE_IN_UP,
  delay = 0,
  className = "",
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
