import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Tv, DollarSign, TrendingDown, Lightbulb, CheckCircle, Info } from 'lucide-react';

interface StreamingService {
  id: string;
  name: string;
  tiers: { name: string; price: number }[];
  category: 'video' | 'music';
  freeTierAvailable: boolean;
  freeTierNote?: string;
}

const services: StreamingService[] = [
  { id: 'netflix', name: 'Netflix', category: 'video', freeTierAvailable: false, tiers: [{ name: 'Standard with Ads', price: 7.99 }, { name: 'Standard', price: 17.99 }, { name: 'Premium', price: 24.99 }] },
  { id: 'hulu', name: 'Hulu', category: 'video', freeTierAvailable: false, tiers: [{ name: 'With Ads', price: 9.99 }, { name: 'No Ads', price: 18.99 }] },
  { id: 'disney', name: 'Disney+', category: 'video', freeTierAvailable: false, tiers: [{ name: 'With Ads', price: 9.99 }, { name: 'No Ads', price: 16.99 }] },
  { id: 'max', name: 'Max', category: 'video', freeTierAvailable: false, tiers: [{ name: 'With Ads', price: 9.99 }, { name: 'Ad-Free', price: 16.99 }, { name: 'Ultimate Ad-Free', price: 20.99 }] },
  { id: 'peacock', name: 'Peacock', category: 'video', freeTierAvailable: true, freeTierNote: 'Peacock has a free tier with limited content and ads.', tiers: [{ name: 'Premium (Ads)', price: 7.99 }, { name: 'Premium Plus', price: 13.99 }] },
  { id: 'paramount', name: 'Paramount+', category: 'video', freeTierAvailable: false, tiers: [{ name: 'Essential (Ads)', price: 7.99 }, { name: 'With Showtime', price: 12.99 }] },
  { id: 'appletv', name: 'Apple TV+', category: 'video', freeTierAvailable: false, tiers: [{ name: 'Standard', price: 9.99 }] },
  { id: 'prime', name: 'Amazon Prime Video', category: 'video', freeTierAvailable: false, tiers: [{ name: 'Prime (annual / 12)', price: 11.58 }, { name: 'Prime Monthly', price: 14.99 }] },
  { id: 'youtube', name: 'YouTube Premium', category: 'video', freeTierAvailable: true, freeTierNote: 'Regular YouTube is free with ads. Premium removes ads and adds background play.', tiers: [{ name: 'Individual', price: 13.99 }, { name: 'Family', price: 22.99 }] },
  { id: 'spotify', name: 'Spotify', category: 'music', freeTierAvailable: true, freeTierNote: 'Spotify has a free tier with ads and limited skips.', tiers: [{ name: 'Individual', price: 11.99 }, { name: 'Duo', price: 16.99 }, { name: 'Family', price: 19.99 }] },
  { id: 'applemusic', name: 'Apple Music', category: 'music', freeTierAvailable: false, tiers: [{ name: 'Individual', price: 10.99 }, { name: 'Family', price: 16.99 }] },
];

interface BundleDeal {
  name: string;
  includes: string;
  price: number;
  savings: string;
}

const bundles: BundleDeal[] = [
  { name: 'Disney Bundle Trio (Basic)', includes: 'Disney+ (Ads) + Hulu (Ads) + ESPN+', price: 16.99, savings: 'Save about $11/month vs. subscribing separately' },
  { name: 'Disney Bundle Trio (Premium)', includes: 'Disney+ (No Ads) + Hulu (No Ads) + ESPN+', price: 26.99, savings: 'Save about $15/month vs. subscribing separately' },
  { name: 'Apple One Individual', includes: 'Apple TV+ + Apple Music + iCloud+ 50GB + Apple Arcade', price: 19.95, savings: 'Save about $11/month vs. subscribing separately' },
  { name: 'Apple One Family', includes: 'Apple TV+ + Apple Music + iCloud+ 200GB + Apple Arcade (up to 5 people)', price: 25.95, savings: 'Save about $14/month vs. subscribing separately' },
];

const CABLE_AVERAGE = 114;

