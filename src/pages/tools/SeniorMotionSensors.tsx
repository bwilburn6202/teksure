import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorMotionSensors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Motion Sensors for Seniors — TekSure" description="Wellness motion sensors — track senior activity for caregivers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Motion Sensors</h1>
          <p className="text-lg text-muted-foreground">Wellness check without watch.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Aloe Care Health</h2><p>$299 + $25/month. Voice-activated emergency. Family wellness data.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Aware-i</h2><p>$30/month. Sensors track activity. Family alerted to abnormal patterns.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wyze sensors</h2><p>$30 each. DIY. Track door opens, motion. Family can check.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Alexa Together</h2><p>$20/month. 24/7 urgent response + activity tracking via Echo.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Privacy</h2><p>No cameras. Just motion + door sensors. Senior dignity protected.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior agreement</h2><p>Discuss with parent first. Surveillance feels invasive without buy-in.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Even daily call is enough for many seniors. Tech only if needed.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
