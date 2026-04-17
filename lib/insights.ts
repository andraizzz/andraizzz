export type InsightFaq = {
  question: string;
  answer: string;
};

export type InsightTable = {
  title: string;
  headers: [string, string];
  rows: Array<[string, string]>;
};

export type InsightSection =
  | {
      type: "paragraph";
      paragraphs: string[];
    }
  | {
      type: "list";
      intro?: string;
      items: string[];
    }
  | {
      type: "table";
      tables: InsightTable[];
    }
  | {
      type: "faq";
      items: InsightFaq[];
    }
  | {
      type: "cta";
      paragraphs: string[];
    };

export type InsightSubsection = {
  title: string;
  id: string;
  blocks: InsightSection[];
};

export type InsightSectionGroup = {
  title: string;
  id: string;
  blocks?: InsightSection[];
  subsections?: InsightSubsection[];
};

export type InsightPost = {
  title: string;
  slug: string;
  metaDescription: string;
  eyebrow: string;
  dateLabel: string;
  readTime: string;
  imageSrc: string;
  imageAlt: string;
  summary: string;
  featuredStat: string;
  featuredLabel: string;
  sections: InsightSectionGroup[];
};

export const insightPosts: InsightPost[] = [
  {
    title: "How to Implement AI in Business Operations: The Tasks to Systems to Agents Framework",
    slug: "how-to-implement-ai-business-operations-tasks-systems-agents",
    metaDescription:
      "A practical guide on how to implement AI in business operations using a structured framework that moves from tasks to systems to agents.",
    eyebrow: "Enterprise AI Operations",
    dateLabel: "April 2026",
    readTime: "9 min read",
    imageSrc: "/andra-hero.jpg",
    imageAlt: "Editorial portrait treatment for ANDRA insights",
    summary:
      "A practical framework for turning scattered AI experiments into structured operational systems that enterprise teams can trust, measure, and scale.",
    featuredStat: "3 layers",
    featuredLabel: "Tasks, systems, and agents",
    sections: [
      {
        title: "Why AI Business Operations Initiatives Fail at the Operations Layer",
        id: "why-ai-business-operations-initiatives-fail",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "How to implement AI in business operations is often treated as a tooling question.",
              "Teams test platforms like ChatGPT, experiment with prompts, and encourage internal exploration. This creates activity, but it rarely leads to scalable results.",
              "Research from McKinsey shows that many organizations remain in early or fragmented stages of AI adoption, with limited integration across core workflows.",
              "Access to AI is no longer the limiting factor. The structure of work inside the organization determines whether AI creates meaningful value.",
              "When processes are unclear or inconsistent, AI amplifies fragmentation instead of improving efficiency. Clear operations are the prerequisite for effective adoption."
            ]
          }
        ]
      },
      {
        title: "The Tasks to Systems to Agents AI Implementation Framework",
        id: "tasks-systems-agents-ai-implementation-framework",
        subsections: [
          {
            title: "Tasks: Define Repetitive Business Tasks Before Automating AI",
            id: "tasks-define-repetitive-business-tasks-before-automating-ai",
            blocks: [
              {
                type: "paragraph",
                paragraphs: [
                  "Tasks are the individual actions performed across the organization."
                ]
              },
              {
                type: "list",
                intro: "Examples include:",
                items: [
                  "Pulling reports",
                  "Updating CRM records",
                  "Reviewing campaigns",
                  "Approving budgets"
                ]
              },
              {
                type: "paragraph",
                paragraphs: [
                  "In many companies, these tasks exist as habits rather than defined steps. Different people complete them in different ways, which introduces variability.",
                  "Without clarity at the task level, there is no stable foundation for automation."
                ]
              }
            ]
          },
          {
            title: "Systems: Turn Business Tasks Into Repeatable AI Workflows",
            id: "systems-turn-business-tasks-into-repeatable-ai-workflows",
            blocks: [
              {
                type: "paragraph",
                paragraphs: [
                  "Systems organize tasks into repeatable workflows."
                ]
              },
              {
                type: "list",
                intro: "A system defines:",
                items: [
                  "Trigger conditions",
                  "Required inputs",
                  "Decision points",
                  "Expected outputs"
                ]
              },
              {
                type: "paragraph",
                paragraphs: [
                  "At this stage, work becomes structured and predictable. It can be measured, improved, and documented.",
                  "Most organizations treat documentation as the end goal. In practice, documentation only becomes valuable when it leads to consistent execution.",
                  "Systems create that consistency."
                ]
              }
            ]
          },
          {
            title: "Agents: Deploy AI Agents Inside Structured Business Systems",
            id: "agents-deploy-ai-agents-inside-structured-business-systems",
            blocks: [
              {
                type: "paragraph",
                paragraphs: [
                  "Agents execute or support parts of a system.",
                  "Once workflows are clearly defined, it becomes possible to assign execution to AI in a controlled way."
                ]
              },
              {
                type: "list",
                intro: "Examples include:",
                items: [
                  "Generating reports from structured data",
                  "Monitoring performance and flagging anomalies",
                  "Drafting outputs based on predefined rules"
                ]
              },
              {
                type: "paragraph",
                paragraphs: [
                  "At this level, AI integrates directly into operations instead of sitting outside of them."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Why AI Implementation in Business Operations Breaks Down",
        id: "why-ai-implementation-in-business-operations-breaks-down",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "Many organizations attempt to move directly from tasks to agents without structuring systems first."
            ]
          },
          {
            type: "list",
            intro: "The result is predictable:",
            items: [
              "Outputs vary in quality",
              "Workflows become difficult to manage",
              "Teams lose confidence in AI-generated work"
            ]
          },
          {
            type: "paragraph",
            paragraphs: [
              "Gartner research consistently shows that automation initiatives fail when underlying processes are not clearly defined or standardized.",
              "Without systems, AI operates without clear constraints. This leads to inconsistency and reduced adoption.",
              "The missing layer is almost always process design."
            ]
          }
        ]
      },
      {
        title: "How AI Changes Roles Inside AI-Driven Organizations",
        id: "how-ai-changes-roles-inside-ai-driven-organizations",
        subsections: [
          {
            title: "Employees: Shift From Task Execution to Judgment and Exception Handling",
            id: "employees-shift-from-task-execution-to-judgment-and-exception-handling",
            blocks: [
              {
                type: "paragraph",
                paragraphs: [
                  "AI adoption changes how work is performed across the organization. Roles shift toward higher-leverage activities.",
                  "Employees contribute context, judgment, and exception handling."
                ]
              },
              {
                type: "list",
                intro: "Their focus moves toward:",
                items: [
                  "Improving inputs",
                  "Handling edge cases",
                  "Interpreting outputs"
                ]
              },
              {
                type: "paragraph",
                paragraphs: ["Execution-heavy tasks decrease."]
              }
            ]
          },
          {
            title: "Middle Management: Own AI Workflow Design and Oversight",
            id: "middle-management-own-ai-workflow-design-and-oversight",
            blocks: [
              {
                type: "paragraph",
                paragraphs: [
                  "Middle managers become responsible for workflow design and oversight."
                ]
              },
              {
                type: "list",
                intro: "Their role includes:",
                items: [
                  "Structuring systems",
                  "Coordinating multiple agents",
                  "Reviewing outputs at a higher level"
                ]
              },
              {
                type: "paragraph",
                paragraphs: [
                  "They operate at the intersection of business logic and execution."
                ]
              }
            ]
          },
          {
            title: "Leadership: Prioritize Where AI Should Transform Operations",
            id: "leadership-prioritize-where-ai-should-transform-operations",
            blocks: [
              {
                type: "paragraph",
                paragraphs: [
                  "Leadership defines which parts of the organization should be systemized."
                ]
              },
              {
                type: "list",
                intro: "This includes:",
                items: [
                  "Identifying inefficiencies",
                  "Prioritizing transformation areas",
                  "Ensuring alignment across teams"
                ]
              },
              {
                type: "paragraph",
                paragraphs: [
                  "Strategic clarity determines where AI creates the most impact."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Examples of AI in Business Operations Across Marketing, Sales Operations, and Finance",
        id: "examples-of-ai-in-business-operations-across-departments",
        blocks: [
          {
            type: "table",
            tables: [
              {
                title: "Marketing Operations",
                headers: ["Before", "After"],
                rows: [
                  ["Campaign setup handled manually", "Campaign variations generated automatically"],
                  ["Reports built periodically", "Reporting updates continuously"],
                  ["Performance reviewed weekly", "Performance monitored in real time"],
                  ["Insights fragmented across team", "Insights centralized and structured"]
                ]
              },
              {
                title: "Sales Operations",
                headers: ["Before", "After"],
                rows: [
                  ["Leads reviewed manually", "Leads qualified automatically"],
                  ["Follow-ups inconsistent", "Follow-ups triggered systematically"],
                  ["CRM updates delayed", "CRM updated continuously"],
                  ["Pipeline visibility limited", "Pipeline visibility always current"]
                ]
              },
              {
                title: "Finance Operations",
                headers: ["Before", "After"],
                rows: [
                  ["Data pulled from multiple sources", "Data aggregated automatically"],
                  ["Reports built manually", "Reports generated continuously"],
                  ["Errors identified late", "Errors flagged early"],
                  ["Forecasting reactive", "Forecasting becomes dynamic"]
                ]
              }
            ]
          }
        ]
      },
      {
        title: "A Simpler Framework for AI in Business Operations",
        id: "a-simpler-framework-for-ai-in-business-operations",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "Implementing AI in business operations is fundamentally an exercise in operational design."
            ]
          },
          {
            type: "list",
            intro: "The focus shifts to:",
            items: [
              "How work flows",
              "Where decisions are made",
              "Which steps require human judgment",
              "Which steps can be executed programmatically"
            ]
          },
          {
            type: "paragraph",
            paragraphs: [
              "AI becomes effective when it operates within clearly defined systems."
            ]
          }
        ]
      },
      {
        title: "The Future of AI-Driven Business Operations",
        id: "the-future-of-ai-driven-business-operations",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "Organizations are beginning to separate into two groups:"
            ]
          },
          {
            type: "list",
            items: [
              "Those experimenting with AI tools",
              "Those structuring operations for AI execution"
            ]
          },
          {
            type: "paragraph",
            paragraphs: ["The second group builds systems that scale."]
          },
          {
            type: "list",
            intro: "As systems improve:",
            items: [
              "Output increases",
              "Consistency improves",
              "Capacity expands"
            ]
          },
          {
            type: "paragraph",
            paragraphs: [
              "This shift is already visible in how large technology companies like Microsoft are embedding AI directly into everyday workflows, moving from standalone tools toward integrated operational layers."
            ]
          }
        ]
      },
      {
        title: "Frequently Asked Questions About Implementing AI in Business Operations",
        id: "frequently-asked-questions-about-implementing-ai-in-business-operations",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "What does it mean to implement AI in business operations?",
                answer:
                  "It means integrating AI into structured workflows so tasks can be executed, monitored, and optimized consistently across the organization."
              },
              {
                question: "Why do AI projects fail in enterprises?",
                answer:
                  "They fail due to unclear processes, lack of system design, and inconsistent execution, which leads to poor outputs and low trust."
              },
              {
                question: "What are AI agents in a business context?",
                answer:
                  "Agents are systems or programs that execute specific tasks within a defined workflow, often replacing or supporting manual work."
              }
            ]
          }
        ]
      },
      {
        title: "Apply the Tasks to Systems to Agents Framework in Your Organization",
        id: "apply-the-tasks-to-systems-to-agents-framework-in-your-organization",
        blocks: [
          {
            type: "cta",
            paragraphs: [
              "If you're evaluating how to implement AI in business operations, the starting point is understanding your processes at a detailed level.",
              "From there, systems can be structured and selectively transformed into agent-driven workflows.",
              "If that is something you want to explore, you can book a call or reach out directly."
            ]
          }
        ]
      }
    ]
  }
];

export function getInsightPost(slug: string) {
  return insightPosts.find((post) => post.slug === slug);
}
