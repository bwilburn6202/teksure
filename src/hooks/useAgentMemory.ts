/**
 * useAgentMemory — React hook for the four-tier agent memory system.
 *
 * Provides observe/recall/remember/forget functions and manages
 * automatic consolidation and cleanup on mount.
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  observe,
  recall,
  remember,
  forget,
  forgetAll,
  getProfile,
  getStats,
  consolidate,
  autoForget,
  type MemoryEntry,
  type MemoryTier,
  type MemoryCategory,
  type ObservePayload,
  type SearchOptions,
} from '@/services/agentMemory';

export interface UseAgentMemoryReturn {
  /** Capture an observation into memory */
  observe: (payload: ObservePayload) => Promise<MemoryEntry | null>;
  /** Search memories by query + filters */
  recall: (query: string, options?: SearchOptions) => Promise<MemoryEntry[]>;
  /** Save an explicit long-term memory */
  remember: (category: MemoryCategory, key: string, value: Record<string, unknown>, importance?: number) => Promise<MemoryEntry | null>;
  /** Delete a specific memory */
  forget: (memoryId: string) => Promise<boolean>;
  /** Clear all memories */
  forgetAll: () => Promise<boolean>;
  /** Get all memories grouped by tier */
  profile: Record<MemoryTier, MemoryEntry[]> | null;
  /** Memory statistics */
  stats: { total: number; byTier: Record<MemoryTier, number> } | null;
  /** Whether memory is currently loading */
  loading: boolean;
  /** Refresh profile data */
  refresh: () => Promise<void>;
}

export function useAgentMemory(): UseAgentMemoryReturn {
  const [profile, setProfile] = useState<Record<MemoryTier, MemoryEntry[]> | null>(null);
  const [stats, setStats] = useState<{ total: number; byTier: Record<MemoryTier, number> } | null>(null);
  const [loading, setLoading] = useState(true);
  const initialized = useRef(false);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const [p, s] = await Promise.all([getProfile(), getStats()]);
      setProfile(p);
      setStats(s);
    } catch (err) {
      console.warn('[useAgentMemory] Failed to load profile', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial load + periodic maintenance
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    (async () => {
      // Run auto-forget and consolidation in background
      await Promise.all([
        autoForget().catch(() => {}),
        consolidate().catch(() => {}),
      ]);
      await refresh();
    })();
  }, [refresh]);

  const wrappedObserve = useCallback(async (payload: ObservePayload) => {
    const result = await observe(payload);
    // Don't block on refresh — fire and forget
    refresh().catch(() => {});
    return result;
  }, [refresh]);

  const wrappedRecall = useCallback(async (query: string, options?: SearchOptions) => {
    return recall(query, options);
  }, []);

  const wrappedRemember = useCallback(async (
    category: MemoryCategory,
    key: string,
    value: Record<string, unknown>,
    importance?: number
  ) => {
    const result = await remember(category, key, value, importance);
    refresh().catch(() => {});
    return result;
  }, [refresh]);

  const wrappedForget = useCallback(async (memoryId: string) => {
    const result = await forget(memoryId);
    if (result) refresh().catch(() => {});
    return result;
  }, [refresh]);

  const wrappedForgetAll = useCallback(async () => {
    const result = await forgetAll();
    if (result) refresh().catch(() => {});
    return result;
  }, [refresh]);

  return {
    observe: wrappedObserve,
    recall: wrappedRecall,
    remember: wrappedRemember,
    forget: wrappedForget,
    forgetAll: wrappedForgetAll,
    profile,
    stats,
    loading,
    refresh,
  };
}
