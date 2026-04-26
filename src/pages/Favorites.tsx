import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Trash2,
  ExternalLink,
  Download,
  AlertTriangle,
  BookOpen,
  Wrench,
} from 'lucide-react';
import { toast } from 'sonner';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  clearBookmarks,
  getBookmarks,
  onBookmarksChange,
  removeBookmark,
  type Bookmark,
} from '@/lib/bookmarks';
import { useAuth } from '@/contexts/AuthContext';

type TabValue = 'all' | 'guide' | 'tool';

/** Format an ISO timestamp as a short, friendly date. */
function formatSavedDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return '';
  }
}

/** Build a plain-text export that users can paste into email, notes, etc. */
function buildExportText(bookmarks: Bookmark[]): string {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const header = [
    'My TekSure Saved Items',
    `Exported ${new Date().toLocaleString()}`,
    `${bookmarks.length} item${bookmarks.length === 1 ? '' : 's'}`,
    '',
  ];
  const lines = bookmarks.map((b, i) => {
    const fullUrl = /^https?:\/\//i.test(b.url) ? b.url : `${origin}${b.url}`;
    return [
      `${i + 1}. [${b.type.toUpperCase()}] ${b.title}`,
      `   ${fullUrl}`,
      `   Saved: ${formatSavedDate(b.savedAt)}`,
    ].join('\n');
  });
  return [...header, ...lines].join('\n');
}

