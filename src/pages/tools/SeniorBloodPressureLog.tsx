import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorBloodPressureLog() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Blood Pressure Tracker — Senior Guide" description="Log blood pressure on your phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Blood Pressure Log</h1>
          <p className="text-lg text-muted-foreground">Track readings, share with doctor.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free apps</h2><p>Blood Pressure Companion, Heart Habit, Cardio Journal. All free.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Take readings</h2><p>Same time daily. Sit calmly 5 minutes first. Don't talk during.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Log it</h2><p>Type the top number, bottom number, and pulse. App saves date and time.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. See trends</h2><p>App shows weekly and monthly charts. Doctor can spot trends faster.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Share with doctor</h2><p>Tap Export PDF. Email to the office before your visit.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Connect a cuff</h2><p>Some Omron and Withings cuffs sync to your phone automatically over Bluetooth.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If a single reading is high, retake it after 5 minutes of rest. Tracking trends matters more than one number.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
