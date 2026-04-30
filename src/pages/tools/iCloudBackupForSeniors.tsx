import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function iCloudBackupForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iCloud Backup for Seniors | TekSure" description="Auto-backup iPhone. Senior iCloud backup setup." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iCloud Backup</h1>
          <p className="text-lg text-muted-foreground">Senior phone insurance.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Apple ID.</li><li>iCloud → iCloud Backup.</li><li>Turn on.</li><li>Auto-backups overnight.</li><li>Senior peace.</li><li>Free 5GB or paid.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What backs up</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Photos.</li><li>Texts.</li><li>App data.</li><li>Settings.</li><li>Senior everything.</li><li>Restore = phone identical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When restore</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>New phone setup.</li><li>Lost phone replaced.</li><li>Phone broken.</li><li>Senior 1-hour restore.</li><li>Identical phone back.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Need 200GB</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>5GB free fills fast.</li><li>$3/mo 200GB plan.</li><li>Senior $36/year.</li><li>Critical for backup.</li><li>Photos especially.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Verify backup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → iCloud Backup.</li><li>Last successful date.</li><li>Senior monthly check.</li><li>Should be recent.</li><li>If old, plug in to wifi nightly.</li><li>Charge plugged in needed.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Android equivalent</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Google One backup.</li><li>Same concept.</li><li>15GB free.</li><li>Senior similar.</li><li>Android settings → Google → Backup.</li><li>Free always.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$3/mo iCloud = senior phone insurance</h3><p className="text-sm text-muted-foreground">$3/mo iCloud 200GB = senior phone insurance. Auto-backs up nightly when plugged in + wifi. Phone breaks/lost — restore on new phone in 1 hour. Photos, texts, apps preserved. Most under-set-up senior phone setup. Don&apos;t skip.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
