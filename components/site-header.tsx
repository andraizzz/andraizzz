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
              data-track-click="navigation_click"
              data-track-category="header"
              data-track-label="actionable_insights"
              data-track-destination="/insights"
              className="text-[0.66rem] font-bold tracking-[0.16em] text-obsidian transition hover:opacity-72 sm:text-sm sm:tracking-[0.18em]"
            >
              ACTIONABLE INSIGHTS
            </Link>
            <Link
              href="/recommended-tools"
              data-track-click="navigation_click"
              data-track-category="header"
              data-track-label="recommended_tools"
              data-track-destination="/recommended-tools"
              className="text-[0.66rem] font-bold tracking-[0.16em] text-obsidian transition hover:opacity-72 sm:text-sm sm:tracking-[0.18em]"
            >
              RECOMMENDED TOOLS
            </Link>
            <Link
              href="/ai-workflow-audit"
              data-track-click="navigation_click"
              data-track-category="header"
              data-track-label="workflow_audit"
              data-track-destination="/ai-workflow-audit"
              className="text-[0.66rem] font-bold tracking-[0.16em] text-obsidian transition hover:opacity-72 sm:text-sm sm:tracking-[0.18em]"
            >
              WORKFLOW AUDIT
            </Link>
            <a
              href="https://www.linkedin.com/in/andraizgarian/"
              target="_blank"
              rel="noreferrer"
              data-track-click="contact_click"
              data-track-category="header"
              data-track-label="linkedin"
              data-track-destination="https://www.linkedin.com/in/andraizgarian/"
              className="text-[0.66rem] font-bold tracking-[0.16em] text-obsidian transition hover:opacity-72 sm:text-sm sm:tracking-[0.18em]"
            >
              LINKEDIN
            </a>
            <a
              href="mailto:andra@zanobe.com?subject=Strategy%20Inquiry"
              data-track-click="contact_click"
              data-track-category="header"
              data-track-label="email"
              data-track-destination="mailto:andra@zanobe.com"
              className="site-header-contact relative inline-flex min-h-10 items-center justify-center rounded-[0.72rem] border border-obsidian/16 bg-white/52 px-4 py-2 text-[0.66rem] font-bold tracking-[0.16em] text-obsidian transition duration-200 hover:border-obsidian/30 hover:bg-white sm:min-h-11 sm:px-5 sm:text-sm sm:tracking-[0.18em]"
            >
              CONTACT
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}
