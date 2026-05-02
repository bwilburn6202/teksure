import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function SeniorIPadBackup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPad Backup — Senior Guide" description="Back up your iPad photos and data automatically." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPad Backup</h1>
          <p className="text-lg text-muted-foreground">Never lose photos or contacts.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Turn on iCloud Backup</h2><p>Settings, your name, iCloud, iCloud Backup. Toggle on. Backs up nightly automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Free 5 GB</h2><p>Apple gives 5 GB free. Enough for contacts and a few photos. Most folks need more.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Upgrade storage</h2><p>50 GB is $0.99 a month. 200 GB is $2.99. Cheap insurance for years of memories.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Charge overnight</h2><p>Backup runs only when iPad is plugged in and on Wi-Fi. So plug in before bed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Check it worked</h2><p>Settings, your name, iCloud, iCloud Backup. See date of last backup. Should be recent.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Restoring</h2><p>If you get a new iPad, sign in with your Apple ID. Photos, apps, contacts come back.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Backups encrypt automatically. Even Apple cannot read your data without your password.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
