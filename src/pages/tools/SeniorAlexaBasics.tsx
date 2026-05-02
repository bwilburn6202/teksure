import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function SeniorAlexaBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Alexa Basics for Seniors — TekSure" description="How seniors use Amazon Alexa — top commands, setup, family Drop In." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Alexa Basics for Seniors</h1>
          <p className="text-lg text-muted-foreground">Your home assistant — just speak.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pick a device</h2><p>Echo Dot ($30) for one room. Echo Show ($90) adds a screen for video calls.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup</h2><p>Plug in. Open Alexa app. Connect to Wi-Fi. Done in 5 minutes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Daily commands</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>&ldquo;Alexa, what&apos;s the weather?&rdquo;</li><li>&ldquo;Alexa, set a 10-minute timer&rdquo;</li><li>&ldquo;Alexa, play country music&rdquo;</li><li>&ldquo;Alexa, remind me to take my pill at 8&rdquo;</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Drop In</h2><p>Voice intercom. Family can &ldquo;drop in&rdquo; from anywhere — opens with a chime.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Emergency contact</h2><p>Set up so Alexa can call 911 or family in an emergency. Free Alexa Together $19.99/month for fall detection.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Privacy</h2><p>Press microphone button to mute. Says &ldquo;Alexa, delete what I just said&rdquo; to remove recordings.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Place Echo where you sit most — kitchen counter or living room table.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
