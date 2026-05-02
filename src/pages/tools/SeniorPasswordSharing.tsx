import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Key } from 'lucide-react';

export default function SeniorPasswordSharing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Password Sharing for Family | TekSure" description="Securely share passwords with trusted family." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Key className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Password Sharing</h1>
          <p className="text-lg text-muted-foreground">Senior trusted family.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">1Password Family</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$5/month 5 people.</li><li>Shared vaults.</li><li>Senior safe sharing.</li><li>Each member private vault too.</li><li>Worth it.</li><li>Best practice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bitwarden Family</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$40/year 6 people.</li><li>Free version individual.</li><li>Senior open source.</li><li>Cheaper.</li><li>Worth it.</li><li>Trusted.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Don&apos;t text passwords</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Texts unencrypted.</li><li>Senior hacker risk.</li><li>Use password manager share.</li><li>Or Signal encrypted.</li><li>Never email.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Critical to share</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bank.</li><li>Email.</li><li>Phone unlock.</li><li>Senior trusted only.</li><li>Adult kids typical.</li><li>Worth thinking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Don&apos;t share</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>SSN.</li><li>Credit card numbers.</li><li>Senior sensitive.</li><li>Need-to-know basis.</li><li>Limited access.</li><li>Worth caution.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Master document</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Critical accounts list.</li><li>Where to find passwords.</li><li>Senior locked safe.</li><li>Executor knows.</li><li>Free.</li><li>Critical estate.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$60 1Password Family = senior secure sharing</h3><p className="text-sm text-muted-foreground">$60/yr 1Password Family or $40/yr Bitwarden Family = senior secure password sharing trusted family. Shared vaults + private. NEVER text/email passwords. Master account list in safe with executor. Most senior estate critical step. Worth setup.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
