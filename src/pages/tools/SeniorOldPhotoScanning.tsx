import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function SeniorOldPhotoScanning() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Scan Old Photos — Senior Guide" description="Digitize old photo albums." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Scan Old Photos</h1>
          <p className="text-lg text-muted-foreground">Save family memories digitally.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. PhotoScan by Google</h2><p>Free. Skips glare. Move corner to corner. Works perfectly with phone camera.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Photomyne</h2><p>Auto-finds multiple photos on one page. Crops them all in one shot.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Mail-in services</h2><p>Legacybox, ScanCafe, EverPresent. Pack photos in a box, get scanned files back.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Local Costco</h2><p>Photo center scans hundreds at low cost. Great for slides and negatives too.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Save 2 places</h2><p>Save scans to iCloud or Google Photos AND a USB drive. Two backups always.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Add captions</h2><p>Type names and dates while you remember them. Future generations will thank you.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Sit with grandkids and scan together. Tell them stories about each photo as you go.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
