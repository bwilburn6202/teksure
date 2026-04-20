# TekSure.com — Full SEO Audit & Development Evolution Plan

**Date:** April 1, 2026
**Domain:** teksure.com
**Audit Type:** Full Site Audit + Development Roadmap
**Prepared for:** Bailey Wilburn

---

## Executive Summary

TekSure has a strong content foundation with 341 guides across 12 categories, solid UX for its target audience (seniors and non-technical users), and good feature depth including bookings, forum, ratings, and PWA support. However, **critical SEO infrastructure is completely missing** — no meta tags per page, no schema markup, no sitemap, no robots.txt, and the site appears to have zero Google indexation. The site is currently invisible to search engines despite having content that could rank for hundreds of valuable keywords.

**Biggest strength:** Massive guide library (341 guides) covering topics seniors actively search for, plus interactive tools that competitors lack.

**Top 3 priorities that will have the most impact:**

1. **Implement page-level meta tags** (react-helmet-async) — every page needs a unique title and description
2. **Add sitemap.xml + robots.txt + submit to Google Search Console** — the site isn't indexed at all
3. **Add HowTo and FAQ schema markup** to guide pages — this alone could win featured snippets for "how to" queries

**Overall assessment:** Strong content, zero SEO infrastructure. Fixing the technical foundation will unlock significant organic traffic potential in a niche with moderate competition and high user intent.

---

## Keyword Opportunity Table

| Keyword | Est. Difficulty | Opportunity Score | Current Ranking | Intent | Recommended Content Type |
|---------|----------------|-------------------|-----------------|--------|--------------------------|
| how to use iphone for seniors | Moderate | **High** | Not indexed | Informational | Guide + video |
| tech support for seniors | Hard | **High** | Not indexed | Commercial | Landing page |
| free tech help for beginners | Easy | **High** | Not indexed | Informational | Homepage optimization |
| how to back up photos on phone | Moderate | **High** | Not indexed | Informational | Guide (HowTo schema) |
| how to set up wifi at home | Moderate | **High** | Not indexed | Informational | Guide (HowTo schema) |
| how to avoid phone scams | Easy | **High** | Not indexed | Informational | Guide (Safety category) |
| how to use zoom for beginners | Hard | **Medium** | Not indexed | Informational | Guide + video |
| computer help for seniors near me | Easy | **High** | Not indexed | Transactional/Local | Booking landing page |
| how to make text bigger on phone | Easy | **High** | Not indexed | Informational | Guide (Accessibility) |
| how to use social media safely | Easy | **High** | Not indexed | Informational | Guide (Safety) |
| best apps for seniors 2026 | Moderate | **High** | Not indexed | Commercial | App Recommender tool |
| how to check if email is a scam | Easy | **High** | Not indexed | Informational | Guide (Safety) |
| digital literacy for older adults | Moderate | **Medium** | Not indexed | Informational | Pillar page |
| how to use AI for beginners | Hard | **Medium** | Not indexed | Informational | Guide (AI category) |
| warranty check for electronics | Easy | **High** | Not indexed | Transactional | Warranty Checker tool |
| how to connect bluetooth speaker | Easy | **High** | Not indexed | Informational | Guide (HowTo) |
| how to clear phone storage | Easy | **High** | Not indexed | Informational | Guide (HowTo) |
| remote tech support for elderly | Easy | **High** | Not indexed | Transactional | Booking page |
| how to protect personal data online | Moderate | **Medium** | Not indexed | Informational | Guide (Safety) |
| telehealth for seniors how to | Easy | **High** | Not indexed | Informational | Guide (Health Tech) |
| how to video call on android | Easy | **High** | Not indexed | Informational | Guide (HowTo) |
| password manager for beginners | Moderate | **Medium** | Not indexed | Commercial | Guide + tool |
| how to update apps on iphone | Easy | **High** | Not indexed | Informational | Guide (HowTo) |
| free computer classes for seniors | Moderate | **Medium** | Not indexed | Informational | Guides hub page |
| tech troubleshooting help | Moderate | **Medium** | Not indexed | Commercial | Troubleshooter tool |

---

## On-Page Issues Table

