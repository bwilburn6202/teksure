import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Key } from 'lucide-react';

export default function SeniorAccountRecovery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Account Recovery for Seniors — TekSure" description="Recover locked-out accounts — Apple ID, Google, banks. Recovery contacts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Key className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Account Recovery</h1>
          <p className="text-lg text-muted-foreground">When locked out — get back in.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple ID Recovery Contact</h2><p>Settings → Apple ID → Sign-In &amp; Security. Trust family member to help.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Backup Codes</h2><p>myaccount.google.com → Security → 2-Step Verification → Backup Codes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Print backup codes</h2><p>Save in your safe. 10 one-time codes per account. Lifesavers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bank lockouts</h2><p>Visit branch in person. Bring 2 IDs. Faster than phone support.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Legacy Contact</h2><p>If you pass away, family can recover your iCloud. Set this up.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Recovery email</h2><p>Use spouse&apos;s or kid&apos;s email as backup recovery.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Set up recovery before you need it. Locked out = panic time.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
