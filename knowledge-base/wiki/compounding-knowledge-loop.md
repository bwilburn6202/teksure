# Compounding Knowledge Loop

The feedback mechanism where outputs from knowledge base queries get filed back into the knowledge base itself, creating a virtuous cycle where each interaction makes the system smarter and more comprehensive.

**Tags:** #workflow #content-strategy

## How It Works

```
Ask question → AI researches wiki → Generates answer → File answer back into wiki
                                                              ↓
                                          Next question has richer context to draw from
```

1. You ask the AI a question against the knowledge base
2. The AI reads across wiki articles and raw sources to generate an answer
3. The answer is saved to `outputs/` or filed into a relevant wiki article
4. Future queries now have that answer as additional context
5. Each cycle adds depth, connections, and coverage

## The Risk: Error Compounding

Insight from @HFloyd (replying to Karpathy): "When outputs get filed back, errors compound too."

If the AI writes something slightly wrong and it gets saved back, the next answer builds on that wrong information. **Fix:** Run monthly health checks (see [[ai-content-pipeline-patterns]], Pattern 5).

## TekSure Application

TekSure already has a natural compounding loop:

```
Research trends → Create guide stubs → Publish guides → Collect ratings/feedback
       ↑                                                         ↓
       └──────────── Feedback informs next research ←────────────┘
```

The knowledge base formalizes this by making the research stage persistent and queryable:

| Stage | Before KB | With KB |
|-------|-----------|---------|
| Research | Ad-hoc web searches, lost after session | Saved in raw/, compiled in wiki/ |
| Planning | Guide stubs created from scratch each week | Stubs informed by wiki research history |
| Gap analysis | Manual review of guide categories | AI queries wiki for comprehensive gap report |
| Trend tracking | One-off checks | Accumulated trend data over weeks/months |

## Key Insight for TekSure

The 782 guides in `src/data/guides.ts` represent compiled knowledge. But the *research* behind those guides — why certain topics were chosen, what sources informed them, what alternatives were considered — was previously lost after each session. The knowledge base preserves that research context, making every future content decision better informed.

## Sources
- [[raw/karpathy-llm-knowledge-bases-2026-04-04.md]]
- [[raw/spisak-knowledge-base-implementation-2026-04-05.md]]

## Related
- [[llm-knowledge-bases]]
- [[ai-content-pipeline-patterns]]
