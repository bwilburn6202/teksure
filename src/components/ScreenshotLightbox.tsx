import React from 'react';

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
  if (!open) return null;
  return (
    <div role="dialog" aria-label={screenshotAlt ?? 'Screenshot'} onClick={() => onOpenChange(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9999 }}>
      <div onClick={e => e.stopPropagation()} style={{ maxWidth: '860px', margin: '5vh auto', background: '#fff', padding: 16, borderRadius: 8 }}>
        <img src={screenshotUrl} alt={screenshotAlt} style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
}
