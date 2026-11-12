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

const lastVerified = "November 12, 2026";

const topline =
  "ChatGPT Ads is OpenAI's advertising platform for placing ads inside ChatGPT. It's in public beta, open to eligible businesses in supported countries, with 1:1 single-image ads, a multi-image format (open beta since October 26, 2026), Reach, Clicks, and Conversions objectives, Maximize Results and CPC bidding, custom audiences, and measurement-partner integrations. It's a first-mover intent surface — worth a controlled test, with creative and policy discipline being the two things that actually decide whether you ship.";

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
    value: "Single-image 1:1 ads, multi-image ads (4–6 × 1:1, open beta since October 26, 2026), and Sponsored Agents. No video."
  },
  {
    label: "Campaign objectives",
    value: "Reach, Clicks, and Conversions on standard campaigns. Multi-image is supported across all three."
  },
  {
    label: "Campaign types",
    value: "Guided single campaigns and CSV bulk upload. Product-feed campaigns are supported through a separate flow, not CSV."
  },
  {
    label: "Bidding",
    value: "Maximize Results and CPC. Daily budgets pace up to 2× daily and 7× weekly (Sun–Sat). Campaign-total budgets also supported."
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
    value: "Impressions, clicks, CTR refresh ~every 15 minutes. Spend can lag 7–8 hours. Measurement-partner and mobile-MMP integrations supported."
  },
  {
    label: "Access model",
    value: "Self-serve via Ads Manager or through ChatGPT Ads Manager inside ChatGPT. Team roles and API keys."
  },
  {
    label: "Billing",
    value: "Credit card or postpaid invoice (account-level daily spend limit available). Campaigns don't deliver until billing is set."
  },
  {
    label: "Policy guardrails",
    value: "Early-phase categories only: household goods, local services, travel, digital products & education. Healthcare, finance, and legal are case-by-case US-only. Adult, alcohol/tobacco, gambling, political, drugs, housing/job listings are banned."
  }
];

const proPoints = [
  "You are in front of intent, not scroll. ChatGPT users are asking questions and comparing options, which is very different attention than a feed.",
  "First-mover positioning inside a new ad ecosystem. Costs and competition are still forming.",
  "Real infrastructure: campaigns, ad groups, bulk upload, conversion tracking, MMP integrations, roles, API keys.",
  "Multi-image ads (4–6 × 1:1) are now in open beta, so you can finally tell a short visual story instead of carrying everything in one frame.",
  "Fast performance signal. Impressions, clicks, and CTR refresh roughly every 15 minutes."
];

