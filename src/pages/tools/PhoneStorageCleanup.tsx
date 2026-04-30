import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HardDrive } from 'lucide-react';

export default function PhoneStorageCleanup() {
  const [tab, setTab] = useState<'iphone' | 'android'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Storage Cleanup — Free Up Space | TekSure" description="&quot;iPhone Storage Almost Full&quot; — fix it without buying iCloud. Plain-English steps to free up gigs on iPhone and Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HardDrive className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Storage Cleanup</h1>
          <p className="text-lg text-muted-foreground">Free up 5-20 GB without buying anything.</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <button onClick={() => setTab('iphone')} className={`p-3 rounded-lg border-2 ${tab === 'iphone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>iPhone</button>
          <button onClick={() => setTab('android')} className={`p-3 rounded-lg border-2 ${tab === 'android' ? 'border-primary bg-primary/10' : 'border-muted'}`}>Android</button>
        </div>

        {tab === 'iphone' && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">iPhone — see what&apos;s using space</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Settings → General → iPhone Storage.</li>
                  <li>Wait 10-30 seconds for the bar to fill in.</li>
                  <li>Apps listed by size. Biggest at top.</li>
                  <li>Recommendations at top — accept the ones that say "save GB".</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Quick wins</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><strong>Delete &quot;Recently Deleted&quot; in Photos</strong> — Photos → Albums → Recently Deleted → Delete All. Often frees 1-3 GB.</li>
                  <li><strong>Old podcasts</strong> — Podcasts app stores old episodes. Settings → Apps → Podcasts → "Limit Episodes" to 5.</li>
                  <li><strong>Old WhatsApp/text photos</strong> — Settings → Messages → "Keep Messages" → 1 year.</li>
                  <li><strong>Offline music</strong> — Music app → Library → Downloaded → delete albums you don&apos;t play.</li>
                  <li><strong>Apps you don&apos;t use</strong> — "Offload Unused Apps" ON. Keeps data, deletes the app.</li>
                </ul>
              </CardContent>
            </Card>
          </>
        )}

        {tab === 'android' && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Android — see what&apos;s using space</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Settings → Storage (or "Battery and device care" → Storage on Samsung).</li>
                  <li>See breakdown — apps, photos, audio, downloads.</li>
                  <li>Tap each category to see what&apos;s biggest.</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Quick wins</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><strong>Open the Files app</strong> (or Files by Google). Run "Clean" — removes junk, old downloads, duplicate photos.</li>
                  <li><strong>Empty Downloads folder</strong> — usually 1-2 GB of forgotten PDFs and images.</li>
                  <li><strong>Photos backed up to Google Photos?</strong> Open Google Photos → Settings → "Free up space". Removes phone copies, keeps cloud copies.</li>
                  <li><strong>Apps</strong> — long-press app icon → Uninstall.</li>
                  <li><strong>Clear app cache</strong> — Settings → Apps → tap an app → Storage → Clear cache.</li>
                </ul>
              </CardContent>
            </Card>
          </>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Photos — the #1 space hog</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most phones: photos and videos = 60-80% of used storage.</li>
              <li>Backup to <strong>iCloud</strong> ($1/mo for 50GB), <strong>Google Photos</strong> (15GB free, $2/mo for 100GB), or <strong>Amazon Photos</strong> (free, unlimited photos for Prime members).</li>
              <li>After backup, "Optimize Storage" or "Free up space" deletes phone copies.</li>
              <li>Photos still appear normal — load from cloud when you tap.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Restart after cleanup</h3>
            <p className="text-sm text-muted-foreground">After deleting apps and clearing space, restart the phone. Settings reset. You may see another 1-2 GB free up.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
