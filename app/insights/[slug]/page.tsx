import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { getInsightPost, insightPosts, type InsightSection } from "@/lib/insights";
import { bookIntroCallUrl } from "@/lib/contact";
import { recommendedToolMentionLinks } from "@/lib/recommended-tool-links";
import {
  absoluteUrl,
  aiStrategyKeywords,
  articlePublishedTime,
  buildPageMetadata,
  siteName,
  siteUrl
} from "@/lib/seo";

type InsightPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return insightPosts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightPost(slug);

  if (!post) {
    return {
      title: "Insight Not Found | ANDRA"
    };
  }

  return {
    ...buildPageMetadata({
      title: `${post.title} | Actionable Insights | ANDRA`,
      description: post.metaDescription,
      pathname: `/insights/${post.slug}`,
      keywords: [...aiStrategyKeywords, post.eyebrow, post.title],
      type: "article"
    })
  };
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const toolMentionPattern = new RegExp(
  `\\b(${recommendedToolMentionLinks.map((tool) => escapeRegExp(tool.label)).join("|")})\\b`,
  "g"
);

function renderTextLink(label: string, href: string, key: string, tone: "dark" | "light" = "dark") {
  const className =
    tone === "light"
      ? "font-medium text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white/80"
      : "font-medium text-obsidian underline decoration-obsidian/28 underline-offset-4 transition hover:decoration-obsidian/60";

  if (href.startsWith("http")) {
    return (
      <a key={key} href={href} target="_blank" rel="noreferrer" className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link key={key} href={href} className={className}>
      {label}
    </Link>
  );
}

function renderToolMentionLinks(text: string, baseKey: string, tone: "dark" | "light" = "dark") {
  return text.split(toolMentionPattern).map((part, index) => {
    const tool = recommendedToolMentionLinks.find((candidate) => candidate.label === part);

    if (!tool) {
      return <span key={`${baseKey}-text-${index}`}>{part}</span>;
    }

    return renderTextLink(tool.label, tool.href, `${baseKey}-tool-${index}`, tone);
  });
}

function renderInlineLinks(text: string, tone: "dark" | "light" = "dark") {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

    if (!match) {
      return renderToolMentionLinks(part, `${part}-${index}`, tone);
    }

    const [, label, href] = match;
    return renderTextLink(label, href, `${href}-${index}`, tone);
  });
}

