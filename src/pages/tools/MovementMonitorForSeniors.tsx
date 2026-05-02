import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function MovementMonitorForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Movement Monitors for Seniors | TekSure" description="Activity monitors for senior aging in place." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Movement Monitors</h1>
          <p className="text-lg text-muted-foreground">Senior aging in place.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Element Care</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30/mo monitoring.</li><li>Senior daily activity tracker.</li><li>Family alerts unusual.</li><li>Sensors throughout home.</li><li>Aging in place.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SmartThings sensors</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30 motion sensor each.</li><li>DIY system.</li><li>Senior cheap.</li><li>Family app alerts.</li><li>Routine detection.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Watch fall</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Auto-detect falls.</li><li>SOS call.</li><li>Senior wear daily.</li><li>Family alerted.</li><li>Best mobile option.</li><li>$249-$400.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bed sensor</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$200.</li><li>Detects in/out of bed.</li><li>Senior wandering.</li><li>Caregiver alerts.</li><li>Sleep monitoring.</li><li>Specialized.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Less-creepy options</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Senior consents critical.</li><li>Privacy choices.</li><li>Daily check-in calls.</li><li>Apple Watch acceptable.</li><li>Cameras invasive.</li><li>Senior comfort first.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Daily check apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Snug Safety free.</li><li>Daily check-in.</li><li>Missed = family alerted.</li><li>Senior simple.</li><li>Free.</li><li>Worth setup.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Apple Watch + Snug = senior aging in place</h3><p className="text-sm text-muted-foreground">Senior aging in place: Apple Watch fall detection ($249-$400) + free Snug Safety daily check-in app = monitoring without invasive cameras. SmartThings DIY $30/sensor for full home if needed. Senior consent critical. Less is more often.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
