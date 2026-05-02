import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

export default function SeniorEmergencyTextLine() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Text 911 for Seniors — TekSure" description="Text 911 when can't speak — emergency texting in 911 areas." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageSquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Text 911</h1>
          <p className="text-lg text-muted-foreground">When voice isn&apos;t safe.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Call if you can</h2><p>Voice still preferred. Faster response. Use text only if can&apos;t talk.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Where it works</h2><p>Most US cities. Text 911. Same as call.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">First message</h2><p>Location + emergency. Use full street address.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">For domestic violence</h2><p>Silent emergency. Don&apos;t alert attacker by talking.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">For deaf/hard of hearing</h2><p>Most reliable for those who can&apos;t hear dispatcher.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Phones support it</h2><p>iPhone, Android. Built in.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Practice texting 911 fake number once. Know how to do it before emergency.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
