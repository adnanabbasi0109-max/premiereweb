import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Insights & Updates | Premier Bars Limited",
  description: "Industry insights, product updates, and sustainability news from Premier Bars Limited.",
};

const POSTS = [
  {
    slug: "fe550d-vs-fe415-why-high-strength-tmt-saves-steel",
    category: "Technical",
    date: "January 2025",
    title: "Fe550D vs Fe415: Why High-Strength TMT Bars Save 25% Steel",
    excerpt: "The choice of TMT bar grade directly impacts project cost, structural integrity, and embedded carbon. Here's a detailed analysis of why Fe550D outperforms Fe415 in modern construction.",
    readTime: "6 min read",
  },
  {
    slug: "greenpro-ecolabel-first-tmt-manufacturer-india",
    category: "Sustainability",
    date: "November 2024",
    title: "Premier Bars Becomes India's First GreenPro-Certified TMT Manufacturer",
    excerpt: "Receiving the GreenPro Ecolabel from CII-IGBC was not just a certification milestone — it was the formal recognition of a decade of environmental commitment embedded in our manufacturing philosophy.",
    readTime: "4 min read",
  },
  {
    slug: "pre-engineered-buildings-india-industrial-growth",
    category: "Industry",
    date: "September 2024",
    title: "Pre-Engineered Buildings and India's Industrial Growth Story",
    excerpt: "With PLI schemes driving manufacturing expansion and data centres proliferating across metros, demand for PEB structures has surged. How Premier Bars is positioned to supply this growth.",
    readTime: "5 min read",
  },
  {
    slug: "pavcon-interlocking-pavers-smart-city-projects",
    category: "Product",
    date: "July 2024",
    title: "PAVCON Interlocking Pavers: The Smart City Infrastructure Standard",
    excerpt: "From AMRUT 2.0 projects to smart city pedestrianisation drives, PAVCON's Vibro-Compact paving blocks are being specified by urban local bodies across Rajasthan. Here's why.",
    readTime: "4 min read",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Technical: "bg-blue-500/20 text-blue-300",
  Sustainability: "bg-emerald-500/20 text-emerald-300",
  Industry: "bg-purple-500/20 text-purple-300",
  Product: "bg-[#C9A84C]/20 text-[#C9A84C]",
};

export default function BlogPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "Insights" }]} />
        <SectionHeading label="Insights" title="Steel, Sustainability & Infrastructure" light className="mt-8" />
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-[#C9A84C]/30 transition-all">
              <div className="h-48 bg-gradient-to-br from-[#16325B] to-[#0D1B2A] relative flex items-end p-6">
                <div className="absolute inset-0 blueprint-bg opacity-20" />
                <span className={`relative text-xs font-bold px-3 py-1 rounded-full ${CATEGORY_COLORS[post.category] || "bg-white/10 text-white/60"}`}>{post.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-white/40 text-xs mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-[#C9A84C] transition-colors">{post.title}</h2>
                <p className="text-white/50 text-sm leading-relaxed">{post.excerpt}</p>
                <div className="mt-4 text-[#C9A84C] text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read article <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
