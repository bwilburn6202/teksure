import { useHighContrast } from '@/contexts/HighContrastContext';
import { Contrast } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';

export function HighContrastToggle() {
  const { highContrast, toggleHighContrast } = useHighContrast();

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleHighContrast}
            aria-label={highContrast ? 'Turn off High Contrast Mode' : 'Turn on High Contrast Mode'}
            className={`h-8 w-8 rounded-lg transition-colors ${
              highContrast
                ? 'bg-foreground text-background hover:bg-foreground/90'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            title={highContrast ? 'High Contrast ON' : 'High Contrast OFF'}
          >
            <Contrast className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-xs max-w-[200px] text-center">
          {highContrast
            ? 'High Contrast is ON — stronger text contrast for easier reading. Click to turn off.'
            : 'High Contrast Mode — bolder text and sharper borders for easier reading.'}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
