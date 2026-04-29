import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Thermometer } from 'lucide-react';

export default function HeatPumpForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Heat Pump for Seniors | TekSure" description="Replace HVAC + save. Plain-English heat pump guide for senior homes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Thermometer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Heat Pump for Seniors</h1>
          <p className="text-lg text-muted-foreground">Heat + cool with one system. Federal credits.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What heat pump is</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heating + cooling in ONE system.</li>
              <li>Replaces furnace + AC.</li>
              <li>Electric only — no fossil fuel.</li>
              <li>3x more efficient than furnace.</li>
              <li>Modern ones work even sub-zero.</li>
              <li>Bills 30-50% lower.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Federal tax credits 2026</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$2,000 federal tax credit.</li>
              <li>Up to $8,000 rebates (state/income-based).</li>
              <li>Plus utility rebates often $500-3,000.</li>
              <li>Inflation Reduction Act incentives.</li>
              <li>Net cost may be HALF.</li>
              <li>Apply at install.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$8,000-25,000 typical install.</li>
              <li>After rebates: $4,000-15,000.</li>
              <li>Lasts 15-20 years.</li>
              <li>Saves $500-1,500/yr energy.</li>
              <li>Payback 5-10 years usually.</li>
              <li>Replace when furnace dying.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mini-split option</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Ductless mini-split.</li>
              <li>Just one room or whole house.</li>
              <li>$3K-15K install.</li>
              <li>Easier install (no ducts).</li>
              <li>Great for additions, sun rooms.</li>
              <li>Or supplemental cooling/heating.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When best</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Replacing both AC + furnace.</li>
              <li>Mild climates (Zone 1-3 best).</li>
              <li>High electric efficiency.</li>
              <li>Solar panels = even better.</li>
              <li>Eco-conscious.</li>
              <li>Long-term homeowner.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Find installer</h3>
            <p className="text-sm text-muted-foreground"><strong>Energy Star Quality Installation</strong> certified. Get 3+ quotes — $5K+ variation common. Avoid pushy salespeople. Many state energy offices have approved installer lists. <strong>Rewiring America</strong> — rewiringamerica.org. Free guides + local programs.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
