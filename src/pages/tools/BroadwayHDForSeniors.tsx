import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Theater } from 'lucide-react';

const SVCS = [
  { name: 'BroadwayHD', cost: '$15/mo', best: 'Broadway shows + plays. Live captures.', good: 'Best Broadway.' },
  { name: 'Met Opera on Demand', cost: '$15/mo', best: 'Metropolitan Opera live + archive. World-class.', good: 'Best opera.' },
  { name: 'Marquee TV', cost: '$13/mo', best: 'Ballet + theater + classical music.', good: 'Best ballet.' },
  { name: 'PBS Passport', cost: '$60/yr donation', best: 'Great Performances + Masterpiece Theater. Donation supports PBS.', good: 'Best free-ish.' },
  { name: 'Stage Access', cost: '$10/mo', best: 'Theater + dance + opera. Smaller selection.', good: 'Best budget.' },
];

export default function BroadwayHDForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Broadway HD + Stage at Home | TekSure" description="Stream Broadway, opera, ballet at home. Plain-English picks for senior performance fans." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Theater className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Stage Performances at Home</h1>
          <p className="text-lg text-muted-foreground">Broadway. Opera. Ballet. From your couch.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free / cheap options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>YouTube</strong> — many free historic Broadway recordings.</li>
              <li><strong>PBS</strong> — Great Performances FREE (with ads or PBS app).</li>
              <li><strong>Hoopla</strong> (library) — many performance DVDs free.</li>
              <li><strong>Met Opera Live in HD</strong> — local movie theaters $25.</li>
              <li><strong>Live in Concert</strong> Apple TV+ — Selena Gomez and others.</li>
              <li><strong>AmazonPrime / AppleTV+</strong> — occasional Broadway live recordings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">In-person discounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>TodayTix</strong> — last-minute Broadway 50% off.</li>
              <li><strong>TKTS booth</strong> — same-day NYC half-price.</li>
              <li><strong>Senior rush tickets</strong> — many Broadway shows.</li>
              <li><strong>Local theater</strong> — community theater $20-50 vs $150 Broadway.</li>
              <li><strong>Shakespeare in the Park</strong> — free in many cities.</li>
              <li><strong>Symphony</strong> — senior discounts at most venues.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stream to TV</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most apps work on Roku, Apple TV, Fire TV.</li>
              <li>BroadwayHD on Smart TVs.</li>
              <li>Cast from phone via Chromecast / AirPlay.</li>
              <li>Bigger screen + sound = closer to live.</li>
              <li>Use Sonos Beam soundbar for clear singing audio.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior season subscriptions</h3>
            <p className="text-sm text-muted-foreground">Local symphony, opera, ballet, theater all offer SENIOR season subscriptions. Often 30-50% off individual tickets. Same seat each time. Some include parking + dinner. Great social outings. Search &quot;[your city] symphony senior subscription.&quot;</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
