import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/inquiry-form";
import { bookIntroCallUrl } from "@/lib/contact";
import { buildPageMetadata, siteName, siteUrl } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";

const keywords = [
  "AI ads",
  "AI advertising",
  "ads inside AI",
  "AI ads platforms",
  "AI ads agency",
  "AI ads generator",
  "AI ads maker",
  "advertising in AI chat",
  "AI advertising strategy",
  "ChatGPT ads",
  "Gemini ads",
  "Perplexity ads",
  "Copilot ads"
];

const lastVerified = "November 12, 2026";

const topline =
  "'AI ads' covers two different things people search for: ads that run inside AI assistants (ChatGPT, Perplexity, Copilot, Gemini) and tools that generate ad creative using AI. This page is about the first — the paid-media surface forming inside AI products. It's early, fragmented, and currently has one mature self-serve platform (ChatGPT Ads). This is where to start.";

const platformTable = [
  {
    platform: "ChatGPT Ads",
    owner: "OpenAI",
    status: "Public beta, self-serve",
    formats: "Single-image 1:1, multi-image (open beta), Sponsored Agents",
    access: "ads.openai.com — eligible businesses in supported countries",
    link: "/chatgpt-ads"
  },
  {
    platform: "Perplexity Sponsored Questions",
    owner: "Perplexity",
    status: "Live via direct sales / managed deals",
    formats: "Sponsored related questions and answer placements",
    access: "Not self-serve — contact Perplexity sales"
  },
  {
    platform: "Microsoft Copilot ads",
    owner: "Microsoft Advertising",
    status: "Extending Microsoft Advertising into Copilot surfaces",
    formats: "Native ad placements inside Copilot responses",
    access: "Through Microsoft Advertising accounts"
  },
  {
    platform: "Google Gemini / AI Overviews ads",
    owner: "Google",
    status: "Rolled into Google Ads; eligible campaigns can surface in AI Overviews",
    formats: "Standard Google Ads formats re-rendered for AI surfaces",
    access: "Through existing Google Ads accounts"
  }
];

const prosCategory = [
  "Intent-rich placement. AI assistants capture people in the middle of comparing, deciding, or planning — a very different attention than scroll.",
  "First-mover pricing. Competition and CPMs are still forming on most of these surfaces.",
  "Audience early. The users who are heavy AI assistant users today skew toward tech-forward, higher-income cohorts that most brands want to reach anyway.",
  "Brand-safe by design. OpenAI's ad policies, for example, pre-exclude a long list of contexts (sensitive health, political, crisis) where ads would otherwise create risk."
];

const consCategory = [
  "The category is fragmented. There is no shared campaign builder across ChatGPT, Perplexity, Copilot, and Google AI. Each has its own rules, formats, and limits.",
  "Creative is image-only on most surfaces. No video, few formats. Design for small square frames.",
  "Measurement is still forming. There are no cross-platform benchmarks for AI ads yet.",
  "Not all are self-serve. Only ChatGPT Ads and Google's AI-surface campaigns are open to most businesses today. Perplexity and Copilot are largely managed-sales relationships.",
  "Policy gates are strict. Healthcare, financial, legal, political, alcohol, gambling, and more are restricted or banned depending on the platform."
];

const whoCanRun = [
  {
    label: "Start today — self-serve",
    value: "ChatGPT Ads for eligible business advertisers in supported countries. Google Ads campaigns that can surface in AI Overviews.",
    ref: "/chatgpt-ads"
  },
  {
    label: "Start today — through sales",
    value: "Perplexity (managed deals for brands running Sponsored Questions). Microsoft Copilot ads through a Microsoft Advertising rep."
  },
  {
    label: "Not open yet",
    value: "Self-serve on Perplexity. Standalone Copilot or Gemini ad managers separate from Microsoft Advertising or Google Ads."
  }
];

