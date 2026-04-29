import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

const APPS = [
  { name: 'iPhone Screen Time / Focus', cost: 'FREE', best: 'Built-in. Limit apps. "Focus" mode silences notifications.', good: 'Best built-in iOS.' },
  { name: 'Android Digital Wellbeing', cost: 'FREE', best: 'Built-in. App timers. Bedtime mode.', good: 'Best built-in Android.' },
  { name: 'Opal', cost: 'FREE / $80/yr Premium', best: 'Block addictive apps + websites. Easy override but feels like a real choice.', good: 'Best blocker.' },
  { name: 'Forest', cost: '$2 one-time', best: 'Plant a tree. If you check phone, tree dies. Gamifies focus.', good: 'Best gamified.' },
  { name: 'Freedom', cost: '$40-130/yr', best: 'Block sites + apps across all your devices simultaneously.', good: 'Best for serious blockers.' },
  { name: 'Light Phone III', cost: '$799 hardware', best: 'A phone designed to do less — calls, texts, maps, notes only.', good: 'Best dumb-phone.' },
];

export default function DigitalDetoxApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Detox Apps | TekSure" description="iPhone Focus, Opal, Forest. Plain-English picks for cutting back screen time without shaming yourself." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Detox Apps</h1>
          <p className="text-lg text-muted-foreground">Use phone less. Live more.</p>
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
            <h2 className="font-bold text-xl mb-3">Free first — iPhone Screen Time</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Screen Time.</li>
              <li>See how many hours/day on each app.</li>
              <li>Tap "App Limits" → set max for "Social Media" → 1 hour.</li>
              <li>App locks after limit. Shows screen with override option.</li>
              <li>"Downtime" — silences EVERYTHING from 9 PM-7 AM.</li>
              <li>Add a 4-digit Screen Time PIN so you can&apos;t override mindlessly.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mini detox week</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Day 1 — turn OFF all non-essential notifications.</li>
              <li>Day 2 — delete most-used distracting apps for 7 days.</li>
              <li>Day 3 — phone OFF after 8 PM.</li>
              <li>Day 4 — read a paper book.</li>
              <li>Day 5 — leave phone home for one outing.</li>
              <li>Day 6 — write a letter to a friend.</li>
              <li>Day 7 — review what you missed (probably nothing).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior reality check</h3>
            <p className="text-sm text-muted-foreground">Most seniors use phones less than younger people — but more than they realize. Average 60+ user is 3-4 hrs/day. Reduce to 2 hrs and you reclaim 700+ hrs/year. That&apos;s a part-time hobby reborn.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
