import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function GooglePhotosForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Photos for Seniors | TekSure" description="Backup + organize photos free with Google Photos. Best photo cloud service for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Photos</h1>
          <p className="text-lg text-muted-foreground">Free 15GB. AI search. Best on Android.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Google Photos?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>15GB free, then $2/month for 100GB.</li>
              <li>Auto-backup of all phone photos.</li>
              <li>AI search — find by content (&quot;sunset,&quot; &quot;dog&quot;).</li>
              <li>Works on iPhone + Android.</li>
              <li>Easy sharing with family.</li>
              <li>Photo books + prints available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download Google Photos app.</li>
              <li>Sign in with Google account.</li>
              <li>Toggle Backup ON.</li>
              <li>App uploads photos in background.</li>
              <li>Wait — first backup takes hours.</li>
              <li>Connect to WiFi for fast initial backup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AI search</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search bar at top.</li>
              <li>Type &quot;beach&quot; — finds beach photos.</li>
              <li>Type person&apos;s name — face recognition finds them.</li>
              <li>Type year, month, location.</li>
              <li>&quot;Christmas 2018&quot; finds those exact photos.</li>
              <li>Magic — works on existing photos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sharing albums</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Create album of grandkid trip.</li>
              <li>Share with family members.</li>
              <li>They can add their own photos to it.</li>
              <li>Everyone has all the trip photos.</li>
              <li>Or share with link to non-Google users.</li>
              <li>Privacy settings control access.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Memories feature</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>App shows photos from same date previous years.</li>
              <li>&quot;3 years ago today.&quot;</li>
              <li>Share to family — &quot;remember this?&quot;</li>
              <li>Auto-creates collages + videos.</li>
              <li>Brings up forgotten memories.</li>
              <li>Especially meaningful for seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free up phone storage</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>After backup, &quot;Free up space.&quot;</li>
              <li>Removes photos from phone, kept in cloud.</li>
              <li>Frees gigabytes of phone storage.</li>
              <li>Photos still in app — just streamed.</li>
              <li>Originals safe in Google cloud.</li>
              <li>Helpful for old, slow phones.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Use Google Photos OR iCloud, not both</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t pay for both Google Photos AND iCloud. iPhone users: iCloud is more integrated. Android users: Google Photos is the only option. Some prefer Google Photos on iPhone for the AI search and free 15GB tier — that&apos;s fine. Just pick one and use it consistently. Your photos backed up matters more than which service.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
