import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function LIHEAPGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="LIHEAP Energy Help for Seniors | TekSure" description="Free utility bill help for income-eligible seniors. Plain-English LIHEAP guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">LIHEAP Energy Help</h1>
          <p className="text-lg text-muted-foreground">$300-1,500 toward utility bills.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What LIHEAP is</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Low Income Home Energy Assistance Program.</li>
              <li>Federal funding, state-run.</li>
              <li>Helps pay heat + electric bills.</li>
              <li>Especially seniors + disabled (priority).</li>
              <li>Crisis assistance for shutoffs.</li>
              <li>Once a year benefit usually.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Eligibility</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Income up to 150% of poverty (~$23,500/year individual 2026).</li>
              <li>Some states 200% (~$31K/yr).</li>
              <li>Renters AND owners eligible.</li>
              <li>Even if utilities included in rent.</li>
              <li>Senior priority — apply first.</li>
              <li>Apply early — funds run out.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How much you get</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$300-1,500/year typical.</li>
              <li>Higher in cold-winter states.</li>
              <li>Crisis grant: $400-800 emergency for shutoff.</li>
              <li>Paid directly to utility company.</li>
              <li>One-time per year (some states 2x).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apply</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Find state office at acl.gov/programs/older-adults/LIHEAP-and-related.</li>
              <li>Or 1-866-674-6327.</li>
              <li>Bring: ID, SS#, recent utility bill, income proof.</li>
              <li>Apply by phone, online, or in person.</li>
              <li>Apply NOVEMBER — open enrollment.</li>
              <li>Funds run out — apply early in season.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Weatherization Assistance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FREE home weatherization (insulation, heating, etc.).</li>
              <li>Same income limits as LIHEAP.</li>
              <li>$8,000+ home improvements free.</li>
              <li>Reduces bills 25%+.</li>
              <li>Apply with LIHEAP — usually same office.</li>
              <li>Water heater + furnace replacement included.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Utility company programs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most utilities have senior + low-income discounts.</li>
              <li>&quot;CARE program&quot; in California.</li>
              <li>&quot;LiHEAP&quot; in many other states (state-funded supplement).</li>
              <li>Budget billing — same amount each month, easier budgeting.</li>
              <li>Senior discount programs — call utility company.</li>
              <li>Energy audit — free from utility, finds savings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save more on bills</h3>
            <p className="text-sm text-muted-foreground"><strong>Smart thermostat</strong> — $150 saves $200/yr. <strong>LED bulbs</strong> — pay back in months. <strong>Insulate water heater</strong> — $30 wrap saves $50/yr. <strong>Caulk windows + doors</strong> — $20 saves $100/yr. <strong>Energy Star appliances</strong> when replacing. Combine LIHEAP + savings = lower bills.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
