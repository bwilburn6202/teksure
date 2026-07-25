import { supabase } from '@/integrations/supabase/client';
import { getCompletedGuides } from './progress';

/**
 * Progress sync between localStorage and Supabase.
 *
 * The `guide_progress` table stores ONE ROW PER GUIDE:
 *   { user_id, slug, step, total_steps, completed }
 * with a unique constraint on (user_id, slug).
 *
 * An earlier version of this file wrote a single row with a `completed_guides`
 * array — a column that does not exist — so every sync failed silently inside
 * the catch block and signed-in users lost progress between devices.
 */

const LOCAL_KEY = 'teksure-guide-progress';

/** Push locally completed guides up to Supabase for the logged-in user. */
export async function syncProgressToSupabase(userId: string) {
  const completed = Array.from(getCompletedGuides());
  if (completed.length === 0) return;

  const rows = completed.map((slug) => ({
    user_id: userId,
    slug,
    completed: true,
  }));

  const { error } = await supabase
    .from('guide_progress')
    .upsert(rows, { onConflict: 'user_id,slug' });

  if (error) {
    console.warn('[syncProgress] could not sync progress to Supabase:', error.message);
  }
}

/** Load progress from Supabase and merge it into localStorage. */
export async function loadProgressFromSupabase(userId: string) {
  const { data, error } = await supabase
    .from('guide_progress')
    .select('slug')
    .eq('user_id', userId)
    .eq('completed', true);

  if (error) {
    console.warn('[syncProgress] could not load progress from Supabase:', error.message);
    return;
  }
  if (!data || data.length === 0) return;

  const local = getCompletedGuides();
  const merged = new Set([...local, ...data.map((row) => row.slug)]);

  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_KEY, JSON.stringify([...merged]));
  }
}
