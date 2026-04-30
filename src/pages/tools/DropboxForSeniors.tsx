import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FolderOpen } from 'lucide-react';

export default function DropboxForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dropbox for Seniors | TekSure" description="Sync files across devices. Dropbox senior guide for sharing files." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FolderOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dropbox</h1>
          <p className="text-lg text-muted-foreground">File sync + share.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free 2GB</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Dropbox.com signup.</li><li>2GB free.</li><li>Sync across all devices.</li><li>Share via link.</li><li>Senior simple.</li><li>Cross-platform.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Paid tiers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Plus 2TB — $10/month.</li><li>Family 2TB — $17/month.</li><li>Higher than competitors.</li><li>Worth for power users.</li><li>Senior alternatives cheaper.</li><li>Compare iCloud + Google.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Share huge files via link.</li><li>Family albums.</li><li>Sync iPhone + Mac + PC.</li><li>Restore deleted (30 days).</li><li>Cross-platform best.</li><li>Trusted brand.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sharing</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Right-click file.</li><li>Share — get link.</li><li>Email or text link.</li><li>Anyone can download.</li><li>No Dropbox needed for them.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs alternatives</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iCloud — Apple ecosystem.</li><li>Google Drive — Google.</li><li>OneDrive — Microsoft.</li><li>Dropbox — cross-platform.</li><li>Best for mixed devices.</li><li>Senior preference.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When to use</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Mixed Apple + Windows.</li><li>Sharing with non-tech family.</li><li>Backup important docs.</li><li>Sync family photo collection.</li><li>Senior clear use case.</li><li>Free 2GB tries it.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free 2GB = senior file sharing</h3><p className="text-sm text-muted-foreground">Free Dropbox 2GB + paid plans = senior cross-platform file solution. Best when family uses mix of iPhones + Android + Windows. Share huge files via link — no email size limits. Restore deleted within 30 days. Trusted by millions of seniors.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