const conPoints = [
  "It's a beta. Features, availability, and behavior will change without warning.",
  "Creative is still image-only. No video.",
  "Spend reporting can lag 7–8 hours, so pacing decisions need to wait for data to settle.",
  "Country, currency, and time zone lock at account creation. No self-serve edits later.",
  "Individual advertisers aren't supported. Agencies can only join after the client creates the account.",
  "Account review is manual (Persona + policy). No expedited path.",
  "Entire categories are closed or restricted: healthcare, financial, legal (US case-by-case), plus hard bans on adult, alcohol/tobacco, gambling, political, drugs, and specific housing/job listings.",
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

const creativeSpecs = [
  {
    label: "Single-image ad",
    value: "One square image at 1:1 aspect ratio, with a headline, description, and single destination URL."
  },
  {
    label: "Multi-image ad (open beta)",
    value: "4–6 square images, each 1:1. All frames share one destination URL and one CTA — currently 'Learn more' only."
  },
  {
    label: "What ChatGPT shows",
    value: "A small square creative inside a chat response. Users are reading quickly on mobile and desktop. Assume the ad is thumb-sized when you design."
  },
  {
    label: "Text in the image",
    value: "Keep it minimal. The frame is small and typography shrinks fast. Carry the pitch in the headline and description, not inside the image."
  },
  {
    label: "What works visually",
    value: "Clear product shot. Real object. High contrast. Clean background. Visual that matches the headline word-for-word."
  },
  {
    label: "Headline & copy",
    value: "Benefit-focused and specific (what it is, who it helps, when it helps). Don't repeat the headline inside the description — use it to add detail. Build many title and copy variations for the system to test."
  },
  {
    label: "Landing page",
    value: "Link to the most relevant page, not the homepage. Don't block OAI-AdsBot or OAI-SearchBot. Add UTMs directly to the destination URL."
  }
];

const rejectionRisks = [
  {
    title: "Healthcare & hospitals",
    body: "Hospital and clinical content is restricted US-only and reviewed case-by-case. Outside the US it's prohibited. Expect rejection on first pass — budget for back-and-forth."
  },
  {
    title: "Health claims & wellness",
    body: "Any claim about preventing, diagnosing, or treating a condition is restricted. Diet pills, detox programs, and supplements with unsupported claims are banned outright."
  },
  {
    title: "Financial & legal services",
    body: "Restricted to approved US advertisers only. You may be asked for proof of licensure. Credit repair, debt settlement, and alternative investments like bullion are banned."
  },
  {
    title: "Alcohol, tobacco, nicotine",
    body: "Banned. Even incidental references are reviewed — if alcohol is anywhere near the focus of the ad, don't ship it."
  },
  {
    title: "Gambling",
    body: "Banned, including online sports betting, casinos, lotteries, and real-money card games. A hotel at a casino resort may pass if gambling isn't the focus."
  },
  {
    title: "Political & contested social issues",
    body: "Banned. Elections, candidates, policy debates, and framing around abortion, immigration, race, religion, or gender identity are all out."
  },
  {
    title: "Recreational drugs",
    body: "Banned, including cannabis and THC products. Non-intoxicating hemp like CBD topicals or hemp clothing may be allowed."
  },
  {
    title: "Adult content",
    body: "Banned, including dating apps, sexual services, adult companion apps, and sexualized imagery. Standard fashion lingerie may pass if presented as retail."
  },
  {
    title: "Interface imitation",
    body: "The ad must look clearly like an ad. Anything that mimics the ChatGPT product UI, voice, or layout to look like a system response will be removed."
  },
  {
    title: "Misleading claims",
    body: "Unsubstantiated outcomes, fake endorsements, exaggerated results, or inconsistency between ad, image, and landing page all get rejected. Review checks the full chain end-to-end."
  }
];

const strategicTake = [
  "Treat ChatGPT Ads as a positioning bet inside a new intent surface, not yet as a proven direct-response channel.",
  "Design for the frame: square, thumb-sized, minimal text in the image. The headline and description carry the pitch.",
  "If your business lives in a restricted category (healthcare, hospitals, financial, legal) or a banned one (adult, alcohol, gambling, political, drugs), check policy fit before you build anything.",
  "Use the multi-image beta to split what you'd normally crush into one frame — product shot, context, detail.",
  "Run in parallel with your existing paid channel so you have a stable baseline to compare CTR, pacing, and downstream signal.",
  "Lock the account structure correctly on day one. Country, currency, and time zone can't be changed later."
];

const faqItems = [
  {
    question: "Does ChatGPT have ads?",
    answer:
      "Yes. ChatGPT Ads launched as a public beta through OpenAI Ads Manager. Ads appear inside ChatGPT responses — a small single-image or multi-image sponsored card labelled 'Sponsored' with an 'Ad' badge, usually under a short 'This might also interest you' lead-in. OpenAI states explicitly that ads do not influence the answers users get from ChatGPT."
  },
  {
    question: "What do ChatGPT ads look like?",
    answer:
      "A compact sponsored card inside a chat response. A single 1:1 image on the left, advertiser name and 'Ad' pill at the top, a one-line headline and short supporting copy, destination URL, and a 'Learn more' CTA. Multi-image ads (open beta since October 26, 2026) show 4–6 square frames with one shared headline and destination. All ads render small — design for the thumbnail scale."
  },
  {
    question: "What is ChatGPT Ads?",
    answer:
      "OpenAI's advertising platform inside ChatGPT, managed through Ads Manager Beta. Eligible businesses create campaigns, ad groups, and ads, and measure performance in one place."
  },
  {
    question: "How much do ChatGPT ads cost?",
    answer:
      "OpenAI doesn't publish a fixed CPC. Pricing is auction-based through Maximize Results and CPC bid strategies, with a daily budget that can pace up to 2× in a single day and 7× in a Sunday–Saturday week. There are no benchmark CPCs yet because the beta is early. Start with a daily budget you can sustain for 2–3 weeks of learning and expect delivery and spend to fluctuate while OpenAI's delivery systems mature."
  },
  {
    question: "ChatGPT Ads vs Google Ads — which is better?",
    answer:
      "Different jobs. Google Ads matches keyword intent at huge scale with deep attribution and 25 years of advertiser infrastructure. ChatGPT Ads matches conversational intent — users asking questions and comparing options in natural language — at much smaller scale, with limited creative formats (single or multi-image, no video, no carousels), and early-stage attribution. Today ChatGPT Ads is a positioning and awareness test inside a new intent surface, not a replacement for Google Ads. The right answer is usually both, with Google Ads carrying the direct-response load."
  },
  {
    question: "When will ChatGPT Ads be available in my country?",
    answer:
      "Availability is country-gated and still expanding. OpenAI publishes the current list in its Ads Manager Availability article. You can create an advertiser account for an unsupported country and OpenAI will notify you when it opens, but your campaigns won't deliver until it does. Country, currency, and time zone lock at account creation, so wait until your business country is supported before you set up."
  },
  {
    question: "Can small businesses run ChatGPT Ads?",
    answer:
      "Yes, if you are a registered business in a supported country and your category isn't restricted. Individual advertisers and agencies acting on behalf of a client can't self-serve setup today — the client has to create the account first, then invite the agency. Expect a manual review step (Persona identity verification plus policy review) that isn't expedited."
  },
  {
    question: "Can individuals or solo creators run ChatGPT Ads?",
    answer:
      "Not via self-serve. Only eligible business advertiser accounts are supported. Solo operators generally need a registered business entity."
  },
  {
    question: "What creative formats are supported right now?",
    answer:
      "Single-image 1:1 ads, multi-image ads (4–6 × 1:1, open beta since October 26, 2026), and Sponsored Agents. No video."
  },
  {
    question: "How much text should the image carry?",
    answer:
      "As little as possible. The ad renders small inside a chat response, and text shrinks fast. Carry the pitch in the headline and description — use the image for a clean product shot or single visual that matches the headline."
  },
  {
    question: "Why would my ad get rejected?",
    answer:
      "Most common: a restricted category (healthcare, hospitals, financial, legal — US case-by-case only), a hard-banned category (adult, alcohol, tobacco, gambling, political, drugs, specific housing/job listings), an unsubstantiated health or outcome claim, or a mismatch between the ad, image, and landing page."
  },
  {
    question: "How fast do metrics appear?",
    answer:
      "Impressions, clicks, and CTR refresh approximately every 15 minutes. Spend can lag 7–8 hours, so a temporary zero-spend value doesn't mean no charges have accrued."
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

function ProductImage() {
  return (
    <svg
      viewBox="0 0 160 160"
      className="h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="ad-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f1e3d8" />
          <stop offset="100%" stopColor="#d7b4a3" />
        </linearGradient>
        <linearGradient id="ad-bottle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6efe9" />
          <stop offset="55%" stopColor="#efe0d3" />
          <stop offset="100%" stopColor="#c99a84" />
        </linearGradient>
        <linearGradient id="ad-bottle-highlight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0.68)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      <rect width="160" height="160" fill="url(#ad-bg)" />
      <circle cx="40" cy="36" r="30" fill="rgba(255,255,255,0.32)" />
      <circle cx="132" cy="128" r="46" fill="rgba(28,34,40,0.08)" />
      <g transform="translate(58 30)">
        <rect
          x="0"
          y="0"
          width="44"
          height="100"
          rx="8"
          fill="url(#ad-bottle)"
          stroke="rgba(28,34,40,0.14)"
          strokeWidth="1"
        />
        <rect x="14" y="-6" width="16" height="12" rx="2" fill="#8b6855" />
        <rect
          x="4"
          y="40"
          width="36"
          height="26"
          rx="3"
          fill="rgba(255,255,255,0.84)"
        />
        <text
          x="22"
          y="52"
          textAnchor="middle"
          fontSize="5.4"
          fontWeight="700"
          letterSpacing="0.14em"
          fill="#4a382e"
        >
          ANDRA
        </text>
        <text
          x="22"
          y="60"
          textAnchor="middle"
          fontSize="3.6"
          letterSpacing="0.18em"
          fill="#7a6355"
        >
          SERUM 01
        </text>
        <rect
          x="5"
          y="4"
          width="7"
          height="92"
          rx="3"
          fill="url(#ad-bottle-highlight)"
          opacity="0.5"
        />
      </g>
      <ellipse
        cx="80"
        cy="140"
        rx="36"
        ry="4"
        fill="rgba(28,34,40,0.18)"
      />
    </svg>
  );
}

function MiniProductImage({ variant }: { variant: number }) {
  const palettes = [
    { bg: "#eadbcf", accent: "#c08a74" },
    { bg: "#f0e2d6", accent: "#b57a63" },
    { bg: "#e4d1c2", accent: "#a57158" },
    { bg: "#f2e5da", accent: "#c99a84" }
  ];
  const p = palettes[variant % palettes.length];
  return (
    <svg viewBox="0 0 40 40" className="h-full w-full" aria-hidden="true">
      <rect width="40" height="40" fill={p.bg} />
      <circle cx="10" cy="8" r="7" fill="rgba(255,255,255,0.35)" />
      <rect
        x="15"
        y="8"
        width="10"
        height="24"
        rx="2"
        fill={p.accent}
        opacity="0.9"
      />
      <rect
        x="16.5"
        y="18"
        width="7"
        height="6"
        rx="1"
        fill="rgba(255,255,255,0.85)"
      />
    </svg>
  );
}

function ChatGptAdsHeroArtwork() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(160deg,rgba(255,255,255,0.52),rgba(255,255,255,0.2))] p-5 shadow-[0_30px_90px_rgba(17,17,17,0.08)] backdrop-blur-xl sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(255,255,255,0.9),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(217,167,154,0.24),transparent_26%),radial-gradient(circle_at_74%_82%,rgba(28,34,40,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(28,34,40,0.034)_1px,transparent_1px),linear-gradient(90deg,rgba(28,34,40,0.024)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative min-h-[28rem] overflow-hidden rounded-[1.7rem] border border-white/50 bg-white/40 p-5 sm:min-h-[30rem] sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-obsidian text-[0.6rem] font-semibold text-white">
              ✦
            </span>
            <span className="text-[0.72rem] font-semibold tracking-[0.04em] text-obsidian">
              ChatGPT
            </span>
          </div>
          <span className="rounded-full border border-blush/32 bg-shell/60 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-obsidian">
            Illustrative
          </span>
        </div>

        <div className="mt-5 space-y-3">
          <div className="ml-auto max-w-[20rem] rounded-[1rem] rounded-tr-[0.3rem] bg-shell/70 px-3.5 py-2.5 text-[0.82rem] leading-6 text-obsidian">
            Best serum for sensitive skin under $60?
          </div>
          <div className="max-w-[22rem] rounded-[1rem] rounded-tl-[0.3rem] bg-white/92 px-3.5 py-2.5 text-[0.82rem] leading-6 text-stone shadow-[0_6px_18px_rgba(17,17,17,0.04)]">
            A few options worth comparing, depending on whether you prioritize barrier
            repair or brightening…
          </div>
        </div>

        <p className="mt-5 text-[0.78rem] font-medium text-obsidian/80">
          This might also interest you.
        </p>

        <div className="mt-2 overflow-hidden rounded-[1.1rem] border border-obsidian/10 bg-white shadow-[0_18px_42px_rgba(17,17,17,0.06)]">
          <div className="flex items-stretch gap-3 p-3">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[0.6rem] border border-obsidian/8 sm:h-24 sm:w-24">
              <ProductImage />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-obsidian/20 bg-porcelain text-[0.5rem] text-stone">
                    ⨀
                  </span>
                  <span className="truncate text-[0.68rem] font-medium text-obsidian">
                    andra.co
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="rounded-md bg-shell/70 px-1.5 py-0.5 text-[0.5rem] font-semibold uppercase tracking-[0.1em] text-stone/80">
                    Ad
                  </span>
                  <span className="text-[0.7rem] text-stone/60">⋯</span>
                </div>
              </div>
              <p className="mt-1 font-serif text-[0.98rem] leading-[1.2] text-obsidian sm:text-[1.05rem]">
                Barrier-repair serum for sensitive skin
              </p>
              <p className="mt-0.5 text-[0.72rem] leading-5 text-stone">
                Ceramides + squalane, from $42
              </p>
            </div>
          </div>
          <div className="border-t border-obsidian/6 bg-porcelain/60 px-3 py-2">
            <p className="text-[0.58rem] leading-4 text-stone/70">
              Ads do not influence the answers you get from ChatGPT. Your chats stay
              private. <span className="font-medium text-obsidian/80">Learn about ads ›</span>
            </p>
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-[1.1rem] border border-obsidian/8 bg-white/88 px-3.5 py-3 shadow-[0_14px_36px_rgba(17,17,17,0.05)]">
          <div className="flex items-center justify-between">
            <span className="text-[0.56rem] font-bold uppercase tracking-[0.18em] text-stone">
              Multi-image ad
            </span>
            <span className="text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-blush">
              Open beta
            </span>
          </div>
          <div className="mt-2 grid grid-cols-4 gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-[0.5rem] border border-obsidian/8"
              >
                <MiniProductImage variant={i} />
              </div>
            ))}
          </div>
          <p className="mt-2 text-[0.62rem] leading-4 text-stone/80">
            4–6 square frames. One headline, one destination, one Learn more CTA.
          </p>
        </div>
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
          dateModified: "2026-11-12",
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
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              Creative Best Practices
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
              Dimensions, design, and what gets rejected.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-stone sm:text-base">
            The ad is small, the review is strict, and the categories you can ship are narrower than you think. Design for both constraints at once.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-stone">
              Design the image
            </p>
            <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-white/55 bg-white/50 shadow-[0_18px_50px_rgba(17,17,17,0.04)] backdrop-blur-sm">
              <dl className="divide-y divide-obsidian/8">
                {creativeSpecs.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-2 px-5 py-4 sm:grid-cols-[0.34fr_0.66fr] sm:gap-6 sm:px-6"
                  >
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone">
                      {item.label}
                    </dt>
                    <dd className="text-sm leading-7 text-obsidian sm:text-[1rem]">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-stone">
              What gets ads rejected
            </p>
            <ul className="mt-4 grid gap-3">
              {rejectionRisks.map((risk) => (
                <li
                  key={risk.title}
                  className="rounded-[1.2rem] border border-obsidian/8 bg-white/58 px-5 py-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-obsidian/14 bg-white text-[0.72rem] font-semibold leading-none text-stone/78">
                      !
                    </span>
                    <div>
                      <p className="font-serif text-[1.1rem] leading-snug text-obsidian">
                        {risk.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-7 text-stone sm:text-[0.98rem]">
                        {risk.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-sm leading-7 text-stone sm:text-base">
          Source:{" "}
          <a
            href="https://openai.com/policies/ad-policies/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-stone/40 underline-offset-4 hover:decoration-obsidian hover:text-obsidian"
          >
            OpenAI Ad policies
          </a>{" "}
          and{" "}
          <a
            href="https://help.openai.com/en/articles/20001212-create-ads-for-chatgpt-ads"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-stone/40 underline-offset-4 hover:decoration-obsidian hover:text-obsidian"
          >
            Creating ads for ChatGPT Ads
          </a>
          . Categories evolve — this list is checked weekly.
        </p>
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
