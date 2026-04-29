import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HardDrive } from 'lucide-react';

export default function FreeUpPhoneStorage() {
  const [tab, setTab] = useState<'iphone' | 'android'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Free Up Phone Storage — 'Storage Almost Full' Fix | TekSure" description="Phone says it's out of space? Plain-English steps to free up gigabytes without losing your photos. iPhone and Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HardDrive className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Free Up Phone Storage</h1>
          <p className="text-lg text-muted-foreground">"Storage Almost Full"? Get back gigabytes in 15 minutes.</p>
        </div>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('iphone')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'iphone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📱 iPhone</button>
          <button onClick={() => setTab('android')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'android' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🤖 Android</button>
        </div>

        {tab === 'iphone' && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Step 1 — See where space is going</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Settings → General → iPhone Storage.</li>
                  <li>Wait 30 seconds — a colorful bar appears.</li>
                  <li>Below that, apps are sorted by the most space they use.</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Step 2 — Apply the easy wins</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><strong>Turn on iCloud Photos with Optimize:</strong> Settings → tap your name → iCloud → Photos → "Optimize iPhone Storage". Phone keeps small versions; full quality stays in iCloud. Often saves 5-30 GB.</li>
                  <li><strong>Empty the Recently Deleted album:</strong> Photos app → Albums → scroll down → Recently Deleted → "Select" → "Delete All".</li>
                  <li><strong>Delete giant videos:</strong> In Photos, tap "Videos" → Sort by Size if available → review the biggest. Each 4K video is often 1-3 GB.</li>
                  <li><strong>Delete unused apps:</strong> Long-press an app → "Remove App". Or in iPhone Storage, tap "Offload Unused Apps" — keeps your data, removes the app.</li>
                  <li><strong>Clear text history:</strong> Settings → Messages → Keep Messages → "1 Year" instead of "Forever". Old texts and their photos delete automatically.</li>
                  <li><strong>Empty Safari cache:</strong> Settings → Safari → Clear History and Website Data.</li>
                </ul>
              </CardContent>
            </Card>
          </>
        )}

        {tab === 'android' && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Step 1 — See where space is going</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Settings → Storage. (On Samsung: Battery and device care → Storage.)</li>
                  <li>You'll see a breakdown — apps, photos, videos, audio, downloads.</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Step 2 — Apply the easy wins</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><strong>Run Files by Google:</strong> Free app, often pre-installed. Open it — it suggests "Junk files", "Duplicate photos", "Large videos" you can delete with one tap.</li>
                  <li><strong>Back up + free space in Google Photos:</strong> Open Photos app → Library → "Free up space". Removes photos already backed up to Google.</li>
                  <li><strong>Clear app caches:</strong> Settings → Apps → tap a big app like Facebook or Chrome → Storage → "Clear cache". Doesn't delete your data — just temporary files.</li>
                  <li><strong>Uninstall unused apps:</strong> Long-press the app icon → Uninstall. Or in Settings → Apps → sort by size.</li>
                  <li><strong>Empty Downloads folder:</strong> Open Files → Downloads → review and delete old PDFs, screenshots, etc.</li>
                  <li><strong>Clear WhatsApp media:</strong> WhatsApp → Settings → Storage and data → "Manage storage" → review the largest videos and photos. Family meme videos add up fast.</li>
                </ul>
              </CardContent>
            </Card>
          </>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Long-term fix — pay $1-3/month for cloud storage</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>iCloud+ (Apple):</strong> 50 GB for $1/month, 200 GB for $3. Photos move to the cloud automatically; phone gets light again.</li>
              <li><strong>Google One:</strong> 100 GB for $2/month. Same idea for Android.</li>
              <li>$3/month is far cheaper than buying a new phone because the old one fills up.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip</h3>
            <p className="text-sm text-muted-foreground">Photos and videos are 90% of "full storage" problems. Once your photos are backing up to the cloud, you almost never run out of space again — even on a phone with only 64 GB.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
