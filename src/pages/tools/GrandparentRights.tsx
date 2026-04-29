import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scale } from 'lucide-react';

export default function GrandparentRights() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grandparent Rights — Visitation, Custody | TekSure" description="State laws on grandparent visitation + custody. Plain-English compassionate guide for grandparents in family disputes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scale className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grandparent Rights</h1>
          <p className="text-lg text-muted-foreground">When relationships get complicated.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Federal vs state</h2>
            <p className="text-sm">No federal grandparent visitation rights. ALL 50 states have SOME laws — vary widely. Some require death of parent. Some allow if "best interest of child". Some require petition + hearing. Consult elder/family attorney for YOUR state.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When courts intervene</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Parent died</strong> — most courts grant visitation to grandparents of deceased parent.</li>
              <li><strong>Parents divorced</strong> — varies. Some courts grant visitation.</li>
              <li><strong>Parents incarcerated / unfit</strong> — grandparents may petition for custody.</li>
              <li><strong>"Substantial relationship"</strong> already existed — courts more likely to grant visitation.</li>
              <li><strong>Both parents OK + alive + opposed</strong> — courts almost never override (Troxel v. Granville Supreme Court).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Try non-legal first</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Family mediation</strong> — neutral 3rd party. Often resolves what court can&apos;t.</li>
              <li><strong>Therapy together</strong> — addresses underlying issues.</li>
              <li><strong>Letter writing</strong> — heartfelt + apologetic.</li>
              <li><strong>Time</strong> — many estrangements heal with patience.</li>
              <li>Court is LAST resort — wins rights but often loses relationship.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Custody (raising grandchild)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>2.7M US kids raised primarily by grandparents.</li>
              <li><strong>Kinship care</strong> — informal arrangement.</li>
              <li><strong>Legal guardianship</strong> — court order. Lasts until 18.</li>
              <li><strong>Adoption</strong> — full legal parent rights.</li>
              <li><strong>State support</strong> — TANF, Medicaid, school enrollment varies by status.</li>
              <li><strong>Generations United</strong> — gu.org. Free resources.</li>
              <li><strong>AARP GrandFamilies Guide</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free + low-cost legal help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Legal Aid</strong> — every state has free legal aid for low-income.</li>
              <li><strong>State Senior Legal Hotlines</strong>.</li>
              <li><strong>Bar association lawyer-referral</strong> — first 30-min consultation free or $25.</li>
              <li><strong>NAELA</strong> — National Academy of Elder Law Attorneys.</li>
              <li><strong>Law school clinics</strong> — students supervised, free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">It hurts</h3>
            <p className="text-sm text-muted-foreground">Grandparent estrangement is among the most painful family situations. AARP + StandAlone have support groups — knowing you&apos;re not alone helps. Therapy helps process grief. Sometimes patience + apology unlock locked doors years later.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
