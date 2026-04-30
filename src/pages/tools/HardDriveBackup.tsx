import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HardDrive } from 'lucide-react';

export default function HardDriveBackup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hard Drive Backup for Seniors | TekSure" description="External drive vs cloud. Plain-English picks for backing up computer photos + documents. Senior-friendly." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HardDrive className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hard Drive Backup</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t lose 30 years of memories.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best external hard drives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Seagate Backup Plus 2TB</strong> ($65) — most popular.</li>
              <li><strong>WD Easystore 4TB</strong> ($90) — Costco often has on sale.</li>
              <li><strong>Samsung T7 SSD 1TB</strong> ($90) — fast + small + tough.</li>
              <li><strong>SanDisk Extreme 2TB</strong> ($150) — toughest portable.</li>
              <li>2TB enough for most senior households.</li>
              <li>4TB for those with photos + videos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Backup strategy</h2>
            <p className="text-sm">"3-2-1 rule":</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>3 copies of important files.</li>
              <li>2 different storage types (computer + external drive).</li>
              <li>1 OFFSITE (cloud OR drive at relative&apos;s house).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mac — Time Machine</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Plug in external drive.</li>
              <li>Mac asks "Use as Time Machine drive?" → Yes.</li>
              <li>Auto-backs up hourly forever.</li>
              <li>Free + built-in.</li>
              <li>To restore: System Settings → Time Machine → Restore from backup.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Windows — File History</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Plug in external drive.</li>
              <li>Settings → Update + Security → Backup → "Back up using File History" → ON.</li>
              <li>Pick external drive.</li>
              <li>Auto-backs up files hourly.</li>
              <li>Free + built-in.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cloud backup (offsite)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iCloud / Google Drive / OneDrive</strong> — for photos + documents.</li>
              <li><strong>Backblaze</strong> — $99/yr unlimited backup of whole computer.</li>
              <li><strong>Carbonite</strong> — same idea.</li>
              <li>Cloud + external = double-protected.</li>
              <li>Important files in cloud = accessible from anywhere.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Family-share drive</h3>
            <p className="text-sm text-muted-foreground">Buy 2nd external drive. Once a year — copy your files to it. Give to adult kid for safekeeping. If your house burns / floods / robbed — they have backup. Best free offsite backup option.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
