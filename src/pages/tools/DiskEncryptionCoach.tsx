import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function DiskEncryptionCoach() {
  const [tab, setTab] = useState<'mac' | 'windows'>('mac');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Disk Encryption Coach — FileVault & BitLocker | TekSure" description="If your laptop is stolen, can the thief open your files? Encrypt your disk in 5 minutes — free, built-in, no performance hit." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Disk Encryption Coach</h1>
          <p className="text-lg text-muted-foreground">If your laptop is stolen — they can\'t open your files.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What it does</h2>
            <p className="text-sm">Encrypts your hard drive. Without your password, the data is unreadable — even if someone removes the drive and connects it to another computer. Free, built-in to Mac and Windows. No noticeable slowdown on modern computers.</p>
            <p className="text-sm mt-2"><strong>iPhone, iPad, Android phones</strong> are encrypted by default. Just have a passcode set.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('mac')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'mac' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🍎 Mac (FileVault)</button>
          <button onClick={() => setTab('windows')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'windows' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🪟 Windows (BitLocker)</button>
        </div>

        {tab === 'mac' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Turn on FileVault (Mac)</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>System Settings → Privacy & Security → FileVault.</li>
                <li>Click "Turn On".</li>
                <li>Choose: "Allow my iCloud account to unlock my disk" (easiest) OR "Create a recovery key" (write it down).</li>
                <li>Restart. Encryption runs in the background — takes a few hours.</li>
                <li>Done. From now on, your password is required to open the disk.</li>
              </ol>
              <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>If you forgot your password</strong> — sign in with your Apple ID at the login screen.</p>
            </CardContent>
          </Card>
        )}

        {tab === 'windows' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Turn on BitLocker (Windows 10/11 Pro)</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Settings → Privacy & security → Device encryption (Win 11 Home) OR Control Panel → BitLocker (Pro).</li>
                <li>Click "Turn on".</li>
                <li>Save the recovery key — Microsoft account is easiest. (Write it down too. If you lose access, you NEED this.)</li>
                <li>Choose "Encrypt entire drive" for stronger protection.</li>
                <li>Restart and let it encrypt (1-3 hours).</li>
              </ol>
              <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Windows Home edition</strong> uses "Device Encryption" — same idea, simpler. Sign in with Microsoft account → Settings → "Device Encryption" → ON.</p>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For external drives & USB sticks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mac</strong> — Right-click any drive → "Encrypt".</li>
              <li><strong>Windows</strong> — Right-click → "Turn on BitLocker".</li>
              <li><strong>Cross-platform</strong>: VeraCrypt (free) makes encrypted vaults that work on Mac and Windows.</li>
              <li><strong>iCloud Drive / Google Drive / OneDrive</strong> — already encrypted on the company\'s servers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">⚠️ DON\'T LOSE YOUR RECOVERY KEY</h2>
            <p className="text-sm">If you forget your password AND lose your recovery key — your data is gone. No "I forgot" recovery service exists. PRINT the recovery key. Put it in a safe deposit box, with your will, or with a trusted family member.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Why this matters for seniors</h3>
            <p className="text-sm text-muted-foreground">Laptop theft happens. Modern computers contain tax returns, banking, medical records, family photos. Encryption is free and one-time setup. With it, a stolen laptop is just a hardware loss — not an identity-theft disaster.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
