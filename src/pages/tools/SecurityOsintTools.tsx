import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import {
  Search, ExternalLink, ChevronDown, ChevronUp, Filter, Shield, Globe, MapPin, BookOpen,
  Scan, Wifi, Network, Key, Lock, ShieldAlert, AlertTriangle, Code, Bug, Server,
  FileSearch, Monitor, Eye, Cpu, HardDrive, Fingerprint, Database, ShieldCheck,
  Github,
} from 'lucide-react';
import {
  cyberSecTeams, cyberSecModuleCount,
  osintCollections, collectionCount,
  osintCategories, osintToolCount, osintCategoryCount,
  geointCategories, geointToolCount, geointCategoryCount,
  totalTools, totalCategories,
  type CyberSecModule, type OsintCollection,
} from '@/data/security-osint-tools';
import type { OsintCategory } from '@/data/osint-tools';
import type { GeointCategory } from '@/data/geoint-resources';
import type { LucideIcon } from 'lucide-react';

// ── Icon mapping for CyberSec modules ──────────────────────────────────────
const iconMap: Record<string, LucideIcon> = {
  Scan, Globe, FileSearch, Wifi, Network, Key, Lock, ShieldAlert, AlertTriangle,
  Code, Bug, Server, Monitor, Eye, Cpu, HardDrive, Fingerprint, Search, Shield,
  Database, ShieldCheck,
};

// ── Pricing badge colors ───────────────────────────────────────────────────
const pricingStyle: Record<string, string> = {
  free: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  freemium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
  paid: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
};

const severityColors: Record<string, string> = {
  critical: 'bg-red-900 text-red-100',
  high: 'bg-orange-900 text-orange-100',
  medium: 'bg-yellow-900 text-yellow-100',
  low: 'bg-green-900 text-green-100',
};

