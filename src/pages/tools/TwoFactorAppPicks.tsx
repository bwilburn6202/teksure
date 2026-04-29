import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

const APPS = [
  { name: 'Google Authenticator', cost: 'FREE', best: 'Most popular. iOS + Android. Now syncs across devices (since 2023).', good: 'Easiest start.' },
  { name: 'Microsoft Authenticator', cost: 'FREE', best: 'Best if you have a Microsoft/Outlook account. Cloud backup built in.', good: 'Best for Microsoft users.' },
  { name: 'Authy', cost: 'FREE', best: 'Multi-device sync built in. Recover codes if you lose phone.', good: 'Best for losing-your-phone protection.' },
  { name: '1Password', cost: '$3/mo', best: 'If you already use 1Password — it stores 2FA codes too. One app for everything.', good: 'Best if combined with manager.' },
  { name: 'Apple Passwords (iOS 18+)', cost: 'FREE', best: 'Built into iPhone. Generates 2FA codes. Auto-fills.', good: 'Best for iPhone-only homes.' },
];

export default function TwoFactorAppPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Two-Factor Authentication Apps | TekSure" description="Google Authenticator, Microsoft Authenticator, Authy. Plain-English picks for 2FA apps that block 99% of account hacks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Two-Factor Apps (2FA)</h1>
          <p className="text-lg text-muted-foreground">The single best account security upgrade.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What 2FA does</h2>
            <p className="text-sm">After you type your password, the site asks for a 6-digit code from an app on your phone. Code changes every 30 seconds. Hacker who steals your password ALSO needs your physical phone. <strong>Blocks 99% of account hacks.</strong></p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why NOT use text-message 2FA</h2>
            <p className="text-sm">SMS codes (texted to your phone) are better than nothing — but scammers can hijack your phone number ("SIM swap") and intercept the texts. Authenticator apps are MUCH safer. Use SMS only when an app isn&apos;t offered.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup — first time</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Install one app from the App Store / Play Store.</li>
              <li>Log into a website (Gmail, bank, Facebook).</li>
              <li>Go to Account → Security → "Two-Factor Authentication".</li>
              <li>Pick "Authenticator App".</li>
              <li>Site shows a QR code. Open the app. Tap "+". Scan the QR code.</li>
              <li>Type the 6-digit code from app into the website.</li>
              <li>Save backup codes (print or screenshot).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Accounts to enable 2FA on FIRST</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Email (Gmail, Outlook, Yahoo, iCloud) — most important. If hacker gets email, they can reset everything else.</li>
              <li>Bank and brokerage accounts.</li>
              <li>Apple ID / Google Account / Microsoft Account.</li>
              <li>Facebook, Instagram, anything social.</li>
              <li>Amazon, PayPal, Venmo.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save the backup codes</h3>
            <p className="text-sm text-muted-foreground">When you set up 2FA, the site gives you 10 backup codes. Print them. Put with your will or in a safe. If you lose your phone, these get you back into accounts. Without them — recovery is painful.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