export default function StreamingCalculator() {
  const [selected, setSelected] = useState<Record<string, number>>({});

  const toggleService = (serviceId: string) => {
    setSelected(prev => {
      const copy = { ...prev };
      if (serviceId in copy) {
        delete copy[serviceId];
      } else {
        const svc = services.find(s => s.id === serviceId)!;
        copy[serviceId] = svc.tiers[0].price;
      }
      return copy;
    });
  };

  const setTier = (serviceId: string, price: number) => {
    setSelected(prev => ({ ...prev, [serviceId]: price }));
  };

  const monthlyTotal = useMemo(() => {
    return Object.values(selected).reduce((sum, price) => sum + price, 0);
  }, [selected]);

  const annualTotal = monthlyTotal * 12;
  const cableSavings = CABLE_AVERAGE - monthlyTotal;
  const selectedCount = Object.keys(selected).length;

  return (
    <>
      <SEOHead
        title="Streaming Cost Calculator — Add Up Your Subscriptions | TekSure"
        description="See how much you are really spending on streaming services each month. Calculate your total, compare to cable, and find money-saving bundles."
        path="/tools/streaming-calculator"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Streaming Calculator' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0">
                <Tv className="h-6 w-6 text-blue-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Streaming Cost Calculator</h1>
            <p className="text-muted-foreground text-lg">
              Check the services you subscribe to, pick your plan tier, and see exactly how much you are spending each month. We will also show you bundles that could save money.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl">
          {/* Cost summary card */}
          <div className="mb-8 p-5 rounded-2xl border border-border bg-card sticky top-4 z-10">
            <div className="flex flex-wrap gap-6 justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Total</p>
                <p className="text-3xl font-bold">${monthlyTotal.toFixed(2)}<span className="text-base font-normal text-muted-foreground">/mo</span></p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Annual Total</p>
                <p className="text-xl font-semibold">${annualTotal.toFixed(2)}<span className="text-base font-normal text-muted-foreground">/yr</span></p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">vs. Cable (${CABLE_AVERAGE}/mo avg)</p>
                <p className={`text-xl font-semibold ${cableSavings > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {cableSavings > 0 ? `Saving $${cableSavings.toFixed(2)}/mo` : `$${Math.abs(cableSavings).toFixed(2)}/mo more`}
                </p>
              </div>
            </div>
          </div>

          {/* Video services */}
          <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Tv className="h-5 w-5 text-muted-foreground" aria-hidden="true" /> Video Streaming
          </h2>
          <div className="space-y-3 mb-10">
            {services.filter(s => s.category === 'video').map(svc => {
              const isSelected = svc.id in selected;
              return (
                <div key={svc.id} className={`rounded-2xl border-2 transition-colors ${isSelected ? 'border-primary bg-primary/5' : 'border-border'}`}>
                  <div className="p-4 flex items-start gap-3">
                    <Checkbox
                      id={`svc-${svc.id}`}
                      checked={isSelected}
                      onCheckedChange={() => toggleService(svc.id)}
                      className="mt-1"
                      aria-label={`Include ${svc.name}`}
                    />
                    <div className="flex-1 min-w-0">
                      <label htmlFor={`svc-${svc.id}`} className="font-medium text-sm cursor-pointer">{svc.name}</label>
                      {svc.freeTierAvailable && (
                        <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1 mt-0.5">
                          <CheckCircle className="h-3 w-3" aria-hidden="true" /> {svc.freeTierNote}
                        </p>
                      )}
                      {isSelected && svc.tiers.length > 1 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {svc.tiers.map(tier => (
                            <button
                              key={tier.name}
                              onClick={() => setTier(svc.id, tier.price)}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors min-h-[36px] ${
                                selected[svc.id] === tier.price
                                  ? 'bg-foreground text-background border-foreground'
                                  : 'border-border hover:border-foreground/30'
                              }`}
                              aria-pressed={selected[svc.id] === tier.price}
                            >
                              {tier.name} — ${tier.price}/mo
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      {isSelected ? `$${selected[svc.id]!.toFixed(2)}/mo` : `from $${svc.tiers[0].price}/mo`}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Music services */}
          <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-muted-foreground" aria-hidden="true" /> Music Streaming
          </h2>
          <div className="space-y-3 mb-10">
            {services.filter(s => s.category === 'music').map(svc => {
              const isSelected = svc.id in selected;
              return (
                <div key={svc.id} className={`rounded-2xl border-2 transition-colors ${isSelected ? 'border-primary bg-primary/5' : 'border-border'}`}>
                  <div className="p-4 flex items-start gap-3">
                    <Checkbox
                      id={`svc-${svc.id}`}
                      checked={isSelected}
                      onCheckedChange={() => toggleService(svc.id)}
                      className="mt-1"
                      aria-label={`Include ${svc.name}`}
                    />
                    <div className="flex-1 min-w-0">
                      <label htmlFor={`svc-${svc.id}`} className="font-medium text-sm cursor-pointer">{svc.name}</label>
                      {svc.freeTierAvailable && (
                        <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1 mt-0.5">
                          <CheckCircle className="h-3 w-3" aria-hidden="true" /> {svc.freeTierNote}
                        </p>
                      )}
                      {isSelected && svc.tiers.length > 1 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {svc.tiers.map(tier => (
                            <button
                              key={tier.name}
                              onClick={() => setTier(svc.id, tier.price)}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors min-h-[36px] ${
                                selected[svc.id] === tier.price
                                  ? 'bg-foreground text-background border-foreground'
                                  : 'border-border hover:border-foreground/30'
                              }`}
                              aria-pressed={selected[svc.id] === tier.price}
                            >
                              {tier.name} — ${tier.price}/mo
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      {isSelected ? `$${selected[svc.id]!.toFixed(2)}/mo` : `from $${svc.tiers[0].price}/mo`}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Compare to cable */}
          <div className="p-6 rounded-2xl border border-border bg-muted/50 mb-8">
            <h3 className="font-semibold flex items-center gap-2 mb-3">
              <TrendingDown className="h-5 w-5 text-green-500" aria-hidden="true" /> Compare to Cable
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-xl bg-background border border-border text-center">
                <p className="text-sm text-muted-foreground mb-1">Your streaming total</p>
                <p className="text-2xl font-bold">${monthlyTotal.toFixed(2)}<span className="text-sm font-normal">/mo</span></p>
              </div>
              <div className="p-4 rounded-xl bg-background border border-border text-center">
                <p className="text-sm text-muted-foreground mb-1">Average cable bill</p>
                <p className="text-2xl font-bold">${CABLE_AVERAGE}<span className="text-sm font-normal">/mo</span></p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {selectedCount === 0
                ? 'Select your streaming services above to see how they compare to cable.'
                : cableSavings > 0
                  ? `You are saving about $${cableSavings.toFixed(2)} per month ($${(cableSavings * 12).toFixed(2)} per year) compared to the average cable bill.`
                  : `Your streaming is costing $${Math.abs(cableSavings).toFixed(2)} more per month than the average cable bill. Consider cutting services you rarely use.`
              }
            </p>
          </div>

          {/* Bundles */}
          <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-500" aria-hidden="true" /> Money-Saving Bundles
          </h2>
          <div className="space-y-3 mb-8">
            {bundles.map(bundle => (
              <div key={bundle.name} className="p-4 rounded-2xl border border-border bg-card">
                <div className="flex justify-between items-start gap-3 mb-2">
                  <h3 className="font-semibold text-sm">{bundle.name}</h3>
                  <span className="text-sm font-bold whitespace-nowrap">${bundle.price}/mo</span>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{bundle.includes}</p>
                <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" aria-hidden="true" /> {bundle.savings}
                </p>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="p-6 rounded-2xl border border-border bg-muted/50">
            <h3 className="font-semibold flex items-center gap-2 mb-3">
              <Info className="h-5 w-5 text-primary" aria-hidden="true" /> Money-Saving Tips
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />Rotate services instead of subscribing to all at once. Watch one for a month, then switch.</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />Use ad-supported tiers to save 40-50% on most services.</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />Check if your phone carrier or internet provider includes a free streaming subscription.</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />Look at your bank or credit card statement for streaming charges you forgot about.</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />Free alternatives: Tubi, Pluto TV, and Freevee offer movies and shows at no cost with ads.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
