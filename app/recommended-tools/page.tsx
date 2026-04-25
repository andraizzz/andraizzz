import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { recommendedToolLinks } from "@/lib/recommended-tool-links";
import { absoluteUrl, buildPageMetadata, recommendedToolsKeywords, siteName, siteUrl } from "@/lib/seo";

type Tool = {
  name: string;
  href?: string;
  image?: string;
  preview?: string;
  description: string;
  eyebrow?: string;
};

const toolPalettes = [
  { background: "#F7F0EB", surface: "#F1E5DD", accent: "#D9A79A", ink: "#1C2228" },
  { background: "#F4EFEA", surface: "#E8DDD3", accent: "#C98D82", ink: "#1C2228" },
  { background: "#F3F1EE", surface: "#E6E2DD", accent: "#A7B2BC", ink: "#1C2228" },
  { background: "#F7F3F0", surface: "#EDE3DC", accent: "#B98E82", ink: "#1C2228" },
  { background: "#F5F1EC", surface: "#E6DCD2", accent: "#8DA0A8", ink: "#1C2228" }
] as const;

const featuredTools: Tool[] = [
  {
    name: "Wispr Flow",
    href: recommendedToolLinks.wisprFlow,
    image: "/recommended-tools/wispr-logo.png",
    preview: "/recommended-tools/wispr-preview.jpg",
    description:
      "My pick for fast voice capture and cleaner momentum when thinking, drafting, or moving quickly."
  },
  {
    name: "Claude / Claude Code",
    href: recommendedToolLinks.claude,
    image: "/recommended-tools/claude-logo.png",
    preview: "/recommended-tools/claude-preview.webp",
    description:
      "My personal favorite for vibe coding. Excellent for strategy, long-form thinking, and working through ideas with depth."
  },
  {
    name: "Descript",
    href: recommendedToolLinks.descript,
    image: "/recommended-tools-extra/descript-logo.png",
    preview: "/recommended-tools-extra/descript-preview.png",
    description:
      "The easiest video editor to recommend when you want fast edits, cleaner workflows, and less production friction."
  },
  {
    name: "Brave Browser",
    href: recommendedToolLinks.braveBrowser,
    image: "/recommended-tools/brave-logo.png",
    preview: "/recommended-tools/brave-preview.png",
    description:
      "For ad-free browsing, cleaner focus, and a more private day-to-day web experience."
  },
  {
    name: "Perplexity",
    href: recommendedToolLinks.perplexity,
    image: "/recommended-tools/perplexity-logo.png",
    preview: "/recommended-tools/perplexity-preview.png",
    description:
      "Fast research and synthesis when you need to move quickly, scan sources, and sharpen an early point of view."
  },
  {
    name: "ChatGPT",
    href: recommendedToolLinks.chatgpt,
    image: "/recommended-tools/chatgpt-logo.png",
    preview: "/recommended-tools/chatgpt-preview.png",
    description:
      "Strong for strategy support, ideation, drafting, and helping move a concept from rough instinct into clearer structure."
  },
  {
    name: "Notion",
    href: recommendedToolLinks.notion,
    image: "/recommended-tools/notion-logo.png",
    preview: "/recommended-tools/notion-preview.jpg",
    description:
      "A clean operating system for notes, planning, systems, and keeping ideas organized without adding visual noise."
  },
  {
    name: "HeyReach",
    href: recommendedToolLinks.heyreach,
    image: "/recommended-tools/heyreach-logo.png",
    preview: "/recommended-tools/heyreach-preview.webp",
    description:
      "A smart choice for outreach systems and LinkedIn-led growth when you want more structure around outbound without overcomplicating it."
  }
];

