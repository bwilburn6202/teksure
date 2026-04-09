# LLM Knowledge Bases

Using large language models to build, maintain, and query structured knowledge bases stored as plain markdown files. Pioneered publicly by Andrej Karpathy (April 2026), this approach replaces traditional note-taking apps and databases with a simple folder structure that an AI agent maintains autonomously.

**Tags:** #ai-industry #workflow #content-strategy #tool

## Core Concept

Instead of keeping notes scattered across apps, you dump raw sources into one folder and have an AI compile them into an organized wiki. The AI handles all organization, linking, summarization, and maintenance. You interact with the knowledge base by asking questions and filing answers back in.

## Architecture

```
project/
  raw/       → unprocessed source material (never modified by AI)
  wiki/      → AI-maintained organized articles with backlinks
  outputs/   → generated reports, answers, analyses
  SCHEMA.md  → rules and structure the AI follows
```

## Key Principles

1. **AI owns the wiki** — you rarely edit it directly
2. **Schema file is the instruction manual** — tells the AI how to organize, link, and maintain content
3. **Compounding loop** — every query and its output can be filed back, making the next query better (see [[compounding-knowledge-loop]])
4. **No fancy tooling needed** — folders + markdown + AI agent. No database, no RAG at small scale (~100 articles / ~400K words)
5. **Health checks prevent drift** — monthly LLM review catches contradictions, missing sources, and gaps

## Tools & Implementation

- **Schema file:** CLAUDE.md / AGENTS.md in project root (see [[ai-content-pipeline-patterns]])
- **Source collection:** Obsidian Web Clipper, agent-browser CLI (Vercel Labs, 26K+ GitHub stars, 82% fewer tokens than Playwright MCP)
- **Frontend:** Any text editor — Obsidian, VS Code, terminal. The AI doesn't care.
- **Compilation prompt:** "Read everything in raw/. Compile a wiki in wiki/ following SCHEMA.md rules. Create INDEX.md first, then one .md per topic."

## TekSure Application

This pattern directly maps to how TekSure can manage its content pipeline:

| Karpathy Pattern | TekSure Equivalent |
|------------------|-------------------|
| raw/ sources | Competitor articles, trending topics, user feedback, research |
| wiki/ articles | Content strategy docs, guide planning, audience insights |
| outputs/ | Content briefs, gap analyses, weekly enrichment plans |
| Health checks | Content freshness checks (Wednesday 8:41 AM task) |
| Compounding loop | Guide stubs → published guides → ratings → improved guides |

## Sources
- [[raw/karpathy-llm-knowledge-bases-2026-04-04.md]]
- [[raw/spisak-knowledge-base-implementation-2026-04-05.md]]

## Related
- [[ai-content-pipeline-patterns]]
- [[compounding-knowledge-loop]]
