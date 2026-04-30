import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function ContactLensOnlineSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Buying Contact Lenses Online for Seniors | TekSure" description="Save money on contacts. 1-800 Contacts, ContactsDirect, and Costco compared." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Contacts Online</h1>
          <p className="text-lg text-muted-foreground">Save 30-50% versus the eye doctor.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why buy online?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Federal law requires doctors give you prescription.</li>
              <li>You can shop anywhere with that prescription.</li>
              <li>Online prices 30–50% cheaper than office.</li>
              <li>Free shipping on most orders.</li>
              <li>Same brands, same lenses.</li>
              <li>Auto-reorder available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">1-800 Contacts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Largest contact lens retailer.</li>
              <li>Price-match guarantee.</li>
              <li>Free shipping on all orders.</li>
              <li>24/7 phone customer service.</li>
              <li>Verifies prescription with your doctor.</li>
              <li>Best for first-time online buyers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cheaper alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>ContactsDirect — usually cheapest, owned by Luxottica.</li>
              <li>Lens.com — bargain prices, slower shipping.</li>
              <li>DiscountContactLenses.com — competitive pricing.</li>
              <li>Costco Contact Lenses — great prices for members.</li>
              <li>Walmart Contacts Direct — also affordable.</li>
              <li>Compare totals after shipping.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance + savings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>VSP, EyeMed often work with online retailers.</li>
              <li>FSA + HSA dollars eligible.</li>
              <li>Bulk year supply often cheapest per box.</li>
              <li>Manufacturer rebates — Acuvue, Bausch+Lomb often offer.</li>
              <li>Stack rebate + insurance for max savings.</li>
              <li>Sometimes save $200+/year switching to online.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Multifocal contacts (presbyopia)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many seniors switch to multifocal contacts.</li>
              <li>See close + far without reading glasses.</li>
              <li>Acuvue Oasys Multifocal popular.</li>
              <li>Alcon Total30 Multifocal.</li>
              <li>Cost more than single-vision.</li>
              <li>Online savings still apply.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior care tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Daily disposables — easier than monthly cleaning.</li>
              <li>Wash hands before handling.</li>
              <li>Don&apos;t sleep in unless approved by doctor.</li>
              <li>Replace cases monthly.</li>
              <li>Annual eye exam still required.</li>
              <li>Some seniors switch back to glasses for comfort.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Annual order saves the most</h3>
            <p className="text-sm text-muted-foreground">Buy a full year supply at once from 1-800 Contacts or ContactsDirect. After insurance and rebate, you&apos;ll often pay 30–40% less than buying through your eye doctor. Free shipping. The boxes don&apos;t expire fast — most contacts good for 4+ years unopened. Set a calendar reminder for annual eye exam to renew prescription.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