export default function Favorites() {
  const { user } = useAuth();
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [tab, setTab] = useState<TabValue>('all');

  // Load once on mount, then stay in sync with cross-tab + same-tab changes.
  useEffect(() => {
    setBookmarks(getBookmarks());
    return onBookmarksChange(setBookmarks);
  }, []);

  const counts = useMemo(
    () => ({
      all: bookmarks.length,
      guide: bookmarks.filter((b) => b.type === 'guide').length,
      tool: bookmarks.filter((b) => b.type === 'tool').length,
    }),
    [bookmarks],
  );

  const filtered = useMemo(() => {
    if (tab === 'all') return bookmarks;
    return bookmarks.filter((b) => b.type === tab);
  }, [bookmarks, tab]);

  const handleRemove = (b: Bookmark) => {
    removeBookmark(b.type, b.slug);
    toast.success(`Removed "${b.title}"`);
  };

  const handleClearAll = () => {
    const count = bookmarks.length;
    clearBookmarks();
    toast.success(`Cleared ${count} saved ${count === 1 ? 'item' : 'items'}`);
  };

  const handleExport = async () => {
    if (bookmarks.length === 0) {
      toast.error('Nothing to export yet');
      return;
    }
    const text = buildExportText(bookmarks);
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Copied your list to the clipboard');
    } catch {
      toast.error("Couldn't copy — your browser blocked clipboard access.");
    }
  };

  return (
    <>
      <SEOHead
        title="My Saved Items | TekSure"
        description="Guides and tools you've saved on TekSure — all in one place for quick access."
        path="/favorites"
        noindex
      />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-background">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="border-b border-border py-10 px-4">
          <div className="container">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-xl">
                <Heart className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                My Saved Items
              </h1>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Everything you've bookmarked — guides, tools, and more — all in one place.
              Your list is saved in this browser, so it stays private to you.
            </p>

            {bookmarks.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                <Button
                  onClick={handleExport}
                  variant="outline"
                  className="rounded-xl gap-2"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Export my list
                </Button>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="rounded-xl gap-2 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                      Clear all
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle className="flex items-center gap-2">
                        <AlertTriangle
                          className="h-5 w-5 text-amber-600"
                          aria-hidden="true"
                        />
                        Clear all saved items?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This will remove {counts.all} saved{' '}
                        {counts.all === 1 ? 'item' : 'items'} from this browser.
                        This can't be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Keep them</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleClearAll}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        Yes, clear all
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            )}
          </div>
        </section>

        {/* ── Body ──────────────────────────────────────────────────────── */}
        <section className="container py-8">
          {bookmarks.length === 0 ? (
            !user ? (
              <Card className="max-w-xl mx-auto rounded-2xl border border-primary/30 bg-primary/5">
                <CardContent className="py-12 text-center">
                  <Heart
                    className="h-12 w-12 text-primary mx-auto mb-4"
                    aria-hidden="true"
                  />
                  <h2 className="text-2xl font-bold mb-2">
                    Save Your Favorite Guides
                  </h2>
                  <p className="text-base text-foreground/80 mb-7 max-w-md mx-auto leading-relaxed">
                    Create a free account to bookmark guides and come back to
                    them anytime, on any device.
                  </p>
                  <div className="flex gap-3 justify-center flex-wrap">
                    <Button asChild size="lg" className="rounded-xl min-h-[48px] gap-2 px-6 font-bold">
                      <Link to="/signup">
                        Create a Free Account
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-xl min-h-[48px] px-6 font-bold border-2">
                      <Link to="/login">Sign In</Link>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-6">
                    Already saved guides on this browser?{' '}
                    <Link to="/guides" className="text-primary hover:underline font-medium">
                      Browse guides
                    </Link>
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="max-w-xl mx-auto rounded-2xl border border-border bg-card">
                <CardContent className="py-12 text-center">
                  <Heart
                    className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4"
                    aria-hidden="true"
                  />
                  <p className="text-lg text-foreground mb-2 font-semibold">
                    Your list is empty
                  </p>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    You haven't saved anything yet. Tap the heart on any guide or
                    tool to keep it here.
                  </p>
                  <div className="flex gap-2 justify-center flex-wrap">
                    <Button asChild className="rounded-xl">
                      <Link to="/guides">Browse guides</Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-xl">
                      <Link to="/tools">Browse tools</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          ) : (
            <Tabs value={tab} onValueChange={(v) => setTab(v as TabValue)}>
              <TabsList className="mb-6">
                <TabsTrigger value="all">All ({counts.all})</TabsTrigger>
                <TabsTrigger value="guide">Guides ({counts.guide})</TabsTrigger>
                <TabsTrigger value="tool">Tools ({counts.tool})</TabsTrigger>
              </TabsList>

              <TabsContent value={tab} className="mt-0">
                {filtered.length === 0 ? (
                  <p className="text-muted-foreground text-center py-12">
                    Nothing saved in this category yet.
                  </p>
                ) : (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((b) => (
                      <Card
                        key={`${b.type}-${b.slug}`}
                        className="h-full flex flex-col rounded-2xl border border-border bg-card"
                      >
                        <CardContent className="pt-6 flex-1 flex flex-col gap-3">
                          <div className="flex items-start gap-2">
                            <Badge
                              variant={b.type === 'guide' ? 'default' : 'secondary'}
                              className="gap-1"
                            >
                              {b.type === 'guide' ? (
                                <BookOpen className="h-3 w-3" aria-hidden="true" />
                              ) : (
                                <Wrench className="h-3 w-3" aria-hidden="true" />
                              )}
                              {b.type === 'guide' ? 'Guide' : 'Tool'}
                            </Badge>
                          </div>

                          <h2 className="text-base font-semibold leading-snug text-primary">
                            {b.title}
                          </h2>

                          <p className="text-xs text-muted-foreground">
                            Saved {formatSavedDate(b.savedAt)}
                          </p>

                          <div className="flex gap-2 mt-auto pt-2">
                            <Button
                              asChild
                              size="sm"
                              className="gap-2 flex-1 rounded-xl"
                            >
                              <Link to={b.url}>
                                <ExternalLink
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                                Open
                              </Link>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              aria-label={`Remove "${b.title}" from saved items`}
                              className="text-destructive hover:text-destructive rounded-xl"
                              onClick={() => handleRemove(b)}
                            >
                              <Trash2 className="h-4 w-4" aria-hidden="true" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
