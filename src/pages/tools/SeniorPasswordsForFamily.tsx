import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Key } from 'lucide-react';

export default function SeniorPasswordsForFamily() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Passwords for Family for Seniors — TekSure" description="Share passwords with trusted family — for emergencies." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Key className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Passwords for Family</h1>
          <p className="text-lg text-muted-foreground">Critical for emergencies.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">1Password Family</h2><p>$5/month. Share passwords with family. Best option.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Legacy Contact</h2><p>FREE. Family accesses iCloud after death.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sealed envelope</h2><p>Old-school. Write key passwords. Seal. Tell family location.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What to share</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Bank login</li><li>Email password</li><li>Phone unlock code</li><li>Apple ID/Google account</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Trust matters</h2><p>Only one most-trusted family member. Spouse first.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Update yearly</h2><p>Passwords change. Tell trusted family of changes.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Without password access, family is locked out for months after death.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
