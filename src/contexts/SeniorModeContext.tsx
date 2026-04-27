import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SeniorModeContextType {
  seniorMode: boolean;
  toggleSeniorMode: () => void;
}

const SeniorModeContext = createContext<SeniorModeContextType>({
  seniorMode: false,
  toggleSeniorMode: () => {},
});

export function SeniorModeProvider({ children }: { children: ReactNode }) {
  const [seniorMode, setSeniorMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      return localStorage.getItem('teksure-senior-mode') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('teksure-senior-mode', String(seniorMode));
    } catch {}

    const root = document.documentElement;
    if (seniorMode) {
      root.classList.add('senior-mode');
    } else {
      root.classList.remove('senior-mode');
    }
  }, [seniorMode]);

  const toggleSeniorMode = () => setSeniorMode(prev => !prev);

  return (
    <SeniorModeContext.Provider value={{ seniorMode, toggleSeniorMode }}>
      {children}
    </SeniorModeContext.Provider>
  );
}

export function useSeniorMode() {
  return useContext(SeniorModeContext);
}
