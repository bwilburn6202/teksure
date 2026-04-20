import { useNavigate } from 'react-router-dom';
import { useTier, UserTier, TIER_META, TIER_ORDER } from '@/contexts/TierContext';
import { CheckCircle2 } from 'lucide-react';

interface TierPickerProps {
  /** Compact variant used in smaller UI shells (e.g., modal, sidebar). */
  compact?: boolean;
  /** Where to send the user after they pick. Default: stay on current page. */
  navigateTo?: string;
  /** Called after a tier is picked. */
  onPick?: (tier: UserTier) => void;
}

/**
 * Four-tile picker letting the user declare their experience level.
 *
 * Designed to be welcoming, not a quiz. No right/wrong answers — the tier
 * only affects recommendations, not what's available.
 */
export function TierPicker({ compact = false, navigateTo, onPick }: TierPickerProps) {
  const { tier, setTier } = useTier();
  const navigate = useNavigate();

  const handlePick = (next: UserTier) => {
    setTier(next);
    onPick?.(next);
    if (navigateTo) navigate(navigateTo);
  };

  return (
    <div
      role="radiogroup"
      aria-label="Pick your experience level"
      className={
        compact
          ? 'grid grid-cols-2 gap-2 sm:grid-cols-4'
          : 'grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4'
      }
    >
      {TIER_ORDER.map((t) => {
        const meta = TIER_META[t];
        const selected = tier === t;
        return (
          <button
            key={t}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => handlePick(t)}
            className={
              'group relative flex flex-col items-start gap-2 rounded-2xl border-2 bg-background ' +
              'px-5 py-5 text-left transition-all min-h-[140px] ' +
              'hover:border-primary hover:-translate-y-0.5 hover:shadow-lg ' +
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ' +
              (selected
                ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                : 'border-border')
            }
          >
            {selected && (
              <CheckCircle2 className="absolute right-3 top-3 h-5 w-5 text-primary" aria-hidden="true" />
            )}
            <span className="text-4xl leading-none" aria-hidden="true">{meta.emoji}</span>
            <span className="text-base font-semibold text-foreground">{meta.label}</span>
            {!compact && (
              <span className="text-sm leading-snug text-muted-foreground">{meta.description}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
