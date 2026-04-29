import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function TubiPlutoFreeStreaming() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tubi and Pluto TV Free Streaming for Seniors | TekSure" description="Completely free streaming services explained for seniors. No credit card needed." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DollarSign className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Free Streaming</h1>
          <p className="text-lg text-muted-foreground">Tubi + Pluto TV — zero cost, no card needed.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tubi — completely free</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>100% free — no subscription.</li>
              <li>No credit card required.</li>
              <li>20,000+ movies and TV shows.</li>
              <li>Supported by ads (like regular TV).</li>
              <li>Owned by Fox Corporation.</li>
              <li>Available everywhere — TV, phone, tablet.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pluto TV — also free</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>100% free — owned by Paramount.</li>
              <li>Live TV channels — like cable but free.</li>
              <li>250+ live channels in categories.</li>
              <li>On-demand movies + shows too.</li>
              <li>News, sports, classic TV, movies.</li>
              <li>No sign-up needed to start.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best Tubi content for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Classic Western movies — John Wayne era.</li>
              <li>Older action films — Clint Eastwood.</li>
              <li>Family dramas from the 1980s–2000s.</li>
              <li>Horror films if you enjoy them.</li>
              <li>Reality TV — home, cooking, nature.</li>
              <li>Documentaries — history, crime, animals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best Pluto TV channels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pluto TV News — 24/7 headlines.</li>
              <li>Classic TV — I Love Lucy, Andy Griffith.</li>
              <li>Westerns channel — all day.</li>
              <li>True Crime channel.</li>
              <li>NFL channel (highlights + classic games).</li>
              <li>Animals + Nature — wildlife docs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to set up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search &quot;Tubi&quot; or &quot;Pluto TV&quot; on your device.</li>
              <li>Roku, Fire Stick, Apple TV, Samsung smart TV.</li>
              <li>Download app — no payment info needed.</li>
              <li>Pluto TV: press play, start watching immediately.</li>
              <li>Tubi: optional account for watchlist + resume.</li>
              <li>Both apps are free to download.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Ads — what to expect</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Both supported by commercials like old TV.</li>
              <li>About 4–5 minutes of ads per hour.</li>
              <li>Less ads than regular cable TV.</li>
              <li>Cannot skip ads on free plans.</li>
              <li>Ads repeat — same few commercials.</li>
              <li>Worth it for zero cost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start here if on a budget</h3>
            <p className="text-sm text-muted-foreground">If streaming costs feel like too much, start with Tubi and Pluto TV. They&apos;re completely free — no credit card, no trial that forgets to cancel. Pluto TV is especially good for seniors who miss flipping through TV channels. Just pick a channel and watch, exactly like old cable. Great for background noise or casual viewing too.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
