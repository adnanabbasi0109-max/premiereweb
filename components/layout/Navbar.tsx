"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY } from "@/lib/constants";

type NavChild = { label: string; href: string; tag?: string; brand?: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const NAV: NavItem[] = [
  {
    label: "About",
    href: "/about/overview",
    children: [
      { label: "Company Overview", href: "/about/overview" },
      { label: "Board of Directors", href: "/about/board-of-directors" },
      { label: "Awards & Recognitions", href: "/about/awards" },
      { label: "Why Premier", href: "/about/why-us" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "TMT Bars", href: "/products/tmt-bars", tag: "Flagship" },
      { label: "Pre-Engineered Buildings", href: "/products/pre-engineered-buildings" },
      { label: "Transmission Towers", href: "/products/transmission-towers" },
      { label: "Concrete Blocks & Pavers", href: "/products/concrete-blocks-pavers", brand: "PAVCON" },
      { label: "Tubular Decorative Poles", href: "/products/tubular-decorative-poles", brand: "POLMAX" },
      { label: "Scaffolding & Formworks", href: "/products/scaffolding-formworks" },
    ],
  },
  {
    label: "Manufacturing",
    href: "/manufacturing/our-plants",
    children: [
      { label: "Our Plants", href: "/manufacturing/our-plants" },
      { label: "Quality Assurance", href: "/manufacturing/quality-assurance" },
    ],
  },
  {
    label: "Sustainability",
    href: "/sustainability",
    children: [
      { label: "Sustainability", href: "/sustainability" },
      { label: "CSR", href: "/csr" },
    ],
  },
  {
    label: "Investors",
    href: "/investor-relations/overview",
    children: [
      { label: "Overview", href: "/investor-relations/overview" },
      { label: "Financial Information", href: "/investor-relations/financial-information" },
      { label: "Governance", href: "/investor-relations/governance" },
    ],
  },
  {
    label: "More",
    href: "/blog",
    children: [
      { label: "Blog & Insights", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Partner With Us", href: "/partner-with-us" },
      { label: "Downloads", href: "/downloads" },
      { label: "Monthly Prices", href: "/monthly-prices" },
    ],
  },
];

function Dropdown({ item, align, onClose }: { item: NavItem; align: "left" | "right"; onClose: () => void }) {
  if (!item.children) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={`absolute top-full mt-1.5 z-50 bg-[#0D1B2A]/98 backdrop-blur-xl
                 border border-white/10 rounded-2xl shadow-2xl shadow-black/40 py-2 min-w-[200px]
                 ${align === "right" ? "right-0" : "left-0"}`}
    >
      {item.children.map((child) => (
        <Link
          key={child.href}
          href={child.href}
          onClick={onClose}
          className="flex items-center justify-between mx-2 px-3 py-2.5 rounded-xl
                     text-white/70 hover:text-white hover:bg-white/5 transition-all group text-sm"
        >
          <span className="font-medium">{child.label}</span>
          <div className="flex items-center gap-1.5 ml-4">
            {child.tag && (
              <span className="text-[9px] bg-[#C9A84C] text-[#1A1A2E] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                {child.tag}
              </span>
            )}
            {child.brand && (
              <span className="text-[9px] border border-[#C9A84C]/40 text-[#C9A84C] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                {child.brand}
              </span>
            )}
          </div>
        </Link>
      ))}
    </motion.div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > lastScrollY.current && y > 300) setHidden(true);
      if (y < lastScrollY.current) setHidden(false);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const open = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveItem(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveItem(null), 120);
  };

  const closeAll = () => {
    setActiveItem(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  // Last 2 items right-align their dropdowns
  const rightAlignedLabels = new Set(["Investors", "More"]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          scrolled || mobileOpen
            ? "bg-[#0D1B2A]/95 backdrop-blur-[14px] border-b border-white/[0.06] shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        {/* Top Bar */}
        <div className={`bg-[#16325B] text-white/80 text-xs py-2 hidden md:block transition-all duration-300 ${scrolled ? "h-0 py-0 overflow-hidden opacity-0" : ""}`}>
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

        {/* Nav Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" onClick={closeAll} className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Premier Bars Limited"
              width={140}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center" aria-label="Primary">
            {NAV.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && open(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors
                      ${isActive ? "text-white bg-white/5" : "text-white/75 hover:text-white hover:bg-white/5"}`}
                  >
                    {item.label}
                    {item.children && (
                      <svg
                        width="10" height="10" viewBox="0 0 10 10"
                        className={`transition-transform duration-200 ${isActive ? "rotate-180" : ""} opacity-50`}
                      >
                        <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                      </svg>
                    )}
                  </Link>
                  <AnimatePresence>
                    {isActive && item.children && (
                      <Dropdown
                        item={item}
                        align={rightAlignedLabels.has(item.label) ? "right" : "left"}
                        onClose={closeAll}
                      />
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Right: CTA */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/contact"
              onClick={closeAll}
              className="hidden sm:inline-flex text-sm font-medium text-white/60 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={closeAll}
              className="hidden sm:inline-flex items-center bg-[#C9A84C] text-[#1A1A2E] font-bold text-sm
                         px-4 py-2 rounded-lg hover:bg-[#E8D48B] transition-colors shadow-md shadow-amber-900/20"
            >
              Get a Quote
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="w-5 flex flex-col gap-[5px]">
                <motion.span animate={mobileOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }} className="block h-[1.5px] w-full bg-white rounded-full origin-center" />
                <motion.span animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} className="block h-[1.5px] w-full bg-white rounded-full" />
                <motion.span animate={mobileOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }} className="block h-[1.5px] w-full bg-white rounded-full origin-center" />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-[#0D1B2A] overflow-y-auto"
          >
            <div className="pt-20 pb-12 px-5">
              <nav className="mt-4">
                {NAV.map((item) => (
                  <div key={item.label} className="border-b border-white/[0.06]">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={closeAll}
                        className="flex-1 py-3.5 text-base font-semibold text-white/90 hover:text-[#C9A84C] transition-colors"
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          onClick={() => setMobileExpanded((e) => e === item.label ? null : item.label)}
                          className="p-3 text-white/40 hover:text-white transition-colors"
                          aria-label="Expand"
                        >
                          <motion.svg
                            width="14" height="14" viewBox="0 0 14 14"
                            animate={{ rotate: mobileExpanded === item.label ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                          </motion.svg>
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {mobileExpanded === item.label && item.children && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-2 pl-3 border-l border-[#C9A84C]/20 ml-1 mb-1 space-y-0.5">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={closeAll}
                                className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-white/55 hover:text-[#C9A84C] hover:bg-white/5 transition-all"
                              >
                                {child.label}
                                {child.tag && <span className="text-[9px] bg-[#C9A84C]/20 text-[#C9A84C] font-bold px-1.5 py-0.5 rounded-sm uppercase">{child.tag}</span>}
                                {child.brand && <span className="text-[9px] border border-[#C9A84C]/30 text-[#C9A84C]/70 font-bold px-1.5 py-0.5 rounded-sm uppercase">{child.brand}</span>}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              <div className="mt-8 space-y-3">
                <Link
                  href="/contact"
                  onClick={closeAll}
                  className="flex items-center justify-center w-full bg-[#C9A84C] text-[#1A1A2E] font-bold py-3.5 rounded-xl hover:bg-[#E8D48B] transition-colors"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/downloads"
                  onClick={closeAll}
                  className="flex items-center justify-center w-full border border-white/20 text-white/70 font-medium py-3.5 rounded-xl hover:border-white/40 hover:text-white transition-all"
                >
                  Download Brochure
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
