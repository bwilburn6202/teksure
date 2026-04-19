import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Badge } from '@/components/ui/badge';
import { Tv, Music, BookOpen, Coffee, AlertTriangle, CheckCircle, Info, TrendingDown } from 'lucide-react';

interface ServiceTier {
  label: string;
  price: number;
  hasAds?: boolean;
}

interface StreamingService {
  id: string;
  name: string;
  emoji: string;
  category: 'video' | 'music' | 'books';
  tiers: ServiceTier[];
  hasFreeTrialNote?: string;
  cheaperAdTier?: boolean;
}

const SERVICES: StreamingService[] = [
  {
    id: 'netflix-ads',
    name: 'Netflix Basic with Ads',
    emoji: '🎬',
    category: 'video',
    tiers: [{ label: 'Basic with Ads', price: 7, hasAds: true }],
    hasFreeTrialNote: 'Netflix occasionally offers free trials for new members.',
  },
  {
    id: 'netflix-standard',
    name: 'Netflix Standard',
    emoji: '🎬',
    category: 'video',
    tiers: [{ label: 'Standard', price: 15 }],
    cheaperAdTier: true,
  },
  {
    id: 'netflix-premium',
    name: 'Netflix Premium',
    emoji: '🎬',
    category: 'video',
    tiers: [{ label: 'Premium', price: 23 }],
    cheaperAdTier: true,
  },
  {
    id: 'disney',
    name: 'Disney+',
    emoji: '🏰',
    category: 'video',
    tiers: [
      { label: 'With Ads', price: 8, hasAds: true },
      { label: 'No Ads', price: 14 },
    ],
    hasFreeTrialNote: 'Disney+ offers free trials for new subscribers.',
    cheaperAdTier: true,
  },
  {
    id: 'hulu',
    name: 'Hulu',
    emoji: '📺',
    category: 'video',
    tiers: [
      { label: 'With Ads', price: 8, hasAds: true },
      { label: 'No Ads', price: 18 },
    ],
    hasFreeTrialNote: 'Hulu offers a 30-day free trial for new members.',
    cheaperAdTier: true,
  },
  {
    id: 'max',
    name: 'Max (HBO Max)',
    emoji: '🎭',
    category: 'video',
    tiers: [
      { label: 'With Ads', price: 10, hasAds: true },
      { label: 'No Ads', price: 16 },
    ],
    hasFreeTrialNote: 'Max sometimes offers free trials through partner providers.',
    cheaperAdTier: true,
  },
  {
    id: 'peacock',
    name: 'Peacock',
    emoji: '🦚',
    category: 'video',
    tiers: [
      { label: 'With Ads', price: 6, hasAds: true },
      { label: 'No Ads', price: 12 },
    ],
    hasFreeTrialNote: 'Peacock has a free tier with limited content and ads.',
    cheaperAdTier: true,
  },
  {
    id: 'paramount',
    name: 'Paramount+',
    emoji: '⛰️',
    category: 'video',
    tiers: [
      { label: 'With Ads', price: 6, hasAds: true },
      { label: 'No Ads', price: 12 },
    ],
    hasFreeTrialNote: 'Paramount+ offers a 7-day free trial for new subscribers.',
    cheaperAdTier: true,
  },
  {
    id: 'appletv',
    name: 'Apple TV+',
    emoji: '🍎',
    category: 'video',
    tiers: [{ label: 'Standard', price: 10 }],
    hasFreeTrialNote: 'Apple TV+ offers a 7-day free trial. New Apple devices may include 3 months free.',
  },
  {
    id: 'prime',
    name: 'Amazon Prime Video',
    emoji: '📦',
    category: 'video',
    tiers: [
      { label: 'Standalone (Video only)', price: 9 },
      { label: 'Full Prime (incl. shipping)', price: 15 },
    ],
  },
  {
    id: 'spotify',
    name: 'Spotify',
    emoji: '🎵',
    category: 'music',
    tiers: [{ label: 'Individual', price: 11 }],
    hasFreeTrialNote: 'Spotify has a free tier with ads and shuffle-only playback.',
  },
  {
    id: 'applemusic',
    name: 'Apple Music',
    emoji: '🎶',
    category: 'music',
    tiers: [{ label: 'Individual', price: 11 }],
    hasFreeTrialNote: 'Apple Music offers a 1-month free trial for new subscribers.',
  },
  {
    id: 'youtube',
    name: 'YouTube Premium',
    emoji: '▶️',
    category: 'video',
    tiers: [{ label: 'Individual', price: 14 }],
    hasFreeTrialNote: 'YouTube is free with ads. Premium removes ads and adds background play.',
    cheaperAdTier: true,
  },
  {
    id: 'audible',
    name: 'Audible',
    emoji: '🎧',
    category: 'books',
    tiers: [{ label: 'Plus (1 credit/mo)', price: 15 }],
    hasFreeTrialNote: 'Audible offers a 30-day free trial for new members.',
  },
  {
    id: 'kindle',
    name: 'Kindle Unlimited',
    emoji: '📚',
    category: 'books',
    tiers: [{ label: 'Unlimited', price: 12 }],
    hasFreeTrialNote: 'Kindle Unlimited offers a 30-day free trial.',
  },
];

