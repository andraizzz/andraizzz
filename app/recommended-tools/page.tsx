import type { Metadata } from "next";
import Image from "next/image";

type Tool = {
  name: string;
  href?: string;
  image?: string;
  preview?: string;
  description: string;
  eyebrow?: string;
};

const featuredTools: Tool[] = [
  {
    name: "Wispr Flow",
    href: "https://wisprflow.ai/r?ANDRA16",
    image: "/recommended-tools/wispr-logo.png",
    preview: "/recommended-tools/wispr-preview.jpg",
    description:
      "My pick for fast voice capture and cleaner momentum when thinking, drafting, or moving quickly."
  },
  {
    name: "Claude / Claude Code",
    href: "https://claude.ai",
    image: "/recommended-tools/claude-logo.png",
    preview: "/recommended-tools/claude-preview.webp",
    description:
      "My personal favorite for vibe coding. Excellent for strategy, long-form thinking, and working through ideas with depth."
  },
  {
    name: "Visual Studio Code",
    href: "https://code.visualstudio.com/",
    image: "/recommended-tools/vscode-logo.png",
    preview: "/recommended-tools/vscode-preview.png",
    description:
      "A clean environment for writing, editing, and building. Still one of the strongest homes for vibe coding workflows."
  },
  {
    name: "Brave Browser",
    href: "https://brave.com/",
    image: "/recommended-tools/brave-logo.png",
    preview: "/recommended-tools/brave-preview.png",
    description:
      "For ad-free browsing, cleaner focus, and a more private day-to-day web experience."
  },
  {
    name: "Perplexity",
    href: "https://www.perplexity.ai/",
    image: "/recommended-tools/perplexity-logo.png",
    preview: "/recommended-tools/perplexity-preview.png",
    description:
      "Fast research and synthesis when you need to move quickly, scan sources, and sharpen an early point of view."
  },
  {
    name: "ChatGPT",
    href: "https://chatgpt.com/",
    image: "/recommended-tools/chatgpt-logo.png",
    preview: "/recommended-tools/chatgpt-preview.png",
    description:
      "Strong for strategy support, ideation, drafting, and helping move a concept from rough instinct into clearer structure."
  },
  {
    name: "Notion",
    href: "https://www.notion.so/",
    image: "/recommended-tools/notion-logo.png",
    preview: "/recommended-tools/notion-preview.jpg",
    description:
      "A clean operating system for notes, planning, systems, and keeping ideas organized without adding visual noise."
  },
  {
    name: "HeyReach",
    href: "https://heyreach.io/?via=andra",
    image: "/recommended-tools/heyreach-logo.png",
    preview: "/recommended-tools/heyreach-preview.webp",
    description:
      "A smart choice for outreach systems and LinkedIn-led growth when you want more structure around outbound without overcomplicating it."
  }
];

const furtherTools: Tool[] = [
  {
    name: "Lindy AI CMO",
    href: "https://www.lindy.ai/",
    description:
      "Agent-driven SEO, content, and social pipelines are exactly what digital marketers are moving toward. These are very on-trend.",
    eyebrow: "AI CMO"
  },
  {
    name: "HeyGen / Synthesia",
    href: "https://www.heygen.com/",
    description:
      "AI avatar video for ads, brand storytelling, and social content is exploding. Essential if video is in your strategy.",
    eyebrow: "Video"
  },
  {
    name: "ElevenLabs / Voice Design V3 / Fish Audio S1",
    href: "https://elevenlabs.io/",
    description:
      "Voice-over and audio branding for video, podcasts, and ads.",
    eyebrow: "Audio"
  },
  {
    name: "Ad Copy Generator / AdGen AI / Arcads",
    href: "https://www.arcads.ai/",
    description:
      "Direct digital ad production tools. Very relevant for paid social and search campaigns.",
    eyebrow: "Paid Ads"
  },
  {
    name: "Blaze",
    href: "https://www.blaze.ai/",
    description:
      "Content scheduling and visual creation in one practical workflow for everyday social media management.",
    eyebrow: "Social"
  },
  {
    name: "Canva Creative OS",
    href: "https://www.canva.com/",
    description:
      "Already a staple. The new AI-powered suite makes it more powerful than ever for digital creatives.",
    eyebrow: "Creative"
  },
  {
    name: "PromptSignal",
    description:
      "As LLMs increasingly influence brand discovery, tracking how AI ranks your brand is a new but critical digital marketing metric.",
    eyebrow: "AI Visibility"
  },
  {
    name: "Reachy.ai",
    href: "https://reachy.ai/",
    description:
      "LinkedIn outreach automation is very relevant for B2B digital marketing.",
    eyebrow: "Outreach"
  },
  {
    name: "AI User Persona Generator",
    description:
      "Understanding your audience with AI is foundational for any digital strategy.",
    eyebrow: "Strategy"
  },
  {
    name: "Typefully",
    href: "https://typefully.com/",
    description:
      "X and Twitter are still key digital marketing channels, and thread scheduling stays relevant.",
    eyebrow: "Publishing"
  },
  {
    name: "Lumona",
    description:
      "Social media-powered AI search insights is a modern take on audience research.",
    eyebrow: "Research"
  }
];

