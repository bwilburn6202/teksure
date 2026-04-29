import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

export default function AnxietyToolsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Anxiety Tools for Seniors | TekSure" description="Manage anxiety + worry. Plain-English techniques + apps for senior anxiety." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Anxiety Tools</h1>
          <p className="text-lg text-muted-foreground">Calm tools that work for seniors.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior anxiety triggers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Health concerns + medical appointments.</li>
              <li>Financial worries.</li>
              <li>Loss of loved ones.</li>
              <li>Changes (downsizing, illness).</li>
              <li>News + politics.</li>
              <li>Loneliness.</li>
              <li>Cognitive decline fears.</li>
              <li>Falls / safety.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quick calm techniques</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Box breathing</strong> — 4 in, 4 hold, 4 out, 4 hold. Repeat.</li>
              <li><strong>5-4-3-2-1 grounding</strong> — name 5 things see, 4 hear, 3 touch, 2 smell, 1 taste.</li>
              <li><strong>Cold water</strong> — splash face, shocks system out of panic.</li>
              <li><strong>Walk</strong> — 10 min outside.</li>
              <li><strong>Call someone</strong> — connection helps.</li>
              <li><strong>Pet petting</strong> — proven calming.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Calm</strong> — meditation + sleep stories. $70/yr.</li>
              <li><strong>Headspace</strong> — guided meditation. $70/yr.</li>
              <li><strong>Insight Timer</strong> — FREE. Massive library.</li>
              <li><strong>Smiling Mind</strong> — FREE. Australian, kid + senior.</li>
              <li><strong>Daily Calm app</strong> — bite-sized.</li>
              <li>Try free version first — most have 7-day trial.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Long-term help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Therapy — CBT highly effective.</li>
              <li>Medicare covers.</li>
              <li>Medication if needed (SSRIs, low-dose).</li>
              <li>Avoid benzodiazepines (Xanax, Valium) in seniors — fall risk.</li>
              <li>Yoga, tai chi proven.</li>
              <li>Acupuncture some find helpful.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">News fasts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Limit news to 30 min/day.</li>
              <li>Skip social media doom-scroll.</li>
              <li>Mute political accounts.</li>
              <li>Replace with: nature, music, books, hobbies.</li>
              <li>Many seniors anxiety improves significantly.</li>
              <li>News addiction is real.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Help</h3>
            <p className="text-sm text-muted-foreground">If anxiety constant — get professional help. <strong>Psychology Today</strong> — find therapist. <strong>BetterHelp</strong>, <strong>Talkspace</strong> online. <strong>988 hotline</strong> for crisis. Anxiety treatable. Don&apos;t suffer alone. Generation often dismissed mental health — different now. Reach out.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
