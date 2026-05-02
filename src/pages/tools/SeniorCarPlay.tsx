import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function SeniorCarPlay() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple CarPlay for Seniors — TekSure" description="Use iPhone safely while driving — Apple CarPlay setup and tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple CarPlay</h1>
          <p className="text-lg text-muted-foreground">Phone on dashboard. Hands-free.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What it does</h2><p>Plug iPhone into car (or wireless). iPhone shows on dashboard. Big icons.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cars that have it</h2><p>Most cars 2017+. Check Settings → General → CarPlay on your iPhone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best apps</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Apple Maps or Google Maps</li><li>Phone calls</li><li>Apple Music or Spotify</li><li>Audible</li><li>Messages (Siri reads them)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice everything</h2><p>&ldquo;Hey Siri, navigate to Walmart.&rdquo; Eyes stay on road.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wireless CarPlay</h2><p>Newer cars connect wirelessly. No cable each time.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Aftermarket</h2><p>$200-$500 stereo with CarPlay added to older cars. Crutchfield installs.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: CarPlay reduces accidents by half. Worth adding to any car.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
