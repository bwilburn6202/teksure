import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CarTaxiFront } from 'lucide-react';

export default function CarRentalSeniorTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Car Rental Tips for Seniors | TekSure" description="Save on rental cars + skip insurance scams. Plain-English guide for senior renters." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CarTaxiFront className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Car Rental Tips</h1>
          <p className="text-lg text-muted-foreground">Save 30-50% + avoid insurance traps.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior discounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AARP</strong> — 5-30% off Hertz, Avis, Budget.</li>
              <li><strong>AAA</strong> — discount + insurance benefits.</li>
              <li><strong>Costco Travel</strong> — often best price + free additional driver.</li>
              <li><strong>Senior Pass (62+)</strong> — Avis, Budget often have.</li>
              <li>Compare 3+ sites: Costco, AutoSlash, Kayak.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save more</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Book early — prices rise as date approaches.</li>
              <li>Check rate every few days — cancel + rebook if drops.</li>
              <li>Off-airport often 30% cheaper.</li>
              <li>Pickup from city, return at airport (or vice versa).</li>
              <li>Avoid 1-day rentals — multi-day cheaper per day.</li>
              <li>AutoSlash.com auto-monitors price drops.</li>
              <li>Book through credit card portal — often discount + insurance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Skip THESE add-ons (usually)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Liability insurance</strong> — your auto insurance + credit card cover.</li>
              <li><strong>CDW (collision damage waiver)</strong> — good credit cards include free.</li>
              <li><strong>Roadside</strong> — AAA covers most.</li>
              <li><strong>Pre-paid gas</strong> — overpriced.</li>
              <li><strong>GPS</strong> — use phone.</li>
              <li><strong>Toll pass</strong> — often $4-15/day if you have own pass.</li>
              <li>Decline politely — they push hard.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Credit card insurance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Chase Sapphire Preferred</strong> — primary CDW. Excellent.</li>
              <li><strong>Capital One Venture X</strong> — primary CDW.</li>
              <li><strong>Most Visa Signature</strong> — secondary CDW.</li>
              <li><strong>Costco Visa</strong> — secondary.</li>
              <li>Check your card&apos;s benefits guide.</li>
              <li>Pay full rental on that card.</li>
              <li>Decline rental company CDW.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">At pickup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Walk around car BEFORE driving — photo every angle.</li>
              <li>Note existing damage on contract.</li>
              <li>Check fuel gauge.</li>
              <li>Test wipers, brakes, headlights.</li>
              <li>Ensure spare tire/jack.</li>
              <li>Adjust mirrors + seat before pulling out.</li>
              <li>Take photos at return too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior age limits</h3>
            <p className="text-sm text-muted-foreground">Most US rental companies have NO upper age limit (some Canada/Europe do). Bring valid driver&apos;s license + same-name credit card. Most accept 18+. International rentals — bring International Driver&apos;s Permit ($20 from AAA).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
