import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function PhoneSecurityCheckup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Security Checkup for Seniors | TekSure" description="10-minute phone security review. Senior-friendly checklist for iPhone and Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Security Checkup</h1>
          <p className="text-lg text-muted-foreground">10 minutes. Major safety boost.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Update everything</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iOS: Settings → General → Software Update.</li>
              <li>Android: Settings → System → Software Update.</li>
              <li>Update apps: App Store + Play Store.</li>
              <li>Updates patch security holes.</li>
              <li>Outdated phones get hacked.</li>
              <li>Auto-update for ease.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Strong screen lock</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>6-digit passcode minimum (better than 4).</li>
              <li>Face ID / Touch ID enabled.</li>
              <li>Screen locks 1 minute or less.</li>
              <li>NEVER share passcode.</li>
              <li>Don&apos;t use birthday/anniversary.</li>
              <li>Lock screen = home base of security.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">App permissions audit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Privacy + Security.</li>
              <li>Check Location Services.</li>
              <li>Camera + Microphone access.</li>
              <li>Contacts access.</li>
              <li>Revoke for apps that don&apos;t need.</li>
              <li>Game doesn&apos;t need your contacts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find My / Find My Device</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone: Settings → Apple ID → Find My.</li>
              <li>Android: Settings → Google → Find My Device.</li>
              <li>Enable both location + send last location.</li>
              <li>If lost — locate it remotely.</li>
              <li>Wipe remotely if stolen.</li>
              <li>Free, built-in.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Auto-fill + saved passwords</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iCloud Keychain (Apple) — secure.</li>
              <li>Google Password Manager — secure.</li>
              <li>Or use Bitwarden / 1Password.</li>
              <li>Strong unique passwords for each account.</li>
              <li>Auto-fill makes safer easier.</li>
              <li>Don&apos;t reuse passwords.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Block unknown senders</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone: Settings → Messages → Filter Unknown.</li>
              <li>Reduces text spam.</li>
              <li>Settings → Phone → Silence Unknown Callers.</li>
              <li>Stops most scam calls.</li>
              <li>Real callers leave voicemail.</li>
              <li>Critical for senior scam reduction.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Once a year takes 10 minutes</h3>
            <p className="text-sm text-muted-foreground">Pick a day each year — your birthday works — to do this 10-minute phone security checkup. Update operating system, review app permissions, ensure screen lock is strong, verify Find My is enabled. Combined with strong passwords + 2FA on email, your phone is significantly safer than 90% of others. Maintenance prevents disaster.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
