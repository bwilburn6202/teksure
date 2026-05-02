import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function SeniorCloudStoragePicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cloud Storage Picker — Senior Guide" description="Choose iCloud, Google, Dropbox, OneDrive." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cloud Storage</h1>
          <p className="text-lg text-muted-foreground">Where to save your files online.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. iCloud</h2><p>Free 5 GB. Best if mostly Apple devices. 50 GB is $1/month, 200 GB is $3/month.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Google One</h2><p>Free 15 GB. Best if you use Gmail or Android. Same prices as iCloud.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. OneDrive</h2><p>Free 5 GB. Microsoft 365 includes 1 TB ($7/month) plus Word, Excel.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Dropbox</h2><p>Free 2 GB. Most cross-platform. Best if you collaborate with non-Apple users.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Pick one mainly</h2><p>Don't try to use all four. Pick one to back up photos and key files.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Family plans</h2><p>iCloud Family ($10/month for 200 GB) or Google ($3/month) shares with up to 5 family members.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Need both space and Microsoft Office? OneDrive bundled with 365 is the best deal.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
