import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function LifelineInternetCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Lifeline Internet & Phone for Seniors | TekSure" description="Federal Lifeline program — phone or internet at $9.25/month for low-income households. Many seniors qualify and don&apos;t know it." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Lifeline Internet & Phone</h1>
          <p className="text-lg text-muted-foreground">$9.25/month phone OR internet for low-income households.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What Lifeline is</h2>
            <p className="text-sm">A federal program that gives a $9.25/month discount on EITHER phone OR home internet (one per household). Tribal lands get $34.25/month off. Has been around since 1985 — still many people don\'t know.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Who qualifies (any of these)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Income at or below 135% of federal poverty (about $20,331/year single, $27,594 couple).</li>
              <li>Receive SNAP (food stamps).</li>
              <li>Receive Medicaid.</li>
              <li>Receive SSI (Supplemental Security Income).</li>
              <li>Receive Federal Public Housing Assistance.</li>
              <li>Receive Veterans Pension or Survivors Benefit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to apply</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>lifelinesupport.org</strong>.</li>
              <li>Click "Get Started" and verify eligibility.</li>
              <li>Pick a participating provider:
                <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                  <li>SafeLink Wireless (free smartphone + service in many states).</li>
                  <li>Q Link Wireless.</li>
                  <li>Assurance Wireless.</li>
                  <li>Comcast Internet Essentials ($9.95/month + 1.2 GB gateway).</li>
                  <li>Spectrum Internet Assist.</li>
                  <li>AT&T Access from AT&T.</li>
                  <li>Cox Connect2Compete.</li>
                </ul>
              </li>
              <li>Provider applies discount monthly.</li>
              <li>Recertify yearly (they remind you).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free smartphone option</h2>
            <p className="text-sm">SafeLink, Q Link, and Assurance offer a free smartphone PLUS service. Limited monthly minutes/data ($35-40/month value), but FREE if you qualify. Great for seniors on tight budgets.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other internet help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Comcast Internet Essentials</strong> — $10/month. Available in most US areas. Includes Wi-Fi modem.</li>
              <li><strong>Spectrum Internet Assist</strong> — $20/month. 50 Mbps.</li>
              <li><strong>AT&T Access from AT&T</strong> — $5-30/month based on speed.</li>
              <li><strong>EveryoneOn.org</strong> — find more low-cost providers by zip code.</li>
              <li><strong>Cricket / Mint Mobile</strong> — $15-30/month plans for those who don\'t qualify for Lifeline.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help applying</h3>
            <p className="text-sm text-muted-foreground">Your local <strong>Area Agency on Aging</strong> (call Eldercare Locator, 1-800-677-1116) or <strong>211</strong> can help apply for Lifeline. They know the participating providers in your area and walk you through forms.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
