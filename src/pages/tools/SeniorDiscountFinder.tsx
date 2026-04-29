import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

export default function SeniorDiscountFinder() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Discounts Guide | TekSure" description="Best senior discounts on food, travel, entertainment, and more. Always ask." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Discounts</h1>
          <p className="text-lg text-muted-foreground">Ask and save. Hundreds of programs exist.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Restaurants</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Denny&apos;s — AARP members save 15%.</li>
              <li>McDonald&apos;s — free coffee at some locations.</li>
              <li>Burger King — 10% off for 60+.</li>
              <li>IHOP — 55+ menu available.</li>
              <li>Chili&apos;s — AARP discount available.</li>
              <li>Always ask — not always posted.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Travel discounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>America the Beautiful Pass — $20/year, all national parks.</li>
              <li>Amtrak — 15% off for 65+.</li>
              <li>Greyhound — 10% off for 62+.</li>
              <li>Airlines — vary, always ask senior rate.</li>
              <li>Marriott, Hilton — AARP rates available.</li>
              <li>AARP Travel Center — exclusive deals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Entertainment</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Movie theaters — most offer senior pricing.</li>
              <li>AMC, Regal, Cinemark — 60+ discounts select days.</li>
              <li>Museums — most offer free or reduced admission.</li>
              <li>National parks — America the Beautiful Senior Pass.</li>
              <li>State parks — many offer free or reduced entry.</li>
              <li>Performing arts — senior matinee rates.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Retail and services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Kohl&apos;s — senior discount day (Wednesday, 15% off).</li>
              <li>Goodwill — many stores 20-25% off certain days.</li>
              <li>Walgreens, CVS — AARP discounts available.</li>
              <li>AT&amp;T, T-Mobile — senior phone plans available.</li>
              <li>Great Clips — senior haircut discounts.</li>
              <li>Jiffy Lube — senior oil change discounts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tech and internet</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>T-Mobile Essentials 55+ Plan — $27.50/line.</li>
              <li>AT&amp;T Senior Nation Plan — call for pricing.</li>
              <li>Comcast Internet Essentials — low-income internet.</li>
              <li>Xfinity — ACP program discounts.</li>
              <li>Amazon Prime — free 30-day trial for all.</li>
              <li>Kindle Unlimited — $9.99 unlimited ebooks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to find discounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AARP.org/benefits — member discount database.</li>
              <li>SeniorDiscounts.com — searchable by city + category.</li>
              <li>Always ask at checkout: &quot;Do you offer a senior discount?&quot;</li>
              <li>Bring ID — some require proof of age 60+/62+/65+.</li>
              <li>Many discounts not advertised — just ask.</li>
              <li>Savings add up to hundreds per year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Always ask — no shame</h3>
            <p className="text-sm text-muted-foreground">Many seniors feel embarrassed to ask for a discount. Don&apos;t be — these programs exist because companies value senior customers. The worst they can say is no. The America the Beautiful Senior Pass ($20 lifetime, age 62+) alone saves hundreds if you visit national parks. If you haven&apos;t bought one, get it at any national park entrance today.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
