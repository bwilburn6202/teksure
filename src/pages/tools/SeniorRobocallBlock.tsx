import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PhoneOff } from 'lucide-react';

export default function SeniorRobocallBlock() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Robocall Blocking | TekSure" description="Stop spam calls. Senior robocall blocker apps + tools." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PhoneOff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Robocall Blocking</h1>
          <p className="text-lg text-muted-foreground">Senior peace.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPhone Silence Unknown</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Phone.</li><li>Silence Unknown Callers.</li><li>Senior peace.</li><li>Goes to voicemail.</li><li>Free.</li><li>Built-in iOS.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pixel Call Screen</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Google AI screens.</li><li>Senior asks who calling.</li><li>Free Pixel feature.</li><li>Best robocall blocker.</li><li>Worth Pixel for this alone.</li><li>Game-changer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Carrier free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Verizon Call Filter.</li><li>ATT ActiveArmor.</li><li>T-Mobile ScamShield.</li><li>Senior free with plan.</li><li>Block + label.</li><li>Worth enabling.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Robokiller</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$5/month.</li><li>Crowd-sourced.</li><li>Senior fewer spam.</li><li>Better than carrier free.</li><li>Worth subscription.</li><li>Best paid.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Don&apos;t answer unknown</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Real callers leave voicemail.</li><li>Senior return if real.</li><li>Don&apos;t engage.</li><li>Never press buttons.</li><li>Hang up immediately.</li><li>Best protection.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Report spam</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>FTC.gov complaints.</li><li>Helps stop bigger.</li><li>Senior community service.</li><li>Free.</li><li>Worth reporting.</li><li>Multiple = action.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Silence Unknown + carrier free = senior peace</h3><p className="text-sm text-muted-foreground">iPhone Silence Unknown Callers + Verizon/ATT/T-Mobile carrier free spam filter = senior peace from robocalls. Or $5/mo Robokiller best paid. Pixel Call Screen AI best built-in. Don&apos;t engage unknowns. Report to FTC. Multiple layers protect.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
