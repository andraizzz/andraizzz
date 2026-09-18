import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

// LLM crawlers are allowed by default under User-agent: *. They are listed
// explicitly so anyone auditing the robots file can see they are welcome,
// and so any future tightening for one specific bot has a place to land.
const llmCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "Amazonbot",
  "Meta-ExternalAgent",
  "DuckAssistBot"
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"]
      },
      ...llmCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/"
      }))
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl
  };
}
