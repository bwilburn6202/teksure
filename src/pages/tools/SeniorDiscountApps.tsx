import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tags } from 'lucide-react';

export default function SeniorDiscountApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Discount Apps & Programs — Save Hundreds Yearly | TekSure" description="AARP, Sciddy, GoodRx, restaurant senior nights, free museum days. Plain-English guide to discounts most seniors miss." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tags className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Discount Apps</h1>
          <p className="text-lg text-muted-foreground">Discounts most people don't know about.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">💳 The big membership programs</h2>
            <ul className="space-y-3 text-sm">
              <li><strong>AARP ($16/year)</strong> — open to anyone 50+. Offers savings on car rentals (Avis, Budget), hotels (Best Western, Hilton, Hyatt), restaurants (Outback, Denny's), insurance, glasses, and more. Pays for itself in one good vacation.</li>
              <li><strong>AAA</strong> — roadside assistance plus surprisingly good travel and shopping discounts.</li>
              <li><strong>Costco / Sam's Club</strong> — beyond bulk groceries, member-only travel, gas, optical, tires.</li>
              <li><strong>Sciddy app (free)</strong> — searchable database of senior discounts at restaurants and stores by zip code.</li>
              <li><strong>Senior Discounts US (free)</strong> — similar, sometimes more local listings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">💊 Prescription savings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>GoodRx (free app)</strong> — show your phone at the pharmacy. Often beats your insurance copay. Saves seniors hundreds per year.</li>
              <li><strong>Mark Cuban Cost Plus Drug Co (costplusdrugs.com)</strong> — generic prescriptions at cost + 15%. Often dramatically cheaper.</li>
              <li><strong>Amazon Pharmacy</strong> — for Prime members, often discounted, delivered.</li>
              <li><strong>SingleCare app</strong> — competing app; sometimes beats GoodRx. Worth comparing.</li>
              <li><strong>Manufacturer coupons</strong> — for brand-name drugs, search "[drug name] coupon" — often $0-$25 with a coupon for those without insurance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🍽️ Restaurant senior days/nights</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>IHOP</strong> — 55+ menu, 10% off, free coffee.</li>
              <li><strong>Denny's</strong> — 55+ menu items, AARP discount.</li>
              <li><strong>Wendy's, Burger King, McDonald's</strong> — senior coffee discount at most locations.</li>
              <li><strong>Cracker Barrel</strong> — 50+ menu with reduced portions.</li>
              <li><strong>Chick-fil-A</strong> — many locations offer free drinks for seniors (varies by store).</li>
              <li><strong>Subway, Arby's, Sonic</strong> — 10% senior discount at most.</li>
            </ul>
            <p className="text-sm mt-2 text-muted-foreground">Always ask — many discounts aren't advertised but the cashier will apply them.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🏛️ Free or discounted entertainment</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>America the Beautiful Senior Pass</strong> — $80 lifetime, gets you and 3 adults into all 2,000+ federal recreation sites (national parks, monuments). Best deal in the US for travelers.</li>
              <li><strong>Museum free days</strong> — most major museums have one free day per month. Check their website.</li>
              <li><strong>Smithsonian</strong> — always free.</li>
              <li><strong>State parks</strong> — most states offer reduced or free senior entry passes.</li>
              <li><strong>Movie theaters</strong> — AMC, Regal, Cinemark all have $7-9 senior pricing on weekday matinees.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🛒 Shopping savings</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Kohl's</strong> — 15% off for 60+ on Wednesdays.</li>
              <li><strong>Ross Dress for Less</strong> — 10% off Tuesdays for 55+.</li>
              <li><strong>Goodwill</strong> — 10-25% off senior days vary by location.</li>
              <li><strong>Walgreens</strong> — Seniors Day (first Tuesday): 20% off many items for 55+.</li>
              <li><strong>Honey browser extension (free)</strong> — auto-applies the best coupon code at checkout on most online shopping sites.</li>
              <li><strong>Rakuten (free)</strong> — get cash back when you shop online through their site.</li>
              <li><strong>Capital One Shopping (free)</strong> — similar to Honey, automatic coupon hunter.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Just ASK</h3>
            <p className="text-sm text-muted-foreground">Many businesses offer senior discounts but don't advertise them. At the cash register, just ask: "Do you have a senior discount?" Restaurants, hotels, airlines, hair salons — about 1 in 3 gives you something. Worst case, they say no.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
