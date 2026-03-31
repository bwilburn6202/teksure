import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`h-10 w-10 shrink-0 ${className}`}
          onClick={handleCopy}
          aria-label="Copy to clipboard"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-[hsl(var(--teksure-success))]" /> : <Copy className="h-3.5 w-3.5" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-xs">{copied ? 'Copied!' : 'Copy'}</p>
      </TooltipContent>
    </Tooltip>
  );
}