const platformConfig: Record<string, { label: string; icon: LucideIcon; color: string }> = {
  'start.me': { label: 'start.me', icon: BookOpen, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' },
  github: { label: 'GitHub', icon: Github, color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300' },
  website: { label: 'Website', icon: Globe, color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300' },
};

// ── Collapsible Category Section (OSINT / GEOINT) ──────────────────────────
function CategorySection({
  category,
  searchTerm,
  accentColor = 'blue',
}: {
  category: OsintCategory | GeointCategory;
  searchTerm: string;
  accentColor?: string;
}) {
  const [expanded, setExpanded] = useState(!!searchTerm);

  const filteredTools = useMemo(() => {
    if (!searchTerm) return category.tools;
    const q = searchTerm.toLowerCase();
    return category.tools.filter(
      (t) => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q),
    );
  }, [category.tools, searchTerm]);

  const isExpanded = searchTerm ? filteredTools.length > 0 : expanded;

  if (searchTerm && filteredTools.length === 0) return null;

  const hoverBg = accentColor === 'emerald'
    ? 'hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20'
    : 'hover:bg-blue-50/50 dark:hover:bg-blue-950/20';

  const hoverText = accentColor === 'emerald'
    ? 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400'
    : 'group-hover:text-blue-600 dark:group-hover:text-blue-400';

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{category.emoji}</span>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {category.name}
            </h3>
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

      {isExpanded && (
        <div className="border-t border-gray-200 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-800">
          {filteredTools.map((tool) => (
            <a
              key={tool.url}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-start gap-4 p-4 ${hoverBg} transition-colors group`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className={`font-medium text-gray-900 dark:text-white ${hoverText} transition-colors`}>
                    {tool.name}
                  </h4>
                  {tool.pricing && (
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${pricingStyle[tool.pricing]}`}>
                      {tool.pricing}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  {tool.description}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-gray-500 mt-1 shrink-0 transition-colors" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// ── CyberSec Module Card ───────────────────────────────────────────────────
function ModuleCard({ module }: { module: CyberSecModule }) {
  const Icon = iconMap[module.iconName] || Shield;

  return (
    <Link to="/tools/cyber-toolkit">
      <div className="bg-gray-800 border border-gray-700 hover:border-gray-600 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 rounded-lg p-4 h-full cursor-pointer">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-white text-sm font-semibold">
            <Icon className="w-4 h-4" />
            {module.name}
          </div>
          {module.isNew && (
            <span className="bg-amber-500 text-gray-900 text-xs font-bold px-2 py-0.5 rounded shrink-0">
              NEW
            </span>
          )}
        </div>
        <p className="text-gray-400 text-xs mb-3">{module.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-xs">{module.category}</span>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded ${severityColors[module.severity]}`}>
            {module.severity.toUpperCase()}
          </span>
        </div>
      </div>
    </Link>
  );
}

// ── Collection Card ────────────────────────────────────────────────────────
function CollectionCard({ collection }: { collection: OsintCollection }) {
  const platform = platformConfig[collection.platform];
  const PlatformIcon = platform.icon;

  return (
    <a
      href={collection.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-border rounded-xl p-5 hover:shadow-md transition-all bg-card"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {collection.name}
        </h3>
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
}

// ── Pricing Filter Buttons ─────────────────────────────────────────────────
function PricingFilter({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const options = ['all', 'free', 'freemium', 'paid'] as const;
  return (
    <div className="flex items-center gap-2">
      <Filter className="w-4 h-4 text-gray-400" />
      {options.map((opt) => (
        <Button
          key={opt}
          size="sm"
          variant={value === opt ? 'default' : 'outline'}
          className="text-xs h-7 capitalize"
          onClick={() => onChange(opt)}
        >
          {opt === 'all' ? 'All' : opt}
        </Button>
      ))}
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function SecurityOsintTools() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'all';
  const [activeTab, setActiveTab] = useState(initialTab);
  const [search, setSearch] = useState('');
  const [pricingFilter, setPricingFilter] = useState('all');

  // Filter OSINT categories
  const filteredOsint = useMemo(() => {
    return osintCategories.map((cat) => {
      let tools = cat.tools;
      if (search) {
        const q = search.toLowerCase();
        tools = tools.filter(
          (t) => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q),
        );
      }
      if (pricingFilter !== 'all') {
        tools = tools.filter((t) => t.pricing === pricingFilter);
      }
      return { ...cat, tools };
    }).filter((cat) => cat.tools.length > 0);
  }, [search, pricingFilter]);

  // Filter GEOINT categories
  const filteredGeoint = useMemo(() => {
    return geointCategories.map((cat) => {
      let tools = cat.tools;
      if (search) {
        const q = search.toLowerCase();
        tools = tools.filter(
          (t) => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q),
        );
      }
      if (pricingFilter !== 'all') {
        tools = tools.filter((t) => t.pricing === pricingFilter);
      }
      return { ...cat, tools };
    }).filter((cat) => cat.tools.length > 0);
  }, [search, pricingFilter]);

  // Filter CyberSec teams
  const filteredCyberSec = useMemo(() => {
    return cyberSecTeams.map((team) => {
      let modules = team.modules;
      if (search) {
        const q = search.toLowerCase();
        modules = modules.filter(
          (m) => m.name.toLowerCase().includes(q) || m.description.toLowerCase().includes(q) || m.category.toLowerCase().includes(q),
        );
      }
      return { ...team, modules };
    }).filter((team) => team.modules.length > 0);
  }, [search]);

  // Filter collections
  const filteredCollections = useMemo(() => {
    if (!search) return osintCollections;
    const q = search.toLowerCase();
    return osintCollections.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.tags.some((t) => t.includes(q)),
    );
  }, [search]);

  // Counts for tab badges
  const osintCount = filteredOsint.reduce((s, c) => s + c.tools.length, 0);
  const geointCount = filteredGeoint.reduce((s, c) => s + c.tools.length, 0);
  const cyberCount = filteredCyberSec.reduce((s, t) => s + t.modules.length, 0);
  const collCount = filteredCollections.length;

  // Team color mapping
  const teamColors: Record<string, string> = {
    red: 'text-red-500',
    blue: 'text-blue-500',
    green: 'text-green-500',
    purple: 'text-purple-500',
  };

  // When searching, switch to "all" tab
  const effectiveTab = search ? 'all' : activeTab;

  const showCyber = effectiveTab === 'all' || effectiveTab === 'cybersec';
  const showOsint = effectiveTab === 'all' || effectiveTab === 'osint';
  const showGeoint = effectiveTab === 'all' || effectiveTab === 'geoint';
  const showCollections = effectiveTab === 'all' || effectiveTab === 'collections';

  return (
    <>
      <SEOHead
        title="Security & OSINT Tools Directory | TekSure"
        description={`Browse ${totalTools}+ cybersecurity modules, OSINT tools, GEOINT mapping resources, and curated collections. Free searchable directory for security research and investigations.`}
        path="/tools/security-osint"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Security & OSINT Tools Directory',
          description: `A comprehensive directory of ${totalTools}+ security and open-source intelligence tools.`,
          url: 'https://teksure.com/tools/security-osint',
        }}
      />
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        {/* Hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-4 py-14">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-gray-600" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/tools" className="text-gray-400 hover:text-white">Tools</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-gray-600" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">Security & OSINT Tools</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-10 h-10 text-red-500" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Security & OSINT Tools
              </h1>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mb-8">
              {totalTools}+ tools across cybersecurity modules, OSINT directories, geospatial intelligence, and curated resource collections.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-red-400" />
                <span className="text-gray-300">{cyberSecModuleCount} Security Modules</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-indigo-400" />
                <span className="text-gray-300">{osintToolCount} OSINT Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-300">{geointToolCount} GEOINT Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">{collectionCount} Collections</span>
              </div>
            </div>

            {/* Search */}
            <div className="max-w-xl relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search all tools by name or description..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 backdrop-blur rounded-xl text-base focus:bg-white/20"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Tabs value={effectiveTab} onValueChange={setActiveTab}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <TabsList className="h-auto flex-wrap">
                <TabsTrigger value="all" className="text-sm">
                  All
                </TabsTrigger>
                <TabsTrigger value="cybersec" className="text-sm">
                  Cybersecurity
                  {cyberCount > 0 && <Badge variant="secondary" className="ml-1.5 text-xs h-5">{cyberCount}</Badge>}
                </TabsTrigger>
                <TabsTrigger value="osint" className="text-sm">
                  OSINT
                  {osintCount > 0 && <Badge variant="secondary" className="ml-1.5 text-xs h-5">{osintCount}</Badge>}
                </TabsTrigger>
                <TabsTrigger value="geoint" className="text-sm">
                  GEOINT
                  {geointCount > 0 && <Badge variant="secondary" className="ml-1.5 text-xs h-5">{geointCount}</Badge>}
                </TabsTrigger>
                <TabsTrigger value="collections" className="text-sm">
                  Collections
                  {collCount > 0 && <Badge variant="secondary" className="ml-1.5 text-xs h-5">{collCount}</Badge>}
                </TabsTrigger>
              </TabsList>

              {(showOsint || showGeoint) && (
                <PricingFilter value={pricingFilter} onChange={setPricingFilter} />
              )}
            </div>

            {/* All Tab / Search Results */}
            <TabsContent value="all" className="space-y-8">
              {/* Cybersecurity Section */}
              {showCyber && filteredCyberSec.length > 0 && (
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-red-500" />
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Cybersecurity Modules</h2>
                    <Badge variant="secondary" className="text-xs">{cyberCount}</Badge>
                  </div>
                  {filteredCyberSec.map((team) => (
                    <div key={team.id} className="mb-6">
                      <h3 className={`text-lg font-semibold flex items-center gap-2 mb-3 ${teamColors[team.color]}`}>
                        <Shield className="w-5 h-5" />
                        {team.name}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {team.modules.map((mod) => (
                          <ModuleCard key={mod.id} module={mod} />
                        ))}
                      </div>
                    </div>
                  ))}
                </section>
              )}

              {/* OSINT Section */}
              {showOsint && filteredOsint.length > 0 && (
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-5 h-5 text-indigo-500" />
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">OSINT Tools</h2>
                    <Badge variant="secondary" className="text-xs">{osintCount}</Badge>
                  </div>
                  <div className="space-y-3">
                    {filteredOsint.map((cat) => (
                      <CategorySection key={cat.id} category={cat} searchTerm={search} accentColor="blue" />
                    ))}
                  </div>
                </section>
              )}

              {/* GEOINT Section */}
              {showGeoint && filteredGeoint.length > 0 && (
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">GEOINT & Mapping</h2>
                    <Badge variant="secondary" className="text-xs">{geointCount}</Badge>
                  </div>
                  <div className="space-y-3">
                    {filteredGeoint.map((cat) => (
                      <CategorySection key={cat.id} category={cat} searchTerm={search} accentColor="emerald" />
                    ))}
                  </div>
                </section>
              )}

              {/* Collections Section */}
              {showCollections && filteredCollections.length > 0 && (
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-purple-500" />
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Curated Collections</h2>
                    <Badge variant="secondary" className="text-xs">{collCount}</Badge>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {filteredCollections.map((c) => (
                      <CollectionCard key={c.url} collection={c} />
                    ))}
                  </div>
                </section>
              )}

              {/* Empty state */}
              {cyberCount === 0 && osintCount === 0 && geointCount === 0 && collCount === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    No tools found matching &ldquo;{search}&rdquo;.
                  </p>
                </div>
              )}
            </TabsContent>

            {/* Cybersecurity Tab */}
            <TabsContent value="cybersec" className="space-y-6">
              {filteredCyberSec.map((team) => (
                <div key={team.id}>
                  <h3 className={`text-xl font-bold flex items-center gap-2 mb-4 ${teamColors[team.color]}`}>
                    <Shield className="w-6 h-6" />
                    {team.name}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {team.modules.map((mod) => (
                      <ModuleCard key={mod.id} module={mod} />
                    ))}
                  </div>
                </div>
              ))}
              {filteredCyberSec.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-500 dark:text-gray-400">No modules match your search.</p>
                </div>
              )}
            </TabsContent>

            {/* OSINT Tab */}
            <TabsContent value="osint" className="space-y-3">
              {filteredOsint.map((cat) => (
                <CategorySection key={cat.id} category={cat} searchTerm={search} accentColor="blue" />
              ))}
              {filteredOsint.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-500 dark:text-gray-400">No OSINT tools match your search.</p>
                </div>
              )}
            </TabsContent>

            {/* GEOINT Tab */}
            <TabsContent value="geoint" className="space-y-3">
              {filteredGeoint.map((cat) => (
                <CategorySection key={cat.id} category={cat} searchTerm={search} accentColor="emerald" />
              ))}
              {filteredGeoint.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-500 dark:text-gray-400">No GEOINT tools match your search.</p>
                </div>
              )}
            </TabsContent>

            {/* Collections Tab */}
            <TabsContent value="collections">
              <div className="grid gap-4 md:grid-cols-2">
                {filteredCollections.map((c) => (
                  <CollectionCard key={c.url} collection={c} />
                ))}
              </div>
              {filteredCollections.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-500 dark:text-gray-400">No collections match your search.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Disclaimer */}
          <div className="mt-12 mb-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              These tools are listed for educational and research purposes. External collections are maintained
              by independent researchers and organizations. Always verify tools before use and follow all
              applicable laws when conducting research.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
