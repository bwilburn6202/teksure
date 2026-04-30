import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { EyeOff } from 'lucide-react';

export default function IncognitoModeForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Incognito Mode for Seniors | TekSure" description="Private browsing. When + how to use Incognito for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <EyeOff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Incognito Mode</h1>
          <p className="text-lg text-muted-foreground">Private browsing.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Doesn&apos;t save history.</li><li>Doesn&apos;t save cookies.</li><li>Logs you out.</li><li>Auto-deletes when closed.</li><li>Free + built-in.</li><li>Senior privacy tool.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When to use</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Searching gifts.</li><li>Booking flights (cheaper sometimes).</li><li>Public computer.</li><li>Family member&apos;s computer.</li><li>Sensitive medical search.</li><li>Senior privacy moments.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Open</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Chrome — File → New Incognito.</li><li>Safari — File → New Private.</li><li>Or ⌘+Shift+N (Mac).</li><li>Or Ctrl+Shift+N (PC).</li><li>New window opens.</li><li>Dark theme cue.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it DOESN&apos;T hide</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Internet provider sees.</li><li>Employer sees.</li><li>Websites still see IP.</li><li>Not full anonymity.</li><li>Use VPN for that.</li><li>Senior realistic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Flight prices</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Search same flight 5x.</li><li>Sometimes price rises.</li><li>Tracking your interest.</li><li>Incognito = fresh search.</li><li>Sometimes lower price.</li><li>Senior savings trick.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tip</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Won&apos;t accidentally login family stuff.</li><li>Logged out automatically.</li><li>Test sites without login.</li><li>Won&apos;t mess up regular session.</li><li>Senior workspace.</li><li>Quick safe browsing.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Incognito = senior privacy moments</h3><p className="text-sm text-muted-foreground">Use Incognito for surprise gifts (so ads don&apos;t show on shared computer), flight search (sometimes cheaper), public computer browsing, family member&apos;s computer. Closes everything when window closes. Free + built-in. Most under-used senior privacy feature.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
