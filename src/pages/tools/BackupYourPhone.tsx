import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function BackupYourPhone() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Backup Your Phone | TekSure" description="Don&apos;t lose photos + contacts. Plain-English iCloud + Google Drive backup setup. 5 minutes once." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Backup Your Phone</h1>
          <p className="text-lg text-muted-foreground">Lose phone — keep photos + contacts.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why now</h2>
            <p className="text-sm">Lost / stolen / dropped-in-toilet phones happen weekly. WITHOUT backup = 30 years of photos GONE. Contacts gone. Notes gone. With backup = restore on new phone in 30 minutes.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone — iCloud backup</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → tap your name → iCloud.</li>
              <li>iCloud Backup → ON.</li>
              <li>Connect to wifi + plug in nightly.</li>
              <li>Auto-backups while charging.</li>
              <li>Free 5GB. Most need $1-3/mo for 50-200GB.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android — Google backup</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Google → Backup.</li>
              <li>Toggle ON.</li>
              <li>Photos → Google Photos backup ON.</li>
              <li>Free 15GB. $2-3/mo for 100-200GB.</li>
              <li>Auto-backs up on wifi while charging.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Verify backup works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone — Settings → iCloud → Backup. See last backup date.</li>
              <li>Android — Settings → Google → Backup. See last backup.</li>
              <li>Should be within last 24 hours.</li>
              <li>Can also see photos at iCloud.com / photos.google.com from computer.</li>
              <li>Test once: log into iCloud / Google Photos on computer — see your photos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Backup new phone setup</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Buy new phone.</li>
              <li>Choose "Restore from iCloud" or "Restore from Google".</li>
              <li>Sign in with same Apple ID / Google.</li>
              <li>Phone re-downloads photos, apps, contacts, settings.</li>
              <li>Hours later — phone looks just like old one.</li>
              <li>This is the magic. 5 minutes setup once = priceless when needed.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free 5GB / 15GB enough?</h3>
            <p className="text-sm text-muted-foreground">Most seniors&apos; photos = 50-100GB. Free tier insufficient. iCloud 50GB = $1/mo, 200GB = $3/mo. Worth $12-36/yr to never lose 30 years of photos.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
