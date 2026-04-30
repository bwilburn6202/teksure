import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bed } from 'lucide-react';

export default function HotelDealForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hotel Deals for Seniors | TekSure" description="Save 20-50% on hotels. Plain-English senior hotel discount guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bed className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hotel Deals</h1>
          <p className="text-lg text-muted-foreground">Senior discounts. Loyalty programs. Save big.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior discount chains</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Choice Hotels</strong> (Comfort Inn, Quality Inn) — 60+: 10%.</li>
              <li><strong>Marriott</strong> — 62+: up to 15%.</li>
              <li><strong>Hilton</strong> — 65+: 5-10%.</li>
              <li><strong>Best Western</strong> — 55+: 10%.</li>
              <li><strong>Wyndham</strong> — 60+: up to 10%.</li>
              <li>Ask at booking + check-in.</li>
              <li>Don&apos;t auto-apply — must request.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save more</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AAA</strong> rate — usually 10%.</li>
              <li><strong>AARP</strong> rate — usually 10%.</li>
              <li><strong>Costco Travel</strong> — bundles often best.</li>
              <li><strong>Loyalty programs</strong> — free nights add up.</li>
              <li>Compare 3 sites: hotel direct, Booking, Costco.</li>
              <li>Hotwire / Priceline mystery deals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Loyalty programs (FREE)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Marriott Bonvoy</strong>.</li>
              <li><strong>Hilton Honors</strong>.</li>
              <li><strong>IHG One Rewards</strong> (Holiday Inn).</li>
              <li><strong>Choice Privileges</strong>.</li>
              <li>Sign up FREE.</li>
              <li>Earn points = free nights.</li>
              <li>Status benefits at higher levels.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best booking strategies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Book DIRECT with hotel — best rates often.</li>
              <li>Sign up for hotel email — discounts coming.</li>
              <li>Best price match guarantee — show competitor cheaper.</li>
              <li>Last-minute apps — Hotel Tonight.</li>
              <li>Off-season cheaper.</li>
              <li>Mid-week cheaper than weekends.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly hotels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Ground floor / accessible rooms.</li>
              <li>Walk-in showers.</li>
              <li>Grab bars.</li>
              <li>Elevator.</li>
              <li>Quiet rooms (away from elevator/ice).</li>
              <li>Free breakfast (Hampton Inn, Drury, Holiday Inn Express).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Premium card lounges</h3>
            <p className="text-sm text-muted-foreground">Chase Sapphire Preferred + Reserve = travel insurance, lounge access. American Express Gold + Platinum more lounges. See /tools/chase-sapphire-explain. Travel cards essential for frequent travelers.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
