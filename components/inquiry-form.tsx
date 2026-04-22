"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import {
  bookIntroCallUrl,
  contactEmail,
  contactEmailHref,
  linkedinUrl
} from "@/lib/contact";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string | number | undefined>
    ) => void;
  }
}

const inquiryOptions = [
  "AI Workflow Audit",
  "AI Visibility Strategy",
  "Recommended Tools / Stack",
  "Growth Strategy",
  "General Inquiry"
] as const;

type InquiryFormProps = {
  defaultFocus?: (typeof inquiryOptions)[number];
  sourceLabel?: string;
};

export function InquiryForm({
  defaultFocus = "General Inquiry",
  sourceLabel = "Website Inquiry"
}: InquiryFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [focus, setFocus] = useState<(typeof inquiryOptions)[number]>(defaultFocus);
  const [details, setDetails] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttemptedSubmit(true);

    const body = [
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Company / Brand: ${company || "Not provided"}`,
      `Focus: ${focus}`,
      "",
      "What I need help with:",
      details || "Not provided",
      "",
      `Source: ${sourceLabel}`
    ].join("\n");

    const subject = `${sourceLabel}: ${focus}`;
    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.gtag?.("event", "inquiry_submit", {
      event_category: "contact",
      event_label: sourceLabel,
      inquiry_focus: focus
    });
    window.location.href = mailtoUrl;
  };

  return (
    <div className="rounded-[1.5rem] border border-white/60 bg-white/52 p-5 shadow-[0_20px_50px_rgba(17,17,17,0.05)] backdrop-blur-sm sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
            Direct Inquiry
          </p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-stone sm:text-base">
            Fill this out and your email app will open with a structured message to send.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={bookIntroCallUrl}
            target="_blank"
            rel="noreferrer"
            data-track-click="contact_click"
            data-track-category="inquiry_form"
            data-track-label="calendly"
            data-track-destination={bookIntroCallUrl}
            className="inline-flex min-h-11 items-center justify-center rounded-[0.72rem] border border-obsidian/16 bg-white px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-obsidian transition duration-200 hover:scale-[1.02] hover:border-obsidian/30"
          >
            Book Intro Call
          </a>
          <a
            href={contactEmailHref}
            data-track-click="contact_click"
            data-track-category="inquiry_form"
            data-track-label="direct_email"
            data-track-destination={`mailto:${contactEmail}`}
            className="font-medium text-obsidian underline decoration-obsidian/30 underline-offset-4"
          >
            {contactEmail}
          </a>
        </div>
      </div>

      <form className="mt-6 grid gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-3 block text-xs uppercase tracking-editorial text-stone sm:text-sm">
              Name
            </span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-[0.85rem] border border-obsidian/12 bg-porcelain/80 px-5 py-4 text-base text-obsidian outline-none transition duration-300 placeholder:text-stone/70 focus:border-obsidian/35 focus:bg-white"
              placeholder="Your name"
            />
          </label>

          <label className="block">
            <span className="mb-3 block text-xs uppercase tracking-editorial text-stone sm:text-sm">
              Email
            </span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-[0.85rem] border border-obsidian/12 bg-porcelain/80 px-5 py-4 text-base text-obsidian outline-none transition duration-300 placeholder:text-stone/70 focus:border-obsidian/35 focus:bg-white"
              placeholder="Your email"
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-[1fr_0.9fr]">
          <label className="block">
            <span className="mb-3 block text-xs uppercase tracking-editorial text-stone sm:text-sm">
              Company / Brand
            </span>
            <input
              type="text"
              name="company"
              autoComplete="organization"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              className="w-full rounded-[0.85rem] border border-obsidian/12 bg-porcelain/80 px-5 py-4 text-base text-obsidian outline-none transition duration-300 placeholder:text-stone/70 focus:border-obsidian/35 focus:bg-white"
              placeholder="Your company or brand"
            />
          </label>

          <label className="block">
            <span className="mb-3 block text-xs uppercase tracking-editorial text-stone sm:text-sm">
              Focus
            </span>
            <select
              name="focus"
              value={focus}
              onChange={(event) =>
                setFocus(event.target.value as (typeof inquiryOptions)[number])
              }
              className="w-full rounded-[0.85rem] border border-obsidian/12 bg-porcelain/80 px-5 py-4 text-base text-obsidian outline-none transition duration-300 focus:border-obsidian/35 focus:bg-white"
            >
              {inquiryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <span className="mb-3 block text-xs uppercase tracking-editorial text-stone sm:text-sm">
            What are you trying to fix, build, or improve?
          </span>
          <textarea
            name="details"
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            rows={5}
            className="w-full rounded-[0.85rem] border border-obsidian/12 bg-porcelain/80 px-5 py-4 text-base text-obsidian outline-none transition duration-300 placeholder:text-stone/70 focus:border-obsidian/35 focus:bg-white"
            placeholder="A few lines on the workflow, visibility challenge, or kind of support you need."
          />
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm leading-7 text-stone">
            <p>
              Prefer another route? Book a call, or reach out on{" "}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                data-track-click="contact_click"
                data-track-category="inquiry_form"
                data-track-label="linkedin"
                data-track-destination={linkedinUrl}
                className="font-medium text-obsidian underline decoration-obsidian/30 underline-offset-4"
              >
                LinkedIn
              </a>
              .
            </p>
            {attemptedSubmit ? (
              <p className="text-obsidian/80">
                If your email app did not open, email{" "}
                <a
                  href={contactEmailHref}
                  data-track-click="contact_click"
                  data-track-category="inquiry_form"
                  data-track-label="fallback_email"
                  data-track-destination={`mailto:${contactEmail}`}
                  className="font-medium text-obsidian underline decoration-obsidian/30 underline-offset-4"
                >
                  {contactEmail}
                </a>{" "}
                directly.
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="inline-flex min-h-[3.75rem] items-center justify-center rounded-[0.72rem] bg-ink px-7 py-4 text-sm uppercase tracking-[0.18em] text-porcelain transition duration-300 hover:scale-[1.02] hover:bg-obsidian hover:shadow-[0_18px_40px_rgba(28,34,40,0.16)] active:scale-[0.98]"
          >
            Send Inquiry
          </button>
        </div>
      </form>
    </div>
  );
}
