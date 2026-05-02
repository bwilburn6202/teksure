import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorCallScreening() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Call Screening for Seniors — TekSure" description="Pixel Call Screen, iPhone Live Voicemail — block scams, screen calls." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Call Screening</h1>
          <p className="text-lg text-muted-foreground">Block scams in real time.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone Live Voicemail</h2><p>FREE iOS 17+. See transcript while caller leaves message.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Pixel Call Screen</h2><p>FREE Pixel. Google Assistant answers. You see transcript.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Silence Unknown</h2><p>iPhone setting. Calls from contacts ring. Strangers go to voicemail.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hiya app</h2><p>FREE. Identifies callers. Blocks known spam.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Carrier blockers</h2><p>FREE T-Mobile Scam Shield, AT&amp;T ActiveArmor, Verizon Call Filter.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Stop scam calls</h2><p>90% reduction with screening tools. Less stress.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Silence Unknown is best feature. Real callers leave voicemail. Scammers don&apos;t.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
