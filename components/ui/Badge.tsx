import { type ReactNode } from "react";

type BadgeVariant = "gold" | "steel" | "success" | "warning" | "default";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  gold: "bg-[#C9A84C]/20 text-[#C9A84C] border border-[#C9A84C]/40",
  steel: "bg-[#16325B]/20 text-[#16325B] border border-[#16325B]/40",
  success: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40",
  warning: "bg-orange-500/20 text-orange-400 border border-orange-500/40",
  default: "bg-white/10 text-white/80 border border-white/20",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
        uppercase tracking-widest ${variants[variant]} ${className}
      `}
    >
      {children}
    </span>
  );
}
