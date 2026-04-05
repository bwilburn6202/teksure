const STORAGE_KEY = 'teksure-guide-progress';

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

export function getProgressCount(totalSlugs?: string[]): { completed: number; total: number; pct: number } {
  const done = getCompletedGuides();
  if (totalSlugs) {
    const completed = totalSlugs.filter(s => done.has(s)).length;
    return { completed, total: totalSlugs.length, pct: Math.round((completed / totalSlugs.length) * 100) };
  }
  return { completed: done.size, total: done.size, pct: 100 };
}

// Return in-progress guides based on step progress map
export function getInProgressGuides(): { slug: string; step: number; totalSteps: number; pct: number }[] {
  try {
    const raw = localStorage.getItem('teksure_step_progress');
    const map = raw ? JSON.parse(raw) : {};
    const items = Object.entries(map).map(([slug, v]: any) => {
      const step = typeof v.step === 'number' ? v.step : 0;
      const total = typeof v.totalSteps === 'number' ? v.totalSteps : (typeof v.total_steps === 'number' ? v.total_steps : 0);
      const pct = total > 0 ? Math.round(((step + 1) / total) * 100) : 0;
      return { slug, step, totalSteps: total, pct };
    });
    // sort by pct desc (most progressed first)
    return items.sort((a, b) => b.pct - a.pct);
  } catch {
    return [];
  }
}

export function getRecentGuides(): string[] {
  try {
    const raw = localStorage.getItem('teksure_guide_views');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// Record a guide view in local storage for quick UX features
export function recordGuideView(slug: string) {
  try {
    const key = 'teksure_guide_views';
    const raw = localStorage.getItem(key);
    const arr: string[] = raw ? JSON.parse(raw) : [];
    const next = [slug, ...arr.filter(s => s !== slug)].slice(0, 50);
    localStorage.setItem(key, JSON.stringify(next));
  } catch {
    // ignore storage issues
  }
}

// Phase 3: Persist step progress to DB when user is authenticated
export async function saveStepProgressToDB(slug: string, userId: string, step: number, totalSteps: number) {
  try {
    const { supabase } = await import('@/integrations/supabase/client');
    await (supabase as any).from('guide_progress').upsert({ slug, user_id: userId, step, total_steps: totalSteps, updated_at: new Date().toISOString() });
  } catch {
    // swallow DB errors to avoid affecting UX; fallback to local storage only
  }
}

export function saveStepProgress(slug: string, step: number, totalSteps: number) {
  try {
    const key = 'teksure_step_progress';
    const raw = localStorage.getItem(key);
    const map = raw ? JSON.parse(raw) : {};
    map[slug] = { step, totalSteps, updated_at: new Date().toISOString() };
    localStorage.setItem(key, JSON.stringify(map));
  } catch {
    // ignore
  }
}
