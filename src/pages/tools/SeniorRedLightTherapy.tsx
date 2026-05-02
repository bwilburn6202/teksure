import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sun } from 'lucide-react';

export default function SeniorRedLightTherapy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Red Light Therapy for Seniors — TekSure" description="Red light therapy devices for seniors — pain relief, skin, sleep." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sun className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Red Light Therapy</h1>
          <p className="text-lg text-muted-foreground">Pain relief. Skin. Some studies promising.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What it is</h2><p>660-850 nm red/near-infrared light. Penetrates skin. May help cells.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mito Red Mini</h2><p>$200. Compact panel. 10-20 min daily sessions.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Dr. Pen handheld</h2><p>$60. Portable. Use on sore knees, shoulders, back.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Studies show</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Joint pain relief (some)</li><li>Faster wound healing</li><li>Skin improvement</li><li>Improved sleep</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Be skeptical</h2><p>Industry has overpromises. Real benefit modest. Doctor visits for pain still important.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Eye safety</h2><p>Don&apos;t look directly at LEDs. Wear included goggles.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Try cheap device first. If no improvement in 30 days, return it.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
