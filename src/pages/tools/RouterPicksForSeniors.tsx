import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Router } from 'lucide-react';

const PICKS = [
  { name: 'Eero 6+ (mesh)', cost: '$200-400 set', best: 'Easiest setup. Strong app. Senior favorite. Amazon-owned.', good: 'Best mesh.' },
  { name: 'Google Nest Wifi Pro', cost: '$200-400 set', best: 'Same idea. Google ecosystem.', good: 'Best Google.' },
  { name: 'TP-Link Archer AX55', cost: '$100', best: 'Cheap reliable. Strong WiFi 6. Good for small homes.', good: 'Best budget.' },
  { name: 'Asus AX5400', cost: '$200', best: 'Strong + customizable. Better for tech-curious.', good: 'Best mid-range.' },
  { name: 'ISP-rented router', cost: '$10-15/mo', best: 'Convenient. But you pay forever. Buying yours saves $150+/yr.', good: 'Best for ZERO setup.' },
];

export default function RouterPicksForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Router Picks for Seniors | TekSure" description="Eero, Google Nest, TP-Link. Plain-English picks for routers that just work." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Router className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Router Picks for Seniors</h1>
          <p className="text-lg text-muted-foreground">Reliable WiFi. No fuss.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Buy vs rent from ISP</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Comcast / Spectrum</strong> charge $10-15/mo to RENT router. $120-180/yr forever.</li>
              <li>Buy your own ($100-300 once) — saves money in 12-18 months.</li>
              <li>Most ISPs accept compatible 3rd-party routers — search "[ISP] approved modems".</li>
              <li>If gigabit speed — need WiFi 6 router minimum.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mesh vs single router</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Single router</strong> — fine for under 1,500 sq ft, 1 floor.</li>
              <li><strong>2-pack mesh</strong> — for 2,000-3,000 sq ft.</li>
              <li><strong>3-pack mesh</strong> — large homes / multi-floor.</li>
              <li>Mesh = NO dead zones, NO switching networks moving room to room.</li>
              <li>Eero + Nest = easiest mesh apps for non-tech.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup is easier than ever</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Plug router in. Connect to ISP modem with cable.</li>
              <li>Download brand app (Eero, Nest).</li>
              <li>App walks you through setup.</li>
              <li>5-10 minutes total.</li>
              <li>Or pay BestBuy Geek Squad $100 to install — fine for non-tech.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Restart router monthly</h3>
            <p className="text-sm text-muted-foreground">Most "WiFi feels slow" complaints fixed by simple router restart. Unplug 30 sec, plug back in. Set monthly reminder. Many newer routers schedule auto-restart at 3 AM.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
