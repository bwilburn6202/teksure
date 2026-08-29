import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { toolsDirectory } from '@/data/tools-directory';

/**
 * All Tools A–Z — the complete, auto-generated directory of every tool
 * and helper page on TekSure. The list comes from tools-directory.ts,
 * which is rebuilt from the route table on every build, so nothing can
 * go missing from this page.
 */
export default function AllToolsDirectory() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return toolsDirectory;
    return toolsDirectory.filter(
      (t) => t.label.toLowerCase().includes(q) || t.path.includes(q)
    );
  }, [query]);

  const grouped = useMemo(() => {
    const groups = new Map<string, typeof toolsDirectory>();
    for (const t of filtered) {
      const first = t.label.charAt(0).toUpperCase();
      const key = /[A-Z]/.test(first) ? first : '#';
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(t);
    }
    return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <main className="container mx-auto px-4 py-10 max-w-5xl">
      <SEOHead
        title="All Tools A to Z | TekSure"
        description={`Browse every TekSure tool and helper page in one place — ${toolsDirectory.length} free tools for phones, computers, safety, health, money, and daily life.`}
        path="/tools/all"
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-3">All Tools, A to Z</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Every tool and helper page on TekSure — all {toolsDirectory.length.toLocaleString()} of
        them, in one list. Type a word below to narrow it down, or scroll by letter.
      </p>

      <div className="mb-8 max-w-md">
        <label htmlFor="tool-search" className="block text-base font-medium mb-2">
          Search the list
        </label>
        <Input
          id="tool-search"
          type="search"
          placeholder="Try “passwords”, “Medicare”, or “photos”"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="text-lg h-12"
        />
        {query && (
          <p className="mt-2 text-muted-foreground" aria-live="polite">
            {filtered.length.toLocaleString()} match{filtered.length === 1 ? '' : 'es'}
          </p>
        )}
      </div>

      {grouped.length === 0 ? (
        <p className="text-lg">
          Nothing matched that word. Try a shorter or different word — for example,
          “phone” instead of “smartphone”.
        </p>
      ) : (
        grouped.map(([letter, items]) => (
          <section key={letter} className="mb-8">
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">{letter}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 list-none p-0">
              {items.map((t) => (
                <li key={t.path}>
                  <Link
                    to={t.path}
                    className="text-primary underline-offset-2 hover:underline text-base leading-7"
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </main>
  );
}
