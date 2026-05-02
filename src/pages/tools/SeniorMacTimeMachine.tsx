import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';

export default function SeniorMacTimeMachine() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mac Time Machine — Senior Guide" description="Back up a Mac with Time Machine." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Clock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Time Machine</h1>
          <p className="text-lg text-muted-foreground">Mac backups made automatic.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Get an external drive</h2><p>USB drive 2 TB or larger. About $60-80 at any electronics store.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Plug it in</h2><p>Mac asks if you want to use it for Time Machine. Click Use as Backup Disk.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Automatic backups</h2><p>Time Machine backs up every hour while the drive is plugged in.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Recover a file</h2><p>Open the menu bar Time Machine icon. Enter Time Machine. Scroll to find old versions.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Recover everything</h2><p>If your Mac fails, plug the drive into a new Mac. Pick Restore from Time Machine.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Verify</h2><p>System Settings, General, Time Machine. Check the date of the last backup.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Pair Time Machine with iCloud for two layers of safety. Drives can fail too.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
