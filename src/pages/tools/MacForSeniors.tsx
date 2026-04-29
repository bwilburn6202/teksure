import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MonitorSmartphone } from 'lucide-react';

const PICKS = [
  { name: 'MacBook Air M3 13"', cost: '$1,000', best: 'Best Mac laptop. Light, silent, all-day battery.', good: 'Best overall.' },
  { name: 'MacBook Air M3 15"', cost: '$1,300', best: 'Larger screen for senior eyes.', good: 'Best larger screen.' },
  { name: 'iMac M3', cost: '$1,300', best: 'Beautiful all-in-one desktop. 24" screen.', good: 'Best desktop.' },
  { name: 'Mac mini M4', cost: '$600', best: 'Small + powerful. Use existing monitor.', good: 'Best value.' },
  { name: 'Refurbished Mac (Apple Certified)', cost: '$700-1,500', best: 'Save 15-20%. Same warranty.', good: 'Best for budget.' },
];

export default function MacForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mac for Seniors | TekSure" description="Pick + use a Mac. Plain-English Mac guide for senior switchers + new users." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MonitorSmartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mac for Seniors</h1>
          <p className="text-lg text-muted-foreground">Beautiful. Reliable. Lasts 7-10 years.</p>
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
            <h2 className="font-bold text-xl mb-3">Why Mac for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reliable — last 7-10 years.</li>
              <li>Better resale value.</li>
              <li>Less malware than Windows.</li>
              <li>Apple Stores for help — appointments free.</li>
              <li>Senior-friendly support phone.</li>
              <li>Sync with iPhone seamlessly.</li>
              <li>Good text + display — easier on eyes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior accessibility</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Accessibility = many features.</li>
              <li>Increase text size, cursor size.</li>
              <li>VoiceOver — reads aloud.</li>
              <li>Zoom feature — magnify any area.</li>
              <li>Voice Control — speak instead of type.</li>
              <li>Free Apple training online.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Switching from Windows</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Migration Assistant transfers files easily.</li>
              <li>Photos auto-organize.</li>
              <li>Microsoft Office runs on Mac.</li>
              <li>Most websites work in Safari same as Chrome.</li>
              <li>Adjustment period: 2-4 weeks.</li>
              <li>Apple Store free 1-on-1 setup help.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost comparison</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mac $1,000 lasts 7-10 yrs = $100-140/yr.</li>
              <li>$500 PC lasts 3-5 yrs = $100-170/yr.</li>
              <li>Mac better value over time.</li>
              <li>Less repair, replacement.</li>
              <li>Plus better support.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Today at Apple</strong> — free in-store classes.</li>
              <li><strong>Apple Support</strong> — phone call free for 1 year.</li>
              <li><strong>Genius Bar</strong> — free repair help.</li>
              <li><strong>YouTube</strong> — endless tutorials.</li>
              <li><strong>Apple Discussions</strong> — community help.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Refurbished saves $</h3>
            <p className="text-sm text-muted-foreground">apple.com/shop/refurbished — Apple-certified refurb. Same warranty as new. 15-20% off. New battery + casing. Indistinguishable from new. Best Mac value. Available throughout year.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