| Page | Issue | Severity | Recommended Fix |
|------|-------|----------|-----------------|
| All pages | No per-page `<title>` tags | **Critical** | Install react-helmet-async, set unique titles per route |
| All pages | No `<meta description>` | **Critical** | Add compelling descriptions (150-160 chars) per page |
| All pages | No canonical URLs | **High** | Add `<link rel="canonical">` on every page |
| All pages | No Open Graph / Twitter Card tags | **High** | Add OG title, description, image per page |
| Homepage | H1 exists but doesn't include target keyword | **Medium** | Update H1 to include "tech help for seniors" or similar |
| Homepage | No Organization schema | **High** | Add JSON-LD Organization + LocalBusiness schema |
| GuidesIndex | No H1 tag (only H2s) | **Medium** | Add H1: "Free Technology Guides for Beginners" |
| GuideDetail | No HowTo schema | **Critical** | Add JSON-LD HowTo schema with steps |
| GuideDetail | No breadcrumb navigation | **Medium** | Add breadcrumbs: Home > Guides > [Category] > [Guide] |
| GuideDetail | No AggregateRating schema | **High** | Connect guide_ratings to schema markup |
| Forum pages | No page-level meta tags | **High** | Dynamic titles: "[Thread Title] — TekSure Forum" |
| Booking page | No LocalBusiness schema | **High** | Add schema for service area, pricing, booking action |
| Tools pages | No FAQ schema | **Medium** | Add FAQ schema to tool landing pages |
| All images | LazyImage component missing alt text enforcement | **Medium** | Require descriptive alt text in LazyImage component |
| Site-wide | No robots.txt | **Critical** | Create with crawl directives, disallow /admin |
| Site-wide | No sitemap.xml | **Critical** | Generate dynamic sitemap from routes + guides |

---

## Content Gap Recommendations

### Gap 1: Health & Wellness Technology
- **Keywords:** telehealth for seniors, health monitoring apps, how to use patient portal
- **Why it matters:** Only 3 guides in this category; AARP reports AI health monitoring interest doubled in 2025-2026. High search demand, very low competition.
- **Format:** 10-15 step-by-step guides + pillar page
- **Priority:** **High**
- **Effort:** Substantial (multi-day)

### Gap 2: Safety & Privacy Guides
- **Keywords:** how to avoid scams, protect personal data, is this email safe, phone scam protection
- **Why it matters:** Only 12 guides; 85% of adults 50-64 are concerned about online privacy (AARP). Massive search volume for scam-related queries.
- **Format:** 15-20 guides + "Is This a Scam?" interactive checker tool
- **Priority:** **High**
- **Effort:** Substantial (multi-day)

### Gap 3: Comparison & "Best Of" Content
- **Keywords:** best apps for seniors, best phone for grandparents, cheapest internet for seniors
- **Why it matters:** Competitors like Cyber-Seniors and Senior Planet don't do product comparisons. Commercial intent = higher conversion.
- **Format:** Comparison pages, "Best X for Seniors 2026" articles
- **Priority:** **High**
- **Effort:** Moderate (half day per article)

### Gap 4: Local Service Landing Pages
- **Keywords:** tech support [city], computer help near me, in-home tech support seniors
- **Why it matters:** TekSure's booking system is a competitive advantage. No competitor has this. Local SEO pages could capture high-intent transactional searches.
- **Format:** City-specific landing pages for booking
- **Priority:** **Medium**
- **Effort:** Moderate (template + city data)

### Gap 5: Video Content & Transcripts
- **Keywords:** how to [task] video tutorial seniors
- **Why it matters:** Senior Planet and Cyber-Seniors both have video libraries. Video results dominate "how to" SERPs. Transcripts add crawlable text content.
- **Format:** Embed videos in existing guides + add transcripts
- **Priority:** **Medium**
- **Effort:** Substantial

### Gap 6: FAQ Hub / Knowledge Base
- **Keywords:** People Also Ask queries across all tech help topics
- **Why it matters:** FAQ schema + PAA alignment = featured snippet potential. No competitor has a dedicated FAQ hub.
- **Format:** FAQ page with 50-100 common questions, grouped by topic
- **Priority:** **Medium**
- **Effort:** Moderate

---

## Technical SEO Checklist

