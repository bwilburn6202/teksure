import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function MedicalRecordsCarry() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Carry Your Medical Records (Wallet) | TekSure" description="Emergency-ready medical info. Plain-English plan for what to carry: medication list, allergies, conditions, contacts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medical Records Carry Card</h1>
          <p className="text-lg text-muted-foreground">5 minutes that could save your life.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The wallet card</h2>
            <p className="text-sm">Print on index card. Laminate. Keep in wallet behind ID. Updated every 6 months.</p>
            <ul className="list-disc pl-5 space-y-2 text-sm mt-2">
              <li>Full legal name + DOB.</li>
              <li>Photo (small).</li>
              <li>Conditions: e.g., "Diabetes type 2, Atrial Fib, History of MI 2019."</li>
              <li>Allergies: e.g., "Penicillin (severe), Shellfish."</li>
              <li>Medications + doses.</li>
              <li>Blood thinner? — bold red.</li>
              <li>Pacemaker? — bold red.</li>
              <li>Implants (hip, knee, stent).</li>
              <li>Doctor name + phone.</li>
              <li>Pharmacy name + phone.</li>
              <li>Emergency contact name + relationship + phone.</li>
              <li>Religious preferences (DNR, etc. if applicable).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone Medical ID (also crucial)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open Health app on iPhone.</li>
              <li>Tap your photo → Medical ID → Edit.</li>
              <li>Fill in all medical info above.</li>
              <li>Toggle "Show When Locked" ON.</li>
              <li>EMTs press emergency call → see Medical ID without unlocking.</li>
              <li>Saves life if unconscious.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android equivalent</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → About phone → Emergency information.</li>
              <li>Add medical info, blood type, allergies.</li>
              <li>Add emergency contacts.</li>
              <li>Visible from lock screen via Emergency Call.</li>
              <li>Some Samsungs have it under Safety + Emergency.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other emergency tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>MedicAlert bracelet</strong> — engraved + 24/7 hotline. $40/yr. Best for severe allergies/conditions.</li>
              <li><strong>Vial of Life</strong> — magnet on fridge with med list. EMTs trained to look. Free at senior centers.</li>
              <li><strong>Yellow Dot Program</strong> — sticker on car back window points EMTs to glove-box info packet.</li>
              <li><strong>USB medical card</strong> — encrypted PDF on USB on keychain.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Update twice a year</h3>
            <p className="text-sm text-muted-foreground">January 1 + July 4 — re-check your medical card. Outdated info is sometimes worse than no info. Replace meds list when changed. Replace whole card after surgeries / new diagnoses.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
