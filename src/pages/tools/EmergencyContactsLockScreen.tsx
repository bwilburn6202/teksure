import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function EmergencyContactsLockScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Emergency Contacts on Lock Screen | TekSure" description="Set up emergency info on phone lock screen. Plain-English steps for iPhone Medical ID + Android Emergency info." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emergency Lock Screen</h1>
          <p className="text-lg text-muted-foreground">EMTs see this. Could save life.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone Medical ID</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open Health app.</li>
              <li>Tap your photo (top right) → Medical ID.</li>
              <li>Tap "Edit".</li>
              <li>Fill: name, DOB, conditions, allergies, medications, blood type.</li>
              <li>Add emergency contacts.</li>
              <li>Toggle "Show When Locked" ON.</li>
              <li>Toggle "Share During Emergency Call" ON.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How EMTs see it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Locked iPhone — press emergency call button.</li>
              <li>Tap "Medical ID" — shows your info WITHOUT unlocking.</li>
              <li>EMT sees: medications, allergies, conditions, contacts.</li>
              <li>Saves life if you can&apos;t talk.</li>
              <li>Especially helpful for: blood thinners, severe allergies, pacemaker.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android emergency info</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → About phone → Emergency Information.</li>
              <li>Add medical conditions, allergies, blood type.</li>
              <li>Add emergency contacts.</li>
              <li>Visible from lock screen via Emergency Call.</li>
              <li>Some Samsungs: Settings → Safety + Emergency.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other lock screen tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Lock screen widget</strong> — name, "If found, call ___" (Settings → Lock Screen).</li>
              <li><strong>iOS 16+ Lock Screen</strong> — emergency contact widget.</li>
              <li><strong>Apple Watch</strong> — automatically calls emergency contacts on fall/SOS.</li>
              <li><strong>Medical ID bracelet</strong> — backup if phone broken/dead.</li>
              <li><strong>Vial of Life sticker</strong> on fridge — EMTs trained to look.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Update twice a year</h3>
            <p className="text-sm text-muted-foreground">Set reminder Jan + July — verify Medical ID + emergency contacts current. New medications? Update. New phone? Re-set up. 5 minutes / year — could save your life.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
