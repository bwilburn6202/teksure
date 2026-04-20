import { useState, useEffect, useMemo, useCallback } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Search, ChevronRight, ChevronDown, ExternalLink, Folder, Globe,
  Loader2, FolderOpen, Filter
} from 'lucide-react';

// ── Types ────────────────────────────────────────────────────────────────────
interface OsintNode {
  name: string;
  type: string;
  url?: string;
  description?: string;
  pricing?: string;
  localInstall?: boolean;
  registration?: boolean;
  googleDork?: boolean;
  api?: boolean;
  opsec?: string;
  children?: OsintNode[];
}

type Complexity = 'beginner' | 'intermediate' | 'advanced';

// ── Complexity logic ────────────────────────────────────────────────────────
function getComplexity(node: OsintNode): Complexity {
  // Advanced: requires local install, Google dorks, or is paid
  if (node.localInstall || node.googleDork || node.pricing === 'paid') return 'advanced';
  // Intermediate: requires registration, freemium, active opsec, or has API
  if (node.registration || node.pricing === 'freemium' || node.opsec === 'active') return 'intermediate';
  // Beginner: free, no install, no registration, passive
  return 'beginner';
}

const complexityConfig: Record<Complexity, { label: string; color: string; description: string }> = {
  beginner: {
    label: 'Beginner',
    color: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 border-green-200 dark:border-green-800',
    description: 'Free, web-based, no account needed',
  },
  intermediate: {
    label: 'Intermediate',
    color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    description: 'May need a free account or has limited free tier',
  },
  advanced: {
    label: 'Advanced',
    color: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300 border-red-200 dark:border-red-800',
    description: 'Requires software install, paid, or technical knowledge',
  },
};

// ── Category icons (emoji) mapped by top-level name ─────────────────────────
const categoryEmoji: Record<string, string> = {
  'Username': '\u{1F464}',
  'Email Address': '\u{1F4E7}',
  'Domain Name': '\u{1F310}',
  'Cloud Infrastructure': '\u2601\uFE0F',
  'IP & MAC Address': '\u{1F522}',
  'Images / Videos / Docs': '\u{1F5BC}\uFE0F',
  'Social Networks': '\u{1F4AC}',
  'Instant Messaging': '\u{1F4F1}',
  'People Search Engines': '\u{1F50D}',
  'Dating': '\u{1F495}',
  'Telephone Numbers': '\u{1F4DE}',
  'Public Records': '\u{1F4CB}',
  'Compliance & Risk Intelligence': '\u2696\uFE0F',
  'Business Records': '\u{1F3E2}',
  'Transportation': '\u2708\uFE0F',
  'Geolocation Tools / Maps': '\u{1F5FA}\uFE0F',
  'Search Engines': '\u{1F50E}',
  'Online Communities': '\u{1F465}',
  'Archives': '\u{1F5C4}\uFE0F',
  'Language Translation': '\u{1F30D}',
  'Mobile OSINT': '\u{1F4F2}',
  'Dark Web': '\u{1F576}\uFE0F',
  'Disinformation & Media Verification': '\u{1F4F0}',
  'Blockchain & Cryptocurrency': '\u20BF',
  'Classifieds': '\u{1F3F7}\uFE0F',
  'Encoding / Decoding': '\u{1F510}',
  'Tools': '\u{1F6E0}\uFE0F',
  'AI Tools': '\u{1F916}',
  'Malicious File Analysis': '\u{1F9A0}',
  'Cyber Threat Intelligence': '\u{1F6E1}\uFE0F',
  'OpSec': '\u{1F512}',
  'Documentation / Evidence Capture': '\u{1F4F8}',
  'Training': '\u{1F393}',
};

