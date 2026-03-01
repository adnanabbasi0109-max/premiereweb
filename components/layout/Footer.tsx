"use client";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

const PRODUCT_LINKS = [
  { label: "TMT Bars", href: "/products/tmt-bars" },
  { label: "Pre-Engineered Buildings", href: "/products/pre-engineered-buildings" },
  { label: "Transmission Towers", href: "/products/transmission-towers" },
  { label: "Concrete Blocks & Pavers", href: "/products/concrete-blocks-pavers" },
  { label: "Tubular Decorative Poles", href: "/products/tubular-decorative-poles" },
  { label: "Scaffolding & Formworks", href: "/products/scaffolding-formworks" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about/overview" },
  { label: "Manufacturing", href: "/manufacturing/our-plants" },
  { label: "Quality Assurance", href: "/manufacturing/quality-assurance" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Careers", href: "/careers" },
  { label: "Blog & News", href: "/blog" },
];

export function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white">
      {/* Pre-footer CTA */}
      <div className="bg-gradient-to-r from-[#C9A84C]/20 via-[#C9A84C]/10 to-transparent border-t border-[#C9A84C]/20">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Build Something{" "}
              <span className="text-gradient-gold">Extraordinary?</span>
            </h3>
            <p className="text-white/60 mt-2">
              Talk to our engineering team today.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="bg-[#C9A84C] text-[#1A1A2E] font-bold px-7 py-3 rounded-xl
                         hover:bg-[#E8D48B] transition-colors text-sm uppercase tracking-wide"
            >
              Get a Quote
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="border-2 border-white/20 text-white font-semibold px-6 py-3 rounded-xl
                         hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors text-sm uppercase tracking-wide"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="Premier Bars Limited"
                width={420}
                height={140}
                className="h-28 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Engineering India's infrastructure through world-class steel, concrete, and structural solutions since 2004.
            </p>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-5 text-[#C9A84C]">
              Products
            </h4>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/50 hover:text-[#C9A84C] transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-5 text-[#C9A84C]">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/50 hover:text-[#C9A84C] transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-5 text-[#C9A84C]">
              Connect
            </h4>
            <div className="space-y-5">
              {Object.values(COMPANY.addresses).map((addr) => (
                <div key={addr.label}>
                  <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mb-1">
                    {addr.label}
                  </p>
                  <address className="not-italic text-white/50 text-sm leading-relaxed">
                    {addr.line1}
                    <br />
                    {addr.line2}
                    <br />
                    {addr.state}
                  </address>
                </div>
              ))}
              <div>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-white/50 hover:text-[#C9A84C] transition-colors text-sm"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <div className="flex items-center gap-2">
            <span>🇮🇳</span>
            <span>Made in India — Premier Bars Limited © {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#C9A84C] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/privacy-policy#terms" className="hover:text-[#C9A84C] transition-colors">
              Terms of Use
            </Link>
            <Link href="/sitemap.xml" className="hover:text-[#C9A84C] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