| Check | Status | Details |
|-------|--------|---------|
| Page speed (lazy loading) | **Pass** | LazyImage component, code splitting via lazy routes |
| Mobile-friendliness | **Pass** | Tailwind CSS responsive design, mobile-first approach |
| Service worker / PWA | **Pass** | Offline guide caching already implemented |
| HTTPS | **Pass** | Supabase hosting uses HTTPS |
| robots.txt | **Fail** | Not present — must create |
| XML sitemap | **Fail** | Not present — must generate |
| Canonical URLs | **Fail** | Not implemented on any page |
| Structured data (JSON-LD) | **Fail** | Zero schema markup anywhere |
| Meta tags per page | **Fail** | No react-helmet or equivalent |
| Open Graph tags | **Fail** | No social sharing optimization |
| Core Web Vitals (LCP) | **Warning** | No measurement in place; custom font loading may impact LCP |
| Core Web Vitals (CLS) | **Warning** | LazyImage without explicit dimensions could cause layout shift |
| Broken links | **Warning** | External links in TrendingTopics/TechNews need periodic checking |
| Duplicate content | **Warning** | Filtered/paginated guide pages may create duplicates without canonical tags |
| Breadcrumb navigation | **Fail** | Not implemented |
| Alt text on images | **Warning** | LazyImage component doesn't enforce alt text |
| Google Search Console | **Fail** | Site not indexed; GSC not connected |
| Server-side rendering | **Fail** | Client-side SPA only; crawlers see minimal initial HTML |

---

## Competitor Comparison Summary

| Dimension | TekSure | Cyber-Seniors | Senior Planet (OATS) | Golden Age Tech |
|-----------|---------|---------------|----------------------|-----------------|
| Guide/content count | 341 guides | ~50 webinars | ~200 articles | ~30 blog posts |
| Schema markup | None | Organization + Breadcrumb | Organization + Breadcrumb + WebSite | Basic |
| Meta tags per page | Missing | Present | Present | Present |
| Sitemap | Missing | Present | Present | Present |
| Interactive tools | 4 (App Recommender, Warranty, Backup, Troubleshooter) | None | None | None |
| Booking system | Yes (with Stripe) | No | No | Yes |
| Community forum | Yes | No (webinar comments only) | Limited | No |
| PWA / Offline | Yes | No | No | No |
| AI Assistant | Yes (TekBot) | No | No | No |
| Video content | Partial (some guides) | Extensive | Extensive | Moderate |
| Publishing frequency | ~341 total | Weekly webinars | 2-3/week | 1-2/month |
| Google indexation | **0 pages** | **Thousands** | **Thousands** | **Dozens** |
| Mobile optimization | Excellent | Good | Good | Good |
| Accessibility focus | Strong (design principles) | Good | Good | Basic |

**Key takeaway:** TekSure has the strongest feature set and largest guide library of any competitor, but is completely invisible to search engines. Fixing indexation alone would be transformative.

---

## Prioritized Action Plan

### Quick Wins (Do This Week)

**1. Create robots.txt** (30 min, Impact: Critical)
```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /customer
Disallow: /tech
Sitemap: https://teksure.com/sitemap.xml
```

**2. Install react-helmet-async and add meta tags** (2-3 hours, Impact: Critical)
- Install package
- Create an SEO component that wraps each page
- Add unique title + meta description to every route
- Homepage title: "TekSure — Free Tech Help & Guides for Seniors & Beginners"
- Guide pages: "[Guide Title] — Step-by-Step Guide | TekSure"

**3. Generate sitemap.xml** (1-2 hours, Impact: Critical)
- Create a build-time script that generates sitemap from routes + guides data
- Include all 341 guide URLs, tool pages, forum, and core pages
- Set `<lastmod>` dates and `<changefreq>` values

**4. Submit to Google Search Console** (30 min, Impact: Critical)
- Verify domain ownership
- Submit sitemap
- Request indexing of key pages

**5. Add HowTo schema to guide detail pages** (1-2 hours, Impact: High)
- Each guide already has structured steps — map to HowTo schema
- Include step names, descriptions, and time estimates
- This format is eligible for rich results in Google

**6. Fix image alt text** (1 hour, Impact: Medium)
- Update LazyImage component to require alt prop
- Audit existing images and add descriptive alt text

### Strategic Investments (Plan for This Quarter)

**7. Add Organization + LocalBusiness schema** (2 hours, Impact: High)
- Organization schema on homepage with name, URL, logo, social profiles
- LocalBusiness schema on booking pages with service area and pricing
- Depends on: None

