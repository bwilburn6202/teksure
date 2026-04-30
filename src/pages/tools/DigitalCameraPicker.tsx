import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

const PICKS = [
  { name: 'Sony ZV-1F', price: '$500', best: 'Best point-and-shoot. Great photos, vlog-ready video, simple controls. Pocket size.', cons: 'Slightly pricey for casual.' },
  { name: 'Canon PowerShot G7 X Mark III', price: '$750', best: 'Premium pocket. Excellent photo and video.', cons: 'Costs more.' },
  { name: 'Sony A6400 (mirrorless kit)', price: '$900-1100', best: 'Step up — interchangeable lens. Far better photos than phone in low light. Family events, travel.', cons: 'Bigger than pocket cams.' },
  { name: 'Canon EOS R50 (mirrorless kit)', price: '$700', best: 'Best entry-level mirrorless. Auto modes work great.', cons: 'Native lens selection still growing.' },
  { name: 'Fujifilm X100VI', price: '$1,600', best: 'Iconic camera. Looks like a vintage 1970s rangefinder. Joy to use.', cons: 'Premium price; often back-ordered.' },
  { name: 'GoPro Hero 12', price: '$400', best: 'Action camera — waterproof, mountable on bike/grandkid/dashboard. Best for active lifestyle.', cons: 'Battery life moderate.' },
  { name: 'DJI Mini 4 Pro drone', price: '$1,000', best: 'Best drone for photos/video. Under 250g — no FAA registration needed.', cons: 'Learning curve and rules.' },
  { name: 'Smartphone (especially iPhone 15+ / Pixel 8+)', price: 'Already have one', best: 'For 80% of people, modern phones are good enough. Always with you. AI auto-makes great shots.', cons: 'Limited zoom, low light.' },
];

export default function DigitalCameraPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Camera Picker — Point-and-Shoot, Mirrorless, GoPro | TekSure" description="Stop with the phone-only photos. Plain-English picks for travel cameras, family-event cameras, and action cams." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Camera Picker</h1>
          <p className="text-lg text-muted-foreground">When the phone isn\'t enough.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm mb-1"><strong>Best:</strong> {p.best}</p>
                <p className="text-sm text-muted-foreground"><strong>Cons:</strong> {p.cons}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you NEED a real camera</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Sports / fast action</strong> — phones blur.</li>
              <li><strong>Wildlife / birds</strong> — need real zoom.</li>
              <li><strong>Low-light venues (concerts, recitals)</strong> — phones get noisy.</li>
              <li><strong>Travel where phone-only feels limiting.</strong></li>
              <li><strong>You want a real hobby</strong> beyond pure utility.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Skip — phone is fine if</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Mostly daylight, family snapshots.</li>
              <li>You hate carrying extra gear.</li>
              <li>You\'ll just leave a separate camera at home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to buy</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>B&H Photo (bhphotovideo.com)</strong> — top US camera store. Free shipping, no sales tax in many states.</li>
              <li><strong>Adorama</strong> — main competitor.</li>
              <li><strong>Used: KEH Camera, MPB</strong> — reputable used. Often 30-50% off new.</li>
              <li>Avoid Best Buy and Amazon for serious cameras — fewer options, less help.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip — buy used</h3>
            <p className="text-sm text-muted-foreground">A 2-year-old mirrorless camera with a kit lens is 90% as good as a brand new one. Save 30-50%. KEH and MPB stand behind their used gear.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
