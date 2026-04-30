import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function GrammarlyForSeniorWriting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grammarly for Senior Writing | TekSure" description="Free grammar + spell check. Grammarly senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CheckCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grammarly</h1>
          <p className="text-lg text-muted-foreground">Spell + grammar check.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Browser extension.</li><li>Catches typos.</li><li>Grammar errors.</li><li>Tone suggestions.</li><li>Free version great.</li><li>$12/mo Premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Grammarly.com.</li><li>Add Chrome/Safari extension.</li><li>Free signup.</li><li>Auto-checks every site.</li><li>Email + Facebook + everywhere.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Confidence in writing.</li><li>Embarrassing typos caught.</li><li>Clear emails.</li><li>Family won&apos;t judge.</li><li>Senior dignity.</li><li>Free huge value.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs spellcheck</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Built-in spellcheck — basic.</li><li>Grammarly — context.</li><li>&quot;Their/there/they&apos;re.&quot;</li><li>Senior catches more.</li><li>Worth installing.</li><li>Free version sufficient.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Premium</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$12/month.</li><li>Tone suggestions.</li><li>Plagiarism check.</li><li>Better grammar.</li><li>Senior optional.</li><li>Free is plenty.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Privacy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Reads what you type.</li><li>Don&apos;t use on banking.</li><li>Disable specific sites.</li><li>Senior boundary.</li><li>Reasonable for free.</li><li>Read terms.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Grammarly = senior writing dignity</h3><p className="text-sm text-muted-foreground">Free Grammarly Chrome extension catches typos + grammar in emails, Facebook, anywhere. Senior writes confidently — embarrassing mistakes flagged. Don&apos;t let typos undermine your messages to family. Free forever. 30-second install.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
