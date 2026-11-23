# ChatGPT Ads doc monitor

Snapshots of the OpenAI ChatGPT Ads help articles that back
`/chatgpt-ads`. The **ChatGPT Ads Doc Monitor** GitHub Action
(`.github/workflows/chatgpt-ads-monitor.yml`) runs every Monday at
08:00 UTC, uses headless Chromium to render each URL in `urls.txt`,
updates `snapshots/<slug>.txt`, and opens a PR whenever anything
changed. Runs are visible under the Actions tab of
`github.com/andraizzz/andraizzz`. Trigger it manually from the
Actions tab (**Run workflow**) any time you want an immediate check.

## Files

- `urls.txt` — the source of truth for which help articles are watched. One URL per line. `#` starts a comment. Edit this freely; new URLs are auto-seeded on the next run.
- `snapshots/<slug>.txt` — cleaned article text for each URL. `<slug>` is the last path segment of the URL (for example `20001206-ads-manager-beta-overview.txt`).
- `last-verified.txt` — ISO date of the most recent verification run.

## What "meaningful change" means

- **Substantive:** new feature, new creative format (aspect ratio, video, carousels), new country/currency availability, changed advertiser eligibility, new bidding or measurement capability, new pricing signal, new restriction, new required setup step, new supported campaign type, new policy.
- **Non-substantive:** wording tweaks, reordering, punctuation, the dynamic `Updated: X ago` line, link-only changes.

Only substantive changes update `app/chatgpt-ads/page.tsx`. Non-substantive
weeks just bump `last-verified.txt`.