const furtherTools: Tool[] = [
  {
    name: "Visual Studio Code",
    href: recommendedToolLinks.visualStudioCode,
    image: "/recommended-tools/vscode-logo.png",
    preview: "/recommended-tools/vscode-preview.png",
    description:
      "Still one of the strongest environments for writing, editing, and building when your workflow leans technical.",
    eyebrow: "Build"
  },
  {
    name: "Lindy AI CMO",
    href: recommendedToolLinks.lindy,
    image: "/recommended-tools-extra/lindy-logo.png",
    preview: "/recommended-tools-extra/lindy-preview.jpg",
    description:
      "Agent-driven SEO, content, and social pipelines are exactly what digital marketers are moving toward. These are very on-trend.",
    eyebrow: "AI CMO"
  },
  {
    name: "HeyGen",
    href: recommendedToolLinks.heygen,
    image: "/recommended-tools-extra/heygen-logo.ico",
    preview: "/recommended-tools-extra/heygen-preview.png",
    description:
      "AI avatar video for ads, brand storytelling, and social content is exploding. Essential if video is in your strategy.",
    eyebrow: "Video"
  },
  {
    name: "Synthesia",
    href: recommendedToolLinks.synthesia,
    image: "/recommended-tools-extra/synthesia-logo.png",
    preview: "/recommended-tools-extra/synthesia-preview.jpg",
    description:
      "A strong business-facing AI video platform if your workflow leans toward training, brand storytelling, or polished internal content.",
    eyebrow: "Video"
  },
  {
    name: "ElevenLabs",
    href: recommendedToolLinks.elevenLabs,
    image: "/recommended-tools-extra/elevenlabs-logo.ico",
    preview: "/recommended-tools-extra/elevenlabs-preview.png",
    description:
      "Voice-over and audio branding for video, podcasts, ads, and narration-heavy content workflows.",
    eyebrow: "Audio"
  },
  {
    name: "Fish Audio S1",
    href: recommendedToolLinks.fishAudio,
    image: "/recommended-tools-extra/fish-logo.ico",
    preview: "/recommended-tools-extra/fish-preview.png",
    description:
      "Another strong voice layer for audio branding, expressive narration, and creative voice experimentation.",
    eyebrow: "Audio"
  },
  {
    name: "Arcads",
    href: recommendedToolLinks.arcads,
    image: "/recommended-tools-extra/arcads-logo.png",
    preview: "/recommended-tools-extra/arcads-preview.png",
    description:
      "A direct digital ad production tool that feels especially relevant for paid social and performance workflows.",
    eyebrow: "Paid Ads"
  },
  {
    name: "Blaze",
    href: recommendedToolLinks.blaze,
    image: "/recommended-tools-extra/blaze-logo.png",
    preview: "/recommended-tools-extra/blaze-preview.jpg",
    description:
      "Content scheduling and visual creation in one practical workflow for everyday social media management.",
    eyebrow: "Social"
  },
  {
    name: "Canva Creative OS",
    href: recommendedToolLinks.canvaCreativeOs,
    image: "/recommended-tools-extra/canva-logo.ico",
    preview: "/recommended-tools-extra/canva-creative-os-preview.svg",
    description:
      "Already a staple. The new AI-powered suite makes it more powerful than ever for digital creatives.",
    eyebrow: "Creative"
  },
  {
    name: "PromptSignal",
    href: recommendedToolLinks.promptsignal,
    image: "/recommended-tools-extra/promptsignal-logo.png",
    preview: "/recommended-tools-extra/promptsignal-preview.webp",
    description:
      "As LLMs increasingly influence brand discovery, tracking how AI ranks your brand is a new but critical digital marketing metric.",
    eyebrow: "AI Visibility"
  },
  {
    name: "Reachy.ai",
    href: recommendedToolLinks.reachy,
    image: "/recommended-tools-extra/reachy-logo.png",
    preview: "/recommended-tools-extra/reachy-preview.png",
    description:
      "LinkedIn outreach automation is very relevant for B2B digital marketing.",
    eyebrow: "Outreach"
  },
  {
    name: "Typefully",
    href: recommendedToolLinks.typefully,
    image: "/recommended-tools-extra/typefully-logo.ico",
    preview: "/recommended-tools-extra/typefully-preview.png",
    description:
      "X and Twitter are still key digital marketing channels, and thread scheduling stays relevant.",
    eyebrow: "Publishing"
  }
];