const faqItems = [
  {
    question: "What are AI ads?",
    answer:
      "The term is used two ways. Most commonly it refers to paid-media placements that run inside AI assistants and answer engines — ChatGPT, Perplexity, Copilot, Google's AI Overviews. Separately, 'AI ads' can refer to tools that generate ad creative (images, copy) using AI. This page is about the first: ads as a media channel inside AI."
  },
  {
    question: "Which AI ads platform should I start with?",
    answer:
      "ChatGPT Ads, if you are an eligible business in a supported country and your category isn't restricted. It's the only AI-native surface with a public self-serve platform, documented formats, and real measurement today. The others (Perplexity, Copilot, Gemini AI Overviews) are either managed sales or extensions of existing ad accounts."
  },
  {
    question: "What does an AI ad look like?",
    answer:
      "In ChatGPT: a small sponsored card beneath the assistant's response, with a 1:1 image, advertiser name, 'Ad' badge, short headline, and a Learn more CTA. Perplexity and Copilot ads use similar sponsored-card patterns native to each product. There is no standard across platforms — design for the specific surface you're buying."
  },
  {
    question: "Where can I find an AI ads agency?",
    answer:
      "The category is new, so most 'AI ads agencies' are generalist paid-media agencies adding ChatGPT Ads to their roster. Look for someone who has actually run a campaign through OpenAI Ads Manager — not just social-ads experience retitled."
  },
  {
    question: "What's an AI ads generator? Is that the same thing?",
    answer:
      "No. An AI ads generator is a creative tool that produces ad images or copy using AI (Meta's Advantage+, Google's asset generation, standalone tools like Adcreative.ai). It helps you produce creative. Running that creative as a paid campaign on an AI assistant surface is a separate decision."
  },
  {
    question: "Can I run AI ads on YouTube?",
    answer:
      "YouTube isn't an AI-native surface — it's Google's video platform. You can run standard YouTube ads with AI-generated creative, and YouTube ad campaigns can surface in Google's AI Overviews, but it's not 'AI ads' in the sense of a new advertising channel."
  },
  {
    question: "How much do AI ads cost?",
    answer:
      "There are no category-wide benchmark CPCs. ChatGPT Ads uses Maximize Results or CPC bidding with daily budgets that pace up to 2× daily and 7× weekly. Perplexity and Copilot are managed buys with negotiated pricing. Plan for 2–3 weeks of learning spend before any number is meaningful."
  }
];

export const metadata: Metadata = buildPageMetadata({
  title: "AI Ads: What They Are, Which Platforms Exist, and Where to Start | ANDRA",
  description:
    "The current landscape of AI ads — ChatGPT Ads, Perplexity Sponsored Questions, Microsoft Copilot ads, Google AI Overviews. What's self-serve, what's managed, who can run them, and where a business should start today.",
  pathname: "/ai-ads",
  keywords
});

