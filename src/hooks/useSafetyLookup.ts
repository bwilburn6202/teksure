import { useCallback, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type SafetyVerdict = 'safe' | 'caution' | 'danger' | 'unknown';
export type SafetyKind = 'url' | 'phone' | 'email';

export interface SafetyReason {
  source: string;
  detail: string;
  severity: SafetyVerdict;
}

export interface SafetyResult {
  verdict: SafetyVerdict;
  summary: string;
  reasons: SafetyReason[];
  sources: string[];
  cached?: boolean;
  checkedAt?: string;
}

interface LookupArgs {
  kind: SafetyKind;
  value: string;
}

/**
 * Client hook for the `safety-lookup` Supabase edge function.
 *
 *   const { check, result, loading, error } = useSafetyLookup();
 *   await check({ kind: 'url', value: 'http://suspicious.xyz' });
 *
 * Any upstream failure (missing API keys, network issues, etc.) is degraded
 * to a caution/unknown verdict rather than thrown — the UI should still
 * render something useful to the user.
 */
export function useSafetyLookup() {
  const [result, setResult] = useState<SafetyResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const check = useCallback(async ({ kind, value }: LookupArgs): Promise<SafetyResult | null> => {
    const cleaned = value.trim();
    if (!cleaned) {
      setError('Please enter something to check.');
      return null;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke('safety-lookup', {
        body: { kind, value: cleaned },
      });

      if (fnError) {
        throw new Error(fnError.message || 'Safety lookup failed');
      }

      const payload = (data ?? {}) as SafetyResult;

      // Defensive defaults — the edge function should always return these
      // fields, but callers still get something renderable if it doesn't.
      const normalised: SafetyResult = {
        verdict: payload.verdict ?? 'unknown',
        summary:
          payload.summary ??
          "We couldn't reach every safety source, but here's what we found.",
        reasons: Array.isArray(payload.reasons)
          ? (payload.reasons as unknown[]).map(r =>
              typeof r === 'string'
                ? { source: 'system', detail: r, severity: 'unknown' as SafetyVerdict }
                : r as SafetyReason
            )
          : [],
        sources: Array.isArray(payload.sources)
          ? (payload.sources as unknown[]).map(s =>
              typeof s === 'string' ? s : (s as { name: string }).name
            )
          : [],
        cached: payload.cached ?? false,
        checkedAt: payload.checkedAt,
      };

      setResult(normalised);
      return normalised;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Safety lookup failed';
      setError(message);

      // Degrade gracefully so the UI can still render
      const fallback: SafetyResult = {
        verdict: 'unknown',
        summary:
          "We couldn't finish the safety check right now. Treat unfamiliar links and numbers with extra caution.",
        reasons: [{ source: 'system', detail: message, severity: 'unknown' }],
        sources: [],
      };
      setResult(fallback);
      return fallback;
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setResult(null);
    setError(null);
    setLoading(false);
  }, []);

  return { check, result, loading, error, reset };
}

/**
 * Verdict → colour tokens used by every OSINT tool. Kept in one place so a
 * scam-orange change propagates everywhere.
 */
export const VERDICT_STYLE: Record<
  SafetyVerdict,
  { label: string; border: string; bg: string; iconClass: string; badge: string }
> = {
  safe: {
    label: 'Looks safe',
    border: 'border-green-400 dark:border-green-600',
    bg: 'bg-green-50 dark:bg-green-950/20',
    iconClass: 'text-green-600',
    badge: 'bg-green-100 text-green-700',
  },
  caution: {
    label: 'Be careful',
    border: 'border-amber-400 dark:border-amber-600',
    bg: 'bg-amber-50 dark:bg-amber-950/20',
    iconClass: 'text-amber-500',
    badge: 'bg-amber-100 text-amber-700',
  },
  danger: {
    label: 'Do not use',
    border: 'border-red-400 dark:border-red-600',
    bg: 'bg-red-50 dark:bg-red-950/20',
    iconClass: 'text-red-500',
    badge: 'bg-red-100 text-red-700',
  },
  unknown: {
    label: 'Not enough info',
    border: 'border-zinc-300 dark:border-zinc-700',
    bg: 'bg-zinc-50 dark:bg-zinc-900/40',
    iconClass: 'text-zinc-500',
    badge: 'bg-zinc-100 text-zinc-700',
  },
};
