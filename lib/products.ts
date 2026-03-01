export interface ProductSpec {
  property: string;
  value: string;
  unit?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: string;
  brand?: string;
  featured: boolean;
  image: string;
  gradientFrom: string;
  gradientTo: string;
  specs: ProductSpec[];
  applications: string[];
  highlights: string[];
  certifications: string[];
  brochureUrl?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "tmt-bars",
    name: "TMT Bars",
    slug: "tmt-bars",
    tagline: "Forged for the Future",
    description:
      "Manufactured using advanced Tempcore technology from high-quality billets, Premier TMT Bars deliver unmatched strength, ductility, and corrosion resistance. Available in Fe550 and Fe550D grades with double rib pattern for superior grip — the backbone of India's high-rise towers, bridges, and metro infrastructure.",
    category: "Steel",
    featured: true,
    image: "/images/products/tmt-bars.jpg",
    gradientFrom: "#1A1A2E",
    gradientTo: "#16325B",
    specs: [
      { property: "Grade", value: "Fe550 / Fe550D" },
      { property: "Technology", value: "Tempcore (Quenching & Tempering)" },
      { property: "Standard", value: "ISI:1786:2008, DIN 488:1986" },
      { property: "Sizes Available", value: "8mm — 32mm", unit: "dia" },
      { property: "Yield Strength (Fe550)", value: "≥ 550", unit: "N/mm²" },
      { property: "Tensile Strength (Fe550)", value: "≥ 600", unit: "N/mm²" },
      { property: "Elongation (Fe550)", value: "≥ 10", unit: "%" },
      { property: "Yield Strength (Fe550D)", value: "≥ 550", unit: "N/mm²" },
      { property: "Tensile Strength (Fe550D)", value: "≥ 600", unit: "N/mm²" },
      { property: "Elongation (Fe550D)", value: "≥ 12", unit: "%" },
      { property: "Carbon Equivalent (Fe550D)", value: "≤ 0.42", unit: "%" },
      { property: "Steel Savings", value: "Up to 25", unit: "%" },
      { property: "Rib Pattern", value: "Double Rib — Superior Bond" },
    ],
    applications: [
      "High-rise residential towers",
      "Commercial complexes",
      "Bridges & flyovers",
      "Metro rail infrastructure",
      "Industrial foundations",
      "Earthquake-prone zone construction",
      "Dams & barrages",
      "Highway infrastructure",
    ],
    highlights: [
      "First Indian manufacturer with GreenPro Ecolabel across all sizes & grades",
      "Up to 25% reduction in steel consumption vs conventional bars",
      "Superior weldability — Fe550D ideal for seismic zones",
      "Consistent mechanical properties from end to end",
      "Manufactured from ISI-certified billets",
    ],
    certifications: ["ISI:1786:2008", "DIN 488:1986", "GreenPro Ecolabel", "ISO 9001"],
  },
  {
    id: "pre-engineered-buildings",
    name: "Pre-Engineered Buildings",
    slug: "pre-engineered-buildings",
    tagline: "Faster. Smarter. Stronger.",
    description:
      "Custom-designed steel structures that redefine the pace and economics of industrial and commercial construction. Premier's PEB solutions combine precision engineering with rapid assembly — delivering factory-grade structures in a fraction of the time of conventional construction.",
    category: "Structures",
    featured: true,
    image: "/images/products/pre-engineered-buildings.jpg",
    gradientFrom: "#16325B",
    gradientTo: "#0D1B2A",
    specs: [
      { property: "Clear Span", value: "Up to 90", unit: "m" },
      { property: "Bay Spacing", value: "6 — 9", unit: "m" },
      { property: "Eave Height", value: "Up to 25", unit: "m" },
      { property: "Wind Load Design", value: "As per IS:875 Part 3" },
      { property: "Seismic Zone", value: "I — V (IS:1893)" },
      { property: "Steel Grade", value: "IS:2062 E250 / E350" },
    ],
    applications: [
      "Warehouses & logistics hubs",
      "Manufacturing facilities",
      "Aircraft hangars",
      "Cold storage facilities",
      "Sports arenas",
      "Commercial showrooms",
      "Car dealerships",
      "Hypermarkets & retail",
    ],
    highlights: [
      "30-50% faster construction vs conventional RCC",
      "Optimised steel use — engineered to the gram",
      "Complete turnkey delivery including civil, structural, roofing",
      "Expandable design — add bays or floors without demolition",
      "Factory-fabricated components ensure zero site wastage",
    ],
    certifications: ["ISO 9001", "IS:2062"],
  },
  {
    id: "transmission-towers",
    name: "Transmission & Communication Towers",
    slug: "transmission-towers",
    tagline: "Connecting India. Mile by Mile.",
    description:
      "Precision-engineered lattice and hybrid tower structures for India's telecom and power transmission backbone. With clients like Indus Towers and Bharti Airtel, Premier delivers towers that withstand extreme environmental conditions while maintaining structural integrity over decades.",
    category: "Towers",
    brand: "POLMAX",
    featured: true,
    image: "/images/products/transmission-towers.jpg",
    gradientFrom: "#0D1B2A",
    gradientTo: "#1A1A2E",
    specs: [
      { property: "Tower Types", value: "Lattice, Tubular, Guyed Mast" },
      { property: "Height Range", value: "20 — 120", unit: "m" },
      { property: "Wind Zone", value: "I — VI (IS:802)" },
      { property: "Steel Grade", value: "IS:2062 E250 / Galvanised" },
      { property: "Galvanizing", value: "Hot-dip, 85 microns min" },
      { property: "Deployment Scope", value: "Pan-India" },
    ],
    applications: [
      "4G/5G telecom tower deployments",
      "Rooftop antenna structures",
      "Power transmission lines",
      "Railway overhead lines",
      "Smart city infrastructure",
      "Broadcast towers",
    ],
    highlights: [
      "Deployed thousands of towers for Indus Towers & Airtel",
      "Turnkey capability: design, fabrication, galvanizing, installation",
      "Hot-dip galvanized for 25+ year service life",
      "BIM-enabled structural design and simulation",
    ],
    certifications: ["IS:802", "ISO 9001"],
  },
  {
    id: "concrete-blocks-pavers",
    name: "Concrete Blocks & Pavers",
    slug: "concrete-blocks-pavers",
    tagline: "Engineered Ground. Enduring Design.",
    description:
      "Under the flagship brand PAVCON, Premier manufactures a comprehensive range of concrete products using state-of-the-art Vibro-Compact technology and fully automated manufacturing. From solid blocks to decorative pavers and sustainable EPS blocks — every unit is precision-crafted to IS specifications.",
    category: "Concrete",
    brand: "PAVCON",
    featured: true,
    image: "/images/products/concrete-blocks-pavers.jpg",
    gradientFrom: "#2C2C2C",
    gradientTo: "#1A1A2E",
    specs: [
      { property: "Brand", value: "PAVCON" },
      { property: "Technology", value: "Vibro-Compact, Fully Automated" },
      { property: "Concrete Grade", value: "M40 — M50" },
      { property: "Standard", value: "IS:15658:2006" },
      { property: "Block Types", value: "Solid, Hollow, Splitter, Coloured, Kerb" },
      { property: "Paver Sizes", value: "60mm / 80mm / 100mm thickness" },
      { property: "Testing", value: "AMIL-Certified Lab" },
    ],
    applications: [
      "Road pavements & highways",
      "Footpaths & pedestrian plazas",
      "Industrial flooring",
      "Parking lots",
      "Airport tarmacs",
      "Smart city streetscaping",
      "Landscape design",
    ],
    highlights: [
      "Fully automated Vibro-Compact plant — zero human variability",
      "Steel-cut imported moulds ensure dimensional consistency",
      "AMIL-certified testing lab on-site",
      "EPS blocks for 30% lighter sustainable construction",
      "Custom colours and patterns for architectural applications",
    ],
    certifications: ["IS:15658:2006", "AMIL Certified", "ISO 9001", "ISO 14001"],
  },
  {
    id: "tubular-decorative-poles",
    name: "Tubular Decorative Poles",
    slug: "tubular-decorative-poles",
    tagline: "Precision, Elevated.",
    description:
      "Under the engineering brand POLMAX, Premier manufactures octagonal, conical, tubular, and high-mast poles for smart cities, stadiums, and streetscapes. CNC plasma-cut profiles, submerged arc welding, and hot-dip galvanisation ensure 20+ years of corrosion-free service.",
    category: "Poles",
    brand: "POLMAX",
    featured: true,
    image: "/images/products/tubular-decorative-poles.jpg",
    gradientFrom: "#1A1A2E",
    gradientTo: "#16325B",
    specs: [
      { property: "Brand", value: "POLMAX" },
      { property: "Pole Types", value: "Octagonal, Conical, Tubular, High-Mast" },
      { property: "Height Range", value: "6 — 45", unit: "m" },
      { property: "Steel Grade", value: "IS:2062 E250" },
      { property: "Fabrication", value: "CNC Plasma Cutting, SAW Welding" },
      { property: "Surface", value: "Hot-Dip Galvanized, 85μm minimum" },
      { property: "Corrosion Life", value: "20+", unit: "years" },
    ],
    applications: [
      "Street lighting — urban & highway",
      "Smart city deployments",
      "Stadium high-mast lighting",
      "Airport perimeter lighting",
      "Garden & landscape poles",
      "Sports complex floodlighting",
    ],
    highlights: [
      "Aesthetic smart-city designs with custom profiles",
      "CNC plasma cutting ensures perfect geometry every time",
      "Hot-dip galvanizing — 20+ years of corrosion protection",
      "Complete turnkey: supply, installation, commissioning",
    ],
    certifications: ["IS:2062", "IS:5613", "ISO 9001"],
  },
  {
    id: "scaffolding-formworks",
    name: "Scaffolding & Formworks",
    slug: "scaffolding-formworks",
    tagline: "Infrastructure Starts Here.",
    description:
      "Premier's scaffolding and formwork systems provide the essential temporary support structures that enable India's most ambitious construction projects. Available on both rental and sales models, our systems are engineered for safety, speed, and re-use across hundreds of project cycles.",
    category: "Structures",
    featured: false,
    image: "/images/products/scaffolding-formworks.jpg",
    gradientFrom: "#16325B",
    gradientTo: "#1A1A2E",
    specs: [
      { property: "System Types", value: "Cuplock, Frame, Modular" },
      { property: "Load Capacity", value: "Up to 50 kN/leg" },
      { property: "Material", value: "High-tensile steel, IS:1161" },
      { property: "Surface", value: "Hot-dip galvanized / Painted" },
      { property: "Models", value: "Rental & Sales" },
    ],
    applications: [
      "High-rise building construction",
      "Bridge deck formwork",
      "Industrial plant maintenance",
      "Infrastructure repairs",
      "Event staging",
    ],
    highlights: [
      "Rental model reduces capex for contractors",
      "High-tensile steel for maximum load capacity",
      "Modular design — fast erection and dismantling",
      "Compatible with all major scaffolding systems",
    ],
    certifications: ["IS:1161", "ISO 9001"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export const PRODUCT_CATEGORIES = ["All", "Steel", "Concrete", "Towers", "Poles", "Structures"];
