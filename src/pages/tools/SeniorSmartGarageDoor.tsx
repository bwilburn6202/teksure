import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function SeniorSmartGarageDoor() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Garage Door Openers for Seniors — TekSure" description="myQ, Tailwind smart garage openers — open from phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Garage Doors</h1>
          <p className="text-lg text-muted-foreground">Phone control. Notifications.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Chamberlain myQ</h2><p>$30. Add to existing Chamberlain/LiftMaster opener. Phone control.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tailwind iQ3</h2><p>$80. Universal. Works with most brands.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Did I close it?</li><li>Open for delivery without going down</li><li>Family check from anywhere</li><li>Auto-close timer</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice control</h2><p>&ldquo;Alexa, close the garage.&rdquo; Hands-free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">In-Garage Delivery</h2><p>Amazon delivers in garage. No porch pirate worry.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup</h2><p>Plug in. Connect Wi-Fi. Press button on opener. Done.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Set auto-close after 10 PM. Never wonder if you closed it.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
