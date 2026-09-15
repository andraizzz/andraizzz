import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { InquiryForm } from "@/components/inquiry-form";
import { bookIntroCallUrl } from "@/lib/contact";
import { buildPageMetadata, siteName, siteUrl } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const chatGptAdsKeywords = [
  "ChatGPT Ads",
  "ChatGPT Ads Manager",
  "OpenAI Ads Manager Beta",
  "AI advertising",
  "advertising inside ChatGPT",
  "ChatGPT ad formats",
  "ChatGPT Ads pros and cons",
  "ChatGPT Ads restrictions",
  "advertising in AI chat",
  "AI ads strategy"
];

const lastVerified = "September 15, 2026";

const currentSnapshot = [
  {
    label: "Product name",
    value: "OpenAI Ads Manager Beta (the platform behind ChatGPT Ads)"
  },
  {
    label: "Status",
    value: "Public beta. Capabilities are limited today and expanding over time."
  },
  {
    label: "Where ads appear",
    value: "Inside ChatGPT surfaces, served through OpenAI Ads Manager."
  },
  {
    label: "Who can advertise",
    value:
      "Eligible business advertisers only. No individual advertisers. Agencies can be invited after a client creates the account."
  },
  {
    label: "Access",
    value:
      "Advertiser accounts are created through OpenAI Ads Manager, or self-serve through ChatGPT Ads Manager inside ChatGPT."
  },
  {
    label: "Availability",
    value:
      "Country-gated. Advertiser access is based on the business or ad-account country, not the country associated with your ChatGPT login."
  }
];

const proPoints = [
  {
    title: "You are in front of intent, not scroll.",
    body:
      "ChatGPT users are asking questions, comparing options, and making decisions. That is a very different quality of attention than a feed."
  },
  {
    title: "First-mover positioning inside AI surfaces.",
    body:
      "Being early inside a new ad ecosystem is the same play that worked in early Meta, YouTube, and TikTok. Costs and competition are still forming."
  },
  {
    title: "One place to manage everything.",
    body:
      "Ads Manager Beta covers campaign creation, ad groups, ads, performance reporting, and account settings in a single platform."
  },
  {
    title: "Bulk workflows are already supported.",
    body:
      "Guided creation for single campaigns, plus CSV bulk upload for supported campaign types. Useful once you are scaling structured accounts."
  },
  {
    title: "Fast performance signal.",
    body:
      "Impressions, clicks, and click-through rate can appear within minutes. Spend can lag, so read the metrics together, not one in isolation."
  },
  {
    title: "Real account infrastructure.",
    body:
      "Multiple team members, roles, API keys, billing profiles, change logs, and support for companies running multiple advertiser accounts."
  }
];

const conPoints = [
  {
    title: "It is a beta. Behavior will change.",
    body:
      "OpenAI states directly that Ads Manager is evolving. Expect features to shift, gaps to appear, and processes to change without warning."
  },
  {
    title: "Creative is currently limited.",
    body:
      "Expect static, square-style creative only in this phase. No video, no carousels, no shoppable multi-frame formats yet. Plan around a single-image visual story."
  },
  {
    title: "Country availability is narrow and locked in.",
    body:
      "Ads Manager is only live in select countries. Country, currency, and time zone cannot be changed after the account is created. Choosing the wrong entity at setup means starting over."
  },
  {
    title: "Individual advertisers cannot participate.",
    body:
      "Only eligible business advertiser accounts are supported. Solo creators, personal brands without a business entity, and agency-owned test accounts are excluded from self-serve setup."
  },
  {
    title: "Account review is manual and can be slow.",
    body:
      "Applications go through identity and business verification via Persona plus an internal ads-policy review. There is no expedited path. Duplicate applications slow things down further."
  },
  {
    title: "Reporting is functional, not deep yet.",
    body:
      "Table views, charts, and CSV exports cover the basics. Attribution nuance, incrementality testing, and downstream conversion depth still need to mature before this becomes a serious primary channel."
  },
  {
    title: "Product-feed campaigns are not fully served yet.",
    body:
      "CSV bulk upload does not currently support creating product-feed campaigns, which limits eCommerce advertisers who rely on catalog-based ads elsewhere."
  }
];

const creativeAndFormat = [
  {
    label: "Format available today",
    value: "Static image creative, single-frame."
  },
  {
    label: "Aspect ratio",
    value: "1:1 square (based on current beta behavior)."
  },
  {
    label: "Video",
    value: "Not supported yet."
  },
  {
    label: "Carousels & multi-frame",
    value: "Not supported yet."
  },
  {
    label: "Product feed / catalog",
    value:
      "Product-feed campaigns cannot yet be created through CSV bulk upload. Plan single-product creative for now."
  },
  {
    label: "Bulk creation",
    value:
      "CSV bulk upload is available for supported campaign types. Use it once you have a stable naming convention."
  }
];

