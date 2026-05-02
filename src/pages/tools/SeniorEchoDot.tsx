import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Speaker } from 'lucide-react';

export default function SeniorEchoDot() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Echo Dot for Seniors — TekSure" description="Cheapest Alexa device — Echo Dot setup and best uses for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Speaker className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Echo Dot for Seniors</h1>
          <p className="text-lg text-muted-foreground">$30 voice assistant.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">$30-$50</h2><p>Cheapest Alexa device. Often $20 on Black Friday.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup</h2><p>Plug in. Open Alexa app. Connect Wi-Fi. Done in 5 min.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best uses</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Set timers and alarms</li><li>Play music or radio</li><li>Get weather</li><li>Call family</li><li>Med reminders</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Drop In</h2><p>Voice intercom. Family says &ldquo;Drop in on Mom.&rdquo; Mom hears them anywhere in house.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Echo Dot with clock</h2><p>$10 more. Always shows time. Perfect bedside.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Echo Show 8 upgrade</h2><p>$140. Has a screen. Better for video calls. Same Alexa features.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Place in kitchen + bedroom. Two-room coverage at $60 total.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
