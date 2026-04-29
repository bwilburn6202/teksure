import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function SeniorRentalCarDeals() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Rental Car Deals | TekSure" description="Save 30% on rental cars. Plain-English senior rental tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Rental Car Deals</h1>
          <p className="text-lg text-muted-foreground">Save big with right approach.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior + AAA + AARP discounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hertz</strong> — 50+: 10-20% AAA, AARP.</li>
              <li><strong>Avis</strong> — 50+: 30% via AARP.</li>
              <li><strong>Budget</strong> — 50+: 25% via AARP.</li>
              <li><strong>Enterprise</strong> — 55+: 5-10%.</li>
              <li><strong>Costco Travel</strong> — often best total + free additional driver.</li>
              <li>Compare 3 before booking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save more</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Off-airport pickup 30% cheaper.</li>
              <li>Auto-Slash.com — auto-monitor + rebook lower.</li>
              <li>1-week rate often less than 5-day.</li>
              <li>Pickup Tuesday cheapest.</li>
              <li>Same-day apps for last-minute.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Skip these add-ons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Liability — your insurance covers usually.</li>
              <li>CDW — premium credit cards include FREE.</li>
              <li>Pre-paid gas — overpriced.</li>
              <li>GPS — phone better.</li>
              <li>Roadside — AAA covers.</li>
              <li>Decline politely — they push hard.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Credit card protection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Chase Sapphire Preferred</strong> — primary CDW.</li>
              <li><strong>Capital One Venture X</strong> — primary CDW.</li>
              <li><strong>Most Visa Signature</strong> — secondary.</li>
              <li>Pay full rental on that card.</li>
              <li>Decline rental company CDW.</li>
              <li>Saves $20-30/day.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly cars</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mid-size easier than compact.</li>
              <li>Backup camera (most modern have).</li>
              <li>Higher seats — easier in/out.</li>
              <li>SUVs harder for some seniors.</li>
              <li>Check pickup — opt for newer model.</li>
              <li>Take walk-around photos before drive.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior age limits</h3>
            <p className="text-sm text-muted-foreground">Most US rental companies have NO upper age limit. Some Canada/Europe do. Bring valid driver&apos;s license + same-name credit card. International — bring International Driving Permit ($20 from AAA).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
