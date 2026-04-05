# TekSure Knowledge Base Schema

## What This Is
A knowledge base for TekSure's content pipeline — tracking tech support trends, competitor insights, scam alerts, and content strategy for non-technical users and seniors (60+).

## Structure
- `raw/` — Unprocessed source material (articles, research, notes). Never modify files once saved. Filename format: `source-topic-YYYY-MM-DD.md`
- `wiki/` — AI-maintained wiki articles with summaries and backlinks. AI owns this directory.
- `outputs/` — Generated reports, analyses, content briefs, and trend summaries.

## Wiki Rules
- Every topic gets its own `.md` file in `wiki/`
- Every wiki file starts with a one-paragraph summary
- Link related topics using `[[topic-name]]` format
- Maintain `wiki/INDEX.md` listing every topic with a one-line description
- When new raw sources are added, update relevant wiki articles
- Include source attribution: link back to the raw file that informed each claim
- Flag any claim not backed by a raw source

## Topics
- Senior tech support trends and common questions
- Scam and fraud alerts (FTC, AARP, IC3 sources)
- Device and OS updates (iOS, Android, Windows, Mac)
- AI tools for non-technical users
- Digital literacy and accessibility
- Competitor content analysis
- Content gap identification

## Health Check Protocol (Monthly)
1. Flag contradictions between wiki articles
2. Find topics mentioned but never explained
3. List claims not backed by raw sources
4. Suggest 3-5 new articles to fill gaps
5. Update INDEX.md with any new or removed articles
