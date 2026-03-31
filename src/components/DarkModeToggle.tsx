import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('teksure-theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('teksure-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setDark(d => !d)}
          className="h-11 w-11"
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {dark ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-xs">{dark ? 'Light mode' : 'Dark mode'}</p>
      </TooltipContent>
    </Tooltip>
  );
}
