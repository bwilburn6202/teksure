import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ParkingSquare } from 'lucide-react';

export default function ParkMobileSparkSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Parking Apps for Seniors | TekSure" description="ParkMobile, SpotHero parking apps for seniors. Pay parking from phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ParkingSquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Parking Apps</h1>
          <p className="text-lg text-muted-foreground">Pay meters + find spots from phone.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">ParkMobile</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pay parking meters via phone.</li>
              <li>No more digging for coins.</li>
              <li>Add time remotely from restaurant.</li>
              <li>Get text 5 minutes before expires.</li>
              <li>$0.40 fee per transaction.</li>
              <li>Most major US cities.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SpotHero — find + reserve</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reserve parking before arriving.</li>
              <li>Often cheaper than walk-up.</li>
              <li>Garage + lot reservations.</li>
              <li>Show QR code at entrance.</li>
              <li>Major cities + airports.</li>
              <li>Save 25–50% on garages.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Park Whiz</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Compare parking prices.</li>
              <li>Reserve cheaper spots.</li>
              <li>Especially good for sports + concerts.</li>
              <li>Airport parking options.</li>
              <li>Compare 5–10 garages near destination.</li>
              <li>Free app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior driver perks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No coin fumbling.</li>
              <li>Add time from anywhere.</li>
              <li>Don&apos;t miss meal because parking expires.</li>
              <li>Disabled parking apps integrate.</li>
              <li>Easy on arthritic hands.</li>
              <li>Visual confirmation paid.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple/Google Maps integration</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap parking icon in Maps.</li>
              <li>Opens parking app automatically.</li>
              <li>Some integrate with car&apos;s display.</li>
              <li>CarPlay / Android Auto support.</li>
              <li>Don&apos;t handle phone while driving.</li>
              <li>Set up parking before driving.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safe driving habits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use parking apps only when parked.</li>
              <li>Set up before turning car on.</li>
              <li>Voice control via Siri/Google.</li>
              <li>Don&apos;t fumble with phone in traffic.</li>
              <li>Family member help with first setup.</li>
              <li>Pay attention to road > the app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">ParkMobile downtown</h3>
            <p className="text-sm text-muted-foreground">If you visit downtown areas regularly, ParkMobile saves frustration. Most cities have switched from coin meters to ParkMobile zones. Sign up before next visit. Add time from your restaurant table without running back to feed meter. The $0.40 fee is worth never getting parking tickets again.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
