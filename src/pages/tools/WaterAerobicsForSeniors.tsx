import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Waves } from 'lucide-react';

export default function WaterAerobicsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Water Aerobics for Seniors | TekSure" description="Find pool classes and apps. Water aerobics for senior joint health." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Waves className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Water Aerobics</h1>
          <p className="text-lg text-muted-foreground">Joint-friendly senior fitness.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why water</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Zero impact joints.</li><li>Buoyancy supports.</li><li>Resistance from water.</li><li>Cool + comfortable.</li><li>Senior-perfect exercise.</li><li>Improves balance.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Find classes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>YMCA — most affordable.</li><li>Local senior centers.</li><li>Community recreation.</li><li>Hospital wellness pools.</li><li>SilverSneakers benefit.</li><li>Often free for seniors.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>SwimSmooth.</li><li>YouTube — AquaJogger.</li><li>SilverSneakers Go.</li><li>Pool exercise guides.</li><li>Free routines.</li><li>Watch poolside on phone.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Beginner exercises</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Walking laps.</li><li>Knee lifts.</li><li>Arm pushes.</li><li>Leg circles.</li><li>Pool noodle work.</li><li>Senior gentle.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Gear</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pool noodle.</li><li>Water dumbbells.</li><li>Aqua belt — float.</li><li>Pool shoes.</li><li>Senior cap if cold.</li><li>$30-$50 total.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior benefits</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Arthritis pain relief.</li><li>Balance practice safe.</li><li>Heart healthy.</li><li>Social class atmosphere.</li><li>Friend connections.</li><li>Joy + movement.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">YMCA water aerobics = senior gold</h3><p className="text-sm text-muted-foreground">$10/month senior YMCA membership often includes water aerobics classes. Or free with SilverSneakers. Most senior-friendly exercise on Earth. Joint relief, balance, friends. 3x per week transforms senior health. Many do it into 90s. Find pool near you.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
