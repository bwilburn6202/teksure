import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function SeniorEmergencyAlerts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Emergency Alerts for Seniors — TekSure" description="Wireless Emergency Alerts, AMBER alerts, severe weather notifications." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emergency Alerts</h1>
          <p className="text-lg text-muted-foreground">Stay informed.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wireless Emergency Alerts</h2><p>FREE. Auto-on most phones. AMBER, weather, presidential.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tornado warnings</h2><p>Built into phones. Loud alarm. Take seriously.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Public safety apps</h2><p>Local police, fire department often have apps. Real-time city info.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Nextdoor crime alerts</h2><p>Neighbor reports. Sometimes alarmist but useful.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family alerts</h2><p>Apple Find My family. iPhone alerts when family arrives home safe.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FEMA app</h2><p>FREE. Disaster info. Shelters. Real-time.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Don&apos;t turn off Wireless Emergency Alerts. Saves lives in tornadoes.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
