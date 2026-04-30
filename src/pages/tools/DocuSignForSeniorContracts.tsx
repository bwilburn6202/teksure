import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileSignature } from 'lucide-react';

export default function DocuSignForSeniorContracts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="DocuSign for Senior Contracts | TekSure" description="Sign documents online. DocuSign senior guide for contracts + forms." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileSignature className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">DocuSign</h1>
          <p className="text-lg text-muted-foreground">E-sign documents.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sign documents online.</li><li>Legal + binding.</li><li>Receive email link.</li><li>Click + sign.</li><li>Free for receivers.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sign a doc</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Email arrives.</li><li>Click &quot;Review &amp; Sign.&quot;</li><li>Read carefully.</li><li>Click signature fields.</li><li>Type or draw signature.</li><li>Submit.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No printer needed.</li><li>No fax needed.</li><li>Real estate documents.</li><li>Insurance forms.</li><li>Senior care contracts.</li><li>Save mail trips.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch out for scams</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Verify sender first.</li><li>Don&apos;t sign blindly.</li><li>Read every page.</li><li>Call sender to confirm.</li><li>Senior caution.</li><li>Scammers fake DocuSign emails.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free alternatives</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Adobe Sign.</li><li>HelloSign (Dropbox).</li><li>Apple Mail markup.</li><li>iPhone Books app.</li><li>Free for receiving.</li><li>Senior options.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPhone built-in sign</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Open PDF in Mail.</li><li>Tap markup.</li><li>Tap + → Signature.</li><li>Save signature.</li><li>Reuse on docs.</li><li>Free + senior friendly.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">E-sign = senior paperwork solved</h3><p className="text-sm text-muted-foreground">Senior contracts arriving paper era past. DocuSign + iPhone signature = no printer, no fax. Sign + send in minutes. Watch for scammers — verify sender. Most senior doc workflows now digital. Save trips to office. Senior independence preserved.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
