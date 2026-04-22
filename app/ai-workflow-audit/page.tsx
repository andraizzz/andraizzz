import type { Metadata } from "next";
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
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              AI Workflow Audit
            </p>
            <h1 className="mt-6 font-serif text-[3.2rem] leading-[1.04] text-obsidian sm:text-[4.2rem] lg:text-[5rem]">
              If your AI setup feels messy, this shows you what to fix first.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-stone sm:text-lg sm:leading-9">
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

          <div className="rounded-[1.8rem] border border-white/55 bg-white/38 p-6 shadow-[0_24px_70px_rgba(17,17,17,0.06)] backdrop-blur-sm sm:p-8">
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              In plain English
            </p>
            <div className="mt-6 grid gap-4">
              {plainEnglishPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.2rem] border border-obsidian/8 bg-white/55 px-5 py-5"
                >
                  <p className="text-base leading-8 text-obsidian sm:text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
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
