import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sun } from 'lucide-react';

const APPS = [
  { name: 'Calm', cost: 'Free trial; $70/year', best: 'Best-known. Big library of sleep stories, meditations, and music. Voices include Matthew McConaughey, Stephen Fry.' },
  { name: 'Headspace', cost: 'Free trial; $70/year', best: 'Step-by-step beginner courses. Best if you\'ve never meditated before. Cheery animations.' },
  { name: 'Insight Timer', cost: 'Mostly free', best: 'Largest free library — 200,000+ meditations from teachers worldwide. Great if you don\'t want to pay.' },
  { name: 'Smiling Mind', cost: 'Free', best: 'Made by an Australian non-profit. Programs for sleep, anxiety, and chronic pain. No catches.' },
  { name: 'Balance', cost: 'First year free', best: 'Personalized program — adjusts to what you tell it about your stress and sleep. Year 1 is genuinely free.' },
];

export default function MeditationAppPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Meditation App Picker — Calm, Headspace, and Free Options | TekSure" description="Trouble sleeping? Anxious? Meditation apps help — backed by real research. Plain-English comparison of the best, free and paid." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sun className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Meditation App Picker</h1>
          <p className="text-lg text-muted-foreground">Less anxiety, better sleep. Backed by real science.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Does it actually work?</h2>
            <p className="text-sm">Yes. Hundreds of studies show 10-15 minutes of daily meditation lowers blood pressure, improves sleep, reduces pain, and helps with mild anxiety. The American Heart Association formally recommends meditation as a way to lower stress and BP.</p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to start</h2>
            <p className="text-sm mb-2">If you've never tried meditation:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Install Calm or Headspace (whichever name you've heard of).</li>
              <li>Use the FREE 7-day trial.</li>
              <li>Pick a "Sleep Story" the first night — easier than meditation. They\'re bedtime stories for adults.</li>
              <li>Day 2 — try a 5-minute "Daily Calm" or beginner meditation in the morning.</li>
              <li>If at the end of 7 days you haven't liked any session, cancel. No harm done.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free options that work</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Insight Timer</strong> — 200,000+ free meditations. Pick a teacher you like. Most work is free; the "Member Plus" upgrade isn't needed.</li>
              <li><strong>Smiling Mind</strong> — completely free, no ads. Australian non-profit. Strong programs for sleep and chronic pain.</li>
              <li><strong>YouTube</strong> — search "guided meditation for sleep, 30 minutes". Hundreds of free options.</li>
              <li><strong>Apple Podcasts / Spotify</strong> — search "Tara Brach" or "Jon Kabat-Zinn" for free podcasts from world-class teachers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Discounts worth knowing</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>AARP members</strong> get a discount on Calm.</li>
              <li><strong>Many Medicare Advantage plans</strong> include free Calm or Headspace as a benefit. Check with your plan.</li>
              <li><strong>Calm Health</strong> is sometimes free through US health insurers.</li>
              <li><strong>Public library:</strong> Some library Hoopla apps include audio meditations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-4 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Important caveat</h3>
            <p className="text-sm text-muted-foreground">Meditation can help mild anxiety and sleep issues. It's not a substitute for therapy or medication for depression, anxiety disorders, or insomnia. If you've been struggling, talk to your doctor.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
