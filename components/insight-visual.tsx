type InsightVisualProps = {
  eyebrow: string;
  stat: string;
  label: string;
  compact?: boolean;
};

const stageLabels = [
  {
    name: "Tasks",
    detail: "Manual inputs"
  },
  {
    name: "Systems",
    detail: "Structured workflows"
  },
  {
    name: "Agents",
    detail: "Scaled execution"
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
      className={`relative overflow-hidden rounded-[1.7rem] border border-white/50 bg-[linear-gradient(150deg,rgba(17,21,26,0.98),rgba(28,34,40,0.92)_44%,rgba(64,68,74,0.86)_100%)] ${
        compact ? "min-h-[17rem] sm:min-h-[19rem]" : "min-h-[20rem] sm:min-h-[29rem]"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.13),transparent_24%),radial-gradient(circle_at_86%_20%,rgba(217,167,154,0.14),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.08),transparent_36%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:34px_34px] sm:[background-size:40px_40px]" />

      <div className="absolute left-[7%] right-[7%] top-[9%] flex items-center justify-between gap-4">
        <div className="rounded-full border border-white/20 bg-white/[0.06] px-3 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/72 backdrop-blur-sm sm:px-4 sm:text-[0.68rem] sm:tracking-[0.18em]">
          {eyebrow}
        </div>
        <div className="rounded-full border border-white/16 bg-white/[0.05] px-3 py-2 text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-white/54 sm:px-4 sm:text-[0.62rem]">
          Enterprise operating model
        </div>
      </div>

      <div className="absolute left-[7%] right-[7%] top-[22%] hidden h-px bg-gradient-to-r from-transparent via-white/22 to-transparent sm:block" />

      <div className="absolute left-[7%] right-[7%] top-[24%] grid grid-cols-1 gap-3 sm:top-[28%] sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:gap-4">
        {stageLabels.map((stage, index) => (
          <div key={stage.name} className="contents">
            <div className="rounded-[1.15rem] border border-white/18 bg-white/[0.06] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm sm:px-5 sm:py-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[0.58rem] uppercase tracking-[0.16em] text-white/48 sm:text-[0.62rem]">
                    Stage 0{index + 1}
                  </div>
                  <div className="mt-2 font-serif text-[1.6rem] text-white sm:text-[2rem]">
                    {stage.name}
                  </div>
                </div>
                <div className="rounded-full border border-white/16 bg-white/[0.05] px-2 py-1 text-[0.55rem] uppercase tracking-[0.16em] text-white/50">
                  {index + 1}
                </div>
              </div>

              <div className="mt-4 text-[0.7rem] uppercase tracking-[0.14em] text-white/58 sm:text-[0.76rem]">
                {stage.detail}
              </div>

              <div className="mt-4 space-y-2">
                <div className="h-2 rounded-full bg-white/72" />
                <div className="h-2 w-[82%] rounded-full bg-white/26" />
                <div className="h-2 w-[64%] rounded-full bg-white/18" />
              </div>
            </div>

            {index < stageLabels.length - 1 ? (
              <div className="hidden items-center justify-center sm:flex">
                <div className="flex w-10 items-center">
                  <div className="h-px flex-1 bg-gradient-to-r from-white/18 to-white/36" />
                  <div className="ml-1 h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-white/70" />
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="absolute left-[7%] right-[7%] top-[66%] rounded-[1.2rem] border border-white/18 bg-white/[0.05] px-4 py-4 backdrop-blur-sm sm:top-[63%] sm:px-5 sm:py-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-[0.58rem] uppercase tracking-[0.16em] text-white/48 sm:text-[0.62rem]">
              Core framework
            </div>
            <div className="mt-2 text-[0.72rem] uppercase tracking-[0.14em] text-white/72 sm:text-sm">
              {label}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:min-w-[18rem] sm:gap-3">
            <div className="rounded-[0.9rem] border border-white/14 bg-white/[0.06] px-2 py-3 text-center">
              <div className="font-serif text-[1.15rem] text-white sm:text-[1.35rem]">01</div>
              <div className="mt-1 text-[0.5rem] uppercase tracking-[0.14em] text-white/48 sm:text-[0.56rem]">
                Inputs
              </div>
            </div>
            <div className="rounded-[0.9rem] border border-white/14 bg-white/[0.06] px-2 py-3 text-center">
              <div className="font-serif text-[1.15rem] text-white sm:text-[1.35rem]">02</div>
              <div className="mt-1 text-[0.5rem] uppercase tracking-[0.14em] text-white/48 sm:text-[0.56rem]">
                Logic
              </div>
            </div>
            <div className="rounded-[0.9rem] border border-white/14 bg-white/[0.06] px-2 py-3 text-center">
              <div className="font-serif text-[1.15rem] text-white sm:text-[1.35rem]">03</div>
              <div className="mt-1 text-[0.5rem] uppercase tracking-[0.14em] text-white/48 sm:text-[0.56rem]">
                Outputs
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[7%] left-[7%] flex items-end gap-3">
        <div>
          <div className="font-serif text-[2rem] leading-none text-white sm:text-[2.7rem]">
            {stat}
          </div>
          <div className="mt-1 text-[0.55rem] uppercase tracking-[0.16em] text-white/48 sm:text-[0.62rem]">
            Maturity layers
          </div>
        </div>
      </div>
    </div>
  );
}
