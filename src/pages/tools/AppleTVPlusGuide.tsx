import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv2 } from 'lucide-react';

export default function AppleTVPlusGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple TV+ Guide for Seniors | TekSure" description="Quality streaming. Plain-English Apple TV+ guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple TV+</h1>
          <p className="text-lg text-muted-foreground">$10/mo. Quality over quantity.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Apple TV+</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$10/mo. No ads.</li>
              <li>Smaller selection but high quality.</li>
              <li>Award-winning original content.</li>
              <li>Family share (5 people).</li>
              <li>Free 3-month trial with new Apple device.</li>
              <li>Free 7-day trial.</li>
              <li>Often free with Apple One bundle.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-favorite shows</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Ted Lasso</strong> — feel-good comedy.</li>
              <li><strong>The Morning Show</strong> — drama with Reese Witherspoon.</li>
              <li><strong>Slow Horses</strong> — British spy series.</li>
              <li><strong>Foundation</strong> — sci-fi epic.</li>
              <li><strong>For All Mankind</strong> — alternate space race.</li>
              <li><strong>Dickinson</strong> — Emily Dickinson.</li>
              <li><strong>The Reluctant Traveler</strong> — Eugene Levy travel.</li>
              <li><strong>Severance</strong> — psychological mystery.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple One bundle</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Individual</strong> $20/mo — Apple TV+, Music, iCloud 50GB, Arcade.</li>
              <li><strong>Family</strong> $26/mo — same shared with 5.</li>
              <li><strong>Premier</strong> $38/mo — adds 2TB iCloud + News+ + Fitness+.</li>
              <li>Saves $10-30/mo vs separate subscriptions.</li>
              <li>Worth it if using multiple Apple services.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple TV box vs app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple TV 4K box</strong> — $130. Premium streaming.</li>
              <li>App on Smart TV, Roku, Fire TV — same content cheaper.</li>
              <li>App on iPad, iPhone too.</li>
              <li>Box best for Apple ecosystem users.</li>
              <li>Roku/Fire TV cheaper alternatives.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free trial first.</li>
              <li>Cancel anytime.</li>
              <li>Subscribe → binge → cancel pattern.</li>
              <li>Subtitles work great here.</li>
              <li>Audio description for many shows.</li>
              <li>4K HDR if your TV supports.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Worth it test</h3>
            <p className="text-sm text-muted-foreground">Watch Ted Lasso (3 seasons). If loved it = $30 well spent ($10 x 3 mo). Cancel after. Coming back when new shows announced. Most seniors do this rather than perpetual subscription. Apple TV+ best as occasional streamer.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
