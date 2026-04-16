import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tv, DollarSign, CheckCircle, Minus, Plus } from 'lucide-react';

const SERVICES = [
  { id: 'netflix', name: 'Netflix', prices: [{ tier: 'Standard with Ads', price: 6.99 }, { tier: 'Standard', price: 15.49 }, { tier: 'Premium', price: 22.99 }] },
  { id: 'hulu', name: 'Hulu', prices: [{ tier: 'With Ads', price: 7.99 }, { tier: 'No Ads', price: 17.99 }] },
  { id: 'disney', name: 'Disney+', prices: [{ tier: 'Basic', price: 7.99 }, { tier: 'Premium', price: 13.99 }] },
  { id: 'max', name: 'Max (HBO)', prices: [{ tier: 'With Ads', price: 9.99 }, { tier: 'Ad-Free', price: 16.99 }, { tier: 'Ultimate', price: 20.99 }] },
  { id: 'prime', name: 'Amazon Prime Video', prices: [{ tier: 'With Prime', price: 14.99 }, { tier: 'Video Only', price: 8.99 }] },
  { id: 'apple', name: 'Apple TV+', prices: [{ tier: 'Standard', price: 9.99 }] },
  { id: 'peacock', name: 'Peacock', prices: [{ tier: 'Premium', price: 7.99 }, { tier: 'Premium Plus', price: 13.99 }] },
  { id: 'paramount', name: 'Paramount+', prices: [{ tier: 'Essential', price: 7.99 }, { tier: 'With Showtime', price: 12.99 }] },
  { id: 'youtube', name: 'YouTube Premium', prices: [{ tier: 'Individual', price: 13.99 }] },
  { id: 'spotify', name: 'Spotify', prices: [{ tier: 'Individual', price: 11.99 }, { tier: 'Duo', price: 16.99 }, { tier: 'Family', price: 19.99 }] },
];

export default function StreamingCalculator() {
  const [selected, setSelected] = useState<Record<string, number | null>>({});
  const toggle = (id: string, tierIdx: number) => setSelected(s => ({ ...s, [id]: s[id] === tierIdx ? null : tierIdx }));
  const monthly = Object.entries(selected).reduce((sum, [id, tierIdx]) => { if (tierIdx === null) return sum; const svc = SERVICES.find(s => s.id === id); return sum + (svc?.prices[tierIdx]?.price || 0); }, 0);
  const annual = monthly * 12;
  return (
    <>
      <SEOHead title="Streaming Cost Calculator" description="Add up your streaming subscriptions and see the real monthly and yearly cost." path="/tools/streaming-calculator" />
      <Navbar />
      <main className="min-h-screen bg-background"><div className="container max-w-2xl py-12 px-4">
        <div className="text-center mb-10"><Tv className="h-12 w-12 text-primary mx-auto mb-4" /><h1 className="text-3xl font-bold mb-2">Streaming Cost Calculator</h1><p className="text-muted-foreground">See what you are really spending on streaming each month</p></div>
        <div className="space-y-3 mb-8">{SERVICES.map(svc => (
          <Card key={svc.id} className={selected[svc.id] !== undefined && selected[svc.id] !== null ? 'border-primary/40' : ''}>
            <CardContent className="p-4"><h3 className="font-semibold mb-2">{svc.name}</h3>
              <div className="flex flex-wrap gap-2">{svc.prices.map((p, i) => (
                <Button key={i} size="sm" variant={selected[svc.id] === i ? 'default' : 'outline'} onClick={() => toggle(svc.id, i)} className="text-xs">{p.tier} — ${p.price}/mo</Button>
              ))}</div>
            </CardContent>
          </Card>
        ))}</div>
        <Card className="sticky bottom-4 border-primary/40 shadow-lg"><CardContent className="p-6 flex items-center justify-between">
          <div><p className="text-sm text-muted-foreground">Monthly total</p><p className="text-2xl font-bold">${monthly.toFixed(2)}</p></div>
          <div className="text-right"><p className="text-sm text-muted-foreground">Yearly total</p><p className="text-2xl font-bold text-primary">${annual.toFixed(2)}</p></div>
        </CardContent></Card>
      </div></main>
      <Footer />
    </>
  );
}
