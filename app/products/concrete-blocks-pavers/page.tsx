import type { Metadata } from "next";
import { getProductBySlug } from "@/lib/products";
import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Concrete Blocks & Pavers — PAVCON | Premier Bars Limited",
  description: "PAVCON concrete products: solid blocks, pavers, kerb stones, EPS blocks. Vibro-Compact technology.",
};

export default function PaversPage() {
  const product = getProductBySlug("concrete-blocks-pavers");
  if (!product) return notFound();
  return <ProductPageLayout product={product} />;
}
