import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Plus, Trash2, PieChart, Lightbulb, Printer, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

type BillingCycle = 'monthly' | 'annual';
type Category = 'Streaming' | 'Music' | 'News' | 'Cloud Storage' | 'Software' | 'Fitness' | 'Other';

interface Subscription {
  id: string;
  name: string;
  price: number;
  cycle: BillingCycle;
  category: Category;
}

const categories: Category[] = ['Streaming', 'Music', 'News', 'Cloud Storage', 'Software', 'Fitness', 'Other'];

const categoryColors: Record<Category, string> = {
  Streaming: 'bg-violet-500',
  Music: 'bg-pink-500',
  News: 'bg-blue-500',
  'Cloud Storage': 'bg-cyan-500',
  Software: 'bg-amber-500',
  Fitness: 'bg-green-500',
  Other: 'bg-gray-400',
};

const commonServices: { name: string; price: number; cycle: BillingCycle; category: Category }[] = [
  { name: 'Netflix (Standard)', price: 15.49, cycle: 'monthly', category: 'Streaming' },
  { name: 'Hulu (No Ads)', price: 17.99, cycle: 'monthly', category: 'Streaming' },
  { name: 'Disney+', price: 13.99, cycle: 'monthly', category: 'Streaming' },
  { name: 'Max (HBO)', price: 16.99, cycle: 'monthly', category: 'Streaming' },
  { name: 'Peacock Premium', price: 7.99, cycle: 'monthly', category: 'Streaming' },
  { name: 'Paramount+', price: 12.99, cycle: 'monthly', category: 'Streaming' },
  { name: 'Apple TV+', price: 9.99, cycle: 'monthly', category: 'Streaming' },
  { name: 'Amazon Prime', price: 14.99, cycle: 'monthly', category: 'Streaming' },
  { name: 'Spotify Premium', price: 11.99, cycle: 'monthly', category: 'Music' },
  { name: 'Apple Music', price: 10.99, cycle: 'monthly', category: 'Music' },
  { name: 'YouTube Premium', price: 13.99, cycle: 'monthly', category: 'Music' },
  { name: 'New York Times', price: 4.25, cycle: 'monthly', category: 'News' },
  { name: 'Washington Post', price: 4.00, cycle: 'monthly', category: 'News' },
  { name: 'Wall Street Journal', price: 12.99, cycle: 'monthly', category: 'News' },
  { name: 'iCloud+ (50 GB)', price: 0.99, cycle: 'monthly', category: 'Cloud Storage' },
  { name: 'iCloud+ (200 GB)', price: 2.99, cycle: 'monthly', category: 'Cloud Storage' },
  { name: 'Google One (100 GB)', price: 1.99, cycle: 'monthly', category: 'Cloud Storage' },
  { name: 'Dropbox Plus', price: 11.99, cycle: 'monthly', category: 'Cloud Storage' },
  { name: 'Microsoft 365 Personal', price: 6.99, cycle: 'monthly', category: 'Software' },
  { name: 'Adobe Creative Cloud', price: 59.99, cycle: 'monthly', category: 'Software' },
  { name: 'Planet Fitness', price: 15.00, cycle: 'monthly', category: 'Fitness' },
  { name: 'Peloton App', price: 12.99, cycle: 'monthly', category: 'Fitness' },
];

const forgottenSubs = [
  'Free trial you signed up for and forgot to cancel',
  'App subscriptions through Apple or Google Play',
  'Antivirus software (Norton, McAfee)',
  'Cloud backup (Carbonite, Backblaze)',
  'Meal kit delivery (HelloFresh, Blue Apron)',
  'Dating apps (Match, Bumble premium)',
  'Password manager (LastPass, 1Password)',
  'VPN service (NordVPN, ExpressVPN)',
];

const savingTips = [
  'Check your bank and credit card statements for recurring charges you do not recognize.',
  'Many streaming services offer cheaper ad-supported plans that save $5-10 per month.',
  'Family or group plans can save you 30-50% compared to individual plans.',
  'Consider rotating streaming services instead of keeping them all at once.',
  'Call your service provider and ask about any current promotions or loyalty discounts.',
  'Student, senior, and military discounts are available at most major services.',
];

