import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  DollarSign, Plus, Trash2, AlertTriangle, Coffee, Printer, Users,
  ExternalLink, Repeat, Library, PiggyBank, TrendingDown, ShieldAlert,
  Tv, Music, Cloud, Newspaper, ShoppingCart, Dumbbell, Shield,
  Package, MoreHorizontal, Plane, Flag,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader,
  DialogTitle, DialogTrigger,
} from '@/components/ui/dialog';

/* ───────── Types ───────── */

type Category =
  | 'streaming'
  | 'news'
  | 'shopping'
  | 'gym'
  | 'music'
  | 'cloud'
  | 'security'
  | 'groceries'
  | 'other';

type Frequency = 'week' | 'month' | 'quarter' | 'never';

interface Subscription {
  id: string;
  name: string;
  cost: number;          // monthly dollars
  category: Category;
  lastUsed: Frequency;
  addedAt: string;       // ISO date
}

interface KnownSubscription {
  name: string;
  cost: number;
  category: Category;
  cancelUrl?: string;
  cancelNote?: string;
}

/* ───────── 60+ common subscriptions ───────── */

const KNOWN: KnownSubscription[] = [
  // Video streaming
  { name: 'Netflix', cost: 15, category: 'streaming', cancelUrl: 'https://www.netflix.com/cancelplan' },
  { name: 'Hulu', cost: 8, category: 'streaming', cancelUrl: 'https://secure.hulu.com/account' },
  { name: 'Hulu + Live TV', cost: 77, category: 'streaming', cancelUrl: 'https://secure.hulu.com/account' },
  { name: 'Disney+', cost: 14, category: 'streaming', cancelUrl: 'https://www.disneyplus.com/account/subscription' },
  { name: 'Max', cost: 17, category: 'streaming', cancelUrl: 'https://www.max.com/subscription' },
  { name: 'Apple TV+', cost: 10, category: 'streaming', cancelNote: 'iPhone: Settings → your name → Subscriptions' },
  { name: 'Apple One', cost: 20, category: 'streaming', cancelNote: 'iPhone: Settings → your name → Subscriptions' },
  { name: 'Paramount+', cost: 8, category: 'streaming', cancelUrl: 'https://www.paramountplus.com/account/subscription/' },
  { name: 'Peacock', cost: 8, category: 'streaming', cancelUrl: 'https://www.peacocktv.com/account/plans' },
  { name: 'Discovery+', cost: 5, category: 'streaming', cancelUrl: 'https://www.discoveryplus.com/cancel' },
  { name: 'BritBox', cost: 9, category: 'streaming', cancelUrl: 'https://www.britbox.com/us/account' },
  { name: 'Acorn TV', cost: 7, category: 'streaming', cancelUrl: 'https://acorn.tv/account' },
  { name: 'YouTube Premium', cost: 14, category: 'streaming', cancelUrl: 'https://www.youtube.com/paid_memberships' },
  { name: 'YouTube TV', cost: 73, category: 'streaming', cancelUrl: 'https://tv.youtube.com/settings/membership' },
  { name: 'FuboTV', cost: 80, category: 'streaming', cancelUrl: 'https://www.fubo.tv/subscription' },
  { name: 'Sling TV', cost: 40, category: 'streaming', cancelUrl: 'https://www.sling.com/account' },
  { name: 'Philo', cost: 25, category: 'streaming', cancelUrl: 'https://www.philo.com/account' },
  { name: 'NFL+', cost: 7, category: 'streaming', cancelUrl: 'https://www.nfl.com/plus/account' },
  { name: 'NBA League Pass', cost: 15, category: 'streaming', cancelUrl: 'https://www.nba.com/account/subscriptions' },
  { name: 'MLB.TV', cost: 25, category: 'streaming', cancelUrl: 'https://www.mlb.com/subscriptions' },

  // Music
  { name: 'Spotify', cost: 12, category: 'music', cancelUrl: 'https://www.spotify.com/account/subscription/' },
  { name: 'Apple Music', cost: 11, category: 'music', cancelNote: 'iPhone: Settings → your name → Subscriptions' },
  { name: 'Amazon Music Unlimited', cost: 10, category: 'music', cancelUrl: 'https://www.amazon.com/gp/mm/cancelrenew' },
  { name: 'YouTube Music', cost: 11, category: 'music', cancelUrl: 'https://www.youtube.com/paid_memberships' },
  { name: 'Tidal', cost: 11, category: 'music', cancelUrl: 'https://tidal.com/account/subscription' },
  { name: 'Pandora Plus', cost: 5, category: 'music', cancelUrl: 'https://www.pandora.com/account/subscription' },
  { name: 'SiriusXM', cost: 17, category: 'music', cancelUrl: 'https://care.siriusxm.com/' },

  // News & reading
  { name: 'New York Times', cost: 17, category: 'news', cancelUrl: 'https://myaccount.nytimes.com/seg/subscription' },
  { name: 'Washington Post', cost: 12, category: 'news', cancelUrl: 'https://www.washingtonpost.com/subscribe/manage/' },
  { name: 'Wall Street Journal', cost: 40, category: 'news', cancelUrl: 'https://customercenter.wsj.com/' },
  { name: 'The Athletic', cost: 10, category: 'news', cancelUrl: 'https://theathletic.com/account/' },
  { name: 'Bloomberg', cost: 35, category: 'news', cancelUrl: 'https://www.bloomberg.com/account/subscription' },
  { name: 'The Economist', cost: 18, category: 'news', cancelUrl: 'https://myaccount.economist.com/' },
  { name: 'Kindle Unlimited', cost: 12, category: 'news', cancelUrl: 'https://www.amazon.com/kindleunlimited' },
  { name: 'Audible', cost: 15, category: 'news', cancelUrl: 'https://www.audible.com/account/membership' },
  { name: 'MasterClass', cost: 15, category: 'news', cancelUrl: 'https://www.masterclass.com/account/plan' },
  { name: 'Skillshare', cost: 14, category: 'news', cancelUrl: 'https://www.skillshare.com/settings/payments' },

  // Shopping / memberships
  { name: 'Amazon Prime', cost: 15, category: 'shopping', cancelUrl: 'https://www.amazon.com/yourmemberships' },
  { name: 'Costco', cost: 5, category: 'shopping', cancelNote: 'Call or visit the membership counter. Annual fee $65/yr.' },
  { name: "Sam's Club", cost: 4, category: 'shopping', cancelUrl: 'https://www.samsclub.com/membership/cancel' },
  { name: 'AAA', cost: 6, category: 'other', cancelNote: 'Call your local AAA club.' },
  { name: 'AARP', cost: 1.50, category: 'other', cancelUrl: 'https://www.aarp.org/benefits-discounts/my-membership/' },
  { name: 'LinkedIn Premium', cost: 30, category: 'other', cancelUrl: 'https://www.linkedin.com/premium/manage/' },

  // Gym / health
  { name: 'Peloton', cost: 44, category: 'gym', cancelUrl: 'https://members.onepeloton.com/preferences' },
  { name: 'Gym Membership', cost: 40, category: 'gym', cancelNote: 'Most gyms require written notice. Read your contract first.' },
  { name: 'Planet Fitness', cost: 15, category: 'gym', cancelNote: 'Visit your home club in person or mail a certified letter.' },
  { name: 'Calm', cost: 15, category: 'other', cancelUrl: 'https://www.calm.com/account/subscription' },
  { name: 'Headspace', cost: 13, category: 'other', cancelUrl: 'https://www.headspace.com/subscription/manage' },
  { name: 'Duolingo Super', cost: 7, category: 'other', cancelUrl: 'https://www.duolingo.com/settings/subscription' },

  // Cloud
  { name: 'iCloud+', cost: 3, category: 'cloud', cancelNote: 'iPhone: Settings → your name → iCloud → Manage Plan' },
  { name: 'Google One', cost: 2, category: 'cloud', cancelUrl: 'https://one.google.com/storage' },
  { name: 'Dropbox', cost: 12, category: 'cloud', cancelUrl: 'https://www.dropbox.com/account/plan' },
  { name: 'OneDrive / Microsoft 365', cost: 7, category: 'cloud', cancelUrl: 'https://account.microsoft.com/services' },

  // Security
  { name: 'Norton 360', cost: 5, category: 'security', cancelUrl: 'https://my.norton.com/account' },
  { name: 'McAfee', cost: 6, category: 'security', cancelUrl: 'https://home.mcafee.com/secure/protected/login.aspx' },
  { name: 'LifeLock', cost: 15, category: 'security', cancelUrl: 'https://my.norton.com/account' },

  // Ancestry / DNA
  { name: 'MyHeritage', cost: 13, category: 'other', cancelUrl: 'https://www.myheritage.com/my-account/billing' },
  { name: 'Ancestry', cost: 25, category: 'other', cancelUrl: 'https://www.ancestry.com/account/' },
  { name: '23andMe', cost: 9, category: 'other', cancelUrl: 'https://you.23andme.com/user/edit/preferences/' },

  // Groceries / delivery
  { name: 'Instacart+', cost: 10, category: 'groceries', cancelUrl: 'https://www.instacart.com/store/account/instacart-plus' },
  { name: 'DoorDash DashPass', cost: 10, category: 'groceries', cancelUrl: 'https://www.doordash.com/dashpass/' },
  { name: 'Uber One', cost: 10, category: 'other', cancelUrl: 'https://www.uber.com/go/uber-one/' },
  { name: 'Amazon Pharmacy RxPass', cost: 5, category: 'other', cancelUrl: 'https://pharmacy.amazon.com/rxpass' },
  { name: 'Meals on Wheels donation', cost: 25, category: 'other', cancelNote: 'Contact your local chapter.' },
];

