import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HardDrive } from 'lucide-react';

export default function BackblazeForSeniorBackup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Backblaze for Senior Computer Backup | TekSure" description="Unlimited computer backup. Backblaze senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HardDrive className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Backblaze</h1>
          <p className="text-lg text-muted-foreground">Unlimited computer backup.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Computer backup service.</li><li>$9/month or $90/year.</li><li>UNLIMITED storage.</li><li>Auto-backup all files.</li><li>Senior peace.</li><li>Best computer backup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Backblaze.com.</li><li>Free 15-day trial.</li><li>Download app.</li><li>Auto-detects files.</li><li>First backup days.</li><li>Then runs always.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior need</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hard drive fails.</li><li>Computer stolen.</li><li>Ransomware.</li><li>Decades of files lost.</li><li>Photos irreplaceable.</li><li>Backups essential.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Restore options</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Download files free.</li><li>Or USB drive shipped — $99.</li><li>Or refundable hard drive.</li><li>Senior recovery options.</li><li>Restore one or all.</li><li>Reliable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs cloud sync</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Dropbox/iCloud sync.</li><li>Backblaze backups.</li><li>Different purposes.</li><li>Use both.</li><li>Backup = all + history.</li><li>Sync = subset across devices.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior alternatives</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>External hard drive — $80.</li><li>Time Machine (Mac).</li><li>Windows Backup.</li><li>Backblaze for offsite.</li><li>Senior 3-2-1 strategy.</li><li>Multiple safer.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$90/yr = senior decades preserved</h3><p className="text-sm text-muted-foreground">Backblaze $90/year unlimited backup = if computer fails, decades of senior photos/docs survive. Many seniors lose everything to hard drive failure. Don&apos;t be them. Best $90 senior insurance. Set up + forget. Restores anytime needed.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
