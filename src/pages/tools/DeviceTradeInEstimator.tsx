import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Smartphone, Monitor, ExternalLink, ArrowRight, RotateCcw } from 'lucide-react';

type DeviceType = 'iphone' | 'android' | 'ipad' | 'laptop' | null;
type Condition = 'excellent' | 'good' | 'fair' | 'broken' | null;

interface TradeInSite { name: string; url: string; description: string; }

const TRADE_IN_SITES: TradeInSite[] = [
  { name: 'Apple Trade In', url: 'https://www.apple.com/shop/trade-in', description: 'Trade in any Apple device for credit toward a new one. Free recycling for any device.' },
  { name: 'Samsung Trade-In', url: 'https://www.samsung.com/us/trade-in/', description: 'Trade in phones, tablets, and watches toward new Samsung devices.' },
  { name: 'Best Buy Trade-In', url: 'https://www.bestbuy.com/trade-in', description: 'Trade in electronics for Best Buy gift cards. Accepts most brands.' },
  { name: 'Gazelle', url: 'https://www.gazelle.com/', description: 'Sell your used phone, tablet, or laptop for cash. Free shipping, quick payment.' },
  { name: 'Decluttr', url: 'https://www.decluttr.com/', description: 'Get an instant price quote for your device. Free shipping, next-day payment.' },
  { name: 'Swappa', url: 'https://swappa.com/', description: 'Sell directly to buyers — usually get more than trade-in programs. Verified marketplace.' },
  { name: 'Back Market', url: 'https://www.backmarket.com/sell', description: 'Sell your used device to a certified refurbisher. Good for devices in any condition.' },
  { name: 'Amazon Trade-In', url: 'https://www.amazon.com/tradein', description: 'Trade in devices for Amazon gift cards. Accepts Kindle, tablets, phones, and more.' },
];

const ESTIMATES: Record<string, Record<string, { min: number; max: number }>> = {
  iphone: { excellent: { min: 200, max: 600 }, good: { min: 120, max: 400 }, fair: { min: 50, max: 200 }, broken: { min: 15, max: 80 } },
  android: { excellent: { min: 80, max: 350 }, good: { min: 40, max: 200 }, fair: { min: 20, max: 100 }, broken: { min: 5, max: 40 } },
  ipad: { excellent: { min: 150, max: 500 }, good: { min: 80, max: 300 }, fair: { min: 30, max: 150 }, broken: { min: 10, max: 60 } },
  laptop: { excellent: { min: 150, max: 700 }, good: { min: 80, max: 400 }, fair: { min: 30, max: 200 }, broken: { min: 10, max: 80 } },
};

export default function DeviceTradeInEstimator() {
  const [device, setDevice] = useState<DeviceType>(null);
  const [condition, setCondition] = useState<Condition>(null);
  const estimate = device && condition ? ESTIMATES[device]?.[condition] : null;
  const restart = () => { setDevice(null); setCondition(null); };

  return (
    <>
      <SEOHead title="Device Trade-In Estimator" description="Find out how much your old phone, tablet, or laptop is worth. Compare trade-in values across 8 buyback services." path="/tools/device-trade-in" />
      <main className="min-h-screen bg-background"><div className="container max-w-2xl py-12 px-4">
        <div className="text-center mb-10"><DollarSign className="h-12 w-12 text-primary mx-auto mb-4" /><h1 className="text-3xl font-bold mb-2">Device Trade-In Estimator</h1><p className="text-muted-foreground">Find out what your old device is worth</p></div>

        {!device ? (
          <div><h2 className="text-lg font-semibold mb-4 text-center">What type of device do you have?</h2>
            <div className="grid grid-cols-2 gap-3">{([['iphone', 'iPhone', Smartphone], ['android', 'Android Phone', Smartphone], ['ipad', 'iPad / Tablet', Monitor], ['laptop', 'Laptop', Monitor]] as const).map(([id, label, Icon]) => (
              <Card key={id} className="cursor-pointer hover:border-primary/40 transition-all" onClick={() => setDevice(id as DeviceType)}><CardContent className="p-6 text-center"><Icon className="h-8 w-8 mx-auto mb-2 text-primary" /><p className="font-medium text-sm">{label}</p></CardContent></Card>
            ))}</div>
          </div>
        ) : !condition ? (
          <div><h2 className="text-lg font-semibold mb-4 text-center">What condition is it in?</h2>
            <div className="grid gap-3">{([
              ['excellent', 'Excellent', 'Like new — no scratches, perfect screen, battery holds charge all day'],
              ['good', 'Good', 'Minor wear — small scratches, works perfectly, battery lasts most of the day'],
              ['fair', 'Fair', 'Visible wear — noticeable scratches or dents, works but battery drains fast'],
              ['broken', 'Broken / Damaged', 'Cracked screen, does not turn on, water damage, or major issues'],
            ] as const).map(([id, label, desc]) => (
              <Card key={id} className="cursor-pointer hover:border-primary/40 transition-all" onClick={() => setCondition(id as Condition)}><CardContent className="p-4"><h3 className="font-semibold text-sm">{label}</h3><p className="text-xs text-muted-foreground">{desc}</p></CardContent></Card>
            ))}</div>
            <Button variant="ghost" onClick={() => setDevice(null)} className="mt-4 gap-1 text-xs"><ArrowRight className="h-3 w-3 rotate-180" /> Back</Button>
          </div>
        ) : (
          <div>
            <Card className="mb-6 border-primary/40"><CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">Estimated trade-in value</p>
              <p className="text-4xl font-bold text-primary">${estimate!.min} — ${estimate!.max}</p>
              <p className="text-xs text-muted-foreground mt-2">Actual value depends on specific model, age, and storage size. Compare offers from multiple sites.</p>
            </CardContent></Card>
            <h3 className="font-semibold mb-3">Where to sell or trade in</h3>
            <div className="space-y-2">{TRADE_IN_SITES.map(site => (
              <Card key={site.name}><CardContent className="p-4 flex items-center justify-between">
                <div><h4 className="font-medium text-sm">{site.name}</h4><p className="text-xs text-muted-foreground">{site.description}</p></div>
                <a href={site.url} target="_blank" rel="noopener noreferrer" className="shrink-0 ml-3"><Button size="sm" variant="outline" className="gap-1 text-xs">Visit <ExternalLink className="h-3 w-3" /></Button></a>
              </CardContent></Card>
            ))}</div>
            <Button onClick={restart} variant="outline" className="w-full mt-6 gap-2"><RotateCcw className="h-4 w-4" /> Estimate Another Device</Button>
          </div>
        )}
      </div></main>
    </>
  );
}
