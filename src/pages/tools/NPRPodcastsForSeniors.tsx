import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Radio } from 'lucide-react';

export default function NPRPodcastsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="NPR Podcasts for Seniors | TekSure" description="Best NPR podcasts for senior listeners. Free, public radio quality, available offline." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Radio className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">NPR Podcasts</h1>
          <p className="text-lg text-muted-foreground">Free public radio. Excellent listening.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">News + current events</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Up First — 10-minute morning headlines.</li>
              <li>NPR News Now — hourly news updates.</li>
              <li>Consider This — daily deep dive on top story.</li>
              <li>Morning Edition + All Things Considered (full shows).</li>
              <li>Free, completely.</li>
              <li>30 minutes daily covers the news well.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Storytelling + culture</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>This American Life — long-time favorite.</li>
              <li>Radiolab — science + storytelling.</li>
              <li>Code Switch — race + culture.</li>
              <li>Fresh Air with Terry Gross — interviews.</li>
              <li>Pop Culture Happy Hour.</li>
              <li>Embedded — investigative documentaries.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Comedy + entertainment</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wait Wait... Don&apos;t Tell Me — news quiz comedy.</li>
              <li>How To Do Everything — fun life advice.</li>
              <li>Ask Me Another — game show.</li>
              <li>Tiny Desk Concerts — music performances.</li>
              <li>Pop Culture Happy Hour.</li>
              <li>Light listening for senior commutes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior interest</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hidden Brain — psychology research.</li>
              <li>Throughline — history series.</li>
              <li>Planet Money — economics made simple.</li>
              <li>Life Kit — practical advice.</li>
              <li>Body Electric — health tips.</li>
              <li>Worth checking weekly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to listen</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NPR One app — free, all NPR content.</li>
              <li>Apple Podcasts — built into iPhone.</li>
              <li>Spotify — free podcasts.</li>
              <li>Google Podcasts — being phased out.</li>
              <li>YouTube has many NPR shows.</li>
              <li>Pick whichever app you prefer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Support NPR</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NPR is listener-supported.</li>
              <li>Donate to local NPR station.</li>
              <li>Public Radio Plus app — premium ad-free.</li>
              <li>Member benefits at local stations.</li>
              <li>Tax-deductible donation.</li>
              <li>Keeps quality journalism alive.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Up First daily — 10 minutes</h3>
            <p className="text-sm text-muted-foreground">Start every weekday with NPR&apos;s Up First (10 minutes). It&apos;s a balanced summary of what matters that day. Listen during morning coffee, walking the dog, or driving to errands. Combined with one weekend long-form show like This American Life, you&apos;ll be more informed than most while spending under an hour weekly. Free, high quality, no algorithmic distortion.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
