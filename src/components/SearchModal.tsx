import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { guides, categoryLabels } from '@/data/guides';
import { getGuideThumbnailSmall } from '@/lib/guideThumbnails';

// Import glossary terms for search
const glossaryTerms = [
  'Algorithm', 'Antivirus', 'App', 'Bandwidth', 'BIOS', 'Bluetooth', 'Bookmark', 'Browser', 'Bug', 'Cache',
  'Cloud', 'Cookie', 'CPU', 'Cybersecurity', 'DNS', 'Download', 'Driver', 'Encryption', 'Ethernet', 'Extension',
  'Firewall', 'Firmware', 'GHz', 'GPS', 'GPU', 'Hard Drive (HDD)', 'HDMI', 'HTML', 'HTTP/HTTPS', 'IP Address',
  'ISP', 'Keyboard Shortcut', 'LAN', 'Latency', 'Malware', 'Mbps', 'Modem', 'Multitasking', 'Operating System (OS)',
  'Overclocking', 'Password Manager', 'Phishing', 'Pixel', 'Plug-in', 'Port', 'RAM', 'Ransomware', 'Resolution',
  'Router', 'Screenshot', 'Server', 'SSD', 'Streaming', 'Sync', 'Task Manager', 'Two-Factor Authentication (2FA)',
  'Update', 'Upload', 'URL', 'USB', 'VPN', 'Virus', 'WAN', 'Wi-Fi', 'Zero-Day',
];

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return { guides: [], glossary: [] };
    const q = query.toLowerCase();
    const matchedGuides = guides.filter(g =>
      g.title.toLowerCase().includes(q) || g.tags.some(t => t.includes(q))
    ).slice(0, 8);
    const matchedGlossary = glossaryTerms.filter(t =>
      t.toLowerCase().includes(q)
    ).slice(0, 6);
    return { guides: matchedGuides, glossary: matchedGlossary };
  }, [query]);

  const hasResults = results.guides.length > 0 || results.glossary.length > 0;

  const navigateTo = useCallback((path: string) => {
    onClose();
    navigate(path);
  }, [navigate, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
      onClick={onClose}
      onKeyDown={e => e.key === 'Escape' && onClose()}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className="relative w-full max-w-lg mx-4 bg-card rounded-xl shadow-2xl border border-border overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 border-b border-border">
          <Search className="h-5 w-5 text-muted-foreground shrink-0" aria-hidden="true" />
          <Input
            ref={inputRef}
            placeholder="Search guides and glossary..."
            className="border-0 shadow-none focus-visible:ring-0 h-14 text-base"
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Search guides and glossary"
          />
          <button onClick={onClose} className="shrink-0 p-1 hover:bg-muted rounded" aria-label="Close search">
            <X className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          </button>
        </div>

        {/* Screen reader announcement for result count */}
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {query.trim() && (
            hasResults
              ? `${results.guides.length + results.glossary.length} result${results.guides.length + results.glossary.length === 1 ? '' : 's'} found`
              : 'No results found'
          )}
        </div>

        {query.trim() && (
          <div className="max-h-[50vh] overflow-y-auto p-2">
            {hasResults ? (
              <>
                {results.guides.length > 0 && (
                  <div className="mb-2">
                    <p className="text-xs font-semibold text-muted-foreground px-3 py-1.5 uppercase tracking-wider">Guides</p>
                    {results.guides.map(g => (
                      <button
                        key={g.slug}
                        onClick={() => navigateTo(`/guides/${g.slug}`)}
                        className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-muted flex items-center gap-3 transition-colors"
                        aria-label={`Guide: ${g.title} — ${categoryLabels[g.category]}, ${g.readTime}`}
                      >
                        <img src={getGuideThumbnailSmall(g)} alt="" className="w-6 h-6 rounded object-cover shrink-0" loading="lazy" />
                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">{g.title}</p>
                          <p className="text-xs text-muted-foreground">{categoryLabels[g.category]} · {g.readTime}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
                {results.glossary.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground px-3 py-1.5 uppercase tracking-wider">Glossary</p>
                    {results.glossary.map(term => (
                      <button
                        key={term}
                        onClick={() => navigateTo(`/glossary?q=${encodeURIComponent(term)}`)}
                        className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-muted flex items-center gap-3 transition-colors"
                      >
                        <span className="text-xl shrink-0">📖</span>
                        <p className="text-sm font-medium">{term}</p>
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-4xl mb-2">🔍</p>
                <p className="text-sm font-medium mb-1">No results found</p>
                <button
                  onClick={() => navigateTo('/quick-fixes')}
                  className="text-sm text-secondary hover:underline"
                >
                  Try Quick Fixes →
                </button>
              </div>
            )}
          </div>
        )}

        {!query.trim() && (
          <div className="p-4 text-center text-sm text-muted-foreground">
            Start typing to search {guides.length}+ guides and {glossaryTerms.length} glossary terms
          </div>
        )}
      </div>
    </div>
  );
}

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
