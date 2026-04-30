import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ScanText } from 'lucide-react';

export default function iPhoneScannerTechniquesForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPhone Scanner Techniques for Seniors | TekSure" description="Built-in iPhone scanner. Senior step-by-step Notes + Files scanning." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ScanText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPhone Scanner</h1>
          <p className="text-lg text-muted-foreground">Hidden in Notes app.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Notes app way</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Open Notes app.</li><li>New note.</li><li>Tap camera icon.</li><li>Scan Documents.</li><li>Hold over paper.</li><li>Auto-captures.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Files app way</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Open Files app.</li><li>... menu top-right.</li><li>Scan Documents.</li><li>Same scanner.</li><li>Saves to Files.</li><li>Senior choice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Multi-page</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Scan first page.</li><li>Move paper.</li><li>Auto-scans page 2.</li><li>Continue all pages.</li><li>Tap Save.</li><li>One PDF.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Save + share</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tap share icon.</li><li>Email, AirDrop, save.</li><li>Send to family.</li><li>Save to Drive.</li><li>Senior easy.</li><li>One tap.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pro tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Plain dark background.</li><li>Bright lamp.</li><li>Hold phone parallel.</li><li>Don&apos;t shadow paper.</li><li>Auto-corrects perspective.</li><li>Senior best results.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sign too</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>After scanning.</li><li>Tap markup.</li><li>Tap +.</li><li>Signature.</li><li>Place on doc.</li><li>Senior sign + send.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">iPhone scanner + sign in 60 seconds</h3><p className="text-sm text-muted-foreground">iPhone Notes scanner + signature feature replaces print-sign-fax workflow. 60-second senior workflow: scan paper → markup signature → email. Most under-used iPhone feature for seniors. No app to download. Hidden in Notes.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
