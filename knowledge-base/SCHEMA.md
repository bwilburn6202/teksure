# TekSure Knowledge Base Schema

## What This Is
A knowledge base for TekSure's content pipeline, product strategy, industry trends, and research. This is the central repository of knowledge that informs guide creation, feature development, and content strategy decisions.

## How It's Organized
- `raw/` — Unprocessed source material (articles, tweets, research, screenshots, competitor analysis). **Never modify these files.** Filename format: `source-topic-YYYY-MM-DD.md`
- `wiki/` — AI-maintained organized wiki. Every topic gets its own `.md` file. AI maintains this entirely — humans rarely edit directly.
- `outputs/` — Generated reports, analyses, content briefs, and research answers. Filed back into wiki when valuable.

## Wiki Rules
- Every topic gets its own `.md` file in `wiki/`
- Every wiki file starts with a one-paragraph summary
- Link related topics using `[[topic-name]]` format
- Maintain `wiki/INDEX.md` listing every topic with a one-line description
- When new raw sources are added, update relevant wiki articles
- Tag articles with categories: `#content-strategy`, `#tech-trends`, `#competitor`, `#audience-insight`, `#tool`, `#workflow`, `#ai-industry`
- Include source attribution — link back to `raw/` files

## Content Pipeline Integration
- Raw research informs weekly guide creation (Monday 7:23 AM enrichment task)
- Wiki articles about trends feed into content gap analysis
- Competitor insights feed into feature prioritization (evolution-state.json)
- Audience research feeds into brand voice and guide tone

## Focus Areas
1. **Senior tech education trends** — what topics are trending, what seniors struggle with most
2. **AI tools and workflows** — new tools, techniques, and patterns for content creation and site improvement
3. **Content pipeline optimization** — better ways to create, organize, and deliver guides
4. **Competitor analysis** — what other tech education platforms are doing
5. **Accessibility and UX research** — best practices for senior-friendly digital experiences

## Health Check Rules (Run Monthly)
- Flag contradictions between wiki articles
- Find topics mentioned but never explained
- List claims not backed by a source in `raw/`
- Suggest 3-5 new articles to fill knowledge gaps
- Check for outdated information (older than 3 months without review)