const COFFEE_PRICE = 5;

function getCostColor(monthly: number): { bg: string; text: string; label: string } {
  if (monthly < 30) return { bg: 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800', text: 'text-green-700 dark:text-green-400', label: 'Reasonable' };
  if (monthly <= 60) return { bg: 'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-700', text: 'text-yellow-700 dark:text-yellow-400', label: 'Getting pricey' };
  return { bg: 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-700', text: 'text-red-700 dark:text-red-400', label: 'Worth reviewing' };
}

export default function StreamingCalculator() {
  const [selected, setSelected] = useState<Record<string, number>>({});

  const toggle = (id: string) => {
    setSelected(prev => {
      const next = { ...prev };
      if (id in next) {
        delete next[id];
      } else {
        const svc = SERVICES.find(s => s.id === id)!;
        next[id] = svc.tiers[0].price;
      }
      return next;
    });
  };

  const setTier = (id: string, price: number) => {
    setSelected(prev => ({ ...prev, [id]: price }));
  };

  const monthlyTotal = useMemo(
    () => Object.values(selected).reduce((s, p) => s + p, 0),
    [selected]
  );
  const annualTotal = monthlyTotal * 12;
  const coffees = Math.round(annualTotal / COFFEE_PRICE);
  const colorInfo = getCostColor(monthlyTotal);

  const selectedCount = Object.keys(selected).length;

  const servicesWithCheaperTiers = SERVICES.filter(
    s => s.cheaperAdTier && s.id in selected && selected[s.id] > s.tiers[0].price
  );

  const freeTrialServices = SERVICES.filter(s => s.hasFreeTrialNote && !(s.id in selected));

  const videoServices = SERVICES.filter(s => s.category === 'video');
  const musicServices = SERVICES.filter(s => s.category === 'music');
  const bookServices = SERVICES.filter(s => s.category === 'books');

  const renderServiceList = (services: StreamingService[]) =>
    services.map(svc => {
      const isChecked = svc.id in selected;
      const activeTierPrice = selected[svc.id];
      return (
        <div
          key={svc.id}
          className={`rounded-2xl border-2 transition-colors ${
            isChecked ? 'border-primary bg-primary/5' : 'border-border bg-card'
          }`}
        >
          <label className="flex items-start gap-3 p-4 cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => toggle(svc.id)}
              className="mt-1 h-4 w-4 rounded border-border accent-primary flex-shrink-0"
              aria-label={`Include ${svc.name}`}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="font-medium text-sm">
                  {svc.emoji} {svc.name}
                </span>
                <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                  {isChecked
                    ? `$${activeTierPrice}/mo`
                    : `$${svc.tiers[0].price}/mo`}
                </span>
              </div>
              {svc.hasFreeTrialNote && !isChecked && (
                <p className="text-xs text-green-600 dark:text-green-400 mt-0.5 flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                  {svc.hasFreeTrialNote}
                </p>
              )}
              {isChecked && svc.tiers.length > 1 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {svc.tiers.map(t => (
                    <button
                      key={t.label}
                      type="button"
                      onClick={e => { e.preventDefault(); setTier(svc.id, t.price); }}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors min-h-[44px] ${
                        activeTierPrice === t.price
                          ? 'bg-foreground text-background border-foreground'
                          : 'border-border hover:border-foreground/40'
                      }`}
                      aria-pressed={activeTierPrice === t.price}
                    >
                      {t.label} — ${t.price}/mo
                    </button>
                  ))}
                </div>
              )}
            </div>
          </label>
        </div>
      );
    });

  return (
    <>
      <SEOHead
        title="Streaming Cost Calculator — How Much Are You Spending? | TekSure"
        description="Check which streaming services you subscribe to and see your exact monthly and annual total. Find out if you could be saving money with cheaper tiers."
        path="/tools/streaming-calculator"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-5xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
                <Tv className="h-6 w-6 text-blue-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Streaming Cost Calculator
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Check the services you pay for and see exactly what they add up to each month — and each year. You might be surprised.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-5xl">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
            {/* Left: service list */}
            <div>
              {/* Video */}
              <h2 className="font-semibold text-base mb-3 flex items-center gap-2 text-foreground/80">
                <Tv className="h-4 w-4" aria-hidden="true" /> Video Streaming
              </h2>
              <div className="space-y-2 mb-8">{renderServiceList(videoServices)}</div>

              {/* Music */}
              <h2 className="font-semibold text-base mb-3 flex items-center gap-2 text-foreground/80">
                <Music className="h-4 w-4" aria-hidden="true" /> Music
              </h2>
              <div className="space-y-2 mb-8">{renderServiceList(musicServices)}</div>

              {/* Books & Audio */}
              <h2 className="font-semibold text-base mb-3 flex items-center gap-2 text-foreground/80">
                <BookOpen className="h-4 w-4" aria-hidden="true" /> Books & Audiobooks
              </h2>
              <div className="space-y-2">{renderServiceList(bookServices)}</div>
            </div>

            {/* Right: sticky summary */}
            <div className="lg:sticky lg:top-6 space-y-4">
              {/* Total card */}
              <div className={`rounded-2xl border-2 p-6 transition-colors ${colorInfo.bg}`}>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-muted-foreground">Monthly total</p>
                  {selectedCount > 0 && (
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-white/60 dark:bg-black/20 ${colorInfo.text}`}>
                      {colorInfo.label}
                    </span>
                  )}
                </div>
                <p className={`text-5xl font-bold tracking-tight mb-1 ${selectedCount > 0 ? colorInfo.text : 'text-muted-foreground'}`}>
                  ${monthlyTotal}
                  <span className="text-xl font-normal">/mo</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  {selectedCount === 0
                    ? 'Check services on the left to get started.'
                    : `$${annualTotal} per year · ${selectedCount} service${selectedCount !== 1 ? 's' : ''}`}
                </p>

                {selectedCount > 0 && (
                  <>
                    <div className="border-t border-black/10 dark:border-white/10 mt-4 pt-4">
                      <p className="text-sm font-medium mb-0.5">Annual total</p>
                      <p className="text-2xl font-bold">${annualTotal}</p>
                    </div>

                    <div className="border-t border-black/10 dark:border-white/10 mt-4 pt-4 flex items-start gap-2">
                      <Coffee className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-600" aria-hidden="true" />
                      <p className="text-sm text-muted-foreground">
                        That's about <span className="font-semibold text-foreground">{coffees} cups of coffee</span> per year at $5 each.
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Could you cut any? */}
              {servicesWithCheaperTiers.length > 0 && (
                <div className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <TrendingDown className="h-4 w-4 text-green-500" aria-hidden="true" />
                    Could you cut any of these?
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    These services have a cheaper ad-supported tier you're not using:
                  </p>
                  <div className="space-y-2">
                    {servicesWithCheaperTiers.map(svc => {
                      const cheapest = svc.tiers[0].price;
                      const current = selected[svc.id];
                      const saving = current - cheapest;
                      return (
                        <div key={svc.id} className="flex items-center justify-between text-sm gap-2">
                          <span>{svc.emoji} {svc.name}</span>
                          <span className="text-green-600 dark:text-green-400 font-medium whitespace-nowrap">
                            Save ${saving}/mo
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Free trial tip */}
              {freeTrialServices.length > 0 && (
                <div className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                    Services that offer free trials
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Services you haven't selected that have free trials:
                  </p>
                  <div className="space-y-1">
                    {freeTrialServices.slice(0, 5).map(svc => (
                      <div key={svc.id} className="text-xs text-muted-foreground flex items-start gap-1.5">
                        <span className="flex-shrink-0">{svc.emoji}</span>
                        <span><span className="font-medium text-foreground">{svc.name}:</span> {svc.hasFreeTrialNote}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tips */}
              <div className="rounded-2xl border border-border bg-muted/40 p-5">
                <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                  <Info className="h-4 w-4 text-primary" aria-hidden="true" />
                  Money-saving ideas
                </h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex gap-2">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Rotate services — watch one for a month, pause it, then try another.</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Check your bank statement — you may be paying for services you forgot about.</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Your phone carrier or internet plan may include a free streaming service.</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Free options: Tubi, Pluto TV, and Freevee have movies and shows at no cost (with ads).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
