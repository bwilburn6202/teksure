import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CloudUpload } from 'lucide-react';

export default function CloudSyncForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cloud Sync for Seniors | TekSure" description="iCloud, Drive, Dropbox sync for senior multi-device." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CloudUpload className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cloud Sync</h1>
          <p className="text-lg text-muted-foreground">Senior file access.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iCloud Drive</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>5GB free.</li><li>$3/mo 200GB.</li><li>Senior all Apple devices.</li><li>Auto-sync files.</li><li>Built-in iOS.</li><li>Best Apple.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Google Drive</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>15GB free.</li><li>$2/mo 100GB.</li><li>Cross-platform.</li><li>Senior Mac + PC.</li><li>Free Google account.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Dropbox 2GB free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cross-platform.</li><li>$10/mo 2TB.</li><li>Senior simple.</li><li>Easy sharing.</li><li>Free trial.</li><li>Worth knowing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">OneDrive Microsoft</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>5GB free.</li><li>1TB with Microsoft 365 $7/mo.</li><li>Senior Windows + Office.</li><li>Free with subscription.</li><li>Worth bundling.</li><li>Good value.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pick one</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Don&apos;t use 4 services.</li><li>Confusing.</li><li>Senior pick by ecosystem.</li><li>Apple = iCloud.</li><li>Mixed = Google Drive.</li><li>Stay consistent.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Auto-photos backup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Photos auto-back up.</li><li>Senior never lose photos.</li><li>Free 5-15GB.</li><li>Critical setup.</li><li>Don&apos;t skip.</li><li>Most important use.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Pick one cloud + auto-photos = senior file safety</h3><p className="text-sm text-muted-foreground">Senior pick ONE cloud service by ecosystem: Apple = iCloud, mixed = Google Drive, Office = OneDrive. Auto-photos backup critical. $3/mo 200GB iCloud usually enough. Don&apos;t mix services confuses. Most under-considered senior file safety setup.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
