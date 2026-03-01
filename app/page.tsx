import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsCounter } from "@/components/home/StatsCounter";
import { AboutBrief } from "@/components/home/AboutBrief";
import { ProductGrid } from "@/components/home/ProductGrid";
import { SubBrandsFeature } from "@/components/home/SubBrandsFeature";
import { WhyPremier } from "@/components/home/WhyPremier";
import { ClientLogos } from "@/components/home/ClientLogos";
import { ProjectSpotlight } from "@/components/home/ProjectSpotlight";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { Timeline } from "@/components/home/Timeline";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Premier Bars Limited — Engineering India's Infrastructure Since 2004",
  description:
    "India's leading steel and infrastructure manufacturer. TMT Bars (GreenPro Certified), Pre-Engineered Buildings, Telecom Towers, PAVCON Concrete Pavers, POLMAX Decorative Poles. 20+ years. 500+ clients. Jaipur, Rajasthan.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Premier Bars Limited",
  url: "https://premierbarsltd.com",
  description:
    "India's leading steel and infrastructure manufacturer since 2004, headquartered in Jaipur, Rajasthan.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "402, Nidhi Kamal Tower, Ajmer Road",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302006",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@premierbarsltd.com",
    contactType: "customer service",
  },
  foundingDate: "2004",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <StatsCounter />
      <AboutBrief />
      <ProductGrid />
      <SubBrandsFeature />
      <WhyPremier />
      <ClientLogos />
      <ProjectSpotlight />
      <TestimonialCarousel />
      <Timeline />
      <CTABanner />
    </>
  );
}
