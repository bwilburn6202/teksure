import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export function ScreenshotLightbox({
  open,
  onOpenChange,
  screenshotUrl,
  screenshotAlt,
  annotations,
}: {
  open: boolean;
  onOpenChange: (val: boolean) => void;
  screenshotUrl: string;
  screenshotAlt?: string;
  annotations?: any[];
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenChange(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onOpenChange]);

  if (!open) return null;
  const altText = screenshotAlt ?? 'Screenshot';
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={altText}
      onClick={() => onOpenChange(false)}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9999 }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ position: 'relative', maxWidth: '860px', margin: '5vh auto', background: '#fff', padding: 16, borderRadius: 8 }}
      >
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          aria-label="Close screenshot"
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 44,
            height: 44,
            borderRadius: 9999,
            background: 'rgba(255,255,255,0.95)',
            border: '1px solid #E4DFD4',
            color: '#1A1A1A',
            cursor: 'pointer',
            zIndex: 1,
          }}
        >
          <X aria-hidden="true" style={{ width: 20, height: 20 }} />
        </button>
        <img src={screenshotUrl} alt={altText} style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
}
