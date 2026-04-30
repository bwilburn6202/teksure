import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function AirportAssistanceForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Airport Assistance for Seniors | TekSure" description="Wheelchair, escort, faster security. Senior airport help guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Airport Assistance</h1>
          <p className="text-lg text-muted-foreground">Senior travel help.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Wheelchair request</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Call airline 48 hr ahead.</li><li>Free service.</li><li>Pickup at curb.</li><li>Through security + gate.</li><li>Connection too.</li><li>Senior tipping appreciated.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">TSA Cares</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>1-855-787-2227.</li><li>Call 72 hr before.</li><li>Mobility help.</li><li>Medical conditions.</li><li>Free.</li><li>Senior special needs.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pre-board</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Board first.</li><li>Settle without rush.</li><li>Stow bag easily.</li><li>Senior ask gate agent.</li><li>Often offered.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Skywalker (paid)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Private escort service.</li><li>$50-$100.</li><li>Skip lines, special routes.</li><li>Through security fast.</li><li>Senior premium.</li><li>Worth it for some.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mobility carts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Some airports have.</li><li>Free electric cart.</li><li>Concourse to gate.</li><li>Ask info desk.</li><li>Senior big airports.</li><li>Atlanta, Denver, etc.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family member ticket</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Non-traveling family helper.</li><li>Get gate pass at ticket counter.</li><li>Walk to gate with senior.</li><li>Free.</li><li>Senior anxiety reducer.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Wheelchair + TSA Cares = senior airport peace</h3><p className="text-sm text-muted-foreground">Don&apos;t suffer at airport. Call airline for free wheelchair 48hr before. Call TSA Cares 72hr before. Pre-board to settle. These three free services transform senior airport experience. Tip wheelchair attendant $5-$10. Senior dignified travel.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
