import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { DoorOpen } from 'lucide-react';

const PICKS = [
  { name: 'Ring Battery Doorbell Plus', price: '$150 + $5/mo', best: 'Most popular. Easy battery install — no wiring needed. Works with any home. Subscription only required to record/save video.', cons: 'Owned by Amazon. Real-time alerts even without subscription, but no playback.' },
  { name: 'Ring Wired Doorbell', price: '$100 + $5/mo', best: 'If your house already has a wired doorbell, this replaces it directly. Better video quality.', cons: 'Same Amazon ecosystem.' },
  { name: 'Google Nest Doorbell (battery)', price: '$180 + $8/mo', best: 'Smarter alerts — recognizes packages, people, animals separately. Best AI.', cons: 'Sound recording disabled in some states. Subscription nudges you constantly.' },
  { name: 'Eufy Security Doorbell', price: '$160, no subscription', best: 'Local storage — saves video to your home, no monthly fee. Privacy-friendly.', cons: 'Sets up by itself. Larger than others. Less polished app.' },
  { name: 'SimpliSafe Smart Alarm + Doorbell', price: '$170 doorbell + alarm system', best: 'Pairs with full home security. Pro monitoring optional ($28/mo).', cons: 'Best as part of a larger SimpliSafe system.' },
];

export default function SmartDoorbellPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Doorbell Picker — Ring, Nest, Eufy | TekSure" description="See who's at the door from your phone. Plain-English picks for video doorbells, with subscription costs and privacy tradeoffs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <DoorOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Doorbell Picker</h1>
          <p className="text-lg text-muted-foreground">See your front porch from anywhere. The honest picks.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why install one</h2>
            <ul className="text-sm list-disc pl-5">
              <li>See packages arrive (and confirm they\'re still there).</li>
              <li>Talk to delivery drivers from your couch ("leave it by the door").</li>
              <li>Identify who knocked while you were out.</li>
              <li>Catch porch pirates and door-to-door scams on video.</li>
              <li>Don\'t need to get up to answer the door.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm mb-1"><strong>Best:</strong> {p.best}</p>
                <p className="text-sm text-muted-foreground"><strong>Watch out:</strong> {p.cons}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy install (battery doorbells)</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Charge the doorbell\'s battery (~6 hours).</li>
              <li>Install the brand\'s app on your phone. Sign up for an account.</li>
              <li>App walks you through pairing — usually a 5-second QR scan.</li>
              <li>Connect it to your home Wi-Fi.</li>
              <li>Mount it next to your door using the included screws or 3M tape.</li>
              <li>Test the doorbell — phone buzzes when someone rings.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">About subscriptions</h2>
            <p className="text-sm mb-2">Most doorbells\' juicy features (video history, AI alerts, sharing) need a $5-10/month subscription:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Without subscription:</strong> Live view + real-time alerts work. No saved video.</li>
              <li><strong>With subscription:</strong> 30-day video history, package detection, face recognition.</li>
              <li><strong>Privacy-conscious option:</strong> Eufy or Reolink — local storage only, no fee.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-4 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Privacy considerations</h3>
            <p className="text-sm text-muted-foreground">Ring partners with police departments — some videos can be requested by police. If that bothers you, choose Eufy or another local-storage option. Consider warning visitors with a small "Recording" sign — required by law in some states.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
