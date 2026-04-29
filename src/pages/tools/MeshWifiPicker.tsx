import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function MeshWifiPicker() {
  const [size, setSize] = useState<'small' | 'medium' | 'large' | null>(null);

  const recs: Record<string, { units: string; pick: string; backup: string; note: string }> = {
    small: { units: '1 router (or 2-pack mesh)', pick: 'eero 6+ (single) — about $130', backup: 'TP-Link Deco X20 2-pack — about $140', note: 'Most apartments and small homes are fine with one good router.' },
    medium: { units: '2-pack mesh', pick: 'eero 6+ 2-pack — about $200', backup: 'Google Nest Wifi Pro 2-pack — about $250', note: 'Place one near your modem, the other halfway across the house.' },
    large: { units: '3-pack mesh', pick: 'eero Pro 6E 3-pack — about $400', backup: 'TP-Link Deco XE75 3-pack — about $300', note: 'Spread the 3 units across the whole house — basement, main floor, upstairs. Each "talks" to the next.' },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mesh Wi-Fi Picker — Fix Wi-Fi Dead Zones at Home | TekSure" description="Wi-Fi works in some rooms but not others? A mesh Wi-Fi system is the fix. We'll recommend the right size for your home — in plain English." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mesh Wi-Fi Picker</h1>
          <p className="text-lg text-muted-foreground">Fix the dead zone in the back bedroom or basement.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What "mesh" Wi-Fi means</h2>
            <p className="text-sm">Instead of one router struggling to reach every room, you put 2 or 3 small units around the house. They "talk" to each other and create one big Wi-Fi network. Your phone or laptop automatically connects to whichever is closest. No more dead zones.</p>
          </CardContent>
        </Card>

        {!size ? (
          <Card>
            <CardContent className="pt-6 space-y-3">
              <h2 className="font-bold text-lg mb-2">How big is your home?</h2>
              <button onClick={() => setSize('small')} className="w-full p-4 border-2 rounded-lg text-left hover:border-primary">
                <p className="font-bold">Small — apartment or 1-floor home up to 1,500 sq ft</p>
                <p className="text-sm text-muted-foreground">2 bedrooms, no basement issues</p>
              </button>
              <button onClick={() => setSize('medium')} className="w-full p-4 border-2 rounded-lg text-left hover:border-primary">
                <p className="font-bold">Medium — 2-floor home, 1,500-3,000 sq ft</p>
                <p className="text-sm text-muted-foreground">3-4 bedrooms, maybe a finished basement</p>
              </button>
              <button onClick={() => setSize('large')} className="w-full p-4 border-2 rounded-lg text-left hover:border-primary">
                <p className="font-bold">Large — 3,000+ sq ft, multiple floors</p>
                <p className="text-sm text-muted-foreground">Big house, brick walls, basement plus upstairs</p>
              </button>
            </CardContent>
          </Card>
        ) : (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h2 className="font-bold text-xl mb-3">Recommended setup</h2>
                <p className="mb-3"><strong>What to buy:</strong> {recs[size].units}</p>
                <p className="mb-2"><strong>Top pick:</strong> {recs[size].pick}</p>
                <p className="mb-3"><strong>Solid alternative:</strong> {recs[size].backup}</p>
                <p className="text-sm bg-muted/50 p-3 rounded">{recs[size].note}</p>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardContent className="pt-6">
                <h2 className="font-bold text-xl mb-3">Setup steps (works for all systems)</h2>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Install the system's app on your phone (eero, Google Home, TP-Link Deco — whichever).</li>
                  <li>Plug the FIRST unit into your modem (the box from your internet company) using the included Ethernet cable.</li>
                  <li>Plug it into the wall for power. Wait until its light is steady.</li>
                  <li>The app walks you through setup — Wi-Fi name and password.</li>
                  <li>Plug additional units in spread-out rooms — within 30 feet of another unit.</li>
                  <li>Each one auto-connects. Done in 15 minutes.</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">Bonus features worth using</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>Guest network</strong> — separate Wi-Fi for visitors. They can't see your computer or printer. Easy to share with one tap.</li>
                  <li><strong>Parental controls</strong> — set bedtime cut-off for grandkids' tablets.</li>
                  <li><strong>Pause Wi-Fi</strong> — at dinner time, with one tap.</li>
                </ul>
              </CardContent>
            </Card>

            <button onClick={() => setSize(null)} className="w-full p-3 border rounded-lg text-sm">Pick a different size</button>
          </>
        )}

        <Card className="mt-4 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don't pay your internet company $15/month</h3>
            <p className="text-sm text-muted-foreground">Most cable companies (Xfinity, Spectrum) charge $14-$15 per month to RENT a router. Buying your own pays for itself in 6-12 months — and modern mesh systems are far better than the rented box.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
