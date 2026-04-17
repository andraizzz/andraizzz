type InsightVisualProps = {
  eyebrow: string;
  stat: string;
  kicker: string;
  headline: string[];
  stages: Array<{
    number: string;
    title: string;
    subtitle: string;
    detail: string;
  }>;
  compact?: boolean;
};

export function InsightVisual({
  eyebrow,
  stat,
  kicker,
  headline,
  stages,
  compact = false
}: InsightVisualProps) {
  const visibleStages = compact ? stages.slice(0, 2) : stages;

  return (
    <div
      className={`relative overflow-hidden rounded-[1.7rem] border border-white/18 bg-[linear-gradient(180deg,#262626_0%,#2f2f31_100%)] ${
        compact ? "px-5 py-5 sm:px-6 sm:py-6" : "px-5 py-6 sm:px-7 sm:py-7"
      }`}
    >
      <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.09),transparent_65%)]" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/52 sm:text-[0.68rem]">
            {kicker}
          </div>
          <div className="rounded-full border border-white/22 bg-white/[0.07] px-3 py-2 text-right backdrop-blur-sm">
            <div className="font-serif text-[1.55rem] leading-none text-white sm:text-[1.9rem]">
              {stat}
            </div>
            <div className="mt-1 text-[0.5rem] uppercase tracking-[0.18em] text-white/56 sm:text-[0.56rem]">
              Layers
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-7">
          <h3 className={`font-serif leading-[0.96] text-white ${compact ? "text-[1.85rem] sm:text-[2.2rem]" : "text-[2.3rem] sm:text-[3.1rem]"}`}>
            {headline.map((line, index) => (
              <span key={`${line}-${index}`} className={index === headline.length - 1 ? "text-[#d7cbc3] italic" : ""}>
                {line}
                {index < headline.length - 1 ? <br /> : null}
              </span>
            ))}
          </h3>
        </div>

        <div className={`mt-6 grid grid-cols-1 gap-3 ${compact ? "sm:mt-6 sm:grid-cols-2" : "sm:mt-8 sm:grid-cols-[1fr_auto_1fr_auto_1fr]"} sm:items-stretch`}>
        {visibleStages.map((stage, index) => (
          <div key={stage.title} className="contents">
            <div className="rounded-[1.25rem] border border-white/24 bg-white/[0.12] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm sm:px-5 sm:py-5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-[0.54rem] font-semibold uppercase tracking-[0.18em] text-white/72">
                  Stage {stage.number}
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/24 bg-white/[0.14] text-[0.52rem] font-semibold text-white/88">
                  {stage.number.slice(1)}
                </div>
              </div>

              <div className="mt-4 font-serif text-[1.75rem] leading-none text-white sm:text-[2rem]">
                {stage.title}
              </div>
              <div className="mt-3 text-[0.64rem] uppercase tracking-[0.18em] text-[#efe3dc] sm:text-[0.68rem]">
                {stage.subtitle}
              </div>

              <div className="mt-4 h-px bg-white/22" />

              <p className={`mt-4 max-w-[15rem] text-white/96 ${compact ? "text-[0.76rem] leading-5 sm:text-[0.8rem]" : "text-[0.82rem] leading-6 sm:text-[0.88rem]"}`}>
                {stage.detail}
              </p>
            </div>

            {!compact && index < visibleStages.length - 1 ? (
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
      </div>
    </div>
  );
}
