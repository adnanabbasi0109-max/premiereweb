import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="bg-[#16325B] text-white/80 text-xs py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${COMPANY.email}`}
            className="hover:text-[#C9A84C] transition-colors flex items-center gap-2"
          >
            <span>✉</span>
            <span>{COMPANY.email}</span>
          </a>
          <a
            href={`tel:${COMPANY.phone}`}
            className="hover:text-[#C9A84C] transition-colors flex items-center gap-2"
          >
            <span>📞</span>
            <span>{COMPANY.phone}</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/downloads"
            className="flex items-center gap-1.5 bg-[#C9A84C] text-[#1A1A2E] font-semibold
                       px-3 py-1 rounded hover:bg-[#E8D48B] transition-colors"
          >
            <span>⬇</span>
            <span>Download Brochure</span>
          </Link>
          <div className="flex items-center gap-3 text-white/50">
            {[
              { href: COMPANY.social.linkedin, icon: "in", label: "LinkedIn" },
              { href: COMPANY.social.twitter, icon: "𝕏", label: "Twitter" },
              { href: COMPANY.social.youtube, icon: "▶", label: "YouTube" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="hover:text-[#C9A84C] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
