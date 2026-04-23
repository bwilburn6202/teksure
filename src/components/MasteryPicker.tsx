import { useState } from 'react';
import { Check } from 'lucide-react';
import { useProgress, type MasteryStatus, MASTERY_META } from '@/hooks/useProgress';

interface MasteryPickerProps {
  slug: string;
  /** Optional compact mode — smaller text, tighter spacing for sidebars. */
  compact?: boolean;
  /** Fires after a level is picked (useful for confetti or toast). */
  onPick?: (status: MasteryStatus) => void;
}

// Order shown in the UI — we skip 'not-started' because picking it would
// be the same as never having visited the guide.
const CHOOSABLE: MasteryStatus[] = ['attempted', 'familiar', 'proficient', 'mastered'];

/**
 * 4-level mastery picker. Writes through `useProgress` so the choice mirrors
 * to the `user_progress` Supabase table for signed-in users.
 *
 * Designed for plain-language clarity:
 *    Attempted  — I tried but it didn't stick
 *    Familiar   — I get it with the guide in front of me
 *    Proficient — I can do it on my own
 *    Mastered   — I could show someone else how
 */
export function MasteryPicker({ slug, compact = false, onPick }: MasteryPickerProps) {
  const { getStatus, setStatus, isLoading } = useProgress();
  const [busy, setBusy] = useState<MasteryStatus | null>(null);

  const current = getStatus(slug);

  const handlePick = async (level: MasteryStatus) => {
    setBusy(level);
    try {
      await setStatus(slug, level);
      onPick?.(level);
    } finally {
      setBusy(null);
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label="How well did this guide stick with you?"
      className={compact ? 'space-y-2' : 'space-y-3'}
    >
      {!compact && (
        <p className="text-sm font-medium text-foreground">
          How well did this guide stick with you?
        </p>
      )}

      <div className={`grid gap-2 ${compact ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-4'}`}>
        {CHOOSABLE.map(level => {
          const meta = MASTERY_META[level];
          const active = current === level;
          const isBusy = busy === level;

          return (
            <button
              key={level}
              type="button"
              role="radio"
              aria-checked={active}
              disabled={isBusy || isLoading}
              onClick={() => handlePick(level)}
              className={[
                'group relative flex flex-col items-start gap-1 rounded-xl border px-3 py-2.5 text-left transition-all',
                'min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                active
                  ? 'border-primary bg-primary/5 shadow-sm'
                  : 'border-border bg-background hover:border-primary/60 hover:bg-primary/5',
                isBusy ? 'opacity-60' : '',
              ].join(' ')}
            >
              {active && (
                <span className="absolute top-1.5 right-1.5 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
              )}
              <span className="flex items-center gap-2">
                <span className="text-lg leading-none" aria-hidden="true">
                  {meta.emoji}
                </span>
                <span className={`font-semibold ${compact ? 'text-xs' : 'text-sm'}`}>
                  {meta.label}
                </span>
              </span>
              {!compact && (
                <span className="text-xs text-muted-foreground leading-snug">
                  {meta.description}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {!compact && current !== 'not-started' && (
        <p className="text-xs text-muted-foreground">
          Saved. You can change this any time — your progress will follow you across devices when you sign in.
        </p>
      )}
    </div>
  );
}
