# Source Capture — Nick Spisak post on LLM knowledge bases

**Captured:** 2026-04-06
**Source type:** Social post/thread summary
**Primary claim:** A personal knowledge base can be built with flat files (`raw/`, `wiki/`, `outputs/`) plus a schema file and maintained by an AI agent.

## Post Summary

Nick Spisak shared a practical implementation flow based on Andrej Karpathy's "flat files + AI" approach for personal knowledge systems.

### Workflow described

1. Create 3 folders:
   - `raw/` for source material
   - `wiki/` for AI-organized knowledge
   - `outputs/` for generated analyses and answers
2. Dump unstructured source material into `raw/` without hand-organizing.
3. Optionally automate web collection with `agent-browser` CLI.
4. Create one schema file (`CLAUDE.md`, `AGENTS.md`, or `README.md`) that defines organization rules.
5. Prompt the AI to compile wiki pages and `INDEX.md` from `raw/`.
6. Ask cross-source questions against `wiki/` and save useful outputs back into the system.
7. Run periodic health checks to catch contradictions and unsupported claims.
8. Keep tooling simple (flat markdown files over plugin-heavy workflows).

## Example schema rules included in post

- Every topic gets its own markdown file in `wiki/`.
- Every wiki page starts with a one-paragraph summary.
- Link related topics using wiki-links like `[[topic-name]]`.
- Maintain a `wiki/INDEX.md` with one-line descriptions.
- Update relevant wiki pages whenever new raw sources are added.

## Optional automation details mentioned

- CLI install steps:
  - `npm install -g agent-browser`
  - `agent-browser install`
- Example usage:
  - `agent-browser open https://some-article-you-want.com`
  - `agent-browser get text "article"`

## Risks and safeguards highlighted

- Risk: model mistakes can compound when outputs are re-ingested.
- Safeguard: monthly health check prompt that asks AI to flag contradictions, missing explanations, and claims lacking raw-source support.

## TekSure relevance

This source reinforces the current TekSure knowledge-base architecture and supports keeping the system file-based, auditable, and AI-maintained.
