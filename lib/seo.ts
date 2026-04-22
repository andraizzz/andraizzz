import type { Metadata } from "next";
import { insightPosts, type InsightPost } from "@/lib/insights";

export const siteUrl = "https://andraizzz.com";
export const siteName = "ANDRA";
export const defaultOgImage = `${siteUrl}/andra-hero.jpg`;

export const recommendedToolsKeywords = [
  "recommended AI tools",
  "AI tools",
  "best AI tools for business",
  "AI tools for consultants",
  "AI tools for marketing teams",
  "AI workflow tools",
  "AI tools for productivity",
  "AI tools recommendations",
  "ANDRA recommended tools"
];

export const aiStrategyKeywords = [
  "AI workflows",
  "AI workflow strategy",
  "AI workflow consulting",
  "AI workflow audit",
  "AI automation consultant",
  "AI tips and tricks",
  "AI tools for brands",
  "AI visibility",
  "AI business operations",
  "enterprise AI strategy",
  "AI implementation",
  "AI marketing workflows",
  "AI growth strategy"
];

export function absoluteUrl(pathname: string) {
  if (pathname.startsWith("http://") || pathname.startsWith("https://")) {
    return pathname;
  }

  return new URL(pathname, siteUrl).toString();
}

export function buildPageMetadata({
  title,
  description,
  pathname,
  keywords = [],
  type = "website"
}: {
  title: string;
  description: string;
  pathname: string;
  keywords?: string[];
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(pathname);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName,
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 1500,
          alt: "ANDRA editorial portrait"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage]
    }
  };
}

export function getAllSitePaths() {
  return [
    "/",
    "/ai-workflow-audit",
    "/insights",
    "/recommended-tools",
    "/cool-tools",
    "/privacy-policy",
    "/terms-of-service",
    ...insightPosts.map((post) => `/insights/${post.slug}`)
  ];
}

export function articlePublishedTime(post: InsightPost) {
  const [monthName, year] = post.dateLabel.split(" ");
  const month = new Date(`${monthName} 1, ${year}`).getMonth();
  const publishedDate = new Date(Date.UTC(Number(year), month, 1));
  return publishedDate.toISOString();
}
