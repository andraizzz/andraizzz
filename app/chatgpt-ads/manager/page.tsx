import type { Metadata } from "next";
import Link from "next/link";
import { bookIntroCallUrl } from "@/lib/contact";
import { buildPageMetadata, siteName, siteUrl } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";

const keywords = [
  "ChatGPT Ads Manager",
  "OpenAI Ads Manager",
  "OpenAI Ads Manager Beta",
  "ChatGPT Ads Manager Beta",
  "ads manager chatgpt",
  "ads manager openai",
  "ads.openai.com",
  "ChatGPT Ads Manager plugin",
  "ChatGPT Ads Manager setup"
];

const lastVerified = "November 12, 2026";

const whatItIs = [
  { label: "Product name", value: "OpenAI Ads Manager Beta" },
  { label: "Where it lives", value: "ads.openai.com (web) + ChatGPT Ads Manager inside ChatGPT (self-serve setup only)" },
  { label: "Status", value: "Public beta. Evolving month-to-month." },
  { label: "Who it's for", value: "Eligible business advertisers in supported countries. No individual advertisers." },
  { label: "What it manages", value: "ChatGPT Ads: campaigns, ad groups, ads, budgets, bidding, measurement, billing, access control." },
  { label: "Access path", value: "Sign up with an OpenAI account, complete Persona verification + policy review, then finalize account info and billing." }
];

const canDo = [
  "Create campaigns individually in the guided workflow or at scale with CSV bulk upload (product-feed campaigns go through a separate flow).",
  "Set Reach, Clicks, or Conversions as campaign objectives.",
  "Choose Maximize Results or CPC bidding, with daily or campaign-total budgets.",
  "Build custom audiences at the campaign level.",
  "Create single-image or multi-image ads (4–6 × 1:1 open beta since October 26, 2026).",
  "Track impressions, clicks, CTR, and spend. Impressions/clicks refresh ~every 15 minutes; spend can lag 7–8 hours.",
  "Wire up conversion measurement and connect measurement-partner or mobile-MMP integrations.",
  "Invite team members with roles and permissions; manage API keys and change logs."
];

const cantDoYet = [
  "Edit the account country, currency, or time zone after creation — those lock on day one.",
  "Create product-feed campaigns via CSV bulk upload (they have their own flow).",
  "Run video ads (not supported).",
  "Serve ads outside of supported countries (ads won't deliver even if the account was created for an unsupported country).",
  "Expedite account review or ad review.",
  "Self-serve as an individual advertiser or as an agency on a client's behalf (agencies can be invited after the client sets up the account)."
];

const howToAccess = [
  {
    number: "01",
    title: "Go to ads.openai.com",
    description: "Sign in with an OpenAI account. If you don't have one, create it during the sign-up flow."
  },
  {
    number: "02",
    title: "Enter business details",
    description: "Business name, website, logo, industry, country, currency, time zone. Country/currency/time zone lock here — get them right."
  },
  {
    number: "03",
    title: "Complete Persona verification",
    description: "OpenAI runs identity verification through Persona, then reviews against the Ads Policies. Rolling queue, no expedite."
  },
  {
    number: "04",
    title: "Finalize account info + billing",
    description: "Confirm account name and logo exactly as they should appear in the ad unit. Add a credit card or set up postpaid invoice. Campaigns don't deliver until billing is complete."
  },
  {
    number: "05",
    title: "Build your first campaign",
    description: "Guided creation or CSV upload. Multi-image creative and conversion-optimized campaigns are supported out of the gate."
  }
];

const chatgptPluginRows = [
  {
    label: "What it is",
    value: "A ChatGPT plugin that lets eligible business advertisers start self-serve account setup from inside ChatGPT."
  },
  {
    label: "What it does",
    value: "Walks you through advertiser-account creation, basic campaign actions, and performance queries in a chat window."
  },
  {
    label: "What it doesn't do",
    value: "Doesn't decide positioning, creative, bid strategy, or optimization. The strategy layer still lives outside the tool."
  }
];

