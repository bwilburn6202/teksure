import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlarmClock } from 'lucide-react';

export default function SeniorSmartAlarmClocks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Alarm Clocks for Seniors — TekSure" description="Sunrise alarm clocks and smart alarms for seniors — Hatch, Philips, Lenovo." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlarmClock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Alarm Clocks</h1>
          <p className="text-lg text-muted-foreground">Wake up gently. Sleep better.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hatch Restore 2</h2><p>$200. Sunrise alarm. Sleep sounds. Bedtime stories.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Philips SmartSleep</h2><p>$200. Light therapy. Top-rated for seasonal affective.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lenovo Smart Clock</h2><p>$80. Built-in Google Assistant. Big-display clock.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Echo Show 5 alarm</h2><p>$70. Voice alarms. Snooze by saying &ldquo;Snooze.&rdquo;</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pillow alarm for hearing-impaired</h2><p>$30. Vibrating pillow shaker. Wakes deep sleepers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Multiple alarms</h2><p>Set wake-up + medication + nap reminders all on smart clock.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Sunrise alarms reduce winter morning grogginess. Real benefit.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
