type InsightVisualProps = {
  eyebrow: string;
  stat: string;
  label: string;
  compact?: boolean;
};

const stages = [
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
] as const;

export function InsightVisual({
  eyebrow,
  stat,
  label,
  compact = false
}: InsightVisualProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.7rem] border border-white/18 bg-[linear-gradient(180deg,#262626_0%,#2f2f31_100%)] ${
        compact ? "min-h-[18rem] sm:min-h-[20rem]" : "min-h-[22rem] sm:min-h-[27rem]"
      }`}
    >
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_65%)]" />

      <div className="absolute left-[7%] top-[9%] text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/42 sm:text-[0.68rem]">
        The Framework
      </div>

      <div className="absolute right-[7%] top-[8%] rounded-full border border-white/14 bg-white/[0.04] px-3 py-2 text-right backdrop-blur-sm">
        <div className="font-serif text-[1.55rem] leading-none text-white sm:text-[1.9rem]">
          {stat}
        </div>
        <div className="mt-1 text-[0.5rem] uppercase tracking-[0.18em] text-white/40 sm:text-[0.56rem]">
          Layers
        </div>
      </div>

      <div className="absolute inset-x-[7%] top-[18%] sm:top-[20%]">
        <h3 className="font-serif text-[2.3rem] leading-[0.96] text-white sm:text-[3.1rem]">
          Tasks.
          <br />
          Systems.
          <br />
          <span className="text-[#d7cbc3] italic">Agents.</span>
        </h3>
      </div>

      <div className="absolute inset-x-[7%] top-[46%] grid grid-cols-1 gap-3 sm:top-[50%] sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
        {stages.map((stage, index) => (
          <div key={stage.title} className="contents">
            <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.035] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm sm:px-5 sm:py-5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-[0.54rem] font-semibold uppercase tracking-[0.18em] text-white/40">
                  Stage {stage.number}
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-[0.52rem] font-semibold text-white/52">
                  {stage.number.slice(1)}
                </div>
              </div>

              <div className="mt-4 font-serif text-[1.75rem] leading-none text-white sm:text-[2rem]">
                {stage.title}
              </div>
              <div className="mt-3 text-[0.64rem] uppercase tracking-[0.18em] text-white/46 sm:text-[0.68rem]">
                {stage.subtitle}
              </div>

              <div className="mt-4 h-px bg-white/10" />

              <p className="mt-4 max-w-[15rem] text-[0.82rem] leading-6 text-white/62 sm:text-[0.88rem]">
                {stage.detail}
              </p>
            </div>

            {index < stages.length - 1 ? (
              <div className="hidden items-center justify-center sm:flex">
                <div className="flex w-10 items-center">
                  <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-[#b19387]/45" />
                  <div className="ml-1 h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-[#b19387]" />
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="absolute inset-x-[7%] bottom-[8%] flex items-end justify-between gap-4 border-t border-white/8 pt-4">
        <div>
          <div className="text-[0.54rem] font-semibold uppercase tracking-[0.18em] text-white/38">
            Core model
          </div>
          <div className="mt-2 font-serif text-[1.1rem] text-white/90 sm:text-[1.35rem]">
            {label}
          </div>
        </div>

        <div className="hidden text-right sm:block">
          <div className="text-[0.54rem] font-semibold uppercase tracking-[0.18em] text-white/38">
            Lens
          </div>
          <div className="mt-2 text-[0.74rem] uppercase tracking-[0.16em] text-[#d7cbc3]">
            {eyebrow}
          </div>
        </div>
      </div>
    </div>
  );
}
