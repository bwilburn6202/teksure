import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HardDrive } from 'lucide-react';

export default function SeniorPhoneStorageManagement() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Storage Management for Seniors — TekSure" description="Free up phone storage — clear photos, apps, cache." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HardDrive className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Storage Management</h1>
          <p className="text-lg text-muted-foreground">Free up space. Faster phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Check storage</h2><p>iPhone: Settings → General → iPhone Storage. Shows what&apos;s using space.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Photos biggest hog</h2><p>Often 70% of phone storage. iCloud Photos saves space.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Offload unused apps</h2><p>iPhone setting. Removes app but keeps data. Reinstall when needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Clear browser cache</h2><p>Safari: Settings → Safari → Clear History. Saves 1-3 GB.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Delete videos</h2><p>1 video = 100 photos in space. Delete old. Save space.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Recently deleted</h2><p>Photos → Recently Deleted. Empty for full reclaim of space.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Keep 1 GB free always. Phone runs faster.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
