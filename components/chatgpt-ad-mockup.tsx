// Reusable SVG building blocks for ChatGPT ad mockups. Used by the hero
// mockup on /chatgpt-ads and by the dedicated examples on /chatgpt-ads/examples.

export function ProductImage() {
  return (
    <svg
      viewBox="0 0 160 160"
      className="h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="ad-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f1e3d8" />
          <stop offset="100%" stopColor="#d7b4a3" />
        </linearGradient>
        <linearGradient id="ad-bottle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6efe9" />
          <stop offset="55%" stopColor="#efe0d3" />
          <stop offset="100%" stopColor="#c99a84" />
        </linearGradient>
        <linearGradient id="ad-bottle-highlight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0.68)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      <rect width="160" height="160" fill="url(#ad-bg)" />
      <circle cx="40" cy="36" r="30" fill="rgba(255,255,255,0.32)" />
      <circle cx="132" cy="128" r="46" fill="rgba(28,34,40,0.08)" />
      <g transform="translate(58 30)">
        <rect
          x="0"
          y="0"
          width="44"
          height="100"
          rx="8"
          fill="url(#ad-bottle)"
          stroke="rgba(28,34,40,0.14)"
          strokeWidth="1"
        />
        <rect x="14" y="-6" width="16" height="12" rx="2" fill="#8b6855" />
        <rect
          x="4"
          y="40"
          width="36"
          height="26"
          rx="3"
          fill="rgba(255,255,255,0.84)"
        />
        <text
          x="22"
          y="52"
          textAnchor="middle"
          fontSize="5.4"
          fontWeight="700"
          letterSpacing="0.14em"
          fill="#4a382e"
        >
          ANDRA
        </text>
        <text
          x="22"
          y="60"
          textAnchor="middle"
          fontSize="3.6"
          letterSpacing="0.18em"
          fill="#7a6355"
        >
          SERUM 01
        </text>
        <rect
          x="5"
          y="4"
          width="7"
          height="92"
          rx="3"
          fill="url(#ad-bottle-highlight)"
          opacity="0.5"
        />
      </g>
      <ellipse cx="80" cy="140" rx="36" ry="4" fill="rgba(28,34,40,0.18)" />
    </svg>
  );
}

const miniPalettes = [
  { bg: "#eadbcf", accent: "#c08a74" },
  { bg: "#f0e2d6", accent: "#b57a63" },
  { bg: "#e4d1c2", accent: "#a57158" },
  { bg: "#f2e5da", accent: "#c99a84" }
];

export function MiniProductImage({ variant }: { variant: number }) {
  const p = miniPalettes[variant % miniPalettes.length];
  return (
    <svg viewBox="0 0 40 40" className="h-full w-full" aria-hidden="true">
      <rect width="40" height="40" fill={p.bg} />
      <circle cx="10" cy="8" r="7" fill="rgba(255,255,255,0.35)" />
      <rect
        x="15"
        y="8"
        width="10"
        height="24"
        rx="2"
        fill={p.accent}
        opacity="0.9"
      />
      <rect
        x="16.5"
        y="18"
        width="7"
        height="6"
        rx="1"
        fill="rgba(255,255,255,0.85)"
      />
    </svg>
  );
}

type SingleImageAdProps = {
  size?: "sm" | "md" | "lg";
  headline?: string;
  description?: string;
  hostname?: string;
};

// A standalone sponsored card (no surrounding chat UI). Renders at three
// sizes so the examples page can show a real-size preview next to a
// zoomed-in render.
export function SingleImageAd({
  size = "md",
  headline = "Barrier-repair serum for sensitive skin",
  description = "Ceramides + squalane, from $42",
  hostname = "andra.co"
}: SingleImageAdProps) {
  const dims = {
    sm: { img: "h-16 w-16", headline: "text-[0.9rem]", gap: "gap-2.5", pad: "p-2.5" },
    md: { img: "h-20 w-20 sm:h-24 sm:w-24", headline: "text-[0.98rem] sm:text-[1.05rem]", gap: "gap-3", pad: "p-3" },
    lg: { img: "h-32 w-32 sm:h-40 sm:w-40", headline: "text-[1.25rem] sm:text-[1.5rem]", gap: "gap-4", pad: "p-4 sm:p-5" }
  }[size];

  return (
    <div className="overflow-hidden rounded-[1.1rem] border border-obsidian/10 bg-white shadow-[0_18px_42px_rgba(17,17,17,0.06)]">
      <div className={`flex items-stretch ${dims.gap} ${dims.pad}`}>
        <div
          className={`relative shrink-0 overflow-hidden rounded-[0.6rem] border border-obsidian/8 ${dims.img}`}
        >
          <ProductImage />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-obsidian/20 bg-porcelain text-[0.5rem] text-stone">
                ⨀
              </span>
              <span className="truncate text-[0.72rem] font-medium text-obsidian">
                {hostname}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="rounded-md bg-shell/70 px-1.5 py-0.5 text-[0.5rem] font-semibold uppercase tracking-[0.1em] text-stone/80">
                Ad
              </span>
              <span className="text-[0.7rem] text-stone/60">⋯</span>
            </div>
          </div>
          <p className={`mt-1 font-serif leading-[1.2] text-obsidian ${dims.headline}`}>
            {headline}
          </p>
          <p className="mt-1 text-[0.78rem] leading-5 text-stone">
            {description}
          </p>
        </div>
      </div>
      <div className="border-t border-obsidian/6 bg-porcelain/60 px-3 py-2">
        <p className="text-[0.62rem] leading-4 text-stone/70">
          Ads do not influence the answers you get from ChatGPT. Your chats stay
          private. <span className="font-medium text-obsidian/80">Learn about ads ›</span>
        </p>
      </div>
    </div>
  );
}

export function MultiImageAd() {
  return (
    <div className="overflow-hidden rounded-[1.1rem] border border-obsidian/8 bg-white p-4 shadow-[0_18px_42px_rgba(17,17,17,0.05)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-obsidian/20 bg-porcelain text-[0.5rem] text-stone">
            ⨀
          </span>
          <span className="text-[0.72rem] font-medium text-obsidian">andra.co</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="rounded-md bg-shell/70 px-1.5 py-0.5 text-[0.5rem] font-semibold uppercase tracking-[0.1em] text-stone/80">
            Ad
          </span>
          <span className="text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-blush">
            Open beta
          </span>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="relative aspect-square overflow-hidden rounded-[0.6rem] border border-obsidian/8"
          >
            <MiniProductImage variant={i} />
          </div>
        ))}
      </div>
      <p className="mt-3 font-serif text-[1.05rem] leading-[1.2] text-obsidian">
        The complete routine for sensitive skin
      </p>
      <p className="mt-1 text-[0.78rem] leading-5 text-stone">
        4–6 square frames. One headline, one destination, one Learn more CTA.
      </p>
      <div className="mt-3 border-t border-obsidian/6 pt-2">
        <p className="text-[0.62rem] leading-4 text-stone/70">
          Ads do not influence the answers you get from ChatGPT. Your chats stay
          private. <span className="font-medium text-obsidian/80">Learn about ads ›</span>
        </p>
      </div>
    </div>
  );
}
