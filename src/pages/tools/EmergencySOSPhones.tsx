import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function EmergencySOSPhones() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Emergency SOS on Phones for Seniors | TekSure" description="How to use Emergency SOS on iPhone and Android. Quick 911 access for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emergency SOS</h1>
          <p className="text-lg text-muted-foreground">911 + family alert in one button press.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone Emergency SOS</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hold side + volume buttons together.</li>
              <li>Slide to call 911.</li>
              <li>Or hold longer — countdown then auto-calls.</li>
              <li>Sends location to emergency contacts.</li>
              <li>Keep holding until call connects.</li>
              <li>Works without unlocking phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android Emergency SOS</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Press power button 5 times rapidly.</li>
              <li>Or Settings → Safety + Emergency.</li>
              <li>Set up emergency contacts to notify.</li>
              <li>Auto-dials 911 with countdown.</li>
              <li>Records video of surroundings (optional).</li>
              <li>Sends GPS location.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup BEFORE you need it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone: Settings → Emergency SOS.</li>
              <li>Add emergency contacts.</li>
              <li>Enable &quot;Call with Hold&quot; if preferred.</li>
              <li>Set up Medical ID separately.</li>
              <li>Toggle &quot;Show When Locked&quot; ON.</li>
              <li>Test (without sending) once to feel comfortable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Watch Emergency SOS</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hold side button until SOS slider appears.</li>
              <li>Slide to call 911.</li>
              <li>Or Fall Detection auto-triggers it.</li>
              <li>Works on Apple Watch even without iPhone nearby (cellular).</li>
              <li>Saves lives every week according to Apple.</li>
              <li>Worth investing in cellular Apple Watch.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Watch Fall Detection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Watch SE + 4+ have it.</li>
              <li>Detects hard falls automatically.</li>
              <li>Asks if you&apos;re OK.</li>
              <li>Auto-calls 911 if no response in 60 seconds.</li>
              <li>Texts emergency contacts your location.</li>
              <li>Single most important senior safety tech.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other emergency apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Life360 — family location + crash detection.</li>
              <li>Red Panic Button — sends alert to contacts.</li>
              <li>SilverSafety — senior-focused emergency app.</li>
              <li>FCC Wireless Emergency Alerts (auto on phones).</li>
              <li>Medical alert pendants still useful for some.</li>
              <li>Apple Watch + iPhone Emergency SOS often replace pendants.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Test once + add contacts</h3>
            <p className="text-sm text-muted-foreground">This week, set up Emergency SOS on your iPhone or Android. Add 2–3 emergency contacts (family who can respond). Practice the button press once (cancel before it actually dials). Knowing how to trigger it before an emergency happens is critical. Combined with Apple Watch fall detection, this is the most important senior safety tech available.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
