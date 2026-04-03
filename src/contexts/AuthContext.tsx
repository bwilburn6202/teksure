import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { User, Session } from '@supabase/supabase-js';
import type { UserRole } from '@/types/database';

interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
  fullName: string;
}

interface AuthContextType {
  user: AuthUser | null;
  session: Session | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ error: string | null }>;
  signup: (email: string, password: string, role: UserRole, fullName: string) => Promise<{ error: string | null; needsConfirmation: boolean }>;
  loginWithProvider: (provider: 'google' | 'apple') => Promise<{ error: string | null }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

async function fetchProfile(userId: string): Promise<{ role: UserRole; fullName: string } | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('role, full_name')
    .eq('id', userId)
    .single();
  if (error || !data) return null;
  return { role: data.role as UserRole, fullName: data.full_name || '' };
}

function buildAuthUser(supaUser: User, profile: { role: UserRole; fullName: string }): AuthUser {
  return {
    id: supaUser.id,
    email: supaUser.email || '',
    role: profile.role,
    fullName: profile.fullName,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set up auth listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, newSession) => {
      setSession(newSession);
      if (newSession?.user) {
        // Use setTimeout to avoid Supabase client deadlock
        setTimeout(async () => {
          const profile = await fetchProfile(newSession.user.id);
          if (profile) {
            setUser(buildAuthUser(newSession.user, profile));
          } else {
            // Fallback to metadata if profile isn't ready yet
            setUser({
              id: newSession.user.id,
              email: newSession.user.email || '',
              role: (newSession.user.user_metadata?.role as UserRole) || 'customer',
              fullName: (newSession.user.user_metadata?.full_name as string) || '',
            });
          }
          setIsLoading(false);
        }, 0);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });

    // THEN check existing session
    supabase.auth.getSession().then(async ({ data: { session: existingSession } }) => {
      setSession(existingSession);
      if (existingSession?.user) {
        const profile = await fetchProfile(existingSession.user.id);
        if (profile) {
          setUser(buildAuthUser(existingSession.user, profile));
        }
      }
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error?.message || null };
  }, []);

  const signup = useCallback(async (email: string, password: string, role: UserRole, fullName: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { role, full_name: fullName },
        emailRedirectTo: window.location.origin,
      },
    });
    if (error) return { error: error.message, needsConfirmation: false };
    // If user exists but identities is empty, email is already taken
    const needsConfirmation = !!data.user && !data.session;
    return { error: null, needsConfirmation };
  }, []);

  const loginWithProvider = useCallback(async (provider: 'google' | 'apple') => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: window.location.origin },
    });
    return { error: error?.message || null };
  }, []);

  const logout = useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, session, isLoading, login, signup, loginWithProvider, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