const faqItems = [
  {
    question: "What is ChatGPT Ads Manager?",
    answer:
      "The product name for OpenAI's advertising platform is OpenAI Ads Manager Beta — accessed at ads.openai.com. 'ChatGPT Ads Manager' also refers to the plugin inside ChatGPT that lets eligible business advertisers start self-serve setup from within a chat window. Both route to the same underlying system."
  },
  {
    question: "Where do I sign up for OpenAI Ads Manager?",
    answer:
      "ads.openai.com. You'll need an OpenAI account (create one during the flow if needed). Expect Persona identity verification, a policy review, account-info finalization, and billing setup before campaigns can deliver."
  },
  {
    question: "Who can use ChatGPT Ads Manager?",
    answer:
      "Eligible business advertisers in supported countries. Not individuals, and not agencies acting on a client's behalf (agencies can be invited after the client creates the account)."
  },
  {
    question: "What objectives, bidding, and formats does Ads Manager support?",
    answer:
      "Reach, Clicks, and Conversions objectives. Maximize Results or CPC bidding. Daily or campaign-total budgets (daily pacing is up to 2× per day, 7× per Sun–Sat week). Single-image 1:1 ads, multi-image ads (4–6 × 1:1, open beta), and Sponsored Agents. No video."
  },
  {
    question: "What does it cost to use Ads Manager?",
    answer:
      "Ads Manager itself is free. You pay for ad delivery via your chosen bid strategy (Maximize Results or CPC). There are no published benchmark CPCs yet — the beta is early, and delivery can fluctuate while OpenAI's systems mature."
  }
];

export const metadata: Metadata = buildPageMetadata({
  title: "ChatGPT Ads Manager (OpenAI Ads Manager Beta) — Setup, Features, Limits | ANDRA",
  description:
    "What OpenAI Ads Manager Beta is, how to access it at ads.openai.com, what you can and can't do inside it today, and how the ChatGPT Ads Manager plugin fits in. Updated weekly against OpenAI's documentation.",
  pathname: "/chatgpt-ads/manager",
  keywords
});

