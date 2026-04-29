import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Globe2 } from 'lucide-react';

export default function InternationalTravelSim() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="International Travel SIM & eSIM — Avoid $10/MB Roaming | TekSure" description="Don\'t come home to a $1,000 phone bill. The best travel eSIMs and SIM options to use overseas — Airalo, Holafly, and your carrier\'s plans." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Globe2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">International Travel SIM & eSIM</h1>
          <p className="text-lg text-muted-foreground">Use your phone abroad without the $1,000 surprise.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">The problem</h2>
            <p className="text-sm">Without a plan, US carriers charge $10+/MB overseas. One Google Maps session = $30. A few photo uploads = $200. Many travelers come home to bills $500-$2,000 higher than expected.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best option for most travelers — eSIM</h2>
            <p className="text-sm mb-2">An eSIM is a digital phone plan you buy on your phone. No physical card. Set it up at home before you fly. Most modern phones (iPhone 14+, recent Samsung Galaxy, Google Pixel) support eSIM.</p>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold">Airalo</p>
                <p>App-based. Plans for 200+ countries. About $5-10 for 5GB / 7-30 days. Best value for short trips.</p>
              </div>
              <div>
                <p className="font-bold">Holafly</p>
                <p>Similar. Slightly more expensive but offers UNLIMITED data plans (worth it if you stream).</p>
              </div>
              <div>
                <p className="font-bold">Saily (by NordVPN)</p>
                <p>Often slightly cheaper than Airalo for the same destinations.</p>
              </div>
              <div>
                <p className="font-bold">GigSky</p>
                <p>Older option, large network coverage, slightly pricier.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (Airalo as example)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Install <strong>Airalo</strong> from App Store / Play Store BEFORE leaving home.</li>
              <li>Browse → pick your destination → pick a data plan.</li>
              <li>Pay with credit card or Apple Pay.</li>
              <li>App walks you through installing the eSIM (2 minutes).</li>
              <li>Enable mobile data on the eSIM ONLY — disable your US carrier\'s data while traveling.</li>
              <li>You keep your US phone number for texts/calls (over Wi-Fi). Data uses Airalo.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Compare to your US carrier\'s plan</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>T-Mobile Magenta/Go5G</strong> — free 5G data in 215+ countries (slow). Worth not paying anything extra. Top tiers include faster speeds.</li>
              <li><strong>AT&T International Day Pass</strong> — $12/day for your usual plan. Quick trips: convenient. Long trips: very expensive.</li>
              <li><strong>Verizon TravelPass</strong> — $10/day. Same idea.</li>
              <li><strong>Google Fi</strong> — same plan, same price, same data overseas. Best for frequent international travelers.</li>
            </ul>
            <p className="text-sm mt-2 bg-muted/50 p-3 rounded"><strong>Math:</strong> 7-day trip on AT&T Day Pass = $84. Same trip on Airalo = $5-15. Airalo wins for any trip longer than 1-2 days.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stay phone-bill-safe</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Before flying — Settings → Cellular → "Cellular Data" OFF for your US line.</li>
              <li>Settings → Cellular → Data Roaming OFF on US line.</li>
              <li>iMessage and FaceTime work over Wi-Fi anywhere — free.</li>
              <li>Use airport / hotel / cafe Wi-Fi when you can.</li>
              <li>Download Google Maps offline of your destination BEFORE you fly.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Old-fashioned alternative</h3>
            <p className="text-sm text-muted-foreground">Buy a local prepaid SIM at the airport in your destination. About $10-30, often unlimited. Works on phones older than 2020 that don\'t support eSIM. Major airports always have a stand selling them.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
