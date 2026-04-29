import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2 } from 'lucide-react';

export default function EraseOldPhone() {
  const [tab, setTab] = useState<'iphone' | 'android'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Erase Old Phone — Safe Wipe Before Selling | TekSure" description="Selling, donating, or trashing an old phone? Plain-English steps to wipe ALL your data first — bank, photos, accounts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Trash2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Erase Old Phone</h1>
          <p className="text-lg text-muted-foreground">Wipe ALL your data before letting the phone go.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why this matters</h2>
            <p className="text-sm">Old phones contain bank apps, photos, contacts, password managers, email. A buyer (or someone who finds a tossed phone) could access all of that. NEVER hand over a phone without wiping.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('iphone')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'iphone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📱 iPhone</button>
          <button onClick={() => setTab('android')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'android' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🤖 Android</button>
        </div>

        {tab === 'iphone' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">iPhone wipe (do these IN ORDER)</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li><strong>Back up first</strong> — Settings → tap your name → iCloud → "iCloud Backup" → "Back Up Now". Wait until done.</li>
                <li><strong>Sign out of iCloud</strong> — Settings → tap your name → scroll down → "Sign Out". CRITICAL — without this, the phone is locked to YOU forever (Activation Lock).</li>
                <li><strong>Sign out of iMessage and FaceTime</strong> — Settings → Messages → off. Settings → FaceTime → off. (Otherwise iPhone-to-iPhone messages won\'t reach the new owner\'s number.)</li>
                <li><strong>Remove SIM card</strong> if you\'re keeping the carrier service.</li>
                <li><strong>Now erase</strong> — Settings → General → Transfer or Reset iPhone → "Erase All Content and Settings".</li>
                <li>Phone restarts looking like new. Hand it over.</li>
              </ol>
              <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>If iPhone won\'t turn on</strong> — sign in to icloud.com/find from another device. Find your iPhone. "Erase This Device" → confirm. Then "Remove from Account".</p>
            </CardContent>
          </Card>
        )}

        {tab === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Android wipe (do these IN ORDER)</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li><strong>Back up first</strong> — Settings → Google → Backup → "Back up now".</li>
                <li><strong>Remove your Google account</strong> — Settings → Accounts → tap your Google account → Remove account. (CRITICAL — without this, "Factory Reset Protection" locks the phone to you.)</li>
                <li><strong>Remove Samsung account</strong> if Samsung Galaxy.</li>
                <li><strong>Sign out of WhatsApp, banking apps, password manager</strong> manually.</li>
                <li><strong>Remove SIM card and microSD card</strong>.</li>
                <li><strong>Encrypt the phone</strong> if it isn\'t already (Settings → Security → Encrypt phone) — modern Androids are encrypted by default. This makes wiped data UNRECOVERABLE.</li>
                <li><strong>Factory Reset</strong> — Settings → System → Reset → "Erase all data (factory reset)".</li>
                <li>Phone restarts as new.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For computers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mac</strong>: System Settings → General → "Transfer or Reset" → "Erase All Content and Settings". (Also signs out of all Apple services.)</li>
              <li><strong>Windows</strong>: Settings → Update & Security → Recovery → "Reset this PC" → "Remove everything" → "Clean drive".</li>
              <li><strong>Old hard drives (HDD)</strong> — physically destroy: drill, hammer, or use a $5 UPS Store shredding service.</li>
              <li><strong>Old SSDs</strong> — encryption + reset is sufficient if not physically destroyed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For peace of mind</h3>
            <p className="text-sm text-muted-foreground">After wiping, walk through the new-phone setup briefly. If your old name appears anywhere — wipe again. Most modern wipes are thorough enough that even forensic recovery tools can\'t get data back.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