/* ───────── Category metadata ───────── */

const CATEGORIES: Record<Category, {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  bar: string;   // solid color for the breakdown bar
  tile: string;  // soft tint for the list-row tile
  text: string;  // icon color for the list-row tile
}> = {
  streaming:  { label: 'Streaming',     icon: Tv,             bar: 'bg-purple-500',  tile: 'bg-purple-100 dark:bg-purple-950/40',   text: 'text-purple-600 dark:text-purple-300' },
  music:      { label: 'Music',         icon: Music,          bar: 'bg-pink-500',    tile: 'bg-pink-100 dark:bg-pink-950/40',       text: 'text-pink-600 dark:text-pink-300' },
  news:       { label: 'News & Books',  icon: Newspaper,      bar: 'bg-sky-500',     tile: 'bg-sky-100 dark:bg-sky-950/40',         text: 'text-sky-600 dark:text-sky-300' },
  shopping:   { label: 'Shopping',      icon: ShoppingCart,   bar: 'bg-orange-500',  tile: 'bg-orange-100 dark:bg-orange-950/40',   text: 'text-orange-600 dark:text-orange-300' },
  gym:        { label: 'Gym & Fitness', icon: Dumbbell,       bar: 'bg-red-500',     tile: 'bg-red-100 dark:bg-red-950/40',         text: 'text-red-600 dark:text-red-300' },
  cloud:      { label: 'Cloud Storage', icon: Cloud,          bar: 'bg-indigo-500',  tile: 'bg-indigo-100 dark:bg-indigo-950/40',   text: 'text-indigo-600 dark:text-indigo-300' },
  security:   { label: 'Security',      icon: Shield,         bar: 'bg-emerald-500', tile: 'bg-emerald-100 dark:bg-emerald-950/40', text: 'text-emerald-600 dark:text-emerald-300' },
  groceries:  { label: 'Groceries',     icon: Package,        bar: 'bg-lime-500',    tile: 'bg-lime-100 dark:bg-lime-950/40',       text: 'text-lime-600 dark:text-lime-300' },
  other:      { label: 'Other',         icon: MoreHorizontal, bar: 'bg-slate-500',   tile: 'bg-slate-100 dark:bg-slate-900/60',     text: 'text-slate-600 dark:text-slate-300' },
};

