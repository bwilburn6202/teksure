import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2 } from 'lucide-react';

const APPS = [
  { name: 'ReSound Relief', cost: 'FREE', best: 'Sound therapy + meditation. Senior-favorite.', good: 'Best free overall.' },
  { name: 'Whist (formerly Lenire)', cost: '$80/mo', best: 'Sound + tongue stimulation. Clinical evidence.', good: 'Best clinical.' },
  { name: 'Oto', cost: '$25/mo', best: 'CBT-based program. Proven results.', good: 'Best therapy.' },
  { name: 'White Noise Lite', cost: 'FREE', best: 'Custom noise mixes for masking.', good: 'Best customization.' },
  { name: 'iPhone Background Sounds', cost: 'FREE', best: 'Built into Settings → Accessibility → Audio.', good: 'Best built-in.' },
];

export default function TinnitusReliefApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tinnitus Relief Apps for Seniors | TekSure" description="Mask ringing in ears. Plain-English tinnitus app guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Volume2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tinnitus Relief</h1>
          <p className="text-lg text-muted-foreground">Apps + therapy mask ringing.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tinnitus 101</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Ringing/buzzing/whistling in ears.</li>
              <li>50% of seniors have it.</li>
              <li>No cure but management possible.</li>
              <li>Often paired with hearing loss.</li>
              <li>Stress + caffeine + alcohol worsen.</li>
              <li>White noise masks effectively.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What helps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>White / pink / brown noise (find what works for you).</li>
              <li>Hearing aids with masking feature.</li>
              <li>Cognitive Behavioral Therapy (CBT) for tinnitus.</li>
              <li>Reduce caffeine + alcohol.</li>
              <li>Manage stress.</li>
              <li>Sleep with sound machine.</li>
              <li>Tinnitus Retraining Therapy (TRT) — clinical.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone Background Sounds (FREE)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Accessibility → Audio &amp; Visual → Background Sounds.</li>
              <li>White, pink, brown noise built-in.</li>
              <li>Play continuously.</li>
              <li>Adjust volume.</li>
              <li>Use AirPods to direct sound.</li>
              <li>Many seniors find this enough.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to see audiologist</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tinnitus disrupting sleep.</li>
              <li>Affecting concentration.</li>
              <li>One ear only (rule out medical cause).</li>
              <li>Hearing loss alongside.</li>
              <li>Sudden onset.</li>
              <li>Get full hearing test.</li>
              <li>Modern hearing aids include masking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Resources</h3>
            <p className="text-sm text-muted-foreground"><strong>American Tinnitus Association</strong> — ata.org. Free guides + support. <strong>Tinnitus Practitioners Association</strong> — find specialists. <strong>BTA (UK)</strong> — also has US resources. Many seniors live well with tinnitus once they find right strategies. Don&apos;t give up.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
