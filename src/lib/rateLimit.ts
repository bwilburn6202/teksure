/**
 * Client-side rate limiter for form submissions.
 * Prevents accidental double-submits and basic spam.
 *
 * For production, this should be paired with server-side rate limiting
 * in Supabase Edge Functions using request IP/user ID.
 */

const isServer = typeof window === 'undefined';

interface RateLimitEntry {
  count: number;
  windowStart: number;
}

const STORAGE_KEY = 'teksure-rate-limits';

function getEntries(): Record<string, RateLimitEntry> {
  if (isServer) return {};
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? '{}');
  } catch {
    return {};
  }
}

function saveEntries(entries: Record<string, RateLimitEntry>) {
  if (isServer) return;
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

/**
 * Check if an action is rate limited.
 * @param key - Unique identifier for the action (e.g., 'help-request', 'forum-post')
 * @param maxAttempts - Maximum number of attempts per window
 * @param windowMs - Time window in milliseconds (default: 60 seconds)
 * @returns true if allowed, false if rate limited
 */
export function checkRateLimit(key: string, maxAttempts: number, windowMs = 60_000): boolean {
  const entries = getEntries();
  const now = Date.now();
  const entry = entries[key];

  if (!entry || now - entry.windowStart > windowMs) {
    // Start a new window
    entries[key] = { count: 1, windowStart: now };
    saveEntries(entries);
    return true;
  }

  if (entry.count >= maxAttempts) {
    return false;
  }

  entry.count++;
  saveEntries(entries);
  return true;
}

/**
 * Get remaining time until rate limit resets.
 */
export function getRateLimitReset(key: string, windowMs = 60_000): number {
  const entries = getEntries();
  const entry = entries[key];
  if (!entry) return 0;
  const elapsed = Date.now() - entry.windowStart;
  return Math.max(0, windowMs - elapsed);
}