const situationalTools: Tool[] = [
  {
    name: "Midjourney",
    href: recommendedToolLinks.midjourney,
    image: "/recommended-tools-extra/midjourney-logo.png",
    preview: "/recommended-tools-extra/midjourney-preview.png",
    description:
      "Great for creative teams producing visual content at scale, though it still benefits from a stronger manual workflow around it.",
    eyebrow: "Situational"
  },
  {
    name: "Nano Banana 2",
    href: recommendedToolLinks.gemini,
    image: "/recommended-tools-extra/nano-banana-logo.png",
    preview: "/recommended-tools-extra/nano-banana-preview.png",
    description:
      "Useful for creative experimentation, but more niche and workflow-dependent than the core recommendations above.",
    eyebrow: "Situational"
  },
  {
    name: "60secsite",
    href: recommendedToolLinks.sixtySecSite,
    image: "/recommended-tools-extra/60secsite-logo.png",
    preview: "/recommended-tools-extra/60secsite-preview.webp",
    description:
      "Useful for quick landing page experiments and lightweight performance marketing tests.",
    eyebrow: "Landing Pages"
  },
  {
    name: "10xlaunch",
    href: recommendedToolLinks.tenxlaunch,
    image: "/recommended-tools-extra/10xlaunch-logo.png",
    preview: "/recommended-tools-extra/10xlaunch-preview.png",
    description:
      "Lead capture is always relevant, but this depends on your CRO strategy and funnel design.",
    eyebrow: "Lead Capture"
  },
  {
    name: "AI Chatbot on Zapier",
    href: recommendedToolLinks.zapierAi,
    image: "/recommended-tools-extra/zapier-ai-logo.png",
    preview: "/recommended-tools-extra/zapier-ai-preview.png",
    description:
      "Useful if your digital marketing stack includes website automation or conversational marketing.",
    eyebrow: "Automation"
  },
  {
    name: "Aicado",
    href: recommendedToolLinks.aicado,
    image: "/recommended-tools-extra/aicado-logo.png",
    preview: "/recommended-tools-extra/aicado-preview.png",
    description:
      "A practical option if you want branded AI agents or assistant-like experiences embedded directly into your site or product.",
    eyebrow: "Automation"
  },
  {
    name: "Canvas in Gemini",
    href: recommendedToolLinks.canvasInGemini,
    image: "/recommended-tools-extra/gemini-logo.ico",
    preview: "/recommended-tools-extra/gemini-canvas-preview.png",
    description:
      "Good for content marketing and thought leadership visuals.",
    eyebrow: "Content"
  },
  {
    name: "Magic Animator",
    href: recommendedToolLinks.magicAnimator,
    image: "/recommended-tools-extra/magic-animator-logo.svg",
    preview: "/recommended-tools-extra/magic-animator-preview.png",
    description:
      "Relevant if you are producing motion graphics for social and web.",
    eyebrow: "Motion"
  },
  {
    name: "Pomelli",
    href: recommendedToolLinks.pomelli,
    image: "/recommended-tools-extra/pomelli-logo.ico",
    preview: "/recommended-tools-extra/pomelli-preview.svg",
    description:
      "An early-stage Google Labs experiment worth watching, but not yet production-ready.",
    eyebrow: "Emerging"
  },
  {
    name: "Hailuo 2.3",
    href: recommendedToolLinks.hailuo,
    image: "/recommended-tools-extra/hailuo-logo.png",
    preview: "/recommended-tools-extra/hailuo-preview.svg",
    description:
      "Solid for video content production, though more of a creator tool than a pure marketing tool.",
    eyebrow: "Video"
  }
];

export const metadata: Metadata = buildPageMetadata({
  title: "Recommended AI Tools and Workflow Stack | ANDRA",
  description:
    "A curated list of recommended AI tools, workflow software, and productivity platforms ANDRA uses or recommends for clearer thinking, stronger execution, and better visibility.",
  pathname: "/recommended-tools",
  keywords: recommendedToolsKeywords
});

