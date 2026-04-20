const STORAGE_KEY = 'teksure-guide-progress';
const isServer = typeof window === 'undefined';

export function getCompletedGuides(): Set<string> {
  if (isServer) return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return new Set();
  }
}

export function markGuideCompleted(slug: string, userId?: string): void {
  const completed = getCompletedGuides();
  completed.add(slug);
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
  // Dispatch a custom event so components can react without prop drilling
  window.dispatchEvent(new CustomEvent('teksure-progress-update'));

  // If a logged-in user ID is provided, sync progress to Supabase
  if (userId) {
    import('./syncProgress').then(({ syncProgressToSupabase }) => {
      syncProgressToSupabase(userId);
    }).catch(() => {
      // Silent fail if sync module unavailable
    });
  }
}

export function isGuideCompleted(slug: string): boolean {
  return getCompletedGuides().has(slug);
}

export function clearProgress(): void {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('teksure-progress-update'));
}

const STEP_KEY = 'teksure-step-progress';
const RECENT_KEY = 'teksure-recent-guides';

export function saveStepProgress(slug: string, step: number, totalSteps: number): void {
  try {
    const raw = localStorage.getItem(STEP_KEY);
    const data: Record<string, { step: number; totalSteps: number }> = raw ? JSON.parse(raw) : {};
    data[slug] = { step, totalSteps };
    localStorage.setItem(STEP_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent('teksure-progress-update'));
  } catch { /* ignore */ }
}

export function getInProgressGuides(): { slug: string; step: number; totalSteps: number; pct: number }[] {
  try {
    const raw = localStorage.getItem(STEP_KEY);
    if (!raw) return [];
    const data: Record<string, { step: number; totalSteps: number }> = JSON.parse(raw);
    const completed = getCompletedGuides();
    return Object.entries(data)
      .filter(([slug]) => !completed.has(slug))
      .map(([slug, { step, totalSteps }]) => ({
        slug,
        step,
        totalSteps,
        pct: totalSteps > 0 ? Math.round((step / totalSteps) * 100) : 0,
      }))
      .sort((a, b) => b.pct - a.pct);
  } catch {
    return [];
  }
}

export function recordGuideView(slug: string): void {
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    const recent: string[] = raw ? JSON.parse(raw) : [];
    const filtered = recent.filter(s => s !== slug);
    filtered.unshift(slug);
    localStorage.setItem(RECENT_KEY, JSON.stringify(filtered.slice(0, 20)));
    window.dispatchEvent(new CustomEvent('teksure-progress-update'));
  } catch { /* ignore */ }
}

export function getRecentGuides(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getProgressCount(totalSlugs?: string[]): { completed: number; total: number; pct: number } {
  const done = getCompletedGuides();
  if (totalSlugs) {
    const completed = totalSlugs.filter(s => done.has(s)).length;
    return { completed, total: totalSlugs.length, pct: Math.round((completed / totalSlugs.length) * 100) };
  }
  return { completed: done.size, total: done.size, pct: 100 };
}

// Persist step progress to DB when user is authenticated
export async function saveStepProgressToDB(slug: string, userId: string, step: number, totalSteps: number): Promise<void> {
  try {
    const { supabase } = await import('@/integrations/supabase/client');
    await (supabase as unknown as { from: (table: string) => { upsert: (data: Record<string, unknown>) => Promise<unknown> } })
      .from('guide_progress')
      .upsert({ 
        slug, 
        user_id: userId, 
        step, 
        total_steps: totalSteps, 
        updated_at: new Date().toISOString() 
      });
  } catch {
    // swallow DB errors to avoid affecting UX; fallback to local storage only
  }
}

// Fetch per-user progress from DB for cross-device sync
export async function getUserProgressFromDB(userId: string): Promise<{ slug: string; step: number; totalSteps: number; pct: number }[]> {
  try {
    const { supabase } = await import('@/integrations/supabase/client');
    const { data, error } = await (supabase as any).from('guide_progress').select('slug, step, total_steps').eq('user_id', userId);
    if (error || !data) return [];
    return (data as any[]).map(r => {
      const total = Number(r.total_steps) || 0;
      const stepVal = Number(r.step) || 0;
      const pct = total > 0 ? Math.round(((stepVal + 1) / total) * 100) : 0;
      return { slug: String(r.slug), step: stepVal, totalSteps: total, pct };
    });
  } catch {
    return [];
  }
}
