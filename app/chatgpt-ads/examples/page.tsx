import type { Metadata } from "next";
import Link from "next/link";
import { bookIntroCallUrl } from "@/lib/contact";
import { buildPageMetadata, siteName, siteUrl } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import {
  MiniProductImage,
  MultiImageAd,
  SingleImageAd
} from "@/components/chatgpt-ad-mockup";

const keywords = [
  "ChatGPT ad examples",
  "what do ChatGPT ads look like",
  "ChatGPT ad format",
  "ChatGPT ad mockup",
  "sponsored card in ChatGPT",
  "ChatGPT multi-image ad",
  "OpenAI ad example",
  "ChatGPT ad dimensions",
  "ChatGPT Sponsored card"
];

const lastVerified = "November 12, 2026";

const anatomyRows = [
  { label: "Lead-in", value: "A short line above the ad — \"This might also interest you.\" — anchors it beneath the assistant reply." },
  { label: "Advertiser", value: "A small circular favicon-style icon plus the advertiser domain or brand name." },
  { label: "Ad badge", value: "A muted 'Ad' pill on the right. Clearly labelled, not hidden." },
  { label: "Headline", value: "One line of benefit-focused copy. Appears in serif-weight text in the ad card." },
  { label: "Supporting line", value: "One short line of context. Price, differentiator, or category." },
  { label: "Image", value: "A 1:1 square product shot on the left of the card. Thumbnail-sized at real render." },
  { label: "Destination hint", value: "Displayed as a clean hostname, with the full URL opening on click." },
  { label: "Disclosure", value: "Footer line: 'Ads do not influence the answers you get from ChatGPT. Your chats stay private. Learn about ads ›'" }
];

const designRules = [
  "One image, one clear subject. If someone can't tell what the product is in half a second, redo it.",
  "Minimal text inside the image. The card is small — text shrinks fast and loses legibility.",
  "High contrast. Light background, dark subject (or the reverse). No complex backdrops.",
  "A real product, shot straight on, with one supporting prop at most.",
  "Match the headline. If the headline promises 'barrier-repair serum', the image should obviously be a serum bottle.",
  "Design the square first — not a repurposed banner. Square means the entire frame is readable."
];

const wontWorkYet = [
  "Video ads — not supported anywhere in Ads Manager Beta.",
  "Carousels or swipe cards beyond the 4–6 frame multi-image format.",
  "Interactive ads, click-to-expand, lead forms, or in-ad quizzes.",
  "Branded answer takeovers — ads sit beneath the assistant reply, not inside it.",
  "Dynamic personalised product feeds in the standard campaign flow (product-feed campaigns exist as a separate flow, not via CSV upload)."
];

const faqItems = [
  {
    question: "What does a ChatGPT ad look like?",
    answer:
      "A small sponsored card beneath an assistant reply. A 1:1 image on the left, advertiser name and 'Ad' pill at the top, one-line headline and short supporting copy, destination URL, and a 'Learn more' CTA. OpenAI's disclosure footer sits underneath: ads don't influence the answers, and chats stay private."
  },
  {
    question: "How big is a ChatGPT ad on screen?",
    answer:
      "Small. The image is roughly thumbnail-sized at the real render scale — roughly the size of a message avatar on mobile. Design the image assuming the viewer sees it at that scale, not at desktop poster-mockup scale."
  },
  {
    question: "What's the difference between a single-image and a multi-image ChatGPT ad?",
    answer:
      "Single-image is one 1:1 square. Multi-image (open beta since October 26, 2026) is 4–6 square frames all sharing one headline and one destination URL. Multi-image is useful when you need to show multiple angles, SKUs, or a short visual story. 'Learn more' is currently the only CTA option for multi-image."
  },
  {
    question: "Are ChatGPT ads clearly labelled?",
    answer:
      "Yes. Every ad shows an 'Ad' pill at the top of the card, the advertiser name, and a disclosure line underneath the ad explaining that ads do not influence the answers users get. Ads sit beneath the assistant reply, not inside it."
  },
  {
    question: "Can I use text inside the ad image?",
    answer:
      "You can, but keep it minimal. At the render size, anything smaller than a product label will be unreadable. Carry the pitch in the headline and description — treat the image as a product shot, not a poster."
  }
];

