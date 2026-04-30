import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function ValentinesDayDigital() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Valentine's Day Digital for Seniors | TekSure" description="Send love digitally. Valentine's tech for senior couples." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Valentine&apos;s Day Digital</h1>
          <p className="text-lg text-muted-foreground">Spread love. Avoid romance scams.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Digital cards + flowers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hallmark eCards</strong> — animated, personalized.</li>
              <li><strong>Jacquie Lawson</strong> — beautiful animations.</li>
              <li><strong>Punchbowl</strong> — free animated cards.</li>
              <li><strong>1-800-Flowers</strong>, ProFlowers.</li>
              <li><strong>FTD</strong> — local florist delivery.</li>
              <li>Order 3-4 days ahead.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Long-distance love</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FaceTime dinner together.</li>
              <li>Watch movie via Teleparty.</li>
              <li>Send playlist of meaningful songs.</li>
              <li>Photo book of memories.</li>
              <li>Voice memo of why you love them.</li>
              <li>Schedule activities together apart.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Romance scam warnings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FBI: $1.3 billion lost to romance scams 2023.</li>
              <li>Online &quot;love&quot; never asks for money.</li>
              <li>Won&apos;t video call = scammer.</li>
              <li>&quot;Stuck overseas, send money&quot; = scam.</li>
              <li>Crypto / gift card requests = scam.</li>
              <li>Background check via TruthFinder.</li>
              <li>Reverse image search photos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior dating apps (safer)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>OurTime</strong> — 50+.</li>
              <li><strong>SilverSingles</strong> — 50+.</li>
              <li><strong>Match.com</strong> — established.</li>
              <li><strong>eHarmony</strong> — values-based.</li>
              <li>Always meet in public first time.</li>
              <li>Tell family + friend before meeting.</li>
              <li>Share live location.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Couples activities tech</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cook together — recipe app.</li>
              <li>Make playlist of your songs.</li>
              <li>Watch wedding video on TV.</li>
              <li>Photo slideshow on smart TV.</li>
              <li>Plan trip — Google Maps explore.</li>
              <li>Star-gaze with SkyView app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Last-minute gifts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Amazon Prime same-day.</li>
              <li>Local florist + Instacart.</li>
              <li>Restaurant gift card via email.</li>
              <li>Streaming service subscription.</li>
              <li>Spotify song dedication.</li>
              <li>Photo book delivered overnight.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Memory video</h3>
            <p className="text-sm text-muted-foreground">Most romantic + free: open Photos app. Make slideshow of all your years together. Add favorite song. Show on TV with Apple TV or Chromecast. Beats roses for impact. Print photo book yearly — Shutterfly. Decades of Valentine&apos;s memorialized.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