**8. Build a pre-rendering solution** (4-6 hours, Impact: High)
- Install vite-plugin-prerender or similar
- Pre-render at least the homepage, guides index, and top 50 guide pages
- This ensures crawlers see full HTML content, not empty SPA shells
- Depends on: Meta tags in place first

**9. Create breadcrumb navigation** (2-3 hours, Impact: Medium)
- Add visual breadcrumbs on guide detail, tool, and forum pages
- Add BreadcrumbList schema markup
- Improves both UX (especially for seniors) and SEO

**10. Expand Health & Wellness Tech category** (Multi-day, Impact: High)
- Write 10-15 new guides covering telehealth, health apps, patient portals
- Target high-demand, low-competition keywords
- Depends on: Meta tags and indexation in place

**11. Expand Safety & Privacy category** (Multi-day, Impact: High)
- Write 15-20 new guides covering scam detection, data protection, safe browsing
- Consider building an "Is This a Scam?" interactive tool
- Depends on: Meta tags and indexation in place

**12. Build FAQ hub page** (Half day, Impact: Medium)
- Consolidate common questions from across guides into a central FAQ
- Add FAQPage schema markup for featured snippet eligibility
- Target People Also Ask queries

**13. Add Open Graph + Twitter Card meta tags** (1 hour, Impact: Medium)
- Ensure every page has og:title, og:description, og:image
- Add twitter:card tags
- Creates rich previews when content is shared on social media
- Depends on: react-helmet-async installed

**14. Implement internal linking strategy** (Ongoing, Impact: High)
- Add "Related Guides" section to every guide detail page
- Link between guides in the same category
- Add contextual cross-links in guide step content
- Depends on: Guide data structure supports relationships

**15. Create "Best Of" comparison content** (Multi-day, Impact: High)
- "Best Phones for Seniors 2026," "Best Apps for Staying Safe Online"
- Commercial intent keywords with high conversion potential
- No competitor in this niche does comparison content well

---

## Development Evolution Plan

Based on both the SEO findings and the current codebase state, here is the recommended development sequence:

### Phase 1: SEO Foundation (Week 1)
1. `react-helmet-async` integration with SEO wrapper component
2. robots.txt + sitemap.xml generation
3. HowTo + Organization schema (JSON-LD)
4. Google Search Console setup

### Phase 2: Content Infrastructure (Week 2)
5. Breadcrumb navigation component
6. "Related Guides" component with internal linking
7. FAQ hub page with FAQPage schema
8. AggregateRating schema connected to guide_ratings

### Phase 3: Content Expansion (Weeks 3-4)
9. Health & Wellness Tech guides (10-15 new)
10. Safety & Privacy guides (15-20 new)
11. "Best Of" comparison articles (5-8 new)
12. FAQ content (50-100 questions)

### Phase 4: Technical Performance (Week 5)
13. Pre-rendering for top pages
14. Image optimization audit (alt text + sizing for CLS)
15. Internal link audit and optimization
16. Core Web Vitals measurement setup

### Phase 5: Growth & Measurement (Ongoing)
17. Weekly content publishing cadence
18. Monthly SEO performance review via Search Console
19. Quarterly competitor benchmarking
20. Link building outreach to senior-focused organizations

---

## Sources

- [Cyber-Seniors](https://cyberseniors.org/) — Competitor analysis
- [Senior Planet / OATS](https://oats.org/) — Competitor analysis
- [AARP 2026 Technology Trends for Older Adults](https://www.aarp.org/pri/topics/technology/internet-media-devices/2026-technology-trends-older-adults/) — Market data
- [Vertical Institute — New Skills for Seniors 2026](https://verticalinstitute.com/blog/new-skills-for-seniors-to-learn/) — Content trends
- [Golden Age Tech Support](https://www.goldenagetechsupport.com/blog/5-simple-tech-habits-every-senior-should-start-this-year) — Competitor analysis
- [That Tech Jeff — Best Tech Support for Seniors 2026](https://thattechjeff.com/best-tech-support-for-seniors/) — Market landscape
- [Keywords Everywhere — Technology Keywords](https://keywordseverywhere.com/ctl/top/technology-keywords) — Keyword research
