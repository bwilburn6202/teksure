import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function PenZuJournalAlternative() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Penzu Private Journal for Seniors | TekSure" description="Encrypted journal for senior thoughts. Penzu + alternatives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Penzu + Private Journals</h1>
          <p className="text-lg text-muted-foreground">Encrypted senior writing.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Penzu</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + Pro $50/year.</li><li>Encrypted online journal.</li><li>Multi-device.</li><li>Photos + memos.</li><li>Senior privacy.</li><li>Reliable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Day One</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iOS-focused.</li><li>$35/yr premium.</li><li>End-to-end encrypted.</li><li>Apple ecosystem.</li><li>Beautiful UI.</li><li>Senior favorite.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Journal</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free iOS 17.2+.</li><li>Built-in encryption.</li><li>Daily prompts.</li><li>Senior simple.</li><li>No subscription.</li><li>Newer option.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why encrypted</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Private thoughts.</li><li>No one sees.</li><li>Even servers can&apos;t.</li><li>Senior peace.</li><li>Google Docs less private.</li><li>Worth premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Memory benefits</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Document daily life.</li><li>Years later — read back.</li><li>Senior memory aid.</li><li>Sad days remembered.</li><li>Joy days too.</li><li>Self-knowledge.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior workflow</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Same time daily.</li><li>5-15 minutes.</li><li>Voice if easier.</li><li>No spelling pressure.</li><li>Senior process.</li><li>Build habit.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Apple Journal = encrypted senior</h3><p className="text-sm text-muted-foreground">Free Apple Journal (iOS 17.2+) = end-to-end encrypted senior reflection. Daily prompts. Photos. Voice. No subscription. Or Penzu free version. Day One $35/yr beautiful Apple ecosystem. Encryption matters for private thoughts. Pick one.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
