import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function HouseCleaningServiceApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="House Cleaning Service Apps for Seniors | TekSure" description="Hire house cleaners through Handy, Molly Maid, Tidy. Senior cleaning service guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">House Cleaning</h1>
          <p className="text-lg text-muted-foreground">Hire help when needed.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Major chains</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Molly Maid — established + bonded.</li>
              <li>Merry Maids — long-time chain.</li>
              <li>The Cleaning Authority.</li>
              <li>Two Maids + a Mop.</li>
              <li>Local family-owned services often comparable.</li>
              <li>Costs $100-$200 per visit typical.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">App-based services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Handy — book cleaning + handyman.</li>
              <li>Tidy — recurring + one-time.</li>
              <li>Bookable in app.</li>
              <li>Ratings + reviews visible.</li>
              <li>Often slightly cheaper than chains.</li>
              <li>Background-checked.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Frequency</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Weekly — best for working seniors or large homes.</li>
              <li>Bi-weekly — most popular.</li>
              <li>Monthly — light maintenance.</li>
              <li>Deep clean quarterly.</li>
              <li>Move-in/out cleans available.</li>
              <li>Pick what fits your budget + needs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior considerations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Same cleaner each visit ideal.</li>
              <li>Builds trust + familiarity.</li>
              <li>Walk through preferences first time.</li>
              <li>Tip 15-20% if happy.</li>
              <li>Watch for valuables in plain sight.</li>
              <li>Lock medications, jewelry.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost-saving alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local Facebook groups — moms cleaning.</li>
              <li>Community college students.</li>
              <li>Friends of friends — referrals.</li>
              <li>Independent cleaners often cheaper than chains.</li>
              <li>$25-$30/hour reasonable.</li>
              <li>Cash payment often preferred.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance + tax</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Verify cleaner has insurance.</li>
              <li>Personal injury liability covered.</li>
              <li>If hire individual — they&apos;re your employee.</li>
              <li>1099 form if pay $600+/year.</li>
              <li>Use service to avoid tax complexity.</li>
              <li>Worth slight premium.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Bi-weekly service is sweet spot</h3>
            <p className="text-sm text-muted-foreground">For most senior homes, bi-weekly cleaning at $120-$180 strikes a good balance. House stays clean without breaking bank. Same cleaner each visit best — develops trust and routine. Many seniors say hiring help with cleaning is one of best quality-of-life upgrades. Reduces physical strain, gives you cleaner home.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
