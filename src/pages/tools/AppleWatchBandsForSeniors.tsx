import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CircleEllipsis } from 'lucide-react';

export default function AppleWatchBandsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Watch Bands for Seniors | TekSure" description="Senior-friendly band picks. Easy on/off Apple Watch bands." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CircleEllipsis className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Watch Bands</h1>
          <p className="text-lg text-muted-foreground">Easy on/off picks.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Solo Loop</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Stretchy single band.</li><li>$99 Apple.</li><li>Slip on/off easy.</li><li>No buckle.</li><li>Senior arthritis friendly.</li><li>Best for one-handed use.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sport Band</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pin + tuck design.</li><li>$49.</li><li>Most durable.</li><li>Senior sweat workouts.</li><li>Easy to clean.</li><li>Many colors.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Milanese Loop</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Mesh metal magnetic.</li><li>$99.</li><li>Adjustable continuously.</li><li>Senior dressy.</li><li>Easy magnetic close.</li><li>Premium look.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cheap aftermarket</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Amazon $5-$15 bands.</li><li>Many styles.</li><li>Senior variety.</li><li>Worth trying.</li><li>Read reviews.</li><li>Switch by mood.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Buckle-free best</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Solo Loop or magnetic.</li><li>Avoid pin/buckle if shaky.</li><li>Senior easy on/off.</li><li>Slim profile.</li><li>Sleep comfortable.</li><li>Worth premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sizing</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple sizing kit free.</li><li>Print template.</li><li>Wrap wrist.</li><li>Pick number.</li><li>Senior accurate.</li><li>Avoid wrong size.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Solo Loop = senior arthritis friend</h3><p className="text-sm text-muted-foreground">Apple Solo Loop $99 = no buckle, slip on like sock. Senior arthritis hands love it. Or magnetic Milanese $99. Avoid pin-buckle Sport Band if shaky hands. Spend $5-$15 Amazon bands for variety. Easy on/off matters more than style.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
