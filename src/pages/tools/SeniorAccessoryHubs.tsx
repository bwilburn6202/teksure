import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Layers } from 'lucide-react';

export default function SeniorAccessoryHubs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="USB Hubs for Seniors — Senior Guide" description="Add ports to laptop or iPad with hubs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Layers className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">USB Hubs</h1>
          <p className="text-lg text-muted-foreground">More ports for your computer.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Why need one</h2><p>Modern laptops have 1-2 ports. A hub lets you plug in printer, mouse, USB drives.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Anker hubs</h2><p>$30-100. Reliable. 4-7 ports. Works with Mac, PC, iPad.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. SD card slot</h2><p>Read camera memory cards. Useful for photos.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. HDMI port</h2><p>Connect laptop to TV or external monitor. Easier to see details.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Charging passthrough</h2><p>Hub charges laptop while ports are in use. Don't lose a port.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Skip cheap brands</h2><p>$10 hubs damage laptops by power surges. Spend $30+.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Look for hub matching your laptop's USB-C or USB-A ports. Big differences.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
