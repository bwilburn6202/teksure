import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorRobotMops() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Robot Mops for Seniors — TekSure" description="iRobot Braava, Roborock S8 — robot mops save senior backs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Robot Mops</h1>
          <p className="text-lg text-muted-foreground">No more bending over.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iRobot Braava Jet</h2><p>$200. Mops only. Quiet.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Roborock S8</h2><p>$700. Vacuum + mop. Smart map. Dries mop pads.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Eufy RoboVac G30 Hybrid</h2><p>$300. Vacuum + mop. Budget pick.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><p>Bending to mop = back pain. Robot does daily. No effort.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Schedule</h2><p>Run while at appointments. Floors clean when home.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hard floors only</h2><p>Hardwood, tile, vinyl. Avoid carpets and rugs.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Robot vacuum + robot mop = clean floors without effort. Worth investment.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
