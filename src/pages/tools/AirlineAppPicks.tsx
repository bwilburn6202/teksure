import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function AirlineAppPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Airline Apps — What to Download | TekSure" description="Boarding pass, gate change alerts, free wifi, airport maps. Plain-English picks for what to download before flying." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Airline Apps to Download</h1>
          <p className="text-lg text-muted-foreground">Smooth-sailing day-of-flight kit.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Your airline&apos;s app (must-have)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>American Airlines</strong> — best for status &amp; upgrades.</li>
              <li><strong>Delta</strong> — most reliable. Great gate-change alerts.</li>
              <li><strong>United</strong> — strong international.</li>
              <li><strong>Southwest</strong> — A-list boarding requires app at 24-hour check-in.</li>
              <li><strong>JetBlue</strong> — clean, simple.</li>
              <li><strong>Alaska Airlines</strong> — top-rated app for usability.</li>
            </ul>
            <p className="text-sm mt-3">Use the app for: digital boarding pass, real-time delays, free in-flight messaging, gate changes (often pinged BEFORE airport speakers announce).</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">TSA &amp; airport apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>MyTSA</strong> — security wait times by airport. Tells you what&apos;s allowed in a carry-on.</li>
              <li><strong>FlightAware</strong> — real-time flight tracking. See if your delayed plane is even at the airport yet.</li>
              <li><strong>Mobile Passport Control (US Customs)</strong> — skip Customs lines on return. Free.</li>
              <li><strong>TSA PreCheck app</strong> — manage application + renewal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">In-flight tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Free messaging</strong> — Most US airlines: free iMessage/WhatsApp/Facebook Messenger texts in flight.</li>
              <li><strong>T-Mobile customers</strong> — free in-flight wifi on most US airlines.</li>
              <li><strong>Pre-download Netflix shows</strong> — over wifi at home, watch on plane without paying for wifi.</li>
              <li><strong>Airline app entertainment</strong> — most have free movies/TV via app on your own device.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Day-of checklist</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>24 hours before — check in via app, save boarding pass to Apple/Google Wallet.</li>
              <li>2 hours before — leave home (3 hours for international).</li>
              <li>App — verify gate, security wait time.</li>
              <li>Add boarding pass to Apple Wallet — no internet needed at gate.</li>
              <li>Charge phone to 100% — long flights drain it.</li>
              <li>Bring portable charger ($20 Anker) — outlet seats not guaranteed.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If your flight is delayed/canceled</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Check airline app FIRST</strong> — already may have rebooked you.</li>
              <li><strong>Call 1-800 number</strong> while waiting in gate-agent line. Whoever answers first wins.</li>
              <li><strong>Use Twitter/X</strong> — DM the airline. They respond fast publicly.</li>
              <li><strong>Federal rules (2024)</strong> — if airline cancels or delays 3+ hours, you&apos;re owed FULL REFUND, no fees. Even on non-refundable tickets.</li>
              <li>Don&apos;t accept a voucher unless you want one.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior tip — wheelchair help</h3>
            <p className="text-sm text-muted-foreground">If walking to gate is hard — request "wheelchair assistance" 24+ hours before flight in the app or by phone. FREE service, federal law requires it. Tip the helper $5-10. Skip the long walk and often security line.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