export default function ChatGptAdsManagerPage() {
  return (
    <main className="relative overflow-hidden bg-porcelain text-obsidian">
      <JsonLd
        id="chatgpt-ads-manager-webpage-schema"
        data={{
          ...webPageSchema({
            name: "ChatGPT Ads Manager (OpenAI Ads Manager Beta) — Setup, Features, Limits",
            description:
              "What OpenAI Ads Manager Beta is, how to access it, what you can and can't do inside it today.",
            path: "/chatgpt-ads/manager"
          }),
          datePublished: "2026-11-12",
          dateModified: "2026-11-12",
          about: {
            "@type": "SoftwareApplication",
            name: "OpenAI Ads Manager Beta",
            applicationCategory: "AdvertisingApplication",
            url: "https://ads.openai.com",
            operatingSystem: "Web"
          },
          keywords: keywords.join(", ")
        }}
      />
      <JsonLd
        id="chatgpt-ads-manager-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "ChatGPT Ads", path: "/chatgpt-ads" },
          { name: "Ads Manager", path: "/chatgpt-ads/manager" }
        ])}
      />
      <JsonLd
        id="chatgpt-ads-manager-faq-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer }
          }))
        }}
      />
      <JsonLd
        id="chatgpt-ads-manager-article-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "ChatGPT Ads Manager (OpenAI Ads Manager Beta) — Setup, Features, Limits",
          author: { "@type": "Organization", name: siteName, url: siteUrl },
          publisher: { "@id": `${siteUrl}/#organization` },
          datePublished: "2026-11-12",
          dateModified: "2026-11-12",
          mainEntityOfPage: `${siteUrl}/chatgpt-ads/manager`
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-hero-radial opacity-90" />
      <div className="pointer-events-none absolute right-[-4rem] top-[8rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(217,167,154,0.22),transparent_70%)] blur-3xl" />

      <section className="hero-fade relative z-10 mx-auto max-w-7xl px-6 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12 lg:pb-20 lg:pt-28">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li><Link href="/" className="hover:text-obsidian">Home</Link></li>
            <li aria-hidden="true" className="text-stone/50">/</li>
            <li><Link href="/chatgpt-ads" className="hover:text-obsidian">ChatGPT Ads</Link></li>
            <li aria-hidden="true" className="text-stone/50">/</li>
            <li aria-current="page" className="text-obsidian">Ads Manager</li>
          </ol>
        </nav>

        <h1 className="mt-6 max-w-[65rem] font-serif text-[3.3rem] leading-[1.04] text-obsidian sm:max-w-[72rem] sm:text-[4.2rem] lg:max-w-[78rem] lg:text-[5rem]">
          ChatGPT Ads Manager, demystified.
        </h1>

        <p className="mt-8 max-w-3xl text-base leading-8 text-stone sm:text-lg sm:leading-9">
          The product is <strong className="font-semibold text-obsidian">OpenAI Ads Manager Beta</strong>, accessed at{" "}
          <a
            href="https://ads.openai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-obsidian underline decoration-stone/40 underline-offset-4 hover:decoration-obsidian"
          >
            ads.openai.com
          </a>
          . It's where eligible businesses create, launch, and measure ChatGPT Ads campaigns. There's also a ChatGPT Ads Manager plugin inside ChatGPT that handles self-serve setup — both route to the same underlying system.
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-stone/72">
          Last verified against OpenAI documentation on {lastVerified}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12 lg:pb-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">What it is</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
              Six lines on the product itself.
            </h2>
          </div>
        </div>
        <div className="overflow-hidden rounded-[1.6rem] border border-white/55 bg-white/50 shadow-[0_20px_60px_rgba(17,17,17,0.05)] backdrop-blur-sm">
          <dl className="divide-y divide-obsidian/8">
            {whatItIs.map((item) => (
              <div
                key={item.label}
                className="grid gap-2 px-6 py-5 sm:grid-cols-[0.28fr_0.72fr] sm:gap-8 sm:px-8"
              >
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-stone sm:text-[0.78rem]">
                  {item.label}
                </dt>
                <dd className="text-base leading-7 text-obsidian sm:text-[1.05rem]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">What it can do</p>
            <h2 className="mt-4 font-serif text-[2.4rem] leading-tight text-obsidian sm:text-[2.6rem]">
              Inside the dashboard.
            </h2>
            <ul className="mt-6 grid gap-3">
              {canDo.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-obsidian/8 pb-3 text-base leading-7 text-obsidian last:border-0 sm:text-[1.05rem]"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blush" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">What it can't do yet</p>
            <h2 className="mt-4 font-serif text-[2.4rem] leading-tight text-obsidian sm:text-[2.6rem]">
              Known limits.
            </h2>
            <ul className="mt-6 grid gap-3">
              {cantDoYet.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-obsidian/8 pb-3 text-base leading-7 text-obsidian last:border-0 sm:text-[1.05rem]"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-obsidian/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">How to access it</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
              From zero to first campaign.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-stone sm:text-lg">
              Five steps. A couple of them (country, currency, time zone) lock in permanently — get them right the first time.
            </p>
          </div>

          <ol className="relative space-y-0 border-l border-obsidian/12 pl-6 sm:pl-8">
            {howToAccess.map((step, index) => (
              <li key={step.number} className={index === howToAccess.length - 1 ? "" : "pb-6 sm:pb-7"}>
                <div className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full border border-obsidian/20 bg-porcelain">
                  <span className="h-1.5 w-1.5 rounded-full bg-blush" />
                </div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone">
                  Step {step.number}
                </p>
                <h3 className="mt-1.5 font-serif text-[1.45rem] leading-tight text-obsidian sm:text-[1.6rem]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-stone sm:text-base">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="relative overflow-hidden rounded-[1.9rem] border border-white/55 bg-[linear-gradient(160deg,rgba(255,255,255,0.52),rgba(231,216,207,0.22))] px-6 py-8 shadow-[0_24px_70px_rgba(17,17,17,0.06)] backdrop-blur-sm sm:px-10 sm:py-10">
          <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">The ChatGPT Ads Manager plugin</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
            The plugin inside ChatGPT, in three lines.
          </h2>
          <div className="mt-8 overflow-hidden rounded-[1.4rem] border border-white/55 bg-white/60 shadow-[0_18px_44px_rgba(17,17,17,0.04)] backdrop-blur-sm">
            <dl className="divide-y divide-obsidian/8">
              {chatgptPluginRows.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-2 px-5 py-4 sm:grid-cols-[0.3fr_0.7fr] sm:gap-8 sm:px-6"
                >
                  <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-stone">{item.label}</dt>
                  <dd className="text-sm leading-7 text-obsidian sm:text-[1.02rem]">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="relative overflow-hidden rounded-[1.9rem] border border-white/55 bg-white/40 px-6 py-8 shadow-[0_24px_70px_rgba(17,17,17,0.06)] backdrop-blur-sm sm:px-10 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_0.4fr] lg:items-center lg:gap-14">
            <div>
              <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">Work with someone who knows the dashboard</p>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
                Ads Manager handles the plumbing. The strategy is still on you.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-stone sm:text-lg">
                The tool creates campaigns. It doesn't decide positioning, creative, bid logic, or what to test next. That layer is where ChatGPT Ads campaigns actually succeed or fail.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={bookIntroCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center rounded-[0.72rem] bg-ink px-7 py-4 text-sm uppercase tracking-[0.18em] text-porcelain transition duration-300 hover:scale-[1.02] hover:bg-obsidian"
                data-track-click="contact_click"
                data-track-category="chatgpt_ads_manager"
                data-track-label="cta_calendly"
              >
                Talk About Your Setup
              </a>
              <Link
                href="/chatgpt-ads"
                className="inline-flex min-h-14 items-center justify-center rounded-[0.72rem] border border-obsidian/18 bg-white/44 px-7 py-4 text-sm uppercase tracking-[0.18em] text-obsidian transition duration-300 hover:scale-[1.02] hover:border-obsidian/36 hover:bg-white"
              >
                See the Full Cheat Sheet
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="divide-y divide-obsidian/10 border-y border-obsidian/10">
          {faqItems.map((item) => (
            <div key={item.question} className="grid gap-4 py-7 md:grid-cols-[0.42fr_0.58fr] md:gap-10">
              <h2 className="font-serif text-[1.9rem] leading-tight text-obsidian sm:text-[2.15rem]">
                {item.question}
              </h2>
              <p className="text-base leading-8 text-stone sm:text-lg">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-6 sm:px-8 lg:px-12 lg:pb-24">
        <div className="rounded-[1.9rem] bg-[linear-gradient(160deg,rgba(28,34,40,0.94),rgba(17,17,17,0.88))] px-6 py-8 text-white shadow-[0_28px_80px_rgba(17,17,17,0.16)] sm:px-8 sm:py-9">
          <p className="text-xs uppercase tracking-editorial text-white/60 sm:text-sm">Sources</p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
            Setup flow and feature details come from{" "}
            <a
              href="https://help.openai.com/en/articles/20001206-ads-manager-beta-overview"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              OpenAI · Ads Manager Beta Overview
            </a>{" "}
            and{" "}
            <a
              href="https://help.openai.com/en/articles/20001213-ads-manager-beta-account-setup"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              Account Setup
            </a>
            .
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/58">Last verified {lastVerified}</p>
        </div>
      </section>
    </main>
  );
}
