import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/inquiry-form";
import { bookIntroCallUrl } from "@/lib/contact";
import { buildPageMetadata, siteName, siteUrl } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";

const chatGptAdsKeywords = [
  "ChatGPT Ads",
  "ChatGPT Ads Manager",
  "OpenAI Ads Manager Beta",
  "AI advertising",
  "advertising inside ChatGPT",
  "ChatGPT ad formats",
  "ChatGPT Ads pros and cons",
  "ChatGPT Ads restrictions",
  "Sponsored Agents ChatGPT",
  "advertising in AI chat"
];

const lastVerified = "September 18, 2026";

const topline =
  "ChatGPT Ads is OpenAI's advertising platform for placing single-image ads inside ChatGPT. It's in public beta, open to eligible businesses only in supported countries, with static 1:1 creative, Maximize Results bidding, conversion-optimized campaigns, custom audiences, and integrations with measurement partners. It's a first-mover awareness play in a new intent surface — worth a controlled test, not yet a channel to bet the business on.";

const cheatSheet = [
  {
    label: "Status",
    value: "Public beta. Capabilities and pricing evolving."
  },
  {
    label: "Where ads run",
    value: "Inside ChatGPT surfaces, served by OpenAI Ads Manager."
  },
  {
    label: "Who can advertise",
    value: "Eligible businesses only. No individual advertisers or agency-on-behalf accounts."
  },
  {
    label: "Country access",
    value: "Gated by advertiser business country. Country, currency, and time zone lock at account creation."
  },
  {
    label: "Ad formats",
    value: "Static 1:1 image ads. Sponsored Agents also supported. No video, no carousels."
  },
  {
    label: "Campaign types",
    value: "Guided single campaigns and CSV bulk upload. Product-feed campaigns supported through a separate flow, not CSV."
  },
  {
    label: "Bidding",
    value: "Maximize Results strategy. Daily budgets with automatic pacing."
  },
  {
    label: "Conversions",
    value: "Conversion-optimized campaigns, conversion measurement, event-quality signals."
  },
  {
    label: "Audiences",
    value: "Custom audiences setup at the campaign level."
  },
  {
    label: "Measurement",
    value: "Impressions, clicks, CTR, spend + measurement-partner and mobile-MMP integrations."
  },
  {
    label: "Access model",
    value: "Self-serve via Ads Manager or through ChatGPT Ads Manager inside ChatGPT. Team roles and API keys."
  },
  {
    label: "Billing",
    value: "Credit card, per-advertiser billing profile. Campaigns don't deliver until billing is set."
  }
];

const proPoints = [
  "You are in front of intent, not scroll. ChatGPT users are asking questions and comparing options, which is very different attention than a feed.",
  "First-mover positioning inside a new ad ecosystem. Costs and competition are still forming.",
  "Real infrastructure: campaigns, ad groups, bulk upload, conversion tracking, MMP integrations, roles, API keys.",
  "Fast performance signal. Impressions, clicks, and CTR appear within minutes."
];

const conPoints = [
  "It's a beta. Features, availability, and behavior will change without warning.",
  "Creative is limited to a static 1:1 image. No video, no carousels, no shoppable multi-frame formats yet.",
  "Country, currency, and time zone lock at account creation. No self-serve edits later.",
  "Individual advertisers aren't supported. Agencies can only join after the client creates the account.",
  "Account review is manual (Persona + policy). No expedited path.",
  "Product-feed campaigns can't be created via CSV bulk upload today."
];

const setupSteps = [
  {
    number: "01",
    title: "Create the advertiser account",
    description:
      "Sign in with OpenAI. One owner per business. Enter business name, website, logo, industry, country, currency, time zone."
  },
  {
    number: "02",
    title: "Persona verification + policy review",
    description:
      "Complete identity verification through Persona. OpenAI reviews eligibility against its Ads Policies. Rolling queue — no expedite."
  },
  {
    number: "03",
    title: "Finalize account info",
    description:
      "Confirm account name and logo exactly as they should appear inside the ad unit. Ads will not serve until this is complete."
  },
  {
    number: "04",
    title: "Set billing and payment",
    description:
      "Billing profile with business name, invoice email, address. Add a credit card. Campaigns don't deliver until billing is complete."
  },
  {
    number: "05",
    title: "Invite the team",
    description:
      "Add teammates from Settings > Users. Different brands or legal entities each need their own advertiser account."
  }
];

const strategicTake = [
  "Treat ChatGPT Ads as a positioning bet inside a new intent surface, not yet as a proven direct-response channel.",
  "Design creative for the constraint: one square image, one clear promise, real product, zero clutter.",
  "Run in parallel with your existing paid channel so you have a stable baseline to compare CTR, pacing, and downstream signal.",
  "Lock the account structure correctly on day one. Country, currency, and time zone can't be changed later."
];

