import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function SeniorAppointmentApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Appointment Apps for Seniors — TekSure" description="Book and manage doctor appointments — Zocdoc, Solv, hospital apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calendar className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Appointment Apps</h1>
          <p className="text-lg text-muted-foreground">Book doctors online. Skip phone tag.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Zocdoc</h2><p>Free. See available times. Read patient reviews. Book in 60 seconds.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Solv Health</h2><p>Free. Same-day urgent care booking. Saves long wait times.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">MyChart</h2><p>Hospital appointments. Confirm or reschedule from phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Calendar tip</h2><p>Add appointments to phone calendar. Get reminders 24 hours and 1 hour before.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bring a list</h2><p>Type symptoms in Apple Notes or Google Keep. Check off as discussed with doctor.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family share</h2><p>Share calendar with family — they can drive you to appointments.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Book early morning appointments. Less waiting room time.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
