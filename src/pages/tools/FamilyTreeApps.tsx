import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GitBranch } from 'lucide-react';

const SITES = [
  { name: 'Ancestry.com', cost: '$25-45/mo', best: 'Biggest. Most records. Best DNA test. Hints from millions of others&apos; trees.', good: 'Best overall.' },
  { name: 'FamilySearch', cost: 'FREE', best: 'Run by Church of LDS. Massive free record collection. Surprisingly powerful.', good: 'Best free.' },
  { name: 'MyHeritage', cost: '$15-30/mo', best: 'Strong European records. Famous for "deep nostalgia" photo animation.', good: 'Best European roots.' },
  { name: '23andMe', cost: '$99-199 one-time', best: 'DNA test only. Health reports + ancestry. Optional sharing with relatives.', good: 'Best DNA-only.' },
  { name: 'Findmypast', cost: '$15-25/mo', best: 'Best for British, Irish, Australian records.', good: 'Best UK/Irish.' },
];

export default function FamilyTreeApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Genealogy &amp; Family Tree Apps | TekSure" description="Trace your family tree. Plain-English picks for Ancestry, FamilySearch (free), MyHeritage, and DNA tests." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GitBranch className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Family Tree Apps</h1>
          <p className="text-lg text-muted-foreground">Find your roots. Surprise the grandkids.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SITES.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free first — FamilySearch</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>familysearch.org</strong>. Free, forever. No credit card.</li>
              <li>Enter your name + parents&apos; names + grandparents&apos; names.</li>
              <li>Site searches its 6 billion records. Auto-suggests matches.</li>
              <li>Build out tree generation by generation.</li>
              <li>Many records (US census, birth certificates, ship manifests) free here.</li>
              <li>Use this BEFORE paying for Ancestry — see how far you get free.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to add Ancestry.com</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FamilySearch hits dead ends.</li>
              <li>You want DNA matches with distant relatives.</li>
              <li>Your family came from countries with limited free records.</li>
              <li>You want millions of others&apos; trees to compare to.</li>
              <li>14-day free trial often available — try free first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DNA tests — privacy notes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Once you submit DNA, you can&apos;t take it back. Read privacy carefully.</li>
              <li><strong>23andMe</strong> filed for bankruptcy 2025 — data may move to new owner. Some users deleted data.</li>
              <li><strong>Ancestry DNA</strong> stable. Best DNA matching pool.</li>
              <li>Police can request DNA database matches with court order.</li>
              <li>Insurance can&apos;t use it (federal GINA law) but life insurance CAN.</li>
              <li>Result might find unexpected siblings/parents — be ready emotionally.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Local resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Local library</strong> — free Ancestry access if you&apos;re inside the building (most US libraries).</li>
              <li><strong>FamilySearch Centers</strong> — 5,000+ worldwide. Volunteers help free.</li>
              <li><strong>Local genealogy society</strong> — free or low-cost lookup help.</li>
              <li><strong>National Archives</strong> — free military, immigration, naturalization records.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Ask oldest relatives FIRST</h3>
            <p className="text-sm text-muted-foreground">Before paying any service — call your oldest aunts, uncles, parents. Record (with permission) their stories about your great-grandparents. Names, towns, occupations. That&apos;s gold no website has. Once they&apos;re gone, that knowledge goes with them. This is the single most important step.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
