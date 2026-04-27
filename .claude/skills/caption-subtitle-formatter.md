---
name: caption-subtitle-formatter
description: Formats guide content as accessible captions/subtitles — max 42 chars per line, plain language
---

# Caption & Subtitle Formatter — TekSure

## Purpose
Creates readable, accessible captions for video content targeting seniors and users with hearing difficulties.

## When to Use
- Creating SRT files for video scripts
- Formatting on-screen text for tutorials
- Generating accessible captions for embedded videos

## Format Rules
- Max 42 characters per line
- Max 2 lines per caption block
- 2-3 seconds display time per block
- Line breaks at natural pauses
- No splitting words across lines

## SRT Format Example
```
1
00:00:00,000 --> 00:00:03,000
Ever gotten locked out
of your email?

2
00:00:03,000 --> 00:00:05,500
Here's exactly what to do.
```

## TekSure-Specific Rules
- Plain language — match the spoken words exactly
- Include [PAUSE] markers where the speaker pauses
- Note any on-screen actions: [TAPS SETTINGS ICON]
- Use sentence case, not ALL CAPS
- Include speaker identification if multiple voices

## Constraints
- Never exceed 42 characters per line
- Keep timing aligned with speech
- Prioritize readability over verbatim accuracy
