import { useState, useCallback, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { ZoomIn, ZoomOut, RotateCcw, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ScreenshotAnnotation } from '@/data/guides';

interface ScreenshotLightboxProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  screenshotUrl: string;
  screenshotAlt?: string;
  annotations?: ScreenshotAnnotation[];
}

const AnnotationOverlay = ({ annotations }: { annotations: ScreenshotAnnotation[] }) => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    {annotations.map((a, i) => {
      if (a.type === 'callout') {
        return (
          <g key={i}>
            <circle cx={a.x} cy={a.y} r="3" fill="#ef4444" opacity="0.92" />
            <circle cx={a.x} cy={a.y} r="3" fill="none" stroke="white" strokeWidth="0.6" />
            <text x={a.x} y={a.y + 1.1} textAnchor="middle" fontSize="3" fill="white" fontWeight="bold" fontFamily="sans-serif">
              {a.label ?? String(i + 1)}
            </text>
          </g>
        );
      }
      if (a.type === 'arrow') {
        const dir = a.direction ?? 'down';
        const arrowPaths: Record<string, string> = {
          down:  `M${a.x},${a.y - 6} L${a.x},${a.y - 1} M${a.x - 2},${a.y - 3.5} L${a.x},${a.y - 1} L${a.x + 2},${a.y - 3.5}`,
          up:    `M${a.x},${a.y + 6} L${a.x},${a.y + 1} M${a.x - 2},${a.y + 3.5} L${a.x},${a.y + 1} L${a.x + 2},${a.y + 3.5}`,
          right: `M${a.x - 6},${a.y} L${a.x - 1},${a.y} M${a.x - 3.5},${a.y - 2} L${a.x - 1},${a.y} L${a.x - 3.5},${a.y + 2}`,
          left:  `M${a.x + 6},${a.y} L${a.x + 1},${a.y} M${a.x + 3.5},${a.y - 2} L${a.x + 1},${a.y} L${a.x + 3.5},${a.y + 2}`,
        };
        return (
          <g key={i}>
            <path d={arrowPaths[dir]} stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {a.label && (
              <text x={a.x} y={a.y - 8} textAnchor="middle" fontSize="3" fill="#ef4444" fontWeight="bold" fontFamily="sans-serif">{a.label}</text>
            )}
          </g>
        );
      }
      if (a.type === 'highlight') {
        const w = a.width ?? 20;
        const h = a.height ?? 10;
        return (
          <g key={i}>
            <rect x={a.x} y={a.y} width={w} height={h} fill="#fbbf24" opacity="0.25" rx="1" />
            <rect x={a.x} y={a.y} width={w} height={h} fill="none" stroke="#f59e0b" strokeWidth="0.6" rx="1" />
          </g>
        );
      }
      return null;
    })}
  </svg>
);

export function ScreenshotLightbox({
  open,
  onOpenChange,
  screenshotUrl,
  screenshotAlt,
  annotations,
}: ScreenshotLightboxProps) {
  const [zoom, setZoom] = useState(1);

  const resetZoom = useCallback(() => setZoom(1), []);

  useEffect(() => {
    if (!open) setZoom(1);
  }, [open]);

  const zoomIn = useCallback(() => setZoom(z => Math.min(z + 0.5, 3)), []);
  const zoomOut = useCallback(() => setZoom(z => Math.max(z - 0.5, 0.5)), []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[95vw] max-h-[95vh] w-auto p-0 border-0 bg-transparent shadow-none overflow-hidden [&>button]:hidden"
      >
        <DialogTitle className="sr-only">{screenshotAlt || 'Screenshot'}</DialogTitle>

        {/* Toolbar */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-black/70 rounded-lg px-2 py-1 backdrop-blur-sm">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-white hover:bg-white/20"
            onClick={zoomIn}
            aria-label="Zoom in"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <span className="text-white text-xs font-mono min-w-[3ch] text-center">{Math.round(zoom * 100)}%</span>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-white hover:bg-white/20"
            onClick={zoomOut}
            aria-label="Zoom out"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-white hover:bg-white/20"
            onClick={resetZoom}
            aria-label="Reset zoom"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </Button>
          <div className="w-px h-5 bg-white/30 mx-1" />
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-white hover:bg-white/20"
            onClick={() => onOpenChange(false)}
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Image container */}
        <div className="overflow-auto max-h-[95vh] flex items-center justify-center">
          <div
            className="relative transition-transform duration-200 ease-out"
            style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
          >
            <img
              src={screenshotUrl}
              alt={screenshotAlt || ''}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              draggable={false}
            />
            {annotations && annotations.length > 0 && (
              <AnnotationOverlay annotations={annotations} />
            )}
          </div>
        </div>

        {/* Annotation legend */}
        {annotations && annotations.filter(a => a.label && a.type !== 'highlight').length > 0 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 rounded-lg px-4 py-2 backdrop-blur-sm flex flex-wrap gap-3">
            {annotations.filter(a => a.label && a.type !== 'highlight').map((a, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-white">
                {a.type === 'callout' && (
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-bold shrink-0">
                    {a.label}
                  </span>
                )}
                {a.type === 'arrow' && <span className="text-red-400 font-bold">↓</span>}
                {a.label}
              </span>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
