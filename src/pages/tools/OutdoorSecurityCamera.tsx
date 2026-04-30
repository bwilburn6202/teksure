import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

const PICKS = [
  { name: 'Wyze Cam v3 / Cam OG', price: '$30-40', best: 'Cheapest reliable outdoor cam. Good night vision. Local SD card storage option.', good: 'Best budget pick.' },
  { name: 'Blink Outdoor 4', price: '$100', best: 'Battery-only — install ANYWHERE without wiring. 2-year battery life. Owned by Amazon.', good: 'Best for renters or no-wire homes.' },
  { name: 'Ring Stick Up Cam (battery)', price: '$100', best: 'Battery, plug, or solar. Pairs with Ring doorbell ecosystem.', good: 'Best if you have Ring already.' },
  { name: 'Eufy SoloCam S40 (with solar)', price: '$200', best: 'Solar-powered — never need to charge. Local storage, no subscription required.', good: 'Best privacy + no monthly fee.' },
  { name: 'Reolink Argus 4 Pro', price: '$200', best: '4K resolution, color night vision, person/vehicle detection.', good: 'Best image quality for the price.' },
  { name: 'Arlo Pro 5S 2K', price: '$300', best: 'Premium. Strong AI detection. Subscription for full features.', good: 'Best premium choice.' },
];

export default function OutdoorSecurityCamera() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Outdoor Security Camera Picker — Wyze, Blink, Ring | TekSure" description="See your front porch, driveway, or backyard from your phone. Plain-English picks for outdoor security cameras with no subscription required." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Outdoor Security Camera</h1>
          <p className="text-lg text-muted-foreground">See your porch, driveway, or backyard from anywhere.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm mb-1">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Battery vs wired</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Battery</strong> — easy install, can place anywhere. Charge every 3-12 months.</li>
              <li><strong>Solar</strong> — battery + small solar panel. Never charge.</li>
              <li><strong>Plug-in</strong> — needs outlet nearby. 24/7 recording possible.</li>
              <li><strong>Wired (PoE)</strong> — for tech-savvy. Best reliability, professional installations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Subscriptions — when to pay</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>$3-10/month</strong> for cloud storage (30-60 days of footage).</li>
              <li><strong>Without subscription</strong> — most cameras still show LIVE view and motion alerts. Just no recordings to review later.</li>
              <li><strong>Eufy and Reolink</strong> save to local SD card for FREE.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to put cameras</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Front door (or use a video doorbell instead).</li>
              <li>Driveway / car parking area.</li>
              <li>Back patio / yard.</li>
              <li>Side gate / "blind side" of house.</li>
              <li>Mailbox area (porch piracy + mail theft).</li>
            </ul>
            <p className="text-sm mt-2 text-muted-foreground">Don\'t aim cameras at neighbor\'s property — many states require notice.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip — visible cameras are the best deterrent</h3>
            <p className="text-sm text-muted-foreground">Studies show even FAKE security cameras reduce break-ins. Real ones with visible recording lights are best. Mount where they\'re obvious — under eaves at 8-10 feet up.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
