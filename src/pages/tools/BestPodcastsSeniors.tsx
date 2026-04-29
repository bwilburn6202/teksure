import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

export default function BestPodcastsSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Best Podcasts for Seniors | TekSure" description="Senior-friendly podcasts. Plain-English picks for senior listeners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Best Podcasts</h1>
          <p className="text-lg text-muted-foreground">Free. Endless. Brain food.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">News + analysis</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>The Daily</strong> (NYT) — 25-min daily.</li>
              <li><strong>Up First</strong> (NPR) — 10-min morning.</li>
              <li><strong>This American Life</strong> — weekly stories.</li>
              <li><strong>Fresh Air</strong> — Terry Gross interviews.</li>
              <li><strong>The Indicator</strong> — economy explained.</li>
              <li>FREE.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Health + aging</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Peter Attia Drive</strong> — health + longevity.</li>
              <li><strong>Huberman Lab</strong> — neuroscience.</li>
              <li><strong>Senior Living Today</strong> — aging issues.</li>
              <li><strong>Chronic Pain Self-Management</strong>.</li>
              <li><strong>NYT Heartwave</strong> — heart health.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">History + culture</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hardcore History</strong> — Dan Carlin. Long, deep.</li>
              <li><strong>Revolutions</strong> — Mike Duncan.</li>
              <li><strong>Tides of History</strong>.</li>
              <li><strong>Stuff You Missed in History</strong>.</li>
              <li><strong>Smithsonian Sidedoor</strong>.</li>
              <li>Hours of free education.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior favorites</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>How I Built This</strong> — entrepreneur stories.</li>
              <li><strong>Wait Wait... Don&apos;t Tell Me!</strong> — NPR comedy.</li>
              <li><strong>Lake Wobegon</strong> — Garrison Keillor.</li>
              <li><strong>Smartless</strong> — celebrity comedy.</li>
              <li><strong>SmartPodcast on Investing</strong>.</li>
              <li><strong>Conan O&apos;Brien Needs a Friend</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to listen</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Podcasts (iPhone) free.</li>
              <li>Spotify free.</li>
              <li>Pocket Casts ($10/yr).</li>
              <li>Listen on walks / drives.</li>
              <li>Bluetooth speaker for kitchen.</li>
              <li>Speed up 1.25-1.5x once comfortable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Discover more</h3>
            <p className="text-sm text-muted-foreground">Apple Podcasts charts. NYT podcast recommendations. Try 1 episode of 3 different shows weekly = find favorites. Listen during chores, exercise, drives. Free education + entertainment = senior brain food.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
