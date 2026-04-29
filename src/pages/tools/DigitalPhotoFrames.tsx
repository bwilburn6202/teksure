import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

const FRAMES = [
  { name: 'Aura Carver / Mason', cost: '$149-199', best: 'Best-rated. Smart auto-rotate. Family can email/text photos directly to frame. No subscription. 10".', good: 'Best overall.' },
  { name: 'Skylight Frame', cost: '$159 + $39/year (optional)', best: 'Touchscreen. Email-only photo upload (works for non-tech families). Big readable buttons.', good: 'Easiest for grandparents.' },
  { name: 'Nixplay 9.7"', cost: '$160 + $30/year (optional)', best: 'App-driven. Multiple frames in one account. Best if all family is on iPhone.', good: 'Best for big families.' },
  { name: 'Pix-Star', cost: '$179', best: 'No subscription, no app required. Email photos. Decent quality.', good: 'No-subscription pick.' },
  { name: 'Amazon Echo Show 10', cost: '$250', best: 'Photo frame + smart speaker + video calls. Multi-purpose.', good: 'Best multi-tasker.' },
];

export default function DigitalPhotoFrames() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Photo Frames — Best Picks | TekSure" description="Aura, Skylight, Nixplay. Plain-English picks for digital photo frames so family can send photos straight to grandma&apos;s living room." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Image className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Photo Frames</h1>
          <p className="text-lg text-muted-foreground">Family photos appear automatically.</p>
        </div>

        <div className="space-y-3 mb-6">
          {FRAMES.map(f => (
            <Card key={f.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{f.name}</h3>
                  <span className="text-sm font-semibold text-primary">{f.cost}</span>
                </div>
                <p className="text-sm">{f.best}</p>
                <p className="text-sm text-muted-foreground">{f.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How they work</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Plug frame into wall outlet.</li>
              <li>Connect to your wifi (one-time setup).</li>
              <li>Family downloads matching app OR emails photos to a frame address.</li>
              <li>Photos appear automatically. No buttons to press.</li>
              <li>Frame rotates through all photos. Updates instantly when new ones arrive.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to look for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>10 inch screen or larger</strong> — anything smaller is hard to enjoy from a couch.</li>
              <li><strong>Auto-rotate</strong> — turns frame portrait/landscape to match photo.</li>
              <li><strong>No subscription</strong> — Aura, Pix-Star don&apos;t lock features behind subscription.</li>
              <li><strong>Email photos to it</strong> — works for any family member, no app needed.</li>
              <li><strong>Clear instructions</strong> — for the recipient, not just the buyer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best gift idea</h2>
            <p className="text-sm">Set up the frame BEFORE giving it. Add 100 photos already loaded. Pre-connect to recipient&apos;s wifi (you&apos;ll need their wifi password). Tape a card to back with: "How to receive new photos: family emails them to frame@xxx.com." Saves the recipient any setup pain.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Ongoing</h3>
            <p className="text-sm text-muted-foreground">Once a month, send 5-10 new photos. Doesn&apos;t need to be holiday or special — random Tuesday photos are best. Garden, dog, grandkids&apos; baseball game. Routine sends keep grandparents in your daily life.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
