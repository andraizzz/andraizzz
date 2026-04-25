import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { InquiryForm } from "@/components/inquiry-form";
import { bookIntroCallUrl } from "@/lib/contact";
import {
  aiStrategyKeywords,
  buildPageMetadata,
  siteName,
  siteUrl
} from "@/lib/seo";

const auditDeliverables = [
  {
    title: "What is happening now",
    description:
      "A simple map of how work currently moves, where it gets stuck, and what still depends on manual follow-up."
  },
  {
    title: "What should change first",
    description:
      "A shortlist of the workflows that are actually worth standardizing, automating, or supporting with AI."
  },
  {
    title: "What tools fit the workflow",
    description:
      "Tool recommendations based on your real workflow, not on whatever platform is currently trending."
  },
  {
    title: "What to do next",
    description:
      "A practical sequence of quick wins, medium-term system work, and visibility improvements."
  }
];

const auditSteps = [
  {
    number: "01",
    title: "We map the workflow",
    description:
      "We look at how work currently moves from idea to output and where friction appears."
  },
  {
    number: "02",
    title: "We find the bottlenecks",
    description:
      "We identify what feels slow, repetitive, messy, or inconsistent."
  },
  {
    number: "03",
    title: "We decide what should stay human and what AI should support",
    description:
      "The goal is not to automate everything. The goal is to improve the right parts."
  },
  {
    number: "04",
    title: "You leave with a clearer roadmap",
    description:
      "You know what to fix first, what tools matter, and what next steps actually make sense."
  }
];

const plainEnglishPoints = [
  "If your team is using AI in scattered ways, this helps turn that into a clearer system.",
  "If you are unsure which tools actually matter, this helps you cut through the noise.",
  "If your business feels busy but the workflow still feels messy, this helps identify what to standardize first."
];

const workflowAreas = [
  {
    title: "Marketing and Content",
    points: [
      "Campaign planning and asset production",
      "Content repurposing and approvals",
      "Reporting, insight extraction, and handoffs"
    ]
  },
  {
    title: "Sales and Outreach",
    points: [
      "Lead routing and qualification",
      "CRM hygiene and follow-up",
      "Prospecting systems and research support"
    ]
  },
  {
    title: "Operations",
    points: [
      "Internal documentation and SOPs",
      "Recurring team updates and reporting",
      "Cross-functional requests and approvals"
    ]
  },
  {
    title: "AI Visibility",
    points: [
      "Content gaps around high-intent buyer questions",
      "Structured pages for AI tools and workflow terms",
      "Internal linking between insights, services, and tools"
    ]
  }
];

const faqItems = [
  {
    question: "What is an AI workflow audit?",
    answer:
      "It is a practical review of how work currently gets done, where it feels messy or repetitive, and which parts are actually worth improving with better systems, AI, or automation."
  },
  {
    question: "Who is this audit for?",
    answer:
      "It is best for brands, consultants, founders, and growth teams who are already experimenting with AI but want a clearer plan for what to standardize, automate, or improve next."
  },
  {
    question: "Do you recommend tools during the audit?",
    answer:
      "Yes, but only after the workflow is clear. The point is to match tools to the work instead of forcing the work to fit a trend."
  }
];

