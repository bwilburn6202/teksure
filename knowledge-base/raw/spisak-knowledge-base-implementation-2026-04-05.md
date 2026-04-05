# LLM Knowledge Base: Step-by-Step Implementation — Nick Spisak
**Source:** https://x.com/nickspisak_/status/2040448463540830705
**Date:** 2026-04-05
**Author:** Nick Spisak (@NickSpisak_)
**Context:** Practical breakdown of Karpathy's LLM Knowledge Base concept

## Summary

Nick Spisak took Karpathy's concept and turned it into an actionable 8-step playbook. Key additions beyond Karpathy's original: automated source collection with agent-browser, the schema file (CLAUDE.md/AGENTS.md) as the "one-file" that makes the system work, and the compounding loop of filing outputs back into the wiki.

## The 8-Step System

### 1. Create Three Folders (2 Minutes)
```
my-knowledge-base/
  raw/          (source material - articles, notes, screenshots)
  wiki/         (AI-maintained organized version)
  outputs/      (answers, reports, research AI generates)
```
Same structure Karpathy uses. raw/ is the junk drawer, wiki/ is AI-organized, outputs/ stores Q&A results.

### 2. Fill Your Raw Folder (10 Minutes)
Dump everything in: copy-paste articles as .md/.txt, screenshots, exported notes, meeting notes, research papers, bookmarks. Don't organize or rename — that's the AI's job.

### 3. Automate Source Collection With Agent Browser (Optional)
Vercel Labs' agent-browser — free CLI, 26K+ GitHub stars:
```
npm install -g agent-browser
agent-browser install
agent-browser open https://some-article-you-want.com
agent-browser get text "article"
```
- Handles JavaScript-heavy sites, pages behind logins, dynamic content
- Uses 82% fewer tokens than Playwright MCP (5-6x more pages per session)
- Workflow: tell AI "scrape this URL and save it to raw/"

### 4. Write Your Schema File (5 Minutes)
Create CLAUDE.md (or AGENTS.md/README.md) in project root. This is the AI's instruction manual:
```markdown
# Knowledge Base Schema

## What This Is
A personal knowledge base about [YOUR TOPIC].

## How It's Organized
- raw/ contains unprocessed source material. Never modify these files.
- wiki/ contains the organized wiki. AI maintains this entirely.
- outputs/ contains generated reports, answers, and analyses.

## Wiki Rules
- Every topic gets its own .md file in wiki/
- Every wiki file starts with a one-paragraph summary
- Link related topics using [[topic-name]] format
- Maintain an INDEX.md in wiki/ listing every topic with one-line description
- When new raw sources are added, update relevant wiki articles

## My Interests
[List 3-5 focus areas]
```
Karpathy confirmed he keeps his schema "super simple and flat" in an AGENTS.md file.

### 5. Tell Your AI to Compile the Wiki (15 Minutes)
Prompt: "Read everything in raw/. Then compile a wiki in wiki/ following the rules in CLAUDE.md. Create an INDEX.md first, then create one .md file per major topic. Link related topics. Summarize every source."

Key rule: **you don't edit the wiki by hand.** You read it, ask questions, and the AI keeps it updated.

### 6. Ask Questions and Save the Answers (Ongoing)
Example queries once wiki has 10+ articles:
- "What are the three biggest gaps in my understanding of [topic]?"
- "Compare what source A says vs source B. Where do they disagree?"
- "Write me a 500-word briefing on [topic] using only this knowledge base."

Save answers back to outputs/ or update wiki articles. **Every question makes the next answer better.** That's the compounding loop.

### 7. Run a Health Check (Monthly)
Prompt: "Review the entire wiki/. Flag contradictions. Find topics mentioned but never explained. List claims not backed by raw/ sources. Suggest 3 new articles to fill gaps."

Important insight from @HFloyd: "When outputs get filed back, errors compound too." Health checks prevent error accumulation.

### 8. Keep It Simple
Karpathy's actual setup: "I'm trying to keep it super simple and flat. It's just a nested directory of .md files."

A folder of text files + a schema file = the entire product. The AI doesn't care what app opens the files.

## Key Takeaways
- **No special software needed** — folders + markdown + AI
- **The schema file is the secret weapon** — tells AI the rules
- **Compounding loop** — outputs feed back into wiki, making it smarter
- **Health checks prevent error drift** — run monthly
- **agent-browser for automated collection** — optional but powerful
- **41K people bookmarked Karpathy's post** — difference between bookmarking and benefiting is one weekend of setup
