import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

export default function CPAPMaintenanceApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="CPAP Maintenance + Apps for Senior Users | TekSure" description="CPAP cleaning + tracking. Apps + maintenance schedule for senior CPAP users." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">CPAP Apps + Care</h1>
          <p className="text-lg text-muted-foreground">Track usage + maintain machine.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Manufacturer apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>ResMed myAir — most popular.</li>
              <li>Philips DreamMapper.</li>
              <li>Track usage hours nightly.</li>
              <li>AHI events — apnea per hour.</li>
              <li>Mask leak data.</li>
              <li>Free with machine.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance compliance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Medicare requires 4 hours/night × 22 of 30 days.</li>
              <li>Tracked automatically.</li>
              <li>Otherwise lose coverage.</li>
              <li>Show progress in app.</li>
              <li>Easy to verify compliance.</li>
              <li>Critical first 90 days.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cleaning routine</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Daily — wipe mask cushion.</li>
              <li>Weekly — wash mask + tubing.</li>
              <li>Monthly — replace water in humidifier.</li>
              <li>Every 3 months — replace filter.</li>
              <li>Replace mask every 6 months.</li>
              <li>Replace tubing yearly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Replacement supplies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Insurance covers most.</li>
              <li>Set calendar reminders.</li>
              <li>Replace per Medicare schedule.</li>
              <li>Medical supply company sends.</li>
              <li>Or order direct online.</li>
              <li>Critical for clean breathing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Travel CPAP</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smaller, lighter machines available.</li>
              <li>$700-$1,200 typical cost.</li>
              <li>TSA accepts as carry-on (not luggage).</li>
              <li>Insurance may cover for travel.</li>
              <li>Battery option for camping.</li>
              <li>Don&apos;t skip CPAP on travel.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If CPAP not working</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mask uncomfortable — try different style.</li>
              <li>Pressure too high/low — adjust with sleep doc.</li>
              <li>Dry mouth — humidifier help.</li>
              <li>Many adjustments possible.</li>
              <li>Don&apos;t give up.</li>
              <li>Untreated apnea = serious health risk.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Use the app</h3>
            <p className="text-sm text-muted-foreground">If you have CPAP, use the manufacturer app (ResMed myAir or Philips DreamMapper). Track compliance for Medicare. See your progress + leak data. Adjust if not working. Many seniors give up on CPAP — the app data helps doctor solve issues. Stick with it. Your heart + brain depend on quality sleep.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
