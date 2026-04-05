# AI Content Pipeline Patterns

Patterns and techniques for using AI agents to automate content creation, organization, quality assurance, and delivery. These patterns apply directly to TekSure's guide creation and maintenance workflow.

**Tags:** #workflow #content-strategy #ai-industry

## Pattern 1: Schema-Driven Content Generation

A single schema file (CLAUDE.md, AGENTS.md) defines the rules, structure, and voice for all AI-generated content. The AI reads the schema before every operation to stay consistent.

**TekSure implementation:** CLAUDE.md already serves this role — defines guide format, brand voice, categories, and approved sources. The knowledge base SCHEMA.md extends this to research and strategy.

## Pattern 2: Incremental Compilation

Raw unstructured input is "compiled" into structured output in stages:
1. Raw sources collected (articles, notes, screenshots)
2. AI summarizes and categorizes each source
3. AI creates topic articles linking related sources
4. AI maintains an index for fast lookup

**TekSure implementation:** 
- Raw: trending topics, competitor content, user questions, FTC/AARP alerts
- Compiled: guide stubs in `.claude/guide-stubs-*.ts`
- Published: full guides in `src/data/guides.ts`
- The knowledge base adds a research layer before the stub stage

## Pattern 3: Automated Source Collection

Tools like agent-browser (Vercel Labs) or web clippers automate pulling source material into the raw/ folder. Eliminates manual copy-paste.

**TekSure implementation:** The admin ContentPipeline already scrapes and simplifies articles. The knowledge base raw/ folder extends this to broader research (trends, competitor analysis, audience insights) beyond just guide content.

## Pattern 4: Compounding Knowledge Loop

See [[compounding-knowledge-loop]] for details. Outputs from queries get filed back into the knowledge base, making subsequent queries richer.

## Pattern 5: LLM Health Checks / Linting

Periodic AI review of the entire knowledge base to:
- Flag contradictions between articles
- Find topics mentioned but never explained
- Identify claims without source backing
- Suggest new articles to fill gaps
- Detect outdated information

**TekSure implementation:** Maps directly to the `content-freshness-check` (Wednesday 8:41 AM) and `daily-site-health` (6:47 AM) scheduled tasks. Extend these to also lint the knowledge base.

## Sources
- [[raw/karpathy-llm-knowledge-bases-2026-04-04.md]]
- [[raw/spisak-knowledge-base-implementation-2026-04-05.md]]

## Related
- [[llm-knowledge-bases]]
- [[compounding-knowledge-loop]]
