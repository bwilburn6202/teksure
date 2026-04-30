import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function SeniorAirfareDeals() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Airfare Deals | TekSure" description="Save on flights. Plain-English airfare guide for senior travelers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Airfare</h1>
          <p className="text-lg text-muted-foreground">Cheaper flights with patience + tools.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best price tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Google Flights</strong> — best for searching.</li>
              <li><strong>Skyscanner</strong> — international comparison.</li>
              <li><strong>Hopper app</strong> — predicts price drops.</li>
              <li><strong>Going (formerly Scott&apos;s Cheap Flights)</strong> — $50/yr deal alerts.</li>
              <li><strong>Costco Travel</strong> — bundle deals.</li>
              <li>Compare 3+ before booking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior airline discounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Most airlines</strong> dropped formal senior discounts.</li>
              <li><strong>Southwest</strong> — &quot;senior fares&quot; available 65+.</li>
              <li><strong>British Airways</strong> — sometimes 65+ rates.</li>
              <li>AARP rates on Avis, Hertz rentals.</li>
              <li>AAA travel agent finds deals.</li>
              <li>Don&apos;t expect huge senior discounts on airfare.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Time it right</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Domestic — book 1-3 months ahead.</li>
              <li>International — 5-6 months ahead.</li>
              <li>Tuesday + Wednesday cheapest fly days.</li>
              <li>Avoid Sundays + Fridays.</li>
              <li>Off-season HUGE savings.</li>
              <li>Set fare alerts on Google Flights.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly travel</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>TSA PreCheck</strong> $78/5yr — keep shoes on, faster.</li>
              <li><strong>Wheelchair</strong> assistance FREE — see /tools/airport-wheelchair-help.</li>
              <li><strong>Aisle seat</strong> — bathroom access.</li>
              <li><strong>Direct flights</strong> — fewer transfers.</li>
              <li><strong>CLEAR</strong> — fastest line ($199/yr).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Travel cards = free flights</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sign-up bonuses 75K-100K points.</li>
              <li>Equivalent free domestic round-trip.</li>
              <li>Chase Sapphire Preferred best for travel.</li>
              <li>Capital One Venture Rewards.</li>
              <li>Smart sign-ups = 1-2 free trips/year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Travel insurance</h3>
            <p className="text-sm text-muted-foreground">For 65+ international = ESSENTIAL. Medicare doesn&apos;t cover overseas. $200-400/trip. Worth peace of mind. See /tools/travel-insurance-reality. Cover trip cancellation, medical, evacuation. Don&apos;t skip.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
