import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scan } from 'lucide-react';

export default function SeniorScanOldPhotos() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Scan Old Photos for Seniors — TekSure" description="Turn shoeboxes of photos into digital files using your phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scan className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Scan Old Photos</h1>
          <p className="text-lg text-muted-foreground">Save shoeboxes of memories to your phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google PhotoScan</h2><p>FREE. Removes glare. Auto-crops. Best free option.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Photomyne</h2><p>Free trial. Scans 4 photos at once from a single album page.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Notes</h2><p>iPhone built in. Open Notes → camera icon → Scan Documents. Works for photos too.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tips for quality</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Bright, even light</li><li>Place photo on dark surface</li><li>Hold phone steady, parallel</li><li>No flash</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Send to a service</h2><p>If 1000+ photos: Legacybox, ScanMyPhotos. They scan everything for $300-$1,000.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tag faces and dates</h2><p>Once digital, label who&apos;s in each photo. Future generations will thank you.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Scan 5 a day during morning coffee. A box is done in a month.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
