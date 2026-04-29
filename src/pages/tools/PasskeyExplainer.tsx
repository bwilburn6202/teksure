import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { KeyRound } from 'lucide-react';

export default function PasskeyExplainer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Passkeys Explained — The End of Passwords | TekSure" description="What are passkeys, why they replace passwords, and how to set them up on Apple, Google, and Microsoft accounts. Plain English." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <KeyRound className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Passkeys Explained</h1>
          <p className="text-lg text-muted-foreground">The end of passwords (mostly).</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What a passkey is</h2>
            <p className="text-sm">A passkey replaces a password with your face, fingerprint, or phone PIN. The "key" is stored on your device. Sites verify it without you ever typing a password. <strong>Cannot be phished. Cannot be guessed. Cannot be reused on another site.</strong></p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why they&apos;re safer</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No password to type — no keylogger or phisher to steal.</li>
              <li>Each site gets a unique key. One breach can&apos;t affect others.</li>
              <li>Bound to YOUR device. Hacker on the other side of the world can&apos;t use it.</li>
              <li>Backed by Apple, Google, Microsoft, Amazon, PayPal — they&apos;re the future.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How sign-in feels</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Visit website. Type your username (or it&apos;s remembered).</li>
              <li>Phone or computer asks "Use Face ID to sign in?"</li>
              <li>Look at phone or touch fingerprint. Done.</li>
              <li>No password. No 2FA code. No typing.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sites supporting passkeys (2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Google, Apple, Microsoft.</li>
              <li>Amazon, eBay, PayPal, Best Buy, Target.</li>
              <li>Facebook, Instagram, X (Twitter).</li>
              <li>GitHub, Adobe, TikTok.</li>
              <li>Banks slowly rolling out — Chase has it, others coming.</li>
              <li>Total: 1 billion+ passkeys created.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set up your first passkey</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Log into Google or Apple or Microsoft account on a phone.</li>
              <li>Account → Security → Passkeys.</li>
              <li>Tap "Create a Passkey".</li>
              <li>Confirm with Face ID, fingerprint, or PIN.</li>
              <li>Done. Next sign-in won&apos;t need a password.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where passkeys are stored</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iPhone</strong> — iCloud Keychain. Syncs to iPad and Mac.</li>
              <li><strong>Android</strong> — Google Password Manager. Syncs to all your Google devices.</li>
              <li><strong>1Password / Bitwarden</strong> — store passkeys. Syncs across devices regardless of platform.</li>
              <li><strong>Hardware key (YubiKey)</strong> — most secure. Plug into USB.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t panic</h3>
            <p className="text-sm text-muted-foreground">Passwords aren&apos;t going away tomorrow. Passkeys add an option — they don&apos;t force change. Try them on Google or Amazon first. If you like it, expand. Most sites still have password as a backup option.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
