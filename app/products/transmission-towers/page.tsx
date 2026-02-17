import type { Metadata } from "next";
import { getProductBySlug } from "@/lib/products";
import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Transmission & Communication Towers | Premier Bars Limited",
  description: "Lattice and tubular telecom towers for Indus Towers and Airtel. Pan-India deployment.",
};

export default function TowersPage() {
  const product = getProductBySlug("transmission-towers");
  if (!product) return notFound();
  return <ProductPageLayout product={product} />;
}
