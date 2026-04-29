import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function BlueskyExplained() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bluesky Explained for Seniors | TekSure" description="Twitter alternative explained. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bluesky</h1>
          <p className="text-lg text-muted-foreground">Twitter alternative. Independent.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Bluesky?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Created by Twitter founder Jack Dorsey.</li>
              <li>Decentralized — owned by users.</li>
              <li>No advertising.</li>
              <li>FREE.</li>
              <li>Like Twitter without billionaire control.</li>
              <li>Many former Twitter users moving here.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bluesky vs others</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bluesky — independent, ad-free.</li>
              <li>Threads — Meta-owned.</li>
              <li>Twitter (X) — Elon Musk-owned.</li>
              <li>Mastodon — most decentralized.</li>
              <li>Bluesky middle ground.</li>
              <li>Growing fast.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sign up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to bsky.app.</li>
              <li>Or download Bluesky app.</li>
              <li>Email, username, password.</li>
              <li>No phone required initially.</li>
              <li>Choose handle (@yourname.bsky.social).</li>
              <li>Or buy custom domain.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First steps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pick &quot;Starter Pack&quot; — pre-curated follows.</li>
              <li>Senior-friendly: news, hobbies.</li>
              <li>Follow journalists, scientists.</li>
              <li>Local news outlets.</li>
              <li>AARP if active there.</li>
              <li>Build your feed gradually.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to post</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap pencil icon.</li>
              <li>Type up to 300 characters.</li>
              <li>Add photo, video, link.</li>
              <li>Tap &quot;Post&quot;.</li>
              <li>Replies + likes possible.</li>
              <li>&quot;Repost&quot; spreads to followers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Custom feeds</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Discover&quot; — built-in algorithm.</li>
              <li>&quot;Following&quot; — chronological friends.</li>
              <li>Custom feeds by topic.</li>
              <li>Senior-curated feeds.</li>
              <li>News feed.</li>
              <li>Choose what fits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Worth trying?</h3>
            <p className="text-sm text-muted-foreground">If you miss old Twitter — give Bluesky try. Quality conversations. Less hostility. Strong moderation. Senior writers, journalists active. Free + no ads. If you don&apos;t miss Twitter — skip it. Don&apos;t need to be on every platform. Pick one or two that bring joy.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
