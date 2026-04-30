import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

export default function AudiobookListenWalking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Audiobooks While Walking for Seniors | TekSure" description="Combine reading + exercise. Plain-English audiobook walking guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Audiobooks + Walking</h1>
          <p className="text-lg text-muted-foreground">Read 30+ books/year. Exercise simultaneously.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Math</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Walk 30 min/day = 3.5 hrs/week.</li>
              <li>Average book 8-10 hours.</li>
              <li>Read 1 book every 2-3 weeks.</li>
              <li>30+ books/year just walking.</li>
              <li>Exercise + brain combo.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Equipment basics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smartphone (have one).</li>
              <li>Wireless headphones / AirPods.</li>
              <li>Or one in-ear bud (hear traffic).</li>
              <li>Audiobook app — Libby (FREE) or Audible.</li>
              <li>Charge phone night before.</li>
              <li>Comfortable walking shoes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free audiobook sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Libby</strong> (library) — FREE. Best.</li>
              <li><strong>Hoopla</strong> (library) — FREE.</li>
              <li><strong>Librivox</strong> — FREE classics.</li>
              <li><strong>NLS</strong> — FREE if visually impaired.</li>
              <li><strong>Spotify Premium</strong> — 15 hrs/mo audiobooks.</li>
              <li>Save $200-500/yr vs Audible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for walking</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Memoirs (engaging).</li>
              <li>Mysteries (driving you forward).</li>
              <li>Light novels.</li>
              <li>Self-help.</li>
              <li>Avoid: dense academic, complex characters.</li>
              <li>Avoid: sad books on long walks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Speed up to 1.25x once comfortable.</li>
              <li>Sleep timer for at-bed listening.</li>
              <li>Save bookmark when interesting.</li>
              <li>Multiple books going simultaneously OK.</li>
              <li>Don&apos;t feel obligated to finish.</li>
              <li>Free library = unlimited variety.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Ear safety</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t blast volume — preserves hearing. 60-70% volume max. Take breaks between books. Some hearing aids stream audiobooks directly. Combine exercise + reading = double benefit.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
