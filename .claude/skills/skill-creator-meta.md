---
name: skill-creator-meta
description: Generates new TekSure skill files in .md format with proper structure and TekSure adaptation
---

# Skill Creator (Meta Skill) — TekSure

## Purpose
Creates new skill files for TekSure's autonomous pipeline when new capabilities are needed.

## When to Use
- When a recurring task pattern emerges that isn't covered by existing skills
- When a new content type or process is added to TekSure
- When optimizing the autonomous pipeline

## Skill File Template
```markdown
---
name: [kebab-case-name]
description: [One-line description adapted for TekSure's mission]
---

# [Skill Title] — TekSure

## Purpose
[How this skill serves TekSure's mission of helping non-technical users]

## When to Use
[Specific triggers — scheduled tasks, content types, situations]

## Instructions
[Step-by-step process, adapted for TekSure context]

## Output Format
[Expected output structure]

## TekSure-Specific Rules
[Rules for TekSure's audience, voice, and conventions]

## Constraints
[What to avoid]
```

## File Location
Save to: ~/Downloads/teksure/.claude/skills/[skill-name].md

## After Creating a Skill
1. Reference it in the relevant scheduled task prompts
2. Update the schedules reference memory file
3. Test by running the referencing task manually

## Constraints
- Every skill MUST include TekSure-Specific Rules section
- Skills must be self-contained — no external dependencies
- Keep instructions actionable, not theoretical
