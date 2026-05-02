import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Save } from 'lucide-react';

export default function SeniorWindowsBackup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Windows Backup — Senior Guide" description="Back up your PC files automatically." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Save className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Windows Backup</h1>
          <p className="text-lg text-muted-foreground">Don't let a hard drive crash erase your photos.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. OneDrive</h2><p>Comes free with Windows. Files saved here back up to Microsoft automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Sign in</h2><p>Click the cloud icon in the taskbar. Sign in with your Microsoft account.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Pick folders</h2><p>OneDrive Settings, Manage backup. Turn on Desktop, Documents, Pictures.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Free 5 GB</h2><p>Microsoft gives 5 GB free. Need more? Microsoft 365 includes 1 TB for $7/month.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. External drive too</h2><p>For belt-and-suspenders safety, copy important files to an external USB drive once a month.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Verify</h2><p>OneDrive icon shows a green check when files are backed up. White cloud means still uploading.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Hard drives fail. Always have a backup. Two backups is even better.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
