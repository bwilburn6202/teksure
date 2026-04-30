import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

export default function ApplePodcastsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Podcasts for Senior Listeners | TekSure" description="Apple Podcasts app explained. Built into iPhone, free, easy to use." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Podcasts</h1>
          <p className="text-lg text-muted-foreground">Built into iPhone. Free.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Already on iPhone</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pre-installed on every iPhone.</li>
              <li>Purple icon labeled &quot;Podcasts.&quot;</li>
              <li>No additional download needed.</li>
              <li>Works offline once downloaded.</li>
              <li>Syncs across iPhone, iPad, Mac.</li>
              <li>Apple Watch listening too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find shows</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search by name or topic.</li>
              <li>Browse charts — most popular.</li>
              <li>Browse by category.</li>
              <li>News, Comedy, History, True Crime, etc.</li>
              <li>Subscribe (free) — auto-download new episodes.</li>
              <li>Library tab shows your subscriptions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior favorite shows</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>The Daily — NYT, daily news.</li>
              <li>Up First — NPR, 10 min daily.</li>
              <li>This American Life — storytelling.</li>
              <li>Wait Wait Don&apos;t Tell Me — comedy news.</li>
              <li>Hidden Brain — psychology.</li>
              <li>Fresh Air — interviews.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Listening tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Speed up to 1.25x or 1.5x speed.</li>
              <li>Sleep timer for bedtime listening.</li>
              <li>Skip 15 sec if uninteresting.</li>
              <li>Apple Watch can play independently.</li>
              <li>CarPlay for car listening.</li>
              <li>Episode notes for context.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Podcasts+</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Premium subscriptions to specific shows.</li>
              <li>Ad-free versions.</li>
              <li>Bonus content.</li>
              <li>$2–$5/month per show.</li>
              <li>Most podcasts free.</li>
              <li>Skip premium for most.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other podcast apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Spotify — music + podcasts together.</li>
              <li>Pocket Casts — pro features.</li>
              <li>Overcast — popular with iPhone users.</li>
              <li>Castbox — Android favorite.</li>
              <li>Apple Podcasts plenty for most seniors.</li>
              <li>Stick with built-in.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Already there. Just open it.</h3>
            <p className="text-sm text-muted-foreground">If you have an iPhone, you already have everything you need. Open Podcasts (purple icon), search a topic you like, subscribe to one show. Listen during your morning coffee or walk. Free, no setup, no extra apps. The world&apos;s biggest podcast library at your fingertips.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
