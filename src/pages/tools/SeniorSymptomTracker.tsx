import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardList } from 'lucide-react';

export default function SeniorSymptomTracker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Symptom Tracker Apps for Seniors — TekSure" description="Track pain, sleep, mood, and symptoms — bring better data to your doctor." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ClipboardList className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Symptom Trackers</h1>
          <p className="text-lg text-muted-foreground">Spot patterns. Help your doctor help you.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bearable</h2><p>Free. Track symptoms, mood, sleep, and meds in one place. Best overall.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Manage My Pain</h2><p>Free. Body map — tap where it hurts. Rate 1-10. Print reports.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CareClinic</h2><p>Free. Built for chronic conditions. Tracks vitals + symptoms + meds.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What to track</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Pain location and severity</li><li>Sleep hours</li><li>Energy level</li><li>Side effects after meds</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Be consistent</h2><p>Log at the same time daily — morning works best. 2 weeks gives a clear pattern.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Share with doctor</h2><p>Email the PDF report 2 days before your appointment so the doctor can review.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: A 5-minute log per day saves 30 minutes of guessing in the doctor&apos;s office.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
