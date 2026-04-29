import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { RotateCw } from 'lucide-react';

export default function PauseStreamingRotation() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pause &amp; Rotate Streaming — Save \$50/month | TekSure" description="You don&apos;t need 6 streaming services at once. Plain-English strategy to rotate subscriptions and save \$50-100/month." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <RotateCw className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pause & Rotate Streaming</h1>
          <p className="text-lg text-muted-foreground">Save $50-100/month — keep watching everything.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">The strategy</h2>
            <p className="text-sm">Subscribe to ONE streaming service per month. Binge what you want. Cancel. Move to another. Repeat. You can re-subscribe in 30 seconds anytime.</p>
            <p className="text-sm mt-2">Most services don\'t penalize cancellation. They WANT you back.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to rotate</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>List shows you want to watch this year.</li>
              <li>Match each to its streaming service.</li>
              <li>Pick service for THIS month based on what you most want now.</li>
              <li>Cancel previous service when done watching.</li>
              <li>Subscribe to next.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where each show is</h2>
            <p className="text-sm mb-2">Use <strong>JustWatch.com</strong> — search any show, see which service has it.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Marvel + Star Wars + Pixar → Disney+.</li>
              <li>Hulu Originals + Hulu Plus Live TV.</li>
              <li>HBO/Max series.</li>
              <li>Apple Originals (Ted Lasso, Severance, Slow Horses) → Apple TV+.</li>
              <li>Yellowstone, Paramount Originals → Paramount+.</li>
              <li>Bluey, Wicked Tuna → various.</li>
              <li>NFL, MLB, NBA → various live TV services.</li>
              <li>Free → PBS, Pluto, Tubi, Roku Channel.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy cancel + resub</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Most services: account → settings → cancel subscription.</li>
              <li>Apple App Store subscriptions: Settings → Apple ID → Subscriptions.</li>
              <li>Reactivate: same place. 30 seconds.</li>
              <li>Many offer "win-back" 50% off discounts when you return!</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Math</h3>
            <p className="text-sm text-muted-foreground">Stacked: Netflix + Hulu + Disney+ + Max + Apple TV+ = $100/month. Rotating one at a time: ~$15/month. Savings: $1,020/year.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
