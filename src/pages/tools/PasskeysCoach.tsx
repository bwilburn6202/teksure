import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Fingerprint } from 'lucide-react';

export default function PasskeysCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Passkeys Coach — The End of Passwords | TekSure" description="Sign in to apps with your face or fingerprint instead of a password. More secure, easier. Plain-English guide to passkeys for iPhone and Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Fingerprint className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Passkeys Coach</h1>
          <p className="text-lg text-muted-foreground">No more passwords. Sign in with your face or fingerprint.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What passkeys are</h2>
            <p className="text-sm">A new way to sign in that replaces passwords. Instead of typing a password, your phone proves it\'s really you using Face ID or your fingerprint. The website never stores a password — there\'s nothing to leak in a hack.</p>
            <p className="text-sm mt-2">Microsoft, Google, Apple, Amazon, PayPal, eBay, and most banks already support passkeys. More join every month.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why they\'re better</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Phishing-proof</strong> — even if a fake "Apple" email tricks you into clicking, the passkey only works on the real Apple site.</li>
              <li><strong>No password to forget.</strong></li>
              <li><strong>No password to steal in a database leak.</strong></li>
              <li><strong>No two-factor codes to fumble through.</strong></li>
              <li><strong>Faster</strong> — Face ID + sign in is 1-2 seconds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setting up a passkey (any service)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Sign in to your account (Apple, Google, Microsoft, etc.) the usual way.</li>
              <li>Look in Settings → Security → "Passkeys" or "Sign-in methods".</li>
              <li>Tap "Create a passkey" or "Add passkey".</li>
              <li>Phone prompts for Face ID or fingerprint.</li>
              <li>Done. Next time you sign in, it just asks for your face — no password.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where passkeys are saved</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iPhone</strong> — saved in iCloud Keychain. Sync to all your Apple devices.</li>
              <li><strong>Android</strong> — saved in Google Password Manager. Sync to other Google devices.</li>
              <li><strong>Password managers (1Password, Bitwarden)</strong> — also support passkeys. Better if you use both Apple AND Android devices.</li>
              <li><strong>Hardware key (YubiKey)</strong> — physical USB stick. Strongest possible. About $50.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you lose your phone</h2>
            <p className="text-sm">Passkeys are tied to your iCloud (Apple) or Google account, not the physical phone. Get a new phone, sign in, your passkeys come back. They\'re also recoverable through the secondary trusted device or your iCloud / Google account recovery.</p>
            <p className="text-sm mt-2">For extra peace of mind: keep ONE password for your primary email account. If everything else fails, you can reset accounts via email.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to start</h3>
            <p className="text-sm text-muted-foreground">Set up a passkey on ONE service first — your Google or Apple account. Use it for a week. Once you\'re comfortable, add passkeys for your bank, email, and password manager.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