// ── Complexity badge ────────────────────────────────────────────────────────
function ComplexityBadge({ level }: { level: Complexity }) {
  const cfg = complexityConfig[level];
  return (
    <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium border shrink-0 ${cfg.color}`}>
      {cfg.label}
    </span>
  );
}

// ── Tree node component ─────────────────────────────────────────────────────
function TreeNode({
  node,
  depth = 0,
  searchTerm,
  expandAll,
  complexityFilter,
}: {
  node: OsintNode;
  depth?: number;
  searchTerm: string;
  expandAll: boolean;
  complexityFilter: Complexity | null;
}) {
  const [expanded, setExpanded] = useState(depth === 0);
  const isFolder = node.type === 'folder' && node.children && node.children.length > 0;
  const isLink = node.type === 'url' && node.url;

  useEffect(() => {
    if (expandAll && (searchTerm || complexityFilter)) setExpanded(true);
    else if (!searchTerm && !complexityFilter && depth > 0) setExpanded(false);
  }, [expandAll, searchTerm, complexityFilter, depth]);

  const toggle = useCallback(() => {
    if (isFolder) setExpanded(prev => !prev);
  }, [isFolder]);

  // Filter children by search and complexity
  const visibleChildren = useMemo(() => {
    if (!node.children) return [];
    return node.children.filter(child => {
      const searchMatch = !searchTerm || matchesSearch(child, searchTerm);
      const complexityMatch = !complexityFilter || matchesComplexity(child, complexityFilter);
      return searchMatch && complexityMatch;
    });
  }, [node.children, searchTerm, complexityFilter]);

  // Hide non-matching leaf tools
  if (isLink) {
    if (searchTerm && !matchesSearch(node, searchTerm)) return null;
    if (complexityFilter && getComplexity(node) !== complexityFilter) return null;
  }
  // Hide empty folders
  if (isFolder && (searchTerm || complexityFilter) && visibleChildren.length === 0) return null;

  const emoji = depth === 1 ? categoryEmoji[node.name] || '\u{1F4C2}' : undefined;
  const complexity = isLink ? getComplexity(node) : null;

  return (
    <div className={depth > 0 ? 'ml-4 md:ml-6' : ''}>
      {isFolder ? (
        <button
          onClick={toggle}
          className={`flex items-center gap-2 w-full text-left py-1.5 px-2 rounded-lg hover:bg-muted/60 transition-colors group ${
            depth === 1 ? 'text-base font-semibold mt-1' : 'text-sm'
          }`}
        >
          {expanded ? (
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          )}
          {depth === 1 ? (
            <span className="text-lg mr-1">{emoji}</span>
          ) : expanded ? (
            <FolderOpen className="h-4 w-4 shrink-0 text-primary/70" />
          ) : (
            <Folder className="h-4 w-4 shrink-0 text-primary/70" />
          )}
          <span className="truncate">{node.name}</span>
          <Badge variant="secondary" className="ml-auto text-xs shrink-0">
            {visibleChildren.reduce((s, c) => s + countTools(c, complexityFilter), 0)}
          </Badge>
        </button>
      ) : isLink ? (
        <a
          href={node.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-2 py-1.5 px-2 ml-6 rounded-lg hover:bg-primary/5 transition-colors group text-sm"
        >
          <Globe className="h-3.5 w-3.5 mt-0.5 shrink-0 text-primary/60" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-primary group-hover:underline font-medium">
                {node.name}
              </span>
              {complexity && <ComplexityBadge level={complexity} />}
              {node.pricing && node.pricing !== 'free' && (
                <Badge variant="outline" className="text-[10px] px-1.5 py-0 shrink-0">
                  {node.pricing}
                </Badge>
              )}
              {node.localInstall && (
                <Badge variant="outline" className="text-[10px] px-1.5 py-0 shrink-0">
                  install required
                </Badge>
              )}
              {node.registration && (
                <Badge variant="outline" className="text-[10px] px-1.5 py-0 shrink-0">
                  account needed
                </Badge>
              )}
            </div>
            {node.description && (
              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                {node.description}
              </p>
            )}
          </div>
          <ExternalLink className="h-3 w-3 mt-1 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      ) : (
        <div className="flex items-center gap-2 py-1 px-2 ml-6 text-sm text-muted-foreground">
          <span>{node.name}</span>
        </div>
      )}

      {isFolder && expanded && visibleChildren.length > 0 && (
        <div className={depth === 0 ? '' : 'border-l border-border/50 ml-4'}>
          {visibleChildren.map((child, i) => (
            <TreeNode
              key={`${child.name}-${i}`}
              node={child}
              depth={depth + 1}
              searchTerm={searchTerm}
              expandAll={expandAll}
              complexityFilter={complexityFilter}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function matchesSearch(node: OsintNode, term: string): boolean {
  const lower = term.toLowerCase();
  if (node.name.toLowerCase().includes(lower)) return true;
  if (node.description?.toLowerCase().includes(lower)) return true;
  if (node.children?.some(child => matchesSearch(child, lower))) return true;
  return false;
}

function matchesComplexity(node: OsintNode, level: Complexity): boolean {
  if (node.type === 'url') return getComplexity(node) === level;
  if (node.children?.some(child => matchesComplexity(child, level))) return true;
  return false;
}

function countTools(node: OsintNode, complexityFilter?: Complexity | null): number {
  if (node.type === 'url') {
    if (complexityFilter && getComplexity(node) !== complexityFilter) return 0;
    return 1;
  }
  if (!node.children) return 0;
  return node.children.reduce((sum, child) => sum + countTools(child, complexityFilter), 0);
}

// ── Main page component ─────────────────────────────────────────────────────
export default function OsintFramework() {
  const [data, setData] = useState<OsintNode | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [complexityFilter, setComplexityFilter] = useState<Complexity | null>(null);

  useEffect(() => {
    fetch('/osint-data.json')
      .then(res => res.json())
      .then((json: OsintNode) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load OSINT Framework data.');
        setLoading(false);
      });
  }, []);

  const totalTools = useMemo(() => (data ? countTools(data) : 0), [data]);
  const filteredTools = useMemo(() => (data ? countTools(data, complexityFilter) : 0), [data, complexityFilter]);
  const totalCategories = data?.children?.length || 0;

  const complexityCounts = useMemo(() => {
    if (!data) return { beginner: 0, intermediate: 0, advanced: 0 };
    return {
      beginner: countTools(data, 'beginner'),
      intermediate: countTools(data, 'intermediate'),
      advanced: countTools(data, 'advanced'),
    };
  }, [data]);

  return (
    <>
      <SEOHead
        title="OSINT Framework — TekSure"
        description="Interactive directory of 1,100+ open-source intelligence (OSINT) tools organized by category and difficulty. Search usernames, emails, domains, social networks, and more."
        path="/tools/osint-framework"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Search className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">OSINT Framework</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              An interactive directory of {totalTools.toLocaleString()}+ open-source intelligence tools across {totalCategories} categories. Each tool is labeled by difficulty so you know what to expect.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Badge variant="secondary">
                {totalTools.toLocaleString()} Tools
              </Badge>
              <Badge variant="secondary">
                {totalCategories} Categories
              </Badge>
              <Badge variant="outline">Open Source</Badge>
            </div>
          </div>
        </section>

        {/* Complexity legend */}
        <section className="border-b border-border bg-muted/30">
          <div className="container max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Difficulty levels</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(['beginner', 'intermediate', 'advanced'] as Complexity[]).map(level => {
                const cfg = complexityConfig[level];
                const isActive = complexityFilter === level;
                return (
                  <button
                    key={level}
                    onClick={() => setComplexityFilter(isActive ? null : level)}
                    className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all ${
                      isActive
                        ? 'ring-2 ring-primary border-primary bg-primary/5'
                        : 'border-border hover:border-primary/30 hover:bg-muted/50'
                    }`}
                  >
                    <ComplexityBadge level={level} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground">{cfg.description}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">
                      {complexityCounts[level]}
                    </span>
                  </button>
                );
              })}
            </div>
            {complexityFilter && (
              <div className="mt-3 flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  Showing {filteredTools} {complexityConfig[complexityFilter].label.toLowerCase()} tools
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 text-xs px-2"
                  onClick={() => setComplexityFilter(null)}
                >
                  Clear filter
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Search + Tree */}
        <div className="container max-w-4xl mx-auto px-4 py-6">
          {/* Search bar */}
          <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm pb-4 pt-2 border-b border-border/50 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tools, categories, or descriptions..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-10 h-11 text-base"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Content */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-3 text-muted-foreground">Loading OSINT Framework...</span>
            </div>
          ) : error ? (
            <div className="text-center py-20 text-destructive">{error}</div>
          ) : data?.children ? (
            <div className="space-y-1">
              {data.children
                .filter(cat => {
                  const searchMatch = !search || matchesSearch(cat, search);
                  const complexityMatch = !complexityFilter || matchesComplexity(cat, complexityFilter);
                  return searchMatch && complexityMatch;
                })
                .map((category, i) => (
                  <TreeNode
                    key={`${category.name}-${i}`}
                    node={category}
                    depth={1}
                    searchTerm={search}
                    expandAll={!!(search || complexityFilter)}
                    complexityFilter={complexityFilter}
                  />
                ))}
              {(search || complexityFilter) &&
                data.children.filter(cat => {
                  const searchMatch = !search || matchesSearch(cat, search);
                  const complexityMatch = !complexityFilter || matchesComplexity(cat, complexityFilter);
                  return searchMatch && complexityMatch;
                }).length === 0 && (
                  <div className="text-center py-10 text-muted-foreground">
                    No tools found{search ? ` matching "${search}"` : ''}{complexityFilter ? ` at ${complexityFilter} level` : ''}
                  </div>
                )}
            </div>
          ) : null}

          {/* Attribution */}
          <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <p>
              Data sourced from the{' '}
              <a
                href="https://osintframework.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                OSINT Framework
              </a>{' '}
              project by lockfale. All tools are third-party resources — use responsibly.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
