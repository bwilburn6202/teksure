import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function InsightTimerMeditation() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Insight Timer Free Meditation App for Seniors | TekSure" description="Largest free meditation library. 250,000+ free meditations for senior wellness." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Insight Timer</h1>
          <p className="text-lg text-muted-foreground">250,000+ free meditations.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Insight Timer?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free with optional Premium ($60/year).</li>
              <li>250,000+ guided meditations.</li>
              <li>Largest free meditation library.</li>
              <li>Mix of secular + spiritual content.</li>
              <li>From 5 minutes to 1+ hours.</li>
              <li>30+ million users worldwide.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for senior wellness</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sleep meditations — fall asleep faster.</li>
              <li>Anxiety + stress relief.</li>
              <li>Pain management techniques.</li>
              <li>Loneliness + grief support.</li>
              <li>Gratitude practices.</li>
              <li>Body scan for relaxation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to start</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download free Insight Timer.</li>
              <li>Tap &quot;Browse&quot; — search by topic.</li>
              <li>Try &quot;Beginner Meditation&quot; first.</li>
              <li>5–10 minutes is enough to start.</li>
              <li>Find a teacher you like — many to choose from.</li>
              <li>Save favorites for later.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Calm + Headspace alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Calm — $70/year, beautiful interface.</li>
              <li>Headspace — $70/year, animations + lessons.</li>
              <li>Both have free trials.</li>
              <li>Many seniors find Insight Timer&apos;s free version sufficient.</li>
              <li>Calm popular for sleep stories.</li>
              <li>Headspace popular for short daily sessions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Christian alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Abide — Christian meditation, $60/year.</li>
              <li>Soulscape — Christian meditation.</li>
              <li>Echo Prayer — prayer-focused.</li>
              <li>Pray.com — Christian prayer + sleep.</li>
              <li>Hallow — Catholic specific.</li>
              <li>Most have free tiers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for senior beginners</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Start with 5-minute sessions.</li>
              <li>Don&apos;t worry about &quot;clearing your mind.&quot;</li>
              <li>Just listen + breathe.</li>
              <li>Pick same time daily — bedtime works.</li>
              <li>Headphones make it easier to focus.</li>
              <li>Skip if a session feels off — try different teacher.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try sleep meditation tonight</h3>
            <p className="text-sm text-muted-foreground">If you have trouble falling asleep, download Insight Timer free and search &quot;sleep meditation.&quot; Pick a 20-minute one. Lie in bed with phone nearby (not in hand), let the voice guide you. Many seniors fall asleep within 10 minutes regularly using these. Free, easy, no risk. Better than another sleeping pill.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
