import type { Metadata } from "next";
import { getProductBySlug } from "@/lib/products";
import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "TMT Bars — Fe550 & Fe550D | Premier Bars Limited",
  description: "India's first GreenPro certified TMT bars. Fe550 and Fe550D grades with Tempcore technology.",
};

export default function TMTBarsPage() {
  const product = getProductBySlug("tmt-bars");
  if (!product) return notFound();
  return <ProductPageLayout product={product} />;
}
