import type { Metadata } from "next";
import { getProductBySlug } from "@/lib/products";
import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Scaffolding & Formworks | Premier Bars Limited",
  description: "High-tensile steel scaffolding and formwork systems on rental and sales models.",
};

export default function ScaffoldingPage() {
  const product = getProductBySlug("scaffolding-formworks");
  if (!product) return notFound();
  return <ProductPageLayout product={product} />;
}
