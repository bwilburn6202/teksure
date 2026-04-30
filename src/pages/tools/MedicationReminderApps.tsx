import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

const APPS = [
  { name: 'Apple Health Medications', cost: 'FREE on iPhone', best: 'Built-in. Set reminders, log when you took it. Drug interactions warnings. Pair with Apple Watch buzz.', good: 'No extra app needed if you have iPhone.' },
  { name: 'Medisafe', cost: 'Free; $5/mo Premium', best: 'Most popular pill reminder. Family caregiver mode — your daughter gets alerted if you skip a dose.', good: 'Free version is fine for solo use.' },
  { name: 'PillPack (Amazon Pharmacy)', cost: 'Insurance copay (no extra fee)', best: 'Pharmacy delivers EVERY pill pre-sorted in dated packets. No reminder needed because each packet is labeled with date and time.', good: 'Best for 5+ daily medications.' },
  { name: 'CareZone', cost: 'FREE', best: 'Tracks meds, scan label, share with family. Doctor visit notes too.', good: 'Strong family-caregiver features.' },
  { name: 'Round Health', cost: 'Free; $5/mo Plus', best: 'Beautiful interface. Time-window reminders ("any time within this 30-min window").', good: 'Best for those who hate exact-time reminders.' },
  { name: 'Echo / Google Home reminders', cost: 'FREE', best: 'Voice setup — "Alexa, remind me to take my heart pill every day at 8 PM". No phone needed.', good: 'Best if you don\'t carry a phone all day.' },
];

export default function MedicationReminderApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medication Reminder Apps — Medisafe, PillPack, Apple Health | TekSure" description="Never miss a dose. Plain-English picks for medication reminder apps and pill-organizing services that actually work." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medication Reminder Apps</h1>
          <p className="text-lg text-muted-foreground">Take every dose, on time, every time.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setting up reminders right</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Add EVERY medication, including over-the-counter ones (vitamins, ibuprofen).</li>
              <li>Set the time you actually want to take each one.</li>
              <li>Add a description of what each pill looks like — handy if you mix them up.</li>
              <li>Connect to caregiver: spouse, adult child gets alerted if you miss a dose.</li>
              <li>Update when prescriptions change.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hardware that helps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Weekly pill organizer</strong> ($5) — fill once a week. Visual reminder.</li>
              <li><strong>Hero pill dispenser</strong> ($600 + $40/mo) — robotic dispenser. Beeps and dispenses the right pills at the right time. For people with many meds.</li>
              <li><strong>MedMinder pill dispenser</strong> ($65/mo) — similar; sends alerts to family.</li>
              <li><strong>Apple Watch / Fitbit</strong> — buzzes you for reminders even when phone is in another room.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For complex medication regimens</h3>
            <p className="text-sm text-muted-foreground">If you take 5+ daily meds, the simplest answer is <strong>PillPack from Amazon Pharmacy</strong>. They sort EVERY pill into dated packets. You tear off Monday morning, take everything in the packet, done. No reminders needed because each packet is labeled with the exact date and time. Same insurance copay you\'re paying now.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