function AuditHeroArtwork() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(160deg,rgba(255,255,255,0.52),rgba(255,255,255,0.2))] p-5 shadow-[0_30px_90px_rgba(17,17,17,0.08)] backdrop-blur-xl sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.9),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(217,167,154,0.24),transparent_26%),radial-gradient(circle_at_74%_82%,rgba(28,34,40,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(28,34,40,0.034)_1px,transparent_1px),linear-gradient(90deg,rgba(28,34,40,0.024)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="workflow-float-soft pointer-events-none absolute -left-10 top-12 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.85),rgba(255,255,255,0))] blur-3xl" />
      <div className="workflow-float-soft-delayed pointer-events-none absolute -right-12 bottom-4 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(217,167,154,0.26),rgba(217,167,154,0))] blur-3xl" />

      <div className="relative min-h-[29rem] overflow-hidden rounded-[1.7rem] border border-white/50 bg-white/34 p-4 sm:min-h-[31rem] sm:p-5">
        <div className="absolute left-4 top-4 rounded-full border border-obsidian/10 bg-white/80 px-3 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-stone shadow-[0_10px_24px_rgba(17,17,17,0.04)]">
          Human judgment
        </div>
        <div className="absolute right-4 top-6 rounded-full border border-obsidian/10 bg-white/74 px-3 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-stone shadow-[0_10px_24px_rgba(17,17,17,0.04)]">
          AI systems
        </div>
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-obsidian/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(231,216,207,0.72))] px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-obsidian shadow-[0_16px_36px_rgba(17,17,17,0.06)]">
          Workflow design
        </div>
        <div className="absolute bottom-20 left-5 flex flex-wrap gap-2 sm:bottom-6 sm:left-6">
          {["clarity", "consistency", "speed"].map((word) => (
            <span
              key={word}
              className="rounded-full border border-white/65 bg-white/70 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-stone shadow-[0_8px_20px_rgba(17,17,17,0.03)]"
            >
              {word}
            </span>
          ))}
        </div>

        <svg
          viewBox="0 0 620 540"
          className="relative h-full w-full"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="audit-human-fill" x1="122" y1="76" x2="300" y2="420">
              <stop offset="0%" stopColor="rgba(240,223,216,0.96)" />
              <stop offset="100%" stopColor="rgba(233,215,206,0.48)" />
            </linearGradient>
            <linearGradient id="audit-core-fill" x1="265" y1="118" x2="356" y2="414">
              <stop offset="0%" stopColor="rgba(255,255,255,0.96)" />
              <stop offset="55%" stopColor="rgba(244,239,235,0.84)" />
              <stop offset="100%" stopColor="rgba(228,216,207,0.9)" />
            </linearGradient>
            <linearGradient id="audit-beam-stroke" x1="135" y1="170" x2="500" y2="170">
              <stop offset="0%" stopColor="rgba(217,167,154,0.48)" />
              <stop offset="52%" stopColor="rgba(28,34,40,0.22)" />
              <stop offset="100%" stopColor="rgba(28,34,40,0.3)" />
            </linearGradient>
            <radialGradient id="audit-machine-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(482 194) rotate(90) scale(118)">
              <stop offset="0%" stopColor="rgba(28,34,40,0.14)" />
              <stop offset="100%" stopColor="rgba(28,34,40,0)" />
            </radialGradient>
          </defs>

          <path
            className="workflow-line-motion"
            d="M150 174C202 171 232 205 278 230C322 255 365 255 405 236C448 215 472 178 492 149"
            stroke="url(#audit-beam-stroke)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="8 10"
          />
          <path
            className="workflow-line-motion"
            d="M168 330C222 355 264 372 312 375C364 378 408 361 455 324"
            stroke="rgba(28,34,40,0.14)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="7 9"
          />

          <g className="workflow-float-soft">
            <path
              d="M149 138C149 93 179 58 219 58C256 58 286 86 286 130C286 164 266 190 246 219C224 251 217 286 226 335C232 370 250 399 276 426C215 420 170 397 147 359C124 321 126 281 137 245C147 211 158 186 158 161C158 149 149 145 149 138Z"
              fill="url(#audit-human-fill)"
            />
            <path
              d="M223 84C188 95 171 126 173 160C176 196 199 218 210 244C222 273 224 313 209 354"
              stroke="rgba(28,34,40,0.34)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M173 160C188 150 203 146 220 147"
              stroke="rgba(28,34,40,0.18)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="227" cy="171" r="4.5" fill="rgba(28,34,40,0.42)" />
          </g>

          <g className="workflow-pulse-glow">
            <rect
              x="257"
              y="118"
              width="106"
              height="296"
              rx="34"
              fill="url(#audit-core-fill)"
              stroke="rgba(28,34,40,0.12)"
            />
            <rect
              x="279"
              y="154"
              width="62"
              height="16"
              rx="8"
              fill="rgba(255,255,255,0.96)"
            />
            <rect
              x="276"
              y="203"
              width="68"
              height="10"
              rx="5"
              fill="rgba(28,34,40,0.11)"
            />
            <rect
              x="288"
              y="227"
              width="44"
              height="10"
              rx="5"
              fill="rgba(217,167,154,0.4)"
            />
            <path
              d="M279 274H341"
              stroke="rgba(28,34,40,0.16)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M279 294H341"
              stroke="rgba(28,34,40,0.16)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M279 314H321"
              stroke="rgba(28,34,40,0.16)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <rect
              x="279"
              y="344"
              width="62"
              height="36"
              rx="18"
              fill="rgba(28,34,40,0.84)"
            />
            <circle cx="310" cy="362" r="6" fill="rgba(255,255,255,0.88)" />
          </g>

          <g className="workflow-float-soft-delayed">
            <circle cx="484" cy="194" r="118" fill="url(#audit-machine-glow)" />
            <circle
              cx="484"
              cy="194"
              r="96"
              stroke="rgba(28,34,40,0.18)"
              strokeWidth="1.5"
            />
            <circle
              cx="484"
              cy="194"
              r="66"
              stroke="rgba(28,34,40,0.15)"
              strokeWidth="1.5"
            />
            <circle
              cx="484"
              cy="194"
              r="34"
              stroke="rgba(28,34,40,0.18)"
              strokeWidth="1.5"
            />
            <path
              d="M420 194H548"
              stroke="rgba(28,34,40,0.12)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M484 130V258"
              stroke="rgba(28,34,40,0.12)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {[
              [484, 98],
              [484, 130],
              [452, 194],
              [516, 194],
              [438, 148],
              [530, 148],
              [438, 240],
              [530, 240],
              [484, 258]
            ].map(([cx, cy]) => (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="5.5"
                fill="rgba(28,34,40,0.78)"
              />
            ))}
            <circle cx="484" cy="194" r="8" fill="rgba(217,167,154,0.88)" />
          </g>

          <g opacity="0.65">
            <path
              d="M247 442C274 428 344 428 376 442"
              stroke="rgba(28,34,40,0.12)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M160 382C178 390 196 394 217 394"
              stroke="rgba(217,167,154,0.52)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M435 327C455 316 477 311 501 311"
              stroke="rgba(28,34,40,0.14)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export const metadata: Metadata = buildPageMetadata({
  title: "AI Workflow Audit and Consulting | ANDRA",
  description:
    "AI workflow audit and consulting for brands, consultants, and growth teams that want clearer systems, smarter tool choices, and better AI visibility.",
  pathname: "/ai-workflow-audit",
  keywords: [
    ...aiStrategyKeywords,
    "AI workflow audit",
    "AI workflow consultant",
    "AI workflow consulting",
    "AI automation consulting",
    "AI process audit"
  ]
});

