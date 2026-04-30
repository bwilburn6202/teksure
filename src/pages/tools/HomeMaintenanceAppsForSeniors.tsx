import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

export default function HomeMaintenanceAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Maintenance Apps for Seniors | TekSure" description="Track home maintenance schedule. Senior home owner apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Maintenance</h1>
          <p className="text-lg text-muted-foreground">Track senior home tasks.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Centriq</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free app.</li><li>Scan appliance plates.</li><li>Get manuals.</li><li>Track warranties.</li><li>Senior magic.</li><li>Service records.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">HomeZada</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$8/month.</li><li>Track all assets.</li><li>Maintenance schedule.</li><li>Insurance inventory.</li><li>Senior comprehensive.</li><li>Home owner essential.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free spreadsheet</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Google Sheets.</li><li>Filter changes.</li><li>HVAC maintenance.</li><li>Smoke detector battery.</li><li>Senior simple.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Calendar reminders</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Phone calendar.</li><li>Recurring annually.</li><li>Filter, gutters, HVAC.</li><li>Senior never miss.</li><li>Free.</li><li>Simple.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Schedule basics</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>HVAC filter every 3 months.</li><li>Gutters spring + fall.</li><li>HVAC service annually.</li><li>Smoke detector battery yearly.</li><li>Senior list.</li><li>Free reminders.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Hire help</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Many seniors can&apos;t ladder.</li><li>Pay handyman annually.</li><li>$200-$500 worth it.</li><li>Senior safety first.</li><li>Schedule + forget.</li><li>Family help arrange.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Centriq + calendar = senior home tracker</h3><p className="text-sm text-muted-foreground">Free Centriq scans appliance plates, gets manuals + warranty tracking. Plus phone calendar with recurring reminders. Senior home maintained without forgetting. Hire handyman for ladder tasks. Senior safety + property value preserved.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
