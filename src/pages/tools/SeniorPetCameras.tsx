import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function SeniorPetCameras() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Cameras for Seniors — TekSure" description="Watch and talk to pets from your phone — Furbo, Petcube, Wyze cam." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Cameras for Seniors</h1>
          <p className="text-lg text-muted-foreground">Watch your pet from anywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Furbo Dog Camera</h2><p>$169. Treat tossing. Bark alerts. Two-way audio.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Petcube Bites</h2><p>$199. Snack dispenser. HD video.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wyze Cam v3</h2><p>$36. Cheapest option. Works for any pet. No treat dispenser.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup</h2><p>Plug in. Open app. Connect Wi-Fi. Place near pet&apos;s favorite spot.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Two-way audio</h2><p>Talk to your pet from across town. They hear your voice through the camera.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Night vision</h2><p>All work in dark rooms. Great for nighttime check-ins.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Two cameras (living room + bedroom) covers most homes.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
