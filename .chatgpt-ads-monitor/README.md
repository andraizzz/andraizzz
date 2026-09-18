# ChatGPT Ads doc monitor

Snapshots of the OpenAI ChatGPT Ads help articles that back
`/chatgpt-ads`. A weekly scheduled Claude routine re-fetches every URL
listed in `urls.txt`, diffs against the corresponding snapshot in
`snapshots/`, and opens a PR whenever OpenAI publishes a meaningful
change.

## Files

- `urls.txt` — the source of truth for which help articles are watched. One URL per line. `#` starts a comment. Edit this freely; new URLs are auto-seeded on the next run.
- `snapshots/<slug>.txt` — cleaned article text for each URL. `<slug>` is the last path segment of the URL (for example `20001206-ads-manager-beta-overview.txt`).
- `last-verified.txt` — ISO date of the most recent verification run.

## What "meaningful change" means

- **Substantive:** new feature, new creative format (aspect ratio, video, carousels), new country/currency availability, changed advertiser eligibility, new bidding or measurement capability, new pricing signal, new restriction, new required setup step, new supported campaign type, new policy.
- **Non-substantive:** wording tweaks, reordering, punctuation, the dynamic `Updated: X ago` line, link-only changes.

Only substantive changes update `app/chatgpt-ads/page.tsx`. Non-substantive
weeks just bump `last-verified.txt`.
