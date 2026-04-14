/**
 * StarRating — interactive 1-5 star rating widget with Supabase persistence.
 *
 * Usage (interactive):
 *   <StarRating guideSlug="wifi-setup" onRated={() => refetch()} />
 *
 * Usage (display only):
 *   <StarRating guideSlug="wifi-setup" readOnly avgStars={4.2} ratingCount={37} />
 */

import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

/* ── helpers ──────────────────────────────────── */

/** Stable anonymous key stored in localStorage so anon users keep their rating */
function getAnonKey(): string {
  if (typeof window === 'undefined') return 'ssr';
  const KEY = 'teksure_anon_rater';
  let k = localStorage.getItem(KEY);
  if (!k) {
    k = `anon_${Math.random().toString(36).slice(2)}_${Date.now()}`;
    localStorage.setItem(KEY, k);
  }
  return k;
}

/* ── types ────────────────────────────────────── */

interface StarRatingProps {
  guideSlug: string;
  /** show aggregate stats; skip interactive controls */
  readOnly?: boolean;
  /** pre-supplied average (for guide cards) */
  avgStars?: number;
  ratingCount?: number;
  size?: 'sm' | 'md' | 'lg';
  onRated?: () => void;
  className?: string;
}

/* ── component ────────────────────────────────── */

export function StarRating({
  guideSlug,
  readOnly = false,
  avgStars: avgStarsProp,
  ratingCount: ratingCountProp,
  size = 'md',
  onRated,
  className,
}: StarRatingProps) {
  const { user } = useAuth();

  const [hover, setHover]           = useState(0);
  const [userStars, setUserStars]   = useState(0);   // this user's saved rating
  const [submitted, setSubmitted]   = useState(false);
  const [saving, setSaving]         = useState(false);
  const [avgStars, setAvgStars]     = useState(avgStarsProp ?? 0);
  const [ratingCount, setRatingCount] = useState(ratingCountProp ?? 0);
  const [loaded, setLoaded]         = useState(false);

  const starSizes = { sm: 'h-3.5 w-3.5', md: 'h-5 w-5', lg: 'h-7 w-7' };
  const iconClass = starSizes[size];

  /* fetch aggregate stats + this user's rating */
  useEffect(() => {
    let cancelled = false;

    async function load() {
      // aggregate
      const { data: stats } = await (supabase as any)
        .from('guide_rating_stats')
        .select('avg_stars, rating_count')
        .eq('guide_slug', guideSlug)
        .maybeSingle();

      if (!cancelled && stats) {
        setAvgStars(Number(stats.avg_stars) || 0);
        setRatingCount(Number(stats.rating_count) || 0);
      }

      // user's own rating
      if (readOnly) { setLoaded(true); return; }

      let query = (supabase as any)
        .from('guide_ratings')
        .select('stars')
        .eq('guide_slug', guideSlug);

      if (user) {
        query = query.eq('user_id', user.id);
      } else {
        query = query.eq('anon_key', getAnonKey());
      }

      const { data: existing } = await query.maybeSingle();
      if (!cancelled && existing) {
        setUserStars(existing.stars);
        setSubmitted(true);
      }
      if (!cancelled) setLoaded(true);
    }

    load();
    return () => { cancelled = true; };
  }, [guideSlug, user, readOnly]);

  /* submit / update rating */
  async function handleRate(stars: number) {
    if (saving || readOnly) return;
    setSaving(true);

    const payload: Record<string, unknown> = {
      guide_slug: guideSlug,
      stars,
    };
    if (user) {
      payload.user_id = user.id;
    } else {
      payload.anon_key = getAnonKey();
    }

    // upsert
    const { error } = await (supabase as any)
      .from('guide_ratings')
      .upsert(payload, {
        onConflict: user ? 'guide_slug,user_id' : 'guide_slug,anon_key',
      });

    if (!error) {
      setUserStars(stars);
      setSubmitted(true);
      // refresh aggregate
      const { data: stats } = await (supabase as any)
        .from('guide_rating_stats')
        .select('avg_stars, rating_count')
        .eq('guide_slug', guideSlug)
        .maybeSingle();
      if (stats) {
        setAvgStars(Number(stats.avg_stars) || 0);
        setRatingCount(Number(stats.rating_count) || 0);
      }
      onRated?.();
    }
    setSaving(false);
  }

  /* render stars */
  const displayStars = readOnly
    ? avgStars
    : submitted
      ? userStars
      : hover || 0;

  const renderStars = (count: number) =>
    [1, 2, 3, 4, 5].map(n => {
      const filled = n <= Math.round(count);
      const half   = !filled && n - 0.5 <= count;
      return (
        <Star
          key={n}
          className={cn(
            iconClass,
            'transition-colors',
            filled
              ? 'fill-amber-400 text-amber-400'
              : half
                ? 'fill-amber-200 text-amber-400'
                : 'fill-none text-muted-foreground/40',
          )}
        />
      );
    });

  /* read-only display (for guide cards / headers) */
  if (readOnly) {
    if (!ratingCount && !avgStarsProp) return null;
    return (
      <span className={cn('inline-flex items-center gap-1', className)}>
        {renderStars(avgStars)}
        {ratingCount > 0 && (
          <span className="text-xs text-muted-foreground ml-0.5">
            {avgStars.toFixed(1)} ({ratingCount})
          </span>
        )}
      </span>
    );
  }

  /* interactive mode */
  if (!loaded) return null; // avoid flash

  if (submitted) {
    return (
      <div className={cn('flex flex-col items-center gap-1', className)}>
        <span className="flex gap-0.5">{renderStars(userStars)}</span>
        <p className="text-xs text-muted-foreground">
          Your rating: {userStars}/5
          {ratingCount > 1 && ` · Avg ${avgStars.toFixed(1)} from ${ratingCount} ratings`}
        </p>
        <button
          className="text-xs text-secondary underline underline-offset-2 mt-0.5"
          onClick={() => setSubmitted(false)}
        >
          Change rating
        </button>
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      <div
        className="flex gap-1"
        onMouseLeave={() => setHover(0)}
      >
        {[1, 2, 3, 4, 5].map(n => (
          <button
            key={n}
            disabled={saving}
            onMouseEnter={() => setHover(n)}
            onClick={() => handleRate(n)}
            aria-label={`Rate ${n} star${n !== 1 ? 's' : ''}`}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
          >
            <Star
              className={cn(
                iconClass,
                'transition-colors cursor-pointer',
                n <= (hover || userStars)
                  ? 'fill-amber-400 text-amber-400'
                  : 'fill-none text-muted-foreground/40 hover:text-amber-300',
              )}
            />
          </button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        {hover ? ['', 'Poor', 'Fair', 'Good', 'Very good', 'Excellent'][hover] : 'Tap to rate'}
        {ratingCount > 0 && !hover && ` · ${ratingCount} rating${ratingCount !== 1 ? 's' : ''}`}
      </p>
    </div>
  );
}
