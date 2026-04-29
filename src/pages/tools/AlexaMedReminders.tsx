import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PillBottle } from 'lucide-react';

export default function AlexaMedReminders() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Alexa Medication Reminders for Seniors | TekSure" description="Free medication reminders. Plain-English Alexa setup for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PillBottle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Alexa Med Reminders</h1>
          <p className="text-lg text-muted-foreground">Never miss a pill. Free.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup voice reminder</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Alexa, set medication reminder for 8am every day.&quot;</li>
              <li>Alexa repeats announcement at time.</li>
              <li>&quot;Time to take your morning medication.&quot;</li>
              <li>Set multiple per day (8am, 2pm, 8pm).</li>
              <li>Edit/cancel via Alexa app.</li>
              <li>Family can monitor via Care Hub.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Care Hub for family</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free family caregiver tool.</li>
              <li>Family member sees activity (no exact details).</li>
              <li>Notification if no activity for hours.</li>
              <li>Can &quot;Drop In&quot; for video chat.</li>
              <li>Activity Feed shows when senior interacted with Alexa.</li>
              <li>Setup: Alexa app → Communicate → Care Hub.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Alexa Together ($20/mo)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Caregiver paid version of Care Hub.</li>
              <li>Activity tracking + alerts.</li>
              <li>24/7 emergency hotline.</li>
              <li>Connect 2 Echo devices.</li>
              <li>Custom Alerts to caregiver.</li>
              <li>Worth it for those alone with family far.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Med-specific apps work too</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Medisafe</strong> — free, top-rated.</li>
              <li><strong>MyTherapy</strong> — free.</li>
              <li><strong>Pill Reminder</strong>.</li>
              <li>Phone alarms work.</li>
              <li>Combine: phone + Alexa = double reminder.</li>
              <li>Smart pill bottle (Hero, Tinylogics) = $30-100.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you take many meds</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pill organizer (weekly) — $5-30.</li>
              <li>Set Sunday night to fill.</li>
              <li>Voice reminder + visual = layers.</li>
              <li>Pharmacy delivery automated (CVS, Walgreens).</li>
              <li>Auto-refills setup.</li>
              <li>Plus blood pressure / glucose tracking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Catch missed doses</h3>
            <p className="text-sm text-muted-foreground">Smart pill bottles light up if missed. Hero auto-dispenses. PillPack pre-sorts by time. AmazonPharmacy + PillPack = monthly delivery. Many seniors use combinations: Alexa reminder + pill organizer + PillPack delivery = comprehensive.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