const faqItems = [
  {
    question: "What is ChatGPT Ads?",
    answer:
      "OpenAI's advertising platform inside ChatGPT, managed through Ads Manager Beta. Eligible businesses create campaigns, ad groups, and ads, and measure performance in one place."
  },
  {
    question: "Can individuals or solo creators run ChatGPT Ads?",
    answer:
      "Not via self-serve. Only eligible business advertiser accounts are supported. Solo operators generally need a registered business entity."
  },
  {
    question: "What creative formats are supported right now?",
    answer:
      "Static 1:1 image creative and Sponsored Agents. No video, carousels, or multi-frame formats yet."
  },
  {
    question: "How fast do metrics appear?",
    answer:
      "Impressions, clicks, and CTR appear within minutes. Spend can update later, so a temporary zero-spend value doesn't necessarily mean no charges have accrued."
  },
  {
    question: "Should a brand be running ChatGPT Ads today?",
    answer:
      "If you're a business, your audience is inside ChatGPT, and you can commit to real creative discipline and clean testing, it's worth a controlled test. If you need a mature direct-response channel with deep attribution, wait."
  },
  {
    question: "How often is this page updated?",
    answer:
      "Every ChatGPT Ads help article from OpenAI is checked weekly. When something meaningful changes, this page is updated within days."
  }
];

function ChatGptAdsHeroArtwork() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(160deg,rgba(255,255,255,0.52),rgba(255,255,255,0.2))] p-5 shadow-[0_30px_90px_rgba(17,17,17,0.08)] backdrop-blur-xl sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(255,255,255,0.9),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(217,167,154,0.24),transparent_26%),radial-gradient(circle_at_74%_82%,rgba(28,34,40,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(28,34,40,0.034)_1px,transparent_1px),linear-gradient(90deg,rgba(28,34,40,0.024)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative min-h-[26rem] overflow-hidden rounded-[1.7rem] border border-white/50 bg-white/34 p-6 sm:min-h-[28rem] sm:p-8">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-obsidian/10 bg-white/78 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-stone">
            ChatGPT
          </span>
          <span className="rounded-full border border-blush/32 bg-shell/60 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-obsidian">
            Beta
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <div className="max-w-[22rem] rounded-[1.2rem] rounded-tl-[0.4rem] border border-obsidian/10 bg-white/86 px-4 py-3 text-sm leading-6 text-stone shadow-[0_10px_28px_rgba(17,17,17,0.05)]">
            What is the best AI workflow tool for growth teams?
          </div>
          <div className="ml-auto max-w-[22rem] rounded-[1.2rem] rounded-tr-[0.4rem] border border-obsidian/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.94),rgba(231,216,207,0.7))] px-4 py-3 text-sm leading-6 text-obsidian shadow-[0_12px_30px_rgba(17,17,17,0.06)]">
            Here are a few directions worth looking at, depending on how your team already works…
          </div>
        </div>

        <div className="mt-8 rounded-[1.2rem] border border-blush/30 bg-white/78 p-4 shadow-[0_16px_40px_rgba(17,17,17,0.06)]">
          <div className="flex items-center justify-between">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-blush">
              Sponsored
            </span>
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-stone/70">
              1:1 image
            </span>
          </div>
          <div className="mt-3 flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[0.9rem] border border-obsidian/10 bg-[linear-gradient(135deg,rgba(217,167,154,0.72),rgba(231,216,207,0.6))]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.7),transparent_50%)]" />
            </div>
            <div className="min-w-0">
              <p className="font-serif text-[1.05rem] leading-tight text-obsidian">
                Your brand, but inside the question.
              </p>
              <p className="mt-1 text-xs leading-5 text-stone">
                One image. One clear promise. That is the format today.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-stone/72">
          Illustrative — not an actual OpenAI ad unit
        </p>
      </div>
    </div>
  );
}

export const metadata: Metadata = buildPageMetadata({
  title: "ChatGPT Ads: The Cheat Sheet, Pros, and Cons | ANDRA",
  description:
    "A tight, plain-English cheat sheet for ChatGPT Ads (OpenAI Ads Manager Beta): what's supported today, creative and format limits, bidding and measurement, pros, cons, and how to think about it strategically. Updated weekly.",
  pathname: "/chatgpt-ads",
  keywords: chatGptAdsKeywords
});

