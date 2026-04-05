import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, FileText, BookOpen, Globe, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { guides, categoryLabels } from '@/data/guides';
import { wikiPages } from '@/data/wiki';
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

/** Quick-access pages shown before user types anything */
const QUICK_LINKS = [
  { label: 'Knowledge Base', path: '/wiki', emoji: '🧠' },
  { label: 'All Guides', path: '/guides', emoji: '📚' },
  { label: 'Scam Simulator', path: '/tools/scam-simulator', emoji: '🛡️' },
  { label: 'Fix Common Problems', path: '/tools/troubleshooting', emoji: '🔧' },
  { label: 'Concept Map', path: '/concept-map', emoji: '🗺️' },
];

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelectedIndex(0);
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
    if (!query.trim()) return { wiki: [], guides: [], glossary: [] };
    const q = query.toLowerCase();

    // Search wiki pages (knowledge base) — prioritized
    const matchedWiki = wikiPages.filter(w =>
      w.title.toLowerCase().includes(q) ||
      w.tags.some(t => t.toLowerCase().includes(q)) ||
      w.content.toLowerCase().includes(q)
    ).slice(0, 5);

    const matchedGuides = guides.filter(g =>
      g.title.toLowerCase().includes(q) || g.tags.some(t => t.includes(q))
    ).slice(0, 8);

    const matchedGlossary = glossaryTerms.filter(t =>
      t.toLowerCase().includes(q)
    ).slice(0, 4);

    return { wiki: matchedWiki, guides: matchedGuides, glossary: matchedGlossary };
  }, [query]);

  const allResults = useMemo(() => {
    const items: { type: string; path: string; label: string }[] = [];
    results.wiki.forEach(w => items.push({ type: 'wiki', path: `/wiki/${w.slug}`, label: w.title }));
    results.guides.forEach(g => items.push({ type: 'guide', path: `/guides/${g.slug}`, label: g.title }));
    results.glossary.forEach(t => items.push({ type: 'glossary', path: `/glossary?q=${encodeURIComponent(t)}`, label: t }));
    return items;
  }, [results]);

  const hasResults = allResults.length > 0;

  // Reset selected index when results change
  useEffect(() => { setSelectedIndex(0); }, [allResults.length]);

  const navigateTo = useCallback((path: string) => {
    onClose();
    navigate(path);
  }, [navigate, onClose]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(i => Math.min(i + 1, allResults.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && allResults[selectedIndex]) {
      e.preventDefault();
      navigateTo(allResults[selectedIndex].path);
    }
  }, [allResults, selectedIndex, navigateTo]);

  if (!open) return null;

  const totalCount = guides.length + wikiPages.length + glossaryTerms.length;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh]"
      onClick={onClose}
      onKeyDown={e => e.key === 'Escape' && onClose()}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search TekSure"
        className="relative w-full max-w-xl mx-4 bg-card rounded-2xl shadow-2xl border border-border overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 border-b border-border">
          <Search className="h-5 w-5 text-muted-foreground shrink-0" aria-hidden="true" />
          <Input
            ref={inputRef}
            placeholder="Search guides, knowledge base, glossary..."
            className="border-0 shadow-none focus-visible:ring-0 h-14 text-base"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Search the knowledge base"
          />
          <kbd className="hidden sm:inline-flex items-center gap-0.5 text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded border border-border shrink-0">
            ESC
          </kbd>
          <button onClick={onClose} className="shrink-0 p-1 hover:bg-muted rounded sm:hidden" aria-label="Close search">
            <X className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          </button>
        </div>

        {/* Screen reader announcement */}
        <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          {query.trim() && (
            hasResults
              ? `${allResults.length} result${allResults.length === 1 ? '' : 's'} found`
              : 'No results found'
          )}
        </div>

        {/* Results */}
        {query.trim() && (
          <div ref={resultsRef} className="max-h-[50vh] overflow-y-auto p-2">
            {hasResults ? (
              <>
                {/* Knowledge Base results — shown first */}
                {results.wiki.length > 0 && (
                  <div className="mb-2">
                    <p className="text-xs font-semibold text-muted-foreground px-3 py-1.5 uppercase tracking-wider flex items-center gap-1.5">
                      <Globe className="h-3 w-3" />
                      Knowledge Base
                    </p>
                    {results.wiki.map((w, i) => {
                      const flatIndex = i;
                      return (
                        <button
                          key={w.slug}
                          onClick={() => navigateTo(`/wiki/${w.slug}`)}
                          className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-3 transition-colors ${
                            selectedIndex === flatIndex ? 'bg-primary/10 border-l-2 border-primary' : 'hover:bg-muted'
                          }`}
                        >
                          <span className="shrink-0 w-6 h-6 rounded-md bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                            <BookOpen className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium truncate">{w.title}</p>
                            <p className="text-xs text-muted-foreground truncate">
                              {w.tags.slice(0, 3).join(' · ')}
                            </p>
                          </div>
                          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Guide results */}
                {results.guides.length > 0 && (
                  <div className="mb-2">
                    <p className="text-xs font-semibold text-muted-foreground px-3 py-1.5 uppercase tracking-wider flex items-center gap-1.5">
                      <FileText className="h-3 w-3" />
                      Step-by-Step Guides
                    </p>
                    {results.guides.map((g, i) => {
                      const flatIndex = results.wiki.length + i;
                      return (
                        <button
                          key={g.slug}
                          onClick={() => navigateTo(`/guides/${g.slug}`)}
                          className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-3 transition-colors ${
                            selectedIndex === flatIndex ? 'bg-primary/10 border-l-2 border-primary' : 'hover:bg-muted'
                          }`}
                          aria-label={`Guide: ${g.title}`}
                        >
                          <img src={getGuideThumbnailSmall(g)} alt="" className="w-6 h-6 rounded object-cover shrink-0" loading="lazy" />
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium truncate">{g.title}</p>
                            <p className="text-xs text-muted-foreground">{categoryLabels[g.category]} · {g.readTime}</p>
                          </div>
                          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Glossary results */}
                {results.glossary.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground px-3 py-1.5 uppercase tracking-wider">Glossary</p>
                    {results.glossary.map((term, i) => {
                      const flatIndex = results.wiki.length + results.guides.length + i;
                      return (
                        <button
                          key={term}
                          onClick={() => navigateTo(`/glossary?q=${encodeURIComponent(term)}`)}
                          className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-3 transition-colors ${
                            selectedIndex === flatIndex ? 'bg-primary/10 border-l-2 border-primary' : 'hover:bg-muted'
                          }`}
                        >
                          <span className="text-lg shrink-0">📖</span>
                          <p className="text-sm font-medium">{term}</p>
                        </button>
                      );
                    })}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-4xl mb-2">🔍</p>
                <p className="text-sm font-medium mb-1">No results found</p>
                <p className="text-xs text-muted-foreground mb-3">Try different keywords or browse the knowledge base</p>
                <button
                  onClick={() => navigateTo('/wiki')}
                  className="text-sm text-primary hover:underline font-medium"
                >
                  Browse Knowledge Base →
                </button>
              </div>
            )}
          </div>
        )}

        {/* Quick links — shown when no query */}
        {!query.trim() && (
          <div className="p-3">
            <p className="text-xs font-semibold text-muted-foreground px-2 py-1.5 uppercase tracking-wider">Quick Access</p>
            {QUICK_LINKS.map(link => (
              <button
                key={link.path}
                onClick={() => navigateTo(link.path)}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-muted flex items-center gap-3 transition-colors"
              >
                <span className="text-lg shrink-0">{link.emoji}</span>
                <span className="text-sm font-medium">{link.label}</span>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground shrink-0 ml-auto" />
              </button>
            ))}
            <div className="mt-3 px-2 py-2 text-center text-xs text-muted-foreground border-t border-border">
              Search {totalCount}+ articles, guides, and definitions
            </div>
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
