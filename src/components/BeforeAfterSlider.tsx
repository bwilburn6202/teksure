/**
 * BeforeAfterSlider — drag-handle comparison widget for guide steps.
 *
 * Shows two "screen states" side-by-side with a draggable divider.
 * Both panes use the same MockScreenshot-style chrome, labelled
 * "Before" and "After".
 *
 * Usage:
 *   <BeforeAfterSlider
 *     beforeCaption="Your network list shows no connection"
 *     afterCaption="WiFi icon now shows connected with full bars"
 *     beforeLabel="Before"   // optional
 *     afterLabel="After"     // optional
 *   />
 */

import { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BeforeAfterSliderProps {
  beforeCaption: string;
  afterCaption: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeCaption,
  afterCaption,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className,
}: BeforeAfterSliderProps) {
  const [split, setSplit] = useState(50); // percentage 0-100
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateSplit = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - left) / width) * 100));
    setSplit(pct);
  }, []);

  /* Mouse events */
  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    updateSplit(e.clientX);

    const onMove = (ev: MouseEvent) => { if (dragging.current) updateSplit(ev.clientX); };
    const onUp = () => { dragging.current = false; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  /* Touch events */
  const onTouchStart = (e: React.TouchEvent) => {
    const onMove = (ev: TouchEvent) => updateSplit(ev.touches[0].clientX);
    const onEnd = () => { document.removeEventListener('touchmove', onMove); document.removeEventListener('touchend', onEnd); };
    document.addEventListener('touchmove', onMove, { passive: true });
    document.addEventListener('touchend', onEnd);
  };

  return (
    <div className={cn('mt-4 rounded-xl overflow-hidden border border-border shadow-sm select-none', className)}>
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-3 py-2 bg-muted border-b border-border">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-3 h-6 rounded-md bg-background/80 border border-border flex items-center justify-center gap-1.5 px-3">
          <ArrowLeftRight className="h-3 w-3 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground">Drag to compare</span>
        </div>
      </div>

      {/* Comparison area */}
      <div
        ref={containerRef}
        className="relative bg-muted/30 cursor-col-resize"
        style={{ height: 160 }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* AFTER pane (full width, underneath) */}
        <div className="absolute inset-0 flex items-center justify-center px-6 py-4">
          <div className="flex items-start gap-2 max-w-sm">
            <Info className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed italic">{afterCaption}</p>
          </div>
        </div>

        {/* BEFORE pane (clipped to left side of split) */}
        <div
          className="absolute inset-0 overflow-hidden bg-muted/60"
          style={{ width: `${split}%` }}
        >
          <div className="absolute inset-0 flex items-center justify-center px-6 py-4">
            <div className="flex items-start gap-2" style={{ width: '100%', maxWidth: 320 }}>
              <Info className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed italic">{beforeCaption}</p>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 flex items-center justify-center pointer-events-none"
          style={{ left: `calc(${split}% - 1px)` }}
        >
          <div className="w-0.5 h-full bg-white/80 shadow" />
          {/* Handle knob */}
          <div
            className="absolute z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-lg border border-border pointer-events-auto cursor-col-resize"
            style={{ top: '50%', transform: 'translate(-50%, -50%)', left: '50%' }}
          >
            <ArrowLeftRight className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        {/* Labels */}
        <div
          className="absolute top-2 left-2 z-10 pointer-events-none"
          style={{ opacity: split > 15 ? 1 : 0, transition: 'opacity 0.2s' }}
        >
          <span className="text-[10px] font-bold uppercase tracking-wide text-white bg-black/40 rounded px-1.5 py-0.5">
            {beforeLabel}
          </span>
        </div>
        <div
          className="absolute top-2 right-2 z-10 pointer-events-none"
          style={{ opacity: split < 85 ? 1 : 0, transition: 'opacity 0.2s' }}
        >
          <span className="text-[10px] font-bold uppercase tracking-wide text-white bg-secondary/80 rounded px-1.5 py-0.5">
            {afterLabel}
          </span>
        </div>
      </div>

      {/* Caption strip */}
      <div className="flex border-t border-border text-xs text-muted-foreground">
        <div className="flex-1 px-4 py-2 bg-muted/60 border-r border-border">
          <span className="font-semibold text-foreground">{beforeLabel}: </span>
          {beforeCaption}
        </div>
        <div className="flex-1 px-4 py-2 bg-background">
          <span className="font-semibold text-secondary">{afterLabel}: </span>
          {afterCaption}
        </div>
      </div>
    </div>
  );
}
