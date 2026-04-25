# ANDRA Website Handoff

Next.js App Router site for ANDRA: AI workflow audit, actionable insights, recommended tools, and consulting conversion paths.

## Quick Commands

```bash
npm install
npm run dev
npm run build
npx tsc --noEmit
npm audit --omit=dev
```

Notes:
- `npm run build` is the main release check.
- `npm run lint` has previously hung inside the Next/ESLint config path in this local environment. Prefer `npm run build`, `npx tsc --noEmit`, and `npm audit --omit=dev` until lint is debugged.

## Main Files

- Home page: `app/page.tsx`
- AI Workflow Audit: `app/ai-workflow-audit/page.tsx`
- Insights index: `app/insights/page.tsx`
- Insight article template: `app/insights/[slug]/page.tsx`
- Blog/article content: `lib/insights.ts`
- Recommended Tools page: `app/recommended-tools/page.tsx`
- Recommended tool URL source of truth: `lib/recommended-tool-links.ts`
- SEO helpers: `lib/seo.ts`
- Structured data helpers: `lib/schema.ts`
- Global layout, fonts, GA4, global schema: `app/layout.tsx`
- Security headers: `next.config.mjs`
- Public images: `public/`

## Adding Or Updating Blog Posts

1. Add or edit the post object in `lib/insights.ts`.
2. Put the JPEG hero image in `public/insights/`.
3. Set `imageSrc` and `imageAlt` in the post.
4. The article route is generated automatically from `slug`.
5. Run `npm run build`.

Inline links use markdown syntax:

```text
[AI Workflow Audit](/ai-workflow-audit)
```

Known recommended-tool names such as `Wispr Flow`, `Claude`, `ChatGPT`, and `Perplexity` are auto-linked in articles from `lib/recommended-tool-links.ts`.

## Recommended Tools Source Of Truth

All outbound/referral URLs for recommended tools should live in:

```text
lib/recommended-tool-links.ts
```

Do not hardcode those URLs in blog posts. Update the shared URL object, then the Recommended Tools page and article auto-links stay aligned.

## Analytics

GA4 is installed in `app/layout.tsx` with measurement ID:

```text
G-QPCFDEM7GK
```

Click tracking is handled by:

```text
components/analytics-click-tracker.tsx
```

Analytics does not appear as a visible section on the website. It shows in Google Analytics:

- Realtime
- Reports -> Engagement -> Events
- Admin -> Events / Key events, if you mark conversions

Current tracked event names include:

- `contact_click`
- `audit_click`
- `navigation_click`
- `recommended_tool_click`
- `inquiry_submit`

Useful event parameters:

- `event_category`
- `event_label`
- `destination`

Recommended GA4 key events:

- `contact_click`
- `audit_click`
- `inquiry_submit`
- `recommended_tool_click`

## SEO, GEO, And Schema

Current coverage:

- Global `Organization` and `WebSite` schema in `app/layout.tsx`
- Home `AboutPage` and breadcrumb schema
- AI Workflow Audit `WebPage`, `Service`, `FAQPage`, and breadcrumb schema
- Insights index `CollectionPage`, `ItemList`, and breadcrumb schema
- Every insight article `Article`, conditional `FAQPage`, and breadcrumb schema
- Recommended Tools `CollectionPage`, `ItemList`, and breadcrumb schema
- Legal pages `WebPage` and breadcrumb schema
- `/sitemap.xml`
- `/robots.txt`
- `/llms.txt`

When adding a new major page, use helpers from:

```text
lib/schema.ts
lib/seo.ts
```

## Images

Most website artwork is static JPEG in `public/insights/` or `public/ai-workflow-audit/`.

When replacing an image:

1. Keep the filename stable if the code already points to it.
2. Prefer JPEG for editorial artwork.
3. Run `npm run build`.
4. Commit only the intended image changes.

## Deployment

The working branch is `main`. Usual flow:

```bash
npm run build
git status --short
git add <changed-files>
git commit -m "Clear commit message"
git push origin main
```

Vercel/GitHub should deploy from `main`.

## Before Leaving The Site Alone

Run:

```bash
npm run build
npx tsc --noEmit
npm audit --omit=dev
git status --short
```

The repo should be clean before logging off.
