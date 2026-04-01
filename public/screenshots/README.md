# Guide Screenshots

This directory contains real OS screenshots for TekSure guide walkthroughs.

## Directory Structure
- `windows/` — Windows 11 screenshots (Settings, File Explorer, etc.)
- `mac/` — macOS screenshots (System Settings, Finder, etc.)
- `iphone/` — iPhone/iOS screenshots (Settings, apps, etc.)
- `android/` — Android phone screenshots (Settings, Play Store, etc.)
- `browser/` — Web browser screenshots (Chrome, Safari, Edge, etc.)

## Naming Convention
`{guide-slug}-step-{number}.webp`

Example: `windows/manage-storage-windows-step-1.webp`

## How to Add Screenshots
1. Take a screenshot of the actual OS screen for each guide step
2. Save as WebP format (best compression for web)
3. Name using the convention above
4. Add `screenshotUrl` to the guide step in `src/data/guides.ts`:
   ```ts
   {
     title: 'Check your storage',
     content: 'Open File Explorer → This PC...',
     screenshotUrl: '/screenshots/windows/manage-storage-windows-step-1.webp',
     screenshotAlt: 'Windows 11 File Explorer showing disk space on C: drive',
   }
   ```

## Sources
Screenshots should come from:
- Your own devices (preferred — guarantees accuracy)
- Official support pages (Apple, Google, Microsoft) with attribution
- Never use copyrighted screenshots from third-party blogs
