import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';

export default function SmartDoorbellForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Doorbells for Seniors | TekSure" description="Ring + Nest doorbells for senior security." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Doorbells</h1>
          <p className="text-lg text-muted-foreground">See visitors safely.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Ring</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$60-$300.</li><li>Most popular.</li><li>Amazon-owned.</li><li>$3-$10/mo cloud.</li><li>Senior simple.</li><li>Battery or wired.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Nest Doorbell</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$180.</li><li>Google ecosystem.</li><li>3hr free recording.</li><li>Familiar faces.</li><li>Senior smart.</li><li>Premium quality.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>See without opening door.</li><li>Talk through doorbell.</li><li>Phone alerts.</li><li>Senior safety from scammers.</li><li>Package alerts.</li><li>Family checks too.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Privacy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Ring shares with police.</li><li>Senior privacy concern.</li><li>Disable if uncomfortable.</li><li>Eufy alternative private.</li><li>Read terms.</li><li>Opt out option.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Eufy alternative</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$150.</li><li>Local storage option.</li><li>No subscription required.</li><li>Senior privacy preferred.</li><li>HomeKit support.</li><li>Worth considering.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Replace existing doorbell.</li><li>Wires same usually.</li><li>Or battery.</li><li>App pairs.</li><li>Senior 30 min.</li><li>Family help install.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$60 Ring + $3/mo = senior door safety</h3><p className="text-sm text-muted-foreground">$60 Ring doorbell + $3/mo cloud = senior sees + talks to visitors without opening door. Scammers + door-to-door sales filtered. Package thefts caught. Phone alerts away from home. Best senior smart home safety upgrade.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