function renderBlock(block: InsightSection) {
  if (block.type === "paragraph") {
    return block.paragraphs.map((paragraph) => (
      <p key={paragraph} className="text-base leading-8 text-stone sm:text-lg sm:leading-9">
        {renderInlineLinks(paragraph)}
      </p>
    ));
  }

  if (block.type === "list") {
    return (
      <div className="space-y-4">
        {block.intro ? (
          <p className="text-base leading-8 text-stone sm:text-lg sm:leading-9">{renderInlineLinks(block.intro)}</p>
        ) : null}
        <ul className="grid gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-8 text-stone sm:text-lg">
              <span className="mt-3 h-1.5 w-1.5 rounded-full bg-blush" />
              <span>{renderInlineLinks(item)}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "table") {
    return (
      <div className="grid gap-6">
        {block.tables.map((table) => (
          <div
            key={table.title}
            className="overflow-hidden rounded-[1.5rem] border border-white/50 bg-white/34 shadow-[0_18px_50px_rgba(17,17,17,0.05)] backdrop-blur-sm"
          >
            <div className="border-b border-obsidian/8 px-5 py-4 sm:px-6">
              <h3 className="font-serif text-2xl text-obsidian sm:text-[2rem]">{table.title}</h3>
            </div>
            <div className="grid grid-cols-2 border-b border-obsidian/8 bg-obsidian/[0.035] text-xs font-semibold uppercase tracking-[0.18em] text-stone">
              <div className="border-r border-obsidian/8 px-5 py-4 sm:px-6">{table.headers[0]}</div>
              <div className="px-5 py-4 sm:px-6">{table.headers[1]}</div>
            </div>
            {table.rows.map(([before, after]) => (
              <div key={before} className="grid grid-cols-1 sm:grid-cols-2">
                <div className="border-b border-obsidian/8 px-5 py-4 text-sm leading-7 text-stone sm:border-r sm:px-6 sm:text-base">
                  {renderInlineLinks(before)}
                </div>
                <div className="border-b border-obsidian/8 px-5 py-4 text-sm leading-7 text-obsidian/90 sm:px-6 sm:text-base">
                  {renderInlineLinks(after)}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "faq") {
    return (
      <div className="divide-y divide-obsidian/10 border-y border-obsidian/10">
        {block.items.map((item) => (
          <div key={item.question} className="py-6 first:pt-5 last:pb-5">
            <h3 className="font-serif text-[1.75rem] leading-tight text-obsidian sm:text-[2rem]">
              {item.question}
            </h3>
            <p className="mt-3 text-base leading-8 text-stone sm:text-lg">{renderInlineLinks(item.answer)}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="rounded-[1.7rem] border border-obsidian/10 bg-[linear-gradient(160deg,rgba(28,34,40,0.92),rgba(17,17,17,0.84))] px-6 py-7 text-white shadow-[0_28px_80px_rgba(17,17,17,0.16)] sm:px-8">
      {block.paragraphs.map((paragraph) => (
        <p key={paragraph} className="max-w-3xl text-base leading-8 text-white/82 sm:text-lg sm:leading-9">
          {renderInlineLinks(paragraph, "light")}
        </p>
      ))}
      <div className="mt-8">
        <a
          href={bookIntroCallUrl}
          target="_blank"
          rel="noreferrer"
          data-track-click="contact_click"
          data-track-category="insight_article"
          data-track-label="cta_calendly"
          data-track-destination={bookIntroCallUrl}
          className="inline-flex min-h-12 items-center justify-center rounded-[0.72rem] bg-white px-6 py-3 text-sm uppercase tracking-[0.18em] text-obsidian transition duration-300 hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(255,255,255,0.12)] active:scale-[0.98]"
        >
          Book an Intro Call
        </a>
      </div>
    </div>
  );
}

export default async function InsightArticlePage({ params }: InsightPageProps) {
  const { slug } = await params;
  const post = getInsightPost(slug);

  if (!post) {
    notFound();
  }

  const tableOfContents = post.sections.map((section) => ({
    id: section.id,
    title: section.title
  }));
  const relatedPosts = insightPosts.filter((candidate) => candidate.slug !== post.slug).slice(0, 3);
  const faqItems = post.sections.flatMap((section) => [
    ...(section.blocks?.filter((block) => block.type === "faq") ?? []),
    ...(section.subsections?.flatMap((subsection) =>
      subsection.blocks.filter((block) => block.type === "faq")
    ) ?? [])
  ]);

  return (
    <main className="relative overflow-x-hidden bg-porcelain text-obsidian">
      <Script id={`${post.slug}-article-schema`} type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.metaDescription,
          image: [absoluteUrl(post.imageSrc)],
          datePublished: articlePublishedTime(post),
          dateModified: articlePublishedTime(post),
          author: {
            "@type": "Person",
            name: siteName
          },
          publisher: {
            "@type": "Organization",
            name: siteName,
            url: siteUrl
          },
          mainEntityOfPage: absoluteUrl(`/insights/${post.slug}`),
          articleSection: post.eyebrow,
          keywords: [...aiStrategyKeywords, post.eyebrow]
        })}
      </Script>
      {faqItems.length > 0 ? (
        <Script id={`${post.slug}-faq-schema`} type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.flatMap((block) =>
              block.items.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer
                }
              }))
            )
          })}
        </Script>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-hero-radial opacity-90" />
      <div className="pointer-events-none absolute right-[-6rem] top-[16rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(217,167,154,0.22),transparent_68%)] blur-3xl" />

      <article className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-28">
        <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-y-auto lg:pr-1">
            <div className="rounded-[1.6rem] border border-white/55 bg-white/36 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.05)] backdrop-blur-sm sm:p-6">
              <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
                In this insight
              </p>
              <nav className="mt-5 grid gap-3">
                {tableOfContents.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-start gap-3 text-sm leading-6 text-stone transition hover:text-obsidian sm:text-base"
                  >
                    <span className="mt-0.5 min-w-7 text-xs font-semibold uppercase tracking-[0.18em] text-stone/70">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span>{item.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              {post.eyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl font-serif text-[3.3rem] leading-[1.04] text-obsidian sm:text-[4.2rem] lg:text-[5rem]">
              {post.title}
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-stone">
              <span>{post.dateLabel}</span>
              <span className="h-1 w-1 rounded-full bg-stone/70" />
              <span>{post.readTime}</span>
              <span className="h-1 w-1 rounded-full bg-stone/70" />
              <span>Actionable Insights</span>
            </div>
            <p className="mt-8 max-w-3xl text-base leading-8 text-stone sm:text-xl sm:leading-9">
              {post.summary}
            </p>

            <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/50 bg-white/30 shadow-[0_30px_90px_rgba(17,17,17,0.08)] backdrop-blur-xl">
              <div className="border-b border-white/40 p-4 sm:p-5">
                <Image
                  src={post.imageSrc}
                  alt={post.imageAlt}
                  width={1680}
                  height={945}
                  priority
                  sizes="(min-width: 1024px) 62vw, 100vw"
                  className="aspect-[16/9] w-full rounded-[1.7rem] object-cover"
                />
              </div>

              <div className="grid gap-4 px-6 py-6 sm:grid-cols-3 sm:px-8 sm:py-7">
                <div className="rounded-[1.2rem] border border-obsidian/8 bg-white/44 px-4 py-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">Primary topic</p>
                  <p className="mt-2 text-sm leading-7 text-obsidian/90 sm:text-base">
                    AI in business operations
                  </p>
                </div>
                <div className="rounded-[1.2rem] border border-obsidian/8 bg-white/44 px-4 py-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">Audience</p>
                  <p className="mt-2 text-sm leading-7 text-obsidian/90 sm:text-base">
                    Enterprise teams and decision-makers
                  </p>
                </div>
                <div className="rounded-[1.2rem] border border-obsidian/8 bg-white/44 px-4 py-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">Lens</p>
                  <p className="mt-2 text-sm leading-7 text-obsidian/90 sm:text-base">
                    Operational design before automation
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 grid gap-12">
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                  <div className="grid gap-6">
                    <div className="flex items-center gap-4">
                      <div className="h-px flex-1 bg-obsidian/10" />
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-stone">
                        Strategic Layer
                      </span>
                    </div>
                    <h2 className="max-w-4xl font-serif text-[2.2rem] leading-[1.08] text-obsidian sm:text-[2.85rem]">
                      {section.title}
                    </h2>
                    {section.blocks ? (
                      <div className="grid gap-6">{section.blocks.map((block) => renderBlock(block))}</div>
                    ) : null}
                    {section.subsections ? (
                      <div className="grid gap-10">
                        {section.subsections.map((subsection) => (
                          <section
                            key={subsection.id}
                            id={subsection.id}
                            className="scroll-mt-32 rounded-[1.7rem] border border-white/55 bg-white/28 px-5 py-6 shadow-[0_22px_60px_rgba(17,17,17,0.05)] backdrop-blur-sm sm:px-7 sm:py-7"
                          >
                            <h3 className="max-w-3xl font-serif text-[1.8rem] leading-[1.12] text-obsidian sm:text-[2.25rem]">
                              {subsection.title}
                            </h3>
                            <div className="mt-5 grid gap-6">
                              {subsection.blocks.map((block) => renderBlock(block))}
                            </div>
                          </section>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-16 flex flex-col gap-5 rounded-[1.75rem] border border-white/55 bg-white/34 px-6 py-6 shadow-[0_24px_60px_rgba(17,17,17,0.05)] backdrop-blur-sm sm:px-8 sm:py-8">
              <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
                Continue reading
              </p>
              <Link
                href="/insights"
                className="inline-flex w-fit min-h-12 items-center justify-center rounded-[0.72rem] border border-obsidian/16 bg-white/48 px-6 py-3 text-sm uppercase tracking-[0.18em] text-obsidian transition duration-300 hover:scale-[1.02] hover:border-obsidian/36 hover:bg-white"
              >
                Back to Insights
              </Link>
            </div>

            <section className="mt-10 rounded-[1.75rem] border border-white/55 bg-white/28 px-6 py-6 shadow-[0_24px_60px_rgba(17,17,17,0.04)] backdrop-blur-sm sm:px-8 sm:py-8">
              <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
                More Actionable Insights
              </p>
              <div className="mt-5 grid gap-4 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/insights/${relatedPost.slug}`}
                    className="rounded-[1.25rem] border border-obsidian/8 bg-white/55 px-4 py-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(17,17,17,0.05)]"
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-stone">
                      {relatedPost.eyebrow}
                    </p>
                    <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-obsidian">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-stone">
                      {relatedPost.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
