/**
 * Practice Rooms — local progress tracking.
 *
 * Lives entirely in localStorage for now. Two reasons:
 *   1. We want the practice rooms to feel instant, even offline.
 *   2. Practice scores are low-stakes — losing a streak on signout
 *      would be more annoying than helpful.
 *
 * If we later decide cross-device sync matters, we can mirror this into
 * Supabase the same way useProgress does it.
 */

const STORAGE_KEY = 'teksure-practice-progress';
const EVENT_NAME = 'teksure-practice-update';

export type PracticeRoom = 'inbox' | 'phone';

export interface PracticeAttempt {
  scenarioId: string;
  /** What the user picked. */
  guess: 'phishing' | 'legit';
  /** What it actually was. */
  truth: 'phishing' | 'legit';
  correct: boolean;
  /** epoch ms */
  at: number;
}

export interface PracticeProgress {
  /** All historical attempts, newest first. Capped at 200 to keep storage small. */
  attempts: PracticeAttempt[];
  /** Per-room running stats. */
  rooms: Record<
    PracticeRoom,
    {
      totalSeen: number;
      totalCorrect: number;
      currentStreak: number;
      bestStreak: number;
      lastPlayedAt: number | null;
    }
  >;
  /** Per-scenario best result (so we know what they\'ve mastered). */
  scenarios: Record<string, { lastGuess: 'phishing' | 'legit'; lastCorrect: boolean; lastAt: number }>;
}

function emptyProgress(): PracticeProgress {
  return {
    attempts: [],
    rooms: {
      inbox: { totalSeen: 0, totalCorrect: 0, currentStreak: 0, bestStreak: 0, lastPlayedAt: null },
      phone: { totalSeen: 0, totalCorrect: 0, currentStreak: 0, bestStreak: 0, lastPlayedAt: null },
    },
    scenarios: {},
  };
}

export function getPracticeProgress(): PracticeProgress {
  if (typeof window === 'undefined') return emptyProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as PracticeProgress;
    // Hydrate missing rooms / scenarios in case the schema grew between sessions.
    return {
      ...emptyProgress(),
      ...parsed,
      rooms: { ...emptyProgress().rooms, ...(parsed.rooms || {}) },
      scenarios: parsed.scenarios || {},
    };
  } catch {
    return emptyProgress();
  }
}

function writeProgress(next: PracticeProgress) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // quota exceeded or storage disabled — silently no-op
  }
  try {
    window.dispatchEvent(new CustomEvent(EVENT_NAME));
  } catch {}
}

/**
 * Record a guess against a scenario. Updates the per-room streak counter.
 * Returns the new full progress object so callers can render immediately.
 */
export function recordPracticeAttempt(params: {
  room: PracticeRoom;
  scenarioId: string;
  guess: 'phishing' | 'legit';
  truth: 'phishing' | 'legit';
}): PracticeProgress {
  const current = getPracticeProgress();
  const correct = params.guess === params.truth;
  const now = Date.now();

  const attempt: PracticeAttempt = {
    scenarioId: params.scenarioId,
    guess: params.guess,
    truth: params.truth,
    correct,
    at: now,
  };

  const roomStats = current.rooms[params.room];
  const newStreak = correct ? roomStats.currentStreak + 1 : 0;
  const newBest = Math.max(roomStats.bestStreak, newStreak);

  const next: PracticeProgress = {
    attempts: [attempt, ...current.attempts].slice(0, 200),
    rooms: {
      ...current.rooms,
      [params.room]: {
        totalSeen: roomStats.totalSeen + 1,
        totalCorrect: roomStats.totalCorrect + (correct ? 1 : 0),
        currentStreak: newStreak,
        bestStreak: newBest,
        lastPlayedAt: now,
      },
    },
    scenarios: {
      ...current.scenarios,
      [params.scenarioId]: {
        lastGuess: params.guess,
        lastCorrect: correct,
        lastAt: now,
      },
    },
  };

  writeProgress(next);
  return next;
}

/**
 * Reset a room's streak (used when the user explicitly starts a new session).
 * Total seen / correct stay — only the streak is reset.
 */
export function resetPracticeStreak(room: PracticeRoom): PracticeProgress {
  const current = getPracticeProgress();
  const next: PracticeProgress = {
    ...current,
    rooms: {
      ...current.rooms,
      [room]: { ...current.rooms[room], currentStreak: 0 },
    },
  };
  writeProgress(next);
  return next;
}

/** Reset everything — used by the "Clear practice history" action. */
export function clearPracticeProgress(): PracticeProgress {
  const fresh = emptyProgress();
  writeProgress(fresh);
  return fresh;
}

/** Compute accuracy as a 0–100 number. Returns 0 if no attempts. */
export function accuracyPercent(room: PracticeRoom, progress?: PracticeProgress): number {
  const p = progress ?? getPracticeProgress();
  const stats = p.rooms[room];
  if (!stats || stats.totalSeen === 0) return 0;
  return Math.round((stats.totalCorrect / stats.totalSeen) * 100);
}

/** Subscribe to practice-progress changes (for live badges in the UI). */
export function subscribeToPracticeUpdates(handler: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const wrapped = () => handler();
  window.addEventListener(EVENT_NAME, wrapped);
  // Cross-tab updates also fire `storage` events.
  const storageHandler = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) handler();
  };
  window.addEventListener('storage', storageHandler);
  return () => {
    window.removeEventListener(EVENT_NAME, wrapped);
    window.removeEventListener('storage', storageHandler);
  };
}
