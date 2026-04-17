"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;

        setIsScrolled((current) => {
          if (current) {
            return y > 10;
          }

          return y > 28;
        });

        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      data-scrolled={isScrolled}
      className="site-header sticky top-0 z-50 border-b border-obsidian/10"
    >
      <div className="site-header-inner mx-auto max-w-7xl px-6 py-5 sm:px-8 lg:px-12">
        <header className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
          <Link
            href="/"
            className="font-serif text-[1.45rem] tracking-[0.34em] text-obsidian transition-opacity duration-300 hover:opacity-88 sm:text-2xl"
          >
            ANDRA
          </Link>

          <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:w-auto sm:justify-end sm:gap-x-7 sm:gap-y-3">
            <Link
              href="/insights"
              className="text-[0.66rem] font-bold tracking-[0.16em] text-obsidian transition hover:opacity-72 sm:text-sm sm:tracking-[0.18em]"
            >
              ACTIONABLE INSIGHTS
            </Link>
            <Link
              href="/recommended-tools"
              className="text-[0.66rem] font-bold tracking-[0.16em] text-obsidian transition hover:opacity-72 sm:text-sm sm:tracking-[0.18em]"
            >
              RECOMMENDED TOOLS
            </Link>
            <a
              href="https://www.linkedin.com/in/andraizgarian/"
              target="_blank"
              rel="noreferrer"
              className="text-[0.66rem] font-bold tracking-[0.16em] text-obsidian transition hover:opacity-72 sm:text-sm sm:tracking-[0.18em]"
            >
              LINKEDIN
            </a>
            <a
              href="mailto:andra@zanobe.com?subject=Strategy%20Inquiry"
              className="site-header-contact relative text-[0.66rem] font-bold tracking-[0.16em] text-obsidian transition-opacity duration-200 hover:opacity-72 sm:text-sm sm:tracking-[0.18em]"
            >
              CONTACT
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}
