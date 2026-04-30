import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Printer } from 'lucide-react';

export default function MobilePrintingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mobile Printing for Seniors | TekSure" description="Print from phone or tablet. Senior wireless printing guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Printer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mobile Printing</h1>
          <p className="text-lg text-muted-foreground">Print from phone.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">AirPrint (iPhone/iPad)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Built into iPhone.</li><li>Most printers support.</li><li>Tap share → Print.</li><li>Pick printer.</li><li>Free.</li><li>Senior simple.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Google Cloud Print (Android)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Discontinued 2020.</li><li>Use printer brand app.</li><li>HP Smart, Canon Print.</li><li>Free apps.</li><li>Same network.</li><li>Senior friendly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best printer 2026</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>HP DeskJet 4155e — $80.</li><li>Brother HL-L2350DW — $120.</li><li>Cheap ink models.</li><li>WiFi standard.</li><li>Mobile printing built-in.</li><li>Senior reliable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Skip ink with HP+</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>HP+ subscription $5/mo.</li><li>Ink delivered.</li><li>Never run out.</li><li>Cheaper than buying.</li><li>Senior convenience.</li><li>Worth it for many.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">No printer? Print at:</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>FedEx — upload + pickup.</li><li>Staples — same.</li><li>Library — free or cheap.</li><li>UPS Store.</li><li>Walgreens — photos.</li><li>Senior options.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Email printing</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>HP printers have email address.</li><li>Email document.</li><li>Auto prints.</li><li>From anywhere.</li><li>Senior remote print.</li><li>Magic feature.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$80 printer + AirPrint = senior easy</h3><p className="text-sm text-muted-foreground">$80 HP DeskJet + AirPrint on iPhone = print from anywhere in house. No cables. Tap + print. Senior simple. Add HP+ for hassle-free ink. Or skip printer + use FedEx/library when needed. Both senior-friendly options.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
