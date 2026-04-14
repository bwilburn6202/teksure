import { supabase } from '@/integrations/supabase/client';
import { getCompletedGuides } from './progress';

/**
 * Sync local progress to Supabase for the logged-in user.
 * Called after marking a guide complete or on login.
 */
export async function syncProgressToSupabase(userId: string) {
  const completed = Array.from(getCompletedGuides());
  if (completed.length === 0) return;

  try {
    await supabase.from('guide_progress').upsert(
      { user_id: userId, completed_guides: completed, synced_at: new Date().toISOString() },
      { onConflict: 'user_id' }
    );
  } catch {
    // Table may not exist yet — silent fail
  }
}

/**
 * Load progress from Supabase and merge with localStorage.
 */
export async function loadProgressFromSupabase(userId: string) {
  try {
    const { data } = await supabase
      .from('guide_progress')
      .select('completed_guides')
      .eq('user_id', userId)
      .single();

    if (data?.completed_guides) {
      const local = getCompletedGuides();
      const remote = new Set(data.completed_guides as string[]);
      const merged = new Set([...local, ...remote]);
      if (typeof window !== 'undefined') {
        localStorage.setItem('teksure-guide-progress', JSON.stringify([...merged]));
      }
    }
  } catch {
    // Table may not exist — silent fail
  }
}
