import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Search,
  Tv,
  CloudUpload,
  AppWindow,
  Gamepad2,
  Utensils,
  Dumbbell,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Receipt,
  Apple,
  Smartphone,
  CreditCard,
  Mail,
  Lightbulb,
  ExternalLink,
  RotateCcw,
  type LucideIcon,
} from 'lucide-react';

type SubItem = {
  id: string;
  name: string;
  defaultCost: number;
  cancelUrl?: string;
};

type SubCategory = {
  id: string;
  title: string;
  icon: LucideIcon;
  accentBg: string;
  accentText: string;
  items: SubItem[];
};

const categories: SubCategory[] = [
  {
    id: 'streaming',
    title: 'Streaming & Music',
    icon: Tv,
    accentBg: 'bg-sky-50 dark:bg-sky-950/30',
    accentText: 'text-sky-600',
    items: [
      { id: 'netflix', name: 'Netflix', defaultCost: 16, cancelUrl: 'https://www.netflix.com/cancelplan' },
      { id: 'hulu', name: 'Hulu', defaultCost: 10, cancelUrl: 'https://help.hulu.com/article/hulu-cancel-subscription' },
      { id: 'max', name: 'Max (HBO)', defaultCost: 10, cancelUrl: 'https://help.max.com/us/Answer/Detail/000001256' },
      { id: 'disneyplus', name: 'Disney+', defaultCost: 10, cancelUrl: 'https://help.disneyplus.com/article/disneyplus-cancel-subscription' },
      { id: 'appletv', name: 'Apple TV+', defaultCost: 10, cancelUrl: 'https://support.apple.com/en-us/HT202039' },
      { id: 'paramount', name: 'Paramount+', defaultCost: 8, cancelUrl: 'https://help.paramountplus.com/s/article/PD-How-do-I-cancel-my-Paramount-subscription' },
      { id: 'peacock', name: 'Peacock', defaultCost: 8, cancelUrl: 'https://www.peacocktv.com/help/account/cancel-my-subscription' },
      { id: 'prime', name: 'Amazon Prime', defaultCost: 15, cancelUrl: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=201118010' },
      { id: 'spotify', name: 'Spotify', defaultCost: 12, cancelUrl: 'https://www.spotify.com/account/subscription/' },
      { id: 'applemusic', name: 'Apple Music', defaultCost: 11, cancelUrl: 'https://support.apple.com/en-us/HT202039' },
      { id: 'youtubepremium', name: 'YouTube Premium', defaultCost: 14, cancelUrl: 'https://support.google.com/youtube/answer/6308278' },
      { id: 'audible', name: 'Audible', defaultCost: 15, cancelUrl: 'https://www.audible.com/ep/membership' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Storage',
    icon: CloudUpload,
    accentBg: 'bg-violet-50 dark:bg-violet-950/30',
    accentText: 'text-violet-600',
    items: [
      { id: 'icloud', name: 'iCloud+', defaultCost: 3, cancelUrl: 'https://support.apple.com/en-us/HT202039' },
      { id: 'googleone', name: 'Google One', defaultCost: 2, cancelUrl: 'https://support.google.com/googleone/answer/7671349' },
      { id: 'dropbox', name: 'Dropbox', defaultCost: 12, cancelUrl: 'https://help.dropbox.com/accounts-billing/cancel/cancel-subscription' },
      { id: 'onedrive', name: 'OneDrive', defaultCost: 7, cancelUrl: 'https://support.microsoft.com/en-us/account-billing/cancel-a-microsoft-subscription-c2c6c012-c58c-b6f3-3e32-349c4e2dcde3' },
    ],
  },
  {
    id: 'software',
    title: 'Software',
    icon: AppWindow,
    accentBg: 'bg-emerald-50 dark:bg-emerald-950/30',
    accentText: 'text-emerald-600',
    items: [
      { id: 'ms365', name: 'Microsoft 365', defaultCost: 10, cancelUrl: 'https://support.microsoft.com/en-us/account-billing/cancel-a-microsoft-subscription-c2c6c012-c58c-b6f3-3e32-349c4e2dcde3' },
      { id: 'adobe', name: 'Adobe Creative Cloud', defaultCost: 55, cancelUrl: 'https://helpx.adobe.com/manage-account/using/cancel-subscription.html' },
      { id: 'grammarly', name: 'Grammarly', defaultCost: 12, cancelUrl: 'https://support.grammarly.com/hc/en-us/articles/115000091012' },
      { id: '1password', name: '1Password', defaultCost: 3, cancelUrl: 'https://support.1password.com/cancel-subscription/' },
    ],
  },
  {
    id: 'gaming',
    title: 'Gaming',
    icon: Gamepad2,
    accentBg: 'bg-rose-50 dark:bg-rose-950/30',
    accentText: 'text-rose-600',
    items: [
      { id: 'xbox', name: 'Xbox Game Pass / Live', defaultCost: 10, cancelUrl: 'https://support.xbox.com/en-US/help/subscriptions-billing/manage-subscriptions/cancel-your-subscription' },
      { id: 'psplus', name: 'PlayStation Plus', defaultCost: 10, cancelUrl: 'https://www.playstation.com/en-us/support/account/cancel-playstation-subscription/' },
      { id: 'applearcade', name: 'Apple Arcade', defaultCost: 7, cancelUrl: 'https://support.apple.com/en-us/HT202039' },
      { id: 'nintendo', name: 'Nintendo Switch Online', defaultCost: 4, cancelUrl: 'https://en-americas-support.nintendo.com/app/answers/detail/a_id/42099' },
    ],
  },
  {
    id: 'food',
    title: 'Food & Grocery',
    icon: Utensils,
    accentBg: 'bg-amber-50 dark:bg-amber-950/30',
    accentText: 'text-amber-700',
    items: [
      { id: 'hellofresh', name: 'HelloFresh', defaultCost: 80 },
      { id: 'blueapron', name: 'Blue Apron', defaultCost: 70 },
      { id: 'mealdelivery', name: 'Other meal delivery', defaultCost: 60 },
    ],
  },
  {
    id: 'fitness',
    title: 'Fitness',
    icon: Dumbbell,
    accentBg: 'bg-lime-50 dark:bg-lime-950/30',
    accentText: 'text-lime-700',
    items: [
      { id: 'peloton', name: 'Peloton App', defaultCost: 13 },
      { id: 'applefitness', name: 'Apple Fitness+', defaultCost: 10, cancelUrl: 'https://support.apple.com/en-us/HT202039' },
      { id: 'classpass', name: 'ClassPass', defaultCost: 50 },
      { id: 'gym', name: 'Gym (auto-renew)', defaultCost: 40 },
    ],
  },
  {
    id: 'other',
    title: 'Other Recurring',
    icon: ShieldCheck,
    accentBg: 'bg-slate-50 dark:bg-slate-900/40',
    accentText: 'text-slate-600',
    items: [
      { id: 'creditmon', name: 'Credit monitoring', defaultCost: 20 },
      { id: 'antivirus', name: 'Antivirus', defaultCost: 8 },
      { id: 'vpn', name: 'VPN', defaultCost: 10 },
    ],
  },
];

const allItems = categories.flatMap((c) => c.items.map((i) => ({ ...i, category: c.id })));

const detectionTips = [
  {
    icon: Apple,
    title: 'Apple (iPhone / iPad / Mac)',
    body: 'Open Settings, tap your name at the top, then tap Subscriptions.',
    link: { url: 'https://support.apple.com/en-us/HT202039', label: 'Apple support page' },
  },
  {
    icon: Smartphone,
    title: 'Google Play (Android)',
    body: 'Open the Play Store, tap your profile picture, then Payments & subscriptions > Subscriptions.',
    link: { url: 'https://support.google.com/googleplay/answer/7018481', label: 'Google Play support' },
  },
  {
    icon: CreditCard,
    title: 'Credit card statement',
    body: 'Scan last 3 statements for any repeating monthly or annual charge. If you do not recognize it, search the merchant name online before cancelling.',
  },
  {
    icon: Mail,
    title: 'Email search',
    body: 'Search your inbox for the words "renewal", "subscription confirmed", or "auto-renew". Old confirmation emails often surface forgotten services.',
  },
];

export default function SubscriptionAuditor() {
  const [step, setStep] = useState<1 | 2>(1);
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [costs, setCosts] = useState<Record<string, number>>({});

  const toggleItem = (id: string, defaultCost: number) => {
    setSelected((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      if (next[id] && costs[id] === undefined) {
        setCosts((p) => ({ ...p, [id]: defaultCost }));
      }
      return next;
    });
  };

  const updateCost = (id: string, value: string) => {
    const num = Number(value);
    setCosts((prev) => ({ ...prev, [id]: isNaN(num) ? 0 : num }));
  };

  const monthlyTotal = useMemo(() => {
    return allItems.reduce((sum, item) => {
      if (selected[item.id]) {
        return sum + (costs[item.id] ?? item.defaultCost);
      }
      return sum;
    }, 0);
  }, [selected, costs]);

  const annualTotal = monthlyTotal * 12;
  const selectedCount = Object.values(selected).filter(Boolean).length;
  const selectedItems = allItems.filter((i) => selected[i.id]);

  const reset = () => {
    setSelected({});
    setCosts({});
    setStep(1);
  };

  return (
    <>
      <SEOHead
        title="Subscription Auditor — Find Forgotten Subscriptions | TekSure"
        description="A free two-step tool to find subscriptions you may have forgotten about, add up what you're really paying, and learn how to cancel each service."
        path="/tools/subscription-auditor"
      />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Subscription Auditor' },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="border-b">
          <div className="container py-10 md:py-14 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center flex-shrink-0">
                <Search className="h-6 w-6 text-rose-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Subscription Auditor
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The average household pays for 12 subscriptions — and forgets about 3 of them. Work through
              the checklist below, add up what you're really spending, and find out how to cancel what you
              don't need.
            </p>
          </div>
        </section>

        {/* Progress indicator */}
        <section className="container pt-6 max-w-3xl">
          <div className="flex items-center gap-3 text-sm">
            <Badge variant={step === 1 ? 'default' : 'secondary'}>Step 1 — Check subscriptions</Badge>
            <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <Badge variant={step === 2 ? 'default' : 'secondary'}>Step 2 — See totals</Badge>
          </div>
        </section>

        {step === 1 && (
          <div className="container py-8 max-w-3xl space-y-6 pb-24">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Card key={cat.id}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-xl ${cat.accentBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`h-5 w-5 ${cat.accentText}`} aria-hidden="true" />
                      </div>
                      {cat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {cat.items.map((item) => {
                      const isChecked = !!selected[item.id];
                      return (
                        <div
                          key={item.id}
                          className={`flex items-center gap-3 p-3 rounded-xl border transition ${
                            isChecked ? 'bg-muted/40 border-primary/30' : 'bg-background'
                          }`}
                        >
                          <Checkbox
                            id={item.id}
                            checked={isChecked}
                            onCheckedChange={() => toggleItem(item.id, item.defaultCost)}
                            aria-label={`Do you pay for ${item.name}?`}
                          />
                          <label htmlFor={item.id} className="flex-1 font-medium cursor-pointer">
                            {item.name}
                          </label>
                          {isChecked && (
                            <div className="flex items-center gap-1">
                              <span className="text-muted-foreground text-sm">$</span>
                              <Input
                                type="number"
                                inputMode="decimal"
                                min={0}
                                value={costs[item.id] ?? item.defaultCost}
                                onChange={(e) => updateCost(item.id, e.target.value)}
                                className="w-20 h-9"
                                aria-label={`${item.name} monthly cost`}
                              />
                              <span className="text-muted-foreground text-sm">/mo</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              );
            })}

            <div className="sticky bottom-4 pt-2">
              <Card className="border-2 shadow-lg">
                <CardContent className="pt-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Checked so far</p>
                    <p className="text-xl font-bold">
                      {selectedCount} subscription{selectedCount === 1 ? '' : 's'} · ${monthlyTotal}/mo
                    </p>
                  </div>
                  <Button size="lg" onClick={() => setStep(2)} disabled={selectedCount === 0}>
                    See My Results
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="container py-8 max-w-3xl space-y-8 pb-24">
            {/* Totals */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Monthly Total</p>
                  <p className="text-3xl font-bold text-rose-600">${monthlyTotal}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Annual Total</p>
                  <p className="text-3xl font-bold text-rose-600">${annualTotal.toLocaleString()}</p>
                </CardContent>
              </Card>
            </div>

            {/* Detection tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Search className="h-5 w-5" aria-hidden="true" />
                  Find Subscriptions You Forgot About
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {detectionTips.map((tip) => {
                  const Icon = tip.icon;
                  return (
                    <div key={tip.title} className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">{tip.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{tip.body}</p>
                        {tip.link && (
                          <a
                            href={tip.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-1"
                          >
                            {tip.link.label}
                            <ExternalLink className="h-3 w-3" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* How to cancel per selected service */}
            {selectedItems.filter((i) => i.cancelUrl).length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How to Cancel What You Checked</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {selectedItems
                    .filter((i) => i.cancelUrl)
                    .map((i) => (
                      <a
                        key={i.id}
                        href={i.cancelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-3 p-3 rounded-xl border bg-card transition hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <div>
                          <p className="font-semibold">{i.name}</p>
                          <p className="text-xs text-muted-foreground">Official cancellation page</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
                      </a>
                    ))}
                </CardContent>
              </Card>
            )}

            {/* Save Your Receipts callout */}
            <Card className="border-2 border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/20">
              <CardContent className="pt-6 flex gap-4 items-start">
                <div className="h-12 w-12 rounded-xl bg-amber-100 dark:bg-amber-950/50 flex items-center justify-center flex-shrink-0">
                  <Receipt className="h-6 w-6 text-amber-700" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">Save Your Cancellation Receipts</p>
                  <p className="text-sm leading-relaxed">
                    After you cancel, take a screenshot of the confirmation or save the email. Some services
                    "accidentally" keep charging — a receipt lets you dispute the charge with your bank.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tips and next steps */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" aria-hidden="true" />
                  Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/tools/tech-budget-planner">
                    Plan your full tech budget
                    <ArrowRight className="ml-auto h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/tools/streaming-calculator">
                    Compare streaming services
                    <ArrowRight className="ml-auto h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/free-resources">
                    See free alternatives
                    <ArrowRight className="ml-auto h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Controls */}
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(1)}>
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Edit My List
              </Button>
              <Button variant="ghost" onClick={reset}>
                <RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" />
                Start Over
              </Button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
