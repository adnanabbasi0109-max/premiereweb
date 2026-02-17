import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Premier Bars Limited",
  description: "Privacy policy for the Premier Bars Limited website — data collection, usage, and your rights.",
};

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: "We collect information you provide directly — such as your name, email address, phone number, and company details when you fill out contact forms, enquiry forms, or newsletter subscriptions on our website. We also collect technical information automatically, including your IP address, browser type, referring URL, and pages visited, through standard server logs and cookies.",
  },
  {
    title: "2. How We Use Your Information",
    content: "Information you submit is used to respond to your enquiries, process product or pricing requests, send you relevant product updates or industry insights you have opted into, and improve the quality and relevance of our website content. We do not use your personal data for automated decision-making or profiling.",
  },
  {
    title: "3. Cookies",
    content: "Our website uses functional cookies to remember your preferences and analytical cookies (via anonymised analytics tools) to understand aggregate traffic patterns. We do not use advertising or tracking cookies. You may disable cookies in your browser settings; some site features may be affected.",
  },
  {
    title: "4. Data Sharing",
    content: "We do not sell, rent, or trade your personal data to third parties. We may share your information with trusted service providers who assist in operating our website or conducting our business (e.g., email delivery services), under strict confidentiality obligations. We may disclose information if required by law or to protect the rights and safety of Premier Bars Limited.",
  },
  {
    title: "5. Data Retention",
    content: "We retain your personal data only as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Contact form data is retained for a maximum of 24 months unless an ongoing commercial relationship has been established.",
  },
  {
    title: "6. Your Rights",
    content: "You have the right to access the personal data we hold about you, request correction of inaccurate information, withdraw consent for marketing communications, and request deletion of your data where no legal obligation to retain it exists. To exercise these rights, write to us at info@premierbars.com with the subject 'Privacy Request'.",
  },
  {
    title: "7. Security",
    content: "We implement technical and organisational measures — including TLS encryption for data in transit and access controls for stored data — to protect your personal information. No internet transmission is completely secure; we will notify you of any breach affecting your data as required by applicable law.",
  },
  {
    title: "8. Changes to This Policy",
    content: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Your continued use of our website after changes are posted constitutes your acceptance of the revised policy.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen pt-28">
      <div className="max-w-3xl mx-auto px-6 pb-24">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        <div className="mt-8">
          <h1 className="text-3xl font-extrabold text-white mb-2">Privacy Policy</h1>
          <p className="text-white/40 text-sm mb-10">Last updated: January 2025 · Effective date: January 1, 2025</p>
          <p className="text-white/60 leading-relaxed mb-8">Premier Bars Limited ("we", "our", "the Company") is committed to protecting the privacy of individuals who visit our website and interact with our digital services. This policy explains what data we collect, how we use it, and your rights with respect to it.</p>
          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="text-white font-bold text-lg mb-3">{s.title}</h2>
                <p className="text-white/60 leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm">For privacy-related queries, contact: <a href="mailto:info@premierbars.com" className="text-[#C9A84C] hover:underline">info@premierbars.com</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}
