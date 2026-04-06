const STORAGE_KEY = 'teksure-guide-progress';
const STEP_KEY = 'teksure-guide-steps';
const RECENT_KEY = 'teksure-recent-guides';

export function getCompletedGuides(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return new Set();
  }
}

export function markGuideCompleted(slug: string): void {
  const completed = getCompletedGuides();
  completed.add(slug);
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
  // Dispatch a custom event so components can react without prop drilling
  window.dispatchEvent(new CustomEvent('teksure-progress-update'));
}

export function isGuideCompleted(slug: string): boolean {
  return getCompletedGuides().has(slug);
}

export function clearProgress(): void {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('teksure-progress-update'));
}

export function getInProgressGuides(): { slug: string; step: number; totalSteps: number; pct: number }[] {
  try {
    const raw = localStorage.getItem(STEP_KEY);
    if (!raw) return [];
    const steps = JSON.parse(raw) as Record<string, { step: number; totalSteps: number }>;
    const completed = getCompletedGuides();
    return Object.entries(steps)
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

export function getRecentGuides(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

export function saveStepProgress(slug: string, step: number, totalSteps: number): void {
  try {
    const raw = localStorage.getItem(STEP_KEY);
    const steps = raw ? (JSON.parse(raw) as Record<string, { step: number; totalSteps: number }>) : {};
    steps[slug] = { step, totalSteps };
    localStorage.setItem(STEP_KEY, JSON.stringify(steps));
  } catch { /* ignore storage errors */ }
}

export function recordGuideView(slug: string): void {
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    const recent = raw ? (JSON.parse(raw) as string[]) : [];
    const filtered = recent.filter(s => s !== slug);
    filtered.unshift(slug);
    localStorage.setItem(RECENT_KEY, JSON.stringify(filtered.slice(0, 20)));
  } catch { /* ignore storage errors */ }
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
