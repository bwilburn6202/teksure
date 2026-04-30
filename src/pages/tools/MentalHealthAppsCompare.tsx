import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

const APPS = [
  { name: 'BetterHelp', cost: '$280-400/mo', best: 'Largest online therapy. Match with therapist in 24h. Video, chat, phone.', good: 'Best therapy.' },
  { name: 'Talkspace', cost: '$260-400/mo', best: 'Similar to BetterHelp. Sometimes covered by Medicare Advantage.', good: 'Best insurance match.' },
  { name: 'Calm', cost: '$70/yr', best: 'Sleep stories, meditations, breathing. Famous for sleep audio.', good: 'Best for sleep.' },
  { name: 'Headspace', cost: '$70/yr', best: 'Guided meditation. 10-min/day basics. Senior-friendly.', good: 'Best meditation.' },
  { name: 'Insight Timer', cost: 'FREE / $60/yr', best: 'Free meditation library. 130,000+ guided sessions. Strong free tier.', good: 'Best free.' },
  { name: 'NAMI HelpLine', cost: 'FREE', best: '1-800-950-6264. Mental health crisis support, M-F 10-10 ET.', good: 'Best free crisis.' },
];

export default function MentalHealthAppsCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mental Health Apps Compared | TekSure" description="Therapy apps, meditation, crisis lines. Plain-English picks for senior mental health support — free and paid." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mental Health Apps</h1>
          <p className="text-lg text-muted-foreground">Therapy, meditation, and crisis lines.</p>
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

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Crisis right now?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> — call or text 988. 24/7. Free.</li>
              <li><strong>Crisis Text Line</strong> — text HOME to 741741.</li>
              <li><strong>Veterans Crisis Line</strong> — call 988, press 1.</li>
              <li><strong>SAMHSA Helpline</strong> — 1-800-662-4357. Free, 24/7.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior mental health</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Depression often shows differently in seniors — fatigue, withdrawal, "just getting old".</li>
              <li>Untreated depression is NOT normal aging.</li>
              <li>Loneliness raises mortality more than smoking.</li>
              <li>Therapy works for depression at ANY age.</li>
              <li>Medicare covers psychiatry + therapy with referral.</li>
              <li>Group therapy / senior centers reduce isolation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find a real therapist</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Psychology Today</strong> — directory by zip + insurance + specialty.</li>
              <li><strong>Medicare provider finder</strong> — medicare.gov/care-compare.</li>
              <li><strong>Inclusive Therapists, Therapy for Black Girls</strong> — community-specific.</li>
              <li><strong>Open Path Collective</strong> — $30-80 sliding-scale therapy.</li>
              <li><strong>Geriatric specialists</strong> — search "geriatric mental health" + city.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Apps don&apos;t replace therapy</h3>
            <p className="text-sm text-muted-foreground">Meditation apps help. Therapy helps MORE. If you&apos;re struggling, ask doctor for a referral. Medicare + most Medicare Advantage cover mental health visits the same as physical visits.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
