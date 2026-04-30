import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music2 } from 'lucide-react';

export default function YousicianGuitarApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Yousician Guitar App for Seniors | TekSure" description="Learn guitar with Yousician. App that listens and gives feedback. Plain-English guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Yousician</h1>
          <p className="text-lg text-muted-foreground">Learn guitar with instant feedback.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Yousician?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>App that teaches guitar, piano, ukulele, voice, bass.</li>
              <li>Listens through phone microphone.</li>
              <li>Gives real-time feedback as you play.</li>
              <li>Lessons + popular songs to learn.</li>
              <li>From total beginner to advanced.</li>
              <li>Free version available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How it works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Place phone or tablet on music stand.</li>
              <li>App shows tablature and chord diagrams.</li>
              <li>You play — app listens via microphone.</li>
              <li>Notes turn green when correct.</li>
              <li>Slows you down or speeds up as you progress.</li>
              <li>Works with acoustic or electric guitar.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free — limited daily practice time.</li>
              <li>Premium: $19.99/month or $179.88/year.</li>
              <li>Premium+: covers all instruments.</li>
              <li>Cheaper than weekly guitar lessons.</li>
              <li>Cancel anytime.</li>
              <li>Free trial usually available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for senior beginners</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No teacher embarrassment.</li>
              <li>Practice your favorite songs from start.</li>
              <li>Beatles, classic rock, country in library.</li>
              <li>Take breaks — finger pain normal at first.</li>
              <li>Builds finger strength gradually.</li>
              <li>Brain exercise + creative outlet.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Need a guitar?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Beginner acoustic — Yamaha FG800 ($230).</li>
              <li>Even cheaper — Donner DAG-1C ($90).</li>
              <li>Used guitars great on Facebook Marketplace.</li>
              <li>Music store rentals — try before buying.</li>
              <li>Avoid super-cheap junk that hurts to play.</li>
              <li>Smaller body easier on senior shoulders.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other guitar apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Fender Play — $14.99/month, polished lessons.</li>
              <li>JustinGuitar — completely free, beloved teacher.</li>
              <li>Ultimate Guitar — chord library + tabs.</li>
              <li>YouTube — Marty Music, Andy Guitar channels.</li>
              <li>Try JustinGuitar free first.</li>
              <li>Most seniors fine on free options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try JustinGuitar first — it&apos;s free</h3>
            <p className="text-sm text-muted-foreground">Before paying for Yousician, try JustinGuitar.com — Justin Sandercoe has built the most loved free beginner guitar course on the internet. Hundreds of structured video lessons, all free. If you want the gamified app experience with mic-listening, then Yousician is excellent. Either way: pick your favorite Beatles song, that&apos;s your first goal. Most can play it within 8 weeks.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
