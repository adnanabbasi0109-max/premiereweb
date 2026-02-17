import type { Metadata } from "next";
import { getProductBySlug } from "@/lib/products";
import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Pre-Engineered Buildings | Premier Bars Limited",
  description: "Custom-designed pre-engineered steel buildings. 30-50% faster construction.",
};

export default function PEBPage() {
  const product = getProductBySlug("pre-engineered-buildings");
  if (!product) return notFound();
  return <ProductPageLayout product={product} />;
}
