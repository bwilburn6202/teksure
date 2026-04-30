import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartHandshake } from 'lucide-react';

export default function HoarderHelpResources() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hoarding Help Resources for Seniors | TekSure" description="Compassionate help for senior hoarders + family. Plain-English resources, therapy, cleaning." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartHandshake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hoarding Help</h1>
          <p className="text-lg text-muted-foreground">Compassionate. Slow. Effective.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Understanding hoarding</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Recognized mental health condition (DSM-5).</li>
              <li>Common in seniors who lived through Depression.</li>
              <li>Often linked to grief, trauma, anxiety.</li>
              <li>NOT laziness or character flaw.</li>
              <li>Forced cleanouts often backfire — items return.</li>
              <li>Treatment + therapy = lasting change.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Health + safety risks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Fall hazard — narrow paths.</li>
              <li>Fire hazard — paper, blocked exits.</li>
              <li>Mold + pest infestations.</li>
              <li>Air quality / respiratory.</li>
              <li>Adult Protective Services may intervene.</li>
              <li>Social isolation (won&apos;t let visitors in).</li>
              <li>Code enforcement / eviction risk.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Therapy approaches</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>CBT for Hoarding</strong> — gold standard. Look for therapist trained in it.</li>
              <li><strong>Buried in Treasures workshop</strong> — group, evidence-based.</li>
              <li><strong>SSRIs</strong> — sometimes prescribed alongside therapy.</li>
              <li><strong>Find therapist</strong> — Psychology Today, IOCDF.org hoarding directory.</li>
              <li>6-12 months minimum.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free + low-cost help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Children of Hoarders</strong> — childrenofhoarders.com. Family support.</li>
              <li><strong>International OCD Foundation</strong> — iocdf.org. Resources.</li>
              <li><strong>Adult Protective Services</strong> — last resort if endangered.</li>
              <li><strong>Area Agency on Aging</strong> — local case workers can connect.</li>
              <li><strong>HoardersAnon</strong> — 12-step style support groups.</li>
              <li><strong>Reddit r/ChildofHoarder, r/hoarding</strong> — peer support.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cleaning specialists</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NASP-certified hoarding cleanup specialists.</li>
              <li>$2,000-50,000 depending on severity.</li>
              <li>Some homeowner&apos;s insurance covers (check).</li>
              <li>Senior services / Medicaid sometimes covers.</li>
              <li>Work WITH them not against — slow + dignified.</li>
              <li>One room at a time approach.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For family members</h3>
            <p className="text-sm text-muted-foreground">DON&apos;T do surprise cleanouts. DON&apos;T shame. DO offer help with one corner at a time. Read &quot;Buried in Treasures&quot; book ($15). Join Children of Hoarders support group. Care for yourself first — change is slow.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
