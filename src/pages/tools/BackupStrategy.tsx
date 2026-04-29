import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HardDriveDownload } from 'lucide-react';

export default function BackupStrategy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Backup Strategy — 3-2-1 Rule for Photos and Files | TekSure" description="One drive failure away from losing every photo? Plain-English guide to a real backup plan — Time Machine, online backup, and the 3-2-1 rule." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HardDriveDownload className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Backup Strategy</h1>
          <p className="text-lg text-muted-foreground">Don\'t lose 30 years of photos to one bad day.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">The 3-2-1 rule</h2>
            <p className="text-sm">The pros\' rule for protecting important data:</p>
            <ul className="text-sm list-disc pl-5 mt-2">
              <li><strong>3 copies</strong> of every file you care about.</li>
              <li>On at least <strong>2 different types of media</strong> (e.g., computer + external drive).</li>
              <li>With at least <strong>1 copy off-site</strong> (cloud or at a relative\'s house).</li>
            </ul>
            <p className="text-sm mt-2">Sounds complicated. It isn\'t — most of this happens automatically.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🍎 Mac — Time Machine (free, built in)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Buy an external hard drive ($60-$100 for 2TB).</li>
              <li>Plug it into Mac.</li>
              <li>Pop-up asks "Use this for Time Machine?" → Yes.</li>
              <li>Mac automatically backs up everything every hour. Forever.</li>
              <li>If your computer dies — buy a new one, plug in the drive, follow the on-screen restore.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🪟 Windows — File History (free, built in)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Plug in an external drive.</li>
              <li>Settings → Update & Security → Backup → Add a drive → pick yours.</li>
              <li>Turn on "Automatically back up my files".</li>
              <li>Or use the included Windows Backup tool (Settings → Accounts → Windows Backup).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Off-site backup (the 1 in 3-2-1)</h2>
            <p className="text-sm mb-2">If your house has a fire or flood, the local backup drive is destroyed too. You need a copy somewhere else. Three approaches:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cloud sync (free path)</strong> — turn on iCloud Photos, Google Photos, or OneDrive. Photos auto-upload. Use this even if you don\'t pay for storage — the free tier protects recent stuff.</li>
              <li><strong>Backblaze ($9/month)</strong> — backs up your ENTIRE computer to the cloud. Set and forget. Best disaster-prevention.</li>
              <li><strong>Two external drives</strong> — back up to one weekly, swap with a second drive at a friend or family member\'s house. Cheap, no subscription.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to back up</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Photos and videos — irreplaceable.</li>
              <li>Documents (PDFs of legal papers, tax returns, deeds, wills).</li>
              <li>Email — most email is in the cloud already, but export every few years.</li>
              <li>Contacts — back up your contacts list.</li>
              <li>Music you bought (older iTunes purchases live ONLY on your computer unless you turn on iCloud Music).</li>
            </ul>
            <p className="text-sm mt-2 text-muted-foreground">Don\'t bother backing up: installed programs (just re-install), system files, downloads folder.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Test restore once a year</h2>
            <p className="text-sm">Pick one photo from 2 years ago. Find it in your backup. Restore it to a new folder. If it works — your backup works. If it doesn\'t — fix it before you need it.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For most seniors — the simple path</h3>
            <p className="text-sm text-muted-foreground"><strong>Step 1</strong>: Turn on iCloud Photos (or Google Photos) on your phone — photos back up to the cloud automatically. <strong>Step 2</strong>: Buy a $70 external drive, plug it in, set up Time Machine (Mac) or File History (Windows). That\'s 90% of the protection. Done.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
