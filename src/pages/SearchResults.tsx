import { useMemo, useState, useEffect, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { guideIndex } from '@/lib/guide-index';
import { categoryLabels } from '@/data/guide-categories';
import { TOOL_GROUPS } from '@/data/tools-list';

const POPULAR = ['Wi-Fi', 'scam', 'password', 'video call', 'iPhone', 'email', 'printer', 'Medicare'];
const TOOLS = TOOL_GROUPS.flatMap((g) => g.tools);

/** Every word must appear somewhere; title hits rank highest. */
function score(fields: { title: string; text: string }, words: string[]): number {
  const title = fields.title.toLowerCase();
  const text = fields.text.toLowerCase();
  let total = 0;
  for (const w of words) {
    if (title.includes(w)) total += 10;
    else if (text.includes(w)) total += 3;
    else return 0;
  }
  return total + (title.startsWith(words[0]) ? 2 : 0);
}

export default function SearchResults() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const [input, setInput] = useState(q);
  useEffect(() => setInput(q), [q]);

  const words = useMemo(
    () => q.toLowerCase().replace(/wi-fi/g, 'wifi').split(/\s+/).filter((w) => w.length > 1),
    [q],
  );

  const { guides, tools } = useMemo(() => {
    if (!words.length) return { guides: [], tools: [] };
    const norm = (s: string) => s.replace(/wi-fi/gi, 'wifi');
    const guides = guideIndex
      .map((g) => ({ g, s: score({ title: norm(g.title), text: norm(`${g.excerpt} ${g.tags.join(' ')}`) }, words) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 40)
      .map((r) => r.g);
    const tools = TOOLS.filter((t) => score({ title: norm(t.name), text: norm(t.description) }, words) > 0);
    return { guides, tools };
  }, [words]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const v = input.trim();
    setParams(v ? { q: v } : {});
  };

  return (
    <>
      <SEOHead title={q ? `“${q}” — Search | TekSure` : 'Search | TekSure'} description="Search TekSure's free tech guides and tools." path="/search" noindex={!!q} />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-3xl px-4 pt-10 min-h-[60vh] outline-none">
        <h1 className="text-4xl font-bold">Search</h1>
        <form onSubmit={submit} role="search" className="mt-6 flex gap-2">
          <label htmlFor="search-input" className="sr-only">Search guides and tools</label>
          <input
            id="search-input"
            type="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What do you need help with?"
            className="h-14 w-full rounded-md border-2 border-input bg-background px-4 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          <button type="submit" className="h-14 shrink-0 rounded-md bg-primary px-5 text-lg font-semibold text-primary-foreground hover:bg-primary/90">
            Search
          </button>
        </form>

        {!q && (
          <div className="mt-8">
            <p className="text-lg font-semibold">People often search for:</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {POPULAR.map((term) => (
                <li key={term}>
                  <Link to={`/search?q=${encodeURIComponent(term)}`} className="inline-flex min-h-[44px] items-center rounded-md border-2 border-border px-4 text-lg hover:border-primary">
                    {term}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {q && (
          <p className="mt-6 text-lg" aria-live="polite">
            {guides.length + tools.length === 0
              ? `Nothing matched “${q}”.`
              : `${guides.length + tools.length} results for “${q}”.`}
          </p>
        )}

        {tools.length > 0 && (
          <section aria-labelledby="tool-results" className="mt-8">
            <h2 id="tool-results" className="text-2xl font-bold">Tools</h2>
            <ul className="mt-2 divide-y divide-border">
              {tools.map((t) => (
                <li key={t.slug} className="py-3">
                  <Link to={`/tools/${t.slug}`} className="text-lg font-semibold text-primary underline-offset-4 hover:underline">{t.name}</Link>
                  <p className="mt-1 text-base text-muted-foreground">{t.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {guides.length > 0 && (
          <section aria-labelledby="guide-results" className="mt-8">
            <h2 id="guide-results" className="text-2xl font-bold">Guides</h2>
            <ul className="mt-2 divide-y divide-border">
              {guides.map((g) => (
                <li key={g.slug} className="py-3">
                  <Link to={`/guides/${g.slug}`} className="text-lg font-semibold text-primary underline-offset-4 hover:underline">{g.title}</Link>
                  <p className="mt-1 text-base text-muted-foreground">{g.excerpt}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{categoryLabels[g.category]}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {q && guides.length + tools.length === 0 && (
          <ul className="mt-6 space-y-3 text-lg">
            <li>Try one word, like “printer” or “Facebook”.</li>
            <li><Link to="/guides" className="text-primary underline underline-offset-4">Browse every guide by topic</Link></li>
            <li><Link to="/get-help" className="text-primary underline underline-offset-4">Ask a real person</Link></li>
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}
