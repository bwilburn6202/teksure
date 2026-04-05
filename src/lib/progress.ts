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
