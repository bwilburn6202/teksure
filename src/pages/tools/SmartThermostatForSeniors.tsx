import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Thermometer } from 'lucide-react';

export default function SmartThermostatForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Thermostats for Seniors | TekSure" description="Nest, Ecobee for senior energy savings + comfort." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Thermometer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Thermostats</h1>
          <p className="text-lg text-muted-foreground">Senior comfort + savings.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Nest Thermostat</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$130-$250.</li><li>Learns schedule.</li><li>Voice + app.</li><li>Save 10-15% energy.</li><li>Senior easy.</li><li>Google ecosystem.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Ecobee</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$170-$250.</li><li>Room sensors included.</li><li>Even-room temps.</li><li>Senior bedroom + living.</li><li>HomeKit + Alexa + Google.</li><li>Best multi-room.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Utility rebates</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$50-$150 rebate often.</li><li>Senior check utility.</li><li>Pays for itself.</li><li>Apply post-purchase.</li><li>Free money.</li><li>Don&apos;t skip.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Phone control bed.</li><li>Voice control.</li><li>Schedule auto.</li><li>Vacation mode.</li><li>Senior comfort easy.</li><li>$$ savings.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Install</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>30-min DIY usually.</li><li>YouTube tutorials.</li><li>Or hire $100.</li><li>Senior decide.</li><li>Photo wires first.</li><li>Easy reverse.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">App control</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Phone in bed.</li><li>Senior cold mid-night.</li><li>Up 1 degree.</li><li>No getting up.</li><li>Senior comfort win.</li><li>Worth alone.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$170 Ecobee = senior comfort + savings</h3><p className="text-sm text-muted-foreground">$170 Ecobee + $50-$150 utility rebate = ~$50 net cost. 10-15% energy savings. Phone control bed. Voice. Even-room sensors. Senior comfort + savings combo. Auto-schedule learns family. Most senior smart home worthwhile upgrade.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
