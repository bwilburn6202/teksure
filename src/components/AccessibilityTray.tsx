import { useState } from 'react';
import { Accessibility } from 'lucide-react';
import { FontSizeToggle } from '@/components/FontSizeToggle';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { HighContrastToggle } from '@/components/HighContrastToggle';
import { LanguageToggle } from '@/components/LanguageToggle';

/**
 * A pinned accessibility tray that lives on every page in the top-right.
 *
 * On desktop (≥ sm) the individual toggles render inline so a visitor can
 * see in one glance that TekSure cares about readable text, contrast, and
 * language. On narrow screens we collapse to a single  button that expands
 * the same cluster on tap — keeping the home view clean without hiding the
 * accessibility story.
 *
 * The tray is rendered by the `Navbar` so it appears on every protected and
 * public surface that mounts the shared header. It is NOT pinned with
 * `position: fixed` — the Navbar sticky-positions it — so long-scroll pages
 * keep it within reach without overlapping content.
 */
export function AccessibilityTray() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop: always-visible cluster */}
      <div
        role="group"
        aria-label="Display and accessibility settings"
        className="hidden sm:flex pointer-events-auto items-center gap-1 rounded-full border bg-background/90 px-2 py-1 shadow-sm backdrop-blur dark:bg-white/[0.08] dark:border-white/15"
      >
        <FontSizeToggle />
        <HighContrastToggle />
        <DarkModeToggle />
        <LanguageToggle />
      </div>

      {/* Mobile: single button that expands inline */}
      <div className="sm:hidden pointer-events-auto">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="a11y-tray-mobile"
          aria-label="Display and accessibility settings"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border bg-background shadow-sm"
        >
          <Accessibility className="h-5 w-5" aria-hidden="true" />
        </button>
        {open && (
          <div
            id="a11y-tray-mobile"
            role="group"
            aria-label="Display and accessibility settings"
            className="absolute right-4 top-16 z-50 flex items-center gap-1 rounded-2xl border bg-background p-2 shadow-xl"
          >
            <FontSizeToggle />
            <HighContrastToggle />
            <DarkModeToggle />
                <LanguageToggle />
          </div>
        )}
      </div>
    </>
  );
}
