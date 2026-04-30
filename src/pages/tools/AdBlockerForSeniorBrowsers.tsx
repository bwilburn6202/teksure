import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldOff } from 'lucide-react';

export default function AdBlockerForSeniorBrowsers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ad Blocker for Senior Browsers | TekSure" description="Block ads + popups in Chrome, Safari, Firefox. Senior browser cleanup." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldOff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ad Blockers</h1>
          <p className="text-lg text-muted-foreground">No more pop-ups.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">uBlock Origin</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Best free ad blocker.</li><li>Chrome + Firefox.</li><li>Stops 99% ads.</li><li>Stops malicious sites.</li><li>One-time install.</li><li>Senior must-have.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Safari iPhone</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Safari.</li><li>Block Pop-ups on.</li><li>Or AdGuard from App Store ($1).</li><li>1Blocker free version.</li><li>Senior simple.</li><li>Cleaner browsing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Chrome senior setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Chrome Web Store.</li><li>Search uBlock Origin.</li><li>Add to Chrome — install.</li><li>Auto-blocks future.</li><li>Senior cleaner web.</li><li>30-second install.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why seniors need</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Avoid scam pop-ups.</li><li>&quot;Your computer is infected!&quot; ads.</li><li>Tech support scam ads.</li><li>Faster browsing.</li><li>Less confusing.</li><li>Senior safer.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Brave browser</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free browser with adblocker built-in.</li><li>No setup needed.</li><li>Faster pages.</li><li>Senior alternative.</li><li>Brave.com download.</li><li>Replaces Chrome.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">YouTube ads</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>uBlock blocks on desktop.</li><li>Phone harder.</li><li>YouTube Premium $14/month.</li><li>Senior ad-free option.</li><li>Plus YouTube Music.</li><li>Worth it for many.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free uBlock = senior peace</h3><p className="text-sm text-muted-foreground">Free uBlock Origin in Chrome saves seniors from scam pop-ups and faster browsing. 30-second install. Stops &quot;your computer is infected!&quot; trick ads. Critical for senior internet safety. Plus Brave browser if you want it built-in. Don&apos;t skip.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
