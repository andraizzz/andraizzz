#!/usr/bin/env node
// Weekly ChatGPT Ads doc monitor. Fetches each URL in
// .chatgpt-ads-monitor/urls.txt with headless Chromium, extracts the
// article text, and writes snapshots to .chatgpt-ads-monitor/snapshots/.
// The GitHub Actions workflow then diffs the working tree and, if
// anything changed, opens a PR for review.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const URLS_FILE = join(ROOT, ".chatgpt-ads-monitor", "urls.txt");
const SNAPSHOTS_DIR = join(ROOT, ".chatgpt-ads-monitor", "snapshots");
const VERIFIED_FILE = join(ROOT, ".chatgpt-ads-monitor", "last-verified.txt");

const urls = readFileSync(URLS_FILE, "utf8")
  .split("\n")
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith("#"));

mkdirSync(SNAPSHOTS_DIR, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36",
  locale: "en-US"
});

const results = { ok: [], failed: [], seeded: [], changed: [] };

for (const url of urls) {
  const slug = url.split("/articles/")[1]?.split("?")[0]?.split("#")[0];
  if (!slug) {
    results.failed.push({ url, reason: "could not parse slug" });
    continue;
  }
  const page = await context.newPage();
  try {
    // Intercom's SPA keeps long-polling, so `networkidle` rarely fires.
    // domcontentloaded + explicit article wait is faster and more reliable.
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45_000 });
    try {
      await page.waitForSelector("article", { timeout: 45_000 });
    } catch {
      // Fallback: give the SPA a bit more time and continue with whatever
      // text ends up in the DOM. Better a slightly imperfect snapshot than
      // nothing.
      await page.waitForTimeout(5_000);
    }
    const text = await page.evaluate(() => {
      const el =
        document.querySelector("article") ||
        document.querySelector("main") ||
        document.body;
      if (!el) return "";
      // Drop the dynamic "Updated: X ago" line — it changes constantly
      // and isn't substantive.
      return el.innerText
        .split("\n")
        .filter((line) => !/^Updated:/i.test(line.trim()))
        .join("\n")
        .trim();
    });
    if (!text || text.length < 100) {
      results.failed.push({ url, reason: `article text too short (${text.length} chars)` });
    } else {
      const snapshotPath = join(SNAPSHOTS_DIR, `${slug}.txt`);
      const isNew = !existsSync(snapshotPath);
      const previous = isNew ? "" : readFileSync(snapshotPath, "utf8");
      if (isNew) {
        results.seeded.push({ url, slug });
        writeFileSync(snapshotPath, text + "\n");
      } else if (previous.trim() !== text.trim()) {
        results.changed.push({ url, slug });
        writeFileSync(snapshotPath, text + "\n");
      } else {
        results.ok.push({ url, slug });
      }
    }
  } catch (err) {
    results.failed.push({ url, reason: err.message?.split("\n")[0] ?? String(err) });
  } finally {
    await page.close();
  }
}

await browser.close();

const today = new Date().toISOString().slice(0, 10);
writeFileSync(VERIFIED_FILE, today + "\n");

const summary = [
  `# ChatGPT Ads doc check — ${today}`,
  "",
  `- URLs checked: ${urls.length}`,
  `- Unchanged: ${results.ok.length}`,
  `- Changed: ${results.changed.length}`,
  `- Newly seeded: ${results.seeded.length}`,
  `- Failed: ${results.failed.length}`,
  ""
];

if (results.changed.length) {
  summary.push("## Changed articles");
  for (const c of results.changed) summary.push(`- [${c.slug}](${c.url})`);
  summary.push("");
}
if (results.seeded.length) {
  summary.push("## Newly seeded (first fetch)");
  for (const s of results.seeded) summary.push(`- [${s.slug}](${s.url})`);
  summary.push("");
}
if (results.failed.length) {
  summary.push("## Failed to fetch");
  for (const f of results.failed) summary.push(`- ${f.url} — ${f.reason}`);
  summary.push("");
}

const summaryPath = join(ROOT, ".chatgpt-ads-monitor-summary.md");
writeFileSync(summaryPath, summary.join("\n"));
console.log(summary.join("\n"));

// Emit for GitHub Actions
if (process.env.GITHUB_OUTPUT) {
  const hasChanges = results.changed.length + results.seeded.length > 0;
  writeFileSync(
    process.env.GITHUB_OUTPUT,
    [
      `has_changes=${hasChanges}`,
      `changed_count=${results.changed.length}`,
      `seeded_count=${results.seeded.length}`,
      `failed_count=${results.failed.length}`,
      `date=${today}`
    ].join("\n") + "\n",
    { flag: "a" }
  );
}

// Exit non-zero only if every URL failed — otherwise a partial run is fine.
if (results.failed.length === urls.length) {
  console.error("All URLs failed to fetch.");
  process.exit(1);
}
