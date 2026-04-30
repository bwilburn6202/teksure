import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Dna } from 'lucide-react';

export default function MyHeritageDNAComparison() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="DNA Test Comparison for Seniors | TekSure" description="AncestryDNA vs MyHeritage vs 23andMe vs FamilyTreeDNA. Which DNA test for seniors?" />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Dna className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">DNA Tests Compared</h1>
          <p className="text-lg text-muted-foreground">Which one is right for you?</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AncestryDNA — most users</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Largest database — 23+ million users.</li>
              <li>Best for finding living relatives.</li>
              <li>$99 (often $59 on sale).</li>
              <li>Detailed ethnicity breakdown.</li>
              <li>Connects to Ancestry.com tree (subscription extra).</li>
              <li>Best general-purpose option.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">23andMe — health focus</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adds health risk factors to ethnicity.</li>
              <li>$119 (Ancestry-only) or $229 (with Health).</li>
              <li>FDA-approved for some health markers.</li>
              <li>Smaller database than Ancestry.</li>
              <li>Detailed maternal + paternal lineage.</li>
              <li>Best if curious about genetic health risks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">MyHeritage DNA</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Strong in European family research.</li>
              <li>$89 standard price.</li>
              <li>Color photo restoration features.</li>
              <li>Animate old photos with AI.</li>
              <li>Family tree builder included free.</li>
              <li>Good for European immigration ancestors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">FamilyTreeDNA</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Y-DNA + mtDNA tests for direct lines.</li>
              <li>$79–$249 depending on test.</li>
              <li>Best for serious genealogists.</li>
              <li>Indigenous + African American specialty tests.</li>
              <li>Smaller database for matches.</li>
              <li>Most scientific approach.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy considerations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Read each company&apos;s privacy policy.</li>
              <li>Some share with law enforcement.</li>
              <li>Some sell anonymized data to research.</li>
              <li>Can opt out of sharing.</li>
              <li>Can request deletion any time.</li>
              <li>23andMe + Ancestry have strong privacy options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How DNA tests work</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Order kit online — arrives in mail.</li>
              <li>Spit in tube or cheek swab.</li>
              <li>Mail back in prepaid envelope.</li>
              <li>Results in 4–8 weeks.</li>
              <li>Login online to see ethnicity + matches.</li>
              <li>Match list can lead to unknown relatives.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">AncestryDNA for most seniors</h3>
            <p className="text-sm text-muted-foreground">For most seniors interested in family history, AncestryDNA at $99 (or $59 on sale) is the best starting point. The huge database means you&apos;ll find lots of cousin matches that can break through brick walls in your family tree. Wait for Black Friday or Mother&apos;s Day sales. If genetic health concerns matter to you too, 23andMe Plus Health is the alternative pick.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