export const metadata: Metadata = buildPageMetadata({
  title: "ChatGPT Ad Examples: What They Actually Look Like | ANDRA",
  description:
    "Visual examples of ChatGPT ads — single-image and multi-image formats, the sponsored card anatomy, the disclosure line, and what you can't ship yet. Updated weekly against OpenAI Ads Manager Beta.",
  pathname: "/chatgpt-ads/examples",
  keywords
});

export default function ChatGptAdsExamplesPage() {
  return (
    <main className="relative overflow-hidden bg-porcelain text-obsidian">
      <JsonLd
        id="chatgpt-ads-examples-webpage-schema"
        data={{
          ...webPageSchema({
            name: "ChatGPT Ad Examples: What They Actually Look Like",
            description:
              "Visual examples of ChatGPT ads — single-image and multi-image formats, sponsored card anatomy, and the disclosure line.",
            path: "/chatgpt-ads/examples"
          }),
          datePublished: "2026-11-12",
          dateModified: "2026-11-12",
          about: {
            "@type": "Thing",
            name: "ChatGPT Ads",
            sameAs: "https://help.openai.com/en/collections/20001223-chatgpt-ads"
          },
          keywords: keywords.join(", ")
        }}
      />
      <JsonLd
        id="chatgpt-ads-examples-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "ChatGPT Ads", path: "/chatgpt-ads" },
          { name: "Examples", path: "/chatgpt-ads/examples" }
        ])}
      />
      <JsonLd
        id="chatgpt-ads-examples-faq-schema"
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
        id="chatgpt-ads-examples-article-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "ChatGPT Ad Examples: What They Actually Look Like",
          description:
            "Visual examples of ChatGPT ads — single-image and multi-image formats, sponsored card anatomy, and the disclosure line.",
          author: { "@type": "Organization", name: siteName, url: siteUrl },
          publisher: { "@id": `${siteUrl}/#organization` },
          datePublished: "2026-11-12",
          dateModified: "2026-11-12",
          mainEntityOfPage: `${siteUrl}/chatgpt-ads/examples`
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
            <li aria-current="page" className="text-obsidian">Examples</li>
          </ol>
        </nav>

        <h1 className="mt-6 max-w-[65rem] font-serif text-[3.3rem] leading-[1.04] text-obsidian sm:max-w-[72rem] sm:text-[4.2rem] lg:max-w-[78rem] lg:text-[5rem]">
          What ChatGPT ads actually look like.
        </h1>

        <p className="mt-8 max-w-3xl text-base leading-8 text-stone sm:text-lg sm:leading-9">
          Illustrative renders of the two formats OpenAI supports today: a single-image sponsored card and the multi-image open-beta variant launched on October 26, 2026. Shown at roughly the scale a viewer sees them in ChatGPT.
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-stone/72">
          Last verified against OpenAI documentation on {lastVerified}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12 lg:pb-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="rounded-[1.9rem] border border-white/60 bg-[linear-gradient(160deg,rgba(255,255,255,0.6),rgba(231,216,207,0.22))] p-6 shadow-[0_28px_80px_rgba(17,17,17,0.07)] backdrop-blur-sm sm:p-8">
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">Format 1 · Single image</p>
            <h2 className="mt-3 font-serif text-[2rem] leading-tight text-obsidian sm:text-[2.3rem]">
              The default sponsored card.
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone sm:text-base">
              One 1:1 image, one headline, one supporting line. The format most ads in Ads Manager Beta ship as today.
            </p>
            <div className="mt-6 space-y-4">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-stone/70">At real-world scale</p>
              <div className="mx-auto max-w-[22rem]">
                <SingleImageAd size="sm" />
              </div>
              <p className="pt-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-stone/70">Zoomed in — same card</p>
              <SingleImageAd size="lg" />
            </div>
          </div>

          <div className="rounded-[1.9rem] border border-white/60 bg-[linear-gradient(160deg,rgba(255,255,255,0.6),rgba(231,216,207,0.22))] p-6 shadow-[0_28px_80px_rgba(17,17,17,0.07)] backdrop-blur-sm sm:p-8">
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">Format 2 · Multi-image (open beta)</p>
            <h2 className="mt-3 font-serif text-[2rem] leading-tight text-obsidian sm:text-[2.3rem]">
              4–6 square frames, one destination.
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone sm:text-base">
              Launched October 26, 2026. All frames share one headline, one destination URL, and a 'Learn more' CTA.
            </p>
            <div className="mt-6">
              <MultiImageAd />
            </div>
            <div className="mt-6 grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-[0.8rem] border border-obsidian/10"
                >
                  <MiniProductImage variant={i} />
                </div>
              ))}
            </div>
            <p className="mt-3 text-[0.72rem] leading-5 text-stone">Each frame: 1:1 square.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">Anatomy</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
          Every piece of the sponsored card.
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.5fr_0.5fr] lg:gap-10">
          <div>
            <div className="sticky top-6">
              <div className="mx-auto max-w-[24rem]">
                <SingleImageAd size="md" />
              </div>
              <p className="mt-4 text-center text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-stone/72">
                Illustrative — not an actual OpenAI ad unit
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-white/55 bg-white/50 shadow-[0_18px_50px_rgba(17,17,17,0.04)] backdrop-blur-sm">
            <dl className="divide-y divide-obsidian/8">
              {anatomyRows.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-2 px-5 py-4 sm:grid-cols-[0.3fr_0.7fr] sm:gap-6 sm:px-6"
                >
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone">
                    {item.label}
                  </dt>
                  <dd className="text-sm leading-7 text-obsidian sm:text-[0.98rem]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">What works in this frame</p>
            <h2 className="mt-4 font-serif text-[2.4rem] leading-tight text-obsidian sm:text-[2.6rem]">
              Design rules for a small square.
            </h2>
            <ul className="mt-6 grid gap-3">
              {designRules.map((rule) => (
                <li
                  key={rule}
                  className="flex items-start gap-3 border-b border-obsidian/8 pb-3 text-base leading-7 text-obsidian last:border-0 sm:text-[1.05rem]"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blush" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">What you can't ship yet</p>
            <h2 className="mt-4 font-serif text-[2.4rem] leading-tight text-obsidian sm:text-[2.6rem]">
              Formats that aren't available.
            </h2>
            <ul className="mt-6 grid gap-3">
              {wontWorkYet.map((item) => (
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
        <div className="relative overflow-hidden rounded-[1.9rem] border border-white/55 bg-[linear-gradient(160deg,rgba(255,255,255,0.52),rgba(231,216,207,0.22))] px-6 py-8 shadow-[0_24px_70px_rgba(17,17,17,0.06)] backdrop-blur-sm sm:px-10 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_0.4fr] lg:items-center lg:gap-14">
            <div>
              <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">Build your creative</p>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
                Need the image, headline, and brief done for you?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-stone sm:text-lg">
                The creative layer is where most ChatGPT Ads campaigns succeed or fail. A square image that reads at thumbnail scale with a headline that earns the click.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={bookIntroCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center rounded-[0.72rem] bg-ink px-7 py-4 text-sm uppercase tracking-[0.18em] text-porcelain transition duration-300 hover:scale-[1.02] hover:bg-obsidian"
                data-track-click="contact_click"
                data-track-category="chatgpt_ads_examples"
                data-track-label="cta_calendly"
              >
                Talk About Your Creative
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
            Format and layout references come from{" "}
            <a
              href="https://help.openai.com/en/articles/20001212-create-ads-for-chatgpt-ads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              OpenAI · Creating ads for ChatGPT Ads
            </a>
            .
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/58">Last verified {lastVerified}</p>
        </div>
      </section>
    </main>
  );
}
