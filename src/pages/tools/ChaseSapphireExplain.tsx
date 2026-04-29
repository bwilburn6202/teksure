import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function ChaseSapphireExplain() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chase Sapphire Explained for Seniors | TekSure" description="Travel rewards card. Plain-English Chase Sapphire guide for senior travelers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chase Sapphire</h1>
          <p className="text-lg text-muted-foreground">Best travel card for seniors who travel.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Two versions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Sapphire Preferred</strong> — $95/yr. Travel + dining bonuses.</li>
              <li><strong>Sapphire Reserve</strong> — $550/yr. Premium travel benefits.</li>
              <li>Most seniors fine with Preferred.</li>
              <li>Reserve worth it if traveling 3+ trips/yr.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sapphire Preferred ($95/yr)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>5X points on travel via Chase portal.</li>
              <li>3X dining + groceries.</li>
              <li>2X all travel.</li>
              <li>Sign-up bonus often 75-100K points = $1,000+ travel.</li>
              <li>Primary rental car insurance.</li>
              <li>Trip cancellation insurance.</li>
              <li>Worth annual fee for travelers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sapphire Reserve ($550/yr)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$300 travel credit yearly = effective $250.</li>
              <li>Priority Pass airport lounge access ($550 value).</li>
              <li>Global Entry / TSA PreCheck reimbursement.</li>
              <li>10X hotels + cars via portal.</li>
              <li>Excellent travel insurance.</li>
              <li>Worth it for frequent travelers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior travel benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>TSA PreCheck reimbursement = $78 saved.</li>
              <li>Trip cancellation if illness.</li>
              <li>Lost luggage reimbursement.</li>
              <li>Auto rental insurance — skip rental insurance.</li>
              <li>Foreign transaction fees waived.</li>
              <li>24/7 concierge service.</li>
              <li>Travel emergency assistance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Should seniors get one?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>YES</strong> if 1+ trip/year.</li>
              <li><strong>YES</strong> if dining out frequently.</li>
              <li><strong>YES</strong> if hate carrying multiple cards.</li>
              <li><strong>NO</strong> if don&apos;t travel.</li>
              <li><strong>NO</strong> if minimum spend hard.</li>
              <li>Compare to free Costco/Discover for non-travelers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Hawaii / Europe trip</h3>
            <p className="text-sm text-muted-foreground">Sign up for Sapphire Preferred — hit 75K bonus + earn through everyday spend = 100K+ points = enough for round-trip Hawaii or Europe flights. Many seniors get free trips this way. Pair with Chase Freedom Unlimited for points on EVERYTHING.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
