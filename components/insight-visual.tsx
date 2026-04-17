type InsightVisualProps = {
  eyebrow: string;
  stat: string;
  label: string;
  compact?: boolean;
};

export function InsightVisual({
  eyebrow,
  stat,
  label,
  compact = false
}: InsightVisualProps) {
  const heightClass = compact ? "min-h-[16rem] sm:min-h-[19rem]" : "min-h-[18rem] sm:min-h-[28rem]";

  return (
    <div
      className={`relative overflow-hidden rounded-[1.7rem] border border-white/50 bg-[linear-gradient(145deg,rgba(18,22,27,0.96),rgba(28,34,40,0.86)_48%,rgba(217,167,154,0.34)_160%)] ${heightClass}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_84%_20%,rgba(217,167,154,0.18),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.08),transparent_34%)]" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="absolute inset-x-[8%] top-[18%] h-px bg-gradient-to-r from-transparent via-white/28 to-transparent" />
      <div className="absolute inset-x-[12%] top-[50%] hidden h-px bg-gradient-to-r from-transparent via-white/14 to-transparent sm:block" />
      <div className="absolute right-[12%] top-[16%] hidden h-[68%] w-px bg-gradient-to-b from-transparent via-white/18 to-transparent sm:block" />
      <div className="absolute left-[10%] top-[12%] rounded-full border border-white/25 bg-white/8 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/72 backdrop-blur-sm sm:left-[16%] sm:top-[16%] sm:px-4 sm:text-[0.68rem] sm:tracking-[0.18em]">
        {eyebrow}
      </div>

      <div className="absolute left-[10%] top-[28%] h-20 w-20 rounded-[1.2rem] border border-white/18 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm sm:left-[10%] sm:top-[26%] sm:h-28 sm:w-28 sm:rounded-[1.4rem]">
        <div className="absolute inset-4 rounded-[1rem] border border-white/14" />
        <div className="absolute inset-x-5 top-5 h-2 rounded-full bg-white/70" />
        <div className="absolute inset-x-5 top-11 h-2 rounded-full bg-white/20" />
        <div className="absolute left-5 top-[4.25rem] h-10 w-10 rounded-[0.9rem] border border-white/16 bg-blush/55 shadow-[0_0_30px_rgba(217,167,154,0.22)]" />
      </div>

      <div className="absolute left-[40%] top-[30%] w-[28%] rounded-[1.1rem] border border-white/18 bg-white/[0.06] px-3 py-3 backdrop-blur-sm sm:left-[39%] sm:top-[28%] sm:w-[24%] sm:rounded-[1.25rem] sm:px-4 sm:py-4">
        <div className="text-[0.62rem] uppercase tracking-[0.18em] text-white/58">Systems</div>
        <div className="mt-3 space-y-2">
          <div className="h-2 rounded-full bg-white/70" />
          <div className="h-2 w-[78%] rounded-full bg-white/24" />
          <div className="h-2 w-[58%] rounded-full bg-white/24" />
        </div>
      </div>

      <div className="absolute right-[8%] top-[22%] flex h-20 w-20 items-center justify-center rounded-full border border-white/18 bg-white/[0.08] text-center shadow-[0_0_40px_rgba(255,255,255,0.06)] backdrop-blur-sm sm:right-[10%] sm:top-[20%] sm:h-28 sm:w-28">
        <div>
          <div className="font-serif text-[1.9rem] text-white sm:text-[2.4rem]">{stat}</div>
          <div className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-white/58">Layers</div>
        </div>
      </div>

      <div className="absolute left-[8%] right-[8%] top-[58%] rounded-[1.1rem] border border-white/18 bg-white/[0.06] px-4 py-4 backdrop-blur-sm sm:left-[15%] sm:right-[15%] sm:top-[52%] sm:rounded-[1.3rem] sm:px-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[0.62rem] uppercase tracking-[0.18em] text-white/58">Operational frame</div>
            <div className="mt-2 text-[0.7rem] uppercase tracking-[0.14em] text-white/76 sm:text-base">
              {label}
            </div>
          </div>
          <div className="h-10 w-10 rounded-[0.95rem] border border-white/14 bg-white/[0.08]" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
          <div className="rounded-[0.85rem] border border-white/14 bg-white/[0.06] px-2 py-2 text-[0.55rem] uppercase tracking-[0.14em] text-white/62 sm:rounded-[0.95rem] sm:px-3 sm:py-3 sm:text-[0.62rem] sm:tracking-[0.16em]">
            Tasks
          </div>
          <div className="rounded-[0.85rem] border border-white/14 bg-white/[0.06] px-2 py-2 text-[0.55rem] uppercase tracking-[0.14em] text-white/62 sm:rounded-[0.95rem] sm:px-3 sm:py-3 sm:text-[0.62rem] sm:tracking-[0.16em]">
            Systems
          </div>
          <div className="rounded-[0.85rem] border border-white/14 bg-white/[0.06] px-2 py-2 text-[0.55rem] uppercase tracking-[0.14em] text-white/62 sm:rounded-[0.95rem] sm:px-3 sm:py-3 sm:text-[0.62rem] sm:tracking-[0.16em]">
            Agents
          </div>
        </div>
      </div>
    </div>
  );
}
