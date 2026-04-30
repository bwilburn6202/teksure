import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ear } from 'lucide-react';

export default function HearingAidConnectIphone() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Connect Hearing Aids to iPhone | TekSure" description="Stream phone calls, music, TV through hearing aids. Senior step-by-step." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ear className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hearing Aids + iPhone</h1>
          <p className="text-lg text-muted-foreground">Stream right to your ears.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Made for iPhone aids</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Phonak, Oticon, Resound, Starkey.</li><li>Look for &quot;Made for iPhone&quot; logo.</li><li>Direct Bluetooth streaming.</li><li>Phone calls in ears.</li><li>Music + audiobooks.</li><li>Game changer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pair them</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Accessibility.</li><li>Hearing Devices.</li><li>Open + close hearing aid battery.</li><li>iPhone discovers them.</li><li>Tap to pair.</li><li>One-time setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Phone calls direct</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Calls stream to aids.</li><li>Hear in both ears.</li><li>Mic still on phone.</li><li>Hold phone normally.</li><li>Or use Live Listen.</li><li>Crystal clarity.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Live Listen</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Phone becomes microphone.</li><li>Place near speaker.</li><li>Audio streams to aids.</li><li>Restaurant table.</li><li>Hard-to-hear meetings.</li><li>Free magic feature.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">TV with aids</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>TV streamer device $200.</li><li>Plugs into TV.</li><li>Audio streams to aids.</li><li>Set personal volume.</li><li>Spouse keeps normal.</li><li>Family peace restored.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Brand apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Each brand has app.</li><li>Adjust volume.</li><li>Change programs.</li><li>Find lost aids.</li><li>Battery levels.</li><li>Free app from maker.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Stream calls = senior life-changer</h3><p className="text-sm text-muted-foreground">If you got hearing aids in last 5 years, they likely stream from iPhone. Phone calls right to ears, both at once. No more straining. Plus Live Listen turns iPhone into restaurant mic. Pair them — most under-used feature in senior tech.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