function toolMonogram(name: string) {
  const parts = name.split(/[ /]+/).filter(Boolean);
  return parts.slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function hashToolName(name: string) {
  return Array.from(name).reduce((total, char) => total + char.charCodeAt(0), 0);
}

function pickToolPalette(name: string) {
  return toolPalettes[hashToolName(name) % toolPalettes.length];
}

function svgToDataUri(svg: string) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function renderToolIcon(tool: Tool) {
  if (tool.image) {
    return tool.image;
  }

  const palette = pickToolPalette(tool.name);
  const monogram = toolMonogram(tool.name);

  return svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
      <rect width="96" height="96" rx="28" fill="${palette.background}"/>
      <rect x="10" y="10" width="76" height="76" rx="22" fill="${palette.surface}" stroke="rgba(28,34,40,0.08)"/>
      <rect x="18" y="18" width="60" height="14" rx="7" fill="${palette.background}"/>
      <rect x="18" y="42" width="60" height="30" rx="15" fill="${palette.accent}" fill-opacity="0.18"/>
      <text x="48" y="62" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="2" fill="${palette.ink}">${monogram}</text>
    </svg>
  `);
}

function renderToolPreview(tool: Tool) {
  if (tool.preview) {
    return tool.preview;
  }

  const palette = pickToolPalette(tool.name);
  const title = tool.name.replace(/&/g, "&amp;");
  const eyebrow = (tool.eyebrow ?? "Tool").replace(/&/g, "&amp;");

  return svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760" fill="none">
      <rect width="1200" height="760" rx="36" fill="${palette.background}"/>
      <rect x="32" y="32" width="1136" height="696" rx="28" fill="rgba(255,255,255,0.72)" stroke="rgba(28,34,40,0.08)"/>
      <rect x="64" y="64" width="1072" height="72" rx="20" fill="${palette.surface}"/>
      <circle cx="104" cy="100" r="10" fill="${palette.accent}" fill-opacity="0.9"/>
      <circle cx="136" cy="100" r="10" fill="${palette.accent}" fill-opacity="0.55"/>
      <circle cx="168" cy="100" r="10" fill="${palette.accent}" fill-opacity="0.3"/>
      <rect x="220" y="84" width="172" height="30" rx="15" fill="rgba(28,34,40,0.08)"/>
      <rect x="748" y="84" width="324" height="30" rx="15" fill="rgba(28,34,40,0.06)"/>
      <rect x="80" y="176" width="420" height="472" rx="28" fill="${palette.surface}"/>
      <rect x="532" y="176" width="556" height="214" rx="28" fill="rgba(255,255,255,0.78)"/>
      <rect x="532" y="420" width="266" height="228" rx="28" fill="rgba(255,255,255,0.78)"/>
      <rect x="822" y="420" width="266" height="228" rx="28" fill="rgba(255,255,255,0.78)"/>
      <text x="112" y="236" font-family="Arial, sans-serif" font-size="20" letter-spacing="5" fill="rgba(28,34,40,0.45)">${eyebrow.toUpperCase()}</text>
      <text x="112" y="300" font-family="Georgia, serif" font-size="54" fill="${palette.ink}">${title}</text>
      <rect x="112" y="338" width="256" height="14" rx="7" fill="rgba(28,34,40,0.12)"/>
      <rect x="112" y="370" width="220" height="14" rx="7" fill="rgba(28,34,40,0.08)"/>
      <rect x="112" y="450" width="160" height="160" rx="32" fill="${palette.background}"/>
      <rect x="300" y="450" width="136" height="22" rx="11" fill="rgba(28,34,40,0.08)"/>
      <rect x="300" y="490" width="88" height="88" rx="24" fill="${palette.accent}" fill-opacity="0.18"/>
      <rect x="564" y="208" width="360" height="18" rx="9" fill="rgba(28,34,40,0.08)"/>
      <rect x="564" y="244" width="454" height="18" rx="9" fill="rgba(28,34,40,0.06)"/>
      <rect x="564" y="292" width="144" height="64" rx="20" fill="${palette.accent}" fill-opacity="0.18"/>
      <rect x="734" y="292" width="146" height="64" rx="20" fill="${palette.surface}"/>
      <rect x="906" y="292" width="146" height="64" rx="20" fill="${palette.background}"/>
      <path d="M576 584C630 528 676 514 732 498C792 480 834 458 888 420" stroke="${palette.accent}" stroke-width="10" stroke-linecap="round"/>
      <path d="M858 584L908 532L960 566L1034 480" stroke="${palette.ink}" stroke-opacity="0.18" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `);
}

function shouldSkipOptimization(src: string) {
  return src.startsWith("data:") || src.endsWith(".svg") || src.endsWith(".ico");
}