const setupSteps = [
  {
    number: "01",
    title: "Access Ads Manager Beta and create the account",
    description:
      "Sign in with an OpenAI account. If your business does not have one yet, create it during signup. One account owner per business."
  },
  {
    number: "02",
    title: "Onboarding and Persona verification",
    description:
      "Enter business name, website, logo, industry, country, currency, and time zone. Complete identity verification through Persona. The application then enters review."
  },
  {
    number: "03",
    title: "Complete the account info",
    description:
      "Once access is granted, confirm account name and logo exactly as they should appear inside the ad unit. Ads will not serve without this step."
  },
  {
    number: "04",
    title: "Billing and payment",
    description:
      "Create a billing profile with business name, invoice email, and address. Add a credit card. Campaigns do not deliver until billing is complete."
  },
  {
    number: "05",
    title: "Invite the team",
    description:
      "From Settings, invite additional users into the advertiser account. Different brands or legal entities need their own advertiser accounts."
  }
];

const strategicTake = [
  "Treat ChatGPT Ads as a positioning and awareness bet inside a new intent surface, not as a proven direct-response channel yet.",
  "Ship creative that is legible at small square sizes. One visual, one clear promise, real product, no clutter.",
  "Run it in parallel with an existing paid channel so you have a stable baseline to compare CTR, spend pacing, and downstream signal.",
  "Do not migrate a real revenue channel into ChatGPT Ads on the strength of the beta alone. Layer it in.",
  "Get the account structure right on day one. Country, currency, and time zone cannot be changed later."
];

const faqItems = [
  {
    question: "What is ChatGPT Ads?",
    answer:
      "ChatGPT Ads is OpenAI's advertising product inside ChatGPT, managed through Ads Manager Beta. Eligible business advertisers create campaigns, ad groups, and ads, and measure performance in one platform."
  },
  {
    question: "Can individuals or solo creators run ChatGPT Ads?",
    answer:
      "Not through self-serve setup. Only eligible business advertiser accounts are supported today. Solo operators generally need a registered business entity to advertise."
  },
  {
    question: "What creative formats are supported right now?",
    answer:
      "Static single-image creative, 1:1 in current beta behavior. No video, no carousels, and no multi-frame formats yet."
  },
  {
    question: "How fast do metrics appear?",
    answer:
      "Impressions, clicks, and click-through rate can appear within minutes. Spend can update later, so a temporary zero spend value does not necessarily mean no charges have accrued."
  },
  {
    question: "Should a brand be running ChatGPT Ads today?",
    answer:
      "If you are a business, your audience is already inside ChatGPT, and you can commit to real creative discipline and testing hygiene, then it is worth a controlled test. If you are looking for a mature, precise direct-response channel with deep attribution, wait for the next phase."
  },
  {
    question: "How often does this page get updated?",
    answer:
      "This page is checked against the official OpenAI Ads Manager documentation weekly, and updated whenever OpenAI ships new features, formats, or availability changes."
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
  title: "ChatGPT Ads: What It Is, Pros, Cons, and Current Limits | ANDRA",
  description:
    "A clear, up-to-date rundown of ChatGPT Ads (OpenAI Ads Manager Beta): what it is today, where ads appear, what formats are supported, the real pros, the current cons, and how to think about it strategically.",
  pathname: "/chatgpt-ads",
  keywords: chatGptAdsKeywords
});

