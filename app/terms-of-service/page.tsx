import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | ANDRA",
  description: "Terms of Service for ANDRA."
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-porcelain px-6 py-10 text-obsidian sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="border-b border-obsidian/10 pb-6">
          <Link href="/" className="text-xs uppercase tracking-editorial text-stone">
            Back to ANDRA
          </Link>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Terms of Service
          </h1>
        </div>

        <div className="space-y-8 py-10 text-base leading-8 text-stone">
          <section>
            <p>
              By using this website, you agree to these Terms of Service. If you
              do not agree, please do not use the site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-obsidian">Website Use</h2>
            <p>
              This website is provided for informational and business inquiry
              purposes. Content may be updated, changed, or removed at any time.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-obsidian">No Guarantee of Results</h2>
            <p>
              Strategy, advisory, and marketing insights shared on this site do
              not constitute guarantees of business outcomes, performance, or
              future results.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-obsidian">Intellectual Property</h2>
            <p>
              All website content, branding, copy, and design elements are owned
              by ANDRA unless otherwise stated and may not be reused without
              permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-obsidian">Limitation of Liability</h2>
            <p>
              ANDRA is not liable for damages arising from use of this website,
              reliance on its content, or temporary unavailability of its pages or
              services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-obsidian">Contact</h2>
            <p>
              Questions regarding these terms may be submitted through the contact
              methods listed on the website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
