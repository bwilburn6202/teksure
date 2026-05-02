import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function SeniorSmartCameras() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Security Cameras for Seniors — TekSure" description="Best home cameras for seniors — Wyze, Ring, Arlo compared." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Security Cameras</h1>
          <p className="text-lg text-muted-foreground">Watch home from anywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wyze Cam v3</h2><p>$36. Indoor or outdoor. Free 14-day cloud storage.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ring Stick Up</h2><p>$100. Battery or wired. Free with subscription for full features.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Arlo Pro</h2><p>$200. Best video quality. Battery powered.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Eufy Solo</h2><p>$80. No monthly fees ever. Local SD card storage.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best places</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Front door (with doorbell cam)</li><li>Driveway</li><li>Back door</li><li>Garage</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Privacy</h2><p>Don&apos;t point at neighbors. Many states require disclosure if audio recording.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Geek Squad installs for ~$100. Many seniors prefer professional install.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
