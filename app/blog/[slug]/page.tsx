import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { notFound } from "next/navigation";

const POSTS: Record<string, { title: string; category: string; date: string; readTime: string; content: string }> = {
  "fe550d-vs-fe415-why-high-strength-tmt-saves-steel": {
    title: "Fe550D vs Fe415: Why High-Strength TMT Bars Save 25% Steel",
    category: "Technical",
    date: "January 2025",
    readTime: "6 min read",
    content: `The structural steel industry in India has long relied on Fe415 and Fe500 grade TMT bars as the workhorses of reinforced concrete construction. However, the adoption of Fe550D grade — offering a minimum yield strength of 550 MPa versus Fe415's 415 MPa — fundamentally changes the economics of steel-intensive projects.

**The Mathematics of Steel Savings**

For a given structural load, the cross-sectional area of rebar required is inversely proportional to yield strength. Substituting Fe550D for Fe415:

- Required steel area reduces by approximately 25%
- Weight of steel embedded in structure reduces proportionally
- Foundation and structural element sizing can be optimised

For a 10,000 sq ft residential building consuming roughly 60 MT of Fe415, the equivalent Fe550D structure requires approximately 45 MT — saving 15 MT of steel at current market prices of ₹55,000/MT, that is ₹8.25 lakh in direct material savings.

**Beyond Cost — Embedded Carbon**

Each tonne of TMT bar carries approximately 1.8 tonnes of CO₂ equivalent in its production. Reducing steel consumption by 25% reduces the embedded carbon of a structure by proportional measure. For large infrastructure projects, this is material ESG data.

**Fe550D and IS 1786**

Premier Fe550D bars are manufactured to IS 1786:2008, the governing BIS standard for high-strength deformed steel bars. The standard mandates:

- Yield strength (Re): 550 MPa minimum
- Tensile strength (Rm): 600 MPa minimum
- Elongation: 14.5% minimum
- UTS/YS ratio: ≥ 1.08

Our production process achieves consistently higher values than these minimums, with typical yield strengths in the 570–590 MPa range.

**Seismic Performance**

The "D" suffix in Fe550D denotes ductile grade — mandatory for seismic zones III, IV, and V. The higher ductility ensures structures deform progressively under seismic load rather than fracturing suddenly, which is the critical safety factor in earthquake-resistant design.

India's seismic map places Rajasthan largely in Zone II and III, with parts of the Thar region in Zone IV. For all new construction in these zones, specifying Fe550D is both technically correct and increasingly required by structural engineers and local authorities.`,
  },
  "greenpro-ecolabel-first-tmt-manufacturer-india": {
    title: "Premier Bars Becomes India's First GreenPro-Certified TMT Manufacturer",
    category: "Sustainability",
    date: "November 2024",
    readTime: "4 min read",
    content: `The GreenPro Ecolabel, administered by the Confederation of Indian Industry (CII) through its Green Building Council (IGBC), is India's most rigorous product-level environmental certification. It evaluates the full lifecycle impact of industrial products — from raw material extraction through manufacturing, use, and end-of-life.

Premier Bars Limited is the first TMT bar manufacturer in India to achieve GreenPro certification — and we have done so across every bar size (8mm to 32mm) and every grade we produce.

**What the Certification Evaluates**

GreenPro assessment covers:

1. Raw material sourcing — we use steel scrap and sponge iron from verified suppliers with documented environmental compliance
2. Energy consumption per tonne of steel produced — our induction furnace technology is significantly more energy-efficient than traditional blast furnace routes
3. Water consumption and recycling rates
4. Solid waste generation and recycling — steel slag from our process is fully recycled as construction aggregate
5. Air emissions — our ESP (Electrostatic Precipitator) systems meet CPCB norms

**A Decade of Intent**

The GreenPro certification formalises a journey that began in 2013 when we received our first greenhouse gas emission reduction certification from the Ministry of Environment, Forest and Climate Change. Since then, we have invested consistently in energy efficiency upgrades, waste heat recovery, and water recycling infrastructure.

Green building projects certified under LEED, GRIHA, and IGBC's own rating systems increasingly require documentation of embedded material sustainability. With our GreenPro certification, Premier TMT bars can be specified directly into such projects with full lifecycle documentation support.`,
  },
  "pre-engineered-buildings-india-industrial-growth": {
    title: "Pre-Engineered Buildings and India's Industrial Growth Story",
    category: "Industry",
    date: "September 2024",
    readTime: "5 min read",
    content: `India's manufacturing ambition — articulated through the PLI (Production Linked Incentive) schemes across 14 sectors, the National Infrastructure Pipeline, and the PM Gati Shakti initiative — is driving an unprecedented need for factory and warehouse space. Pre-Engineered Buildings (PEB) are the infrastructure delivery mechanism of choice for this growth.

**Why PEB?**

Compared to conventional RCC industrial construction, PEB offers:

- **Speed**: A 10,000 sq m factory can be erected in 8–12 weeks versus 6–9 months for RCC
- **Cost**: 20–30% lower construction cost at equivalent span and load specifications
- **Flexibility**: Column-free spans of up to 90m with mezzanine add-ons
- **Expandability**: Structural design allows future bay additions without demolition

**Premier Bars' PEB Capability**

Our Mahindra World City unit houses dedicated PEB fabrication lines — primary structural frames (PSF), secondary structural members (SSM), sheeting and cladding systems, and insulation integration. Our design team works in Tekla Structures software, enabling accurate fabrication with precise bolt-hole placement for fast site erection.

We have supplied PEB structures for pharmaceutical cold storage facilities, automobile component plants, logistics and 3PL warehouses, and data centre shell-and-core projects across Rajasthan, Gujarat, and Haryana.

**The Data Centre Opportunity**

India's digital infrastructure buildout — driven by hyperscaler investment from AWS, Google, Microsoft, and domestic players — is generating significant PEB demand for data centre shells. These structures have demanding specifications: seismic zone compliance, high roof load ratings for MEP equipment, precise floor-level tolerances, and rapid delivery requirements. Premier Bars' PEB division is actively engaged with data centre developers for upcoming projects in Rajasthan's emerging DC corridor.`,
  },
  "pavcon-interlocking-pavers-smart-city-projects": {
    title: "PAVCON Interlocking Pavers: The Smart City Infrastructure Standard",
    category: "Product",
    date: "July 2024",
    readTime: "4 min read",
    content: `India's Smart Cities Mission has, over its decade of implementation, driven the adoption of interlocking concrete paving blocks (ICPB) as the preferred surface for pedestrian plazas, footpaths, bicycle tracks, and low-speed internal roads. The reasons are clear: durability, repairability, permeability options, and aesthetic versatility.

PAVCON, Premier Bars Limited's concrete products brand, has been supplying ICPB and related products to urban local bodies (ULBs), Smart City SPVs, and private developers since our Bagru manufacturing unit was established.

**Vibro-Compact Technology**

Our paver blocks are produced using Vibro-Compact automation — a German-origin technology that applies precise vibration frequency and compaction pressure to achieve consistent block density, dimensional accuracy (±1mm tolerance), and compressive strength exceeding IS 15658 requirements.

Standard PAVCON pavers achieve 50 MPa compressive strength — well above the IS minimum of 35 MPa for Category A (pedestrian) applications and 40 MPa for Category B (vehicular) applications.

**Product Range**

PAVCON's interlocking paver range includes:

- **Holland Block** (60mm, 80mm) — most common for pedestrian areas
- **I-Shape Block** (60mm, 80mm) — interlocks in four directions, ideal for parking and turning areas
- **Zigzag Block** — decorative, used in heritage zone urban paving projects
- **Permeable Block** — with voids for rainwater infiltration, GRIHA and LEED credit-eligible

Beyond pavers, PAVCON produces concrete hollow blocks (200×200×400, 150×200×400), solid blocks, kerbstones, channel drainage covers, and custom precast elements.

**AMRUT 2.0 Alignment**

The AMRUT 2.0 scheme under MoHUA mandates pedestrianisation and non-motorised transport infrastructure across Tier I and II cities. ULBs across Rajasthan are actively procuring ICPB for these projects, with PAVCON listed as an approved supplier with multiple municipal bodies.`,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return { title: "Article Not Found | Premier Bars Limited" };
  return {
    title: `${post.title} | Premier Bars Limited`,
    description: post.content.slice(0, 160),
  };
}

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-3xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "Insights", href: "/blog" }, { label: post.title.slice(0, 40) + "…" }]} />
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest bg-[#C9A84C]/10 px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-white/40 text-sm">{post.date} · {post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-8">{post.title}</h1>
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return <h2 key={i} className="text-white font-bold text-xl mt-8 mb-3">{para.replace(/\*\*/g, "")}</h2>;
              }
              if (para.includes("**")) {
                return (
                  <p key={i} className="text-white/70 leading-relaxed mb-4" dangerouslySetInnerHTML={{
                    __html: para.replace(/\*\*(.+?)\*\*/g, "<strong class=\"text-white\">$1</strong>")
                      .replace(/\n/g, "<br />")
                  }} />
                );
              }
              if (para.startsWith("- ") || para.includes("\n- ")) {
                const items = para.split("\n").filter(l => l.startsWith("- ")).map(l => l.slice(2));
                return (
                  <ul key={i} className="list-none space-y-2 mb-4">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-white/70" dangerouslySetInnerHTML={{
                        __html: `<span class="text-[#C9A84C] mt-1">✦</span><span>${item.replace(/\*\*(.+?)\*\*/g, "<strong class=\"text-white\">$1</strong>")}</span>`
                      }} />
                    ))}
                  </ul>
                );
              }
              return <p key={i} className="text-white/70 leading-relaxed mb-4">{para}</p>;
            })}
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
            <Link href="/blog" className="text-[#C9A84C] hover:text-white transition-colors">← Back to Insights</Link>
            <Link href="/contact" className="bg-[#C9A84C] text-[#1A1A2E] font-bold px-6 py-2.5 rounded-xl hover:bg-[#E8D48B] transition-colors text-sm">Enquire Now</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
