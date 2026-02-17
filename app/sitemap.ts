import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://premierbarsltd.com";
  const now = new Date();

  const routes = [
    "/",
    "/about/overview",
    "/about/board-of-directors",
    "/about/awards",
    "/about/why-us",
    "/products",
    "/products/tmt-bars",
    "/products/pre-engineered-buildings",
    "/products/transmission-towers",
    "/products/concrete-blocks-pavers",
    "/products/tubular-decorative-poles",
    "/products/scaffolding-formworks",
    "/brands/pavcon",
    "/brands/polmax",
    "/manufacturing/our-plants",
    "/manufacturing/quality-assurance",
    "/investor-relations/overview",
    "/investor-relations/financial-information",
    "/investor-relations/governance",
    "/partner-with-us",
    "/sustainability",
    "/csr",
    "/blog",
    "/careers",
    "/contact",
    "/faq",
    "/downloads",
    "/monthly-prices",
    "/privacy-policy",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("/products") ? 0.9 : 0.7,
  }));
}
