"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { bookIntroCallUrl, linkedinUrl } from "@/lib/contact";

const services = [
  {
    href: "/ai-workflow-audit",
    label: "Workflow Audit",
    trackLabel: "workflow_audit"
  },
  {
    href: "/chatgpt-ads",
    label: "ChatGPT Ads",
    trackLabel: "chatgpt_ads"
  }
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();
  const pathname = usePathname();
  const isServicesActive = services.some((service) => pathname === service.href);

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

  useEffect(() => {
    if (!isServicesOpen) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isServicesOpen]);

  useEffect(() => {
    setIsServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setIsServicesOpen(false), 140);
  };

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
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => {
                cancelClose();
                setIsServicesOpen(true);
              }}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
                aria-controls={menuId}
                onClick={() => setIsServicesOpen((open) => !open)}
                data-track-click="navigation_click"
                data-track-category="header"
                data-track-label="services_toggle"
                className={`inline-flex items-center gap-1.5 text-[0.66rem] font-bold tracking-[0.16em] text-obsidian transition hover:opacity-72 sm:text-sm sm:tracking-[0.18em] ${
                  isServicesActive ? "opacity-88" : ""
                }`}
              >
                SERVICES
                <span
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
              <div
                id={menuId}
                role="menu"
                aria-label="Services"
                data-open={isServicesOpen}
                className="pointer-events-none absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-[1rem] border border-white/60 bg-white/95 p-2 opacity-0 shadow-[0_18px_50px_rgba(17,17,17,0.14)] backdrop-blur-xl transition duration-200 data-[open=true]:pointer-events-auto data-[open=true]:opacity-100"
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    role="menuitem"
                    data-track-click="navigation_click"
                    data-track-category="header"
                    data-track-label={service.trackLabel}
                    data-track-destination={service.href}
                    className="block rounded-[0.72rem] px-4 py-3 text-[0.72rem] font-bold tracking-[0.16em] text-obsidian transition hover:bg-shell/55 sm:text-[0.78rem] sm:tracking-[0.18em]"
                  >
                    {service.label.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track-click="contact_click"
              data-track-category="header"
              data-track-label="linkedin"
              data-track-destination={linkedinUrl}
              className="text-[0.66rem] font-bold tracking-[0.16em] text-obsidian transition hover:opacity-72 sm:text-sm sm:tracking-[0.18em]"
            >
              LINKEDIN
            </a>
            <a
              href={bookIntroCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track-click="contact_click"
              data-track-category="header"
              data-track-label="calendly"
              data-track-destination={bookIntroCallUrl}
              className="site-header-contact relative inline-flex min-h-10 items-center justify-center rounded-[0.72rem] border border-white/75 bg-white px-4 py-2 text-[0.66rem] font-bold tracking-[0.16em] text-obsidian shadow-[0_12px_30px_rgba(255,255,255,0.42),0_10px_24px_rgba(17,17,17,0.07)] transition duration-300 hover:scale-[1.02] hover:border-white/55 hover:bg-white/50 hover:shadow-[0_18px_40px_rgba(255,255,255,0.36),0_14px_30px_rgba(17,17,17,0.08)] active:scale-[0.98] sm:min-h-11 sm:px-5 sm:text-sm sm:tracking-[0.18em]"
            >
              BOOK A CALL
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}
