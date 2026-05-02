import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function SeniorPhotographyApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Photography Apps for Seniors — TekSure" description="Take better photos — phone photography, editing, sharing for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Photography for Seniors</h1>
          <p className="text-lg text-muted-foreground">Phone is plenty.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skip the camera</h2><p>iPhone Pro takes magazine-quality photos. Skip $1,000 cameras.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">VSCO</h2><p>FREE. Best free editing app. Beautiful filters.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Snapseed (Google)</h2><p>FREE. Google&apos;s editor. Magic eraser to remove tourists.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior tips</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Tap to focus</li><li>Hold steady</li><li>Use grid (rule of thirds)</li><li>Avoid digital zoom</li><li>Golden hour (sunset)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Print favorites</h2><p>Shutterfly. Mixbook. Print 12 best photos year. Hang.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Photography classes</h2><p>Senior centers free. Lifelong learning courses online.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: A $20 phone tripod transforms senior photography. Steady = sharp.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
