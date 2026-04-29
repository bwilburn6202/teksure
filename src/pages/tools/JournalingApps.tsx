import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const APPS = [
  { name: 'Apple Journal', cost: 'FREE on iPhone (iOS 17.2+)', best: 'Built into iPhone. Suggests prompts based on your day. Lock with Face ID. Encrypted.', good: 'Best free pick for iPhone users.' },
  { name: 'Day One', cost: 'Free; $35/year Premium', best: 'Most polished. Auto-saves photos, weather, location with each entry. Beautiful interface.', good: 'Worth the cost for serious journalers.' },
  { name: 'Daylio', cost: 'Free; $30/year Pro', best: 'Mood tracker more than journal. Pick from emojis. See trends over weeks/months. Quick.', good: '5-second daily check-ins.' },
  { name: 'Stoic', cost: 'Free trial; $40/year', best: 'Daily prompts based on Stoic philosophy (Marcus Aurelius, Epictetus). Reflective.', good: 'Best for thoughtful journalers.' },
  { name: 'Diaro', cost: 'Free; $20/year Pro', best: 'Simple. Multi-folder. Backs up to your own Google Drive / Dropbox.', good: 'Best for "just give me a digital diary".' },
  { name: 'Voice memos / Otter.ai', cost: 'Free / $17/mo', best: 'For voice journaling — talk into your phone, Otter transcribes. Best if typing is slow.', good: 'Apple Voice Memos is free and built in.' },
];

export default function JournalingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Journaling Apps — Apple Journal, Day One, Daylio | TekSure" description="Daily journaling helps memory, sleep, and mood — backed by research. Plain-English picks for journaling apps and how to actually stick with it." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Journaling Apps</h1>
          <p className="text-lg text-muted-foreground">5 minutes a day. Better mood, better sleep, better memory.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why journal</h2>
            <ul className="text-sm list-disc pl-5">
              <li>Lower stress and anxiety (real studies).</li>
              <li>Better sleep when you do an "evening dump" before bed.</li>
              <li>A record for your kids and grandkids when you\'re gone — your stories, your perspective.</li>
              <li>5 minutes is enough. Don\'t overthink it.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy daily prompts</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>"3 things that happened today" (good or interesting).</li>
              <li>"3 things I\'m grateful for".</li>
              <li>"What\'s on my mind I haven\'t told anyone?"</li>
              <li>"What did I do well today?"</li>
              <li>"What would I tell a younger version of me right now?"</li>
              <li>"Who do I miss?"</li>
              <li>One sentence about the weather and what you ate. (Surprisingly comforting to read back years later.)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sticking with it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pick the same time daily — right after coffee or right before bed.</li>
              <li>Set a phone reminder.</li>
              <li>Don\'t worry about grammar or beauty. Bullet points are fine.</li>
              <li>Skip a day? No big deal. Pick up tomorrow.</li>
              <li>If digital feels wrong — a $5 paper notebook works just as well.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For grandkids</h3>
            <p className="text-sm text-muted-foreground">Once a week, write one story from your life. Where you were when JFK was shot. The first time you flew on a plane. Your wedding day. Compile after a year — that\'s a memoir for your family. Day One and Apple Journal both make beautiful printed books from your entries.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
