import { describe, it, expect, beforeEach, vi } from 'vitest';
import { checkRateLimit, getRateLimitReset } from '@/lib/rateLimit';

describe('rateLimit', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  describe('checkRateLimit', () => {
    it('allows first attempt', () => {
      expect(checkRateLimit('test-action', 3)).toBe(true);
    });

    it('allows up to maxAttempts', () => {
      expect(checkRateLimit('test-action', 3)).toBe(true);
      expect(checkRateLimit('test-action', 3)).toBe(true);
      expect(checkRateLimit('test-action', 3)).toBe(true);
    });

    it('blocks after maxAttempts', () => {
      checkRateLimit('test-action', 2);
      checkRateLimit('test-action', 2);
      expect(checkRateLimit('test-action', 2)).toBe(false);
    });

    it('resets after window expires', () => {
      const now = Date.now();
      vi.spyOn(Date, 'now').mockReturnValue(now);

      checkRateLimit('test-action', 1, 1000);
      expect(checkRateLimit('test-action', 1, 1000)).toBe(false);

      // Move time forward past the window
      vi.spyOn(Date, 'now').mockReturnValue(now + 1001);
      expect(checkRateLimit('test-action', 1, 1000)).toBe(true);

      vi.restoreAllMocks();
    });

    it('tracks different keys independently', () => {
      checkRateLimit('action-a', 1);
      expect(checkRateLimit('action-a', 1)).toBe(false);
      expect(checkRateLimit('action-b', 1)).toBe(true);
    });
  });

  describe('getRateLimitReset', () => {
    it('returns 0 when no entry exists', () => {
      expect(getRateLimitReset('unknown')).toBe(0);
    });

    it('returns remaining time in the window', () => {
      const now = Date.now();
      vi.spyOn(Date, 'now').mockReturnValue(now);
      checkRateLimit('test-action', 1, 60000);

      vi.spyOn(Date, 'now').mockReturnValue(now + 10000);
      const remaining = getRateLimitReset('test-action', 60000);
      expect(remaining).toBe(50000);

      vi.restoreAllMocks();
    });

    it('returns 0 when window has expired', () => {
      const now = Date.now();
      vi.spyOn(Date, 'now').mockReturnValue(now);
      checkRateLimit('test-action', 1, 1000);

      vi.spyOn(Date, 'now').mockReturnValue(now + 2000);
      expect(getRateLimitReset('test-action', 1000)).toBe(0);

      vi.restoreAllMocks();
    });
  });
});
