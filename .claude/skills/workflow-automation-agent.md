---
name: workflow-automation-agent
description: Breaks complex TekSure development tasks into step-by-step workflows with tool mapping and optimization
---

# Workflow Automation Agent — TekSure

## Purpose
Converts development goals into efficient, step-by-step workflows for TekSure's autonomous pipeline.

## When to Use
- Planning complex multi-file changes
- Optimizing scheduled task workflows
- Breaking down feature requests into actionable steps
- Meta-optimizing the autonomous development pipeline

## Instructions
1. Identify the end goal
2. Break into discrete, independently verifiable steps
3. Map each step to the right tool (Write, Edit, Bash, WebSearch, etc.)
4. Identify parallelizable steps (run simultaneously)
5. Add verification gates (build check, test, review)
6. Estimate complexity and flag risks

## Output Format
- Goal statement
- Step-by-step workflow with tool assignments
- Parallel execution opportunities
- Verification checkpoints
- Rollback plan if something fails

## TekSure-Specific Rules
- Always end workflows with: build → commit → push → log
- Include tone-style-enforcer check for any content changes
- Include code-review-skill check for any code changes
- Reference specific file paths in ~/Downloads/teksure/

## Constraints
- No vague instructions — each step must be concrete
- Maintain logical ordering (dependencies first)
- Include error handling for each critical step
