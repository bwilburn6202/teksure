import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Fingerprint } from 'lucide-react';

export default function SeniorPasskeysSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Passkeys Setup for Seniors | TekSure" description="Future of passwords. Senior passkey guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Fingerprint className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Passkeys</h1>
          <p className="text-lg text-muted-foreground">Senior password future.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Replaces passwords.</li><li>Face ID/Touch ID instead.</li><li>Senior easier.</li><li>More secure.</li><li>Phishing-resistant.</li><li>Free + built-in.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sites supporting</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple, Google, Microsoft.</li><li>Amazon.</li><li>PayPal.</li><li>Senior major sites.</li><li>Growing list.</li><li>Worth setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Site security settings.</li><li>Add passkey.</li><li>Senior Face ID confirms.</li><li>Saved to iCloud Keychain.</li><li>Sync across devices.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No password to remember.</li><li>No phishing.</li><li>Senior simplest login.</li><li>Face ID just works.</li><li>Future-proof.</li><li>Worth adopting.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Backup matters</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iCloud Keychain syncs.</li><li>Senior new device works.</li><li>Apple ID required.</li><li>Recovery contact set.</li><li>Critical setup.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cross-platform</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple + Google + Microsoft work.</li><li>Senior switch devices.</li><li>QR code transfer.</li><li>Free.</li><li>Easier than expected.</li><li>Worth trying.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Passkeys = senior password-free future</h3><p className="text-sm text-muted-foreground">Senior passkeys replace passwords with Face ID/Touch ID. Phishing-resistant. iCloud Keychain syncs. Apple, Google, Microsoft, Amazon, PayPal support. Most senior login simplification. Set up site-by-site as available. Free + built-in iOS/macOS.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
