"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string | number | undefined>
    ) => void;
  }
}

export function AnalyticsClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const trackedElement = target.closest<HTMLElement>("[data-track-click]");

      if (!trackedElement) {
        return;
      }

      const eventName = trackedElement.dataset.trackClick;

      if (!eventName || typeof window.gtag !== "function") {
        return;
      }

      window.gtag("event", eventName, {
        event_category: trackedElement.dataset.trackCategory,
        event_label: trackedElement.dataset.trackLabel,
        destination: trackedElement.dataset.trackDestination
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
