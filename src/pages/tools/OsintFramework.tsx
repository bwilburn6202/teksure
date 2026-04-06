import { useState, useEffect, useMemo, useCallback } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Search, ChevronRight, ChevronDown, ExternalLink, Folder, Globe,
  Loader2, FolderOpen
} from 'lucide-react';

// ── Types ────────────────────────────────────────────────────────────────────
interface OsintNode {
  name: string;
  type: string;
  url?: string;
  description?: string;
  pricing?: string;
  children?: OsintNode[];
}

// ── Category icons (emoji) mapped by top-level name ─────────────────────────
const categoryEmoji: Record<string, string> = {
  'Username': '👤',
  'Email Address': '📧',
  'Domain Name': '🌐',
  'Cloud Infrastructure': '☁️',
  'IP & MAC Address': '🔢',
  'Images / Videos / Docs': '🖼️',
  'Social Networks': '💬',
  'Instant Messaging': '📱',
  'People Search Engines': '🔍',
  'Dating': '💕',
  'Telephone Numbers': '📞',
  'Public Records': '📋',
  'Compliance & Risk Intelligence': '⚖️',
  'Business Records': '🏢',
  'Transportation': '✈️',
  'Geolocation Tools / Maps': '🗺️',
  'Search Engines': '🔎',
  'Online Communities': '👥',
  'Archives': '🗄️',
  'Language Translation': '🌍',
  'Mobile OSINT': '📲',
  'Dark Web': '🕶️',
  'Disinformation & Media Verification': '📰',
  'Blockchain & Cryptocurrency': '₿',
  'Classifieds': '🏷️',
  'Encoding / Decoding': '🔐',
  'Tools': '🛠️',
  'AI Tools': '🤖',
  'Malicious File Analysis': '🦠',
  'Cyber Threat Intelligence': '🛡️',
  'OpSec': '🔒',
  'Documentation / Evidence Capture': '📸',
  'Training': '🎓',
};

// ── Tree node component ─────────────────────────────────────────────────────
function TreeNode({
  node,
  depth = 0,
  searchTerm,
  expandAll,
}: {
  node: OsintNode;
  depth?: number;
  searchTerm: string;
  expandAll: boolean;
}) {
  const [expanded, setExpanded] = useState(depth === 0);
  const isFolder = node.type === 'folder' && node.children && node.children.length > 0;
  const isLink = node.type === 'url' && node.url;

  useEffect(() => {
    if (expandAll && searchTerm) setExpanded(true);
    else if (!searchTerm && depth > 0) setExpanded(false);
  }, [expandAll, searchTerm, depth]);

  const toggle = useCallback(() => {
    if (isFolder) setExpanded(prev => !prev);
  }, [isFolder]);

  // Filter children if searching
  const visibleChildren = useMemo(() => {
    if (!searchTerm || !node.children) return node.children || [];
    return node.children.filter(child => matchesSearch(child, searchTerm));
  }, [node.children, searchTerm]);

  if (searchTerm && !isFolder && !matchesSearch(node, searchTerm)) return null;
  if (searchTerm && isFolder && visibleChildren.length === 0) return null;

  const emoji = depth === 1 ? categoryEmoji[node.name] || '📂' : undefined;

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
          {node.children && (
            <Badge variant="secondary" className="ml-auto text-xs shrink-0">
              {countTools(node)}
            </Badge>
          )}
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
            <span className="text-primary group-hover:underline font-medium">
              {node.name}
            </span>
            {node.description && (
              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                {node.description}
              </p>
            )}
          </div>
          {node.pricing && (
            <Badge
              variant={node.pricing === 'free' ? 'secondary' : 'outline'}
              className="text-xs shrink-0 mt-0.5"
            >
              {node.pricing}
            </Badge>
          )}
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

function countTools(node: OsintNode): number {
  if (node.type === 'url') return 1;
  if (!node.children) return 0;
  return node.children.reduce((sum, child) => sum + countTools(child), 0);
}

// ── Main page component ─────────────────────────────────────────────────────
export default function OsintFramework() {
  const [data, setData] = useState<OsintNode | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

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
  const totalCategories = data?.children?.length || 0;

  return (
    <>
      <SEOHead
        title="OSINT Framework — TekSure"
        description="Interactive directory of 1,100+ open-source intelligence (OSINT) tools organized by category. Search usernames, emails, domains, social networks, and more."
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
              An interactive directory of {totalTools.toLocaleString()}+ open-source intelligence tools across {totalCategories} categories. Find tools for investigating usernames, emails, domains, phone numbers, and more.
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
                .filter(cat => !search || matchesSearch(cat, search))
                .map((category, i) => (
                  <TreeNode
                    key={`${category.name}-${i}`}
                    node={category}
                    depth={1}
                    searchTerm={search}
                    expandAll={!!search}
                  />
                ))}
              {search &&
                data.children.filter(cat => matchesSearch(cat, search)).length === 0 && (
                  <div className="text-center py-10 text-muted-foreground">
                    No tools found matching "{search}"
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
