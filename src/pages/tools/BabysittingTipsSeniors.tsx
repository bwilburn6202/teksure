import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Baby } from 'lucide-react';

export default function BabysittingTipsSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Babysitting Tips for Senior Grandparents | TekSure" description="Watch grandkids successfully. Plain-English senior babysitting guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Baby className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Babysitting Tips</h1>
          <p className="text-lg text-muted-foreground">Joy + boundaries.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Discuss boundaries</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>How often will you babysit?</li>
              <li>Pay or volunteer?</li>
              <li>What snacks/foods okay?</li>
              <li>Discipline rules (parents&apos; rules).</li>
              <li>Screen time limits.</li>
              <li>Bedtime expectations.</li>
              <li>Talk BEFORE issues arise.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior advantages</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Patient (less rushed than parents).</li>
              <li>Time to teach things.</li>
              <li>Family stories rich content.</li>
              <li>Calmer pace.</li>
              <li>More attention to kids.</li>
              <li>Building lasting memories.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Realistic limits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>2-4 hours typical max for many.</li>
              <li>Daycare regular = burnout risk.</li>
              <li>1 day/week sustainable for most.</li>
              <li>Multiple grandkids = exponentially harder.</li>
              <li>Don&apos;t over-commit — say no.</li>
              <li>Honor your physical limits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Emergency prep</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Parents&apos; phone numbers.</li>
              <li>Emergency contact list.</li>
              <li>Pediatrician phone.</li>
              <li>Insurance card photo.</li>
              <li>Allergies + medications.</li>
              <li>Poison Control: 1-800-222-1222.</li>
              <li>911 for life-threatening.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If something goes wrong</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Call 911 if life-threatening.</li>
              <li>Call parents.</li>
              <li>Call pediatrician for non-urgent.</li>
              <li>Don&apos;t blame yourself.</li>
              <li>Accidents happen.</li>
              <li>Document what happened.</li>
              <li>Discuss with parents calmly after.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Joy not obligation</h3>
            <p className="text-sm text-muted-foreground">Babysit because you WANT to + can. Not from guilt or pressure. Saying NO sometimes preserves joy of saying YES other times. Your relationship with grandkids matters more than total hours.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
