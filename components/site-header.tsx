"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
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

          <div className="flex items-center gap-4 sm:gap-7">
            <Link
              href="/recommended-tools"
              className="text-[0.78rem] font-semibold tracking-[0.18em] text-stone transition hover:text-obsidian sm:text-sm"
            >
              RECOMMENDED TOOLS
            </Link>
            <a
              href="https://www.linkedin.com/in/andraizgarian/"
              target="_blank"
              rel="noreferrer"
              className="text-[0.78rem] font-semibold tracking-[0.18em] text-stone transition hover:text-obsidian sm:text-sm"
            >
              LINKEDIN
            </a>
            <a
              href="mailto:andra@zanobe.com?subject=Strategy%20Inquiry"
              className="site-header-contact relative text-[0.78rem] font-semibold tracking-[0.18em] text-stone transition-colors duration-200 hover:text-obsidian sm:text-sm"
            >
              CONTACT
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}
