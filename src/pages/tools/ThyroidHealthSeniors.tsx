import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function ThyroidHealthSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Thyroid Health for Seniors | TekSure" description="Hypothyroid + hyperthyroid in seniors. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Thyroid Health</h1>
          <p className="text-lg text-muted-foreground">Often missed. Easy to test + treat.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hypothyroid (slow) symptoms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Fatigue / low energy.</li>
              <li>Weight gain.</li>
              <li>Cold intolerance.</li>
              <li>Dry skin + brittle hair.</li>
              <li>Constipation.</li>
              <li>Depression.</li>
              <li>Slow thinking + memory issues.</li>
              <li>Common in 60+ women especially.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hyperthyroid (fast) symptoms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Anxiety + restlessness.</li>
              <li>Weight loss despite eating.</li>
              <li>Heat intolerance.</li>
              <li>Heart palpitations / racing.</li>
              <li>Tremors.</li>
              <li>Bowel changes (looser).</li>
              <li>Bulging eyes (Graves disease).</li>
              <li>Less common but serious.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get tested</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Simple blood test — TSH.</li>
              <li>Add: Free T4, Free T3 if needed.</li>
              <li>Medicare covers fully.</li>
              <li>Annual check after 60.</li>
              <li>If symptoms — sooner.</li>
              <li>Reading: TSH normal 0.4-4.0.</li>
              <li>Senior optimal often higher (1-3).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Treatments</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hypo</strong> — levothyroxine (Synthroid). Daily pill.</li>
              <li>Take same time, empty stomach.</li>
              <li>Re-check 6-8 weeks after start.</li>
              <li>Adjust dose as needed.</li>
              <li><strong>Hyper</strong> — methimazole, beta-blockers, radioactive iodine.</li>
              <li>Sometimes surgery.</li>
              <li>Both highly treatable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Levothyroxine tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Take 30-60 min before food.</li>
              <li>Brand-name vs generic — stick with one.</li>
              <li>Avoid taking with coffee, calcium, iron.</li>
              <li>Re-test 6-8 weeks after dose change.</li>
              <li>Lifelong typically.</li>
              <li>Cheap generic ($4-15/mo).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Why often missed in seniors</h3>
            <p className="text-sm text-muted-foreground">Symptoms attributed to &quot;just aging&quot; — fatigue, slowness, weight gain. Annual TSH catches it. If feeling exhausted + slow — ASK for thyroid test. Can dramatically improve quality of life.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
