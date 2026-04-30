import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function iCloudUpgradeGuideForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iCloud Upgrade Guide for Seniors | TekSure" description="When + how to upgrade iCloud storage. Senior photo + backup guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iCloud Storage</h1>
          <p className="text-lg text-muted-foreground">When + how to upgrade.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free 5GB</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple ID gets 5GB free.</li><li>Most fill in months.</li><li>Photos, backups, files.</li><li>Senior runs out.</li><li>Backups stop.</li><li>Time to upgrade.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Paid tiers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>50GB — $1/month.</li><li>200GB — $3/month.</li><li>2TB — $10/month.</li><li>6TB — $30/month.</li><li>Family sharing 200GB+.</li><li>Senior pick.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior recommendation</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>200GB — $3/month.</li><li>Plenty for most seniors.</li><li>Family share with spouse.</li><li>Photos + backups + email.</li><li>Senior peace of mind.</li><li>Worth $36/year.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple One bundle</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Individual $20/mo.</li><li>iCloud + Apple TV + Music + Arcade.</li><li>Family $26.</li><li>Premier $38.</li><li>Senior worth comparing.</li><li>Save vs separate.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Upgrade now</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Apple ID.</li><li>iCloud → Manage.</li><li>Change Storage Plan.</li><li>Pick tier.</li><li>Confirm.</li><li>Senior 1-min done.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it backs up</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Photos.</li><li>iPhone backup.</li><li>iMessage history.</li><li>Notes, contacts.</li><li>App data.</li><li>Senior insurance.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$3/mo = senior memories preserved</h3><p className="text-sm text-muted-foreground">$3/month iCloud 200GB = senior memories backed up forever. iPhone breaks/lost — restore on new phone in 1 hour. Photos preserved. Best $36/year senior insurance. Don&apos;t skip — paying $0 risks losing decades of memories.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
