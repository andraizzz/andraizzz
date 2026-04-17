type InsightVisualProps = {
  title: string;
  eyebrow: string;
  stat: string;
  label: string;
  compact?: boolean;
};

export function InsightVisual({
  title,
  eyebrow,
  stat,
  label,
  compact = false
}: InsightVisualProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.7rem] border border-white/50 bg-[linear-gradient(145deg,rgba(18,22,27,0.96),rgba(28,34,40,0.86)_48%,rgba(217,167,154,0.34)_160%)] ${
        compact ? "min-h-[19rem]" : "min-h-[22rem] sm:min-h-[28rem]"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_84%_20%,rgba(217,167,154,0.18),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.08),transparent_34%)]" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="absolute inset-x-[8%] top-[18%] h-px bg-gradient-to-r from-transparent via-white/28 to-transparent" />
      <div className="absolute inset-x-[12%] top-[50%] h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />
      <div className="absolute right-[12%] top-[16%] h-[68%] w-px bg-gradient-to-b from-transparent via-white/18 to-transparent" />
      <div className="absolute left-[16%] top-[26%] rounded-full border border-white/25 bg-white/8 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/72 backdrop-blur-sm">
        {eyebrow}
      </div>

      <div className="absolute left-[10%] top-[28%] h-24 w-24 rounded-[1.4rem] border border-white/18 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm sm:h-28 sm:w-28">
        <div className="absolute inset-4 rounded-[1rem] border border-white/14" />
        <div className="absolute inset-x-5 top-5 h-2 rounded-full bg-white/70" />
        <div className="absolute inset-x-5 top-11 h-2 rounded-full bg-white/20" />
        <div className="absolute left-5 top-[4.25rem] h-10 w-10 rounded-[0.9rem] border border-white/16 bg-blush/55 shadow-[0_0_30px_rgba(217,167,154,0.22)]" />
      </div>

      <div className="absolute left-[39%] top-[34%] w-[24%] rounded-[1.25rem] border border-white/18 bg-white/[0.06] px-4 py-4 backdrop-blur-sm">
        <div className="text-[0.62rem] uppercase tracking-[0.18em] text-white/58">Systems</div>
        <div className="mt-3 space-y-2">
          <div className="h-2 rounded-full bg-white/70" />
          <div className="h-2 w-[78%] rounded-full bg-white/24" />
          <div className="h-2 w-[58%] rounded-full bg-white/24" />
        </div>
      </div>

      <div className="absolute right-[10%] top-[24%] flex h-24 w-24 items-center justify-center rounded-full border border-white/18 bg-white/[0.08] text-center shadow-[0_0_40px_rgba(255,255,255,0.06)] backdrop-blur-sm sm:h-28 sm:w-28">
        <div>
          <div className="font-serif text-3xl text-white sm:text-[2.4rem]">{stat}</div>
          <div className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-white/58">Layers</div>
        </div>
      </div>

      <div className="absolute left-[18%] right-[18%] top-[54%] rounded-[1.3rem] border border-white/18 bg-white/[0.06] px-5 py-4 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[0.62rem] uppercase tracking-[0.18em] text-white/58">Operational frame</div>
            <div className="mt-2 text-sm uppercase tracking-[0.14em] text-white/76 sm:text-base">
              {label}
            </div>
          </div>
          <div className="h-10 w-10 rounded-[0.95rem] border border-white/14 bg-white/[0.08]" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="rounded-[0.95rem] border border-white/14 bg-white/[0.06] px-3 py-3 text-[0.62rem] uppercase tracking-[0.16em] text-white/62">
            Tasks
          </div>
          <div className="rounded-[0.95rem] border border-white/14 bg-white/[0.06] px-3 py-3 text-[0.62rem] uppercase tracking-[0.16em] text-white/62">
            Systems
          </div>
          <div className="rounded-[0.95rem] border border-white/14 bg-white/[0.06] px-3 py-3 text-[0.62rem] uppercase tracking-[0.16em] text-white/62">
            Agents
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-obsidian/72 via-obsidian/22 to-transparent px-6 pb-6 pt-20 sm:px-8">
        <div className="max-w-2xl">
          <div className="text-[0.62rem] uppercase tracking-[0.18em] text-white/58">
            Actionable Insight
          </div>
          <div className="mt-3 font-serif text-2xl leading-tight text-white sm:text-[2.4rem]">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
