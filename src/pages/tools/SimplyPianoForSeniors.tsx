import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function SimplyPianoForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Simply Piano for Seniors | TekSure" description="Learn piano on your phone or tablet. Simply Piano explained for senior beginners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Simply Piano</h1>
          <p className="text-lg text-muted-foreground">Learn piano at your own pace.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Simply Piano?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>App that teaches piano step by step.</li>
              <li>Listens through phone microphone — knows when you play correctly.</li>
              <li>Works with any acoustic or digital piano.</li>
              <li>From total beginner to intermediate.</li>
              <li>Highly rated — 5+ million users.</li>
              <li>Made by JoyTunes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How it works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Place phone or tablet on piano.</li>
              <li>App shows notes to play.</li>
              <li>You play — app listens.</li>
              <li>Instant feedback — green if correct, red if not.</li>
              <li>Lessons gradually get harder.</li>
              <li>Songs you actually want to play.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>7-day free trial — full access.</li>
              <li>Premium: $14.99/month or $149.99/year.</li>
              <li>Lifetime: around $300.</li>
              <li>Cheaper than weekly piano lessons ($40+ each).</li>
              <li>Cancel anytime.</li>
              <li>Family plans available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Perfect for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No teacher pressure — learn at your pace.</li>
              <li>Practice 10 minutes a day = real progress.</li>
              <li>Brain exercise — proven cognitive benefits.</li>
              <li>Songs you remember — Beatles, Sinatra, classics.</li>
              <li>Hand-eye coordination practice.</li>
              <li>Sense of accomplishment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t have a piano?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>61-key keyboard works fine — Casio CT-S1 ($120).</li>
              <li>Yamaha PSR-E373 — popular beginner option ($230).</li>
              <li>Used pianos free or cheap on Facebook Marketplace.</li>
              <li>App also has on-screen keyboard practice mode.</li>
              <li>Don&apos;t need expensive piano to start.</li>
              <li>Upgrade if you stick with it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other piano learning apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Flowkey — similar, also $15/month.</li>
              <li>Skoove — gentler pace, good for absolute beginners.</li>
              <li>Piano Marvel — for advancing students.</li>
              <li>YouTube — free piano channels.</li>
              <li>Hoffman Academy — free + paid lessons.</li>
              <li>Try free trials of multiple — pick your favorite.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">It&apos;s never too late</h3>
            <p className="text-sm text-muted-foreground">Many seniors discover piano in their 60s and 70s and find it brings deep joy. Simply Piano takes the awkwardness out of being a beginner — no teacher to feel embarrassed in front of. Practice 10 minutes a day after morning coffee and within 3 months you&apos;ll be playing real songs. The cognitive benefits are real and significant. Start the free trial this week.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
