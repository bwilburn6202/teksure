import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HardDrive } from 'lucide-react';

export default function SeniorBackupGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Backup Guide for Seniors — TekSure" description="How to back up phone, computer, and photos — iCloud, Google, Backblaze." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HardDrive className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Backup Guide for Seniors</h1>
          <p className="text-lg text-muted-foreground">Protect photos and documents forever.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone backup</h2><p>iCloud. $0.99/month for 50 GB. Auto-runs nightly when plugged in.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android backup</h2><p>Google One. 100 GB for $1.99/month. Auto-runs.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mac backup</h2><p>Time Machine. $80 external drive. Plug in. Set forget. Auto-saves hourly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PC backup</h2><p>Windows Backup is free. Or Backblaze ($9/month) for unlimited cloud.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">3-2-1 rule</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>3 copies of important files</li><li>2 different types of storage</li><li>1 copy off-site (cloud)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Test backup yearly</h2><p>Try restoring a single photo. Make sure backup actually works.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Photos of grandkids matter most. Pay for cloud backup. Worth every penny.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
