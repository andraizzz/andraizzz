export type InsightFaq = {
  question: string;
  answer: string;
};

export type InsightVisualStage = {
  number: string;
  title: string;
  subtitle: string;
  detail: string;
};

export type InsightVisualConfig = {
  kicker: string;
  headline: string[];
  summary: string;
  stages: InsightVisualStage[];
  footerLabel: string;
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
  visual: InsightVisualConfig;
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
    visual: {
      kicker: "The Framework",
      headline: ["Tasks.", "Systems.", "Agents."],
      summary:
        "A practical model for moving from scattered operational actions into structured systems and then into AI-supported execution.",
      footerLabel: "Tasks, systems, and agents",
      stages: [
        {
          number: "01",
          title: "Tasks",
          subtitle: "Manual actions",
          detail: "Define repeatable steps before automating."
        },
        {
          number: "02",
          title: "Systems",
          subtitle: "Structured workflows",
          detail: "Add triggers, logic, and expected outputs."
        },
        {
          number: "03",
          title: "Agents",
          subtitle: "AI execution",
          detail: "Deploy AI inside a clearly defined system."
        }
      ]
    },
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
  },
  {
    title: "Why Most AI Projects Fail in Enterprises (And What to Fix First)",
    slug: "why-ai-projects-fail-enterprises",
    metaDescription:
      "Discover why most AI projects fail in enterprises and how to fix the underlying process issues before scaling automation.",
    eyebrow: "Enterprise AI Strategy",
    dateLabel: "April 2026",
    readTime: "6 min read",
    imageSrc: "/andra-hero.jpg",
    imageAlt: "Framework visual for enterprise AI strategy insights",
    summary:
      "Why enterprise AI projects stall, what usually breaks first, and how to fix the operational structure before scaling automation.",
    featuredStat: "4 shifts",
    featuredLabel: "Structure before scale",
    visual: {
      kicker: "Failure Pattern",
      headline: ["Projects fail.", "Processes break.", "Trust drops."],
      summary:
        "Most enterprise AI initiatives fail when automation is layered onto unclear workflows instead of stable operational systems.",
      footerLabel: "Fix the operating structure first",
      stages: [
        {
          number: "01",
          title: "Pilots",
          subtitle: "Early traction",
          detail: "Teams test tools and generate initial interest."
        },
        {
          number: "02",
          title: "Friction",
          subtitle: "Process gaps",
          detail: "Unclear workflows create inconsistency across teams."
        },
        {
          number: "03",
          title: "Recovery",
          subtitle: "Operational redesign",
          detail: "Map workflows and rebuild structure before scaling."
        }
      ]
    },
    sections: [
      {
        title: "The Pattern Behind Failed AI Projects",
        id: "the-pattern-behind-failed-ai-projects",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "Many enterprises invest heavily in AI initiatives but struggle to generate meaningful results.",
              "Teams adopt tools, run pilots, and experiment across departments. Initial results may look promising, but momentum stalls before anything scales.",
              "This pattern is consistent across industries."
            ]
          }
        ]
      },
      {
        title: "The Real Root Cause",
        id: "the-real-root-cause",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "The failure is rarely caused by the technology itself.",
              "The issue sits within the structure of the business. Processes are unclear, inconsistent, and undocumented.",
              "AI depends on structured workflows. Without them, outputs vary and systems break down."
            ]
          }
        ]
      },
      {
        title: "Where Companies Go Wrong",
        id: "where-companies-go-wrong",
        blocks: [
          {
            type: "paragraph",
            paragraphs: ["Common mistakes include:"]
          },
          {
            type: "list",
            items: [
              "Implementing AI before defining processes",
              "Allowing teams to operate in silos",
              "Focusing on tools instead of workflows",
              "Expecting immediate transformation without operational redesign"
            ]
          },
          {
            type: "paragraph",
            paragraphs: [
              "These issues create instability and reduce trust in AI outputs."
            ]
          }
        ]
      },
      {
        title: "What Successful Companies Do Differently",
        id: "what-successful-companies-do-differently",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "Organizations that succeed with AI focus on structure first.",
              "They:"
            ]
          },
          {
            type: "list",
            items: [
              "Map workflows clearly",
              "Define inputs and outputs",
              "Standardize execution",
              "Introduce automation gradually"
            ]
          },
          {
            type: "paragraph",
            paragraphs: [
              "This aligns closely with a structured approach like the [Tasks to Systems to Agents framework](/insights/how-to-implement-ai-business-operations-tasks-systems-agents)."
            ]
          }
        ]
      },
      {
        title: "How to Fix It",
        id: "how-to-fix-it",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "Fixing failed AI initiatives requires stepping back.",
              "Focus on:"
            ]
          },
          {
            type: "list",
            items: [
              "Understanding current workflows",
              "Identifying inefficiencies",
              "Structuring repeatable systems",
              "Introducing AI at the right layer"
            ]
          },
          {
            type: "paragraph",
            paragraphs: [
              "This creates a stable foundation for automation."
            ]
          }
        ]
      },
      {
        title: "Frequently Asked Questions",
        id: "frequently-asked-questions",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Why do AI projects fail in enterprises?",
                answer:
                  "They fail due to unclear processes and lack of structured systems."
              },
              {
                question: "Can failed AI projects be recovered?",
                answer:
                  "Yes, by rebuilding the operational foundation and reintroducing AI strategically."
              },
              {
                question: "What is the first step to fix AI implementation?",
                answer:
                  "Mapping workflows and defining clear processes."
              }
            ]
          }
        ]
      },
      {
        title: "Next Step",
        id: "next-step",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "If your AI initiatives are not scaling, the issue is likely operational rather than technical.",
              "Start by reviewing how work is structured across your organization."
            ]
          }
        ]
      }
    ]
  },
  {
    title: "How to Implement AI in Business Operations: A Practical Step-by-Step Guide",
    slug: "ai-implementation-business-step-by-step",
    metaDescription:
      "A step-by-step guide to implementing AI in business operations by structuring workflows and introducing automation strategically.",
    eyebrow: "AI Implementation Guide",
    dateLabel: "April 2026",
    readTime: "7 min read",
    imageSrc: "/andra-hero.jpg",
    imageAlt: "Framework visual for step-by-step AI implementation guide",
    summary:
      "A practical step-by-step approach to implementing AI in business operations by mapping workflows, structuring systems, and introducing automation gradually.",
    featuredStat: "5 steps",
    featuredLabel: "Map, structure, introduce, refine",
    visual: {
      kicker: "Implementation Path",
      headline: ["Map.", "Structure.", "Introduce."],
      summary:
        "A step-by-step operating model for introducing AI into business workflows without creating operational instability.",
      footerLabel: "Five-step implementation path",
      stages: [
        {
          number: "01",
          title: "Map",
          subtitle: "Current workflows",
          detail: "Document how work moves today."
        },
        {
          number: "02",
          title: "Structure",
          subtitle: "Systems layer",
          detail: "Define process logic, decision points, and dependencies."
        },
        {
          number: "03",
          title: "Introduce",
          subtitle: "AI gradually",
          detail: "Automate only where the workflow is stable."
        }
      ]
    },
    sections: [
      {
        title: "Step 1: Map Your Current Workflows",
        id: "step-1-map-your-current-workflows",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "Document how work is currently performed across teams.",
              "Focus on clarity:"
            ]
          },
          {
            type: "list",
            items: [
              "What triggers tasks",
              "What inputs are used",
              "What outputs are expected"
            ]
          }
        ]
      },
      {
        title: "Step 2: Identify Repetitive Tasks",
        id: "step-2-identify-repetitive-tasks",
        blocks: [
          {
            type: "paragraph",
            paragraphs: ["Look for tasks that:"]
          },
          {
            type: "list",
            items: [
              "Occur frequently",
              "Follow predictable patterns",
              "Require minimal judgment"
            ]
          },
          {
            type: "paragraph",
            paragraphs: [
              "These are strong candidates for automation."
            ]
          }
        ]
      },
      {
        title: "Step 3: Structure Systems",
        id: "step-3-structure-systems",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "Group tasks into workflows.",
              "Define:"
            ]
          },
          {
            type: "list",
            items: [
              "Process steps",
              "Decision points",
              "Dependencies"
            ]
          },
          {
            type: "paragraph",
            paragraphs: [
              "This aligns with the “systems” layer of the [Tasks to Systems to Agents framework](/insights/how-to-implement-ai-business-operations-tasks-systems-agents)."
            ]
          }
        ]
      },
      {
        title: "Step 4: Introduce AI Gradually",
        id: "step-4-introduce-ai-gradually",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "Introduce AI where it adds value.",
              "Examples:"
            ]
          },
          {
            type: "list",
            items: [
              "Automating reports",
              "Monitoring performance",
              "Generating drafts"
            ]
          },
          {
            type: "paragraph",
            paragraphs: ["Avoid automating everything at once."]
          }
        ]
      },
      {
        title: "Step 5: Monitor and Improve",
        id: "step-5-monitor-and-improve",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "Track performance continuously.",
              "Refine:"
            ]
          },
          {
            type: "list",
            items: [
              "Inputs",
              "Outputs",
              "System design"
            ]
          },
          {
            type: "paragraph",
            paragraphs: ["AI systems improve through iteration."]
          }
        ]
      },
      {
        title: "Frequently Asked Questions",
        id: "frequently-asked-questions",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "How long does AI implementation take?",
                answer:
                  "It depends on process complexity, but initial improvements can happen quickly with structured workflows."
              },
              {
                question: "What should be automated first?",
                answer: "Repetitive, rule-based tasks."
              },
              {
                question: "Do you need technical teams?",
                answer:
                  "Not always. Many improvements start with process clarity."
              }
            ]
          }
        ]
      },
      {
        title: "Next Step",
        id: "next-step",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "Effective AI implementation begins with understanding your operations."
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Before You Automate Anything, Fix Your Processes",
    slug: "fix-processes-before-ai-automation",
    metaDescription:
      "Learn why fixing your processes is essential before implementing AI and automation in your business operations.",
    eyebrow: "Process Design",
    dateLabel: "April 2026",
    readTime: "5 min read",
    imageSrc: "/andra-hero.jpg",
    imageAlt: "Framework visual for process design and automation readiness",
    summary:
      "Why process clarity has to come before automation, and how stronger workflows create the foundation for reliable AI adoption.",
    featuredStat: "1 rule",
    featuredLabel: "Fix processes before automation",
    visual: {
      kicker: "Foundations First",
      headline: ["Fix.", "Then automate.", "Then scale."],
      summary:
        "Automation only works when the underlying process is consistent enough to be repeated, measured, and trusted.",
      footerLabel: "Process clarity before automation",
      stages: [
        {
          number: "01",
          title: "Map",
          subtitle: "Visible process",
          detail: "Make each step of the workflow explicit."
        },
        {
          number: "02",
          title: "Standardize",
          subtitle: "Consistent execution",
          detail: "Align inputs, handoffs, and expected outcomes."
        },
        {
          number: "03",
          title: "Automate",
          subtitle: "Reliable system",
          detail: "Introduce automation only after the flow is stable."
        }
      ]
    },
    sections: [
      {
        title: "Why Automation Fails Without Structure",
        id: "why-automation-fails-without-structure",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "Automation relies on consistency.",
              "When workflows are unclear, automation introduces more variability instead of reducing it."
            ]
          }
        ]
      },
      {
        title: "The Cost of Broken Processes",
        id: "the-cost-of-broken-processes",
        blocks: [
          {
            type: "paragraph",
            paragraphs: ["Poor processes lead to:"]
          },
          {
            type: "list",
            items: ["Errors", "Delays", "Inefficiencies", "Frustration across teams"]
          },
          {
            type: "paragraph",
            paragraphs: ["Automation amplifies these issues."]
          }
        ]
      },
      {
        title: "What Process Clarity Looks Like",
        id: "what-process-clarity-looks-like",
        blocks: [
          {
            type: "paragraph",
            paragraphs: ["Clear processes include:"]
          },
          {
            type: "list",
            items: [
              "Defined steps",
              "Standard inputs",
              "Predictable outputs"
            ]
          },
          {
            type: "paragraph",
            paragraphs: ["This enables automation to function effectively."]
          }
        ]
      },
      {
        title: "How to Build Strong Foundations",
        id: "how-to-build-strong-foundations",
        blocks: [
          {
            type: "paragraph",
            paragraphs: ["Focus on:"]
          },
          {
            type: "list",
            items: [
              "Mapping workflows",
              "Standardizing execution",
              "Documenting systems"
            ]
          },
          {
            type: "paragraph",
            paragraphs: [
              "This prepares your organization for AI adoption."
            ]
          }
        ]
      },
      {
        title: "Frequently Asked Questions",
        id: "frequently-asked-questions",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Why fix processes before AI?",
                answer:
                  "Because automation depends on structured workflows."
              },
              {
                question: "What happens if you skip this step?",
                answer:
                  "You introduce inconsistency and reduce system reliability."
              },
              {
                question: "How detailed should processes be?",
                answer:
                  "Detailed enough to be repeatable and measurable."
              }
            ]
          }
        ]
      },
      {
        title: "Next Step",
        id: "next-step",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "Process clarity is the foundation of scalable AI systems."
            ]
          }
        ]
      }
    ]
  },
  {
    title: "AI for Business Operations: From Experimentation to Scalable Systems",
    slug: "ai-business-operations-scaling",
    metaDescription:
      "Understand how businesses move from AI experimentation to scalable systems that improve efficiency and performance.",
    eyebrow: "Scalable AI Systems",
    dateLabel: "April 2026",
    readTime: "5 min read",
    imageSrc: "/andra-hero.jpg",
    imageAlt: "Framework visual for scaling AI in business operations",
    summary:
      "How businesses move from early AI experimentation to structured systems that scale operational performance and consistency.",
    featuredStat: "2 phases",
    featuredLabel: "Experimentation to systems",
    visual: {
      kicker: "Scaling Shift",
      headline: ["Experiment.", "Systemize.", "Scale."],
      summary:
        "The shift from isolated AI experimentation to scalable operational systems happens when workflows become structured enough to repeat.",
      footerLabel: "From pilots to scalable systems",
      stages: [
        {
          number: "01",
          title: "Experiment",
          subtitle: "Tools and trials",
          detail: "Teams explore AI with isolated use cases."
        },
        {
          number: "02",
          title: "Systemize",
          subtitle: "Workflow design",
          detail: "Fragmented tasks are organized into repeatable workflows."
        },
        {
          number: "03",
          title: "Scale",
          subtitle: "Operational consistency",
          detail: "AI supports a system that can grow across teams."
        }
      ]
    },
    sections: [
      {
        title: "The Experimentation Phase",
        id: "the-experimentation-phase",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "Most companies begin with experimentation.",
              "Teams test tools, explore use cases, and generate early insights."
            ]
          }
        ]
      },
      {
        title: "The Scaling Challenge",
        id: "the-scaling-challenge",
        blocks: [
          {
            type: "paragraph",
            paragraphs: ["Scaling becomes difficult when:"]
          },
          {
            type: "list",
            items: [
              "Processes are unclear",
              "Workflows are fragmented",
              "Teams operate independently"
            ]
          },
          {
            type: "paragraph",
            paragraphs: ["This limits impact."]
          }
        ]
      },
      {
        title: "The Shift to Systems",
        id: "the-shift-to-systems",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "Scaling requires moving from experimentation to structured workflows.",
              "This aligns with the [Tasks to Systems to Agents framework](/insights/how-to-implement-ai-business-operations-tasks-systems-agents)."
            ]
          }
        ]
      },
      {
        title: "Building Scalable Operations",
        id: "building-scalable-operations",
        blocks: [
          {
            type: "paragraph",
            paragraphs: ["Focus on:"]
          },
          {
            type: "list",
            items: [
              "Defining systems",
              "Integrating AI into workflows",
              "Monitoring outputs"
            ]
          },
          {
            type: "paragraph",
            paragraphs: ["This creates sustainable growth."]
          }
        ]
      },
      {
        title: "Frequently Asked Questions",
        id: "frequently-asked-questions",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Why does AI not scale easily?",
                answer:
                  "Because workflows are not structured."
              },
              {
                question: "What enables scalability?",
                answer:
                  "Clear systems and consistent execution."
              },
              {
                question: "Where should companies start?",
                answer:
                  "With process mapping and workflow design."
              }
            ]
          }
        ]
      },
      {
        title: "Next Step",
        id: "next-step",
        blocks: [
          {
            type: "paragraph",
            paragraphs: [
              "Moving from experimentation to systems unlocks the full value of AI."
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
