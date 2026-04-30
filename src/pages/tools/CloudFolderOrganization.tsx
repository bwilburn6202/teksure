import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function CloudFolderOrganization() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cloud Folder Organization | TekSure" description="Organize cloud files. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cloud Folder Organization</h1>
          <p className="text-lg text-muted-foreground">Find anything. Anywhere. Always.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pick one cloud</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iCloud</strong> — Apple users (5GB free, $1/mo for 50GB).</li>
              <li><strong>Google Drive</strong> — most universal (15GB free).</li>
              <li><strong>OneDrive</strong> — Microsoft (5GB free).</li>
              <li><strong>Dropbox</strong> — older, classic (2GB free).</li>
              <li>Don&apos;t use multiple — confusing.</li>
              <li>Pick one. Stick with it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Top-level folder structure</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>1-Personal</strong> — IDs, taxes, finances.</li>
              <li><strong>2-Family</strong> — kids, photos, recipes.</li>
              <li><strong>3-Health</strong> — medical, prescriptions.</li>
              <li><strong>4-Home</strong> — house, repairs, warranties.</li>
              <li><strong>5-Work</strong> — past employment if relevant.</li>
              <li><strong>6-Hobbies</strong> — gardening, projects.</li>
              <li>Numbers force order.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Inside each folder</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Year subfolders — &quot;2024&quot;, &quot;2025&quot;.</li>
              <li>Or category subfolders.</li>
              <li>Date filename — &quot;2025-04-15-doctor-visit.pdf&quot;.</li>
              <li>Sort by date easy.</li>
              <li>Name describes contents.</li>
              <li>Avoid &quot;new&quot;, &quot;final&quot;, &quot;copy&quot;.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Photo organization</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Photos / Google Photos — use built-in albums.</li>
              <li>Don&apos;t make separate folders for photos.</li>
              <li>Albums by year + event.</li>
              <li>Tag faces — searchable.</li>
              <li>&quot;Memories&quot; auto-creates highlights.</li>
              <li>Backup automatically to cloud.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Important files folder</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Birth certificate scan.</li>
              <li>Passport scan + expiration.</li>
              <li>Driver&apos;s license scan.</li>
              <li>Medicare card.</li>
              <li>Social Security card scan.</li>
              <li>Will + power of attorney.</li>
              <li>Insurance — health, home, auto.</li>
              <li>Tax returns.</li>
              <li>Tell family where to find.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sharing cloud folders</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Right-click folder, then &quot;Share&quot;.</li>
              <li>Type family member&apos;s email.</li>
              <li>Select view-only or edit.</li>
              <li>Email link sent automatically.</li>
              <li>Share family photos folder.</li>
              <li>Share recipes with siblings.</li>
              <li>Revoke access anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Yearly cleanup</h3>
            <p className="text-sm text-muted-foreground">Once a year — January is good — review folders. Delete what no longer matters. Archive old years to subfolder &quot;Archive&quot;. Keep cloud paid storage low. 100GB usually enough for life. Empty Recycle Bin / Trash. Cloud organized = peace of mind. Family accesses if you can&apos;t.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
