import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Banknote } from 'lucide-react';

export default function ATMSafetyGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="ATM Safety for Seniors | TekSure" description="Avoid skimmers, robbers, scams. Plain-English ATM safety for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Banknote className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">ATM Safety</h1>
          <p className="text-lg text-muted-foreground">Skimmers + robbers target seniors. Stay safe.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to use ATMs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bank lobby</strong> — safest. Cameras + staff.</li>
              <li><strong>Bank drive-through</strong> — stay in car, doors locked.</li>
              <li><strong>Major chains in busy stores</strong> — okay.</li>
              <li><strong>AVOID</strong>: gas stations, convenience stores, secluded ATMs.</li>
              <li><strong>AVOID</strong> at night.</li>
              <li><strong>AVOID</strong> when alone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Spot skimmers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>WIGGLE card slot — loose = skimmer.</li>
              <li>Look for loose / wobbly card reader.</li>
              <li>Keypad uneven or thick = overlay.</li>
              <li>Tiny camera near keypad — capture PIN.</li>
              <li>Plastic differences from rest of machine.</li>
              <li>If suspicious — use different ATM.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">PIN protection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cover PIN with hand when typing.</li>
              <li>Use random PIN (no birthdays).</li>
              <li>Don&apos;t share PIN even with family.</li>
              <li>Don&apos;t write on card.</li>
              <li>Different PIN for different cards.</li>
              <li>Memorize — never carry written.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Robbery prevention</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use ATMs in daylight.</li>
              <li>Be aware of surroundings (no headphones).</li>
              <li>Have card ready.</li>
              <li>Cash inside wallet, not in hand.</li>
              <li>Walk to car briskly.</li>
              <li>Look around before stopping.</li>
              <li>If approached — give money, no cash worth life.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Use bank app instead</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most things — no ATM needed.</li>
              <li>Mobile deposit (snap photo of check).</li>
              <li>Transfer money via app.</li>
              <li>See balance + history.</li>
              <li>Pay bills via app.</li>
              <li>Reduce ATM trips = lower risk.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If skimmed</h3>
            <p className="text-sm text-muted-foreground">Report to bank IMMEDIATELY. Federal law protects — $50 max liability. Bank reverses fraudulent charges. Cancel + reissue card. Place fraud alert. Many seniors skimmed don&apos;t notice for weeks — quick action limits damage.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