export default function ChatGptAdsPage() {
  return (
    <main className="relative overflow-hidden bg-porcelain text-obsidian">
      <Script id="chatgpt-ads-webpage-schema" type="application/ld+json">
        {JSON.stringify(
          webPageSchema({
            name: "ChatGPT Ads: What It Is, Pros, Cons, and Current Limits",
            description:
              "A current-state rundown of ChatGPT Ads and OpenAI Ads Manager Beta, including pros, cons, creative limits, and setup requirements.",
            path: "/chatgpt-ads"
          })
        )}
      </Script>
      <Script id="chatgpt-ads-service-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "ChatGPT Ads Strategy and Advisory",
          description:
            "Advisory on running campaigns inside OpenAI Ads Manager Beta, evaluating whether ChatGPT Ads fits a given brand, and designing creative for the current single-image beta format.",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: siteUrl
          },
          areaServed: "Global",
          serviceType: "ChatGPT Ads strategy and advisory",
          url: `${siteUrl}/chatgpt-ads`
        })}
      </Script>
      <Script id="chatgpt-ads-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "ChatGPT Ads", path: "/chatgpt-ads" }
          ])
        )}
      </Script>
      <Script id="chatgpt-ads-faq-schema" type="application/ld+json">
        {JSON.stringify({
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
        })}
      </Script>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-hero-radial opacity-90" />
      <div className="pointer-events-none absolute right-[-4rem] top-[8rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(217,167,154,0.22),transparent_70%)] blur-3xl" />

      <section className="hero-fade relative z-10 mx-auto max-w-7xl px-6 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12 lg:pb-20 lg:pt-28">
        <div>
          <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
            Services / ChatGPT Ads
          </p>
          <h1 className="mt-6 max-w-[65rem] font-serif text-[3.3rem] leading-[1.04] text-obsidian sm:max-w-[72rem] sm:text-[4.2rem] lg:max-w-[78rem] lg:text-[5rem]">
            ChatGPT Ads, in plain English.
          </h1>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.44fr_0.56fr] lg:items-center lg:gap-14">
            <div className="max-w-xl lg:pb-2">
              <p className="max-w-2xl text-base leading-8 text-stone sm:text-lg sm:leading-9">
                A grounded rundown of OpenAI&apos;s new advertising product: what it actually
                is today, where ads appear, what you can and cannot do inside it, and how to
                decide whether it belongs in your stack. Updated every week against
                OpenAI&apos;s live documentation.
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

      <section className="mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12 lg:pb-16">
        <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
          The Current State
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
          What ChatGPT Ads actually is today.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {currentSnapshot.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.35rem] border border-white/55 bg-white/42 px-5 py-5 shadow-[0_18px_44px_rgba(17,17,17,0.04)] backdrop-blur-sm"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone">
                {item.label}
              </p>
              <p className="mt-3 text-base leading-7 text-obsidian sm:text-[1.05rem]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-6 rounded-[1.9rem] border border-white/55 bg-white/36 px-6 py-7 shadow-[0_20px_60px_rgba(17,17,17,0.05)] backdrop-blur-sm lg:grid-cols-2 lg:gap-10 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              The Pros
            </p>
            <h2 className="mt-4 font-serif text-[2.4rem] leading-tight text-obsidian sm:text-[2.8rem]">
              Why it is worth paying attention.
            </h2>
            <ul className="mt-6 grid gap-4">
              {proPoints.map((point) => (
                <li
                  key={point.title}
                  className="rounded-[1.2rem] border border-obsidian/8 bg-white/64 px-5 py-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-shell text-[0.72rem] font-semibold leading-none text-obsidian">
                      +
                    </span>
                    <div>
                      <p className="font-serif text-[1.2rem] leading-snug text-obsidian">
                        {point.title}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-stone sm:text-[0.98rem]">
                        {point.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              The Current Cons
            </p>
            <h2 className="mt-4 font-serif text-[2.4rem] leading-tight text-obsidian sm:text-[2.8rem]">
              What is still missing today.
            </h2>
            <ul className="mt-6 grid gap-4">
              {conPoints.map((point) => (
                <li
                  key={point.title}
                  className="rounded-[1.2rem] border border-obsidian/8 bg-white/64 px-5 py-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-obsidian/12 bg-white text-[0.72rem] font-semibold leading-none text-stone/78">
                      ×
                    </span>
                    <div>
                      <p className="font-serif text-[1.2rem] leading-snug text-obsidian">
                        {point.title}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-stone sm:text-[0.98rem]">
                        {point.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              Creative & Format Restrictions
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
              What you can actually ship.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-stone sm:text-lg">
              This is not the moment to plan a 30-second hero video. Creative today is a
              single square image and clear language. Design for that constraint on purpose.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {creativeAndFormat.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.35rem] border border-white/55 bg-white/38 px-5 py-5 shadow-[0_18px_44px_rgba(17,17,17,0.04)] backdrop-blur-sm"
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone">
                  {item.label}
                </p>
                <p className="mt-3 text-base leading-7 text-obsidian sm:text-[1.05rem]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              Getting In
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
              How account setup works.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-stone sm:text-lg">
              The setup path is straightforward, but a few of the choices lock in permanently.
              Get the entity, country, currency, and time zone right the first time.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {setupSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[1.4rem] border border-white/55 bg-white/38 px-5 py-6 shadow-[0_18px_50px_rgba(17,17,17,0.04)] backdrop-blur-sm sm:px-6"
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone">
                  {step.number}
                </p>
                <h3 className="mt-3 font-serif text-[1.55rem] leading-tight text-obsidian">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="relative overflow-hidden rounded-[1.9rem] border border-white/55 bg-[linear-gradient(160deg,rgba(255,255,255,0.52),rgba(231,216,207,0.22))] px-6 py-8 shadow-[0_24px_70px_rgba(17,17,17,0.06)] backdrop-blur-sm sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(217,167,154,0.22),transparent_68%)] blur-3xl" />
          <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
            The Honest Strategic Take
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
            How to think about ChatGPT Ads right now.
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {strategicTake.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-[1.2rem] border border-obsidian/8 bg-white/68 px-5 py-4"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blush" />
                <span className="text-sm leading-7 text-obsidian sm:text-base">
                  {point}
                </span>
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
            This page is checked against OpenAI&apos;s documentation weekly.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
            Reference articles used to keep this page current:
          </p>
          <ul className="mt-6 grid gap-3 text-sm leading-7 text-white/85 sm:text-base">
            <li>
              <a
                href="https://help.openai.com/en/articles/20001206-ads-manager-beta-overview"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
              >
                OpenAI · Ads Manager Beta Overview
              </a>
            </li>
            <li>
              <a
                href="https://help.openai.com/en/articles/20001213-ads-manager-beta-account-setup"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
              >
                OpenAI · Ads Manager Beta Account Setup
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/58">
            Last verified {lastVerified}
          </p>
        </div>
      </section>
    </main>
  );
}
