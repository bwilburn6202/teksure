import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PhoneOff } from 'lucide-react';

export default function SeniorRobocallBlockers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Robocall Blockers for Seniors — TekSure" description="Stop spam calls — best free apps and carrier blockers for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PhoneOff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Robocall Blockers</h1>
          <p className="text-lg text-muted-foreground">Silence those spam calls.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone built-in</h2><p>Settings → Phone → Silence Unknown Callers. Strangers go straight to voicemail.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android Pixel Call Screen</h2><p>Free. Google answers. Reads transcript. You decide if real.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Carrier free blockers</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>AT&amp;T ActiveArmor</li><li>Verizon Call Filter</li><li>T-Mobile Scam Shield</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hiya</h2><p>Free. Identifies callers. Auto-blocks known spam.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Nomorobo</h2><p>$2/month. Rings once and hangs up known spam.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">National Do Not Call</h2><p>Register at donotcall.gov. Doesn&apos;t stop scammers but reduces telemarketers.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Never press 1 to opt out — it confirms your number is real and brings more calls.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
