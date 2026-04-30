import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Key } from 'lucide-react';

export default function OnePasswordForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="1Password for Seniors | TekSure" description="Premium password manager for seniors. 1Password setup + family sharing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Key className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">1Password</h1>
          <p className="text-lg text-muted-foreground">Best password manager.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why 1Password</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Stores all passwords.</li><li>One master password.</li><li>Auto-fills logins.</li><li>$3/month or $5 family.</li><li>14-day free trial.</li><li>Best paid manager.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sign up at 1password.com.</li><li>Create master password — STRONG.</li><li>Save Secret Key.</li><li>Install browser extension.</li><li>Install on phone.</li><li>Add accounts gradually.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family plan</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$5/month for 5 people.</li><li>Share Netflix, Wifi passwords.</li><li>Each has private vault.</li><li>Adult kids manage senior parents.</li><li>Recovery if forgotten.</li><li>Senior best path.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Auto-fill</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Login pages.</li><li>1Password fills it.</li><li>Tap to use.</li><li>No remembering.</li><li>No retyping.</li><li>Senior big win.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch Tower</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Alerts compromised passwords.</li><li>Reuse warnings.</li><li>Weak passwords listed.</li><li>Senior security review.</li><li>Fix proactively.</li><li>Free with subscription.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Bitwarden free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bitwarden free — basic.</li><li>1Password — polished.</li><li>1Password better senior UI.</li><li>Worth $36/yr personal.</li><li>Family $60/yr — best deal.</li><li>Pick one.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$60/yr family = peace of mind</h3><p className="text-sm text-muted-foreground">1Password Family $60/year for 5 people = best senior digital security investment. Adult kids share senior accounts safely. Auto-fill removes typing. Watchtower alerts breaches. Don&apos;t reuse passwords. Many senior families say this saved them from fraud.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
