import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const APPS = [
  { name: 'Yoga Studio: Mind &amp; Body', cost: '$13/mo / $90/yr', best: 'Filter by "chair yoga". Beginner classes 10-30 min. Best UI.', good: 'Best paid app.' },
  { name: 'Down Dog Yoga', cost: 'FREE for 60+ / $8/mo', best: 'Customizable — pick chair, gentle, slow. FREE for seniors.', good: 'Best free for seniors.' },
  { name: 'YogaGo: Yoga for Beginners', cost: '$30-50/yr', best: 'Senior-friendly programs. Body type customization.', good: 'Best beginner.' },
  { name: 'Glo Yoga', cost: '$23/mo', best: 'Real instructors. Many gentle, restorative, chair classes.', good: 'Best instructor variety.' },
  { name: 'YouTube — Yoga with Adriene', cost: 'FREE', best: 'Adriene&apos;s 30-day "Home" or "Center" series — free, kind, unhurried.', good: 'Best free.' },
  { name: 'YouTube — SilverSneakers', cost: 'FREE', best: 'Senior-specific. Chair, balance, strength. Free on YouTube.', good: 'Best for senior format.' },
];

export default function ChairYogaApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chair Yoga Apps for Seniors | TekSure" description="Yoga from a chair — gentle on knees and back. Plain-English picks for free and paid chair yoga apps and YouTube channels." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chair Yoga Apps</h1>
          <p className="text-lg text-muted-foreground">Stretch + strengthen — from a chair.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why chair yoga</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Gentle on knees and lower back.</li>
              <li>Improves flexibility, balance, posture, mood.</li>
              <li>No floor mat required.</li>
              <li>Great for arthritis or recent surgery.</li>
              <li>Can do at office desk or living room.</li>
              <li>15 minutes/day = real benefit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free locally</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>SilverSneakers</strong> — included free with most Medicare Advantage. Chair yoga at gyms + free online. Eligibility check: silversneakers.com.</li>
              <li><strong>Renew Active (UnitedHealthcare)</strong> — same idea.</li>
              <li><strong>Local senior centers</strong> — free or low-cost classes.</li>
              <li><strong>Library YogaWITH Adriene DVDs</strong>.</li>
              <li><strong>YMCA</strong> — many have senior chair yoga, financial assistance available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with 10 minutes</h3>
            <p className="text-sm text-muted-foreground">First time — pick a 10-minute beginner chair yoga video on YouTube. Try it. Don&apos;t buy anything until you&apos;ve done 5 sessions. Most apps offer 7-day free trials. Use them, then commit to one.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
