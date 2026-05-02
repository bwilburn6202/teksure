import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function SeniorMedicationReminders() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medication Reminder Apps for Seniors — TekSure" description="Best free apps to remind seniors to take medications on time." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medication Reminders</h1>
          <p className="text-lg text-muted-foreground">Never miss a dose.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medisafe</h2><p>Free. Pill icons. Loud alarm. Tells family if you miss a dose.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">MyTherapy</h2><p>Free. No ads. Tracks symptoms and mood too.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Round Health</h2><p>Free. Simple, big buttons. Great if you take only 2-3 meds.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CareZone</h2><p>Free. Snap a picture of your pill bottle — auto-fills name and dose.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Phone built-in</h2><p>iPhone Health app and Google Fit both have free medication tracking now.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Backup with smart speaker</h2><p>Tell Alexa: &ldquo;Set a reminder for blood pressure pill at 8 AM daily.&rdquo;</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Pair a phone reminder with a weekly pill organizer. Two systems = no missed doses.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