export default function AiAdsPage() {
  return (
    <main className="relative overflow-hidden bg-porcelain text-obsidian">
      <JsonLd
        id="ai-ads-webpage-schema"
        data={{
          ...webPageSchema({
            name: "AI Ads: What They Are, Which Platforms Exist, and Where to Start",
            description:
              "The current landscape of AI ads across ChatGPT, Perplexity, Copilot, and Google.",
            path: "/ai-ads"
          }),
          datePublished: "2026-11-12",
          dateModified: "2026-11-12",
          about: {
            "@type": "Thing",
            name: "AI advertising"
          },
          keywords: keywords.join(", ")
        }}
      />
      <JsonLd
        id="ai-ads-service-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "AI Ads Strategy and Advisory",
          description:
            "Strategy and management for brands running paid-media campaigns inside AI assistants — ChatGPT Ads and other emerging AI-native ad surfaces.",
          provider: { "@id": `${siteUrl}/#organization` },
          areaServed: "Global",
          serviceType: "AI ads strategy and advisory",
          url: `${siteUrl}/ai-ads`
        }}
      />
      <JsonLd
        id="ai-ads-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/ai-workflow-audit" },
          { name: "AI Ads", path: "/ai-ads" }
        ])}
      />
      <JsonLd
        id="ai-ads-faq-schema"
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

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-hero-radial opacity-90" />
      <div className="pointer-events-none absolute right-[-4rem] top-[8rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(217,167,154,0.22),transparent_70%)] blur-3xl" />

      <section className="hero-fade relative z-10 mx-auto max-w-7xl px-6 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12 lg:pb-20 lg:pt-28">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li><Link href="/" className="hover:text-obsidian">Home</Link></li>
            <li aria-hidden="true" className="text-stone/50">/</li>
            <li><Link href="/ai-workflow-audit" className="hover:text-obsidian">Services</Link></li>
            <li aria-hidden="true" className="text-stone/50">/</li>
            <li aria-current="page" className="text-obsidian">AI Ads</li>
          </ol>
        </nav>

        <h1 className="mt-6 max-w-[65rem] font-serif text-[3.3rem] leading-[1.04] text-obsidian sm:max-w-[72rem] sm:text-[4.2rem] lg:max-w-[78rem] lg:text-[5rem]">
          AI Ads: the current landscape.
        </h1>

        <p className="mt-8 max-w-3xl text-base leading-8 text-stone sm:text-lg sm:leading-9">
          A grounded view of what AI ads are, which platforms are open today, and where a business that wants to be early should actually spend. Updated against the live documentation of each platform.
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-stone/72">Last verified {lastVerified}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={bookIntroCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-track-click="contact_click"
            data-track-category="ai_ads"
            data-track-label="hero_calendly"
            className="inline-flex min-h-14 items-center justify-center rounded-[0.72rem] bg-ink px-7 py-4 text-sm uppercase tracking-[0.18em] text-porcelain transition duration-300 hover:scale-[1.02] hover:bg-obsidian"
          >
            Talk Through Your AI Ads Plan
          </a>
          <Link
            href="/chatgpt-ads"
            data-track-click="navigation_click"
            data-track-category="ai_ads"
            data-track-label="hero_chatgpt_ads"
            className="inline-flex min-h-14 items-center justify-center rounded-[0.72rem] border border-obsidian/18 bg-white/44 px-7 py-4 text-sm uppercase tracking-[0.18em] text-obsidian transition duration-300 hover:scale-[1.02] hover:border-obsidian/36 hover:bg-white"
          >
            See the ChatGPT Ads Cheat Sheet
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 sm:px-8 lg:px-12 lg:pb-16">
        <div className="relative overflow-hidden rounded-[1.9rem] border border-white/60 bg-[linear-gradient(160deg,rgba(255,255,255,0.6),rgba(231,216,207,0.22))] px-6 py-8 shadow-[0_28px_80px_rgba(17,17,17,0.07)] backdrop-blur-xl sm:px-10 sm:py-10">
          <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">The Topline</p>
          <p className="mt-5 max-w-4xl font-serif text-[1.85rem] leading-[1.28] text-obsidian sm:text-[2.15rem] sm:leading-[1.24]">
            {topline}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12 lg:pb-16">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">The landscape</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
            Who owns what, right now.
          </h2>
        </div>
        <div className="overflow-hidden rounded-[1.6rem] border border-white/55 bg-white/50 shadow-[0_20px_60px_rgba(17,17,17,0.05)] backdrop-blur-sm">
          <div className="divide-y divide-obsidian/8">
            {platformTable.map((row) => (
              <div
                key={row.platform}
                className="grid gap-3 px-5 py-5 sm:grid-cols-[0.26fr_0.74fr] sm:gap-8 sm:px-8"
              >
                <div>
                  <p className="font-serif text-[1.25rem] leading-tight text-obsidian">
                    {row.platform}
                  </p>
                  <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone">
                    {row.owner}
                  </p>
                </div>
                <dl className="grid gap-2 text-sm leading-7 text-obsidian sm:text-[0.98rem]">
                  <div className="grid grid-cols-[6rem_1fr] gap-3">
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-stone/80">Status</dt>
                    <dd>{row.status}</dd>
                  </div>
                  <div className="grid grid-cols-[6rem_1fr] gap-3">
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-stone/80">Formats</dt>
                    <dd>{row.formats}</dd>
                  </div>
                  <div className="grid grid-cols-[6rem_1fr] gap-3">
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-stone/80">Access</dt>
                    <dd>
                      {row.access}
                      {row.link ? (
                        <>
                          {" "}·{" "}
                          <Link href={row.link} className="font-medium text-obsidian underline decoration-stone/40 underline-offset-4 hover:decoration-obsidian">
                            See our deep dive
                          </Link>
                        </>
                      ) : null}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div>
          <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">Who can run AI ads today</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
            The honest access picture.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {whoCanRun.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.35rem] border border-white/55 bg-white/42 px-5 py-5 shadow-[0_18px_44px_rgba(17,17,17,0.04)] backdrop-blur-sm"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone">{item.label}</p>
              <p className="mt-3 text-base leading-7 text-obsidian sm:text-[1.05rem]">
                {item.value}
                {item.ref ? (
                  <>
                    {" "}
                    <Link href={item.ref} className="font-medium underline decoration-stone/40 underline-offset-4 hover:decoration-obsidian">
                      Read the deep dive →
                    </Link>
                  </>
                ) : null}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">The pros</p>
            <h2 className="mt-4 font-serif text-[2.4rem] leading-tight text-obsidian sm:text-[2.6rem]">
              Why pay attention to the category.
            </h2>
            <ul className="mt-6 grid gap-3">
              {prosCategory.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 border-b border-obsidian/8 pb-3 text-base leading-7 text-obsidian last:border-0 sm:text-[1.05rem]"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blush" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">The cons</p>
            <h2 className="mt-4 font-serif text-[2.4rem] leading-tight text-obsidian sm:text-[2.6rem]">
              Why it's not yet a primary channel.
            </h2>
            <ul className="mt-6 grid gap-3">
              {consCategory.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 border-b border-obsidian/8 pb-3 text-base leading-7 text-obsidian last:border-0 sm:text-[1.05rem]"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-obsidian/40" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="relative overflow-hidden rounded-[1.9rem] border border-white/55 bg-[linear-gradient(160deg,rgba(255,255,255,0.52),rgba(231,216,207,0.22))] px-6 py-8 shadow-[0_24px_70px_rgba(17,17,17,0.06)] backdrop-blur-sm sm:px-10 sm:py-10">
          <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">Where to start</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
            Start with the mature one, then expand.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone sm:text-lg">
            ChatGPT Ads is the only AI-native surface with a documented, self-serve platform, a public rate structure through Maximize Results and CPC bidding, and clear creative rules. Build competence there first, then bring the learnings — creative discipline, measurement framing, policy navigation — into Perplexity, Copilot, and Google's AI Overviews as those platforms open up.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/chatgpt-ads"
              className="inline-flex min-h-14 items-center justify-center rounded-[0.72rem] bg-ink px-7 py-4 text-sm uppercase tracking-[0.18em] text-porcelain transition duration-300 hover:scale-[1.02] hover:bg-obsidian"
            >
              Start with ChatGPT Ads →
            </Link>
            <Link
              href="/chatgpt-ads/examples"
              className="inline-flex min-h-14 items-center justify-center rounded-[0.72rem] border border-obsidian/18 bg-white/44 px-7 py-4 text-sm uppercase tracking-[0.18em] text-obsidian transition duration-300 hover:scale-[1.02] hover:border-obsidian/36 hover:bg-white"
            >
              See What They Look Like
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 rounded-[1.9rem] border border-white/55 bg-white/36 px-6 py-7 shadow-[0_20px_60px_rgba(17,17,17,0.05)] backdrop-blur-sm lg:grid-cols-[0.76fr_1.24fr] lg:gap-16 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">Work together</p>
            <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
              Running AI ads is a focus of what I do.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-stone sm:text-lg">
              Strategy, creative discipline, campaign management, and measurement for brands running paid-media campaigns inside AI assistants. Start a conversation.
            </p>
          </div>
          <InquiryForm defaultFocus="AI Ads" sourceLabel="AI Ads Page" />
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
          <p className="text-xs uppercase tracking-editorial text-white/60 sm:text-sm">Sources & freshness</p>
          <h2 className="mt-4 max-w-3xl font-serif text-[2.1rem] leading-[1.12] text-white sm:text-[2.5rem]">
            The AI ads landscape moves monthly.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
            ChatGPT Ads is tracked weekly against{" "}
            <a
              href="https://help.openai.com/en/collections/20001223-chatgpt-ads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              OpenAI's ChatGPT Ads collection
            </a>
            . Perplexity, Microsoft Copilot, and Google's AI Overviews details are refreshed as those teams publish updates. When anything meaningful changes, the deep dives are updated within days.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/58">Last verified {lastVerified}</p>
        </div>
      </section>
    </main>
  );
}
