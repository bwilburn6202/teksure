import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw } from 'lucide-react';

export default function SeniorWindowsUpdates() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Windows Updates — Senior Guide" description="Keep Windows up to date and safe." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <RefreshCw className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Windows Updates</h1>
          <p className="text-lg text-muted-foreground">Stay current and safer.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Check now</h2><p>Open Settings, Windows Update. Click Check for updates.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Why update</h2><p>Patches block scammers and viruses. Skipping leaves your PC at risk.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Active hours</h2><p>Set hours you use the PC so updates won't restart while you work.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Pause if needed</h2><p>You can pause updates up to 5 weeks. Useful right before a trip.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Restart properly</h2><p>Save your work first. Restart finishes the install. Don't unplug during this.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Update apps too</h2><p>Open Microsoft Store, click your photo, Library, Get updates.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Windows 10 support ends October 2025. Upgrade to Windows 11 if your PC supports it.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
