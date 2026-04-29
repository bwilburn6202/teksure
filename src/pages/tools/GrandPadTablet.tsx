import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tablet } from 'lucide-react';

export default function GrandPadTablet() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="GrandPad Tablet for Seniors | TekSure" description="Senior-specific tablet that just works. Plain-English GrandPad guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tablet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">GrandPad Tablet</h1>
          <p className="text-lg text-muted-foreground">For seniors who tried iPad and gave up.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it is</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tablet built JUST for seniors.</li>
              <li>Big buttons + simple icons.</li>
              <li>Pre-set with family contacts only.</li>
              <li>NO scams or unexpected apps.</li>
              <li>Built-in cellular (no WiFi setup).</li>
              <li>$80 + $40/mo membership.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Video calls with family (one tap).</li>
              <li>Photos shared from family phones.</li>
              <li>Voice messages.</li>
              <li>Email simplified.</li>
              <li>Music, audiobooks, news.</li>
              <li>Weather, calendar.</li>
              <li>Brain games + puzzles.</li>
              <li>NO browser / Facebook / etc. (good thing).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Seniors with mild cognitive decline.</li>
              <li>Family wants to share photos / video chat.</li>
              <li>Senior unable to manage WiFi/passwords.</li>
              <li>Worried about scams.</li>
              <li>Senior in care facility.</li>
              <li>Family willing to pay $40/mo.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">vs regular tablet</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iPad</strong> — better long-term value if senior can manage.</li>
              <li><strong>iPad with Assistive Access</strong> (iOS 17+) — free senior simplified mode.</li>
              <li><strong>GrandPad</strong> — much simpler, but locked-in.</li>
              <li><strong>Big Button cell</strong> — Jitterbug etc. for calls only.</li>
              <li>Try iPad with Assistive Access first — cheaper.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Subscription</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$40/mo includes cellular data.</li>
              <li>NO contract.</li>
              <li>24/7 customer support.</li>
              <li>Family manages remotely from app.</li>
              <li>Cancel anytime.</li>
              <li>$60/mo for plus version.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free alternative: iPad Assistive Access</h3>
            <p className="text-sm text-muted-foreground">iOS 17+ has &quot;Assistive Access&quot; — limits iPad to 5 apps senior chooses (Phone, Camera, Photos, Music, Messages). Big text + simple icons. Set up by family. FREE if you have iPad. Try this BEFORE buying GrandPad. Settings → Accessibility → Assistive Access.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
