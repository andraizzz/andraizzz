# ChatGPT Ads doc monitor

Snapshots of the OpenAI Ads Manager Beta help articles that back
`/chatgpt-ads`. A weekly scheduled Claude agent re-fetches both URLs,
diffs against these snapshots, and pings if anything changes.

Sources
- https://help.openai.com/en/articles/20001206-ads-manager-beta-overview
- https://help.openai.com/en/articles/20001213-ads-manager-beta-account-setup

Files
- `overview.txt` — extracted article text for the overview page
- `account-setup.txt` — extracted article text for the account-setup page
- `last-verified.txt` — ISO date of the most recent verification

If any diff is non-trivial, update `app/chatgpt-ads/page.tsx` and the
`lastVerified` constant, then overwrite these snapshots with the new text.
