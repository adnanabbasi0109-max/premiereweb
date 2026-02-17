"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#C9A84C] text-[#1A1A2E] font-semibold hover:bg-[#E8D48B] shadow-lg shadow-amber-900/20",
  secondary:
    "bg-[#16325B] text-white font-semibold hover:bg-[#1A3A6B] shadow-lg shadow-blue-900/20",
  outline:
    "border-2 border-white text-white font-semibold hover:bg-white hover:text-[#1A1A2E]",
  ghost:
    "text-[#C9A84C] font-semibold hover:bg-[#C9A84C]/10 border border-transparent hover:border-[#C9A84C]/30",
  danger:
    "bg-[#C41E3A] text-white font-semibold hover:bg-[#A01830]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-md",
  md: "px-6 py-3 text-base rounded-lg",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  loading,
  icon,
  iconPosition = "right",
  children,
  className = "",
  disabled,
  ...rest
}: ButtonProps) {
  const classes = `
    inline-flex items-center gap-2 transition-all duration-200
    ${variantClasses[variant]} ${sizeClasses[size]}
    ${disabled || loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${className}
  `.trim();

  const inner = (
    <>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {loading ? <span className="animate-spin">⟳</span> : children}
      {icon && iconPosition === "right" && !loading && <span>{icon}</span>}
    </>
  );

  if (href) {
    const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <motion.div whileTap={{ scale: 0.98 }} className="inline-block">
        <Link href={href} className={classes} {...linkProps}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={classes}
      disabled={disabled || loading}
      {...(rest as Record<string, unknown>)}
    >
      {inner}
    </motion.button>
  );
}
