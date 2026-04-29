import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

export default function GreenBurialOptions() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Green Burial Options for Seniors | TekSure" description="Eco-friendly burial alternatives. Plain-English green burial guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Green Burial Options</h1>
          <p className="text-lg text-muted-foreground">Return to earth naturally. Cheaper too.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Green burial</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NO embalming.</li>
              <li>Biodegradable casket (cardboard, wood, shroud).</li>
              <li>Direct return to earth.</li>
              <li>$1,500-3,500 vs $7K-15K traditional.</li>
              <li>Conservation cemeteries.</li>
              <li>Many religious traditions support.</li>
              <li>Increasing popularity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cremation options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Direct cremation</strong> — $500-2,000. Cheapest.</li>
              <li><strong>Aquamation (water cremation)</strong> — $2,500-3,500. More eco-friendly.</li>
              <li><strong>Human composting</strong> — newer, available some states.</li>
              <li>Body becomes soil — return to earth.</li>
              <li>$5,000-7,000.</li>
              <li>Recompose, Earth Funeral lead.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find green burial</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Green Burial Council</strong> — greenburialcouncil.org.</li>
              <li>Find certified providers.</li>
              <li>200+ green cemeteries USA.</li>
              <li>Many traditional cemeteries adding green sections.</li>
              <li>Funeral homes can arrange.</li>
              <li>Plan ahead — write wishes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why green</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No toxic embalming chemicals.</li>
              <li>Conservation land protected.</li>
              <li>Cheaper.</li>
              <li>Returns nutrients to soil.</li>
              <li>Tree planted memorial.</li>
              <li>Less concrete, metal.</li>
              <li>Simpler ceremony.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Veteran burial</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>National cemeteries — free for veterans.</li>
              <li>Includes spouse.</li>
              <li>See /tools/national-cemetery-burial.</li>
              <li>Most are traditional but some natural sections.</li>
              <li>Apply pre-need.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save with planning</h3>
            <p className="text-sm text-muted-foreground">Pre-plan funeral = save $5K-10K vs grieving family decisions. Write wishes. Tell family. Pre-pay if want (with reputable funeral home). Don&apos;t over-pay for traditional if don&apos;t want. Many seniors find green burial deeply meaningful.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
