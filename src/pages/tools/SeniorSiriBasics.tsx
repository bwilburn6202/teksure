import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function SeniorSiriBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Siri Basics for Seniors — TekSure" description="How seniors use Siri on iPhone, iPad, and HomePod — clear commands list." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Siri Basics for Seniors</h1>
          <p className="text-lg text-muted-foreground">Your iPhone helper — by voice.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wake Siri</h2><p>Say &ldquo;Hey Siri&rdquo; or hold the side button. Free with every iPhone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Top commands</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>&ldquo;Call my daughter&rdquo;</li><li>&ldquo;Send a text to John saying I&apos;m on my way&rdquo;</li><li>&ldquo;Set timer 15 minutes&rdquo;</li><li>&ldquo;What&apos;s on my calendar tomorrow?&rdquo;</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Find your phone</h2><p>From any Apple device: &ldquo;Hey Siri, where&apos;s my phone?&rdquo;</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Read messages</h2><p>&ldquo;Hey Siri, read my messages.&rdquo; Hands-free while cooking or driving.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Translate</h2><p>&ldquo;Hey Siri, how do you say good morning in Spanish?&rdquo;</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Make Siri easier</h2><p>Settings → Siri → Type to Siri. Lets you type instead of speak.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Say &ldquo;Hey Siri, call 911&rdquo; in emergencies — works hands-free.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
