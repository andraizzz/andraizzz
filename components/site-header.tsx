"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function SiteHeader() {
  const [fadeProgress, setFadeProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll <= 0) {
        setFadeProgress(0);
        return;
      }

      const scrollRatio = window.scrollY / maxScroll;
      const nextFade = clamp((scrollRatio - 0.5) / 0.22, 0, 1);

      setFadeProgress(nextFade);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="site-header sticky top-0 z-50 border-b border-obsidian/10"
      style={
        {
          "--header-bg-alpha": `${0.84 - fadeProgress * 0.28}`,
          "--header-gradient-alpha": `${fadeProgress * 0.92}`,
          "--header-border-alpha": `${0.1 - fadeProgress * 0.04}`
        } as React.CSSProperties
      }
    >
      <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8 sm:py-5 lg:px-12">
        <header className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
          <Link
            href="/"
            className="font-serif text-2xl tracking-[0.35em] text-obsidian"
          >
            ANDRA
          </Link>

          <div className="flex items-center gap-4 sm:gap-7">
            <Link
              href="/recommended-tools"
              className="text-[0.78rem] tracking-[0.18em] text-stone transition hover:text-obsidian sm:text-sm"
            >
              RECOMMENDED TOOLS
            </Link>
            <a
              href="https://www.linkedin.com/in/andraizgarian/"
              target="_blank"
              rel="noreferrer"
              className="text-[0.78rem] tracking-[0.18em] text-stone transition hover:text-obsidian sm:text-sm"
            >
              LINKEDIN
            </a>
            <a
              href="mailto:andra@zanobe.com?subject=Strategy%20Inquiry"
              className="text-[0.78rem] tracking-[0.18em] text-stone transition hover:text-obsidian sm:text-sm"
            >
              CONTACT
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}
