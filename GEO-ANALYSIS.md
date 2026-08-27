# GEO Analysis - Bảo Trang Transport

Analyzed: 2026-08-27
URL: https://baotrangtransport.com/
Business type: Local private transfer / contract transport service

## GEO Readiness Score: 86/100

Previous AI-search readiness from the cached SEO audit was 47/100. After this pass, the site has stronger crawler access, a generated `llms.txt`, citable answer blocks, and richer service/entity schema. Remaining gaps are mostly off-site brand mentions and first-party proof.

## Platform Breakdown

| Platform | Score | Notes |
| --- | ---: | --- |
| Google AI Overviews | 88 | Static/SSG pages, strong route content, canonical URLs, clear headings and tables. Traditional top-10 ranking work still matters. |
| ChatGPT Search | 87 | `OAI-SearchBot` and `ChatGPT-User` are explicitly allowed; `llms.txt` and `Link: rel="describedby"` help discovery. |
| Perplexity | 86 | `PerplexityBot` and `Perplexity-User` are explicitly allowed; route-specific pages answer destination questions cleanly. |
| Claude Search | 84 | Claude crawlers are explicitly allowed; content is server-rendered and extractable. |

## AI Crawler Access Status

Implemented explicit allow rules in `src/app/robots.ts` for:

- `OAI-SearchBot`
- `ChatGPT-User`
- `GPTBot`
- `PerplexityBot`
- `Perplexity-User`
- `ClaudeBot`
- `Claude-User`
- `Claude-SearchBot`
- `anthropic-ai`

All public content remains allowed through the wildcard rule, while private/system-like paths remain disallowed: `/admin/`, `/cgi-bin/`, `/tmp/`, `/private/`.

## llms.txt Status

Implemented `/llms.txt` via `src/app/llms.txt/route.ts`, generated from `src/content/llms.ts`.

The file includes:

- Canonical domain and business identity
- Service area and contact signals
- Main pages, route guides and planning guides
- AI usage guidance for canonical citations and service terminology

Also implemented HTTP discoverability through `Link: </llms.txt>; rel="describedby"; type="text/markdown"` in `next.config.ts` for the homepage, privacy page and blog/article routes.

## Brand Mention Analysis

Current owned/onsite entity signals:

- Brand name: Bảo Trang Transport
- Canonical domain: `baotrangtransport.com`
- Phone/Zalo: `0826 430 430`
- Facebook: configured in `src/lib/site.ts`
- Organization, TaxiService, BlogPosting and Service JSON-LD present

Remaining off-site gaps:

- No verified Wikipedia/Wikidata entity found or configured.
- No verified YouTube, LinkedIn, Google Business Profile or Reddit/community mention data available in this workspace.
- DataForSEO LLM mention tracking was not available as a callable MCP tool in this session.

## Passage-Level Citability

Implemented self-contained answer blocks on:

- Homepage: "Bảo Trang Transport cung cấp dịch vụ gì?"
- Route pages: "X là dịch vụ gì?" answer blocks for Hải Lăng, Đông Hà, sân bay Đà Nẵng đi Quảng Trị, La Vang and Lao Bảo
- Bridge page: "Xe ghép Đà Nẵng - Quảng Trị nên hiểu thế nào?"

These blocks are designed to answer the query directly before details, tables, FAQs and CTAs.

## Server-Side Rendering Check

The core content is rendered by Next.js App Router as static HTML/SSG. Article text, dates, JSON-LD, robots, sitemap and `llms.txt` do not depend on client-side JavaScript.

## Top 5 Highest-Impact Changes Completed

1. Added a generated `/llms.txt` file for AI discovery.
2. Added `Link: rel="describedby"` headers pointing to `/llms.txt`.
3. Explicitly allowed major AI search/fetch crawlers in `robots.txt`.
4. Added answer-first GEO passages to the homepage and key route pages.
5. Expanded BlogPosting JSON-LD with Service, area served, place mentions, sameAs and free-access signals.

## Schema Recommendations

Completed:

- Organization/Taxiservice/Website schema on homepage.
- BlogPosting schema on articles.
- Service/areaServed/mentions enhancements for article discoverability.

Recommended next when real data is available:

- Add Person schema only if the owner/operator author name, role and credentials are approved for publication.
- Add review/testimonial schema only if reviews are real, attributable and policy-compliant.
- Add Google Business Profile URL to `sameAs` when confirmed.

## Content Reformatting Suggestions

Next content improvements:

- Expand each route page to 1,500+ words if it should compete as a full blog article.
- Add one original local proof block per route: pickup examples, travel-time notes, real service coverage, or verified customer questions.
- Add photos or short route-specific media where available, especially for airport pickup and popular Quảng Trị destinations.

## Sources Checked

- OpenAI crawler docs: https://developers.openai.com/api/docs/bots
- Perplexity crawler docs: https://docs.perplexity.ai/docs/resources/perplexity-crawlers
- Anthropic crawler docs: https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- llms.txt v2 proposal: https://llmstxt.org/
