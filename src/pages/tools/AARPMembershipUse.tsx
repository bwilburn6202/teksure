import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function AARPMembershipUse() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AARP Membership for Seniors | TekSure" description="Use AARP's $16/yr membership fully. Plain-English benefits guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Star className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AARP Membership</h1>
          <p className="text-lg text-muted-foreground">$16/yr. Saves $$$ + advocates seniors.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Basic membership = $16/yr</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Age 50+ to join.</li>
              <li>5-year membership $63.</li>
              <li>Couple — both members for one fee.</li>
              <li>Benefits + AARP Magazine.</li>
              <li>Advocacy on senior issues.</li>
              <li>Pays back FAST.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Travel discounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hotels — Marriott, Best Western, Wyndham 10%.</li>
              <li>Rental cars — Avis, Budget 30%.</li>
              <li>Cruises — Norwegian Cruise Line.</li>
              <li>Restaurants — Denny&apos;s, IHOP, Outback.</li>
              <li>Theme parks.</li>
              <li>Travel insurance.</li>
              <li>Use code on AARP website.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free senior services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tax-Aide</strong> — free tax help February-April.</li>
              <li><strong>Driver Safety Course</strong> — discount auto insurance.</li>
              <li><strong>Smart Driver</strong> course $25.</li>
              <li><strong>Fraud Watch helpline</strong> — 1-877-908-3360. Free.</li>
              <li><strong>AARP Magazine</strong> 6x/year.</li>
              <li><strong>AARP Bulletin</strong> 10x/year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance through AARP</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Auto, home — Hartford.</li>
              <li>Medicare Supplement — UnitedHealthcare.</li>
              <li>Life insurance — New York Life.</li>
              <li>Dental — Delta Dental.</li>
              <li>Compare to other options.</li>
              <li>Sometimes good rates, sometimes not.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Caregiver tools</strong> — free.</li>
              <li><strong>Job board</strong> — older worker focused.</li>
              <li><strong>Money management</strong>.</li>
              <li><strong>Health calculators</strong>.</li>
              <li><strong>Senior Planet</strong> — free tech classes.</li>
              <li><strong>Movies for Grownups</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Worth $16/yr?</h3>
            <p className="text-sm text-muted-foreground">Definitely. Saves on hotels alone in 1-2 trips. Tax-Aide saves CPA fees. Magazine entertaining. Senior advocacy meaningful. Most seniors join 50+. Easily worth $16. Renew when reminded.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
