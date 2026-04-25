/**
 * LanguageToggle — compact EN / ES switcher for the Navbar.
 */
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const currentLanguage = lang === 'es' ? 'Español' : 'English';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-11 w-11 rounded-lg gap-0.5 text-muted-foreground hover:text-foreground"
          aria-label={`Language: ${currentLanguage}. Click to change.`}
        >
          <Globe className="h-4 w-4" aria-hidden="true" />
          <span className="text-[11px] font-semibold uppercase leading-none">{lang}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        <DropdownMenuItem
          onClick={() => setLang('en')}
          aria-current={lang === 'en' ? 'true' : undefined}
          className={lang === 'en' ? 'font-semibold text-secondary' : ''}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLang('es')}
          aria-current={lang === 'es' ? 'true' : undefined}
          className={lang === 'es' ? 'font-semibold text-secondary' : ''}
        >
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
