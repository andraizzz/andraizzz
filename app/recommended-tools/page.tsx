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
        preview:
          "https://cdn.prod.website-files.com/6838259bd246e848c14f0840/683829796f346a9a6f931363_apple.png",
        description:
          "My pick for fast voice capture and cleaner momentum when thinking, drafting, or moving quickly."
      },
      {
        name: "Claude / Claude Code",
        href: "https://claude.ai",
        image: "https://claude.ai/favicon.ico",
        preview:
          "https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6914d00328fde4187dc9cdbe_claude-code_vs-code_preview.webp",
        description:
          "My personal favorite for vibe coding. Excellent for strategy, long-form thinking, and working through ideas with depth."
      },
      {
        name: "Visual Studio Code",
        href: "https://code.visualstudio.com/",
        image: "https://code.visualstudio.com/favicon.ico",
        preview:
          "https://code.visualstudio.com/assets/home/swimlane-customized.png",
        description:
          "A clean environment for writing, editing, and building. Still one of the strongest homes for vibe coding workflows."
      },
      {
        name: "Brave Browser",
        href: "https://brave.com/",
        image: "https://brave.com/favicon.ico",
        preview: "https://brave.com/home-assets/images/default-accordion-image.png",
        description:
          "For ad-free browsing, cleaner focus, and a more private day-to-day web experience."
      },
      {
        name: "Perplexity",
        href: "https://www.perplexity.ai/",
        image: "https://www.perplexity.ai/favicon.ico",
        preview:
          "https://downloads.intercomcdn.com/i/o/l2wyozh0/1498451662/deb72b6a16156798e755e6b82265/Screenshot%2B2025-04-28%2Bat%2B12_16_01%E2%80%AFPM.png?expires=1775165400&req=dSQuHs17nIdZW%2FMW1HO4zSqqR6WCwYahsVGITKn1XqQdF%2FzfAnJAaCOC4sN4%0Avs8y5qaGeYvA0yRZwd4%3D%0A&signature=9fe6e2c70b99999d0ad119fc39d06fad5eddf23c5066d3dc0cb3b8a9d6f80386",
        description:
          "Fast research and synthesis when you need to move quickly, scan sources, and sharpen an early point of view."
      },
      {
        name: "ChatGPT",
        href: "https://chatgpt.com/",
        image: "https://chatgpt.com/favicon.ico",
        preview:
          "https://images.ctfassets.net/j22is2dtoxu1/7MQhNOlZH0P1UkDzw0DpPt/bdd905a2af2973662c243f3f1cfe2f64/7.png",
        description:
          "Strong for strategy support, ideation, drafting, and helping move a concept from rough instinct into clearer structure."
      },
      {
        name: "Notion",
        href: "https://www.notion.so/",
        image: "https://www.notion.so/images/favicon.ico",
        preview:
          "https://www.notion.com/_next/image?q=75&url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F6ryGYBBeFdl21HUR07Rf45%2F805485a867aec66c8aca2087dfd7cb19%2Fen-US_MeetingNotes.jpg&w=3840",
        description:
          "A clean operating system for notes, planning, systems, and keeping ideas organized without adding visual noise."
      },
      {
        name: "HeyReach",
        href: "https://heyreach.io/?via=andra",
        image: "https://www.heyreach.io/favicon.ico",
        preview:
          "https://cdn.prod.website-files.com/65492afe86bfa964d89f2005/681e98127c850dc8f6eea10f_67bde19c84dbd00082d0bd3e_Group%20269.webp",
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
