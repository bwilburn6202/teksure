import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function PillIdentifierApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pill Identifier — What Is This Pill? | TekSure" description="Found a loose pill? Plain-English guide to free pill identifier tools — Drugs.com, WebMD, take a photo, look up by markings and color." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pill Identifier</h1>
          <p className="text-lg text-muted-foreground">Loose pill? No label? Identify it free.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best free pill identifiers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Drugs.com Pill Identifier</strong> — best free option. Search by imprint (the letters/numbers on the pill), shape, color. Or upload a photo.</li>
              <li><strong>WebMD Pill Identifier</strong> — similar, also free.</li>
              <li><strong>Pill Identifier by Drugs.com mobile app</strong> — free phone app version.</li>
              <li><strong>RxList Pill Identifier</strong> — backup option.</li>
              <li><strong>Apple Health → Medications</strong> — if a med is in your list, tap it to see the matching photo.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to identify a pill</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Look at the pill closely. Most have an imprint — letters, numbers, a logo.</li>
              <li>Note the shape (round, oval, capsule, etc.).</li>
              <li>Note the color(s).</li>
              <li>Note if it\'s scored (a line down the middle).</li>
              <li>Go to <strong>drugs.com/pill_identification.html</strong>.</li>
              <li>Type the imprint, pick the shape and color.</li>
              <li>Click search. Match the photo to your pill.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Better than guessing — call the pharmacist</h2>
            <p className="text-sm">Photograph the pill, call your pharmacy, and describe the imprint. They identify it from their database in 30 seconds. Free.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you find loose pills</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>In a child\'s reach</strong> — call Poison Control (1-800-222-1222) immediately.</li>
              <li><strong>From a deceased relative\'s home</strong> — never reuse. Take to a pharmacy take-back program (most have free drop-off bins) or to a Drug Take Back Day (twice a year nationally, search "DEA Take Back Day").</li>
              <li><strong>Yours, but you don\'t remember what it was</strong> — identify, don\'t take. Could be expired or recalled.</li>
              <li><strong>NEVER flush pills</strong> — pollutes water. Use take-back instead.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip</h3>
            <p className="text-sm text-muted-foreground">Take a photo of EACH of your medications when you start them. Save in a "Meds" album in your phone. If a pill spills, you can match against your photos. Add a note: "Atenolol 50mg, take with breakfast, refill every 90 days at CVS."</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
