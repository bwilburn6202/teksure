import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DollarSign, RotateCcw } from 'lucide-react';

interface Item {
  id: string;
  label: string;
  category: string;
  oneTime: number;
  monthly: number;
  note?: string;
}

const ALL_ITEMS: Item[] = [
  // Internet
  { id: 'internet-basic', label: 'Basic internet (100 Mbps)', category: 'Internet', oneTime: 0, monthly: 50, note: 'Enough for 1–2 people' },
  { id: 'internet-fast', label: 'Fast internet (300–500 Mbps)', category: 'Internet', oneTime: 0, monthly: 70, note: 'Better for working from home' },
  { id: 'own-router', label: 'Your own router (avoid rental fee)', category: 'Internet', oneTime: 65, monthly: -12, note: 'Saves ~$12/mo after ~5 months' },
  // Streaming
  { id: 'antenna', label: 'TV antenna (local channels, free)', category: 'Streaming & TV', oneTime: 30, monthly: 0 },
  { id: 'netflix', label: 'Netflix Standard', category: 'Streaming & TV', oneTime: 0, monthly: 15 },
  { id: 'hulu', label: 'Hulu (with ads)', category: 'Streaming & TV', oneTime: 0, monthly: 8 },
  { id: 'youtube-tv', label: 'YouTube TV (live TV)', category: 'Streaming & TV', oneTime: 0, monthly: 73 },
  { id: 'streaming-stick', label: 'Fire TV Stick or Roku (one-time)', category: 'Streaming & TV', oneTime: 35, monthly: 0 },
  // Smart Home
  { id: 'smart-thermostat', label: 'Smart thermostat (Ecobee or Nest)', category: 'Smart Home', oneTime: 140, monthly: 0, note: 'Saves est. $10–20/mo on energy' },
  { id: 'smart-plug', label: 'Smart plug ×2', category: 'Smart Home', oneTime: 25, monthly: 0 },
  { id: 'smart-bulbs', label: 'Smart bulbs (starter pack)', category: 'Smart Home', oneTime: 45, monthly: 0 },
  { id: 'smart-speaker', label: 'Smart speaker (Echo or Google Nest)', category: 'Smart Home', oneTime: 50, monthly: 0 },
  // Security
  { id: 'video-doorbell', label: 'Video doorbell (Ring basic)', category: 'Security', oneTime: 70, monthly: 0 },
  { id: 'ring-plan', label: 'Ring Protect plan (video storage)', category: 'Security', oneTime: 0, monthly: 4 },
  { id: 'security-camera', label: 'Indoor camera ×1 (Wyze)', category: 'Security', oneTime: 35, monthly: 0 },
  // Devices
  { id: 'tablet', label: 'Tablet (refurbished iPad or Fire)', category: 'Devices', oneTime: 250, monthly: 0 },
  { id: 'laptop', label: 'Laptop (refurbished, mid-range)', category: 'Devices', oneTime: 500, monthly: 0 },
  { id: 'printer', label: 'Printer (inkjet, with ink subscription)', category: 'Devices', oneTime: 80, monthly: 5, note: 'HP Instant Ink ~$5/mo' },
  // Subscriptions
  { id: 'password-manager', label: 'Password manager (1Password family)', category: 'Subscriptions', oneTime: 0, monthly: 5 },
  { id: 'cloud-storage', label: 'iCloud+ or Google One (200 GB)', category: 'Subscriptions', oneTime: 0, monthly: 3 },
  { id: 'antivirus', label: 'Antivirus / security suite', category: 'Subscriptions', oneTime: 0, monthly: 4 },
  { id: 'music', label: 'Music streaming (Spotify or Apple Music)', category: 'Subscriptions', oneTime: 0, monthly: 11 },
];

const CATEGORIES = [...new Set(ALL_ITEMS.map((i) => i.category))];