function ToolCard({ tool, compact = false }: { tool: Tool; compact?: boolean }) {
  const CardTag = tool.href ? "a" : "div";
  const isLinked = Boolean(tool.href);
  const iconSrc = renderToolIcon(tool);
  const previewSrc = renderToolPreview(tool);
  const iconUnoptimized = shouldSkipOptimization(iconSrc);
  const previewUnoptimized = shouldSkipOptimization(previewSrc);

  return (
    <CardTag
      {...(tool.href
        ? {
            href: tool.href,
            target: "_blank",
            rel: "noreferrer",
            "data-track-click": "recommended_tool_click",
            "data-track-category": compact ? "recommended_tools_compact" : "recommended_tools_featured",
            "data-track-label": tool.name,
            "data-track-destination": tool.href
          }
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
              src={iconSrc}
              alt={`${tool.name} logo`}
              width={22}
              height={22}
              className="tool-logo-image h-[1.15rem] w-[1.15rem] object-contain"
              sizes="18px"
              quality={100}
              unoptimized={iconUnoptimized}
            />
          ) : (
            <Image
              src={iconSrc}
              alt={`${tool.name} icon`}
              width={22}
              height={22}
              className="tool-logo-image h-[1.15rem] w-[1.15rem] object-contain"
              sizes="18px"
              quality={100}
              unoptimized={iconUnoptimized}
            />
          )}
        </div>

        <div
          className={`tool-preview-image relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(245,242,239,0.98))] p-2 ${
            compact ? "h-[7.2rem]" : "h-[8.4rem]"
          }`}
        >
          {tool.preview ? (
            <Image
              src={previewSrc}
              alt={`${tool.name} preview`}
              width={1200}
              height={800}
              className="h-full w-full object-contain object-top"
              sizes="(min-width: 1280px) 360px, (min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              quality={100}
              unoptimized={previewUnoptimized}
            />
          ) : (
            <Image
              src={previewSrc}
              alt={`${tool.name} preview`}
              width={1200}
              height={800}
              className="h-full w-full object-contain object-top"
              sizes="(min-width: 1280px) 360px, (min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              quality={100}
              unoptimized={previewUnoptimized}
            />
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
  const allTools = [...featuredTools, ...furtherTools, ...situationalTools];

  return (
    <main className="relative overflow-hidden bg-porcelain px-6 py-10 text-obsidian sm:px-8 lg:px-12">
      <Script id="recommended-tools-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Recommended AI Tools and Workflow Stack",
          url: `${siteUrl}/recommended-tools`,
          description:
            "A curated collection of recommended AI tools, workflow tools, and productivity software.",
          isPartOf: {
            "@type": "WebSite",
            name: siteName,
            url: siteUrl
          },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: allTools.map((tool, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: tool.name,
              url: tool.href ?? absoluteUrl("/recommended-tools"),
              description: tool.description
            }))
          }
        })}
      </Script>
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
                  Core AI Tools
                </p>
                <p className="mt-4 max-w-xs text-sm leading-7 text-stone">
                  The core AI tools I recommend for research, writing, coding, and clearer day-to-day execution.
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
                  AI Tools for Marketing and Automation
                </p>
                <p className="mt-4 max-w-xs text-sm leading-7 text-stone">
                  Additional AI tools worth exploring for outreach, content systems, automation, and growth workflows.
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
                  Specialized AI Workflow Tools
                </p>
                <p className="mt-4 max-w-xs text-sm leading-7 text-stone">
                  More specialized AI tools depending on your stack, creative process, campaign goals, and implementation stage.
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

      <section className="mx-auto max-w-7xl pb-20 sm:pb-24">
        <div className="rounded-[1.8rem] border border-white/55 bg-white/36 px-6 py-7 shadow-[0_20px_60px_rgba(17,17,17,0.05)] backdrop-blur-sm sm:px-8 sm:py-8">
          <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
            Need the right stack, not more tabs?
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-[2.15rem] leading-[1.08] text-obsidian sm:text-[2.7rem]">
            Start with the workflow, then choose the AI tools that actually fit it.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone sm:text-lg">
            If you want help figuring out which tools matter for your business, the{" "}
            <Link
              href="/ai-workflow-audit"
              data-track-click="audit_click"
              data-track-category="recommended_tools"
              data-track-label="audit_cta"
              data-track-destination="/ai-workflow-audit"
              className="font-medium text-obsidian underline decoration-obsidian/30 underline-offset-4"
            >
              AI Workflow Audit
            </Link>{" "}
            is the cleanest way to map your bottlenecks, tighten the stack, and connect the right workflows to the right systems.
          </p>
        </div>
      </section>
    </main>
  );
}
