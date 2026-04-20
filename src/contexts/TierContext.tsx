import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

/**
 * 4-tier experience level system.
 *
 * The site segments content and guidance by how comfortable the user already is
 * with technology. Tier is a client-side preference (localStorage) and, for
 * signed-in users, mirrored to `profiles.tier` so it persists across devices.
 *
 *  🌱 just-starting      — First week on a smartphone / computer.
 *  🌤️ getting-comfortable — Knows the basics, still learning.
 *  ☀️ confident           — Uses tech daily, wants to go deeper.
 *  ⚡ power-user          — Comfortable with advanced topics.
 */
export type UserTier =
  | 'just-starting'
  | 'getting-comfortable'
  | 'confident'
  | 'power-user';

export const TIER_META: Record<UserTier, { emoji: string; label: string; short: string; description: string }> = {
  'just-starting': {
    emoji: '🌱',
    label: 'Just Starting',
    short: 'New to this',
    description: 'First steps with a phone or computer. Every word explained.',
  },
  'getting-comfortable': {
    emoji: '🌤️',
    label: 'Getting Comfortable',
    short: 'Learning',
    description: 'Know the basics. Ready to learn new things week by week.',
  },
  'confident': {
    emoji: '☀️',
    label: 'Confident',
    short: 'Doing well',
    description: 'Use tech every day. Want deeper tools and shortcuts.',
  },
  'power-user': {
    emoji: '⚡',
    label: 'Power User',
    short: 'Advanced',
    description: 'Comfortable with advanced topics. Give me the details.',
  },
};

export const TIER_ORDER: UserTier[] = [
  'just-starting',
  'getting-comfortable',
  'confident',
  'power-user',
];

interface TierContextType {
  /** The user's chosen tier. `null` means not yet chosen. */
  tier: UserTier | null;
  /** Whether the user has explicitly picked a tier (vs. accepting a default). */
  hasChosen: boolean;
  setTier: (tier: UserTier) => void;
  resetTier: () => void;
}

const TierContext = createContext<TierContextType>({
  tier: null,
  hasChosen: false,
  setTier: () => {},
  resetTier: () => {},
});

const STORAGE_KEY = 'teksure-tier';
const CHOSEN_KEY = 'teksure-tier-chosen';

function readTier(): UserTier | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw && (TIER_ORDER as string[]).includes(raw)) return raw as UserTier;
  } catch {}
  return null;
}

function readChosen(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem(CHOSEN_KEY) === 'true';
  } catch {
    return false;
  }
}

export function TierProvider({ children }: { children: ReactNode }) {
  const [tier, setTierState] = useState<UserTier | null>(() => readTier());
  const [hasChosen, setHasChosen] = useState<boolean>(() => readChosen());

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      if (tier) localStorage.setItem(STORAGE_KEY, tier);
      else localStorage.removeItem(STORAGE_KEY);
    } catch {}

    // Expose a data attribute so CSS can tier-target if we ever need to.
    const root = document.documentElement;
    if (tier) root.setAttribute('data-tier', tier);
    else root.removeAttribute('data-tier');
  }, [tier]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(CHOSEN_KEY, String(hasChosen));
    } catch {}
  }, [hasChosen]);

  // Persist tier to profiles.tier for signed-in users
  const persistToBackend = useCallback(async (next: UserTier | null) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      await supabase.from('profiles').update({ tier: next }).eq('id', user.id);
    } catch {
      // Non-fatal — localStorage is the primary store, backend is a mirror
    }
  }, []);

  // Sync tier from backend whenever auth state changes (login, logout, user switch)
  useEffect(() => {
    const syncFromBackend = async (userId: string | null) => {
      if (!userId) {
        // Signed out — fall back to localStorage (already in state)
        return;
      }
      try {
        const { data } = await supabase
          .from('profiles')
          .select('tier')
          .eq('id', userId)
          .single();
        if (data?.tier && (TIER_ORDER as string[]).includes(data.tier)) {
          setTierState(data.tier as UserTier);
          setHasChosen(true);
        }
      } catch {}
    };

    // Initial check
    supabase.auth.getUser().then(({ data: { user } }) => syncFromBackend(user?.id ?? null));

    // Re-sync on every auth state change
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      syncFromBackend(session?.user?.id ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const setTier = (next: UserTier) => {
    setTierState(next);
    setHasChosen(true);
    persistToBackend(next);
  };

  const resetTier = () => {
    setTierState(null);
    setHasChosen(false);
    persistToBackend(null);
  };

  return (
    <TierContext.Provider value={{ tier, hasChosen, setTier, resetTier }}>
      {children}
    </TierContext.Provider>
  );
}

export function useTier() {
  return useContext(TierContext);
}
