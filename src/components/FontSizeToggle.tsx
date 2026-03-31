import { useState, useEffect } from 'react';
import { AArrowUp, AArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const SIZES = ['normal', 'large', 'xl', 'xxl'] as const;
type FontSize = typeof SIZES[number];

const LABELS: Record<FontSize, string> = {
  normal: 'Normal',
  large: 'Large',
  xl: 'Extra Large',
  xxl: 'Large Print',
};

const CSS_CLASSES: Record<FontSize, string> = {
  normal: '',
  large: 'font-size-large',
  xl: 'font-size-xl',
  xxl: 'font-size-xxl',
};

export function FontSizeToggle() {
  const [size, setSize] = useState<FontSize>(() => {
    const stored = localStorage.getItem('teksure-font-size');
    return (SIZES.includes(stored as FontSize) ? stored : 'normal') as FontSize;
  });

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('font-size-large', 'font-size-xl', 'font-size-xxl');
    if (CSS_CLASSES[size]) {
      html.classList.add(CSS_CLASSES[size]);
    }
    localStorage.setItem('teksure-font-size', size);
  }, [size]);

  const cycle = () => {
    const idx = SIZES.indexOf(size);
    setSize(SIZES[(idx + 1) % SIZES.length]);
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={cycle}
          className="h-11 w-11"
          aria-label={`Font size: ${LABELS[size]}. Click to change.`}
        >
          {size === 'xxl' ? (
            <AArrowDown className="h-4 w-4" />
          ) : (
            <AArrowUp className="h-4 w-4" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-xs">Text: {LABELS[size]}</p>
      </TooltipContent>
    </Tooltip>
  );
}
