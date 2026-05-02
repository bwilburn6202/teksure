import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function SeniorVoiceMonitoring() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Voice Help for Seniors — TekSure" description="Voice-activated emergency help — Aloe Care, Echo, voice fall detectors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Voice Emergency Help</h1>
          <p className="text-lg text-muted-foreground">Speak help into existence.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Echo Show + Alexa Together</h2><p>$140 + $20/month. Say &ldquo;Alexa, help.&rdquo; Connects to 24/7 dispatcher.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Aloe Care Health</h2><p>$300 + $25/month. Smart hub + sensors. Voice-activated SOS.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Watch Siri</h2><p>&ldquo;Hey Siri, call 911.&rdquo; Hands-free emergency call.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Speak medical info</h2><p>Set up custom: &ldquo;Alexa, I need help.&rdquo; Sends pre-typed message to family.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Drop In</h2><p>Family says &ldquo;Drop in on Mom.&rdquo; Hears her in any room. Welfare check.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Multiple speakers</h2><p>Echo Dot in every room. Voice help reaches you wherever you fall.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 3 Echo Dots ($90 total) cover most homes. Cheaper than monthly monitoring.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
