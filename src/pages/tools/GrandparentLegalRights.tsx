import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scale } from 'lucide-react';

export default function GrandparentLegalRights() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grandparent Legal Rights | TekSure" description="Custody + visitation rights for grandparents. Plain-English legal guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scale className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grandparent Legal Rights</h1>
          <p className="text-lg text-muted-foreground">Limited but real rights.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Visitation rights</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vary by state significantly.</li>
              <li>Limited compared to parent rights.</li>
              <li>Only if parents divorced, deceased, or unfit.</li>
              <li>Court must find &quot;best interest of child.&quot;</li>
              <li>Most states require existing relationship.</li>
              <li>Lawyer needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Custody scenarios</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Parent dies — grandparent may seek custody.</li>
              <li>Parent unfit (drugs, abuse) — protect child.</li>
              <li>Kinship care preferred over foster.</li>
              <li>Court appoints guardian.</li>
              <li>Many grandparents primary caregivers now.</li>
              <li>Federal funding helps kinship caregivers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If denied access</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Try mediation first.</li>
              <li>Family therapist.</li>
              <li>Court only if must.</li>
              <li>State varies — research local laws.</li>
              <li>AARP grandparent rights resources.</li>
              <li>Family lawyer specialty.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Raising grandkids resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AARP GrandFamilies</strong> — free guide.</li>
              <li><strong>Generations United</strong> — gu.org.</li>
              <li><strong>State kinship navigators</strong> — find services.</li>
              <li><strong>Subsidies for kinship care</strong> — TANF, SSI.</li>
              <li><strong>Grandparent support groups</strong>.</li>
              <li>Many seniors raising grandkids today.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to call attorney</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Custody dispute.</li>
              <li>Visitation denied.</li>
              <li>Unfit parent situation.</li>
              <li>Child in foster care.</li>
              <li>Get specialty family lawyer.</li>
              <li>Some legal aid free for low income.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best path</h3>
            <p className="text-sm text-muted-foreground">Maintain good relationship with parents. Keep love at center. Court should be last resort. Many family ruptures heal with time. Children benefit from grandparents IF parents allow. Don&apos;t let pride end relationships.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
