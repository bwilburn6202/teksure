import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Trees } from 'lucide-react';

export default function TreeCareWhenToCallPro() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tree Care: When to Call a Pro | TekSure" description="Hire arborists safely. Plain-English guide for senior tree care + storm damage." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Trees className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tree Care for Seniors</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t climb the ladder. Hire it out.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DEFINITELY hire pro for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>ANY work above 6 feet — falls kill seniors.</li>
              <li>Trees near power lines.</li>
              <li>Storm-damaged trees.</li>
              <li>Trees over your house / roof.</li>
              <li>Removal of dead trees.</li>
              <li>Stump grinding.</li>
              <li>Disease diagnosis.</li>
              <li>Anything requiring chainsaw above shoulder.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find certified arborist</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>ISA Certified Arborist</strong> — required credential. treesaregood.org.</li>
              <li><strong>TCIA Accredited</strong> — companies, tcia.org.</li>
              <li>Insurance: liability + workers comp REQUIRED.</li>
              <li>Get 3 written estimates.</li>
              <li>Don&apos;t pay full upfront — 50% before, 50% after.</li>
              <li>Avoid door-to-door tree services after storms (huge scam).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Storm scam red flags</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Show up after storm offering &quot;great deal.&quot;</li>
              <li>Pressure for cash / immediate decision.</li>
              <li>Out-of-state license plates.</li>
              <li>Demand full payment upfront.</li>
              <li>No insurance proof.</li>
              <li>Suspiciously low price.</li>
              <li>Half-finish + disappear.</li>
              <li>Wait for legitimate companies (1-2 days).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost ranges</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pruning small tree: $200-500.</li>
              <li>Pruning large tree: $500-1,500.</li>
              <li>Tree removal (small): $400-1,200.</li>
              <li>Tree removal (large): $1,500-5,000.</li>
              <li>Stump grinding: $100-300.</li>
              <li>Storm damage often covered by homeowner&apos;s insurance.</li>
              <li>Annual inspection: $100-200, prevents disasters.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY (small + safe)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pruning small branches reachable from ground.</li>
              <li>Mulching around base (3-inch ring, NOT against trunk).</li>
              <li>Watering young trees during drought.</li>
              <li>Removing suckers (small shoots from base).</li>
              <li>Bypass pruners + lopping shears for live branches.</li>
              <li>Wear safety glasses + gloves.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Prevent problems</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Annual arborist inspection on big trees.</li>
              <li>Watch for: dead branches, lean toward house, fungus on bark.</li>
              <li>Address storm-prone branches BEFORE storms.</li>
              <li>Remove dead trees promptly.</li>
              <li>Document tree health for insurance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free tree advice</h3>
            <p className="text-sm text-muted-foreground"><strong>Local Cooperative Extension Office</strong> — Master Gardeners give FREE advice + diagnoses. <strong>State Forestry Service</strong> — sometimes free inspection. <strong>Arbor Day Foundation</strong> — arborday.org. Free resources. Photos via app for ID + diagnosis.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
