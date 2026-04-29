import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PersonStanding } from 'lucide-react';

const APPS = [
  { name: 'Upright GO 2', cost: '$80 device', best: 'Wearable buzzes when slouching. Senior-friendly.', good: 'Best wearable.' },
  { name: 'PostureScreen', cost: '$5', best: 'Photo-based posture analysis.', good: 'Best assessment.' },
  { name: 'Stand Up! Reminder', cost: 'FREE', good: 'Simple posture/movement reminders.', best: 'Best free.' },
  { name: 'Bend (Stretching)', cost: 'FREE / $30/yr', best: 'Posture stretches with timers.', good: 'Best stretches.' },
];

export default function PostureCheckApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Posture Check Apps for Seniors | TekSure" description="Apps + devices to fix slouching. Plain-English picks for senior posture improvement." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PersonStanding className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Posture Check Apps</h1>
          <p className="text-lg text-muted-foreground">Stand tall = look + feel younger.</p>
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
            <h2 className="font-bold text-xl mb-3">Why posture matters at 65+</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Slouching = back + neck pain.</li>
              <li>Bad posture = poor breathing = less energy.</li>
              <li>&quot;Dowager&apos;s hump&quot; can be partly reversed.</li>
              <li>Better posture = better balance = fewer falls.</li>
              <li>Looking younger + more confident.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily posture habits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stand against wall — heels, butt, shoulders, head touching.</li>
              <li>Set hourly phone reminder to check posture.</li>
              <li>Chin tucks — 10 reps every hour at desk.</li>
              <li>Wall angels — 10 reps morning + night.</li>
              <li>Sleep on back with thin pillow when possible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free YouTube channels</h3>
            <p className="text-sm text-muted-foreground"><strong>Bob &amp; Brad</strong> — &quot;most famous physical therapists.&quot; Senior-specific. <strong>Posture Doctor</strong> — quick fixes. <strong>SilverSneakers</strong> — free posture videos.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
