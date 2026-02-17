import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href ? `https://premierbarsltd.com${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-3">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-white/50">
          <li>
            <Link href="/" className="hover:text-[#C9A84C] transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-white/20">›</span>
              {item.href && i < items.length - 1 ? (
                <Link href={item.href} className="hover:text-[#C9A84C] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-white/80">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
