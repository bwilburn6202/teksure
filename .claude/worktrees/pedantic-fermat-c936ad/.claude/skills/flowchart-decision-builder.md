---
name: flowchart-decision-builder
description: Creates troubleshooting decision trees for interactive TekSure tools — "Is your WiFi working? Yes/No → next step"
---

# Flowchart Decision Builder — TekSure

## Purpose
Creates step-by-step troubleshooting decision trees that guide users through diagnosing and fixing tech problems.

## When to Use
- Building interactive troubleshooter pages
- Creating "What's wrong?" diagnostic flows
- Planning guided help wizards

## Structure
```
START: "What's the problem?"
  → Option A: "I can't connect to WiFi"
    → Question: "Can you see your WiFi network in the list?"
      → Yes: "Tap it and enter your password"
      → No: "Is your router turned on? Check for lights."
        → Yes: "Restart your router"
        → No: "Plug in your router and wait 2 minutes"
  → Option B: "WiFi is slow"
    → [different branch]
END: "Problem solved!" or "Contact us for more help"
```

## TekSure-Specific Rules
- Max 5 levels deep — if it's more complex, break into sub-flows
- Every branch must end with a resolution or escalation
- Use plain English for all questions and options
- Include "I'm not sure" option at decision points
- American context (US ISPs, US devices)

## Constraints
- Keep decisions binary where possible (Yes/No)
- No dead ends — every path leads somewhere helpful
- No jargon in questions or options
