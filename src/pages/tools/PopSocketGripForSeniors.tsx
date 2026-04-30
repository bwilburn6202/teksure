import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hand } from 'lucide-react';

export default function PopSocketGripForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="PopSocket Grip for Seniors | TekSure" description="Drop your phone less. PopSocket + grip alternatives for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hand className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">PopSocket + Grips</h1>
          <p className="text-lg text-muted-foreground">Drop phone less.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">PopSocket</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$10-$15.</li><li>Sticks to back of phone.</li><li>Pops out for grip.</li><li>Stand for video.</li><li>Senior fewer drops.</li><li>Most popular.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Phone strap</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Wrist strap.</li><li>Won&apos;t fall to floor.</li><li>$5-$15.</li><li>Senior arthritis hands.</li><li>Or finger ring.</li><li>Choice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Ring holder</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Metal ring on back.</li><li>Finger through.</li><li>One-handed grip.</li><li>$8.</li><li>Magnetic mount works.</li><li>Senior accessory.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">MagSafe PopSocket</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Magnetic — removable.</li><li>iPhone 12+.</li><li>$25.</li><li>Take off for charging.</li><li>Senior best of both.</li><li>Worth premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior video stand</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>PopSocket pops out.</li><li>Stand for FaceTime.</li><li>Watch shows hands-free.</li><li>Senior multi-purpose.</li><li>Free with grip.</li><li>Bonus.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch outs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bulky in pocket.</li><li>Sticky residue if removed.</li><li>Some block wireless charging.</li><li>MagSafe version solves.</li><li>Senior trade-offs.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$10 PopSocket = senior fewer drops</h3><p className="text-sm text-muted-foreground">$10 PopSocket on phone back = grip won&apos;t drop. Plus stands phone for FaceTime. Senior arthritis fingers thank you. MagSafe version $25 removable for charging. Most under-rated senior phone accessory. Try one.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
