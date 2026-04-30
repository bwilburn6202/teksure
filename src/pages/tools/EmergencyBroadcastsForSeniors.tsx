import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function EmergencyBroadcastsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Emergency Broadcasts for Seniors | TekSure" description="WEA, FEMA, IPAWS senior alert guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emergency Alerts</h1>
          <p className="text-lg text-muted-foreground">Senior safety alerts.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">WEA alerts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Wireless Emergency Alerts.</li><li>Auto on phone.</li><li>Tornado, AMBER, presidential.</li><li>Senior loud sound.</li><li>Free + automatic.</li><li>Critical safety.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">FEMA app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free.</li><li>Disaster prep.</li><li>Shelter finder.</li><li>Senior emergency ready.</li><li>Custom alerts.</li><li>Trusted source.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Local emergency</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sign up city alerts.</li><li>Police + fire updates.</li><li>Senior local awareness.</li><li>Boil water notices.</li><li>Free.</li><li>City website signup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Don&apos;t disable</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Annoying tornado alerts true.</li><li>Senior keep on anyway.</li><li>Saves lives.</li><li>Settings — Notifications.</li><li>Government Alerts.</li><li>Keep all on.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Severe weather radio</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>NOAA Weather Radio.</li><li>$30-$60 device.</li><li>Battery backup.</li><li>Senior power-out safety.</li><li>Tornado country important.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Wallet card</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Print emergency contacts.</li><li>Police, fire, doctor.</li><li>Senior wallet card.</li><li>If phone dies.</li><li>Free.</li><li>Always with.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Keep WEA on = senior life saver</h3><p className="text-sm text-muted-foreground">Senior keep WEA emergency alerts ON despite annoying. Saves lives. Free FEMA app + local city alerts subscribed. NOAA Weather Radio if tornado country. Wallet card backup contacts if phone dies. Most senior emergency safety setup. Free.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
