import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function MedicalGuardianReview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medical Guardian Review for Seniors | TekSure" description="Top-rated medical alert system reviewed for senior safety." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medical Guardian</h1>
          <p className="text-lg text-muted-foreground">Top-rated medical alert. Multiple options.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Medical Guardian?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Top-rated by Forbes, U.S. News.</li>
              <li>24/7 US-based monitoring.</li>
              <li>Multiple device options.</li>
              <li>No long-term contracts.</li>
              <li>Free shipping + activation.</li>
              <li>30-day money-back guarantee.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Plans</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Classic Guardian — $30/mo, in-home only.</li>
              <li>Home 2.0 — $35/mo, larger range.</li>
              <li>Mobile 2.0 — $40/mo, GPS + 4G.</li>
              <li>Mini Guardian — $40/mo, smallest device.</li>
              <li>MGmove — $40/mo, smartwatch style.</li>
              <li>Spouse monitoring — $4/mo extra.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fall detection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$10/month add-on.</li>
              <li>Detects hard falls automatically.</li>
              <li>Alerts monitoring center.</li>
              <li>For people who might be unconscious.</li>
              <li>Worth it for fall-prone seniors.</li>
              <li>Some plans include free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Top alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Life Alert — most known but expensive.</li>
              <li>Bay Alarm Medical — competitive prices.</li>
              <li>Philips Lifeline — established + reliable.</li>
              <li>MobileHelp — strong mobile options.</li>
              <li>Aloe Care — caregiver app integration.</li>
              <li>Apple Watch SOS as alternative.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Watch alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>One-time cost $249–$799.</li>
              <li>Plus $10/month cellular.</li>
              <li>Fall detection built in.</li>
              <li>SOS button + auto 911 calls.</li>
              <li>No monitoring fee.</li>
              <li>For tech-comfortable seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Who needs medical alert?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Living alone.</li>
              <li>History of falls.</li>
              <li>Cognitive decline beginning.</li>
              <li>Significant heart or other conditions.</li>
              <li>Family far away.</li>
              <li>Peace of mind for adult children.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Apple Watch may replace pendants</h3>
            <p className="text-sm text-muted-foreground">For tech-friendly seniors, an Apple Watch SE with cellular ($309 + $10/month) provides fall detection + emergency SOS at the same level as professional medical alerts. Plus all the smartwatch features. For seniors who don&apos;t want technology, traditional pendant from Medical Guardian ($30–$40/month) works better. Both save lives.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
