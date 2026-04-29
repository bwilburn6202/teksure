import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Watch } from 'lucide-react';

export default function AppleWatchAsPhone() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Watch as Standalone Phone | TekSure" description="Use Apple Watch without iPhone. Plain-English guide for using cellular Apple Watch alone — best for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Watch className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Watch as Phone</h1>
          <p className="text-lg text-muted-foreground">Wrist phone. Fall detection. Always with you.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it can do alone</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Make + receive phone calls.</li>
              <li>Send + receive texts.</li>
              <li>Apple Maps for directions.</li>
              <li>Music streaming (Apple Music).</li>
              <li>Heart rate + ECG.</li>
              <li>Fall detection — auto-calls 911 if you fall + don&apos;t move.</li>
              <li>Emergency SOS via satellite (Series 9+ Ultra).</li>
              <li>Apple Pay.</li>
              <li>Water resistant — wear anywhere.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cellular plan setup</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Buy <strong>cellular</strong> Apple Watch — NOT GPS-only ($349-799).</li>
              <li>Pair with iPhone first (need iPhone to set up).</li>
              <li>Add cellular plan via carrier (Verizon, AT&amp;T, T-Mobile) — $10/mo extra.</li>
              <li>Watch shares iPhone&apos;s number.</li>
              <li>Once activated, leave iPhone home — Watch works alone.</li>
              <li>Calls + texts arrive on watch.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">"Family Setup" — without iPhone needed</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple introduced "Family Setup" — Watch works without senior having own iPhone.</li>
              <li>Adult child manages Watch from THEIR iPhone.</li>
              <li>Senior gets their own number, calls, texts.</li>
              <li>Family monitors heart, falls, location.</li>
              <li>Brilliant for seniors who never want a smartphone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior model picks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Watch SE Cellular</strong> ($299) — best value. All key features.</li>
              <li><strong>Apple Watch Series 10 Cellular</strong> ($499) — bigger screen, ECG.</li>
              <li><strong>Apple Watch Ultra 2</strong> ($799) — toughest. Satellite SOS.</li>
              <li>SE is great for most seniors. Ultra unnecessary.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Charges nightly</h3>
            <p className="text-sm text-muted-foreground">Apple Watch lasts 1-2 days. Charge nightly (or while showering) — habit forms in a week. Never run out. Series 10 charges to 80% in 30 min.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
