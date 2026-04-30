import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Languages } from 'lucide-react';

export default function DuolingoForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Duolingo for Seniors | TekSure" description="Learn a language free with Duolingo. Plain-English setup + tips for senior learners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Languages className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Duolingo for Seniors</h1>
          <p className="text-lg text-muted-foreground">FREE. Fun. 15 min/day = real progress.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Duolingo</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FREE forever (paid version removes ads).</li>
              <li>Game-like — addictive in good way.</li>
              <li>5-15 min lessons.</li>
              <li>40+ languages.</li>
              <li>Senior-friendly app design.</li>
              <li>Speech, reading, writing, listening practice.</li>
              <li>Brain exercise like crosswords.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download Duolingo app (free).</li>
              <li>Create account with email.</li>
              <li>Pick language to learn.</li>
              <li>Set daily goal (start at 5 min).</li>
              <li>Notifications on for streak motivation.</li>
              <li>Microphone access for speaking practice.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Daily streak = big motivator. Don&apos;t break it.</li>
              <li>Streak Freezes (free with practice) — protect on bad days.</li>
              <li>Take notes by hand — boosts memory.</li>
              <li>Speak OUT LOUD even if alone.</li>
              <li>Watch shows in target language with subtitles.</li>
              <li>Listen to music in target language.</li>
              <li>Find a Duolingo language buddy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best language picks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Spanish</strong> — most useful in US. Travel + community.</li>
              <li><strong>French</strong> — travel + dual cultural value.</li>
              <li><strong>Italian</strong> — easiest for English speakers.</li>
              <li><strong>German</strong> — for travelers + heritage.</li>
              <li><strong>Mandarin</strong> — challenging but valuable.</li>
              <li><strong>Hebrew / Arabic</strong> — for travel + faith.</li>
              <li>ASL on Lingvano (separate app).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mango Languages</strong> — FREE with library card.</li>
              <li><strong>Pimsleur</strong> — FREE with library card.</li>
              <li><strong>BBC Languages</strong> — free podcasts.</li>
              <li><strong>YouTube</strong> — many free language teachers.</li>
              <li><strong>Tandem app</strong> — free language exchange.</li>
              <li><strong>Italki</strong> — paid tutors $10-25/hr.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Brain benefit</h3>
            <p className="text-sm text-muted-foreground">Bilingual seniors show 4-5 year delay in dementia onset. Even partial language learning protects brain. 15 min/day Duolingo = exercise + brain training combined. Free brain medicine. Plus — handy on travel + connecting with grandkids&apos; classmates, immigrant neighbors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
