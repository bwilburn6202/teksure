import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function SeniorAIVoiceCloneRisks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Voice Clone Scams — Senior Alert — TekSure" description="Scammers can clone your grandchild's voice. How to spot AI voice scams." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Voice Clone Scams</h1>
          <p className="text-lg text-muted-foreground">Scammers can fake any voice. Here&apos;s how to fight back.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">The new scam</h2><p>Scammers grab a 3-second voice clip from social media. AI clones the voice. They call &ldquo;as your grandchild&rdquo; needing bail money.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Set a family code word</h2><p>Pick a phrase no one else knows. If a panicked caller can&apos;t say it — it&apos;s a scam.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hang up and call back</h2><p>Always hang up. Call your grandchild&apos;s real number directly. Verify they&apos;re fine.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Never wire money urgently</h2><p>Real emergencies wait 5 minutes for verification. Scams demand instant payment.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Limit voice online</h2><p>Lock down social media. Scammers need only seconds of audio to clone a voice.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Report it</h2><p>FTC: reportfraud.ftc.gov. AARP Fraud Watch: 877-908-3360.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Tell every family member the code word. Make it ordinary like &ldquo;blue umbrella.&rdquo;</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
