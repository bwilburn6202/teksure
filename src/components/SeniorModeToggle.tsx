import { useSeniorMode } from '@/contexts/SeniorModeContext';
import { UserCog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';

export function SeniorModeToggle() {
  const { seniorMode, toggleSeniorMode } = useSeniorMode();

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSeniorMode}
            aria-label={seniorMode ? 'Turn off Senior Tech Mode' : 'Turn on Senior Tech Mode'}
            className={`h-8 w-8 rounded-lg transition-colors ${
              seniorMode
                ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            title={seniorMode ? 'Senior Mode ON' : 'Senior Mode OFF'}
          >
            <UserCog className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-xs max-w-[200px] text-center">
          {seniorMode
            ? 'Senior Mode is ON — larger buttons, reduced motion, simplified view. Click to turn off.'
            : 'Senior Mode — bigger buttons, calmer animations, simpler navigation.'}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
