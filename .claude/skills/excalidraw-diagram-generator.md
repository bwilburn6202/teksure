---
name: excalidraw-diagram-generator
description: Creates visual diagrams for guide steps — troubleshooting flowcharts, network diagrams, device setup flows
---

# Excalidraw Diagram Generator — TekSure

## Purpose
Creates clear visual diagrams to accompany guides — network setups, troubleshooting flows, device connection maps.

## When to Use
- Guides involving network topology (WiFi, router setup)
- Multi-device setup instructions
- Complex troubleshooting with branching paths
- Comparison diagrams (iPhone vs Android steps)

## Diagram Types
1. **Network diagrams:** Router → devices, WiFi coverage, cable connections
2. **Setup flows:** Step 1 → Step 2 → Step 3 with icons
3. **Troubleshooting trees:** Decision points with yes/no branches
4. **Comparison layouts:** Side-by-side iPhone / Android instructions
5. **Security diagrams:** Password → 2FA → account access flow

## Output Format
- Diagram title and description
- Node list with labels and types (rectangle, circle, diamond)
- Connection list with labels
- Layout suggestion (top-to-bottom, left-to-right)
- Color coding: green=good, red=warning, blue=action, gray=info

## TekSure-Specific Rules
- Large text on all labels (readable on mobile)
- Simple shapes — no decorative elements
- Max 10 nodes per diagram
- High contrast colors
- Include text descriptions alongside visual for accessibility

## Constraints
- Avoid clutter — simplicity over comprehensiveness
- Every node must have a clear, plain-English label