const situationalTools: Tool[] = [
  {
    name: "Midjourney / Nano Banana 2",
    href: "https://www.midjourney.com/",
    description:
      "Great for creative teams producing visual content at scale, but still requires more manual workflow integration.",
    eyebrow: "Situational"
  },
  {
    name: "60secsite",
    href: "https://60sec.site/",
    description:
      "Useful for quick landing page experiments and lightweight performance marketing tests.",
    eyebrow: "Landing Pages"
  },
  {
    name: "10xlaunch",
    description:
      "Lead capture is always relevant, but this depends on your CRO strategy and funnel design.",
    eyebrow: "Lead Capture"
  },
  {
    name: "AgentX / AI Chatbot on Zapier / Aicado",
    href: "https://zapier.com/",
    description:
      "Useful if your digital marketing stack includes website automation or conversational marketing.",
    eyebrow: "Automation"
  },
  {
    name: "Infography / Canvas in Gemini",
    href: "https://gemini.google.com/",
    description:
      "Good for content marketing and thought leadership visuals.",
    eyebrow: "Content"
  },
  {
    name: "Magic Animator",
    description:
      "Relevant if you are producing motion graphics for social and web.",
    eyebrow: "Motion"
  },
  {
    name: "Pomelli",
    description:
      "An early-stage Google Labs experiment worth watching, but not yet production-ready.",
    eyebrow: "Emerging"
  },
  {
    name: "Hailuo 2.3",
    description:
      "Solid for video content production, though more of a creator tool than a pure marketing tool.",
    eyebrow: "Video"
  }
];

export const metadata: Metadata = {
  title: "Recommended Tools | ANDRA",
  description: "A curated list of tools ANDRA recommends."
};

