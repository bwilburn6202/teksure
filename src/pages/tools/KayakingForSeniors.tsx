import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Waves } from 'lucide-react';

export default function KayakingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Kayaking for Seniors | TekSure" description="Easy entry to kayaking. Plain-English senior kayaking guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Waves className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Kayaking for Seniors</h1>
          <p className="text-lg text-muted-foreground">Joint-friendly + peaceful. Great senior sport.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior advantages</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Low impact on joints.</li>
              <li>Easy to learn.</li>
              <li>Cardio + arms exercise.</li>
              <li>Beautiful scenery.</li>
              <li>Mental relaxation.</li>
              <li>Can do solo or with group.</li>
              <li>Different lakes, different days.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best senior kayaks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Sit-on-top</strong> — easier in/out than sit-in.</li>
              <li><strong>Wider hull</strong> — more stable.</li>
              <li><strong>Lighter weight</strong> — easier to carry.</li>
              <li><strong>Pelican Sentinel 100X</strong> — $400, beginner.</li>
              <li><strong>Hobie Mirage</strong> — pedal kayak, $1,500-2,500.</li>
              <li><strong>Inflatable</strong> — $200-500, easy storage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Try first — rent</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most lakes have rentals $25-50/hr.</li>
              <li>Try sit-on-top first.</li>
              <li>Outfitter teaches basics.</li>
              <li>Decide if you love it.</li>
              <li>Then buy if regular activity.</li>
              <li>Try 3-5 times before buying.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>ALWAYS wear life jacket.</li>
              <li>Don&apos;t go alone (especially first times).</li>
              <li>Stay close to shore.</li>
              <li>Watch weather.</li>
              <li>Stay hydrated.</li>
              <li>Sun protection — kayaks expose you.</li>
              <li>Tell someone your plan.</li>
              <li>Phone in waterproof pouch.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pedal kayak vs paddle</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Paddle</strong> — traditional, arm exercise.</li>
              <li><strong>Pedal</strong> (Hobie) — leg power, hands free.</li>
              <li>Pedal best if shoulder issues.</li>
              <li>Pedal great for fishing.</li>
              <li>More expensive ($1,500+).</li>
              <li>Both fun.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior kayak clubs</h3>
            <p className="text-sm text-muted-foreground">Many states have senior kayaking groups via Meetup.com. Lake associations. American Canoe Association. Outdoor recreation centers. Group paddles + safety + social. Many seniors continue kayaking into 80s.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
