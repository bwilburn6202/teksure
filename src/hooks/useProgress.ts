import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import {
  getCompletedGuides,
  markGuideCompleted,
  recordGuideView,
} from '@/lib/progress';

/**
 * Per-guide mastery levels. Matches the `progress_status` enum in the
 * `user_progress` migration (20260419120000_tier_and_user_progress.sql).
 */
export type MasteryStatus =
  | 'not-started'
  | 'attempted'
  | 'familiar'
  | 'proficient'
  | 'mastered';

export const MASTERY_ORDER: MasteryStatus[] = [
  'not-started',
  'attempted',
  'familiar',
  'proficient',
  'mastered',
];

export const MASTERY_META: Record<MasteryStatus, { emoji: string; label: string; description: string }> = {
  'not-started': {
    emoji: '',
    label: 'Not started',
    description: "Haven't opened this guide yet.",
  },
  'attempted': {
    emoji: '',
    label: 'Attempted',
    description: 'Took a look, needs another pass.',
  },
  'familiar': {
    emoji: '',
    label: 'Familiar',
    description: 'Understands the steps with help.',
  },
  'proficient': {
    emoji: '',
    label: 'Proficient',
    description: 'Can do this without the guide open.',
  },
  'mastered': {
    emoji: '',
    label: 'Mastered',
    description: 'Comfortable enough to teach someone else.',
  },
};

/**
 * localStorage-only fallback for mastery status. Keyed per-guide so a user
 * browsing before signing in still sees their progress survive a refresh.
 */
const LOCAL_KEY = 'teksure-guide-mastery';

function readLocalMastery(): Record<string, MasteryStatus> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    return raw ? (JSON.parse(raw) as Record<string, MasteryStatus>) : {};
  } catch {
    return {};
  }
}

function writeLocalMastery(next: Record<string, MasteryStatus>) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent('teksure-progress-update'));
  } catch {
    /* ignore */
  }
}

interface UserProgressRow {
  guide_slug: string;
  status: MasteryStatus;
  completed_at: string | null;
  last_seen_at: string;
}

/**
 * Hook managing the user's learning progress across all guides.
 *
 *  - Reads localStorage first so the UI is never empty waiting on the network.
 *  - Signed-in: syncs to the `user_progress` Supabase table on every write.
 *  - On sign-in, merges local + remote (remote wins on conflict by `last_seen_at`).
 *  - Emits 'teksure-progress-update' so other components can re-render.
 */
export function useProgress() {
  const { user } = useAuth();
  const [mastery, setMastery] = useState<Record<string, MasteryStatus>>(() => readLocalMastery());
  const [completed, setCompleted] = useState<Set<string>>(() => getCompletedGuides());
  const [remoteLoaded, setRemoteLoaded] = useState(false);

  // Keep local state in sync with cross-tab updates ───────────────────────────
  useEffect(() => {
    const refresh = () => {
      setMastery(readLocalMastery());
      setCompleted(getCompletedGuides());
    };
    window.addEventListener('teksure-progress-update', refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener('teksure-progress-update', refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  // Hydrate from Supabase when the user signs in ─────────────────────────────
  useEffect(() => {
    if (!user) {
      setRemoteLoaded(false);
      return;
    }
    let cancelled = false;

    (async () => {
      try {
        const { data, error } = await (supabase as unknown as {
          from: (t: string) => {
            select: (cols: string) => {
              eq: (c: string, v: string) => Promise<{ data: UserProgressRow[] | null; error: unknown }>;
            };
          };
        })
          .from('user_progress')
          .select('guide_slug, status, completed_at, last_seen_at')
          .eq('user_id', user.id);

        if (cancelled) return;
        if (error || !data) {
          setRemoteLoaded(true);
          return;
        }

        const remoteMap: Record<string, MasteryStatus> = {};
        for (const row of data) {
          remoteMap[row.guide_slug] = row.status;
        }
        // Merge: remote wins on conflict since DB is the source of truth
        // once a user signs in.
        setMastery(prev => {
          const merged = { ...prev, ...remoteMap };
          writeLocalMastery(merged);
          return merged;
        });
        setRemoteLoaded(true);
      } catch {
        // Non-fatal — localStorage remains the fallback
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [user]);

  // Write a new status for one guide ─────────────────────────────────────────
  const setStatus = useCallback(
    async (slug: string, status: MasteryStatus) => {
      setMastery(prev => {
        const next = { ...prev, [slug]: status };
        writeLocalMastery(next);
        return next;
      });

      // Mirror to the existing completed-set for 'proficient'/'mastered'
      if (status === 'proficient' || status === 'mastered') {
        markGuideCompleted(slug, user?.id);
        setCompleted(getCompletedGuides());
      }

      if (!user) return;
      try {
        await (supabase as unknown as {
          from: (t: string) => {
            upsert: (
              row: Record<string, unknown>,
              opts?: { onConflict?: string }
            ) => Promise<{ error: unknown }>;
          };
        })
          .from('user_progress')
          .upsert(
            {
              user_id: user.id,
              guide_slug: slug,
              status,
              completed_at:
                status === 'proficient' || status === 'mastered'
                  ? new Date().toISOString()
                  : null,
              last_seen_at: new Date().toISOString(),
            },
            { onConflict: 'user_id,guide_slug' }
          );
      } catch {
        // Non-fatal — local write already succeeded
      }
    },
    [user]
  );

  // Cheap "user saw this guide" ping (no status change) ──────────────────────
  const touch = useCallback(
    async (slug: string) => {
      recordGuideView(slug);
      if (!user) return;
      try {
        const current = mastery[slug] ?? 'attempted';
        await (supabase as unknown as {
          from: (t: string) => {
            upsert: (
              row: Record<string, unknown>,
              opts?: { onConflict?: string }
            ) => Promise<{ error: unknown }>;
          };
        })
          .from('user_progress')
          .upsert(
            {
              user_id: user.id,
              guide_slug: slug,
              status: current,
              last_seen_at: new Date().toISOString(),
            },
            { onConflict: 'user_id,guide_slug' }
          );
      } catch {
        /* ignore */
      }
    },
    [user, mastery]
  );

  const getStatus = useCallback(
    (slug: string): MasteryStatus => mastery[slug] ?? 'not-started',
    [mastery]
  );

  const counts = {
    total: Object.keys(mastery).length,
    attempted: Object.values(mastery).filter(s => s === 'attempted').length,
    familiar: Object.values(mastery).filter(s => s === 'familiar').length,
    proficient: Object.values(mastery).filter(s => s === 'proficient').length,
    mastered: Object.values(mastery).filter(s => s === 'mastered').length,
  };

  return {
    mastery,
    completed,
    getStatus,
    setStatus,
    touch,
    counts,
    remoteLoaded,
    /** True while a signed-in user's progress is still loading from the DB. */
    isLoading: !!user && !remoteLoaded,
  };
}
