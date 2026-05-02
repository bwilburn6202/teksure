import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function SeniorPhotoBackup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Photo Backup for Seniors — TekSure" description="How seniors back up phone photos to Google, iCloud, or Amazon Photos." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Photo Backup for Seniors</h1>
          <p className="text-lg text-muted-foreground">Never lose a photo again.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iCloud Photos (iPhone)</h2><p>5 GB free. $0.99/month for 50 GB. Auto-backs up everything.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Photos</h2><p>15 GB free across Google. $1.99/month for 100 GB. Works on iPhone and Android.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Amazon Photos</h2><p>FREE unlimited photo storage with Prime. Big bonus for Prime members.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Turn on backup</h2><p>Open the photos app → Settings → toggle &ldquo;Back up &amp; sync.&rdquo; Done.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wi-Fi only</h2><p>Set backup to Wi-Fi only. Saves your cell data plan.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Find lost photos</h2><p>If you delete by accident, check Recently Deleted folder. 30-60 days to recover.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Three places is best — phone, cloud, and a backup hard drive once a year.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
