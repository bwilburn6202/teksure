# LLM Knowledge Bases

Using large language models to build, maintain, and query structured knowledge bases stored as plain markdown files. Popularized publicly by Andrej Karpathy (April 2026), this approach replaces scattered note apps with a simple folder structure that an AI agent can maintain.

**Tags:** #ai-industry #workflow #content-strategy #tool

## Core Concept

Put source material into `raw/`, let AI maintain `wiki/`, and store generated analyses in `outputs/`. The system improves through repeated use as long as updates are governed by a schema and periodic quality checks.

## Canonical Architecture

```
project/
  raw/       → unprocessed source material (never modified by AI)
  wiki/      → AI-maintained organized articles with backlinks
  outputs/   → generated reports, answers, analyses
  SCHEMA.md  → rules and structure the AI follows
```

## Eight-Step Operating Workflow

1. Create `raw/`, `wiki/`, and `outputs/`.
2. Collect and dump source material in `raw/` without manually organizing first.
3. Optionally automate collection from the web with browser automation tooling.
4. Define behavior in one schema file (`SCHEMA.md`, `CLAUDE.md`, or `AGENTS.md`).
5. Instruct the AI to compile `wiki/INDEX.md` first, then topic pages.
6. Ask questions across the wiki and save high-value answers into `outputs/`.
7. Feed validated outputs back into relevant wiki pages.
8. Run recurring health checks to prevent contradiction and source drift.

## Key Principles

1. **AI owns wiki maintenance** — humans review, steer, and validate.
2. **Schema is mandatory** — clear rules prevent random structure changes.
3. **Compounding loop** — the system gets better as validated outputs are folded back in (see [[compounding-knowledge-loop]]).
4. **Flat files beat complexity at small and medium scale** — markdown and folders are enough for many workflows.
5. **Quality checks are non-optional** — unverified outputs can compound errors over time.

## Tooling Notes

- **Schema file:** project-level `SCHEMA.md` (or equivalent instruction file)
- **Collection options:** manual copy/paste, exports from note tools, automated browser capture
- **Optional automation:** `agent-browser` CLI for dynamic page extraction workflows
- **Compilation prompt pattern:** “Read everything in `raw/` and compile `wiki/` following `SCHEMA.md` rules.”

## TekSure Application

| Knowledge-Base Pattern | TekSure Equivalent |
|------------------------|-------------------|
| `raw/` sources | Competitor articles, trends, user feedback, research notes |
| `wiki/` | Content strategy docs, guide planning, audience insights |
| `outputs/` | Briefs, gap analyses, publishing recommendations |
| Health checks | Existing content freshness and quality audits |

## Sources
- [[raw/spisak-knowledge-base-implementation-2026-04-06.md]]

## Related
- [[ai-content-pipeline-patterns]]
- [[compounding-knowledge-loop]]
