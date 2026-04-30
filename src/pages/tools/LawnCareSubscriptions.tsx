import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Trees } from 'lucide-react';

export default function LawnCareSubscriptions() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Lawn Care Subscription Apps for Seniors | TekSure" description="TruGreen, Sunday Lawn Care, Greenix lawn care services for senior homeowners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Trees className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Lawn Care</h1>
          <p className="text-lg text-muted-foreground">Outsource yard work.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">TruGreen</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Largest lawn treatment company.</li>
              <li>Fertilizer + weed treatment.</li>
              <li>Annual contract typical.</li>
              <li>$400-$1,200/year depending on lawn.</li>
              <li>Doesn&apos;t mow — only treats.</li>
              <li>Treatments 6-7x/year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sunday Lawn Care</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>DIY lawn treatment subscription.</li>
              <li>Custom treatments shipped to you.</li>
              <li>Apply yourself.</li>
              <li>$80-$250/year.</li>
              <li>Cheaper than TruGreen.</li>
              <li>Slightly more work.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Local lawn mowing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Find via Thumbtack, GreenPal app.</li>
              <li>Or local Facebook groups.</li>
              <li>$30-$50 per mow typical.</li>
              <li>Weekly during growing season.</li>
              <li>Negotiate package deals.</li>
              <li>Often better than national chains.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Snow removal</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pre-pay for season — save money.</li>
              <li>$300-$800/season typical.</li>
              <li>Driveway + walkway clearing.</li>
              <li>Some include salt/sand.</li>
              <li>Critical for senior safety.</li>
              <li>Book before snow flies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tree work</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t DIY ladder work as senior.</li>
              <li>Hire certified arborist.</li>
              <li>Verify insurance.</li>
              <li>$300-$2,000 per tree typical.</li>
              <li>Multiple quotes.</li>
              <li>Risk of falls + injury too high.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior + lawn safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heat exhaustion risk.</li>
              <li>Slips on wet grass.</li>
              <li>Riding mower safer than push.</li>
              <li>Hire help if mowing tiring.</li>
              <li>Fall prevention worth more than savings.</li>
              <li>Outsourcing increasingly worth it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Outsource yard work without guilt</h3>
            <p className="text-sm text-muted-foreground">Many senior men struggle with hiring lawn care — they&apos;ve always done it themselves. But fall risk, heat exhaustion, and physical strain make it unsafe. $30-$50/mow is tiny compared to ER visit. Hiring lawn care frees you for activities you actually enjoy. Smart use of retirement.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