export default function ChatGptAdsPage() {
  return (
    <main className="relative overflow-hidden bg-porcelain text-obsidian">
      <JsonLd
        id="chatgpt-ads-webpage-schema"
        data={{
          ...webPageSchema({
            name: "ChatGPT Ads: The Cheat Sheet, Pros, and Cons",
            description:
              "A current-state cheat sheet for ChatGPT Ads and OpenAI Ads Manager Beta, including creative limits, bidding, measurement, and setup.",
            path: "/chatgpt-ads"
          }),
          datePublished: "2026-09-15",
          dateModified: "2026-09-18",
          about: {
            "@type": "Thing",
            name: "ChatGPT Ads",
            sameAs: "https://help.openai.com/en/collections/20001223-chatgpt-ads"
          },
          keywords: chatGptAdsKeywords.join(", ")
        }}
      />
      <JsonLd
        id="chatgpt-ads-service-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "ChatGPT Ads Strategy and Advisory",
          description:
            "Advisory on running campaigns inside OpenAI Ads Manager Beta, evaluating whether ChatGPT Ads fits a given brand, and designing creative for the current single-image beta format.",
          provider: { "@id": `${siteUrl}/#organization` },
          areaServed: "Global",
          serviceType: "ChatGPT Ads strategy and advisory",
          url: `${siteUrl}/chatgpt-ads`,
          about: {
            "@type": "Thing",
            name: "ChatGPT Ads",
            sameAs: "https://help.openai.com/en/collections/20001223-chatgpt-ads"
          }
        }}
      />
      <JsonLd
        id="chatgpt-ads-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/ai-workflow-audit" },
          { name: "ChatGPT Ads", path: "/chatgpt-ads" }
        ])}
      />
      <JsonLd id="chatgpt-ads-faq-schema" data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        }} />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-hero-radial opacity-90" />
      <div className="pointer-events-none absolute right-[-4rem] top-[8rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(217,167,154,0.22),transparent_70%)] blur-3xl" />

      <section className="hero-fade relative z-10 mx-auto max-w-7xl px-6 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12 lg:pb-20 lg:pt-28">
        <div>
          <nav
            aria-label="Breadcrumb"
            className="text-xs uppercase tracking-editorial text-stone sm:text-sm"
          >
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="hover:text-obsidian">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-stone/50">
                /
              </li>
              <li>
                <Link href="/ai-workflow-audit" className="hover:text-obsidian">
                  Services
                </Link>
              </li>
              <li aria-hidden="true" className="text-stone/50">
                /
              </li>
              <li aria-current="page" className="text-obsidian">
                ChatGPT Ads
              </li>
            </ol>
          </nav>
          <h1 className="mt-6 max-w-[65rem] font-serif text-[3.3rem] leading-[1.04] text-obsidian sm:max-w-[72rem] sm:text-[4.2rem] lg:max-w-[78rem] lg:text-[5rem]">
            ChatGPT Ads, in plain English.
          </h1>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.44fr_0.56fr] lg:items-center lg:gap-14">
            <div className="max-w-xl lg:pb-2">
              <p className="max-w-2xl text-base leading-8 text-stone sm:text-lg sm:leading-9">
                A grounded cheat sheet on OpenAI&apos;s new advertising product: what it
                actually is today, what you can and can&apos;t ship, and whether it belongs
                in your stack. Updated every week against OpenAI&apos;s live documentation.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-stone/72">
                Last verified against OpenAI documentation on {lastVerified}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={bookIntroCallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-click="contact_click"
                  data-track-category="chatgpt_ads"
                  data-track-label="hero_calendly"
                  data-track-destination={bookIntroCallUrl}
                  className="inline-flex min-h-14 items-center justify-center rounded-[0.72rem] bg-ink px-7 py-4 text-sm uppercase tracking-[0.18em] text-porcelain transition duration-300 hover:scale-[1.02] hover:bg-obsidian"
                >
                  Talk Through Your Setup
                </a>
                <Link
                  href="/ai-workflow-audit"
                  data-track-click="navigation_click"
                  data-track-category="chatgpt_ads"
                  data-track-label="hero_workflow_audit"
                  data-track-destination="/ai-workflow-audit"
                  className="inline-flex min-h-14 items-center justify-center rounded-[0.72rem] border border-obsidian/18 bg-white/44 px-7 py-4 text-sm uppercase tracking-[0.18em] text-obsidian transition duration-300 hover:scale-[1.02] hover:border-obsidian/36 hover:bg-white"
                >
                  See Workflow Audit
                </Link>
              </div>
            </div>

            <ChatGptAdsHeroArtwork />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 sm:px-8 lg:px-12 lg:pb-16">
        <div className="relative overflow-hidden rounded-[1.9rem] border border-white/60 bg-[linear-gradient(160deg,rgba(255,255,255,0.6),rgba(231,216,207,0.22))] px-6 py-8 shadow-[0_28px_80px_rgba(17,17,17,0.07)] backdrop-blur-xl sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute right-[-5rem] top-[-4rem] h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(217,167,154,0.22),transparent_68%)] blur-3xl" />
          <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
            The Topline
          </p>
          <p className="mt-5 max-w-4xl font-serif text-[1.85rem] leading-[1.28] text-obsidian sm:text-[2.15rem] sm:leading-[1.24]">
            {topline}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12 lg:pb-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              The Cheat Sheet
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
              Everything you need to know, on one page.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-stone sm:text-base">
            Synthesized from OpenAI&apos;s full ChatGPT Ads help collection — 30 articles
            covering setup, campaigns, creative, bidding, measurement, and admin.
          </p>
        </div>

        <div className="overflow-hidden rounded-[1.6rem] border border-white/55 bg-white/50 shadow-[0_20px_60px_rgba(17,17,17,0.05)] backdrop-blur-sm">
          <dl className="divide-y divide-obsidian/8">
            {cheatSheet.map((item) => (
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
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              The Pros
            </p>
            <h2 className="mt-4 font-serif text-[2.4rem] leading-tight text-obsidian sm:text-[2.6rem]">
              Why it&apos;s worth attention.
            </h2>
            <ul className="mt-6 grid gap-3">
              {proPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 border-b border-obsidian/8 pb-3 text-base leading-7 text-obsidian last:border-0 sm:text-[1.05rem]"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blush" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              The Current Cons
            </p>
            <h2 className="mt-4 font-serif text-[2.4rem] leading-tight text-obsidian sm:text-[2.6rem]">
              What&apos;s still missing.
            </h2>
            <ul className="mt-6 grid gap-3">
              {conPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 border-b border-obsidian/8 pb-3 text-base leading-7 text-obsidian last:border-0 sm:text-[1.05rem]"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-obsidian/40" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              Getting In
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
              How setup works.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-stone sm:text-lg">
              Five steps. A few of the choices lock in permanently, so get entity, country,
              currency, and time zone right the first time.
            </p>
          </div>

          <ol className="relative space-y-0 border-l border-obsidian/12 pl-6 sm:pl-8">
            {setupSteps.map((step, index) => (
              <li key={step.number} className={index === setupSteps.length - 1 ? "" : "pb-6 sm:pb-7"}>
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
          <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
            The Honest Strategic Take
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
            How to think about it right now.
          </h2>
          <ul className="mt-8 grid gap-3 max-w-4xl">
            {strategicTake.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-base leading-7 text-obsidian sm:text-[1.05rem]"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blush" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 rounded-[1.9rem] border border-white/55 bg-white/36 px-6 py-7 shadow-[0_20px_60px_rgba(17,17,17,0.05)] backdrop-blur-sm lg:grid-cols-[0.76fr_1.24fr] lg:gap-16 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              Work Together
            </p>
            <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
              Thinking about running ChatGPT Ads?
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-stone sm:text-lg">
              Whether you want a sanity check on eligibility, a creative plan for the
              single-image format, or a full advisory arrangement while you test the channel,
              start a conversation.
            </p>
          </div>

          <InquiryForm
            defaultFocus="ChatGPT Ads"
            sourceLabel="ChatGPT Ads Page"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="divide-y divide-obsidian/10 border-y border-obsidian/10">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="grid gap-4 py-7 md:grid-cols-[0.42fr_0.58fr] md:gap-10"
            >
              <h2 className="font-serif text-[1.9rem] leading-tight text-obsidian sm:text-[2.15rem]">
                {item.question}
              </h2>
              <p className="text-base leading-8 text-stone sm:text-lg">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-6 sm:px-8 lg:px-12 lg:pb-24">
        <div className="rounded-[1.9rem] bg-[linear-gradient(160deg,rgba(28,34,40,0.94),rgba(17,17,17,0.88))] px-6 py-8 text-white shadow-[0_28px_80px_rgba(17,17,17,0.16)] sm:px-8 sm:py-9">
          <p className="text-xs uppercase tracking-editorial text-white/60 sm:text-sm">
            Sources & Freshness
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-[2.1rem] leading-[1.12] text-white sm:text-[2.5rem]">
            This page tracks OpenAI&apos;s full ChatGPT Ads help collection weekly.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
            All 30 articles in{" "}
            <a
              href="https://help.openai.com/en/collections/20001223-chatgpt-ads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              OpenAI&apos;s ChatGPT Ads collection
            </a>{" "}
            — covering setup, campaigns, creative, bidding, measurement, and admin — are
            diffed every Monday. Substantive changes flow back into this cheat sheet.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/58">
            Last verified {lastVerified}
          </p>
        </div>
      </section>
    </main>
  );
}
