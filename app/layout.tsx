import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/Toast";
import { FloatingExtras } from "@/components/shared/FloatingExtras";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Premier Bars Limited — Engineering India's Infrastructure",
    template: "%s | Premier Bars Limited",
  },
  description:
    "Premier Bars Limited is India's leading steel and infrastructure manufacturer based in Jaipur, Rajasthan. TMT Bars, Pre-Engineered Buildings, Towers, Concrete Pavers, Decorative Poles, and Scaffolding. GreenPro certified. 20+ years of excellence.",
  keywords: [
    "TMT bars Jaipur",
    "Fe550 TMT bars India",
    "Pre-engineered buildings Rajasthan",
    "telecom towers India",
    "PAVCON concrete pavers",
    "POLMAX decorative poles",
    "Premier Bars Limited",
    "GreenPro certified steel",
    "infrastructure materials India",
  ],
  authors: [{ name: "Premier Bars Limited" }],
  creator: "Premier Bars Limited",
  metadataBase: new URL("https://premierbarsltd.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://premierbarsltd.com",
    siteName: "Premier Bars Limited",
    title: "Premier Bars Limited — Engineering India's Infrastructure",
    description:
      "Steel. Concrete. Towers. Poles. Structures that endure. GreenPro certified TMT bars and infrastructure products from Jaipur, Rajasthan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premier Bars Limited",
    description: "Engineering India's Infrastructure Since 2004",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${grotesk.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased font-body bg-[var(--background)] text-[var(--foreground)]">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ToastProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <FloatingExtras />
        </ToastProvider>
      </body>
    </html>
  );
}
