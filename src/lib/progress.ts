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

const STEP_KEY = 'teksure-guide-steps';
const RECENT_KEY = 'teksure-recent-guides';

interface StepRecord {
  slug: string;
  step: number;
  totalSteps: number;
}

export function saveGuideStep(slug: string, step: number, totalSteps: number): void {
  try {
    const data: Record<string, StepRecord> = JSON.parse(localStorage.getItem(STEP_KEY) ?? '{}');
    data[slug] = { slug, step, totalSteps };
    localStorage.setItem(STEP_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent('teksure-progress-update'));
  } catch { /* ignore */ }
}

export function getInProgressGuides(): { slug: string; step: number; totalSteps: number; pct: number }[] {
  try {
    const completed = getCompletedGuides();
    const data: Record<string, StepRecord> = JSON.parse(localStorage.getItem(STEP_KEY) ?? '{}');
    return Object.values(data)
      .filter(r => !completed.has(r.slug) && r.step < r.totalSteps - 1)
      .map(r => ({ ...r, pct: Math.round(((r.step + 1) / r.totalSteps) * 100) }));
  } catch {
    return [];
  }
}

export function trackRecentGuide(slug: string): void {
  try {
    const recent: string[] = JSON.parse(localStorage.getItem(RECENT_KEY) ?? '[]');
    const updated = [slug, ...recent.filter(s => s !== slug)].slice(0, 20);
    localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('teksure-progress-update'));
  } catch { /* ignore */ }
}

export function getRecentGuides(): string[] {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) ?? '[]');
  } catch {
    return [];
  }
}

export function saveStepProgress(slug: string, step: number, totalSteps: number): void {
  saveGuideStep(slug, step, totalSteps);
}

export function recordGuideView(slug: string): void {
  trackRecentGuide(slug);
}

export function getProgressCount(totalSlugs?: string[]): { completed: number; total: number; pct: number } {
  const done = getCompletedGuides();
  if (totalSlugs) {
    const completed = totalSlugs.filter(s => done.has(s)).length;
    return { completed, total: totalSlugs.length, pct: Math.round((completed / totalSlugs.length) * 100) };
  }
  return { completed: done.size, total: done.size, pct: 100 };
}
