import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function TravelTechPack() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Travel Tech Pack — TSA Pre, Mobile Passport, Boarding Pass | TekSure" description="Skip the lines. Set up TSA PreCheck, Global Entry, Mobile Passport Control, and digital boarding passes — every app you need before your next trip." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Travel Tech Pack</h1>
          <p className="text-lg text-muted-foreground">Set these up once. Save hours every trip.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">✈️ TSA PreCheck — $77 for 5 years</h2>
            <p className="text-sm mb-2">Shorter security line at the airport. Keep shoes, belt, and laptop on/in. Also keeps liquids and food in the bag. Saves 15-30 minutes per trip.</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Apply at <a href="https://www.tsa.gov/precheck" target="_blank" rel="noopener noreferrer" className="text-primary underline">tsa.gov/precheck</a>.</li>
              <li>Pay $77 online with credit card.</li>
              <li>Schedule a 10-minute in-person fingerprint visit (most cities have appointments within a week).</li>
              <li>Bring driver's license + passport or birth certificate.</li>
              <li>You get a "Known Traveler Number" within 3-5 days. Add it to every airline account.</li>
            </ol>
            <p className="text-sm mt-2 bg-muted/50 p-3 rounded"><strong>Quick Tip:</strong> Many credit cards (Chase Sapphire, Amex Platinum) reimburse the $77 fee. Check before paying.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🌎 Global Entry — $120 for 5 years</h2>
            <p className="text-sm mb-2">For international travel. Skips the customs line on the way home. Includes TSA PreCheck. Best deal if you fly abroad even once a year.</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Apply at <a href="https://ttp.cbp.dhs.gov" target="_blank" rel="noopener noreferrer" className="text-primary underline">ttp.cbp.dhs.gov</a>.</li>
              <li>Pay $120. Wait for "conditional approval" (1-3 months).</li>
              <li>Schedule an interview at the airport. (Or do "Enrollment on Arrival" when you next fly home from abroad — no separate trip.)</li>
              <li>Bring passport.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📱 Mobile Passport Control (free)</h2>
            <p className="text-sm mb-2">Free alternative to Global Entry for re-entering the US. Not as fast, but no fee.</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Install the <strong>Mobile Passport Control</strong> app from CBP (App Store, Play Store).</li>
              <li>Add your passport details once (saves on the phone).</li>
              <li>When landing back in the US — open the app, fill in your declaration, get a QR code.</li>
              <li>Scan the QR code in the special MPC line — usually shorter than the regular line.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🎫 Digital boarding passes</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Install your airline's app — Delta, American, United, Southwest, JetBlue, etc.</li>
              <li>Sign in with your frequent flyer account.</li>
              <li>24 hours before flight: tap "Check In" — no kiosk needed.</li>
              <li>Tap "Add to Apple Wallet" or "Google Wallet" — boarding pass lives in your phone's Wallet app.</li>
              <li>At security and gate, just hold your phone screen up to the scanner.</li>
            </ol>
            <p className="text-sm mt-2"><strong>Tip:</strong> Take a screenshot of the boarding pass too. If your battery dies, you can show the screenshot.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🏨 Hotel apps worth installing</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Marriott Bonvoy, Hilton Honors, IHG, Hyatt</strong> — chain apps for digital room keys, mobile check-in.</li>
              <li><strong>Booking.com, Expedia, Hotels.com</strong> — for shopping rates across chains.</li>
              <li><strong>Airbnb / VRBO</strong> — for vacation rentals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🌐 International travel essentials</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Translate app</strong> with offline language packs.</li>
              <li><strong>Currency converter</strong> — Apple's Calculator app does this; or install XE.</li>
              <li><strong>Google Maps with offline maps downloaded</strong> for your destination city before you fly.</li>
              <li><strong>WhatsApp</strong> — most of the world uses this for messaging.</li>
              <li><strong>Skyscanner</strong> or <strong>Hopper</strong> — track flight prices.</li>
              <li><strong>Smart Traveler Enrollment Program (STEP)</strong> — free, register at travel.state.gov so the State Department can reach you in emergencies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Day-of-flight checklist</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Charge phone fully. Bring a portable battery pack.</li>
              <li>Add boarding pass to Apple Wallet / Google Wallet.</li>
              <li>Screenshot the boarding pass as backup.</li>
              <li>Photo of your passport, ID, and credit card numbers — save in a private notes app.</li>
              <li>Turn on iPhone/Android low-power mode for the flight.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
