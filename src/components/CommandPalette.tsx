import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Item = { to: string; label: string };

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const items: Item[] = [
    { to: '/', label: 'Home' },
    { to: '/guides', label: 'Guides' },
    { to: '/tools', label: 'Tools' },
  ];
  const results = items.filter(i => i.label.toLowerCase().includes(query.toLowerCase()));
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);
  if (!open) return null;
  return (
    <div role="dialog" aria-label="Command Palette" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 9999 }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ width: 700, maxWidth: '90%', margin: '8vh auto', background: '#fff', borderRadius: 12, padding: 12, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
        <input autoFocus placeholder="Search guides, tools, pages..." value={query} onChange={e => setQuery(e.target.value)} style={{ width: '100%', padding: 10, border: '1px solid #ddd', borderRadius: 8 }} />
        <div style={{ marginTop: 8, maxHeight: 280, overflowY: 'auto' }}>
          {results.map(r => (
            <div key={r.to} style={{ padding: '8px 10px' }}>
              <Link to={r.to} onClick={onClose} style={{ textDecoration: 'none', color: 'inherit' }}>{r.label}</Link>
            </div>
          ))}
          {results.length === 0 && <div style={{ padding: 10, color: '#666' }}>No results</div>}
        </div>
      </div>
    </div>
  );
}
