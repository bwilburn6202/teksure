import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { UserRole } from '@/types/database';

interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
  fullName: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, role: UserRole, fullName: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (email: string, _password: string) => {
    setIsLoading(true);
    // TODO: Replace with Supabase auth
    await new Promise(r => setTimeout(r, 600));
    let role: UserRole = 'customer';
    if (email.includes('tech')) role = 'tech';
    if (email.includes('admin')) role = 'admin';
    setUser({ id: crypto.randomUUID(), email, role, fullName: email.split('@')[0] });
    setIsLoading(false);
  }, []);

  const signup = useCallback(async (email: string, _password: string, role: UserRole, fullName: string) => {
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 600));
    setUser({ id: crypto.randomUUID(), email, role, fullName });
    setIsLoading(false);
  }, []);

  const logout = useCallback(() => setUser(null), []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
