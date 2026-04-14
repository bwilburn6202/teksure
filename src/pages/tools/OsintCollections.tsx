import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Search, ExternalLink, BookOpen, Globe, Github,
} from 'lucide-react';

// ── Collection data ─────────────────────────────────────────────────────────
interface OsintCollection {
  name: string;
  url: string;
  description: string;
  toolCount: string;
  platform: 'start.me' | 'github' | 'website';
  tags: string[];
}

const collections: OsintCollection[] = [
  {
    name: 'GEOINT',
    url: 'https://start.me/p/W1kDAj/geoint',
    description: 'Curated collection of geospatial intelligence tools — satellite imagery, mapping, geolocation, and location analysis resources.',
    toolCount: '100+',
    platform: 'start.me',
    tags: ['geospatial', 'mapping', 'satellite', 'geolocation'],
  },
  {
    name: 'OSINT 500+ Tools',
    url: 'https://start.me/p/0Pqbdg/osint-500-tools',
    description: 'Massive collection of 500+ OSINT tools organized by category — dashboards, cryptocurrency, SMS, WhatsApp, website security, and more.',
    toolCount: '500+',
    platform: 'start.me',
    tags: ['comprehensive', 'tools', 'cryptocurrency', 'messaging'],
  },
  {
    name: 'OSINT Resources',
    url: 'https://start.me/p/mweaYY/osint-resources',
    description: 'Well-organized OSINT resource page covering investigation tools, social media analysis, and research techniques.',
    toolCount: '200+',
    platform: 'start.me',
    tags: ['resources', 'investigation', 'social media'],
  },
  {
    name: 'The Ultimate OSINT Collection',
    url: 'https://start.me/p/DPYPMz/the-ultimate-osint-collection',
    description: 'One of the most comprehensive OSINT collections online — tools, guides, training resources, and investigation techniques all in one place.',
    toolCount: '1,000+',
    platform: 'start.me',
    tags: ['comprehensive', 'training', 'guides', 'tools'],
  },
  {
    name: "Nixintel's OSINT Resource List",
    url: 'https://start.me/p/rx6Qj8/nixintel-s-osint-resource-list',
    description: 'Curated by OSINT expert Nixintel — focused collection of verified, high-quality investigation tools and techniques.',
    toolCount: '300+',
    platform: 'start.me',
    tags: ['curated', 'investigation', 'verified'],
  },
  {
    name: 'Awesome OSINT',
    url: 'https://github.com/jivoi/awesome-osint',
    description: 'Community-maintained GitHub list of OSINT tools and resources — search engines, social media, domain tools, and threat intelligence.',
    toolCount: '500+',
    platform: 'github',
    tags: ['community', 'search engines', 'social media', 'domains'],
  },
  {
    name: "cipher387's OSINT Tool Collection",
    url: 'https://github.com/cipher387/osint_stuff_tool_collection',
    description: 'Over 1,000 online tools organized in 23+ categories — maps, social media, messengers, crypto, IoT, code search, and much more.',
    toolCount: '1,000+',
    platform: 'github',
    tags: ['maps', 'social media', 'crypto', 'IoT', 'comprehensive'],
  },
  {
    name: 'OSINT Framework',
    url: 'https://osintframework.com/',
    description: 'Interactive tree-based directory of OSINT tools organized by data type — the classic starting point for any investigation.',
    toolCount: '500+',
    platform: 'website',
    tags: ['framework', 'interactive', 'data types'],
  },
  {
    name: 'IntelTechniques',
    url: 'https://inteltechniques.com/tools/',
    description: 'Tools and search forms from OSINT expert Michael Bazzell — used by investigators, journalists, and privacy advocates worldwide.',
    toolCount: '50+',
    platform: 'website',
    tags: ['expert', 'search forms', 'privacy', 'investigation'],
  },
  {
    name: "Bellingcat's Online Investigation Toolkit",
    url: 'https://docs.google.com/spreadsheets/d/18rtqh8EG2q1xBo2cLNyhIDuK9jrPGwYr9DI2UncoqJQ/',
    description: 'Maintained by the Bellingcat investigative journalism team — spreadsheet of tools used in real-world open-source investigations.',
    toolCount: '300+',
    platform: 'website',
    tags: ['journalism', 'investigation', 'verified', 'real-world'],
  },
  {
    name: 'OSINT Combine Free Tools',
    url: 'https://www.osintcombine.com/tools',
    description: 'Free browser-based OSINT tools from OSINT Combine — social media analysis, geolocation, and data transformation utilities.',
    toolCount: '20+',
    platform: 'website',
    tags: ['free tools', 'browser-based', 'geolocation', 'social media'],
  },
  {
    name: 'SMART (Start Me Aggregated Resource Tool)',
    url: 'https://smart.myosint.training/',
    description: 'Aggregates and deduplicates resources from hundreds of start.me pages — one searchable table for all OSINT bookmarks.',
    toolCount: '10,000+',
    platform: 'website',
    tags: ['aggregator', 'searchable', 'comprehensive', 'deduplicated'],
  },
];

const platformConfig: Record<string, { label: string; icon: typeof Globe; color: string }> = {
  'start.me': { label: 'start.me', icon: BookOpen, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' },
  github: { label: 'GitHub', icon: Github, color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300' },
  website: { label: 'Website', icon: Globe, color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300' },
};

// ── Main Page ───────────────────────────────────────────────────────────────
export default function OsintCollections() {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search) return collections;
    const q = search.toLowerCase();
    return collections.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.tags.some((t) => t.includes(q)),
    );
  }, [search]);

  return (
    <>
      <SEOHead
        title="OSINT Resource Collections | TekSure"
        description="Curated directory of the best OSINT tool collections, bookmark pages, and resource libraries from across the web. Start.me pages, GitHub repos, and expert toolkits."
        path="/tools/osint-collections"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'OSINT Resource Collections',
          description: 'Curated directory of the best OSINT tool collections and resource libraries from across the web.',
          url: 'https://teksure.com/tools/osint-collections',
        }}
      />
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        {/* Hero */}
        <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-700 text-white">
          <div className="max-w-5xl mx-auto px-4 py-16 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6 backdrop-blur">
              <BookOpen className="w-4 h-4" />
              Curated Collections
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              OSINT Resource Collections
            </h1>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
              The best OSINT bookmark pages, tool directories, and resource libraries from across the web.
              Each collection contains hundreds (or thousands) of curated links.
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300" />
              <Input
                type="text"
                placeholder="Search collections by name, topic, or tag..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-purple-200 backdrop-blur rounded-xl text-base focus:bg-white/20"
              />
            </div>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="grid gap-4 md:grid-cols-2">
            {filtered.map((collection) => {
              const platform = platformConfig[collection.platform];
              const PlatformIcon = platform.icon;

              return (
                <a
                  key={collection.url}
                  href={collection.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glow-card p-5"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {collection.name}
                    </h2>
                    <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-purple-500 mt-1 shrink-0 transition-colors" />
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {collection.description}
                  </p>

                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className={`text-xs ${platform.color}`}>
                      <PlatformIcon className="w-3 h-3 mr-1" />
                      {platform.label}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {collection.toolCount} tools
                    </Badge>
                    {collection.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs text-gray-500 dark:text-gray-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </a>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No collections found matching "{search}".
              </p>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-6 text-center">
            <p className="text-sm text-purple-700 dark:text-purple-300">
              These collections are maintained by independent researchers and organizations.
              TekSure links to them as free educational resources. Always verify tools before use and
              follow all applicable laws when conducting research.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
