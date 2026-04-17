type InsightVisualProps = {
  eyebrow: string;
  stat: string;
  label: string;
  compact?: boolean;
};

const frameworkStages = [
  {
    index: "01",
    title: "Tasks",
    subtitle: "Define repetitive actions",
    description: "Clarify the steps people repeat before trying to automate anything.",
    examples: "Reports, CRM updates, reviews"
  },
  {
    index: "02",
    title: "Systems",
    subtitle: "Turn work into workflows",
    description: "Add triggers, inputs, decision points, and outputs so execution becomes consistent.",
    examples: "Rules, handoffs, dashboards"
  },
  {
    index: "03",
    title: "Agents",
    subtitle: "Deploy AI inside structure",
    description: "Let AI support or execute parts of a defined system with clear constraints.",
    examples: "Monitoring, drafting, anomaly flags"
  }
] as const;

export function InsightVisual({
  eyebrow,
  stat,
  label,
  compact = false
}: InsightVisualProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.7rem] border border-white/60 bg-[linear-gradient(180deg,rgba(247,243,240,0.98),rgba(239,232,226,0.96))] ${
        compact ? "min-h-[20rem] sm:min-h-[22rem]" : "min-h-[25rem] sm:min-h-[31rem]"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.9),transparent_24%),radial-gradient(circle_at_88%_16%,rgba(217,167,154,0.18),transparent_24%),radial-gradient(circle_at_52%_100%,rgba(28,34,40,0.05),transparent_32%)]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(28,34,40,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(28,34,40,0.08)_1px,transparent_1px)] [background-size:34px_34px] sm:[background-size:42px_42px]" />

      <div className="absolute inset-x-[7%] top-[8%] flex items-start justify-between gap-4">
        <div>
          <div className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-stone/80 sm:text-[0.7rem]">
            {eyebrow}
          </div>
          <div className="mt-3 max-w-xl font-serif text-[2.05rem] leading-[1.04] text-obsidian sm:text-[2.9rem]">
            Tasks. Systems. Agents.
          </div>
        </div>

        <div className="rounded-full border border-obsidian/10 bg-white/55 px-3 py-2 text-right shadow-[0_10px_24px_rgba(17,17,17,0.04)] backdrop-blur-sm sm:px-4">
          <div className="font-serif text-[1.35rem] leading-none text-obsidian sm:text-[1.75rem]">
            {stat}
          </div>
          <div className="mt-1 text-[0.52rem] uppercase tracking-[0.18em] text-stone sm:text-[0.58rem]">
            Maturity layers
          </div>
        </div>
      </div>

      <div className="absolute inset-x-[7%] top-[28%] sm:top-[25%]">
        <p className="max-w-2xl text-[0.82rem] leading-6 text-stone sm:text-[0.95rem] sm:leading-7">
          A practical framework for moving from scattered operational tasks into
          structured systems and then into AI-supported execution.
        </p>
      </div>

      <div className="absolute inset-x-[7%] top-[40%] grid grid-cols-1 gap-4 sm:top-[38%] sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-stretch sm:gap-3">
        {frameworkStages.map((stage, index) => (
          <div key={stage.title} className="contents">
            <div className="rounded-[1.35rem] border border-obsidian/8 bg-white/72 px-4 py-4 shadow-[0_18px_40px_rgba(17,17,17,0.05)] backdrop-blur-sm sm:px-5 sm:py-5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-stone/80">
                  Stage {stage.index}
                </div>
                <div className="rounded-full border border-obsidian/10 bg-porcelain px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-stone/80">
                  {stage.index}
                </div>
              </div>

              <div className="mt-4 font-serif text-[1.7rem] leading-none text-obsidian sm:text-[2rem]">
                {stage.title}
              </div>
              <div className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-stone sm:text-[0.76rem]">
                {stage.subtitle}
              </div>

              <div className="mt-4 h-px bg-obsidian/8" />

              <p className="mt-4 text-[0.84rem] leading-6 text-stone sm:text-[0.92rem] sm:leading-7">
                {stage.description}
              </p>

              <div className="mt-4 rounded-[1rem] border border-obsidian/7 bg-[linear-gradient(180deg,rgba(245,242,239,0.9),rgba(255,255,255,0.7))] px-3 py-3">
                <div className="text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-stone/75">
                  Typical examples
                </div>
                <div className="mt-2 text-[0.74rem] leading-5 text-obsidian/85 sm:text-[0.8rem]">
                  {stage.examples}
                </div>
              </div>
            </div>

            {index < frameworkStages.length - 1 ? (
              <div className="hidden items-center justify-center sm:flex">
                <div className="flex w-8 items-center">
                  <div className="h-px flex-1 bg-gradient-to-r from-blush/45 to-obsidian/18" />
                  <div className="ml-1 h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-[#9f857b]" />
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="absolute inset-x-[7%] bottom-[7%] rounded-[1.25rem] border border-obsidian/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(245,242,239,0.82))] px-4 py-4 shadow-[0_14px_34px_rgba(17,17,17,0.04)] sm:px-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-[0.54rem] font-semibold uppercase tracking-[0.18em] text-stone/80">
              Core framework
            </div>
            <div className="mt-2 font-serif text-[1.2rem] leading-tight text-obsidian sm:text-[1.45rem]">
              {label}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:min-w-[17rem]">
            <div className="rounded-[0.95rem] border border-obsidian/8 bg-white/72 px-3 py-3 text-center">
              <div className="font-serif text-[1.05rem] text-obsidian">01</div>
              <div className="mt-1 text-[0.5rem] uppercase tracking-[0.16em] text-stone/75">
                Inputs
              </div>
            </div>
            <div className="rounded-[0.95rem] border border-obsidian/8 bg-white/72 px-3 py-3 text-center">
              <div className="font-serif text-[1.05rem] text-obsidian">02</div>
              <div className="mt-1 text-[0.5rem] uppercase tracking-[0.16em] text-stone/75">
                Structure
              </div>
            </div>
            <div className="rounded-[0.95rem] border border-obsidian/8 bg-white/72 px-3 py-3 text-center">
              <div className="font-serif text-[1.05rem] text-obsidian">03</div>
              <div className="mt-1 text-[0.5rem] uppercase tracking-[0.16em] text-stone/75">
                Execution
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
