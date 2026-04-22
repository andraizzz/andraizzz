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
    title: "Workflow Map",
    description:
      "A clear view of where work actually moves, stalls, loops, or relies on manual follow-up."
  },
  {
    title: "AI Opportunities",
    description:
      "A shortlist of the best candidates for automation, copilots, or agent support based on real leverage."
  },
  {
    title: "Stack Recommendation",
    description:
      "Tool guidance grounded in your workflow, not generic hype or a one-size-fits-all stack."
  },
  {
    title: "Execution Roadmap",
    description:
      "A practical sequence of quick wins, medium-term system work, and visibility improvements."
  }
];

const workflowAreas = [
  {
    title: "Marketing Workflows",
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
      "An AI workflow audit is a practical review of how work currently gets done across a business, where friction appears, and where AI or automation can improve speed, consistency, and visibility without creating more chaos."
  },
  {
    question: "Who is this audit for?",
    answer:
      "It is best for brands, consultants, founders, and growth teams who are already using AI tools in scattered ways and want a sharper system for deciding what to standardize, automate, or improve next."
  },
  {
    question: "Do you recommend tools during the audit?",
    answer:
      "Yes. The audit includes tool recommendations, but only after the workflow and bottlenecks are clear. The goal is to fit tools to the work instead of forcing the work to fit a trend."
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
              Find the workflows worth fixing before you buy another AI tool.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-stone sm:text-lg sm:leading-9">
              This is a strategy-first review of how your team actually works:
              where time gets lost, where AI can help, and which tools are worth
              introducing for execution, visibility, and growth.
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
              What the audit covers
            </p>
            <div className="mt-6 grid gap-4">
              {auditDeliverables.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.2rem] border border-obsidian/8 bg-white/55 px-5 py-5"
                >
                  <h2 className="font-serif text-2xl text-obsidian">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-stone sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12 lg:pb-16">
        <div className="grid gap-6 rounded-[1.8rem] border border-white/55 bg-white/34 px-6 py-7 shadow-[0_20px_60px_rgba(17,17,17,0.05)] backdrop-blur-sm lg:grid-cols-3 lg:px-8">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
              Best for
            </p>
            <p className="mt-3 text-base leading-8 text-obsidian sm:text-lg">
              Brands and teams already experimenting with AI but lacking a clean operating model.
            </p>
          </div>
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
              Outcome
            </p>
            <p className="mt-3 text-base leading-8 text-obsidian sm:text-lg">
              Better tool decisions, clearer process design, and faster progress toward real workflow gains.
            </p>
          </div>
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-stone">
              Lens
            </p>
            <p className="mt-3 text-base leading-8 text-obsidian sm:text-lg">
              Strategy, systems, AI visibility, and execution quality instead of scattered experimentation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              Where We Look
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
              The workflows that usually hide the biggest leverage.
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
              Tell me where the workflow feels messy.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-stone sm:text-lg">
              If you already know the friction point, book a call or use the form to send a structured inquiry.
              Email and LinkedIn still work too.
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
            Let&apos;s identify the workflows that should actually change first.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
            The fastest gains usually come from fixing a handful of repetitive workflows, choosing a tighter stack,
            and building pages that speak directly to how buyers now search in Google and AI tools.
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
