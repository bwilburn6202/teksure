import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plug } from 'lucide-react';

export default function SmartPlugsForSeniorHome() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Plugs for Senior Homes | TekSure" description="$10 smart plugs transform senior home. Voice control anything." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plug className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Plugs</h1>
          <p className="text-lg text-muted-foreground">$10 wifi outlet.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What they are</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$10-$20 plug.</li><li>Voice + app control.</li><li>Anything plugged in becomes smart.</li><li>Lamp, fan, coffee maker.</li><li>Senior magic.</li><li>Schedule.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best brands</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>TP-Link Kasa.</li><li>Amazon Smart Plug.</li><li>Wemo.</li><li>$10-$20 each.</li><li>Buy 4-pack save.</li><li>Senior friendly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior uses</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Alexa, lamp on.&quot;</li><li>Coffee maker on schedule.</li><li>Heater off bedtime.</li><li>Christmas tree timer.</li><li>Senior easier life.</li><li>Hands-free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Plug in.</li><li>Brand app downloads.</li><li>Connect to wifi.</li><li>Add to Alexa/Google Home.</li><li>Senior 5 min each.</li><li>Family help first time.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Schedule</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Coffee 6am on.</li><li>Lights at sunset.</li><li>Bedside off at 10pm.</li><li>Senior automation.</li><li>Set + forget.</li><li>Free in app.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Vacation</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Random light schedule.</li><li>Looks lived in.</li><li>Burglar deterrent.</li><li>Senior travel safer.</li><li>App control remote.</li><li>$15 security upgrade.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$15 plug = senior smart home start</h3><p className="text-sm text-muted-foreground">$15 smart plug + Alexa = senior smart home in 5 minutes. &quot;Alexa, lamp on.&quot; Schedule coffee maker. Vacation security. Most affordable smart home gateway. Adult kid sets up. Senior daily ease.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
