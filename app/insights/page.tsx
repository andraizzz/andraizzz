import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { InsightVisual } from "@/components/insight-visual";
import { insightPosts } from "@/lib/insights";
import { aiStrategyKeywords, absoluteUrl, buildPageMetadata, siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Workflows and Actionable Insights | ANDRA",
  description:
    "Actionable insights on AI workflows, AI business operations, AI tips and tricks, and growth strategy for brands building authority in the AI era.",
  pathname: "/insights",
  keywords: [...aiStrategyKeywords, "actionable AI insights", "AI workflow examples"]
});

export default function InsightsPage() {
  const [featuredPost, ...morePosts] = insightPosts;

  return (
    <main className="relative overflow-hidden bg-porcelain text-obsidian">
      <Script id="insights-collection-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "AI Workflows and Actionable Insights",
          url: `${siteUrl}/insights`,
          description:
            "A collection of actionable insights on AI workflows, AI visibility, and operational strategy.",
          isPartOf: {
            "@type": "WebSite",
            name: siteName,
            url: siteUrl
          },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: insightPosts.map((post, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: absoluteUrl(`/insights/${post.slug}`),
              name: post.title
            }))
          }
        })}
      </Script>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-hero-radial opacity-90" />
      <div className="pointer-events-none absolute inset-x-0 top-20 mx-auto h-[26rem] max-w-6xl rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.3),transparent_62%)] blur-3xl" />

      <section className="hero-fade relative z-10 mx-auto max-w-7xl px-6 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12 lg:pb-20 lg:pt-28">
        <div className="max-w-none">
          <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
            Actionable Insights
          </p>
          <h1 className="mt-6 max-w-[65rem] font-serif text-[3.3rem] leading-[1.04] text-obsidian sm:max-w-[72rem] sm:text-[4.2rem] lg:max-w-[78rem] lg:text-[5rem]">
            Actionable thinking for brands building authority in the AI era.
          </h1>
          <p className="mt-8 max-w-[58rem] text-base leading-8 text-stone sm:max-w-[62rem] sm:text-lg sm:leading-9 lg:max-w-[68rem]">
            Practical strategies for enterprise AI solutions, operational clarity,
            and digital authority for brands looking to scale with sharper systems
            and stronger market positioning.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12 lg:pb-16">
        <Link
          href={`/insights/${featuredPost.slug}`}
          className="group grid gap-8 overflow-hidden rounded-[2rem] border border-white/55 bg-white/38 p-4 shadow-[0_30px_90px_rgba(17,17,17,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_96px_rgba(17,17,17,0.1)] lg:grid-cols-[1.04fr_0.96fr] lg:p-5"
        >
          <div className="relative">
            <InsightVisual
              eyebrow={featuredPost.eyebrow}
              stat={featuredPost.featuredStat}
              kicker={featuredPost.visual.kicker}
              headline={featuredPost.visual.headline}
              stages={featuredPost.visual.stages}
            />
          </div>

          <div className="flex flex-col justify-between rounded-[1.7rem] border border-obsidian/8 bg-[linear-gradient(160deg,rgba(255,255,255,0.52),rgba(245,242,239,0.24))] px-6 py-6 sm:px-8 sm:py-8">
            <div>
              <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
                Featured Insight
              </p>
              <h2 className="mt-5 max-w-2xl font-serif text-[2.4rem] leading-[1.06] text-obsidian sm:text-[2.9rem]">
                {featuredPost.title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-stone sm:text-lg">
                {featuredPost.summary}
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-[auto_1fr] sm:items-end">
              <div className="rounded-[1.25rem] border border-obsidian/8 bg-white/52 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
                  Framework
                </p>
                <p className="mt-2 font-serif text-3xl text-obsidian">
                  {featuredPost.featuredStat}
                </p>
                <p className="mt-1 text-sm text-stone">{featuredPost.featuredLabel}</p>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-stone">
                <span>{featuredPost.dateLabel}</span>
                <span className="h-1 w-1 rounded-full bg-stone/70" />
                <span>Enterprise Positioning</span>
                <span className="h-1 w-1 rounded-full bg-stone/70" />
                <span>AI Operations</span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12 lg:pb-24">
        <div className="grid gap-8">
          {morePosts.length > 0 ? (
            morePosts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group grid gap-6 rounded-[1.75rem] border border-white/50 bg-white/30 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-halo lg:grid-cols-[0.82fr_1.18fr]"
              >
                <InsightVisual
                  eyebrow={post.eyebrow}
                  stat={post.featuredStat}
                  kicker={post.visual.kicker}
                  headline={post.visual.headline}
                  stages={post.visual.stages}
                  compact
                />
                <div className="flex flex-col justify-center px-2 py-2 sm:px-4">
                  <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
                    {post.eyebrow}
                  </p>
                  <h2 className="mt-4 font-serif text-[2rem] leading-[1.08] text-obsidian sm:text-[2.4rem]">
                    {post.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-stone sm:text-lg">
                    {post.summary}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="rounded-[1.8rem] border border-white/50 bg-white/28 px-6 py-8 backdrop-blur-sm sm:px-8 sm:py-10">
              <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
                More insights soon
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-stone sm:text-lg">
                This section is ready to expand into a full editorial library as we add more
                enterprise AI and visibility pieces.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
