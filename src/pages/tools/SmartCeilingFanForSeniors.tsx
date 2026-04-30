import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Fan } from 'lucide-react';

export default function SmartCeilingFanForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Ceiling Fans for Seniors | TekSure" description="Voice-controlled ceiling fans. Senior smart fan guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Fan className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Ceiling Fans</h1>
          <p className="text-lg text-muted-foreground">Voice + phone control.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Wifi-connected fan.</li><li>Voice control via Alexa/Google.</li><li>Phone app.</li><li>Schedule auto-on/off.</li><li>Adjust speed remotely.</li><li>Senior reach problem solved.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best models</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hunter SimpleConnect.</li><li>Big Ass Fans Haiku.</li><li>Bond — converts existing fans.</li><li>$300-$1,500.</li><li>Bond cheapest path.</li><li>Senior add-on.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bond converter</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$130 device.</li><li>Plug in by fan.</li><li>Learns fan&apos;s remote.</li><li>Now wifi controlled.</li><li>No new fan needed.</li><li>Senior best path.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice commands</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Alexa, fan to medium.&quot;</li><li>&quot;Hey Google, turn off fan.&quot;</li><li>From bed.</li><li>From couch.</li><li>Lost remote? — voice works.</li><li>Senior magic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Schedules</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Auto-on bedtime.</li><li>Off at wake.</li><li>Routine integration.</li><li>Sleep cooler.</li><li>Save energy.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior considerations</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No more pull chains.</li><li>No reaching up.</li><li>No lost remote.</li><li>Better sleep.</li><li>Energy savings.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$130 Bond = senior fan upgrade</h3><p className="text-sm text-muted-foreground">Bond converter $130 makes existing ceiling fan voice-controlled. No new fan. No reaching pull chain. &quot;Alexa, fan medium&quot; from bed. Schedule auto-off. Many seniors say best small smart home upgrade. Don&apos;t buy new $500 smart fan — just Bond.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