function toolMonogram(name: string) {
  const parts = name.split(/[ /]+/).filter(Boolean);
  return parts.slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function ToolCard({ tool, compact = false }: { tool: Tool; compact?: boolean }) {
  const CardTag = tool.href ? "a" : "div";
  const isLinked = Boolean(tool.href);

  return (
    <CardTag
      {...(tool.href
        ? { href: tool.href, target: "_blank", rel: "noreferrer" }
        : {})}
      className={`group rounded-[0.72rem] border border-obsidian/12 bg-white/45 p-3 shadow-[0_18px_50px_rgba(17,17,17,0.04)] ring-1 ring-white/60 transition duration-300 hover:-translate-y-1.5 hover:border-obsidian/20 hover:bg-white/60 ${
        compact ? "min-h-[14.5rem]" : ""
      }`}
    >
      <div className="tool-preview relative overflow-hidden rounded-[0.72rem] border border-obsidian/10 bg-porcelain/90">
        <span className="tool-logo-gloss" />
        <div className="absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-[0.55rem] bg-white/90 shadow-[0_6px_18px_rgba(17,17,17,0.08)] ring-1 ring-black/5 backdrop-blur-sm">
          {tool.image ? (
            <Image
              src={tool.image}
              alt={`${tool.name} logo`}
              width={22}
              height={22}
              className="tool-logo-image h-[1.15rem] w-[1.15rem] object-contain"
              unoptimized
            />
          ) : (
            <span className="tool-monogram text-[0.62rem] font-semibold tracking-[0.12em] text-obsidian">
              {toolMonogram(tool.name)}
            </span>
          )}
        </div>

        <div
          className={`tool-preview-image relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(245,242,239,0.98))] ${
            compact ? "h-[7.2rem]" : "h-[8.4rem]"
          }`}
        >
          {tool.preview ? (
            <Image
              src={tool.preview}
              alt={`${tool.name} preview`}
              width={1200}
              height={800}
              className="h-full w-full object-cover object-top"
              unoptimized
            />
          ) : (
            <div className="tool-preview-fallback flex h-full items-end justify-between px-4 pb-4 pt-12">
              <div>
                {tool.eyebrow ? (
                  <p className="text-[0.62rem] uppercase tracking-editorial text-stone">
                    {tool.eyebrow}
                  </p>
                ) : null}
                <p className="mt-2 max-w-[10rem] font-serif text-2xl leading-none text-obsidian/85">
                  {toolMonogram(tool.name)}
                </p>
              </div>
              <div className="h-14 w-14 rounded-full border border-obsidian/8 bg-white/30" />
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 px-1 pb-1">
        <div className="flex items-start justify-between gap-3">
          <h2
            className={`font-sans font-semibold leading-[1.02] tracking-[-0.03em] text-obsidian ${
              compact ? "text-[1.3rem]" : "text-[1.55rem]"
            }`}
          >
            {tool.name}
          </h2>
          {isLinked ? (
            <span className="pt-1 text-[0.64rem] uppercase tracking-editorial text-stone transition group-hover:text-obsidian">
              Open →
            </span>
          ) : null}
        </div>
        <p className={`mt-2 text-stone ${compact ? "text-[0.88rem] leading-6" : "text-[0.9rem] leading-6"}`}>
          {tool.description}
        </p>
      </div>
    </CardTag>
  );
}

export default function RecommendedToolsPage() {
  return (
    <main className="relative overflow-hidden bg-porcelain px-6 py-10 text-obsidian sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-hero-radial opacity-80" />

      <section className="hero-fade mx-auto max-w-7xl pt-6 sm:pt-8 lg:pt-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
            Curated Recommendations
          </p>
          <h1 className="mt-6 font-serif text-[3.3rem] leading-[1.04] text-obsidian sm:text-[4.2rem] lg:text-[5rem]">
            Recommended Tools.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-stone sm:text-lg sm:leading-9">
            A curated selection of tools I genuinely use, recommend, or believe
            are worth your attention for clearer thinking, stronger execution,
            and better visibility.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-16 sm:py-20">
        <div className="space-y-14">
          <div className="border-t border-obsidian/12 pt-8">
            <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
              <div>
                <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
                  Recommended
                </p>
                <p className="mt-4 max-w-xs text-sm leading-7 text-stone">
                  My top eight productive tools and personal recommendations.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {featuredTools.map((tool) => (
                  <ToolCard key={tool.name} tool={tool} />
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-obsidian/12 pt-8">
            <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
              <div>
                <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
                  Further Tools You Can Use
                </p>
                <p className="mt-4 max-w-xs text-sm leading-7 text-stone">
                  Additional productive tools worth looking at depending on your
                  workflow and marketing needs.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {furtherTools.map((tool) => (
                  <ToolCard key={tool.name} tool={tool} compact />
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-obsidian/12 pt-8">
            <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
              <div>
                <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
                  Situationally Relevant
                </p>
                <p className="mt-4 max-w-xs text-sm leading-7 text-stone">
                  Worth considering depending on your stack, creative process,
                  and campaign goals.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {situationalTools.map((tool) => (
                  <ToolCard key={tool.name} tool={tool} compact />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
