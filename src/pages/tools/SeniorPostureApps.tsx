import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorPostureApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Posture Apps for Seniors — TekSure" description="Avoid tech neck — posture apps and exercises for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Posture Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Avoid &ldquo;tech neck&rdquo; pain.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Watch posture</h2><p>FREE. Reminds you to stand/stretch every hour.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Upright Go 2</h2><p>$70 wearable. Beeps when you slouch. Trains better posture.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Posture by Lumo</h2><p>FREE app. Reminders + stretching exercises.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Phone height</h2><p>Hold phone at eye level. Don&apos;t look down. Saves neck.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Stretches</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Chin tucks (10x daily)</li><li>Shoulder rolls</li><li>Doorway chest stretch</li><li>Neck stretches</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Standing desk</h2><p>$40 desk converter. Stand 1-2 hours daily. Less back pain.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Phone causes 60 lbs of neck strain. Look up. Use Siri. Save your spine.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
