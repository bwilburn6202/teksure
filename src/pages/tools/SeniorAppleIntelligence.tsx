import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorAppleIntelligence() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Intelligence for Seniors — Senior Guide" description="Use Apple Intelligence on iPhone, iPad, and Mac." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Intelligence</h1>
          <p className="text-lg text-muted-foreground">AI built into your Apple devices.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Which devices</h2><p>iPhone 15 Pro and later, iPads with M-series chips, Macs with Apple Silicon.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Turn on</h2><p>Settings, Apple Intelligence & Siri. Turn on Apple Intelligence.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Writing Tools</h2><p>Hold over any text. Tap Writing Tools. Proofread, rewrite, summarize an email.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Notification summaries</h2><p>Long text threads get summarized at the top so you spot what matters.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Photo cleanup</h2><p>Open Photos, edit, Clean Up. Tap a stranger or trash can. AI removes them.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Smarter Siri</h2><p>Siri now understands follow-up questions and can pull info from inside your apps.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Apple says all AI runs on the device first. Privacy is Apple Intelligence's main selling point.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
