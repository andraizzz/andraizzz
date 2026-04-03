import type { Metadata } from "next";
import Image from "next/image";

const toolCategories = [
  {
    name: "Productive Categories",
    tools: [
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
    ]
  }
];

export const metadata: Metadata = {
  title: "Recommended Tools | ANDRA",
  description: "A curated list of tools ANDRA recommends."
};

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
          {toolCategories.map((category) => (
            <div key={category.name} className="border-t border-obsidian/12 pt-8">
              <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
                <div>
                  <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
                    {category.name}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {category.tools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group rounded-[0.72rem] border border-obsidian/12 bg-white/45 p-3 shadow-[0_18px_50px_rgba(17,17,17,0.04)] ring-1 ring-white/60 transition duration-300 hover:-translate-y-1.5 hover:border-obsidian/20 hover:bg-white/60"
                    >
                      <div className="tool-preview relative overflow-hidden rounded-[0.72rem] border border-obsidian/10 bg-porcelain/90">
                        <span className="tool-logo-gloss" />
                        <div className="absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-[0.55rem] bg-white/90 shadow-[0_6px_18px_rgba(17,17,17,0.08)] ring-1 ring-black/5 backdrop-blur-sm">
                          <Image
                            src={tool.image}
                            alt={`${tool.name} logo`}
                            width={22}
                            height={22}
                            className="tool-logo-image h-[1.15rem] w-[1.15rem] object-contain"
                            unoptimized
                          />
                        </div>
                        <div className="tool-preview-image relative h-[8.4rem] w-full overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(245,242,239,0.98))]">
                          <Image
                            src={tool.preview}
                            alt={`${tool.name} preview`}
                            width={1200}
                            height={800}
                            className="h-full w-full object-cover object-top"
                            unoptimized
                          />
                        </div>
                      </div>

                      <div className="mt-3 px-1 pb-1">
                        <div className="flex items-start justify-between gap-3">
                          <h2 className="font-sans text-[1.55rem] font-semibold leading-[1.02] tracking-[-0.03em] text-obsidian">
                            {tool.name}
                          </h2>
                          <span className="pt-1 text-[0.64rem] uppercase tracking-editorial text-stone transition group-hover:text-obsidian">
                            Open →
                          </span>
                        </div>
                        <p className="mt-2 text-[0.9rem] leading-6 text-stone">
                          {tool.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
