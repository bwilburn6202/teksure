import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';

export default function SeniorPersonalAlarm() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Personal Alarms for Seniors — Senior Guide" description="Pick a personal safety alarm." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Personal Alarms</h1>
          <p className="text-lg text-muted-foreground">Help with one button.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Life Alert</h2><p>The classic. $30-50/month. 24/7 monitoring. Industry leader.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Lively Mobile Plus</h2><p>$30/month. Modern. GPS location. Works in shower.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Apple Watch + cellular</h2><p>$10/month plan. Fall detection. ECG. Calls family if needed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Birdie alarm</h2><p>$30 keychain. Loud siren. Useful for walks alone.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Phone Emergency SOS</h2><p>Free. iPhone — press side button 5 times. Android similar. Save the monthly fees.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Family check-ins</h2><p>Routine daily call from family. Free. Best alarm of all.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Some Medicare Advantage plans cover medical alerts. Check before paying.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
