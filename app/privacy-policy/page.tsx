import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy | ANDRA",
  description: "Privacy Policy for ANDRA.",
  pathname: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-porcelain px-6 py-10 text-obsidian sm:px-8 lg:px-12">
      <Script id="privacy-webpage-schema" type="application/ld+json">
        {JSON.stringify(
          webPageSchema({
            name: "Privacy Policy",
            description: "Privacy Policy for ANDRA.",
            path: "/privacy-policy"
          })
        )}
      </Script>
      <Script id="privacy-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy-policy" }
          ])
        )}
      </Script>
      <div className="mx-auto max-w-4xl">
        <div className="border-b border-obsidian/10 pb-6">
          <Link href="/" className="text-xs uppercase tracking-editorial text-stone">
            Back to ANDRA
          </Link>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Privacy Policy
          </h1>
        </div>

        <div className="space-y-8 py-10 text-base leading-8 text-stone">
          <section>
            <p>
              ANDRA respects your privacy. This page explains what information may
              be collected through this website, how it may be used, and how you
              can request updates or deletion.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-obsidian">Information Collected</h2>
            <p>
              If you submit your contact details through this website, we may
              collect your name, email address, and any message you choose to
              provide.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-obsidian">How Information Is Used</h2>
            <p>
              Submitted information may be used to respond to inquiries, share
              relevant updates, and improve consulting communications and client
              intake workflows.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-obsidian">Third-Party Services</h2>
            <p>
              Form submissions may later be processed through trusted third-party
              tools such as email, CRM, automation, or workflow platforms. Those
              services may maintain their own privacy practices.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-obsidian">Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your
              submitted personal information by contacting ANDRA directly.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-obsidian">Updates</h2>
            <p>
              This Privacy Policy may be updated from time to time as the website
              and its systems evolve.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
