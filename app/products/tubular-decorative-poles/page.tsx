import type { Metadata } from "next";
import { getProductBySlug } from "@/lib/products";
import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Tubular & Decorative Poles — POLMAX | Premier Bars Limited",
  description: "POLMAX poles: octagonal, conical, tubular, high-mast. CNC plasma cut, hot-dip galvanized.",
};

export default function PolesPage() {
  const product = getProductBySlug("tubular-decorative-poles");
  if (!product) return notFound();
  return <ProductPageLayout product={product} />;
}
