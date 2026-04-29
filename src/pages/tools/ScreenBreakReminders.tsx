import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Timer } from 'lucide-react';

const APPS = [
  { name: 'Eye Care 20-20-20 (free)', cost: 'FREE', best: 'Simple, free reminder. Pings every 20 min. iPhone + Android.', good: 'Best simple.' },
  { name: 'Time Out (Mac)', cost: 'FREE', best: 'Forces a break. Dims screen. Mac-only.', good: 'Best for Mac.' },
  { name: 'Stretchly', cost: 'FREE', best: 'Open-source. Mac/Windows/Linux. Mini-break + long-break reminders.', good: 'Best open-source.' },
  { name: 'Awareness', cost: '$13', best: 'Gentle Tibetan bowl chime hourly. Reminds you to be present.', good: 'Best gentle.' },
  { name: 'iPhone Bedtime + Focus modes', cost: 'FREE', best: 'Built-in. Set Bedtime + work-day Focus. App limits.', good: 'Best built-in iPhone.' },
];

export default function ScreenBreakReminders() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Screen Break Reminder Apps | TekSure" description="Eye Care 20-20-20, Stretchly, Time Out. Plain-English picks for apps that make you take breaks from screens." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Timer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Screen Break Reminders</h1>
          <p className="text-lg text-muted-foreground">Get up. Move. Look away.</p>
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
            <h2 className="font-bold text-xl mb-3">What to do during breaks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>20-20-20</strong> — look 20 feet away for 20 seconds.</li>
              <li><strong>Stand up</strong> — walk to kitchen, get water.</li>
              <li><strong>Stretch neck + shoulders</strong> — slow circles.</li>
              <li><strong>Look out window</strong> — at nature if possible.</li>
              <li><strong>Walk around block</strong> — every 1-2 hours.</li>
              <li><strong>Hydrate</strong> — eyes dry up at screens.</li>
              <li><strong>Squeeze a stress ball</strong> — wrist + hand stretches.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pomodoro for seniors</h2>
            <p className="text-sm">25 minutes work + 5 min break repeatedly. After 4 cycles, take 30 min long break. Benefits:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Save eyes — eyes love every-25-min breaks.</li>
              <li>Save back — gets you up.</li>
              <li>Focus — short blocks beat marathon sessions.</li>
              <li>Free apps: <strong>Be Focused, Pomodoro Timer Pro, Focus To-Do</strong>.</li>
              <li>Or just kitchen timer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Movement = brain health</h3>
            <p className="text-sm text-muted-foreground">Studies show seniors who break sedentary screen time every 30 min have lower dementia risk + better mood. The break isn&apos;t just about eyes — it&apos;s about getting blood flowing to brain. Set ANY reminder. Break the pattern.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
