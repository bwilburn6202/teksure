import { getCompletedGuides } from './progress';
import { guides } from '@/data/guides';

export interface Badge {
  id: string;
  emoji: string;
  title: string;
  description: string;
  earned: boolean;
  earnedAt?: string; // ISO date string stored in localStorage
}

const BADGE_KEY = 'teksure-badges';

function getStoredBadges(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(BADGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function storeBadge(id: string) {
  const stored = getStoredBadges();
  if (!stored[id]) {
    stored[id] = new Date().toISOString();
    localStorage.setItem(BADGE_KEY, JSON.stringify(stored));
    window.dispatchEvent(new CustomEvent('teksure-badge-earned', { detail: { id } }));
  }
}

/** Evaluate all badge conditions and store newly earned ones. Returns full badge list. */
export function evaluateBadges(): Badge[] {
  const completed = getCompletedGuides();
  const stored = getStoredBadges();

  const allSlugs = guides.map(g => g.slug);
  const completedCount = allSlugs.filter(s => completed.has(s)).length;

  const completedGuides = guides.filter(g => completed.has(g.slug));
  const categoriesDone = new Set(completedGuides.map(g => g.category));
  const safetyGuidesDone = completedGuides.filter(g =>
    g.tags.some(t => ['security', 'safety', 'password', 'scam', 'virus', 'privacy'].includes(t.toLowerCase()))
  ).length;

  const definitions: Array<{ id: string; emoji: string; title: string; description: string; condition: boolean }> = [
    {
      id: 'first_steps',
      emoji: '',
      title: 'First Steps',
      description: 'Complete your first guide',
      condition: completedCount >= 1,
    },
    {
      id: 'getting_started',
      emoji: '',
      title: 'Getting Started',
      description: 'Complete 5 guides',
      condition: completedCount >= 5,
    },
    {
      id: 'halfway_there',
      emoji: '',
      title: 'Halfway There',
      description: 'Complete 10 guides',
      condition: completedCount >= 10,
    },
    {
      id: 'guide_master',
      emoji: '',
      title: 'Guide Master',
      description: 'Complete 25 guides',
      condition: completedCount >= 25,
    },
    {
      id: 'safety_hero',
      emoji: '',
      title: 'Safety Hero',
      description: 'Complete 3 security or safety guides',
      condition: safetyGuidesDone >= 3,
    },
    {
      id: 'well_rounded',
      emoji: '',
      title: 'Well Rounded',
      description: 'Complete guides in 3 different categories',
      condition: categoriesDone.size >= 3,
    },
    {
      id: 'all_rounder',
      emoji: '',
      title: 'All-Rounder',
      description: 'Complete guides in all 5 categories',
      condition: categoriesDone.size >= 5,
    },
    {
      id: 'windows_wizard',
      emoji: '',
      title: 'Windows Wizard',
      description: 'Complete 3 Windows guides',
      condition: completedGuides.filter(g => g.category === 'windows-guides').length >= 3,
    },
    {
      id: 'mac_master',
      emoji: '',
      title: 'Mac Master',
      description: 'Complete 3 Mac guides',
      condition: completedGuides.filter(g => g.category === 'mac-guides').length >= 3,
    },
    {
      id: 'ai_curious',
      emoji: '',
      title: 'AI Curious',
      description: 'Complete an AI guide',
      condition: completedGuides.some(g => g.category === 'ai-guides'),
    },
  ];

  // Store any newly earned badges
  definitions.forEach(def => {
    if (def.condition) storeBadge(def.id);
  });

  const current = getStoredBadges();

  return definitions.map(def => ({
    id: def.id,
    emoji: def.emoji,
    title: def.title,
    description: def.description,
    earned: !!current[def.id],
    earnedAt: current[def.id],
  }));
}

export function getEarnedBadges(): Badge[] {
  return evaluateBadges().filter(b => b.earned);
}
