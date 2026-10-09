import { useEffect, useState } from 'react';

/**
 * Cmd/Ctrl+K toggles the global search modal.
 *
 * Lives apart from SearchModal.tsx on purpose: the modal imports the full guide
 * library (~17 MB of source), and App.tsx needs this hook on every page. When
 * the two shared a file, every page — the homepage included — preloaded the
 * whole guide-data chunk to support a shortcut most visitors never press.
 */
export function useSearchModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(v => !v);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return { open, setOpen, onClose: () => setOpen(false) };
}
