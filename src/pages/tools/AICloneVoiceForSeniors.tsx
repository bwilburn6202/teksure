import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2 } from 'lucide-react';

export default function AICloneVoiceForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Voice Cloning for Seniors | TekSure" description="Preserve voice + scam protection. Senior AI voice guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Volume2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Voice Cloning</h1>
          <p className="text-lg text-muted-foreground">Preserve + protect.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPhone Personal Voice</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iOS 17+.</li><li>15-min voice training.</li><li>Senior preserve voice.</li><li>For ALS or losing voice.</li><li>Read with your voice.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice clone scams</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Scammers clone family.</li><li>&quot;Grandkid in jail.&quot;</li><li>Senior major risk.</li><li>Code word with family.</li><li>Hang up + call back.</li><li>Verify direct.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family safe word</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pick word — &quot;blueberry.&quot;</li><li>Real family knows.</li><li>Scammer fails.</li><li>Senior verifying.</li><li>Free + life-saving.</li><li>Discuss family.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Memorial voice</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Loved one passing.</li><li>Record voice memos now.</li><li>Senior preserve voice + stories.</li><li>Free Voice Memos app.</li><li>Treasure forever.</li><li>Don&apos;t wait.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">ElevenLabs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pro voice cloning.</li><li>$5-$22/month.</li><li>Senior memoir audiobook.</li><li>From your voice.</li><li>Trial free.</li><li>Powerful.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Privacy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Don&apos;t share voice samples.</li><li>Long videos public risky.</li><li>Senior protect.</li><li>Limit social posts.</li><li>Awareness key.</li><li>Voice now valuable.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Family safe word = senior scam protection</h3><p className="text-sm text-muted-foreground">AI voice cloning = senior big scam risk. Family pick safe word real family knows. Scammer fails verification. Plus iPhone Personal Voice preserves senior voice for medical or memorial. Discuss with family today. Free safety.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
