import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';

export default function MedisafePillReminder() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medisafe Pill Reminder App for Seniors | TekSure" description="Never miss a medication with Medisafe. Free pill reminder app explained for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medisafe</h1>
          <p className="text-lg text-muted-foreground">Never miss a pill. Free reminder app.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Medisafe?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free app — medication reminder for phone.</li>
              <li>Enter your medications + times.</li>
              <li>Phone alerts when it&apos;s time to take them.</li>
              <li>Track if you took each pill or not.</li>
              <li>Family can receive alert if you miss a dose.</li>
              <li>Over 10 million users — widely trusted.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set up your medications</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download Medisafe free from app store.</li>
              <li>Tap &quot;Add Medication.&quot;</li>
              <li>Type medication name — it recognizes most.</li>
              <li>Enter dosage (e.g., 10mg).</li>
              <li>Set times to take it.</li>
              <li>Repeat for each medication.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>App alerts you when time to take medication.</li>
              <li>Tap &quot;Take&quot; to confirm you took it.</li>
              <li>Or tap &quot;Skip&quot; — it records that too.</li>
              <li>View history — see which days you took doses.</li>
              <li>Adherence report — useful for doctor visits.</li>
              <li>Set up refill reminders too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medsafe + family</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Medfriend&quot; — add family member to your account.</li>
              <li>They get alert if you miss a dose.</li>
              <li>Great for adult children monitoring parents.</li>
              <li>Family checks in without calling every day.</li>
              <li>Patient + caregiver both get peace of mind.</li>
              <li>Optional — privacy respected.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Drug interaction check</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Enter all medications — app flags interactions.</li>
              <li>Shows warnings from drug database.</li>
              <li>Useful second opinion — always confirm with doctor.</li>
              <li>Shows food interactions too (grapefruit, etc.).</li>
              <li>Not a replacement for pharmacist advice.</li>
              <li>Good conversation starter with your doctor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other pill reminder options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Health — basic med reminders.</li>
              <li>MyTherapy — similar to Medisafe, also free.</li>
              <li>Pillboxie — simple visual pill organizer app.</li>
              <li>Smart pill dispensers — auto-dispense at set time.</li>
              <li>Alexa reminders: &quot;Alexa, remind me to take my pill.&quot;</li>
              <li>Low-tech: pill organizer + sticky note on coffee maker.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Missing doses is costly</h3>
            <p className="text-sm text-muted-foreground">Studies show seniors miss up to 50% of prescribed doses. Missing blood pressure or diabetes medication regularly leads to hospitalizations that cost far more than any app. Medisafe is free and takes 10 minutes to set up. If you take more than two medications, this app pays for itself many times over in health benefits alone.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