export default function SubscriptionTracker() {
  const [subs, setSubs] = useState<Subscription[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [cycle, setCycle] = useState<BillingCycle>('monthly');
  const [category, setCategory] = useState<Category>('Streaming');
  const [showCommon, setShowCommon] = useState(false);
  const [checkedForgotten, setCheckedForgotten] = useState<Set<number>>(new Set());
  const [showTips, setShowTips] = useState(false);

  const addSub = () => {
    if (!name.trim() || !price) return;
    setSubs(prev => [...prev, { id: crypto.randomUUID(), name: name.trim(), price: parseFloat(price), cycle, category }]);
    setName('');
    setPrice('');
  };

  const addCommon = (s: typeof commonServices[0]) => {
    setSubs(prev => [...prev, { id: crypto.randomUUID(), ...s }]);
  };

  const removeSub = (id: string) => setSubs(prev => prev.filter(s => s.id !== id));

  const monthlyTotal = useMemo(() =>
    subs.reduce((sum, s) => sum + (s.cycle === 'monthly' ? s.price : s.price / 12), 0), [subs]);

  const annualTotal = monthlyTotal * 12;

  const spendByCategory = useMemo(() => {
    const map: Partial<Record<Category, number>> = {};
    subs.forEach(s => {
      const monthly = s.cycle === 'monthly' ? s.price : s.price / 12;
      map[s.category] = (map[s.category] || 0) + monthly;
    });
    return map;
  }, [subs]);

  const maxSpend = Math.max(...Object.values(spendByCategory), 1);

  const handlePrint = () => window.print();

  return (
    <>
      <SEOHead
        title="Subscription Tracker — Manage Your Monthly Subscriptions | TekSure"
        description="Track all your subscriptions in one place. See your total monthly and annual spending, find subscriptions you forgot about, and get tips to save money."
        path="/tools/subscription-tracker"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Subscription Tracker' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center flex-shrink-0">
                <DollarSign className="h-6 w-6 text-emerald-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Subscription Tracker</h1>
            <p className="text-muted-foreground text-lg">
              Add your subscriptions below to see exactly how much you spend each month — and find ways to save.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl space-y-8">
          {/* Add subscription form */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Add a Subscription</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Input placeholder="Service name" value={name} onChange={e => setName(e.target.value)} aria-label="Service name" />
                <Input type="number" step="0.01" min="0" placeholder="Price (e.g. 15.99)" value={price} onChange={e => setPrice(e.target.value)} aria-label="Price" />
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <select value={cycle} onChange={e => setCycle(e.target.value as BillingCycle)} className="border rounded-md px-3 py-2 text-sm bg-background" aria-label="Billing cycle">
                  <option value="monthly">Monthly</option>
                  <option value="annual">Annual</option>
                </select>
                <select value={category} onChange={e => setCategory(e.target.value as Category)} className="border rounded-md px-3 py-2 text-sm bg-background" aria-label="Category">
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <Button onClick={addSub} disabled={!name.trim() || !price}><Plus className="h-4 w-4 mr-1" aria-hidden="true" /> Add</Button>
              </div>
              <div>
                <button onClick={() => setShowCommon(!showCommon)} className="text-sm text-primary hover:underline flex items-center gap-1">
                  {showCommon ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />} Quick-add common services
                </button>
                {showCommon && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {commonServices.map(s => (
                      <button key={s.name} onClick={() => addCommon(s)} className="text-xs border rounded-full px-3 py-1.5 hover:bg-muted transition-colors">
                        {s.name} — ${s.price}/mo
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Totals */}
          {subs.length > 0 && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Monthly Total</p>
                    <p className="text-3xl font-bold text-emerald-600">${monthlyTotal.toFixed(2)}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Annual Total</p>
                    <p className="text-3xl font-bold text-emerald-600">${annualTotal.toFixed(2)}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Spending bars */}
              <Card>
                <CardHeader><CardTitle className="text-lg flex items-center gap-2"><PieChart className="h-5 w-5" aria-hidden="true" /> Spending by Category</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  {categories.filter(c => spendByCategory[c]).map(c => (
                    <div key={c}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{c}</span>
                        <span className="font-medium">${(spendByCategory[c] || 0).toFixed(2)}/mo</span>
                      </div>
                      <div className="h-4 bg-muted rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${categoryColors[c]} transition-all`} style={{ width: `${((spendByCategory[c] || 0) / maxSpend) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Subscription list */}
              <Card>
                <CardHeader><CardTitle className="text-lg">Your Subscriptions ({subs.length})</CardTitle></CardHeader>
                <CardContent>
                  <div className="divide-y">
                    {subs.map(s => (
                      <div key={s.id} className="flex items-center justify-between py-3">
                        <div>
                          <p className="font-medium text-sm">{s.name}</p>
                          <p className="text-xs text-muted-foreground">{s.category} &middot; {s.cycle}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-sm">${s.price.toFixed(2)}</span>
                          <button onClick={() => removeSub(s.id)} className="text-muted-foreground hover:text-red-500 transition-colors" aria-label={`Remove ${s.name}`}>
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Button variant="outline" onClick={handlePrint} className="w-full"><Printer className="h-4 w-4 mr-2" aria-hidden="true" /> Print / Export Summary</Button>
            </>
          )}

          {/* Forgotten subscriptions */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Subscriptions You Might Have Forgotten</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {forgottenSubs.map((item, i) => (
                <label key={i} className="flex items-start gap-3 text-sm cursor-pointer py-1">
                  <input type="checkbox" checked={checkedForgotten.has(i)} onChange={() => {
                    setCheckedForgotten(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });
                  }} className="mt-0.5 h-4 w-4 rounded" />
                  <span className={checkedForgotten.has(i) ? 'line-through text-muted-foreground' : ''}>{item}</span>
                </label>
              ))}
              <p className="text-xs text-muted-foreground pt-2">
                <CheckCircle className="h-3 w-3 inline mr-1" />{checkedForgotten.size} of {forgottenSubs.length} checked
              </p>
            </CardContent>
          </Card>

          {/* Tips */}
          <div className="rounded-2xl border p-6">
            <button onClick={() => setShowTips(!showTips)} className="flex items-center gap-3 w-full text-left">
              <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0" aria-hidden="true" />
              <span className="font-semibold text-sm flex-1">Tips for Reducing Subscription Costs</span>
              {showTips ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {showTips && (
              <ul className="mt-4 space-y-2">
                {savingTips.map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950/30 text-amber-700 text-xs flex items-center justify-center font-medium">{i + 1}</span>
                    {tip}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
