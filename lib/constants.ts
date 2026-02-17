export const COMPANY = {
  name: "Premier Bars Limited",
  tagline: "Engineering India's Infrastructure Since 2004",
  description:
    "A steel and infrastructure powerhouse delivering exceptional quality across TMT Bars, Pre-Engineered Buildings, Towers, Concrete Products, Poles, and Scaffolding.",
  founded: 2004,
  email: "customercare@premierbarsltd.com",
  phone: "+91-141-2000000",
  website: "https://premierbarsltd.com",
  addresses: {
    corporate: {
      label: "Corporate Office",
      line1: "402, Nidhi Kamal Tower",
      line2: "Ajmer Road, Jaipur-302006",
      state: "Rajasthan, India",
    },
    unit1: {
      label: "Manufacturing Unit 1",
      line1: "RIICO Industrial Area",
      line2: "Bagru Extension, Jaipur",
      state: "Rajasthan, India",
    },
    unit2: {
      label: "Manufacturing Unit 2",
      line1: "Mahindra World City",
      line2: "Ajmer Road, Jaipur",
      state: "Rajasthan, India",
    },
  },
  social: {
    linkedin: "#",
    twitter: "#",
    youtube: "#",
    instagram: "#",
  },
};

export const STATS = [
  { value: "3L+", label: "Tonnes TMT Produced", suffix: "", description: "3 Lakh+ Tonnes" },
  { value: "500+", label: "Institutional Clients", suffix: "", description: "Trusted Partners" },
  { value: "6", label: "Product Verticals", suffix: "", description: "Diverse Portfolio" },
  { value: "20+", label: "Years of Experience", suffix: "", description: "Since 2004" },
  { value: "1000+", label: "Major Projects", suffix: "", description: "Delivered" },
];

export const CLIENTS = [
  "Indus Towers",
  "Tata Group",
  "Manipal",
  "Bhumika Group",
  "Infosys",
  "NIMS",
  "Airtel",
  "L&T",
  "Essar",
  "Adani",
  "HPCL",
  "Transrail",
];

export const CERTIFICATIONS = [
  { name: "ISO 9001", label: "Quality Management", year: "Active" },
  { name: "ISO 14001", label: "Environmental Management", year: "Active" },
  { name: "ISO 45001", label: "Health & Safety Management", year: "Active" },
  { name: "GreenPro", label: "Ecolabel Certification", year: "First in India" },
  { name: "ISI", label: "IS:1786:2008 Certified", year: "Active" },
  { name: "DIN 488", label: "German Standard Certified", year: "Active" },
];

export const AWARDS = [
  { year: "2025", title: "Award for Green Products in Steel", body: "Steel Industry India" },
  { year: "2021", title: "GreenPro Ecolabel Certification in TMT", body: "CII — First in India, all sizes & grades" },
  { year: "2017", title: "Award for Steel Excellence", body: "ASSOCHAM" },
  { year: "2015", title: "Award for Real Estate Expo", body: "CREDAI Rajasthan" },
  { year: "2015", title: "Certificate for Energy Efficiency", body: "Bureau of Energy Efficiency" },
  { year: "2013", title: "Certificate for Reducing Greenhouse Emissions", body: "Ministry of Environment" },
];

export const DIFFERENTIATORS = [
  {
    icon: "integration",
    title: "End-to-End Integration",
    description:
      "From raw material to finished product, every stage under one roof — ensuring quality, traceability, and speed.",
  },
  {
    icon: "expertise",
    title: "Proven Expertise",
    description:
      "20+ years of manufacturing excellence in strength-critical applications across India's most demanding projects.",
  },
  {
    icon: "engineering",
    title: "Customised Engineering",
    description:
      "Tailored solutions from structural design to on-site installation, engineered to your exact specifications.",
  },
  {
    icon: "trust",
    title: "Trusted Partnerships",
    description:
      "Delivering to India's top developers, contractors, telecom majors, and government bodies since 2004.",
  },
  {
    icon: "digital",
    title: "Digital Integration",
    description:
      "ERP-integrated production, real-time dashboards, and compliance safeguards ensure precision at scale.",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
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
    label: "Investor Relations",
    href: "/investor-relations/overview",
    children: [
      { label: "Overview", href: "/investor-relations/overview" },
      { label: "Financial Information", href: "/investor-relations/financial-information" },
      { label: "Governance", href: "/investor-relations/governance" },
    ],
  },
  {
    label: "Beyond Business",
    href: "/sustainability",
    children: [
      { label: "Sustainability", href: "/sustainability" },
      { label: "CSR", href: "/csr" },
      { label: "Partner With Us", href: "/partner-with-us" },
      { label: "Careers", href: "/careers" },
      { label: "Blog & News", href: "/blog" },
    ],
  },
  { label: "Contact", href: "/contact" },
] as const;
