"use client";
import Link from "next/link";
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
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#C9A84C] rounded-lg flex items-center justify-center font-bold text-[#1A1A2E] text-sm">
                PB
              </div>
              <div>
                <div className="text-white font-bold">Premier Bars Limited</div>
                <div className="text-[#C9A84C] text-[10px] uppercase tracking-widest">Since 2004</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Engineering India's infrastructure through world-class steel, concrete, and structural solutions since 2004.
            </p>
            <div className="flex gap-3">
              {[
                { href: COMPANY.social.linkedin, label: "LinkedIn", icon: "in" },
                { href: COMPANY.social.twitter, label: "Twitter", icon: "𝕏" },
                { href: COMPANY.social.youtube, label: "YouTube", icon: "▶" },
                { href: COMPANY.social.instagram, label: "Instagram", icon: "◎" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center
                             justify-center text-white/50 hover:text-[#C9A84C] hover:border-[#C9A84C]/40
                             transition-all text-xs font-bold"
                >
                  {s.icon}
                </a>
              ))}
            </div>
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

        {/* Newsletter */}
        <div className="border-t border-white/10 py-8 mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-semibold">Subscribe to Industry Insights</p>
              <p className="text-white/40 text-sm">Monthly updates on steel markets, infrastructure trends, and company news.</p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 w-full sm:w-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 sm:w-64 bg-white/5 border border-white/20 rounded-lg px-4 py-2.5
                           text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9A84C]"
              />
              <button
                type="submit"
                className="bg-[#C9A84C] text-[#1A1A2E] font-semibold px-5 py-2.5 rounded-lg
                           hover:bg-[#E8D48B] transition-colors text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
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
