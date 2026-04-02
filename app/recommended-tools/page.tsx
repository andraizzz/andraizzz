import type { Metadata } from "next";
import Image from "next/image";

const toolCategories = [
  {
    name: "Productive Categories",
    tools: [
      {
        name: "Wispr Flow",
        href: "https://wisprflow.ai/r?ANDRA16",
        image: "https://wisprflow.ai/favicon.ico",
        description:
          "My pick for fast voice capture and cleaner momentum when thinking, drafting, or moving quickly."
      },
      {
        name: "Claude / Claude Code",
        href: "https://claude.ai",
        image: "https://claude.ai/favicon.ico",
        description:
          "My personal favorite for vibe coding. Excellent for strategy, long-form thinking, and working through ideas with depth."
      },
      {
        name: "Visual Studio Code",
        href: "https://code.visualstudio.com/",
        image: "https://code.visualstudio.com/favicon.ico",
        description:
          "A clean environment for writing, editing, and building. Still one of the strongest homes for vibe coding workflows."
      },
      {
        name: "Brave Browser",
        href: "https://brave.com/",
        image: "https://brave.com/favicon.ico",
        description:
          "For ad-free browsing, cleaner focus, and a more private day-to-day web experience."
      },
      {
        name: "Perplexity",
        href: "https://www.perplexity.ai/",
        image: "https://www.perplexity.ai/favicon.ico",
        description:
          "Fast research and synthesis when you need to move quickly, scan sources, and sharpen an early point of view."
      },
      {
        name: "ChatGPT",
        href: "https://chatgpt.com/",
        image: "https://chatgpt.com/favicon.ico",
        description:
          "Strong for strategy support, ideation, drafting, and helping move a concept from rough instinct into clearer structure."
      },
      {
        name: "Notion",
        href: "https://www.notion.so/",
        image: "https://www.notion.so/images/favicon.ico",
        description:
          "A clean operating system for notes, planning, systems, and keeping ideas organized without adding visual noise."
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

                <div className="grid gap-5 md:grid-cols-2">
                  {category.tools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group grid min-h-[19rem] grid-rows-[auto_1fr_auto] rounded-[0.72rem] border border-obsidian/12 bg-white/45 p-6 shadow-[0_18px_50px_rgba(17,17,17,0.04)] ring-1 ring-white/60 transition duration-300 hover:-translate-y-0.5 hover:border-obsidian/20 hover:bg-white/60"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-[0.72rem] border border-obsidian/10 bg-porcelain/90">
                          <Image
                            src={tool.image}
                            alt={`${tool.name} logo`}
                            width={44}
                            height={44}
                            className="h-11 w-11 rounded-[0.55rem] object-contain"
                            unoptimized
                          />
                        </div>
                        <span className="pt-1 text-[0.7rem] uppercase tracking-editorial text-stone transition group-hover:text-obsidian">
                          Open →
                        </span>
                      </div>

                      <div className="mt-8">
                        <h2 className="font-serif text-3xl leading-tight text-obsidian">
                          {tool.name}
                        </h2>
                        <p className="mt-4 text-base leading-8 text-stone">
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