const FREQUENCY_LABEL: Record<Frequency, string> = {
  week: 'Used in the last week',
  month: 'Used in the last month',
  quarter: 'Used in the last 3 months',
  never: 'Not used in 3+ months',
};

/* ───────── Streaming overlap detection ───────── */

const STREAMING_NAMES = new Set([
  'Netflix', 'Hulu', 'Disney+', 'Max', 'Apple TV+', 'Apple One',
  'Paramount+', 'Peacock', 'Discovery+', 'BritBox', 'Acorn TV',
  'YouTube Premium',
]);

const STORAGE_KEY = 'teksure:subscriptions';

/* ───────── Helpers ───────── */

function uid() {
  return `sub_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function loadFromStorage(): Subscription[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((s) => s && typeof s.id === 'string' && typeof s.name === 'string');
  } catch {
    return [];
  }
}

function saveToStorage(list: Subscription[]) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    /* storage full or blocked — silent */
  }
}

function findKnown(name: string): KnownSubscription | undefined {
  const clean = name.trim().toLowerCase();
  return KNOWN.find((k) => k.name.toLowerCase() === clean);
}

function formatMoney(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
}

/* ───────── Main component ───────── */

export default function SubscriptionCostAggregator() {
  const [subs, setSubs] = useState<Subscription[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Form state
  const [formName, setFormName] = useState('');
  const [formCost, setFormCost] = useState('');
  const [formCategory, setFormCategory] = useState<Category>('streaming');
  const [formFrequency, setFormFrequency] = useState<Frequency>('month');
  const [formError, setFormError] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [suggestionOpen, setSuggestionOpen] = useState(false);

  // Hydrate once on mount
  useEffect(() => {
    setSubs(loadFromStorage());
    setHydrated(true);
  }, []);

  // Persist
  useEffect(() => {
    if (hydrated) saveToStorage(subs);
  }, [subs, hydrated]);

  /* Name autocomplete suggestions */
  const suggestions = useMemo(() => {
    const q = formName.trim().toLowerCase();
    if (q.length < 1) return [];
    return KNOWN.filter((k) => k.name.toLowerCase().includes(q)).slice(0, 8);
  }, [formName]);

  /* Totals */
  const monthlyTotal = useMemo(
    () => subs.reduce((sum, s) => sum + (Number.isFinite(s.cost) ? s.cost : 0), 0),
    [subs],
  );
  const annualTotal = monthlyTotal * 12;

  /* By category breakdown */
  const byCategory = useMemo(() => {
    const map = new Map<Category, number>();
    for (const s of subs) {
      map.set(s.category, (map.get(s.category) ?? 0) + s.cost);
    }
    return Array.from(map.entries())
      .map(([cat, total]) => ({ cat, total }))
      .sort((a, b) => b.total - a.total);
  }, [subs]);

  const maxCategoryTotal = byCategory[0]?.total ?? 0;

  /* Red flags — not used in 3+ months */
  const redFlags = useMemo(
    () => subs.filter((s) => s.lastUsed === 'never').sort((a, b) => b.cost - a.cost),
    [subs],
  );

  /* Streaming overlap detection */
  const streamingOverlap = useMemo(() => {
    return subs
      .filter((s) => STREAMING_NAMES.has(s.name) || s.category === 'streaming')
      .map((s) => s.name);
  }, [subs]);

  /* Cancel info for active subs */
  const cancelInfo = useMemo(
    () =>
      subs
        .map((s) => {
          const known = findKnown(s.name);
          return { sub: s, cancelUrl: known?.cancelUrl, cancelNote: known?.cancelNote };
        })
        .sort((a, b) => b.sub.cost - a.sub.cost),
    [subs],
  );

  /* ───────── Handlers ───────── */

  function resetForm() {
    setFormName('');
    setFormCost('');
    setFormCategory('streaming');
    setFormFrequency('month');
    setFormError('');
  }

  function pickSuggestion(k: KnownSubscription) {
    setFormName(k.name);
    setFormCost(String(k.cost));
    setFormCategory(k.category);
    setSuggestionOpen(false);
  }

  function handleAdd() {
    const name = formName.trim();
    const cost = parseFloat(formCost);

    if (!name) {
      setFormError('Please enter the name of the subscription.');
      return;
    }
    if (!Number.isFinite(cost) || cost < 0) {
      setFormError('Please enter a monthly cost (a number like 9.99).');
      return;
    }

    const sub: Subscription = {
      id: uid(),
      name,
      cost: Math.round(cost * 100) / 100,
      category: formCategory,
      lastUsed: formFrequency,
      addedAt: new Date().toISOString(),
    };

    setSubs((prev) => [...prev, sub]);
    resetForm();
    setDialogOpen(false);
  }

  function removeSub(id: string) {
    setSubs((prev) => prev.filter((s) => s.id !== id));
  }

  function clearAll() {
    if (typeof window !== 'undefined' && window.confirm('Remove every subscription from the list? This cannot be undone.')) {
      setSubs([]);
    }
  }

  function handlePrint() {
    if (typeof window !== 'undefined') window.print();
  }

  /* ───────── Render ───────── */

  return (
    <>
      <SEOHead
        title="Subscription Cost Aggregator — See What You're Actually Paying | TekSure"
        description="Add up every subscription you pay for. See your monthly and annual total, flag the ones you never use, and get direct cancellation links."
        path="/calculators/subscriptions"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero — warm amber gradient */}
        <section className="relative bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100 dark:from-amber-950/40 dark:via-amber-900/20 dark:to-orange-950/30 border-b">
          <div className="container py-12 md:py-16 max-w-5xl">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-amber-500/20 dark:bg-amber-500/30 flex items-center justify-center flex-shrink-0 ring-2 ring-amber-500/30">
                  <DollarSign className="h-7 w-7 text-amber-700 dark:text-amber-300" aria-hidden="true" />
                </div>
                <Badge variant="secondary" className="bg-white/80 dark:bg-black/30">Free Calculator</Badge>
              </div>
              <BookmarkButton
                type="tool"
                slug="subscription-cost-aggregator"
                title="Subscription Cost Aggregator"
                url="/calculators/subscriptions"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 text-amber-950 dark:text-amber-100">
              What Are You Actually Paying For?
            </h1>
            <p className="text-lg md:text-xl text-amber-900/80 dark:text-amber-100/80 max-w-2xl">
              Add up every subscription. See the annual total. Decide what stays.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-6xl">
          {/* Top controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <Dialog open={dialogOpen} onOpenChange={(o) => { setDialogOpen(o); if (!o) resetForm(); }}>
                <DialogTrigger asChild>
                  <Button size="lg" className="min-h-14 text-base bg-amber-600 hover:bg-amber-700 text-white">
                    <Plus className="h-5 w-5 mr-2" aria-hidden="true" />
                    Add a subscription
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="text-xl">Add a subscription</DialogTitle>
                    <DialogDescription className="text-base">
                      Start typing a name and we'll fill in the monthly cost for common services.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4 py-2">
                    {/* Name w/ autocomplete */}
                    <div className="relative">
                      <label htmlFor="sub-name" className="text-sm font-medium mb-1.5 block">
                        Subscription name
                      </label>
                      <Input
                        id="sub-name"
                        autoComplete="off"
                        className="min-h-14 text-base"
                        placeholder="e.g. Netflix, Spotify, AARP..."
                        value={formName}
                        onChange={(e) => { setFormName(e.target.value); setSuggestionOpen(true); }}
                        onFocus={() => setSuggestionOpen(true)}
                      />
                      {suggestionOpen && suggestions.length > 0 && (
                        <div
                          role="listbox"
                          className="absolute z-10 left-0 right-0 mt-1 bg-popover border rounded-lg shadow-lg max-h-64 overflow-auto"
                        >
                          {suggestions.map((k) => (
                            <button
                              key={k.name}
                              type="button"
                              onClick={() => pickSuggestion(k)}
                              className="w-full text-left px-3 py-2.5 hover:bg-muted flex items-center justify-between gap-3 border-b last:border-b-0"
                            >
                              <span className="text-base font-medium">{k.name}</span>
                              <span className="text-sm text-muted-foreground">
                                {formatMoney(k.cost)}/mo
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Cost */}
                    <div>
                      <label htmlFor="sub-cost" className="text-sm font-medium mb-1.5 block">
                        Monthly cost (USD)
                      </label>
                      <Input
                        id="sub-cost"
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.01"
                        className="min-h-14 text-base"
                        placeholder="9.99"
                        value={formCost}
                        onChange={(e) => setFormCost(e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        If it's billed annually, divide by 12 (e.g. $60/yr → 5).
                      </p>
                    </div>

                    {/* Category */}
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Category</label>
                      <Select value={formCategory} onValueChange={(v) => setFormCategory(v as Category)}>
                        <SelectTrigger className="min-h-14 text-base">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {(Object.keys(CATEGORIES) as Category[]).map((c) => (
                            <SelectItem key={c} value={c} className="text-base">
                              {CATEGORIES[c].label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Last used */}
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">
                        When did you last use it?
                      </label>
                      <Select value={formFrequency} onValueChange={(v) => setFormFrequency(v as Frequency)}>
                        <SelectTrigger className="min-h-14 text-base">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="week" className="text-base">Within the last week</SelectItem>
                          <SelectItem value="month" className="text-base">Within the last month</SelectItem>
                          <SelectItem value="quarter" className="text-base">Within the last 3 months</SelectItem>
                          <SelectItem value="never" className="text-base">Not in 3+ months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formError && (
                      <p className="text-sm text-destructive" role="alert">{formError}</p>
                    )}
                  </div>

                  <DialogFooter>
                    <Button variant="outline" onClick={() => { resetForm(); setDialogOpen(false); }} className="min-h-12 text-base">
                      Cancel
                    </Button>
                    <Button onClick={handleAdd} className="min-h-12 text-base bg-amber-600 hover:bg-amber-700 text-white">
                      Add to my list
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              {subs.length > 0 && (
                <Button
                  variant="outline"
                  size="lg"
                  className="min-h-14 text-base"
                  onClick={handlePrint}
                >
                  <Printer className="h-5 w-5 mr-2" aria-hidden="true" />
                  Print list
                </Button>
              )}
            </div>

            {subs.length > 0 && (
              <Button
                variant="ghost"
                onClick={clearAll}
                className="text-sm text-muted-foreground hover:text-destructive"
              >
                Clear all
              </Button>
            )}
          </div>

          {/* Empty state */}
          {subs.length === 0 && (
            <Card className="border-2 border-dashed border-amber-300 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/10">
              <CardContent className="py-12 text-center">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center mb-4">
                  <PiggyBank className="h-8 w-8 text-amber-700 dark:text-amber-300" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold mb-2">No subscriptions yet</h2>
                <p className="text-base text-muted-foreground max-w-md mx-auto mb-6">
                  Tap "Add a subscription" to get started. Your list is saved on this device — no account needed.
                </p>
                <Button
                  onClick={() => setDialogOpen(true)}
                  size="lg"
                  className="min-h-14 text-base bg-amber-600 hover:bg-amber-700 text-white"
                >
                  <Plus className="h-5 w-5 mr-2" aria-hidden="true" />
                  Add your first one
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Dashboard */}
          {subs.length > 0 && (
            <div className="grid lg:grid-cols-[1fr_360px] gap-6 items-start">
              {/* Left column — list + insights */}
              <div className="space-y-6">
                {/* Current list */}
                <Card>
                  <CardContent className="p-0">
                    <div className="p-5 border-b">
                      <h2 className="text-lg font-semibold">Your subscriptions ({subs.length})</h2>
                    </div>
                    <ul className="divide-y">
                      {subs.map((s) => {
                        const meta = CATEGORIES[s.category];
                        const Icon = meta.icon;
                        const flagged = s.lastUsed === 'never';
                        return (
                          <li key={s.id} className="p-4 flex items-center gap-4">
                            <div className={`h-11 w-11 rounded-xl ${meta.tile} flex items-center justify-center flex-shrink-0`}>
                              <Icon className={`h-5 w-5 ${meta.text}`} aria-hidden="true" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <p className="font-medium text-base truncate">{s.name}</p>
                                {flagged && (
                                  <Badge variant="destructive" className="text-xs">Not using</Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {meta.label} · {FREQUENCY_LABEL[s.lastUsed]}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-base">{formatMoney(s.cost)}/mo</p>
                              <p className="text-xs text-muted-foreground">{formatMoney(s.cost * 12)}/yr</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeSub(s.id)}
                              aria-label={`Remove ${s.name}`}
                              className="min-h-11 min-w-11 text-muted-foreground hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" aria-hidden="true" />
                            </Button>
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>

                {/* By category breakdown */}
                <Card>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold mb-4">Where your money goes</h3>
                    <div className="space-y-3">
                      {byCategory.map(({ cat, total }) => {
                        const meta = CATEGORIES[cat];
                        const width = maxCategoryTotal > 0 ? (total / maxCategoryTotal) * 100 : 0;
                        return (
                          <div key={cat}>
                            <div className="flex justify-between items-center mb-1.5">
                              <span className="text-sm font-medium">{meta.label}</span>
                              <span className="text-sm font-semibold">
                                {formatMoney(total)}/mo · {formatMoney(total * 12)}/yr
                              </span>
                            </div>
                            <div className="h-3 bg-muted rounded-full overflow-hidden" aria-hidden="true">
                              <div
                                className={`h-full ${meta.bar} transition-all`}
                                style={{ width: `${width}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Red flags */}
                {redFlags.length > 0 && (
                  <Card className="border-2 border-red-300 dark:border-red-900/60 bg-red-50/50 dark:bg-red-950/20">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3 mb-4">
                        <Flag className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <h3 className="text-lg font-semibold text-red-900 dark:text-red-200">
                            Red flags — consider cancelling
                          </h3>
                          <p className="text-sm text-red-900/80 dark:text-red-200/80">
                            You haven't used these in 3+ months. That's {formatMoney(redFlags.reduce((a, b) => a + b.cost, 0))}/mo
                            going out the door for nothing.
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {redFlags.map((s) => {
                          const known = findKnown(s.name);
                          return (
                            <li key={s.id} className="flex items-center justify-between gap-3 bg-white dark:bg-red-950/30 rounded-lg p-3 border border-red-200 dark:border-red-900/50">
                              <div className="min-w-0">
                                <p className="font-medium">{s.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {formatMoney(s.cost * 12)}/year wasted
                                </p>
                              </div>
                              {known?.cancelUrl ? (
                                <a
                                  href={known.cancelUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-sm font-medium text-red-700 dark:text-red-300 hover:underline min-h-11 px-2"
                                >
                                  Cancel now
                                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                                </a>
                              ) : (
                                <span className="text-xs text-muted-foreground max-w-[180px] text-right">
                                  {known?.cancelNote ?? 'Check their website to cancel.'}
                                </span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Streaming overlap */}
                {streamingOverlap.length >= 3 && (
                  <Card className="border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-950/20">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-200 mb-1">
                            Streaming overlap alert
                          </h3>
                          <p className="text-sm text-amber-900/90 dark:text-amber-100/90">
                            You have {streamingOverlap.length} video streaming services: {streamingOverlap.join(', ')}.
                            Consider <strong>rotating</strong> — keep one for a month, cancel, then switch to another. You'd still see everything, at a fraction of the cost.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Rotate strategy */}
                <Card>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Repeat className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">The rotation strategy</h3>
                        <p className="text-base text-muted-foreground mb-3">
                          Instead of paying for 5 streaming services at once, binge one for a month, cancel it, then sign up for another. Most services let you resume your watchlist later.
                        </p>
                        <ol className="text-sm text-muted-foreground space-y-1.5 list-decimal list-inside">
                          <li>Pick one service and watch everything you wanted to see.</li>
                          <li>Cancel before the next billing cycle.</li>
                          <li>Sign up for a different one next month.</li>
                          <li>Set a calendar reminder the day before each bill hits.</li>
                        </ol>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Free alternatives */}
                <Card>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <Library className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="text-lg font-semibold">Free alternatives worth knowing</h3>
                        <p className="text-sm text-muted-foreground">
                          Many paid services have strong free equivalents.
                        </p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3 mt-4">
                      <div className="rounded-lg border p-3">
                        <p className="text-sm font-medium">Kindle Unlimited</p>
                        <p className="text-sm text-muted-foreground">→ Libby (from your public library). Totally free.</p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <p className="text-sm font-medium">Netflix / Hulu</p>
                        <p className="text-sm text-muted-foreground">→ Pluto TV + Tubi + Freevee. Ad-supported but free.</p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <p className="text-sm font-medium">New York Times</p>
                        <p className="text-sm text-muted-foreground">→ Your public library (NYT digital often free with a card).</p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <p className="text-sm font-medium">Audible</p>
                        <p className="text-sm text-muted-foreground">→ Libby audiobooks, LibriVox, Hoopla.</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                      <Link to="/tools/free-resource-hub">
                        <Button variant="outline" size="sm" className="min-h-11">
                          Free Resource Hub
                        </Button>
                      </Link>
                      <Link to="/tools/library-tech-helper">
                        <Button variant="outline" size="sm" className="min-h-11">
                          Library Tech Helper
                        </Button>
                      </Link>
                      <Link to="/tools/streaming-service-picker">
                        <Button variant="outline" size="sm" className="min-h-11">
                          Streaming Service Picker
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Cancel it now — direct links */}
                <Card>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-4">
                      <ExternalLink className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="text-lg font-semibold">Cancel it now</h3>
                        <p className="text-sm text-muted-foreground">
                          Direct links to cancellation pages for the services on your list.
                        </p>
                      </div>
                    </div>
                    <ul className="divide-y">
                      {cancelInfo.map(({ sub, cancelUrl, cancelNote }) => (
                        <li key={sub.id} className="py-3 flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <p className="font-medium">{sub.name}</p>
                            {cancelNote && (
                              <p className="text-sm text-muted-foreground">{cancelNote}</p>
                            )}
                          </div>
                          {cancelUrl ? (
                            <a
                              href={cancelUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline min-h-11 px-2 flex-shrink-0"
                            >
                              Cancel page
                              <ExternalLink className="h-4 w-4" aria-hidden="true" />
                            </a>
                          ) : !cancelNote ? (
                            <span className="text-xs text-muted-foreground flex-shrink-0">
                              Check their website
                            </span>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t text-sm text-muted-foreground space-y-1">
                      <p className="font-medium text-foreground mb-1">Catch-all cancellation spots:</p>
                      <p>Apple (iPhone): Settings → Apple ID → Subscriptions</p>
                      <p>Google Play: <a className="text-blue-600 hover:underline" href="https://play.google.com/store/account/subscriptions" target="_blank" rel="noopener noreferrer">play.google.com/store/account/subscriptions</a></p>
                      <p>Amazon: <a className="text-blue-600 hover:underline" href="https://www.amazon.com/yourmemberships" target="_blank" rel="noopener noreferrer">amazon.com/yourmemberships</a></p>
                    </div>
                  </CardContent>
                </Card>

                {/* Recurring charge scam warnings */}
                <Card className="border-amber-200 dark:border-amber-900/50">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <ShieldAlert className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="text-lg font-semibold">Watch for recurring-charge scams</h3>
                      </div>
                    </div>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <p className="font-medium">The "dormant subscription" trick</p>
                        <p className="text-muted-foreground">
                          Services you signed up for years ago quietly keep charging. Run a keyword search on your bank statement for "monthly" and "renewal".
                        </p>
                      </li>
                      <li>
                        <p className="font-medium">Free trial auto-renew</p>
                        <p className="text-muted-foreground">
                          Most "free 7-day trials" require a credit card and auto-enroll you. Set a calendar alert for day 5.
                        </p>
                      </li>
                      <li>
                        <p className="font-medium">Unrecognized charges</p>
                        <p className="text-muted-foreground">
                          Scammers often use vague names like "ONLINE SRV" or "MONTHLY CHG". Anything you don't recognize, dispute it immediately.
                        </p>
                      </li>
                    </ul>
                    <Link to="/tools/refund-and-return-helper">
                      <Button variant="outline" size="sm" className="mt-4 min-h-11">
                        Refund & Return Helper
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Family conversation */}
                <Card>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <Users className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="text-lg font-semibold">Family account & sharing</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Sharing one account across a household can save hundreds a year — but the rules matter.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>
                        <strong className="text-foreground">Family plans are fair game.</strong> Apple One Family, Spotify Duo/Family, YouTube Premium Family, Amazon Household — these exist for this exact purpose.
                      </li>
                      <li>
                        <strong className="text-foreground">Password-sharing got stricter.</strong> Netflix and Disney+ now charge "extra member" fees for people outside your household. Read the current terms before relying on a shared account.
                      </li>
                      <li>
                        <strong className="text-foreground">Have the talk.</strong> If you're covering a relative's subscription, set a yearly check-in: still using it? Who pays? When does the card expire?
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* FAQ */}
                <Card>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold mb-4">Common questions</h3>
                    <div className="space-y-5">
                      <div>
                        <p className="font-medium mb-1">How do I find all my subscriptions?</p>
                        <p className="text-sm text-muted-foreground">
                          The most reliable method: pull the last 3 months of your bank and credit card statements. Search for "monthly," "auto pay," "renewal," and ".com". Write down anything that repeats.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Am I missing some?</p>
                        <p className="text-sm text-muted-foreground">
                          Probably yes. Commonly forgotten: church tithing auto-debit, charity monthly gifts, gym annual fees (billed once a year), cell-phone insurance, in-app subscriptions on the App Store, warranty renewals, cloud backup for an old phone.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">What's a good target?</p>
                        <p className="text-sm text-muted-foreground">
                          There's no one right answer, but most financial advisors suggest keeping non-essential subscriptions under 2–3% of take-home pay. If your total is a big surprise, that's the signal to prune.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Auto-renew keeps catching me off guard — what do I do?</p>
                        <p className="text-sm text-muted-foreground">
                          Put each renewal date in your phone calendar with a 3-day warning. For free trials, cancel the moment you sign up — you keep access through the end of the trial, but the auto-renew is disabled.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right column — sticky summary */}
              <aside className="lg:sticky lg:top-6 space-y-4">
                {/* Big totals */}
                <Card className="border-2 border-amber-300 dark:border-amber-800 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30">
                  <CardContent className="p-6">
                    <p className="text-sm font-medium text-amber-900/70 dark:text-amber-200/70 uppercase tracking-wide">
                      Total per month
                    </p>
                    <p className="text-5xl font-bold tracking-tight text-amber-900 dark:text-amber-100 my-1">
                      {formatMoney(monthlyTotal)}
                    </p>
                    <div className="border-t border-amber-300/50 dark:border-amber-800/50 my-4" />
                    <p className="text-sm font-medium text-amber-900/70 dark:text-amber-200/70 uppercase tracking-wide">
                      Total per year
                    </p>
                    <p className="text-4xl font-bold tracking-tight text-amber-900 dark:text-amber-100 my-1">
                      {formatMoney(annualTotal)}
                    </p>
                    <div className="border-t border-amber-300/50 dark:border-amber-800/50 my-4" />
                    <div className="flex items-start gap-2">
                      <Plane className="h-4 w-4 mt-1 flex-shrink-0 text-amber-700 dark:text-amber-300" aria-hidden="true" />
                      <p className="text-sm text-amber-900/90 dark:text-amber-100/90">
                        <strong>Hidden cost:</strong> {formatMoney(annualTotal)}/yr could fund{' '}
                        {annualTotal >= 1500
                          ? 'a week-long vacation'
                          : annualTotal >= 600
                            ? 'a weekend getaway'
                            : annualTotal >= 300
                              ? 'a nice dinner out every month'
                              : 'a fresh streaming library from the public library'}.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Cost per use (average across active subs) */}
                {subs.some((s) => s.lastUsed !== 'never') && (
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-2 mb-2">
                        <Coffee className="h-4 w-4 mt-0.5 text-amber-600" aria-hidden="true" />
                        <h4 className="font-semibold text-sm">Cost perspective</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        At <strong className="text-foreground">{formatMoney(annualTotal)}</strong>/year,
                        that's about <strong className="text-foreground">{Math.round(annualTotal / 5)}</strong> cups
                        of coffee or <strong className="text-foreground">{Math.round(annualTotal / 15)}</strong> lunches.
                      </p>
                    </CardContent>
                  </Card>
                )}

                <Card className="border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/10">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-2">
                      <TrendingDown className="h-4 w-4 mt-0.5 text-emerald-600" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-semibold mb-1">Quick Tip</p>
                        <p className="text-sm text-muted-foreground">
                          If you cancel {redFlags.length > 0 ? 'the red-flagged subscriptions' : 'one $15/mo service'},
                          you'd save {redFlags.length > 0
                            ? formatMoney(redFlags.reduce((a, b) => a + b.cost, 0) * 12)
                            : '$180'} this year.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </aside>
            </div>
          )}
        </div>
      </main>

      {/* Print styles */}
      <style>{`
        @media print {
          nav, footer, button, aside { display: none !important; }
          main { background: white !important; }
        }
      `}</style>

      <Footer />
    </>
  );
}
