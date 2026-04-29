import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ScanFace } from 'lucide-react';

export default function FaceIDFingerprintSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Face ID + Fingerprint Setup | TekSure" description="Stop typing passwords. Plain-English biometric setup for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ScanFace className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Face ID + Fingerprint</h1>
          <p className="text-lg text-muted-foreground">Look at phone = unlocked. Touch = unlocked.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why use it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NO password to remember.</li>
              <li>Faster than typing.</li>
              <li>More secure than typed password.</li>
              <li>Auto-fills passwords on websites.</li>
              <li>Pay with Apple Pay/Google Pay.</li>
              <li>Sign into apps automatically.</li>
              <li>Hands-free unlocking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone Face ID setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Face ID &amp; Passcode.</li>
              <li>Type passcode.</li>
              <li>&quot;Set Up Face ID.&quot;</li>
              <li>Move face slowly in 2 circles.</li>
              <li>Done in 30 seconds.</li>
              <li>Toggle: iPhone Unlock, App Store, Apple Pay, Password Autofill.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone Touch ID</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone SE has fingerprint.</li>
              <li>Settings → Touch ID &amp; Passcode.</li>
              <li>Add Fingerprint — touch sensor multiple times.</li>
              <li>Add 2-3 fingerprints (different fingers).</li>
              <li>Same toggles as Face ID.</li>
              <li>Wet or dirty fingers may fail — use passcode then.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Security → Biometrics.</li>
              <li>Set up fingerprint OR face unlock.</li>
              <li>Most Android phones have fingerprint.</li>
              <li>Newer ones have face unlock.</li>
              <li>Touch sensor on side or back of phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior issues</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Beard growth</strong> — Face ID may need re-set.</li>
              <li><strong>Glasses</strong> — works fine usually.</li>
              <li><strong>Mask</strong> — iPhone 12+ works with mask.</li>
              <li><strong>Wet fingers</strong> — fingerprint fails. Dry first.</li>
              <li><strong>Dry skin (winter)</strong> — fingerprint less reliable.</li>
              <li><strong>Worn fingerprints</strong> — re-register periodically.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps that benefit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Banking apps.</li>
              <li>Apple Pay / Google Pay.</li>
              <li>Password manager (1Password, Bitwarden).</li>
              <li>Amazon, online shopping.</li>
              <li>Email apps.</li>
              <li>Most apps support — turn on in settings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Privacy</h3>
            <p className="text-sm text-muted-foreground">Face ID + Touch ID data stays on YOUR device. Apple/Google never get fingerprint or face data. Stored encrypted in &quot;Secure Enclave.&quot; Significantly safer than written passwords. Many seniors avoid biometrics due to privacy fears — those fears unfounded.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
