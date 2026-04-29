import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

export default function BladderHealthSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bladder Health for Seniors | TekSure" description="Incontinence + UTIs + bladder issues. Plain-English senior bladder guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bladder Health</h1>
          <p className="text-lg text-muted-foreground">Common. Treatable. Don&apos;t suffer in silence.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common senior issues</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Incontinence (leakage).</li>
              <li>Urgency (sudden need).</li>
              <li>Frequent urination.</li>
              <li>Recurrent UTIs.</li>
              <li>Nocturia (waking to urinate).</li>
              <li>Men: BPH (enlarged prostate).</li>
              <li>Most TREATABLE.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Kegel exercises</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Squeeze pelvic floor muscles.</li>
              <li>Hold 5 sec, release 5 sec.</li>
              <li>10 reps, 3x/day.</li>
              <li>Strengthens bladder control.</li>
              <li>Helps incontinence — proven.</li>
              <li>Both men + women.</li>
              <li>Free + effective.</li>
              <li>Apps: Squeezy, Kegel Trainer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">UTI prevention</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hydrate well — water, not soda.</li>
              <li>Cranberry supplement (not juice — sugar).</li>
              <li>D-mannose supplement (proven).</li>
              <li>Wipe front-to-back (women).</li>
              <li>Pee after intimacy.</li>
              <li>Limit caffeine + alcohol.</li>
              <li>Probiotics may help.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">UTI in seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>UTIs in seniors often present as CONFUSION.</li>
              <li>NOT just burning urination.</li>
              <li>Sudden behavior change = test for UTI.</li>
              <li>Especially dementia patients.</li>
              <li>Treatable with antibiotics.</li>
              <li>Caregivers: track this carefully.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t avoid water</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Common mistake: drink less to avoid trips.</li>
              <li>Causes concentrated urine + irritation.</li>
              <li>Causes UTIs.</li>
              <li>Worsens issue.</li>
              <li>Drink water spread through day.</li>
              <li>Cut off 2 hours before bed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Treatments</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Behavioral</strong> — Kegels, bladder training.</li>
              <li><strong>Pads</strong> — Tena, Always Discreet.</li>
              <li><strong>Medications</strong> — Detrol, Toviaz.</li>
              <li><strong>Botox injections</strong> — bladder.</li>
              <li><strong>Surgery</strong> — slings, bladder lifts.</li>
              <li>Talk to urologist.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">No shame</h3>
            <p className="text-sm text-muted-foreground">50%+ of senior women have some incontinence. Highly treatable. Don&apos;t suffer alone. Tell your doctor. Pelvic floor PT covered by Medicare. Modern pads invisible. Live fully.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
