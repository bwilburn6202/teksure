import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Search, ExternalLink, ChevronDown, ChevronUp, Globe, Filter,
} from 'lucide-react';
import { osintCategories, totalToolCount, categoryCount, type OsintCategory } from '@/data/osint-tools';

// ── Pricing badge colors ────────────────────────────────────────────────────
const pricingStyle: Record<string, string> = {
  free: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  freemium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
  paid: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
};

// ── Category Card ───────────────────────────────────────────────────────────
function CategorySection({ category, searchTerm }: { category: OsintCategory; searchTerm: string }) {
  const [expanded, setExpanded] = useState(!!searchTerm);

  const filteredTools = useMemo(() => {
    if (!searchTerm) return category.tools;
    const q = searchTerm.toLowerCase();
    return category.tools.filter(
      (t) => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q),
    );
  }, [category.tools, searchTerm]);

  // Auto-expand when searching and there are matches
  const isExpanded = searchTerm ? filteredTools.length > 0 : expanded;

  if (searchTerm && filteredTools.length === 0) return null;

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      {/* Category Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{category.emoji}</span>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {category.name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              {category.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0 ml-4">
          <Badge variant="secondary" className="text-xs">
            {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''}
          </Badge>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>

      {/* Tools List */}
      {isExpanded && (
        <div className="border-t border-gray-200 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-800">
          {filteredTools.map((tool) => (
            <a
              key={tool.url}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {tool.name}
                  </h3>
                  {tool.pricing && (
                    <Badge className={`text-[10px] px-1.5 py-0 ${pricingStyle[tool.pricing]}`}>
                      {tool.pricing}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                  {tool.description}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-blue-500 mt-1 shrink-0 transition-colors" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Page ───────────────────────────────────────────────────────────────
export default function OsintTools() {
  const [search, setSearch] = useState('');
  const [pricingFilter, setPricingFilter] = useState<string>('all');

  const filteredCategories = useMemo(() => {
    let cats = osintCategories;

    if (pricingFilter !== 'all') {
      cats = cats.map((cat) => ({
        ...cat,
        tools: cat.tools.filter((t) => t.pricing === pricingFilter),
      })).filter((cat) => cat.tools.length > 0);
    }

    return cats;
  }, [pricingFilter]);

  const matchCount = useMemo(() => {
    if (!search) return totalToolCount;
    const q = search.toLowerCase();
    return filteredCategories.reduce(
      (sum, cat) =>
        sum +
        cat.tools.filter(
          (t) => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q),
        ).length,
      0,
    );
  }, [search, filteredCategories]);

  return (
    <>
      <SEOHead
        title="OSINT Tools Directory | TekSure"
        description={`Browse ${totalToolCount}+ open-source intelligence (OSINT) tools across ${categoryCount} categories. Search engines, social media investigators, people finders, domain analyzers, and more.`}
        path="/tools/osint-tools"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'OSINT Tools Directory',
          description: `A curated directory of ${totalToolCount}+ OSINT tools organized across ${categoryCount} categories.`,
          url: 'https://teksure.com/tools/osint-tools',
        }}
      />
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        {/* Hero */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white">
          <div className="max-w-5xl mx-auto px-4 py-16 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6 backdrop-blur">
              <Globe className="w-4 h-4" />
              Based on The Ultimate OSINT Collection
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              OSINT Tools Directory
            </h1>
            <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-8">
              {totalToolCount}+ open-source intelligence tools across {categoryCount} categories.
              Find the right tool for any investigation or research task.
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-300" />
              <Input
                type="text"
                placeholder="Search tools by name or description..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-indigo-200 backdrop-blur rounded-xl text-base focus:bg-white/20"
              />
            </div>

            {/* Pricing Filter */}
            <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
              <Filter className="w-4 h-4 text-indigo-200" />
              {['all', 'free', 'freemium', 'paid'].map((p) => (
                <Button
                  key={p}
                  size="sm"
                  variant={pricingFilter === p ? 'secondary' : 'ghost'}
                  onClick={() => setPricingFilter(p)}
                  className={
                    pricingFilter === p
                      ? 'bg-white text-indigo-700 hover:bg-white/90'
                      : 'text-indigo-100 hover:bg-white/10'
                  }
                >
                  {p === 'all' ? 'All' : p.charAt(0).toUpperCase() + p.slice(1)}
                </Button>
              ))}
              <span className="text-sm text-indigo-200 ml-2">
                {matchCount} tool{matchCount !== 1 ? 's' : ''} found
              </span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-5xl mx-auto px-4 py-10 space-y-4">
          {filteredCategories.map((category) => (
            <CategorySection key={category.id} category={category} searchTerm={search} />
          ))}

          {matchCount === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No tools found matching "{search}".
              </p>
              <Button
                variant="link"
                onClick={() => {
                  setSearch('');
                  setPricingFilter('all');
                }}
                className="mt-2"
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>

        {/* Attribution */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6 text-center">
            <p className="text-sm text-indigo-700 dark:text-indigo-300">
              This directory is based on{' '}
              <a
                href="https://start.me/p/DPYPMz/the-ultimate-osint-collection"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium hover:text-indigo-900 dark:hover:text-indigo-100"
              >
                The Ultimate OSINT Collection
              </a>
              ,{' '}
              <a
                href="https://start.me/p/0Pqbdg/osint-500-tools"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium hover:text-indigo-900 dark:hover:text-indigo-100"
              >
                OSINT 500+ Tools
              </a>
              ,{' '}
              <a
                href="https://start.me/p/mweaYY/osint-resources"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium hover:text-indigo-900 dark:hover:text-indigo-100"
              >
                OSINT Resources
              </a>
              ,{' '}
              <a
                href="https://start.me/p/W1kDAj/geoint"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium hover:text-indigo-900 dark:hover:text-indigo-100"
              >
                GEOINT
              </a>
              , and the{' '}
              <a
                href="https://github.com/rashidwassan/My-Ultimate-OSINT-Arsenal"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium hover:text-indigo-900 dark:hover:text-indigo-100"
              >
                Ultimate OSINT Arsenal
              </a>
              . Tools are provided for educational and authorized security research purposes only.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
