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

const RECENT_KEY = 'teksure-recent-guides';

export function getInProgressGuides(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

export function getRecentGuides(): string[] {
  return getInProgressGuides();
}

export function saveStepProgress(slug: string, stepIndex: number): void {
  try {
    const key = `teksure-step-progress-${slug}`;
    localStorage.setItem(key, String(stepIndex));
  } catch { /* ignore */ }
}

export function getStepProgress(slug: string): number {
  try {
    return parseInt(localStorage.getItem(`teksure-step-progress-${slug}`) || '0', 10);
  } catch { return 0; }
}

export function recordGuideView(slug: string): void {
  trackGuideVisit(slug);
}

export function trackGuideVisit(slug: string): void {
  const recent = getInProgressGuides().filter(s => s !== slug);
  recent.unshift(slug);
  localStorage.setItem(RECENT_KEY, JSON.stringify(recent.slice(0, 10)));
}

export function getProgressCount(totalSlugs?: string[]): { completed: number; total: number; pct: number } {
  const done = getCompletedGuides();
  if (totalSlugs) {
    const completed = totalSlugs.filter(s => done.has(s)).length;
    return { completed, total: totalSlugs.length, pct: Math.round((completed / totalSlugs.length) * 100) };
  }
  return { completed: done.size, total: done.size, pct: 100 };
}