export default function AiWorkflowAuditPage() {
  return (
    <main className="relative overflow-hidden bg-porcelain text-obsidian">
      <Script id="ai-workflow-audit-service-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "AI Workflow Audit",
          description:
            "AI workflow audit and consulting for brands, consultants, and growth teams that want clearer systems, smarter tool choices, and better AI visibility.",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: siteUrl
          },
          areaServed: "Global",
          serviceType: "AI workflow audit and consulting",
          url: `${siteUrl}/ai-workflow-audit`
        })}
      </Script>
      <Script id="ai-workflow-audit-faq-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        })}
      </Script>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-hero-radial opacity-90" />
      <div className="pointer-events-none absolute right-[-4rem] top-[8rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(217,167,154,0.22),transparent_70%)] blur-3xl" />

      <section className="hero-fade relative z-10 mx-auto max-w-7xl px-6 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12 lg:pb-20 lg:pt-28">
        <div>
          <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
            AI Workflow Audit
          </p>
          <h1 className="mt-6 max-w-[65rem] font-serif text-[3.3rem] leading-[1.04] text-obsidian sm:max-w-[72rem] sm:text-[4.2rem] lg:max-w-[78rem] lg:text-[5rem]">
            If your AI setup feels messy, this shows you what to fix first.
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-end lg:gap-14">
            <div className="max-w-xl">
              <p className="max-w-2xl text-base leading-8 text-stone sm:text-lg sm:leading-9">
                This page is about one simple thing: helping you figure out which workflows
                should be cleaned up, which tools are actually worth using, and what should
                happen next if your business wants a smarter AI setup.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={bookIntroCallUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-track-click="contact_click"
                  data-track-category="ai_workflow_audit"
                  data-track-label="hero_calendly"
                  data-track-destination={bookIntroCallUrl}
                  className="inline-flex min-h-14 items-center justify-center rounded-[0.72rem] bg-ink px-7 py-4 text-sm uppercase tracking-[0.18em] text-porcelain transition duration-300 hover:scale-[1.02] hover:bg-obsidian"
                >
                  Book an Intro Call
                </a>
                <Link
                  href="/recommended-tools"
                  data-track-click="navigation_click"
                  data-track-category="ai_workflow_audit"
                  data-track-label="hero_tools"
                  data-track-destination="/recommended-tools"
                  className="inline-flex min-h-14 items-center justify-center rounded-[0.72rem] border border-obsidian/18 bg-white/44 px-7 py-4 text-sm uppercase tracking-[0.18em] text-obsidian transition duration-300 hover:scale-[1.02] hover:border-obsidian/36 hover:bg-white"
                >
                  Explore AI Tools
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-3 shadow-[0_30px_90px_rgba(17,17,17,0.08)] backdrop-blur-xl">
              <Image
                src="/ai-workflow-audit/workflow-hero.jpg"
                alt="Illustration of a human strategist arranging AI workflow systems"
                width={1680}
                height={945}
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="aspect-[16/9] w-full rounded-[1.55rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12 lg:pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          {plainEnglishPoints.map((point) => (
            <div
              key={point}
              className="rounded-[1.3rem] border border-white/55 bg-white/42 px-5 py-5 shadow-[0_18px_44px_rgba(17,17,17,0.04)] backdrop-blur-sm"
            >
              <p className="text-base leading-8 text-obsidian sm:text-lg">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12 lg:pb-16">
        <div className="grid gap-6 rounded-[1.8rem] border border-white/55 bg-white/34 px-6 py-7 shadow-[0_20px_60px_rgba(17,17,17,0.05)] backdrop-blur-sm lg:grid-cols-[1.1fr_1fr_1fr] lg:px-8">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
              The point
            </p>
            <p className="mt-3 text-base leading-8 text-obsidian sm:text-lg">
              To help you stop guessing, stop overbuying tools, and understand what to standardize before you automate.
            </p>
          </div>
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
              Best for
            </p>
            <p className="mt-3 text-base leading-8 text-obsidian sm:text-lg">
              Teams already experimenting with AI but still working in a scattered or inconsistent way.
            </p>
          </div>
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
              You leave with
            </p>
            <p className="mt-3 text-base leading-8 text-obsidian sm:text-lg">
              Better tool decisions, clearer process design, and a more obvious next step.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              How It Works
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
              A clearer way to understand the audit.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-8 text-stone sm:text-lg">
              This is usually easier to understand as a sequence than as a block of copy.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {auditSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-[1.5rem] border border-white/55 bg-white/34 px-5 py-6 shadow-[0_18px_50px_rgba(17,17,17,0.04)] backdrop-blur-sm sm:px-6"
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-stone">
                  {step.number}
                </p>
                <h3 className="mt-4 font-serif text-[1.7rem] leading-tight text-obsidian">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              What We Look At
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
              The types of workflows this usually helps.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {workflowAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-[1.5rem] border border-white/55 bg-white/34 px-5 py-6 shadow-[0_18px_50px_rgba(17,17,17,0.04)] backdrop-blur-sm sm:px-6"
              >
                <h3 className="font-serif text-[1.85rem] leading-tight text-obsidian">
                  {area.title}
                </h3>
                <ul className="mt-5 grid gap-3">
                  {area.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-7 text-stone sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blush" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              What You Get
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
              The actual outputs.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {auditDeliverables.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-white/55 bg-white/34 px-5 py-6 shadow-[0_18px_50px_rgba(17,17,17,0.04)] backdrop-blur-sm sm:px-6"
              >
                <h3 className="font-serif text-[1.85rem] leading-tight text-obsidian">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="rounded-[1.8rem] border border-white/55 bg-white/36 px-6 py-7 shadow-[0_20px_60px_rgba(17,17,17,0.05)] backdrop-blur-sm sm:px-8 sm:py-8">
          <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
            Example Before / After
          </p>
          <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
            <div className="rounded-[1.25rem] border border-obsidian/8 bg-white/60 px-5 py-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-stone">
                Before
              </p>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-stone sm:text-base">
                <li>Too many tools doing overlapping things</li>
                <li>No clear workflow from idea to output</li>
                <li>Manual follow-up and inconsistent execution</li>
                <li>No obvious priority for what to improve first</li>
              </ul>
            </div>

            <div className="hidden items-center justify-center lg:flex">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-obsidian/10 bg-white/70 text-xl text-obsidian">
                →
              </div>
            </div>

            <div className="rounded-[1.25rem] border border-obsidian/8 bg-white/60 px-5 py-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-stone">
                After
              </p>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-stone sm:text-base">
                <li>A clearer workflow map</li>
                <li>A shorter, more logical AI stack</li>
                <li>Better judgment about what to automate versus keep human</li>
                <li>A practical roadmap instead of more experimentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="rounded-[1.8rem] border border-white/55 bg-white/36 px-6 py-7 shadow-[0_20px_60px_rgba(17,17,17,0.05)] backdrop-blur-sm sm:px-8 sm:py-8">
          <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
            Useful Reading
          </p>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <Link
              href="/insights/best-ai-tools-for-consultants-growth-teams"
              data-track-click="navigation_click"
              data-track-category="ai_workflow_audit"
              data-track-label="useful_reading_ai_tools_article"
              data-track-destination="/insights/best-ai-tools-for-consultants-growth-teams"
              className="rounded-[1.2rem] border border-obsidian/8 bg-white/60 px-5 py-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(17,17,17,0.05)]"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-stone">
                Next Read
              </p>
              <h3 className="mt-3 font-serif text-[1.55rem] leading-tight text-obsidian">
                Best AI Tools for Consultants and Growth Teams
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone">
                A practical stack for research, execution, marketing, and AI visibility.
              </p>
            </Link>
            <Link
              href="/recommended-tools"
              data-track-click="navigation_click"
              data-track-category="ai_workflow_audit"
              data-track-label="useful_reading_tools"
              data-track-destination="/recommended-tools"
              className="rounded-[1.2rem] border border-obsidian/8 bg-white/60 px-5 py-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(17,17,17,0.05)]"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-stone">
                Tools
              </p>
              <h3 className="mt-3 font-serif text-[1.55rem] leading-tight text-obsidian">
                Recommended AI Tools
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone">
                Explore the tools worth using for thinking, content, automation, and outreach.
              </p>
            </Link>
            <Link
              href="/insights"
              data-track-click="navigation_click"
              data-track-category="ai_workflow_audit"
              data-track-label="useful_reading_insights"
              data-track-destination="/insights"
              className="rounded-[1.2rem] border border-obsidian/8 bg-white/60 px-5 py-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(17,17,17,0.05)]"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-stone">
                Insights
              </p>
              <h3 className="mt-3 font-serif text-[1.55rem] leading-tight text-obsidian">
                AI Workflow Insights
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone">
                Read the broader content library on AI workflows, operations, and growth systems.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 rounded-[1.9rem] border border-white/55 bg-white/36 px-6 py-7 shadow-[0_20px_60px_rgba(17,17,17,0.05)] backdrop-blur-sm lg:grid-cols-[0.76fr_1.24fr] lg:gap-16 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              Request the Audit
            </p>
            <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
              Tell me what feels messy.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-stone sm:text-lg">
              If the page feels relevant, book a call or send a structured inquiry.
              If it still feels unclear, that is useful too. We can use the call to define the problem together.
            </p>
          </div>

          <InquiryForm defaultFocus="AI Workflow Audit" sourceLabel="AI Workflow Audit Page" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-4">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="rounded-[1.35rem] border border-white/55 bg-white/34 px-5 py-5 shadow-[0_16px_40px_rgba(17,17,17,0.04)] backdrop-blur-sm sm:px-6"
            >
              <h2 className="font-serif text-[1.9rem] leading-tight text-obsidian">
                {item.question}
              </h2>
              <p className="mt-3 text-base leading-8 text-stone sm:text-lg">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-6 sm:px-8 lg:px-12 lg:pb-24">
        <div className="rounded-[1.9rem] bg-[linear-gradient(160deg,rgba(28,34,40,0.94),rgba(17,17,17,0.88))] px-6 py-8 text-white shadow-[0_28px_80px_rgba(17,17,17,0.16)] sm:px-8 sm:py-9">
          <p className="text-xs uppercase tracking-editorial text-white/60 sm:text-sm">
            Ready to simplify the stack?
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-[2.3rem] leading-[1.08] text-white sm:text-[2.9rem]">
            Let&apos;s figure out what to fix first.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
            Most of the value comes from clarifying a few key workflows, making smarter tool decisions,
            and creating a cleaner plan instead of adding more complexity.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={bookIntroCallUrl}
              target="_blank"
              rel="noreferrer"
              data-track-click="contact_click"
              data-track-category="ai_workflow_audit"
              data-track-label="footer_calendly"
              data-track-destination={bookIntroCallUrl}
              className="inline-flex min-h-12 items-center justify-center rounded-[0.72rem] bg-white px-6 py-3 text-sm uppercase tracking-[0.18em] text-obsidian transition duration-300 hover:scale-[1.02]"
            >
              Book an Intro Call
            </a>
            <Link
              href="/recommended-tools"
              data-track-click="navigation_click"
              data-track-category="ai_workflow_audit"
              data-track-label="footer_tools"
              data-track-destination="/recommended-tools"
              className="inline-flex min-h-12 items-center justify-center rounded-[0.72rem] border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.18em] text-white transition duration-300 hover:scale-[1.02] hover:border-white/40"
            >
              Browse Tools
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