export default function TechSetupCostEstimator() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectedItems = ALL_ITEMS.filter((i) => selected.has(i.id));
  const totalOneTime = selectedItems.reduce((sum, i) => sum + i.oneTime, 0);
  const totalMonthly = selectedItems.reduce((sum, i) => sum + i.monthly, 0);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Tech Setup Cost Estimator | TekSure"
        description="Add up the real cost of setting up your home tech. Pick the devices and services you want and see an honest monthly and one-time cost estimate."
      />
      <main className="flex-1">
        <PageBreadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'Tech Setup Cost Estimator' }]} />

        <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <DollarSign className="h-4 w-4" />
              Honest cost estimates
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              What Will Your Tech Setup Actually Cost?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Check the items you want. See a running total of one-time and monthly costs — no
              surprises, no upsells.
            </p>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Item list */}
              <div className="lg:col-span-2 space-y-8">
                {CATEGORIES.map((cat) => (
                  <div key={cat}>
                    <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Badge variant="outline">{cat}</Badge>
                    </h2>
                    <div className="space-y-2">
                      {ALL_ITEMS.filter((i) => i.category === cat).map((item) => (
                        <label
                          key={item.id}
                          className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                            selected.has(item.id) ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'
                          }`}
                        >
                          <Checkbox
                            checked={selected.has(item.id)}
                            onCheckedChange={() => toggle(item.id)}
                            className="mt-0.5"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm">{item.label}</div>
                            {item.note && (
                              <div className="text-xs text-muted-foreground mt-0.5">{item.note}</div>
                            )}
                          </div>
                          <div className="text-right text-sm shrink-0">
                            {item.oneTime > 0 && (
                              <div className="font-medium">${item.oneTime} once</div>
                            )}
                            {item.monthly !== 0 && (
                              <div className={item.monthly < 0 ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground'}>
                                {item.monthly < 0 ? `-$${Math.abs(item.monthly)}/mo` : `$${item.monthly}/mo`}
                              </div>
                            )}
                            {item.oneTime === 0 && item.monthly === 0 && (
                              <div className="text-muted-foreground">Free</div>
                            )}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sticky summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-6 space-y-4">
                  <Card className="border-2 border-primary/30">
                    <CardContent className="p-6">
                      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        Your Estimate
                      </h2>

                      {selected.size === 0 ? (
                        <p className="text-sm text-muted-foreground">
                          Check items on the left to see your total.
                        </p>
                      ) : (
                        <>
                          <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-sm">
                              <span>One-time costs</span>
                              <span className="font-semibold">${totalOneTime}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Monthly ongoing</span>
                              <span className="font-semibold">${Math.max(0, totalMonthly)}/mo</span>
                            </div>
                            <div className="border-t pt-2 flex justify-between">
                              <span className="font-bold">First year total</span>
                              <span className="font-bold text-primary">
                                ${totalOneTime + Math.max(0, totalMonthly) * 12}
                              </span>
                            </div>
                          </div>

                          {selectedItems.length > 0 && (
                            <div className="text-xs text-muted-foreground space-y-1">
                              {selectedItems.map((i) => (
                                <div key={i.id} className="flex justify-between">
                                  <span className="truncate mr-2">{i.label}</span>
                                  <span className="shrink-0">
                                    {i.oneTime > 0 && `$${i.oneTime}`}
                                    {i.oneTime > 0 && i.monthly > 0 && ' + '}
                                    {i.monthly > 0 && `$${i.monthly}/mo`}
                                    {i.monthly < 0 && `-$${Math.abs(i.monthly)}/mo`}
                                    {i.oneTime === 0 && i.monthly === 0 && 'Free'}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      )}

                      {selected.size > 0 && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-4 w-full gap-2"
                          onClick={() => setSelected(new Set())}
                        >
                          <RotateCcw className="h-4 w-4" />
                          Start over
                        </Button>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground mb-1">Prices are estimates</p>
                      <p>Actual prices vary by region, provider, and when you buy. Check retailer websites for current pricing before purchasing.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
